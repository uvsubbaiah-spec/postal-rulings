// Reads the CGHS empanelled hospitals data and sends it to DakSi.
// Runs nightly from GitHub Actions (.github/workflows/cghs-nightly.yml), or on
// any computer / server with Node 18+:  CGHS_PUSH_KEY=... node cghs-push.mjs
const BACKEND = process.env.DAKSI_BACKEND || 'https://script.google.com/macros/s/AKfycbzOgdHHSat3LJS7cM1HfLXtQ0ntjvMwxLLwxjOciRepbtIN66B6BwnYDYcjm4cGR_bB6w/exec';
const KEY = process.env.CGHS_PUSH_KEY;
const HOSTS = ['https://cghs.mohfw.gov.in', 'https://www.cghs.mohfw.gov.in'];
const PAGE = '/AHIMSG5/hissso/Login?slug=empanelled-hospitals';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36';

if (!KEY) { console.error('CGHS_PUSH_KEY is not set (GitHub: Settings → Secrets and variables → Actions).'); process.exit(1); }

let host = '', cookie = '';
async function get(path, tries = 3) {
  let last;
  for (let t = 0; t < tries; t++) {
    try {
      const r = await fetch(host + path, { headers: { 'User-Agent': UA, 'Accept': 'application/json, text/javascript, */*; q=0.01',
        'X-Requested-With': 'XMLHttpRequest', 'Referer': host + PAGE, ...(cookie ? { Cookie: cookie } : {}) }, signal: AbortSignal.timeout(60000) });
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return await r.json();
    } catch (e) { last = e; await new Promise(s => setTimeout(s, 3000 * (t + 1))); }
  }
  throw last;
}

for (const h of HOSTS) {
  try {
    const r = await fetch(h + PAGE, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(30000) });
    cookie = (r.headers.getSetCookie ? r.headers.getSetCookie() : [r.headers.get('set-cookie') || '']).map(c => c.split(';')[0]).filter(Boolean).join('; ');
    host = h; console.log('Reached', h, '(HTTP ' + r.status + ')'); break;
  } catch (e) { console.log('Cannot reach', h + ':', e.cause?.code || e.message); }
}
if (!host) { console.error('\nThe CGHS site cannot be reached from this server. GitHub\'s servers are outside India; see DEPLOY-CGHS.txt for an India-based option.'); process.exit(2); }

const states = (await get('/AHIMSG5/hislogin/getStatesLgnFtr')).stateList || [];
if (!states.length) { console.error('The CGHS site returned no states.'); process.exit(3); }
const hospitals = [], cities = [];
for (const s of states) {
  try { ((await get('/AHIMSG5/hislogin/getCitiesByStateLgnFtr?stateCode=' + encodeURIComponent(s.stateCode))).cityList || [])
    .forEach(c => cities.push({ cityId: c.cityId, cityName: c.cityName, stateCode: s.stateCode })); } catch (e) {}
  let list = [];
  for (const p of ['status=&category=0', 'status=1&category=0', 'status=1&category=']) {
    try { list = (await get('/AHIMSG5/hislogin/getEmpanelledHospitalsLgnFtr?stateCode=' + encodeURIComponent(s.stateCode) + '&cityCode=&tier=&' + p)).hospitalList || []; } catch (e) {}
    if (list.length) break;
  }
  hospitals.push(...list);
  console.log(String(s.stateName).padEnd(32), list.length);
}
console.log('\nTotal hospitals:', hospitals.length);

const r = await fetch(BACKEND, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' },
  body: JSON.stringify({ action: 'cghsPush', key: KEY, hospitals, states, cities }), redirect: 'follow' });
const txt = await r.text();
let d = null; try { d = JSON.parse(txt); } catch (e) {}
if (!d || !d.ok) { console.error('DakSi did not accept the update:', d ? d.error : txt.slice(0, 300)); process.exit(4); }
console.log('DakSi updated:', d.hospitals, 'hospitals.');

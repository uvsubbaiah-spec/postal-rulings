// ఈ-పద వినోదం — offline support.
// The app shell is served from cache; the blog feed and puzzles.json are fetched fresh and the last copy is kept for offline use.
const VERSION = 'epv-0.27';
const SHELL = ['./', 'index.html', 'rain.webp', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('epv-') && k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function keep(req, res) {
  if (res && (res.ok || res.type === 'opaque')) {
    const copy = res.clone();
    caches.open(VERSION).then((c) => c.put(req, copy));
  }
  return res;
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // the Android app file is always fetched fresh and never kept in the offline store
  if (url.pathname.endsWith('.apk')) return;
  const isFeed = url.hostname === 'telugupadavinodam.blogspot.com' && url.pathname.startsWith('/feeds/');
  const isData = url.origin === self.location.origin && (url.pathname.endsWith('/puzzles.json') || url.pathname.endsWith('/config.json'));
  const isFont = url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';

  // Fresh first, cached copy when offline
  if (isFeed || isData || req.mode === 'navigate') {
    // the page itself is always checked with the server (GitHub Pages lets browsers reuse it for 10 minutes otherwise)
    const fresh = req.mode === 'navigate' ? fetch(req.url, { cache: 'no-cache', credentials: 'same-origin' }) : fetch(req);
    e.respondWith(
      fresh.then((res) => keep(req, res)).catch(() =>
        caches.match(req, { ignoreSearch: req.mode === 'navigate' }).then((hit) => hit || (req.mode === 'navigate' ? caches.match('index.html') : Response.error()))
      )
    );
    return;
  }
  // Cache first for the app's own files and fonts
  if (url.origin === self.location.origin || isFont) {
    e.respondWith(caches.match(req).then((hit) => hit || fetch(req).then((res) => keep(req, res))));
  }
});

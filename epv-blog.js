/* \u0c08-\u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02 in the blog: loaded by the blog theme (telugupadavinodam.blogspot.com); version 0.27 */
(function () {
  if (window.EPV_BOOTED || window.EPV_GAVE_UP || !window.EPV_IN_BLOG) return; window.EPV_BOOTED = true;
  var CSS = ":root{color-scheme:light;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}\n[hidden]{display:none!important}\nimg{max-width:100%}\n/* Layout: one phone-width column, a screen per view, tab bar at the foot; cream paper, kumkum red, marigold */\n:root{\n  --bg:#FBF3E4; --surface:#FFFBF3; --ink:#2A1F17; --muted:#6B5849; --line:#EADBC4;\n  --primary:#8E2C2C; --on-primary:#FFFFFF; --title:#8E2C2C;\n  --gold:#F2A93B; --gold-tint:#FCE8C3; --rose:#F7E1D7; --leaf-tint:#E1EDE2; --leaf-ink:#2F5A3E;\n  --chip:#F1E4CF; --off:#A08C7A;\n  --cell:#97CEFA; --grid-line:#2A1F17; --num:#000000; --block:#2E2A3A;\n  --key:#FFFBF3; --key-border:#E3D2B8; --clue-bg:#FCE8C3; --done:#7A6656; --wrong:#A8360B; --wrong-bg:#FADBD0;\n  --toast-bg:#2A1F17; --toast-ink:#FFF6E8; --pill-bg:#FCE8C3; --pill-ink:#6E1F1F;\n  --hero:#8E2C2C; --hero-ink:#FFF6E8; --hero-sub:#F6DCC8; --hero-deep:#6E1F1F;\n  --shadow:0 6px 18px rgba(90,50,20,.09);\n  --accent:#F2A93B; --on-accent:#2A1F17;\n  --word:color-mix(in srgb, var(--accent) 38%, var(--cell));\n  --i-halo:#FCE8C3; --i-ring:#E9C27D; --i-ink:#2A1F17; --i-maroon:#8E2C2C; --i-clay:#D9644A; --i-gold:#F2A93B; --i-cream:#FFFBF3; --i-leaf:#6FA27A; --i-chai:#B5733A; --i-steam:#C9A98A; --i-glow:#FFE7A3; --i-glow-op:.75; --i-star-op:0;\n  --b-halo:#F2A93B; --b-op1:0; --b-op2:.16; --b-ray:#D9644A; --b-glass:#FFF1C9; --b-line:#2A1F17; --b-fil:#D9644A; --b-base:#A08C7A;\n  --font-ui:'Anek Telugu','Noto Sans Telugu',system-ui,sans-serif;\n  --font-head:'Ramabhadra','Anek Telugu',sans-serif;\n  --font-display:'Tenali Ramakrishna','Ramabhadra','Anek Telugu',sans-serif;\n  --font-grid:var(--font-ui); --size-mult:1;\n}\n@media (prefers-color-scheme: dark){\n  :root:not([data-theme=\"light\"]){\n    --bg:#1E1714; --surface:#2A211C; --ink:#F5EBDD; --muted:#C4B3A0; --line:#3D312A;\n    --primary:#F2A93B; --on-primary:#2A1F17; --title:#F2A93B;\n    --gold:#F2A93B; --gold-tint:#3A2E26; --rose:#3A2A26; --leaf-tint:#24352A; --leaf-ink:#A8D3B2;\n    --chip:#3A2E26; --off:#8A7563;\n    --cell:#23455E; --grid-line:#120D0B; --num:#D6E8F7; --block:#120D0B;\n    --key:#352A23; --key-border:#4A3B31; --clue-bg:#33281F; --done:#A8978A; --wrong:#FF9A76; --wrong-bg:#4E2A20;\n    --toast-bg:#F5EBDD; --toast-ink:#2A1F17; --pill-bg:#3A2E26; --pill-ink:#F2A93B;\n    --hero:#3A2420; --hero-ink:#F5EBDD; --hero-sub:#D8C8B5; --hero-deep:#24150F;\n    --shadow:0 6px 18px rgba(0,0,0,.35);\n    --i-halo:#33281F; --i-ring:#5A4738; --i-ink:#120D0B; --i-maroon:#C2504A; --i-clay:#E57B5E; --i-gold:#F7BC55; --i-cream:#F5EBDD; --i-leaf:#7DB389; --i-chai:#C88A4E; --i-steam:#9C8672; --i-glow:#FFD86B; --i-glow-op:.32; --i-star-op:1;\n    --b-halo:#FFD86B; --b-op1:.26; --b-op2:.42; --b-ray:#F7BC55; --b-glass:#FFE38A; --b-line:#1E1714; --b-fil:#E5502F; --b-base:#C4B3A0;\n    color-scheme:dark;\n  }\n}\n:root[data-theme=\"dark\"]{\n  --bg:#1E1714; --surface:#2A211C; --ink:#F5EBDD; --muted:#C4B3A0; --line:#3D312A;\n  --primary:#F2A93B; --on-primary:#2A1F17; --title:#F2A93B;\n  --gold:#F2A93B; --gold-tint:#3A2E26; --rose:#3A2A26; --leaf-tint:#24352A; --leaf-ink:#A8D3B2;\n  --chip:#3A2E26; --off:#8A7563;\n  --cell:#23455E; --grid-line:#120D0B; --num:#D6E8F7; --block:#120D0B;\n  --key:#352A23; --key-border:#4A3B31; --clue-bg:#33281F; --done:#A8978A; --wrong:#FF9A76; --wrong-bg:#4E2A20;\n  --toast-bg:#F5EBDD; --toast-ink:#2A1F17; --pill-bg:#3A2E26; --pill-ink:#F2A93B;\n  --hero:#3A2420; --hero-ink:#F5EBDD; --hero-sub:#D8C8B5; --hero-deep:#24150F;\n  --shadow:0 6px 18px rgba(0,0,0,.35);\n  --i-halo:#33281F; --i-ring:#5A4738; --i-ink:#120D0B; --i-maroon:#C2504A; --i-clay:#E57B5E; --i-gold:#F7BC55; --i-cream:#F5EBDD; --i-leaf:#7DB389; --i-chai:#C88A4E; --i-steam:#9C8672; --i-glow:#FFD86B; --i-glow-op:.32; --i-star-op:1;\n  --b-halo:#FFD86B; --b-op1:.26; --b-op2:.42; --b-ray:#F7BC55; --b-glass:#FFE38A; --b-line:#1E1714; --b-fil:#E5502F; --b-base:#C4B3A0;\n  color-scheme:dark;\n}\n/* The app's own theme choice (Settings) wins over the system theme */\n:root[data-app-theme=\"cozy\"]{\n  --bg:#FBF3E4; --surface:#FFFBF3; --ink:#2A1F17; --muted:#6B5849; --line:#EADBC4;\n  --primary:#8E2C2C; --on-primary:#FFFFFF; --title:#8E2C2C;\n  --gold:#F2A93B; --gold-tint:#FCE8C3; --rose:#F7E1D7; --leaf-tint:#E1EDE2; --leaf-ink:#2F5A3E;\n  --chip:#F1E4CF; --off:#A08C7A;\n  --cell:#97CEFA; --grid-line:#2A1F17; --num:#000000; --block:#2E2A3A;\n  --key:#FFFBF3; --key-border:#E3D2B8; --clue-bg:#FCE8C3; --done:#7A6656; --wrong:#A8360B; --wrong-bg:#FADBD0;\n  --toast-bg:#2A1F17; --toast-ink:#FFF6E8; --pill-bg:#FCE8C3; --pill-ink:#6E1F1F;\n  --hero:#8E2C2C; --hero-ink:#FFF6E8; --hero-sub:#F6DCC8; --hero-deep:#6E1F1F;\n  --shadow:0 6px 18px rgba(90,50,20,.09);\n  --i-halo:#FCE8C3; --i-ring:#E9C27D; --i-ink:#2A1F17; --i-maroon:#8E2C2C; --i-clay:#D9644A; --i-gold:#F2A93B; --i-cream:#FFFBF3; --i-leaf:#6FA27A; --i-chai:#B5733A; --i-steam:#C9A98A; --i-glow:#FFE7A3; --i-glow-op:.75; --i-star-op:0;\n  --b-halo:#F2A93B; --b-op1:0; --b-op2:.16; --b-ray:#D9644A; --b-glass:#FFF1C9; --b-line:#2A1F17; --b-fil:#D9644A; --b-base:#A08C7A;\n  color-scheme:light;\n}\n:root[data-app-theme=\"night\"]{\n  --bg:#1E1714; --surface:#2A211C; --ink:#F5EBDD; --muted:#C4B3A0; --line:#3D312A;\n  --primary:#F2A93B; --on-primary:#2A1F17; --title:#F2A93B;\n  --gold:#F2A93B; --gold-tint:#3A2E26; --rose:#3A2A26; --leaf-tint:#24352A; --leaf-ink:#A8D3B2;\n  --chip:#3A2E26; --off:#8A7563;\n  --cell:#23455E; --grid-line:#120D0B; --num:#D6E8F7; --block:#120D0B;\n  --key:#352A23; --key-border:#4A3B31; --clue-bg:#33281F; --done:#A8978A; --wrong:#FF9A76; --wrong-bg:#4E2A20;\n  --toast-bg:#F5EBDD; --toast-ink:#2A1F17; --pill-bg:#3A2E26; --pill-ink:#F2A93B;\n  --hero:#3A2420; --hero-ink:#F5EBDD; --hero-sub:#D8C8B5; --hero-deep:#24150F;\n  --shadow:0 6px 18px rgba(0,0,0,.35);\n  --i-halo:#33281F; --i-ring:#5A4738; --i-ink:#120D0B; --i-maroon:#C2504A; --i-clay:#E57B5E; --i-gold:#F7BC55; --i-cream:#F5EBDD; --i-leaf:#7DB389; --i-chai:#C88A4E; --i-steam:#9C8672; --i-glow:#FFD86B; --i-glow-op:.32; --i-star-op:1;\n  --b-halo:#FFD86B; --b-op1:.26; --b-op2:.42; --b-ray:#F7BC55; --b-glass:#FFE38A; --b-line:#1E1714; --b-fil:#E5502F; --b-base:#C4B3A0;\n  color-scheme:dark;\n}\n:root[data-app-theme=\"white\"]{\n  --bg:#F3F4F6; --surface:#FFFFFF; --ink:#15171C; --muted:#565C68; --line:#DADDE3;\n  --primary:#2D46B9; --on-primary:#FFFFFF; --title:#2D46B9;\n  --gold:#F5B82E; --gold-tint:#E8ECFA; --rose:#EEF1FB; --leaf-tint:#E3F1E6; --leaf-ink:#22543A;\n  --chip:#E8EAF0; --off:#8A909B;\n  --cell:#97CEFA; --grid-line:#15171C; --num:#000000; --block:#15171C;\n  --key:#FFFFFF; --key-border:#D3D7DF; --clue-bg:#EEF1FB; --done:#6B717C; --wrong:#A8360B; --wrong-bg:#FCE3DA;\n  --toast-bg:#15171C; --toast-ink:#FFFFFF; --pill-bg:#E8ECFA; --pill-ink:#1F338F;\n  --hero:#2D46B9; --hero-ink:#FFFFFF; --hero-sub:#DDE3FF; --hero-deep:#1F338F;\n  --shadow:0 6px 18px rgba(20,24,40,.08);\n  --i-halo:#FCE8C3; --i-ring:#E9C27D; --i-ink:#2A1F17; --i-maroon:#8E2C2C; --i-clay:#D9644A; --i-gold:#F2A93B; --i-cream:#FFFBF3; --i-leaf:#6FA27A; --i-chai:#B5733A; --i-steam:#C9A98A; --i-glow:#FFE7A3; --i-glow-op:.75; --i-star-op:0;\n  --b-halo:#F2A93B; --b-op1:0; --b-op2:.16; --b-ray:#D9644A; --b-glass:#FFF1C9; --b-line:#2A1F17; --b-fil:#D9644A; --b-base:#A08C7A;\n  color-scheme:light;\n}\n\nhtml{box-sizing:border-box;height:100%}\n*,*::before,*::after{box-sizing:inherit}\nbody{height:100%;margin:0;background:var(--bg);color:var(--ink);font-family:var(--font-ui);font-size:16px;line-height:1.5;-webkit-tap-highlight-color:transparent}\nbutton,input{font:inherit;color:inherit}\nbutton{cursor:pointer}\na{color:var(--primary)}\n:focus-visible{outline:3px solid var(--accent);outline-offset:2px}\nh1,h2,h3{text-wrap:balance}\n\n#app{height:100%;max-width:520px;margin:0 auto;display:flex;flex-direction:column;background:var(--bg)}\n#view{flex:1;min-height:0;overflow-y:auto;display:flex;flex-direction:column}\n#view.is-fixed{overflow:hidden}\n.gutter{padding-left:max(16px,env(safe-area-inset-left,0px));padding-right:max(16px,env(safe-area-inset-right,0px))}\n.page{display:flex;flex-direction:column;gap:22px;padding-block:18px 28px}\n\n/* headings */\n.apphead{display:flex;align-items:center;justify-content:space-between;gap:12px}\n.apptitle{margin:0;font-family:var(--font-display);font-weight:400;font-size:40px;line-height:1.1;color:var(--title)}\n.appsub{margin:0;font-size:14px;color:var(--muted)}\n.sec{display:flex;flex-direction:column;gap:10px}\n.sec-h{margin:0;font-family:var(--font-head);font-weight:400;font-size:18px;line-height:1.4}\n.sec-row{display:flex;align-items:center;justify-content:space-between;gap:8px}\n.note{margin:0;font-size:13px;line-height:1.55;color:var(--muted)}\n\n.iconbtn{width:46px;height:46px;flex-shrink:0;display:inline-flex;align-items:center;justify-content:center;border:0;border-radius:999px;background:var(--surface);color:var(--ink);box-shadow:var(--shadow);text-decoration:none}\n.ghostbtn{width:44px;height:44px;flex-shrink:0;display:inline-flex;align-items:center;justify-content:center;border:0;border-radius:12px;background:transparent;color:var(--ink);text-decoration:none;padding:0}\n\n/* hero */\n.hero{position:relative;overflow:hidden;display:flex;flex-direction:column;gap:16px;padding:20px;border-radius:24px;background:var(--hero);color:var(--hero-ink);box-shadow:inset 0 0 0 1px rgba(242,169,59,.45),0 12px 28px rgba(110,31,31,.25)}\n.hero-top{display:flex;justify-content:space-between;gap:16px}\n.hero-txt{display:flex;flex-direction:column;gap:4px;min-width:0}\n.badge{align-self:flex-start;font-size:12px;font-weight:700;padding:3px 10px;border-radius:999px;background:var(--gold);color:#2A1F17}\n.hero h2{margin:4px 0 0;font-family:var(--font-head);font-weight:400;font-size:23px;line-height:1.35}\n.hero p{margin:0;font-size:14px;color:var(--hero-sub)}\n.minigrid{flex-shrink:0;align-self:flex-start;display:grid;grid-template-columns:repeat(7,12px);gap:2px;padding:4px;border-radius:10px;background:var(--hero-deep);transform:rotate(4deg)}\n.minigrid span{width:12px;height:12px;border-radius:1px;background:#FFF6E8}\n.minigrid span.on{background:var(--gold)}\n.minigrid span.mb{background:var(--block) url(https://uvsubbaiah-spec.github.io/e-padavinodam/rain.webp) center/cover}\nbody.no-rain .minigrid span.mb{background-image:none}\n.prog{display:flex;flex-direction:column;gap:6px}\n.prog-row{display:flex;justify-content:space-between;font-size:13px;color:var(--hero-sub)}\n.bar{height:8px;border-radius:999px;background:var(--hero-deep);overflow:hidden}\n.bar i{display:block;height:8px;border-radius:999px;background:var(--gold)}\n.cta{display:flex;align-items:center;justify-content:center;gap:8px;height:50px;border:0;border-radius:14px;background:var(--gold);color:#2A1F17;font-size:16px;font-weight:700;text-decoration:none;box-shadow:inset 0 -3px 0 rgba(0,0,0,.14)}\n.muggu{position:absolute;right:-44px;bottom:-48px;opacity:.22;pointer-events:none}\n.hero > :not(.muggu){position:relative}\n\n/* lists and cards */\n.card{display:flex;flex-direction:column;border-radius:22px;background:var(--surface);box-shadow:var(--shadow);overflow:hidden}\n.rowlink{display:flex;align-items:center;gap:14px;min-height:64px;padding:12px 16px;color:var(--ink);text-decoration:none;border:0;background:transparent;width:100%;text-align:left}\n.rowlink + .rowlink{border-top:1px dashed var(--line)}\n.rowlink .t{flex:1;min-width:0;display:flex;flex-direction:column;gap:1px}\n.rowlink .t b{font-size:16px;font-weight:600;line-height:1.4}\n.rowlink .t small{font-size:13px;color:var(--muted)}\n.tile{width:46px;height:46px;flex-shrink:0;display:flex;align-items:center;justify-content:center;border-radius:14px;background:var(--leaf-tint);color:var(--leaf-ink)}\n.pill{flex-shrink:0;font-size:12px;font-weight:700;padding:4px 10px;border-radius:999px}\n.pill.mid{background:var(--gold-tint);color:var(--pill-ink)}\n.pill.ok{background:var(--leaf-tint);color:var(--leaf-ink)}\n.pill.new{background:var(--chip);color:var(--ink)}\n.chips{display:flex;gap:10px;overflow-x:auto;margin-inline:calc(-1 * max(16px,env(safe-area-inset-left,0px)));padding:0 max(16px,env(safe-area-inset-left,0px)) 6px}\n.mchip{flex:0 0 auto;display:flex;flex-direction:column;gap:1px;min-width:108px;padding:12px 14px;border-radius:18px;color:var(--ink);text-decoration:none}\n.mchip b{font-size:15px;font-weight:700}\n.mchip small{font-size:13px;color:var(--muted)}\n.mchip:nth-child(3n+1){background:var(--gold-tint)}\n.mchip:nth-child(3n+2){background:var(--rose)}\n.mchip:nth-child(3n){background:var(--leaf-tint)}\n.tip{display:flex;align-items:center;gap:14px;padding:14px 16px;border-radius:20px;background:var(--rose)}\n.tip p{margin:0;font-size:14px;line-height:1.55}\n.tip .ic{width:42px;height:42px;flex-shrink:0;display:flex;align-items:center;justify-content:center;border-radius:12px;background:var(--primary);color:var(--on-primary)}\n.search{display:flex;flex-direction:column;gap:6px}\n.search label{font-size:13px;font-weight:600;color:var(--muted)}\n.search .box{display:flex;align-items:center;gap:8px;height:50px;padding:0 16px;border-radius:999px;background:var(--surface);border:1px solid var(--line);box-shadow:var(--shadow)}\n.search input{flex:1;min-width:0;height:46px;border:0;background:transparent;outline:none;font-size:16px}\n\n/* tab bar */\n#tabs{flex-shrink:0;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));padding:6px 8px 8px;background:var(--surface);border-top:1px solid var(--line)}\n#tabs a{display:flex;flex-direction:column;align-items:center;gap:3px;padding:4px 0;color:var(--muted);text-decoration:none;font-size:12px;font-weight:500}\n#tabs a span{display:flex;align-items:center;justify-content:center;width:60px;height:32px;border-radius:999px}\n#tabs a[aria-current=\"page\"]{color:var(--primary);font-weight:700}\n#tabs a[aria-current=\"page\"] span{background:var(--gold-tint)}\n\n/* puzzle screen */\n.play{flex:1;min-height:0;display:flex;flex-direction:column}\n.pbar{flex-shrink:0;display:flex;align-items:center;gap:2px;height:56px;padding-left:max(6px,env(safe-area-inset-left,0px));padding-right:max(6px,env(safe-area-inset-right,0px));background:var(--surface);border-bottom:1px solid var(--line)}\n.pbar .t{flex:1;min-width:0}\n.pbar h1{margin:0;font-family:var(--font-head);font-weight:400;font-size:17px;line-height:1.35;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.pbar p{margin:0;font-size:12px;line-height:1.3;color:var(--muted)}\n.ptools{flex-shrink:0;display:flex;align-items:center;justify-content:space-between;gap:8px;height:54px}\n.seg{display:grid;grid-auto-flow:column;grid-auto-columns:1fr;gap:2px;padding:3px;border-radius:999px;background:var(--chip)}\n.seg button{min-height:36px;padding:0 14px;border:0;border-radius:999px;background:transparent;font-size:14px;font-weight:500;color:var(--ink)}\n.seg button[aria-pressed=\"true\"]{background:var(--primary);color:var(--on-primary);font-weight:700}\n.seg.wide button{min-height:42px}\n.timer{display:flex;align-items:center;gap:5px;font-size:15px;font-weight:600;color:var(--muted);font-variant-numeric:tabular-nums}\n.hint{display:flex;align-items:center;gap:4px;height:44px;padding:0 14px 0 4px;border:0;border-radius:999px;background:var(--pill-bg);color:var(--pill-ink);font-size:14px;font-weight:700}\n.pmid{flex:1;min-height:0;overflow-y:auto;display:flex;flex-direction:column;gap:12px;padding-bottom:10px}\n.grid{--gw:min(calc(100vw - 32px),460px,max(250px,calc(100dvh - 520px)));width:var(--gw);max-width:100%;margin-inline:auto;display:grid;grid-template-columns:repeat(var(--n),minmax(0,1fr));gap:2px;padding:2px;border-radius:10px;overflow:hidden;background:var(--grid-line);box-shadow:var(--shadow)}\n.cell{position:relative;aspect-ratio:1;min-width:0;margin:0;padding:0;border:0;display:flex;align-items:center;justify-content:center;background:var(--cell);color:var(--ink);font-family:var(--font-grid);font-weight:600;line-height:1;font-size:calc(var(--gw) / var(--n) * .40 * var(--size-mult))}\n.cell .num{position:absolute;top:3px;left:4px;font-family:var(--font-ui);font-weight:700;font-size:max(9px,calc(var(--gw) / var(--n) * .19));color:var(--num)}\n.cell .ltr{padding-top:.18em}\n.cell.is-word{background:var(--word)}\n.cell.is-wrong{background:var(--wrong-bg);color:var(--wrong)}\n.cell.is-cur{background:var(--accent);color:var(--on-accent);box-shadow:inset 0 0 0 2px rgba(0,0,0,.18)}\n.cell.is-cur .num{color:var(--on-accent)}\n.blk{aspect-ratio:1;background:var(--block) url(https://uvsubbaiah-spec.github.io/e-padavinodam/rain.webp) center/cover no-repeat}\nbody.no-rain .blk{background-image:none}\n.cluebar{flex-shrink:0;display:flex;align-items:stretch;min-height:58px;border-radius:16px;background:var(--clue-bg)}\n.cluebar .mid{flex:1;min-width:0;display:flex;align-items:center;gap:10px;padding:6px 2px;border:0;background:transparent;text-align:left;color:var(--ink)}\n.tag{flex-shrink:0;padding:4px 10px;border-radius:999px;font-size:13px;font-weight:700;background:var(--primary);color:var(--on-primary)}\n.cluebar .txt{font-size:15px;font-weight:500;line-height:1.4}\n.ppanel{flex-shrink:0;display:flex;flex-direction:column;gap:6px;padding-top:8px;padding-bottom:10px;background:var(--bg);border-top:1px solid var(--line)}\n.strip{display:flex;gap:4px;overflow-x:auto;min-height:46px}\n.strip .note2{flex:1;display:flex;align-items:center;padding:0 12px;border-radius:12px;font-size:14px;font-weight:600;background:color-mix(in srgb, var(--accent) 25%, var(--key))}\n.k{min-width:0;height:44px;padding:0;border:1px solid var(--key-border);border-radius:12px;background:var(--key);color:var(--ink);font-size:19px;font-weight:500;box-shadow:inset 0 -2px 0 var(--key-border)}\n.strip .k{flex:0 0 auto;min-width:46px;padding:0 6px;font-weight:600}\n.strip.guni .k{background:color-mix(in srgb, var(--accent) 22%, var(--key))}\n.k[aria-pressed=\"true\"]{background:var(--accent);border-color:var(--accent);color:var(--on-accent)}\n.keys{display:grid;grid-template-columns:repeat(8,minmax(0,1fr));gap:4px}\n.acts{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px}\n.acts .k{display:flex;align-items:center;justify-content:center;gap:4px;font-size:14px;font-weight:700;background:var(--chip)}\n.cluelist{height:268px;overflow-y:auto;display:flex;flex-direction:column;gap:2px}\n.clue{display:flex;flex-shrink:0;align-items:flex-start;gap:10px;width:100%;min-height:46px;padding:9px 10px;border:0;border-radius:12px;background:transparent;text-align:left;color:var(--ink)}\n.clue .n{width:26px;flex-shrink:0;font-weight:700;font-size:14px;line-height:1.55}\n.clue .x{flex:1;min-width:0;overflow-wrap:anywhere;font-size:15px;line-height:1.5}\n.clue.is-on{background:var(--word)}\n.clue.is-done .x{color:var(--done);text-decoration:line-through}\n.tabrow{display:flex;align-items:center;gap:6px}\n.tabrow .seg{flex:0 0 auto}\n.phonekb{display:flex;flex-direction:column;gap:8px;padding:6px 0}\n.wide-btn{display:flex;align-items:center;justify-content:center;gap:8px;min-height:52px;border:0;border-radius:16px;font-size:16px;font-weight:700;text-decoration:none;padding:0 18px}\n.wide-btn.pri{background:var(--primary);color:var(--on-primary)}\n.wide-btn.sec{flex-direction:row;background:var(--gold);color:#2A1F17;box-shadow:inset 0 -3px 0 rgba(0,0,0,.12)}\n.wide-btn.ter{background:var(--chip);color:var(--ink)}\n.wide-btn.link{background:transparent;color:var(--primary);min-height:44px}\n\n/* settings */\n.box{display:flex;flex-direction:column;padding:16px;border-radius:22px;background:var(--surface);box-shadow:var(--shadow);gap:16px}\n.box h3{margin:0;font-size:15px;font-weight:600}\n.fld{display:flex;flex-direction:column;gap:8px}\n.sw-row,.radio{display:flex;align-items:center;gap:12px;width:100%;min-height:62px;padding:8px 0;border:0;background:transparent;text-align:left;color:var(--ink)}\n.box .sw-row + .sw-row,.box .radio + .radio{border-top:1px dashed var(--line)}\n.sw-row .t,.radio .t{flex:1;display:flex;flex-direction:column;gap:1px}\n.sw-row .t b,.radio .t b{font-size:15px;font-weight:600}\n.sw-row .t small,.radio .t small{font-size:13px;line-height:1.45;color:var(--muted)}\n.sw{position:relative;flex-shrink:0;width:50px;height:30px;border-radius:999px;background:var(--off);transition:background .15s}\n.sw::after{content:\"\";position:absolute;top:4px;left:4px;width:22px;height:22px;border-radius:50%;background:#FFFFFF;transition:left .15s}\n[aria-pressed=\"true\"] > .sw{background:var(--primary)}\n[aria-pressed=\"true\"] > .sw::after{left:24px}\n.dot{flex-shrink:0;width:22px;height:22px;border-radius:50%;border:2px solid var(--off)}\n[aria-pressed=\"true\"] > .dot{border:7px solid var(--primary)}\n.swatches{display:flex;gap:16px;padding-left:4px}\n.swatch{width:46px;height:46px;border-radius:50%;border:0;padding:0}\n.swatch[aria-pressed=\"true\"]{box-shadow:0 0 0 3px var(--surface),0 0 0 5px var(--ink)}\n.font{display:flex;align-items:center;gap:12px;width:100%;min-height:62px;padding:8px 14px;border-radius:16px;border:1px solid var(--line);background:var(--surface);text-align:left;color:var(--ink)}\n.font[aria-pressed=\"true\"]{border:2px solid var(--primary);background:var(--gold-tint)}\n.font .t{flex:1;display:flex;flex-direction:column}\n.font .s{font-size:22px;line-height:1.4}\n.font small{font-size:12px;color:var(--muted)}\n.rainsample{width:42px;height:42px;border-radius:10px;flex-shrink:0}\n.soon{margin:0;padding-left:20px;display:flex;flex-direction:column;gap:4px;font-size:14px;color:var(--muted)}\n\n/* finish screen */\n.done{align-items:center;text-align:center;gap:14px}\n.done .art{width:min(300px,78vw);max-width:100%}\n.done .art svg{display:block;width:100%;height:auto}\n.dots{display:flex;justify-content:center}\n.dots button{width:44px;height:36px;display:flex;align-items:center;justify-content:center;border:0;background:transparent;padding:0}\n.dots i{display:block;width:9px;height:9px;border-radius:999px;background:var(--off)}\n.dots [aria-pressed=\"true\"] i{width:24px;background:var(--primary)}\n.cheer{margin:0;font-family:var(--font-display);font-weight:400;font-size:54px;line-height:1.1;color:var(--title)}\n.stats{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;width:100%}\n.stat{display:flex;flex-direction:column;align-items:center;gap:2px;padding:12px;border-radius:20px;background:var(--surface);box-shadow:var(--shadow)}\n.stat small{font-size:13px;color:var(--muted)}\n.stat b{font-family:var(--font-head);font-weight:400;font-size:26px;font-variant-numeric:tabular-nums}\n.btncol{display:flex;flex-direction:column;gap:10px;width:100%}\n\n/* toast */\n#toast{position:fixed;left:50%;bottom:calc(96px + env(safe-area-inset-bottom,0px));transform:translateX(-50%);width:min(440px,calc(100% - 32px));padding:12px 16px;border-radius:16px;background:var(--toast-bg);color:var(--toast-ink);font-size:14px;font-weight:500;line-height:1.5;box-shadow:0 10px 26px rgba(42,31,23,.28);z-index:20;pointer-events:none}\n\n/* bulb */\n.b-halo1{fill:var(--b-halo);opacity:var(--b-op1)} .b-halo2{fill:var(--b-halo);opacity:var(--b-op2)}\n.b-ray{stroke:var(--b-ray);fill:none;stroke-width:2.6;stroke-linecap:round}\n.b-glass{fill:var(--b-glass);stroke:var(--b-line);stroke-width:2.2;stroke-linejoin:round}\n.b-hi{stroke:#FFFFFF;fill:none;stroke-width:2.4;stroke-linecap:round;opacity:.9}\n.b-fil{stroke:var(--b-fil);fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}\n.b-base{fill:var(--b-base);stroke:var(--b-line);stroke-width:2.2}\n.b-lines{stroke:var(--b-line);stroke-width:1.6;fill:none} .b-tip{fill:var(--b-line)}\n/* illustrations */\n.f-halo{fill:var(--i-halo)} .s-ring{fill:none;stroke:var(--i-ring);stroke-width:3;stroke-dasharray:1 11;stroke-linecap:round}\n.stars{fill:var(--i-gold);opacity:var(--i-star-op)}\n.f-cream{fill:var(--i-cream)} .f-ink{fill:var(--i-ink)} .f-maroon{fill:var(--i-maroon)} .f-clay{fill:var(--i-clay)} .f-gold{fill:var(--i-gold)} .f-leaf{fill:var(--i-leaf)} .f-chai{fill:var(--i-chai)}\n.f-glow{fill:var(--i-glow);opacity:var(--i-glow-op)} .nf{fill:none}\n.s-ink{stroke:var(--i-ink)} .s-gold{stroke:var(--i-gold)} .s-clay{stroke:var(--i-clay)} .s-steam{stroke:var(--i-steam)}\n\n@media (prefers-reduced-motion: reduce){*{transition:none!important;animation:none!important}}\n\n/* admin and editor */\n.lockbtn{position:relative}\n.lockbtn.is-admin{background:var(--gold-tint);color:var(--pill-ink)}\n.hdr-btns{display:flex;gap:8px}\n.inp{width:100%;min-height:46px;padding:10px 14px;border-radius:14px;border:1px solid var(--line);background:var(--bg);color:var(--ink);font-size:16px}\n.inp:focus{outline:3px solid var(--accent);outline-offset:1px}\ntextarea.inp{min-height:110px;resize:vertical;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:13px}\n.inp.sm{min-height:40px;padding:6px 8px;border-radius:10px;font-size:15px;text-align:center}\n.lbl{font-size:13px;font-weight:600;color:var(--muted)}\n.row2{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}\n.row3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}\n.file{display:flex;flex-direction:column;gap:6px}\n.file input[type=file]{width:100%;padding:10px;border-radius:14px;border:2px dashed var(--line);background:var(--bg);color:var(--muted);font-size:14px}\n.btnrow{display:flex;flex-wrap:wrap;gap:10px}\n.btnrow .wide-btn{flex:1 1 160px}\n.wide-btn[disabled]{opacity:.55;cursor:not-allowed}\n.status{display:flex;flex-direction:column;gap:6px;padding:12px 14px;border-radius:14px;background:var(--gold-tint);font-size:14px;line-height:1.5}\n.status.err{background:var(--wrong-bg);color:var(--wrong)}\n.status.ok{background:var(--leaf-tint);color:var(--leaf-ink)}\n.steps{margin:0;padding-left:20px;display:flex;flex-direction:column;gap:4px;font-size:14px;line-height:1.55}\n.copyline{display:flex;gap:8px;align-items:center}\n.copyline code{flex:1;min-width:0;overflow-x:auto;white-space:nowrap;padding:10px 12px;border-radius:12px;background:var(--bg);border:1px solid var(--line);font-size:12.5px}\n.implist{display:flex;flex-direction:column;border-radius:16px;border:1px solid var(--line);overflow:hidden}\n.imp{display:flex;align-items:center;gap:12px;min-height:56px;padding:8px 12px;border:0;background:var(--surface);text-align:left;width:100%;color:var(--ink)}\n.imp + .imp{border-top:1px dashed var(--line)}\n.imp .t{flex:1;min-width:0;display:flex;flex-direction:column}\n.imp .t b{font-size:15px;font-weight:600}\n.imp .t small{font-size:12.5px;color:var(--muted)}\n.chk{flex-shrink:0;width:24px;height:24px;border-radius:7px;border:2px solid var(--off);display:flex;align-items:center;justify-content:center;color:var(--on-primary)}\n[aria-pressed=\"true\"] > .chk{background:var(--primary);border-color:var(--primary)}\n.mgr{display:flex;align-items:center;gap:10px;min-height:58px;padding:8px 0}\n.mgr + .mgr{border-top:1px dashed var(--line)}\n.mgr .t{flex:1;min-width:0;display:flex;flex-direction:column}\n.mgr .t b{font-size:15px;font-weight:600}\n.mgr .t small{font-size:12.5px;color:var(--muted)}\n.smallbtn{min-height:40px;padding:0 12px;border:0;border-radius:12px;background:var(--chip);color:var(--ink);font-size:13.5px;font-weight:700}\n.smallbtn.danger{background:var(--wrong-bg);color:var(--wrong)}\n.lockscreen{display:flex;flex-direction:column;align-items:center;text-align:center;gap:12px;padding:40px 8px}\n.lockscreen .big{width:84px;height:84px;border-radius:999px;display:flex;align-items:center;justify-content:center;background:var(--gold-tint);color:var(--pill-ink)}\n.ebar{flex-shrink:0;display:flex;align-items:center;gap:2px;height:56px;padding-left:max(6px,env(safe-area-inset-left,0px));padding-right:max(10px,env(safe-area-inset-right,0px));background:var(--surface);border-bottom:1px solid var(--line)}\n.ebar h1{flex:1;margin:0;font-family:var(--font-head);font-weight:400;font-size:18px}\n.egrid{--gw:min(calc(100vw - 32px),488px);width:var(--gw);max-width:100%;margin-inline:auto;display:grid;grid-template-columns:repeat(var(--n),minmax(0,1fr));gap:2px;padding:2px;border-radius:10px;background:var(--grid-line)}\n.ecell{position:relative;aspect-ratio:1;min-width:0;margin:0;padding:0;border:0;display:flex;align-items:center;justify-content:center;background:var(--cell);color:var(--ink);font-family:var(--font-grid);font-weight:600;line-height:1;font-size:calc(var(--gw) / var(--n) * .38)}\n.ecell .num{position:absolute;top:2px;left:3px;font-family:var(--font-ui);font-weight:700;font-size:max(8px,calc(var(--gw) / var(--n) * .2));color:var(--num)}\n.ecell .ltr{padding-top:.18em}\n.ecell.b{background:#1E1714}\n.ecell.b .num{color:#F5EBDD}\n.ecell.sel{box-shadow:inset 0 0 0 3px var(--accent)}\n.ecell.run{background:var(--word)}\n.ecell.miss{color:var(--wrong)}\n.cluerow{display:grid;grid-template-columns:50px minmax(0,1fr) 46px 36px 36px;gap:5px;align-items:center}\n.cluerow .plus{width:36px;height:40px;border:0;border-radius:10px;background:var(--leaf-tint);color:var(--leaf-ink);font-size:22px;font-weight:700;line-height:1}\n.cluerow .x{width:36px;height:40px;border:0;border-radius:10px;background:var(--wrong-bg);color:var(--wrong);font-size:18px;font-weight:700}\n.problems{margin:0;padding-left:20px;display:flex;flex-direction:column;gap:3px;font-size:13.5px;line-height:1.5}\n.srcimgs{display:flex;gap:8px;overflow-x:auto}\n.srcimgs img{height:140px;border-radius:10px;border:1px solid var(--line)}\n.numedit{display:flex;gap:8px;align-items:center;flex-wrap:wrap}\n.numedit .inp.sm{width:80px}\n.bignote{font-size:14px;line-height:1.6;margin:0}\n\n/* English \u2192 Telugu typing and clue fixing */\n.acts.five{grid-template-columns:repeat(5,minmax(0,1fr))}\n.acts.five .k{font-size:13px}\n.typebox{display:flex;flex-direction:column;gap:8px}\n.tl-row{display:flex;gap:8px;align-items:center}\n.tl-row .inp{flex:1;min-width:0;font-size:18px}\n.smallbtn.pri{background:var(--primary);color:var(--on-primary);min-height:46px;padding:0 18px}\n.tl-cands{display:flex;flex-wrap:wrap;gap:6px;align-items:center;min-height:46px}\n.tlc{display:inline-flex;align-items:center;gap:6px;min-height:44px;padding:0 12px;border-radius:12px;border:1px solid var(--key-border);background:var(--key);color:var(--ink);font-family:var(--font-grid);font-size:19px;font-weight:600;box-shadow:inset 0 -2px 0 var(--key-border)}\n.tlc small{font-family:var(--font-ui);font-size:11px;font-weight:700;color:var(--muted)}\n.tlc.fit{border-color:var(--accent);background:color-mix(in srgb, var(--accent) 24%, var(--key))}\ntextarea.inp.tel{font-family:var(--font-ui);font-size:17px;line-height:1.55;min-height:96px}\n.fixbox{display:flex;flex-direction:column;gap:10px}\n.hintwait{display:block;max-width:112px;font-size:12.5px;font-weight:600;line-height:1.3;text-align:right;color:var(--muted)}\n\n/* squares in the blog's style: light-blue rounded tiles with a grey border, yellow + red outline for the selected one */\n:root{--cell-border:#808080;--word:color-mix(in srgb, var(--accent) 45%, #FFFFFF)}\n@media (prefers-color-scheme: dark){:root:not([data-theme=\"light\"]){--cell-border:#5F86A6;--word:color-mix(in srgb, var(--accent) 35%, #23455E)}}\n:root[data-theme=\"dark\"]{--cell-border:#5F86A6;--word:color-mix(in srgb, var(--accent) 35%, #23455E)}\n:root[data-app-theme=\"cozy\"],:root[data-app-theme=\"white\"]{--cell-border:#808080;--word:color-mix(in srgb, var(--accent) 45%, #FFFFFF)}\n:root[data-app-theme=\"night\"]{--cell-border:#5F86A6;--word:color-mix(in srgb, var(--accent) 35%, #23455E)}\n.grid{gap:3px;padding:4px;border-radius:12px;background:var(--surface)}\n.cell{border:1.5px solid var(--cell-border);border-radius:4px}\n.cell .num{font-style:italic}\n.cell.is-cur{box-shadow:none;border:2px solid #D32F2F}\n.cell.is-cur .num{color:#8E1B13}\n.blk{border:1.5px solid var(--cell-border);border-radius:4px}\n.minigrid span{background:var(--cell)}\n.minigrid span.on{background:var(--gold)}\n.ecell{border-radius:2px}\n\n/* keyboard bar: Telugu / English switch and hide */\n.kbbar{display:flex;align-items:center;justify-content:space-between;gap:8px}\n.kbbar .seg button{min-height:36px;padding:0 16px}\n.kbbar .smallbtn{display:inline-flex;align-items:center;gap:4px;min-height:40px}\n.acts.three{grid-template-columns:repeat(3,minmax(0,1fr))}\n.kbhidden{display:flex;gap:8px;align-items:center}\n.kbhidden .wide-btn{flex:1;min-height:48px}\n.kbhidden .smallbtn{display:inline-flex;align-items:center;gap:6px;min-height:48px}\n\n/* zoom: the grid scrolls inside its own strip */\n.gridwrap{max-width:100%;overflow-x:auto;overscroll-behavior-x:contain;padding:1px 0 3px}\n.ghostbtn[disabled]{opacity:.35;cursor:default}\n.pbar h1{font-size:16px}\n\n/* the board scrolls in its own area between the top bar and the clue/keyboard area; the typing box is outside that area, so typing never moves the board */\n#view.is-fixed{overflow:hidden}\n.play{flex:1;min-height:0}\n.pbar{position:static}\n.pmid{flex:1 1 auto;min-height:0;overflow-y:auto;overscroll-behavior:contain;scroll-padding-top:8px;scroll-padding-bottom:8px;padding-bottom:12px}\n.pbottom{position:static;flex-shrink:0;display:flex;flex-direction:column;gap:8px;padding-top:8px;background:var(--bg);border-top:1px solid var(--line);box-shadow:0 -8px 18px rgba(42,31,23,.10)}\n.pbottom .ppanel{border-top:0;padding-top:0}\n\n/* answer colours as on the blog: right = grey with a green border and blue letter, wrong = gold with a red border and red letter.\n   The selected square gets a blue frame (not red), and the selected word a lavender tint with a violet border, so neither can be mistaken for a wrong answer. */\n:root{--ok-bg:#EEEEEE;--ok-bd:#008000;--ok-ink:#0000FF;--bad-bg:#FFD700;--bad-bd:#E00000;--bad-ink:#C00000;--sel:#0B57D0;--sel-bg:#FFFFFF;--word:#E4D6FF;--word-ring:#6B3FD4;--hint-ink:#D50000;--hint-bg:transparent}\n@media (prefers-color-scheme: dark){:root:not([data-theme=\"light\"]){--ok-bg:#22322A;--ok-bd:#4CC26A;--ok-ink:#A9C4FF;--bad-bg:#5E4C00;--bad-bd:#FF6B6B;--bad-ink:#FFD2D2;--sel:#FFFFFF;--sel-bg:#2E5A7C;--word:#40326F;--word-ring:#BCA6FF;--hint-ink:#FF6B6B;--hint-bg:transparent}}\n:root[data-theme=\"dark\"]{--ok-bg:#22322A;--ok-bd:#4CC26A;--ok-ink:#A9C4FF;--bad-bg:#5E4C00;--bad-bd:#FF6B6B;--bad-ink:#FFD2D2;--sel:#FFFFFF;--sel-bg:#2E5A7C;--word:#40326F;--word-ring:#BCA6FF;--hint-ink:#FF6B6B;--hint-bg:transparent}\n:root[data-app-theme=\"cozy\"],:root[data-app-theme=\"white\"]{--ok-bg:#EEEEEE;--ok-bd:#008000;--ok-ink:#0000FF;--bad-bg:#FFD700;--bad-bd:#E00000;--bad-ink:#C00000;--sel:#0B57D0;--sel-bg:#FFFFFF;--word:#E4D6FF;--word-ring:#6B3FD4;--hint-ink:#D50000;--hint-bg:transparent}\n:root[data-app-theme=\"night\"]{--ok-bg:#22322A;--ok-bd:#4CC26A;--ok-ink:#A9C4FF;--bad-bg:#5E4C00;--bad-bd:#FF6B6B;--bad-ink:#FFD2D2;--sel:#FFFFFF;--sel-bg:#2E5A7C;--word:#40326F;--word-ring:#BCA6FF;--hint-ink:#FF6B6B;--hint-bg:transparent}\n.cell.is-word{background:var(--word);box-shadow:inset 0 0 0 2px var(--word-ring)}\n.cell.is-ok{background:var(--ok-bg);border-color:var(--ok-bd);color:var(--ok-ink)}\n.cell.is-wrong{background:var(--bad-bg);border-color:var(--bad-bd);color:var(--bad-ink)}\n.cell.is-wrong .num{color:var(--bad-ink)}\n.cell.is-word.is-ok,.cell.is-word.is-wrong{box-shadow:inset 0 0 0 2px var(--word-ring)}\n.cell.is-cur{background:var(--sel-bg);color:var(--ink);border:3px solid var(--sel);box-shadow:0 0 0 2px color-mix(in srgb, var(--sel) 35%, transparent)}\n.cell.is-cur.is-ok{background:var(--ok-bg);color:var(--ok-ink)}\n.cell.is-cur.is-wrong{background:var(--bad-bg);color:var(--bad-ink)}\n.cell.is-cur .num{color:var(--num)}\n.cell.is-cur.is-wrong .num{color:var(--bad-ink)}\n.cell.is-pre{background:var(--sel-bg);border:2px dashed var(--sel);color:var(--sel)}\n\n/* the selected word, square by square, above the typing box */\n.wstrip{display:grid;grid-template-columns:repeat(var(--n),minmax(0,44px));justify-content:center;gap:4px}\n.sc{aspect-ratio:1;min-width:0;max-width:100%;margin:0;padding:0;display:flex;align-items:center;justify-content:center;border:1.5px solid var(--cell-border);border-radius:6px;background:var(--cell);color:var(--ink);font-family:var(--font-grid);font-weight:600;font-size:clamp(13px,4.6vw,21px);line-height:1}\n.sc.is-ok{background:var(--ok-bg);border-color:var(--ok-bd);color:var(--ok-ink)}\n.sc.is-wrong{background:var(--bad-bg);border-color:var(--bad-bd);color:var(--bad-ink)}\n.sc.is-pre{background:var(--sel-bg);border:2px dashed var(--sel);color:var(--sel)}\n.sc.is-cur{border:3px solid var(--sel)}\n\n/* compact typing panel so the board stays visible above the phone keyboard */\n.kbbar .kbr{display:flex;gap:6px;align-items:center}\n.kbbar .kbr .smallbtn{padding:0 10px}\n.tl-row .inp{min-height:44px}\n.helpbtn{width:40px;height:40px;flex-shrink:0;font-weight:700;font-size:17px}\n.tl-cands{flex-wrap:nowrap;overflow-x:auto;min-height:44px;scrollbar-width:none}\n.tl-cands .tlc{flex-shrink:0}\n.tl-cands .note{white-space:nowrap}\n/* when the phone keyboard covers the page instead of shrinking it, the app is pinned to the part still visible */\nhtml.kb-over #app{position:fixed;left:0;right:0;top:var(--vv-top,0px);height:var(--app-h,100%);margin:0 auto}\n#view.typing .pbar{display:none}\n/* (typing) the board area keeps its own scroll */\n\n/* a right answer is frozen: grey with a green border even when selected (selection shows as a blue ring outside it) */\n.cell.is-cur.is-ok{border:2px solid var(--ok-bd);box-shadow:0 0 0 3px var(--sel)}\n.sc.is-cur.is-ok{border:2px solid var(--ok-bd);box-shadow:0 0 0 3px var(--sel)}\n\n/* scroll bar for the zoomed board, in the pinned area */\n.hbar{display:flex;align-items:center;gap:6px}\n.hbar .ghostbtn{width:36px;height:32px;flex-shrink:0}\n.htrack{position:relative;flex:1;height:22px;border-radius:999px;background:var(--chip);touch-action:none;cursor:pointer}\n.hthumb{position:absolute;top:3px;bottom:3px;left:0;width:30%;border-radius:999px;background:var(--primary)}\n.gridwrap{scrollbar-width:thin;scrollbar-color:var(--primary) transparent}\n.gridwrap::-webkit-scrollbar{height:8px}\n.gridwrap::-webkit-scrollbar-thumb{background:var(--primary);border-radius:8px}\n\n/* Telugu fonts: grid, clues and headings each have their own choice; a size factor evens out how big each font draws */\n.cell{font-weight:var(--grid-wt,600);font-size:calc(var(--gw) / var(--n) * .40 * var(--size-mult) * var(--grid-scale,1));font-synthesis-weight:none}\n.sc{font-weight:var(--grid-wt,600);font-size:calc(clamp(13px,4.6vw,21px) * var(--grid-scale,1));font-synthesis-weight:none}\n.keys .k,.strip .k,.tlc{font-family:var(--font-grid);font-weight:var(--grid-wt,600);font-synthesis-weight:none}\n.keys .k,.strip .k{font-size:calc(18px * min(var(--grid-scale,1), 1.3))}\n.tlc{font-size:calc(17px * min(var(--grid-scale,1), 1.3))}\n.ecell{font-family:var(--font-grid);font-weight:var(--grid-wt,600);font-synthesis-weight:none}\n.cluebar .txt,.clue .x{font-family:var(--font-clue);font-weight:var(--clue-wt,500);font-size:calc(15px * var(--clue-scale,1))}\n.apptitle{font-size:calc(40px * var(--head-scale,1))}\n.sec-h{font-size:calc(18px * var(--head-scale,1))}\n.hero h2{font-size:calc(23px * var(--head-scale,1))}\n.pbar h1{font-size:calc(16px * var(--head-scale,1))}\n.cheer{font-size:calc(54px * var(--head-scale,1))}\n.fsets{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}\n.fset{display:flex;flex-direction:column;align-items:flex-start;gap:6px;min-width:0;padding:10px 12px;border-radius:16px;border:1px solid var(--line);background:var(--surface);color:var(--ink);text-align:left}\n.fset[aria-pressed=\"true\"]{border:2px solid var(--primary);background:var(--gold-tint)}\n.fset .nm{line-height:1.3;color:var(--title)}\n.fset .tiles{display:flex;gap:3px}\n.fset .tiles span{width:32px;height:32px;display:flex;align-items:center;justify-content:center;background:var(--cell);border:1.5px solid var(--cell-border);border-radius:4px;color:var(--ink);line-height:1}\n.fset .cl{line-height:1.4;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.fpicks{display:flex;flex-direction:column;gap:8px}\n.fpick{display:flex;align-items:center;gap:10px;width:100%;min-height:60px;padding:8px 14px;border-radius:16px;border:1px solid var(--line);background:var(--surface);color:var(--ink);text-align:left}\n.fpick .t{flex:1;min-width:0;display:flex;flex-direction:column}\n.fpick .t small{font-size:12px;font-weight:600;color:var(--muted)}\n.fpick .s{line-height:1.35}\n.fpick .fn{font-size:12.5px;color:var(--muted);text-align:right}\n.fpick .chev{font-size:14px;color:var(--muted)}\n.fpick[aria-expanded=\"true\"]{border-color:var(--primary)}\n.flist{display:flex;flex-direction:column;gap:6px;max-height:360px;overflow-y:auto;padding:2px}\n\n/* black-square picture choice */\n.blk{background-size:cover;background-position:center}\n.blkopts{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}\n.blkopt{display:flex;flex-direction:column;align-items:center;gap:6px;min-width:0;padding:10px 6px;border-radius:14px;border:1px solid var(--line);background:var(--surface);color:var(--ink);font-size:13px;font-weight:600;text-align:center}\n.blkopt[aria-pressed=\"true\"]{border:2px solid var(--primary);background:var(--gold-tint)}\n.blkrow{display:flex;gap:3px;justify-content:center}\n.scsample,.rainsample,.plainsample{display:block;width:30px;height:30px;border-radius:5px;border:1.5px solid var(--cell-border);background-size:cover;background-position:center}\n.rainsample{width:42px;height:30px;background:var(--block) url(https://uvsubbaiah-spec.github.io/e-padavinodam/rain.webp) center/cover}\n.plainsample{width:42px;height:30px;background:var(--block)}\n\n/* screen recording (computers), like the blog's \u0c30\u0c3f\u0c15\u0c3e\u0c30\u0c4d\u0c21\u0c41 \u0c1a\u0c47\u0c2f\u0c02\u0c21\u0c3f button */\n.recbtn .recdot{width:18px;height:18px;border-radius:50%;background:#E53935;box-shadow:0 0 0 2px color-mix(in srgb, #E53935 25%, transparent)}\n.recbtn.is-on .recdot{width:16px;height:16px;border-radius:4px;background:#E53935;box-shadow:0 0 0 4px color-mix(in srgb, #E53935 30%, transparent);animation:recp 1s ease-in-out infinite}\n@keyframes recp{50%{opacity:.35}}\n.recpill{position:fixed;z-index:50;top:calc(env(safe-area-inset-top,0px) + 8px);right:max(12px,env(safe-area-inset-right,0px));display:flex;align-items:center;gap:8px;min-height:36px;padding:0 14px;border:0;border-radius:999px;background:#2A1F17;color:#FFF;font-size:13.5px;font-weight:700;box-shadow:0 4px 14px rgba(0,0,0,.25)}\n.recpill .recdot{width:10px;height:10px;border-radius:50%;background:#FF5252;animation:recp 1s ease-in-out infinite}\n@media (prefers-reduced-motion: reduce){.recbtn.is-on .recdot,.recpill .recdot{animation:none}}\n\n/* loading screen: a little grid fills in while posts arrive */\n.loading{display:flex;flex-direction:column;align-items:center;text-align:center;gap:14px;padding:48px 8px 24px}\n.loading.sm{padding:16px 0 8px;gap:10px}\n.ldgrid{display:grid;grid-template-columns:repeat(3,52px);gap:4px;padding:5px;border-radius:12px;background:var(--surface);box-shadow:0 6px 18px rgba(42,31,23,.12)}\n.loading.sm .ldgrid{grid-template-columns:repeat(3,38px)}\n.ldgrid span{aspect-ratio:1;display:flex;align-items:center;justify-content:center;border-radius:5px;border:1.5px solid var(--cell-border);font-family:var(--font-grid);font-size:calc(21px * min(var(--grid-scale,1), 1.25));font-weight:var(--grid-wt,600);font-synthesis-weight:none;line-height:1}\n.loading.sm .ldgrid span{font-size:calc(16px * min(var(--grid-scale,1), 1.25))}\n.ldgrid .t{background:var(--cell);color:transparent;animation:ldfill 3.2s ease-in-out infinite}\n.ldgrid .b{background:var(--block) url(https://uvsubbaiah-spec.github.io/e-padavinodam/rain.webp) center/cover}\n@keyframes ldfill{0%,8%{color:transparent;background:var(--cell)}18%,70%{color:var(--ok-ink);background:var(--ok-bg);border-color:var(--ok-bd)}85%,100%{color:transparent;background:var(--cell)}}\n.ldmsg{margin:0;font-size:16px;font-weight:600;color:var(--ink);min-height:1.6em}\n.ldmsg.in{animation:ldin .4s ease-out}\n@keyframes ldin{from{opacity:0;transform:translateY(4px)}}\n.ldbar{width:min(240px,70%);height:6px;border-radius:999px;background:var(--chip);overflow:hidden}\n.ldbar i{display:block;width:40%;height:100%;border-radius:999px;background:var(--primary);animation:ldbar 1.4s ease-in-out infinite}\n@keyframes ldbar{from{transform:translateX(-100%)}to{transform:translateX(250%)}}\n@media (prefers-reduced-motion: reduce){.ldgrid .t{animation:none;color:var(--ink)}.ldbar i{animation:none;width:100%;opacity:.5}.ldmsg.in{animation:none}}\n\n/* while typing with the phone keyboard: only the clue, the word's squares and the typing box stay pinned, so more of the board shows */\n#view.typing .hbar,#view.typing .kbbar,#view.typing #tl-help,#view.typing .tl-cands.is-empty{display:none!important}\n#view.typing .pbottom{gap:6px;padding-top:6px;padding-bottom:6px}\n#view.typing .ppanel{gap:6px}\n#view.typing .cluebar{min-height:0}\n#view.typing .cluebar .mid{padding-block:4px}\n#view.typing .cluebar .txt{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;font-size:calc(14px * var(--clue-scale,1));line-height:1.35}\n#view.typing .cluebar .ghostbtn{width:36px}\n#view.typing .typebox{gap:6px}\n#view.typing .wstrip{grid-template-columns:repeat(var(--n),minmax(0,38px))}\n#view.typing .tl-cands{min-height:40px}\n#view.typing .tl-row .inp{min-height:42px}\n\n/* the board must not jump when the preview letters or the suggestion row change */\n#view,#view *{overflow-anchor:none}\n\n/* the board area scrolls up and down as a whole; the grid strip itself only scrolls sideways */\n.pmid > *{flex-shrink:0}\n.gridwrap{overflow-y:hidden}\n/* small screen with the keyboard up: the mode/timer/hint row folds away too (close the keyboard to reach it) */\nhtml.vv-short #view.typing .ptools{display:none}\nhtml.vv-short #view.typing .tlc{min-height:38px}\n\n/* Android app download */\n.apkcard{display:flex;align-items:center;gap:12px;padding:12px 14px;border-radius:16px;background:var(--surface);border:1px solid var(--line);color:var(--ink);text-decoration:none;box-shadow:var(--shadow)}\n.apkcard .apkic{flex-shrink:0;width:44px;height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center;background:var(--primary);color:var(--on-primary)}\n.apkcard .t{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}\n.apkcard .t b{font-size:15.5px;font-weight:700}\n.apkcard .t small{font-size:12.5px;color:var(--muted);line-height:1.4}\n.apkcard.sm{margin-bottom:4px}\n\n/* colour choice (Settings / Profile): repaints buttons, titles, the clue bar, the selected square and word; answer colours stay as on the blog */\n:root[data-app-color=\"tulsi\"]:not([data-app-theme=\"night\"]){--primary:#2E6B47;--title:#2E6B47;--hero:#2E6B47;--hero-deep:#1F4D33;--hero-sub:#D3EBDD;--clue-bg:#DFF0E4;--gold-tint:#DFF0E4;--pill-bg:#DFF0E4;--pill-ink:#1F4D33;--accent:#6FA27A;--sel:#1F7A4D;--word:#D6F0DD;--word-ring:#5FA97A}\n@media (prefers-color-scheme: dark){:root[data-app-color=\"tulsi\"]:not([data-theme=\"light\"]):not([data-app-theme=\"cozy\"]):not([data-app-theme=\"white\"]){--primary:#8FD1A3;--on-primary:#10241A;--title:#8FD1A3;--hero:#1E3A2A;--hero-deep:#13261B;--clue-bg:#1F3326;--gold-tint:#1F3326;--pill-bg:#1F3326;--pill-ink:#8FD1A3;--accent:#6FA27A;--sel:#FFFFFF;--word:#2B5A44;--word-ring:#8FD1A3}}\n:root[data-app-color=\"tulsi\"][data-theme=\"dark\"]:not([data-app-theme=\"cozy\"]):not([data-app-theme=\"white\"]),:root[data-app-color=\"tulsi\"][data-app-theme=\"night\"]{--primary:#8FD1A3;--on-primary:#10241A;--title:#8FD1A3;--hero:#1E3A2A;--hero-deep:#13261B;--clue-bg:#1F3326;--gold-tint:#1F3326;--pill-bg:#1F3326;--pill-ink:#8FD1A3;--accent:#6FA27A;--sel:#FFFFFF;--word:#2B5A44;--word-ring:#8FD1A3}\n:root[data-app-color=\"kumkum\"]:not([data-app-theme=\"night\"]){--primary:#B23A26;--title:#B23A26;--hero:#B23A26;--hero-deep:#82271A;--hero-sub:#F8D9CF;--clue-bg:#FBE1D8;--gold-tint:#FBE1D8;--pill-bg:#FBE1D8;--pill-ink:#82271A;--accent:#D9644A;--sel:#0B57D0;--word:#FFE6DE;--word-ring:#E08A74}\n@media (prefers-color-scheme: dark){:root[data-app-color=\"kumkum\"]:not([data-theme=\"light\"]):not([data-app-theme=\"cozy\"]):not([data-app-theme=\"white\"]){--primary:#FF9A80;--on-primary:#2A140F;--title:#FF9A80;--hero:#3A1E19;--hero-deep:#24120E;--clue-bg:#3A2420;--gold-tint:#3A2420;--pill-bg:#3A2420;--pill-ink:#FF9A80;--accent:#D9644A;--sel:#FFFFFF;--word:#5A3A35;--word-ring:#FF9A80}}\n:root[data-app-color=\"kumkum\"][data-theme=\"dark\"]:not([data-app-theme=\"cozy\"]):not([data-app-theme=\"white\"]),:root[data-app-color=\"kumkum\"][data-app-theme=\"night\"]{--primary:#FF9A80;--on-primary:#2A140F;--title:#FF9A80;--hero:#3A1E19;--hero-deep:#24120E;--clue-bg:#3A2420;--gold-tint:#3A2420;--pill-bg:#3A2420;--pill-ink:#FF9A80;--accent:#D9644A;--sel:#FFFFFF;--word:#5A3A35;--word-ring:#FF9A80}\n:root[data-app-color=\"oodha\"]:not([data-app-theme=\"night\"]){--primary:#5B3F9E;--title:#5B3F9E;--hero:#5B3F9E;--hero-deep:#3F2B70;--hero-sub:#E5DCF7;--clue-bg:#ECE5FA;--gold-tint:#ECE5FA;--pill-bg:#ECE5FA;--pill-ink:#3F2B70;--accent:#A48BD6;--sel:#5B3F9E;--word:#E8E0FB;--word-ring:#9C86D6}\n@media (prefers-color-scheme: dark){:root[data-app-color=\"oodha\"]:not([data-theme=\"light\"]):not([data-app-theme=\"cozy\"]):not([data-app-theme=\"white\"]){--primary:#C3B0F0;--on-primary:#1E1530;--title:#C3B0F0;--hero:#2A2140;--hero-deep:#1B142B;--clue-bg:#2C2440;--gold-tint:#2C2440;--pill-bg:#2C2440;--pill-ink:#C3B0F0;--accent:#A48BD6;--sel:#FFFFFF;--word:#3E3466;--word-ring:#C3B0F0}}\n:root[data-app-color=\"oodha\"][data-theme=\"dark\"]:not([data-app-theme=\"cozy\"]):not([data-app-theme=\"white\"]),:root[data-app-color=\"oodha\"][data-app-theme=\"night\"]{--primary:#C3B0F0;--on-primary:#1E1530;--title:#C3B0F0;--hero:#2A2140;--hero-deep:#1B142B;--clue-bg:#2C2440;--gold-tint:#2C2440;--pill-bg:#2C2440;--pill-ink:#C3B0F0;--accent:#A48BD6;--sel:#FFFFFF;--word:#3E3466;--word-ring:#C3B0F0}\n:root[data-app-color=\"neelam\"]:not([data-app-theme=\"night\"]){--primary:#1F5F99;--title:#1F5F99;--hero:#1F5F99;--hero-deep:#154570;--hero-sub:#D6E8F7;--clue-bg:#E1EEFA;--gold-tint:#E1EEFA;--pill-bg:#E1EEFA;--pill-ink:#154570;--accent:#5DA9E9;--sel:#154570;--word:#CFE6FA;--word-ring:#5B9BE0}\n@media (prefers-color-scheme: dark){:root[data-app-color=\"neelam\"]:not([data-theme=\"light\"]):not([data-app-theme=\"cozy\"]):not([data-app-theme=\"white\"]){--primary:#8CC4F2;--on-primary:#0F1E2E;--title:#8CC4F2;--hero:#1A2C40;--hero-deep:#101C2A;--clue-bg:#1D2E42;--gold-tint:#1D2E42;--pill-bg:#1D2E42;--pill-ink:#8CC4F2;--accent:#5DA9E9;--sel:#FFFFFF;--word:#40326F;--word-ring:#BCA6FF;--hint-ink:#FF6B6B;--hint-bg:transparent}}\n:root[data-app-color=\"neelam\"][data-theme=\"dark\"]:not([data-app-theme=\"cozy\"]):not([data-app-theme=\"white\"]),:root[data-app-color=\"neelam\"][data-app-theme=\"night\"]{--primary:#8CC4F2;--on-primary:#0F1E2E;--title:#8CC4F2;--hero:#1A2C40;--hero-deep:#101C2A;--clue-bg:#1D2E42;--gold-tint:#1D2E42;--pill-bg:#1D2E42;--pill-ink:#8CC4F2;--accent:#5DA9E9;--sel:#FFFFFF;--word:#40326F;--word-ring:#BCA6FF;--hint-ink:#FF6B6B;--hint-bg:transparent}\n\n/* colour picker with names */\n.swatches{display:flex;flex-wrap:wrap;gap:10px 12px;padding-left:0}\n.swpick{display:flex;flex-direction:column;align-items:center;gap:4px;min-width:56px;padding:4px;border:0;background:transparent;color:var(--ink)}\n.swpick .swatch{width:44px;height:44px;border-radius:50%}\n.swpick small{font-size:12px;font-weight:600;color:var(--muted)}\n.swpick[aria-pressed=\"true\"] .swatch{box-shadow:0 0 0 3px var(--surface),0 0 0 5px var(--ink)}\n.swpick[aria-pressed=\"true\"] small{color:var(--ink)}\n\n/* hint bulb in the clue bar */\n.cbhint{flex-shrink:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0;min-width:52px;padding:2px 4px;border:0;border-radius:12px;background:transparent;color:var(--pill-ink);font-size:11px;font-weight:700;line-height:1.1}\n.cbhint svg{display:block}\n#view.typing .cbhint span{display:none}\n#view.typing .cbhint{min-width:40px}\n\n/* profile */\n#tabs{grid-template-columns:repeat(4,minmax(0,1fr))}\n#tabs a span{width:52px}\n.avatar{flex-shrink:0;display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:50%;background:var(--gold-tint);font-size:24px;line-height:1}\n.avatar.big{width:84px;height:84px;font-size:46px;box-shadow:0 0 0 3px var(--surface),0 0 0 5px var(--primary)}\n.avatar.sm{width:38px;height:38px;font-size:21px}\n.profcard{flex-direction:row!important;align-items:center;gap:16px}\n.avgrid{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}\n.avopt{aspect-ratio:1;min-width:0;border-radius:14px;border:1px solid var(--line);background:var(--surface);font-size:24px;line-height:1;padding:0}\n.avopt[aria-pressed=\"true\"]{border:2px solid var(--primary);background:var(--gold-tint)}\n.iconbtn.avbtn{font-size:22px;line-height:1}\n.mgr .avatar.sm + .t{margin-left:2px}\n\n\n/* clue bar: the direction pill switches \u0c05\u0c21\u0c4d\u0c21\u0c02 / \u0c28\u0c3f\u0c32\u0c41\u0c35\u0c41 */\n.tagbtn{flex-shrink:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;padding:4px 2px 4px 0;border:0;background:transparent}\n.tagbtn .swp{font-size:11px;font-weight:700;color:var(--pill-ink);white-space:nowrap}\n.cluebar .mid{padding-left:8px}\n/* double tap on a square goes straight to our handler, not the browser's zoom */\n.cell,.grid,.sc{touch-action:manipulation}\n/* the clue text is never cut off: it wraps, and while typing it scrolls inside a 3-line box */\n.cluebar .txt{white-space:normal;overflow-wrap:anywhere}\n#view.typing .cluebar .txt{display:block;-webkit-line-clamp:unset;max-height:calc(3 * 1.35em);overflow-y:auto}\n/* answers already filled in correctly, shown in the clue list */\n.answ{display:inline-block;margin-left:8px;padding:1px 8px;border-radius:999px;background:var(--chip);font-family:var(--font-grid);font-weight:var(--grid-wt,600);font-size:14px;color:var(--ink);white-space:nowrap}\n.answ.ok{background:var(--ok-bg);color:var(--ok-ink);border:1.5px solid var(--ok-bd)}\n.clue.is-right .x{color:var(--ink);text-decoration:none}\n/* G. keyboard up: everything except the clue, the typing box and the suggestions folds away, so the board gets the room */\n#view.typing .ptools,#view.typing #wstrip{display:none!important}\n\n/* website admin */\n.adminlink{display:block;text-align:center;font-size:13px;font-weight:600;color:var(--muted);padding:6px 0}\n\n/* \u0c06\u0c1f\u0c4b: answers shown clue by clue */\n.ptools .seg button{padding:0 12px}\n.autobox{display:flex;flex-direction:column;gap:10px;padding-bottom:6px}\n.autohead{display:flex;align-items:baseline;justify-content:space-between;gap:8px}\n.autohead b{font-size:16px;color:var(--title)}\n.autohead span{font-size:13px;color:var(--muted)}\n.autonote{margin:0;font-size:12.5px;color:var(--muted);text-align:center}\n.autoword{text-align:center;font-family:var(--font-grid);font-weight:var(--grid-wt,600);font-size:calc(28px * min(var(--grid-scale,1), 1.25));letter-spacing:.08em;color:var(--ok-ink);padding:8px;border-radius:14px;background:var(--ok-bg);border:1.5px solid var(--ok-bd);min-height:56px}\n.autobtns{display:flex;flex-wrap:wrap;gap:8px}\n.autobtns .smallbtn{flex:1 1 auto;min-height:44px}\n/* 0.20 \u00b7 website admin: readers, on-phone scanner */\n.readers{display:flex;flex-direction:column;gap:10px}\n.reader{display:flex;flex-direction:column;align-items:flex-start;gap:3px;text-align:left;padding:12px 14px;border-radius:14px;border:1.5px solid var(--line);background:var(--surface);color:var(--ink);text-decoration:none;font:inherit;cursor:pointer}\n.reader b{font-size:16px;color:var(--title)}\n.reader small{font-size:13px;line-height:1.45;color:var(--muted)}\n.reader:disabled{opacity:.55}\n.scanwrap{position:relative;max-height:62vh;overflow:auto;border-radius:12px;border:1px solid var(--line);background:#fff;-webkit-overflow-scrolling:touch}\n.scanbox{position:relative;width:100%}\n.scanbox canvas{display:block;width:100%;height:auto}\n#scan-ov{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}\n#scan-ov.draw{pointer-events:auto;touch-action:none;cursor:crosshair}\n.scanzoom{align-items:center;justify-content:center;gap:14px}\n.scanzoom .smallbtn{min-width:48px;min-height:40px;font-size:20px}\n.scanmini{display:grid;grid-template-columns:repeat(var(--n),1fr);gap:2px;max-width:340px;width:100%;margin:4px auto 0}\n.scanmini .mc{aspect-ratio:1;border:1px solid var(--line);background:#fff;border-radius:3px;padding:0;min-width:0}\n.scanmini .mc.b{background:#1B1612;border-color:#1B1612}\n.scanmini .mc.f{outline:2px solid #E00000;outline-offset:-2px}\n.ocrbox{min-height:150px;font-size:15px;line-height:1.55;font-family:var(--font-clue)}\n\n/* 0.20.3 \u00b7 longer explanations are justified (short and centred lines stay as they are) */\n.box .note,.box .bignote,.sec > .note,.page > p.note,.tip p,.reader small,.status > span,.fld .note{text-align:justify;text-justify:inter-word}\n.lockscreen .bignote,footer .note{text-align:center}\n/* 0.21 \u00b7 answers picture card in the draft editor */\n.anscard{display:flex;flex-direction:column;gap:6px;padding:12px 14px;border-radius:14px;background:var(--gold-tint);border:1.5px dashed var(--gold)}\n.anscard b{font-size:15px}\n.anscard small{font-size:13px;line-height:1.45;color:var(--muted)}\n.anscard.is-full{background:var(--leaf-tint);border-color:transparent}\n.anscard .btnrow .wide-btn{min-height:44px;flex:1 1 120px}\n/* 0.21.1 \u00b7 clue bar in two rows: buttons above, the whole clue below at full width (no clipping) */\n.cluebar{display:grid;grid-template-columns:auto auto minmax(0,1fr) auto auto auto;grid-template-areas:\"prev tag gap fix hint next\" \"txt txt txt txt txt txt\";align-items:center;min-height:0}\n.cluebar > [data-act=\"prev\"]{grid-area:prev}\n.cluebar > .tagbtn{grid-area:tag;flex-direction:row;gap:8px;padding:4px 0}\n.cluebar > [data-act=\"fix-open\"]{grid-area:fix}\n.cluebar > .cbhint{grid-area:hint;flex-direction:row;gap:4px;min-width:0;padding:2px 6px}\n.cluebar > [data-act=\"next\"]{grid-area:next}\n.cluebar > .mid{grid-area:txt;align-items:flex-start;padding:0 14px 10px}\n.cluebar .txt,#view.typing .cluebar .txt{display:block;-webkit-line-clamp:unset;white-space:normal;overflow-wrap:anywhere;max-height:none;overflow:visible}\n#view.typing .cluebar > .mid{padding:0 12px 6px}\n#view.typing .cluebar .txt{max-height:calc(4 * 1.35em);overflow-y:auto}\n#view.typing .cbhint span{display:inline}\n/* congratulation picture over the finished board, like the blog's (jQuery show(\"slow\") grows it from its corner) */\n.finpop{position:fixed;inset:0;z-index:80;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:calc(env(safe-area-inset-top,0px) + 64px) max(16px,env(safe-area-inset-right,0px)) calc(env(safe-area-inset-bottom,0px) + 24px) max(16px,env(safe-area-inset-left,0px));background:rgba(24,14,8,.6);animation:finfade .3s ease-out}\n.finpic{border:0;background:none;padding:0;margin:0;cursor:pointer;max-width:100%;transform-origin:top left;animation:finshow .6s ease-out}\n.finpic img{display:block;max-width:min(92vw,560px);max-height:68vh;width:auto;height:auto;border-radius:10px;box-shadow:0 12px 40px rgba(0,0,0,.45)}\n.finart{display:block;width:min(78vw,320px);border-radius:50%;background:var(--bg)}\n.finart svg{display:block;width:100%;height:auto}\n.finx{position:absolute;top:calc(env(safe-area-inset-top,0px) + 12px);right:max(12px,env(safe-area-inset-right,0px));width:44px;height:44px;border-radius:50%;border:0;background:var(--surface);color:var(--ink);display:grid;place-items:center;box-shadow:0 2px 10px rgba(0,0,0,.25);cursor:pointer}\n.finnote{margin:0;color:#fff;font-size:15px;line-height:1.5;text-align:center;max-width:30em;text-shadow:0 1px 3px rgba(0,0,0,.6)}\n@keyframes finshow{from{transform:scale(.05);opacity:0}to{transform:scale(1);opacity:1}}\n@keyframes finfade{from{opacity:0}to{opacity:1}}\n@media (prefers-reduced-motion:reduce){.finpop,.finpic{animation:none}}\n/* English \u2192 Telugu typing in correction boxes */\n.tehint{display:flex;flex-wrap:wrap;align-items:flex-start;gap:8px 10px;padding:10px 12px;border-radius:12px;background:var(--surface);border:1px dashed var(--line)}\n.tehint small{flex:1 1 220px;min-width:0;font-size:13px;line-height:1.55;color:var(--muted);text-align:left}\n.tehint small b{color:var(--ink);font-family:system-ui,sans-serif;font-weight:600}\n.tehint .smallbtn[aria-pressed=\"true\"]{background:var(--ok-bg);border-color:var(--ok-bd);color:var(--ok-ink)}\n.tlalts{display:flex;flex-wrap:wrap;align-items:center;gap:6px;margin:4px 0 6px}\n.tlalts small{font-size:12px;color:var(--muted)}\n.tlalts button{min-height:36px;padding:4px 12px;border-radius:18px;border:1.5px solid var(--line);background:var(--surface);color:var(--ink);font:inherit;font-size:16px;cursor:pointer}\n.tlalts button[aria-pressed=\"true\"]{border-color:var(--ok-bd);background:var(--ok-bg);color:var(--ok-ink);font-weight:600}\n/* saved drafts */\n.savebar{display:flex;flex-direction:column;gap:6px}\n.savebar small{font-size:12.5px;color:var(--muted);text-align:center}\n.kept{display:flex;flex-direction:column;gap:8px;margin-top:4px}\n.keptrow{display:flex;align-items:center;gap:8px;padding:10px 12px;border-radius:12px;background:var(--surface);border:1px solid var(--line)}\n.keptrow .t{flex:1;min-width:0;display:flex;flex-direction:column}\n.keptrow .t b{font-size:16px}\n.keptrow .t small{font-size:12px;color:var(--muted)}\n/* answers as a sheet: type straight into each square */\n.papergrid{margin:0;display:flex;flex-direction:column;gap:4px;align-items:center}\n.papergrid img{display:block;width:var(--gw,min(calc(100vw - 32px),488px));max-width:100%;height:auto;border-radius:8px;border:1px solid var(--line)}\n.papergrid figcaption{font-size:12.5px;color:var(--muted);text-align:center}\n.egrid.sheet .scell{position:relative;aspect-ratio:1;min-width:0;margin:0;background:var(--cell);border-radius:2px;display:block;cursor:text}\n.egrid.sheet .scell i{position:absolute;top:1px;left:2px;font-style:normal;font-family:var(--font-ui);font-weight:700;font-size:max(8px,calc(var(--gw) / var(--n) * .2));color:var(--num);pointer-events:none;line-height:1}\n.egrid.sheet .scell input{position:absolute;inset:0;width:100%;height:100%;margin:0;padding:.3em 0 0;border:0;border-radius:2px;background:transparent;color:var(--ink);text-align:center;font-family:var(--font-grid);font-weight:600;font-size:16px;line-height:1;outline:none;-webkit-appearance:none;appearance:none}\n.egrid.sheet .scell input:focus{box-shadow:inset 0 0 0 3px var(--accent);background:var(--word)}\n.egrid.sheet .scell.low,.ecell.low{background:#FFE9A8}\n.egrid.sheet .scell.chg{background:#D9F2D5}\n.lowkey{background:#FFE9A8;color:#5A4300;padding:0 4px;border-radius:4px}\n.chgkey{background:#D9F2D5;color:#1F4D1A;padding:0 4px;border-radius:4px}\n.egrid.sheet .scell.low input,.egrid.sheet .scell.chg input,.ecell.low{color:#1E1714}\n/* post pictures */\n.pics{gap:14px}\n.picrow{display:flex;flex-direction:column;gap:8px}\n.pichead{display:flex;gap:12px;align-items:center}\n.picnow{flex:0 0 64px;width:64px;height:64px;border-radius:10px;overflow:hidden;background:var(--grid-line);display:grid;place-items:center}\n.picnow img{width:100%;height:100%;object-fit:cover}\n.picnow i{font-style:normal;font-size:11px;color:#F5EBDD;text-align:center;padding:4px}\n.pichead .t{display:flex;flex-direction:column;min-width:0}\n.pichead .t small{font-size:12.5px;color:var(--muted)}\n.picpick{display:flex;flex-direction:column;gap:10px;padding:10px;border-radius:12px;border:1px dashed var(--line)}\n.picgal{display:grid;grid-template-columns:repeat(auto-fill,minmax(64px,1fr));gap:8px}\n.picbtn{padding:0;border:2px solid transparent;border-radius:10px;overflow:hidden;aspect-ratio:1;background:var(--grid-line);cursor:pointer}\n.picbtn img{width:100%;height:100%;object-fit:cover;display:block}\n.picbtn[aria-pressed=\"true\"]{border-color:var(--accent)}\n/* 0.24: reset a post from the lists, list order, hint-filled letters, the post's own picture in the black squares */\n.rowwrap{display:flex;align-items:center}\n.rowwrap + .rowwrap{border-top:1px dashed var(--line)}\n.rowwrap .rowlink{flex:1;min-width:0}\n.rowreset{flex-shrink:0;min-width:44px;min-height:44px;margin-right:8px;padding:0 10px;border:0;border-radius:999px;background:var(--chip);color:var(--ink);font-size:18px;font-weight:700}\n.rowreset.ask,.resetbtn.ask{background:var(--bad-bd);color:#fff;font-size:13px}\n.resetbtn{font-size:20px;font-weight:700;min-width:40px}\n.seg.small button{min-height:32px;padding:0 10px;font-size:12.5px}\n.sec-row .seg.small{flex-shrink:0}\n.answ .hl{color:var(--hint-ink);background:var(--hint-bg);font-weight:700;border-radius:5px;padding:0 1px}\n.hintkey{margin:2px 0 4px;font-size:12.5px;color:var(--muted);display:flex;align-items:center;gap:6px}\n.hintkey .answ{margin:0}\n.blk.pimg{background-image:var(--pimg);background-size:cover;background-position:center}\n.egrid.sheet{position:relative}\n.shopts{position:absolute;left:0;right:0;z-index:5;display:flex;flex-wrap:wrap;align-items:center;gap:6px;padding:8px;border-radius:14px;background:var(--surface);box-shadow:0 6px 24px rgba(0,0,0,.22);border:1.5px solid var(--primary)}\n.shopts small{font-size:12.5px;color:var(--muted);font-family:system-ui,sans-serif}\n.shopts button{min-width:44px;min-height:44px;padding:0 10px;border:1px solid var(--line);border-radius:10px;background:var(--chip);color:var(--ink);font-family:var(--font-grid);font-size:20px}\n.shopts button .no{display:none}\n.shopts:not(.drop) button.hi{background:var(--primary);color:var(--on-primary);border-color:var(--primary)}\n.shopts.kb{position:fixed;right:auto;z-index:60;flex-wrap:nowrap;overflow-x:auto;border-radius:0;border-width:1.5px 0 0;box-shadow:0 -4px 16px rgba(0,0,0,.18);padding:6px 8px;scrollbar-width:none}\n.shopts.kb button{flex-shrink:0}\n.keptrow.open{border:2px solid var(--primary)}\n.teopts{position:fixed;right:auto;z-index:60;max-width:none;flex-wrap:nowrap;overflow-x:auto;scrollbar-width:thin}\n.teopts button{flex-shrink:0}\n/* no phone keyboard on screen: a numbered list under the word, like a computer's Telugu keyboard (arrow keys choose) */\n.shopts.drop{right:auto;flex-direction:column;align-items:stretch;flex-wrap:nowrap;gap:0;padding:4px 0;min-width:150px;max-width:min(300px,calc(100vw - 16px));max-height:min(336px,52vh);overflow-x:hidden;overflow-y:auto;border-radius:6px;border:1px solid var(--line);box-shadow:0 10px 28px rgba(0,0,0,.28);scrollbar-width:thin}\n.shopts.drop small{padding:3px 14px 6px;margin-bottom:3px;border-bottom:1px solid var(--line);font-size:13px;text-decoration:underline dotted;text-underline-offset:3px}\n.shopts.drop button{display:flex;align-items:center;justify-content:flex-start;gap:14px;flex-shrink:0;width:100%;min-width:0;min-height:38px;padding:0 16px 0 10px;border:0;border-left:3px solid transparent;border-radius:0;background:transparent;font-size:19px;line-height:1.2;text-align:left;cursor:pointer}\n.shopts.drop button .no{display:inline-block;min-width:1.3em;text-align:right;font:600 13px/1 system-ui,sans-serif;color:var(--muted)}\n.shopts.drop button.hi{background:var(--chip);border-left-color:var(--primary)}\n.shopts.drop button.hi .no{color:var(--primary)}\n.homesearch #home-res{display:flex;flex-direction:column;gap:8px;margin-top:10px}.homesearch #home-res:empty{display:none}\n.search .box{flex-direction:row}\n#adm-find-res{display:flex;flex-direction:column;gap:8px;margin-top:10px}#adm-find-res:empty{display:none}\na.smallbtn{text-decoration:none;display:inline-flex;align-items:center;justify-content:center}\n.note.scanwarn{background:var(--wrong-bg);color:var(--wrong);padding:10px 12px;border-radius:10px;line-height:1.55}\n.egrid.sheet .scell.run{box-shadow:inset 0 0 0 2px var(--word-ring)}\n.egrid.sheet .scell.run:not(.low):not(.chg){background:var(--word)}\n/* short screens with a keyboard open: smaller keys and bars so the board keeps its share (two steps, set by fitPlay) */\n#view.tight .ptools{display:none}\n#view.tight .pbottom{gap:5px;padding-top:5px}\n#view.tight .ppanel{gap:4px;padding-bottom:6px}\n#view.tight .keys{gap:3px}\n#view.tight .k{height:36px;border-radius:10px}\n#view.tight .strip{min-height:36px}\n#view.tight .kbbar .seg button{min-height:30px}\n#view.tight .kbbar .smallbtn{min-height:32px}\n#view.tight .hbar .ghostbtn{height:26px}\n#view.tight .cluebar > .mid{padding-bottom:6px}\n#view.tight2 .hbar{display:none!important}\n#view.tight2 .k{height:31px}\n#view.tight2 .keys .k,#view.tight2 .strip .k{font-size:17px}\n#view.tight2 .strip{min-height:31px}\n#view.tight2 .pmid{padding-bottom:4px}\n.tl-row .tl-te{flex-shrink:0;padding:0 10px;min-height:44px}\n/* the clue is always shown whole: no line limit and no scroll box (a box cuts off the tops and bottoms of Telugu letters) */\n.cluebar .txt,#view.typing .cluebar .txt,#view.tight .cluebar .txt{display:block;-webkit-line-clamp:unset;max-height:none;overflow:visible;line-height:1.55;padding-block:1px}\n#view.typing .cluebar .txt,#view.tight .cluebar .txt{font-size:calc(14.5px * var(--clue-scale,1))}\nselect.inp{font-family:var(--font-ui,inherit);font-size:16px;appearance:auto}\n/* the vowel row scrolls sideways with a thin bar (a full-size bar took a row of the board on computers) */\n.strip{scrollbar-width:thin}\n.strip::-webkit-scrollbar{height:5px}\n.strip::-webkit-scrollbar-thumb{background:color-mix(in srgb, var(--ink) 30%, transparent);border-radius:3px}\n/* black squares: animated nature and animal scenes (generated by scenes.py) */\n.blk.sc0,.scsample.sc0{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid slice'%3E%3Cdefs%3E%3ClinearGradient id='b' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%230D3436'/%3E%3Cstop offset='1' stop-color='%231E5A45'/%3E%3C/linearGradient%3E%3ClinearGradient id='n' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%2329B6F6'/%3E%3Cstop offset='1' stop-color='%230D47A1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cstyle%3E.fan%7Banimation:fan 2.4s ease-in-out infinite;transform-origin:50px 64px%7D@keyframes fan%7B0%25,100%25%7Btransform:rotate(0) scale(1)%7D25%25%7Btransform:rotate(-4deg) scale(1.03)%7D50%25%7Btransform:rotate(0) scale(.96)%7D75%25%7Btransform:rotate(4deg) scale(1.03)%7D%7D.q%7Banimation:q .18s ease-in-out infinite alternate;transform-origin:50px 64px%7D@keyframes q%7Bto%7Btransform:rotate(1.6deg)%7D%7D.bd%7Banimation:bd 2.4s ease-in-out infinite;transform-origin:50px 86px%7D@keyframes bd%7B0%25,100%25%7Btransform:rotate(0)%7D25%25%7Btransform:rotate(-5deg) translateX(-1px)%7D75%25%7Btransform:rotate(5deg) translateX(1px)%7D%7D.hd%7Banimation:hd 1.2s ease-in-out infinite;transform-origin:51px 46px%7D@keyframes hd%7B50%25%7Btransform:rotate(-8deg)%7D%7D.sp%7Banimation:sp 2.4s ease-in-out infinite%7D@keyframes sp%7B0%25,100%25%7Bopacity:.15%7D50%25%7Bopacity:1%7D%7D%3C/style%3E%3Crect width='100' height='100' fill='url(%23b)'/%3E%3Ccircle class='sp' cx='12' cy='14' r='.9' fill='%23E0F2F1'/%3E%3Ccircle class='sp' cx='88' cy='12' r='.8' fill='%23E0F2F1' style='animation-delay:-1.2s'/%3E%3Cellipse cx='50' cy='92' rx='46' ry='7' fill='%23123A2C'/%3E%3Cg class='fan'%3E%3Cg transform='rotate(-80 50 64)'%3E%3Cg class='q' style='animation-delay:-0.00s'%3E%3Cpath d='M50 64 Q43 44 50 18 Q57 44 50 64Z' fill='%232F7D3B' opacity='.75'/%3E%3Cpath d='M50 64 V24' stroke='%239CCC65' stroke-width='.6'/%3E%3Cellipse cx='50' cy='22' rx='5.6' ry='7.4' fill='%231B5E20'/%3E%3Cellipse cx='50' cy='22.6' rx='4.2' ry='5.6' fill='%23F9A825'/%3E%3Cellipse cx='50' cy='23.2' rx='2.9' ry='3.9' fill='%231565C0'/%3E%3Cellipse cx='50' cy='23.6' rx='1.5' ry='2' fill='%230A1F44'/%3E%3C/g%3E%3C/g%3E%3Cg transform='rotate(-64 50 64)'%3E%3Cg class='q' style='animation-delay:-0.07s'%3E%3Cpath d='M50 64 Q43 44 50 18 Q57 44 50 64Z' fill='%232F7D3B' opacity='.75'/%3E%3Cpath d='M50 64 V24' stroke='%239CCC65' stroke-width='.6'/%3E%3Cellipse cx='50' cy='22' rx='5.6' ry='7.4' fill='%231B5E20'/%3E%3Cellipse cx='50' cy='22.6' rx='4.2' ry='5.6' fill='%23F9A825'/%3E%3Cellipse cx='50' cy='23.2' rx='2.9' ry='3.9' fill='%231565C0'/%3E%3Cellipse cx='50' cy='23.6' rx='1.5' ry='2' fill='%230A1F44'/%3E%3C/g%3E%3C/g%3E%3Cg transform='rotate(-48 50 64)'%3E%3Cg class='q' style='animation-delay:-0.14s'%3E%3Cpath d='M50 64 Q43 44 50 18 Q57 44 50 64Z' fill='%232F7D3B' opacity='.75'/%3E%3Cpath d='M50 64 V24' stroke='%239CCC65' stroke-width='.6'/%3E%3Cellipse cx='50' cy='22' rx='5.6' ry='7.4' fill='%231B5E20'/%3E%3Cellipse cx='50' cy='22.6' rx='4.2' ry='5.6' fill='%23F9A825'/%3E%3Cellipse cx='50' cy='23.2' rx='2.9' ry='3.9' fill='%231565C0'/%3E%3Cellipse cx='50' cy='23.6' rx='1.5' ry='2' fill='%230A1F44'/%3E%3C/g%3E%3C/g%3E%3Cg transform='rotate(-32 50 64)'%3E%3Cg class='q' style='animation-delay:-0.21s'%3E%3Cpath d='M50 64 Q43 44 50 18 Q57 44 50 64Z' fill='%232F7D3B' opacity='.75'/%3E%3Cpath d='M50 64 V24' stroke='%239CCC65' stroke-width='.6'/%3E%3Cellipse cx='50' cy='22' rx='5.6' ry='7.4' fill='%231B5E20'/%3E%3Cellipse cx='50' cy='22.6' rx='4.2' ry='5.6' fill='%23F9A825'/%3E%3Cellipse cx='50' cy='23.2' rx='2.9' ry='3.9' fill='%231565C0'/%3E%3Cellipse cx='50' cy='23.6' rx='1.5' ry='2' fill='%230A1F44'/%3E%3C/g%3E%3C/g%3E%3Cg transform='rotate(-16 50 64)'%3E%3Cg class='q' style='animation-delay:-0.00s'%3E%3Cpath d='M50 64 Q43 44 50 18 Q57 44 50 64Z' fill='%232F7D3B' opacity='.75'/%3E%3Cpath d='M50 64 V24' stroke='%239CCC65' stroke-width='.6'/%3E%3Cellipse cx='50' cy='22' rx='5.6' ry='7.4' fill='%231B5E20'/%3E%3Cellipse cx='50' cy='22.6' rx='4.2' ry='5.6' fill='%23F9A825'/%3E%3Cellipse cx='50' cy='23.2' rx='2.9' ry='3.9' fill='%231565C0'/%3E%3Cellipse cx='50' cy='23.6' rx='1.5' ry='2' fill='%230A1F44'/%3E%3C/g%3E%3C/g%3E%3Cg transform='rotate(0 50 64)'%3E%3Cg class='q' style='animation-delay:-0.07s'%3E%3Cpath d='M50 64 Q43 44 50 18 Q57 44 50 64Z' fill='%232F7D3B' opacity='.75'/%3E%3Cpath d='M50 64 V24' stroke='%239CCC65' stroke-width='.6'/%3E%3Cellipse cx='50' cy='22' rx='5.6' ry='7.4' fill='%231B5E20'/%3E%3Cellipse cx='50' cy='22.6' rx='4.2' ry='5.6' fill='%23F9A825'/%3E%3Cellipse cx='50' cy='23.2' rx='2.9' ry='3.9' fill='%231565C0'/%3E%3Cellipse cx='50' cy='23.6' rx='1.5' ry='2' fill='%230A1F44'/%3E%3C/g%3E%3C/g%3E%3Cg transform='rotate(16 50 64)'%3E%3Cg class='q' style='animation-delay:-0.14s'%3E%3Cpath d='M50 64 Q43 44 50 18 Q57 44 50 64Z' fill='%232F7D3B' opacity='.75'/%3E%3Cpath d='M50 64 V24' stroke='%239CCC65' stroke-width='.6'/%3E%3Cellipse cx='50' cy='22' rx='5.6' ry='7.4' fill='%231B5E20'/%3E%3Cellipse cx='50' cy='22.6' rx='4.2' ry='5.6' fill='%23F9A825'/%3E%3Cellipse cx='50' cy='23.2' rx='2.9' ry='3.9' fill='%231565C0'/%3E%3Cellipse cx='50' cy='23.6' rx='1.5' ry='2' fill='%230A1F44'/%3E%3C/g%3E%3C/g%3E%3Cg transform='rotate(32 50 64)'%3E%3Cg class='q' style='animation-delay:-0.21s'%3E%3Cpath d='M50 64 Q43 44 50 18 Q57 44 50 64Z' fill='%232F7D3B' opacity='.75'/%3E%3Cpath d='M50 64 V24' stroke='%239CCC65' stroke-width='.6'/%3E%3Cellipse cx='50' cy='22' rx='5.6' ry='7.4' fill='%231B5E20'/%3E%3Cellipse cx='50' cy='22.6' rx='4.2' ry='5.6' fill='%23F9A825'/%3E%3Cellipse cx='50' cy='23.2' rx='2.9' ry='3.9' fill='%231565C0'/%3E%3Cellipse cx='50' cy='23.6' rx='1.5' ry='2' fill='%230A1F44'/%3E%3C/g%3E%3C/g%3E%3Cg transform='rotate(48 50 64)'%3E%3Cg class='q' style='animation-delay:-0.00s'%3E%3Cpath d='M50 64 Q43 44 50 18 Q57 44 50 64Z' fill='%232F7D3B' opacity='.75'/%3E%3Cpath d='M50 64 V24' stroke='%239CCC65' stroke-width='.6'/%3E%3Cellipse cx='50' cy='22' rx='5.6' ry='7.4' fill='%231B5E20'/%3E%3Cellipse cx='50' cy='22.6' rx='4.2' ry='5.6' fill='%23F9A825'/%3E%3Cellipse cx='50' cy='23.2' rx='2.9' ry='3.9' fill='%231565C0'/%3E%3Cellipse cx='50' cy='23.6' rx='1.5' ry='2' fill='%230A1F44'/%3E%3C/g%3E%3C/g%3E%3Cg transform='rotate(64 50 64)'%3E%3Cg class='q' style='animation-delay:-0.07s'%3E%3Cpath d='M50 64 Q43 44 50 18 Q57 44 50 64Z' fill='%232F7D3B' opacity='.75'/%3E%3Cpath d='M50 64 V24' stroke='%239CCC65' stroke-width='.6'/%3E%3Cellipse cx='50' cy='22' rx='5.6' ry='7.4' fill='%231B5E20'/%3E%3Cellipse cx='50' cy='22.6' rx='4.2' ry='5.6' fill='%23F9A825'/%3E%3Cellipse cx='50' cy='23.2' rx='2.9' ry='3.9' fill='%231565C0'/%3E%3Cellipse cx='50' cy='23.6' rx='1.5' ry='2' fill='%230A1F44'/%3E%3C/g%3E%3C/g%3E%3Cg transform='rotate(80 50 64)'%3E%3Cg class='q' style='animation-delay:-0.14s'%3E%3Cpath d='M50 64 Q43 44 50 18 Q57 44 50 64Z' fill='%232F7D3B' opacity='.75'/%3E%3Cpath d='M50 64 V24' stroke='%239CCC65' stroke-width='.6'/%3E%3Cellipse cx='50' cy='22' rx='5.6' ry='7.4' fill='%231B5E20'/%3E%3Cellipse cx='50' cy='22.6' rx='4.2' ry='5.6' fill='%23F9A825'/%3E%3Cellipse cx='50' cy='23.2' rx='2.9' ry='3.9' fill='%231565C0'/%3E%3Cellipse cx='50' cy='23.6' rx='1.5' ry='2' fill='%230A1F44'/%3E%3C/g%3E%3C/g%3E%3Cg transform='rotate(-72 50 64)'%3E%3Cpath d='M50 64 Q45 50 50 36 Q55 50 50 64Z' fill='%2343A047' opacity='.8'/%3E%3Cellipse cx='50' cy='38' rx='3.4' ry='4.4' fill='%23F9A825'/%3E%3Cellipse cx='50' cy='38.5' rx='2.2' ry='3' fill='%231976D2'/%3E%3Cellipse cx='50' cy='38.8' rx='1' ry='1.4' fill='%230A1F44'/%3E%3C/g%3E%3Cg transform='rotate(-56 50 64)'%3E%3Cpath d='M50 64 Q45 50 50 36 Q55 50 50 64Z' fill='%2343A047' opacity='.8'/%3E%3Cellipse cx='50' cy='38' rx='3.4' ry='4.4' fill='%23F9A825'/%3E%3Cellipse cx='50' cy='38.5' rx='2.2' ry='3' fill='%231976D2'/%3E%3Cellipse cx='50' cy='38.8' rx='1' ry='1.4' fill='%230A1F44'/%3E%3C/g%3E%3Cg transform='rotate(-40 50 64)'%3E%3Cpath d='M50 64 Q45 50 50 36 Q55 50 50 64Z' fill='%2343A047' opacity='.8'/%3E%3Cellipse cx='50' cy='38' rx='3.4' ry='4.4' fill='%23F9A825'/%3E%3Cellipse cx='50' cy='38.5' rx='2.2' ry='3' fill='%231976D2'/%3E%3Cellipse cx='50' cy='38.8' rx='1' ry='1.4' fill='%230A1F44'/%3E%3C/g%3E%3Cg transform='rotate(-24 50 64)'%3E%3Cpath d='M50 64 Q45 50 50 36 Q55 50 50 64Z' fill='%2343A047' opacity='.8'/%3E%3Cellipse cx='50' cy='38' rx='3.4' ry='4.4' fill='%23F9A825'/%3E%3Cellipse cx='50' cy='38.5' rx='2.2' ry='3' fill='%231976D2'/%3E%3Cellipse cx='50' cy='38.8' rx='1' ry='1.4' fill='%230A1F44'/%3E%3C/g%3E%3Cg transform='rotate(-8 50 64)'%3E%3Cpath d='M50 64 Q45 50 50 36 Q55 50 50 64Z' fill='%2343A047' opacity='.8'/%3E%3Cellipse cx='50' cy='38' rx='3.4' ry='4.4' fill='%23F9A825'/%3E%3Cellipse cx='50' cy='38.5' rx='2.2' ry='3' fill='%231976D2'/%3E%3Cellipse cx='50' cy='38.8' rx='1' ry='1.4' fill='%230A1F44'/%3E%3C/g%3E%3Cg transform='rotate(8 50 64)'%3E%3Cpath d='M50 64 Q45 50 50 36 Q55 50 50 64Z' fill='%2343A047' opacity='.8'/%3E%3Cellipse cx='50' cy='38' rx='3.4' ry='4.4' fill='%23F9A825'/%3E%3Cellipse cx='50' cy='38.5' rx='2.2' ry='3' fill='%231976D2'/%3E%3Cellipse cx='50' cy='38.8' rx='1' ry='1.4' fill='%230A1F44'/%3E%3C/g%3E%3Cg transform='rotate(24 50 64)'%3E%3Cpath d='M50 64 Q45 50 50 36 Q55 50 50 64Z' fill='%2343A047' opacity='.8'/%3E%3Cellipse cx='50' cy='38' rx='3.4' ry='4.4' fill='%23F9A825'/%3E%3Cellipse cx='50' cy='38.5' rx='2.2' ry='3' fill='%231976D2'/%3E%3Cellipse cx='50' cy='38.8' rx='1' ry='1.4' fill='%230A1F44'/%3E%3C/g%3E%3Cg transform='rotate(40 50 64)'%3E%3Cpath d='M50 64 Q45 50 50 36 Q55 50 50 64Z' fill='%2343A047' opacity='.8'/%3E%3Cellipse cx='50' cy='38' rx='3.4' ry='4.4' fill='%23F9A825'/%3E%3Cellipse cx='50' cy='38.5' rx='2.2' ry='3' fill='%231976D2'/%3E%3Cellipse cx='50' cy='38.8' rx='1' ry='1.4' fill='%230A1F44'/%3E%3C/g%3E%3Cg transform='rotate(56 50 64)'%3E%3Cpath d='M50 64 Q45 50 50 36 Q55 50 50 64Z' fill='%2343A047' opacity='.8'/%3E%3Cellipse cx='50' cy='38' rx='3.4' ry='4.4' fill='%23F9A825'/%3E%3Cellipse cx='50' cy='38.5' rx='2.2' ry='3' fill='%231976D2'/%3E%3Cellipse cx='50' cy='38.8' rx='1' ry='1.4' fill='%230A1F44'/%3E%3C/g%3E%3Cg transform='rotate(72 50 64)'%3E%3Cpath d='M50 64 Q45 50 50 36 Q55 50 50 64Z' fill='%2343A047' opacity='.8'/%3E%3Cellipse cx='50' cy='38' rx='3.4' ry='4.4' fill='%23F9A825'/%3E%3Cellipse cx='50' cy='38.5' rx='2.2' ry='3' fill='%231976D2'/%3E%3Cellipse cx='50' cy='38.8' rx='1' ry='1.4' fill='%230A1F44'/%3E%3C/g%3E%3C/g%3E%3Cg class='bd'%3E%3Cpath d='M47 84 L46 92 M53 84 L54 92' stroke='%23B0957A' stroke-width='1.3' stroke-linecap='round'/%3E%3Cellipse cx='50' cy='76' rx='7.5' ry='9' fill='%230D47A1'/%3E%3Cpath d='M44 74 C46 82 54 84 57 78 C55 86 46 88 44 74Z' fill='%238D6E63'/%3E%3Cpath d='M47 72 C45 62 47 52 50 47 C53 52 54 62 53 72Z' fill='url(%23n)'/%3E%3Cg class='hd'%3E%3Ccircle cx='51' cy='45' r='3.6' fill='%231E88E5'/%3E%3Cellipse cx='52.2' cy='44.2' rx='1.5' ry='.9' fill='%23FFF'/%3E%3Ccircle cx='52.4' cy='44.3' r='.5' fill='%23111'/%3E%3Cpath d='M54.3 45 L57.5 45.8 L54.3 46.6Z' fill='%23C9A26B'/%3E%3Cpath d='M50 41.6 L48.6 36.4 M51 41.4 L51 36 M52 41.6 L53.4 36.4' stroke='%231E88E5' stroke-width='.5'/%3E%3Ccircle cx='48.6' cy='36.2' r='.9' fill='%231E88E5'/%3E%3Ccircle cx='51' cy='35.8' r='.9' fill='%231E88E5'/%3E%3Ccircle cx='53.4' cy='36.2' r='.9' fill='%231E88E5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")}\n.blk.sc1,.scsample.sc1{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid slice'%3E%3Cdefs%3E%3ClinearGradient id='b' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%232E4A66'/%3E%3Cstop offset='.55' stop-color='%237E9DB4'/%3E%3Cstop offset='.56' stop-color='%231C6E92'/%3E%3Cstop offset='1' stop-color='%230B3A55'/%3E%3C/linearGradient%3E%3Cpath id='w' d='M0 0 Q12.5 -7 25 0 T50 0 T75 0 T100 0 T125 0 T150 0 T175 0 T200 0 V60 H0Z'/%3E%3C/defs%3E%3Cstyle%3E.w1%7Banimation:mv 5s linear infinite%7D.w2%7Banimation:mv 3.6s linear infinite%7D.w3%7Banimation:mv 2.6s linear infinite%7D@keyframes mv%7Bfrom%7Btransform:translateX(0)%7Dto%7Btransform:translateX(-50px)%7D%7D.bob%7Banimation:bob 2.6s ease-in-out infinite%7D@keyframes bob%7B50%25%7Btransform:translateY(-2.5px)%7D%7D.dr%7Banimation:dr 2.6s ease-out infinite;opacity:0%7D@keyframes dr%7B0%25,40%25%7Bopacity:0;transform:translate(0,0)%7D50%25%7Bopacity:1%7D100%25%7Bopacity:0;transform:translate(var(--x),-18px)%7D%7D.cl%7Banimation:cl 14s linear infinite%7D@keyframes cl%7Bfrom%7Btransform:translateX(-30px)%7Dto%7Btransform:translateX(110px)%7D%7D.gl%7Banimation:gl 9s linear infinite%7D@keyframes gl%7Bfrom%7Btransform:translate(-20px,0)%7Dto%7Btransform:translate(120px,-6px)%7D%7D.wg%7Banimation:wg .45s ease-in-out infinite alternate;transform-box:fill-box;transform-origin:center%7D@keyframes wg%7Bto%7Btransform:scaleY(-.5)%7D%7D%3C/style%3E%3Crect width='100' height='100' fill='url(%23b)'/%3E%3Cg class='cl'%3E%3Cellipse cx='10' cy='18' rx='12' ry='4' fill='%239FB4C6' opacity='.7'/%3E%3Cellipse cx='18' cy='15' rx='8' ry='4' fill='%23B5C7D5' opacity='.7'/%3E%3C/g%3E%3Cg class='gl'%3E%3Cpath class='wg' d='M10 30 q3 -3 6 0 q3 -3 6 0' fill='none' stroke='%23F2F5F8' stroke-width='1.2' stroke-linecap='round'/%3E%3C/g%3E%3Cg class='bob'%3E%3Cg transform='translate(0 58)'%3E%3Cuse class='w1' href='%23w' fill='%2322769A'/%3E%3C/g%3E%3C/g%3E%3Cpath d='M74 100 L78 68 L86 62 L94 66 L100 64 V100Z' fill='%232B2F36'/%3E%3Cpath d='M78 68 L86 62 L90 66 L82 72Z' fill='%233C424B'/%3E%3Cg class='bob' style='animation-delay:-1s'%3E%3Cg transform='translate(0 70)'%3E%3Cuse class='w2' href='%23w' fill='%23155F84'/%3E%3Cuse class='w2' href='%23w' fill='none' stroke='%23D7EEF7' stroke-width='1.2' opacity='.8'/%3E%3C/g%3E%3C/g%3E%3Cg transform='translate(84 66)'%3E%3Ccircle class='dr' r='1.6' fill='%23EAF6FB' style='--x:-8px'/%3E%3Ccircle class='dr' r='1.2' fill='%23EAF6FB' style='--x:-3px;animation-delay:-.2s'/%3E%3Ccircle class='dr' r='1.4' fill='%23EAF6FB' style='--x:4px;animation-delay:-.4s'/%3E%3Ccircle class='dr' r='1' fill='%23EAF6FB' style='--x:-12px;animation-delay:-.6s'/%3E%3Ccircle class='dr' r='1.8' fill='%23FFFFFF' style='--x:1px;animation-delay:-.1s'/%3E%3C/g%3E%3Cg class='bob' style='animation-delay:-2s'%3E%3Cg transform='translate(0 82)'%3E%3Cuse class='w3' href='%23w' fill='%230C4A6B'/%3E%3Cuse class='w3' href='%23w' fill='none' stroke='%23FFFFFF' stroke-width='1.6' stroke-dasharray='6 4' opacity='.85'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")}\n.blk.sc2,.scsample.sc2{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid slice'%3E%3Cdefs%3E%3CradialGradient id='b' cx='.5' cy='.45' r='.75'%3E%3Cstop offset='0' stop-color='%23FFCC80'/%3E%3Cstop offset='.55' stop-color='%23EF7B2B'/%3E%3Cstop offset='1' stop-color='%236B2410'/%3E%3C/radialGradient%3E%3C/defs%3E%3Cstyle%3E.mn%7Banimation:mn 4s ease-in-out infinite;transform-origin:50px 54px%7D@keyframes mn%7B0%25,40%25,100%25%7Btransform:scale(1) rotate(0)%7D55%25%7Btransform:scale(1.06) rotate(-2deg)%7D65%25%7Btransform:scale(1.05) rotate(2deg)%7D75%25%7Btransform:scale(1.06) rotate(-1deg)%7D%7D.mo%7Banimation:mo 4s ease-in-out infinite;transform-origin:50px 64px%7D@keyframes mo%7B0%25,40%25,90%25,100%25%7Btransform:scaleY(.08)%7D52%25,80%25%7Btransform:scaleY(1)%7D%7D.jw%7Banimation:jw 4s ease-in-out infinite%7D@keyframes jw%7B0%25,40%25,90%25,100%25%7Btransform:translateY(0)%7D52%25,80%25%7Btransform:translateY(5px)%7D%7D.br%7Banimation:br 4s ease-in-out infinite;transform-box:fill-box;transform-origin:center%7D@keyframes br%7B0%25,40%25,90%25,100%25%7Btransform:rotate(0)%7D52%25,80%25%7Btransform:rotate(var(--r))%7D%7D.rw%7Banimation:rw 4s ease-out infinite;opacity:0;transform-origin:50px 74px%7D@keyframes rw%7B0%25,50%25%7Bopacity:0;transform:scale(.6)%7D60%25%7Bopacity:.9%7D85%25,100%25%7Bopacity:0;transform:scale(1.5)%7D%7D.ey%7Banimation:ey 4s ease-in-out infinite;transform-box:fill-box;transform-origin:center%7D@keyframes ey%7B0%25,40%25,90%25,100%25%7Btransform:scaleY(1)%7D52%25,80%25%7Btransform:scaleY(.45)%7D%7D%3C/style%3E%3Crect width='100' height='100' fill='url(%23b)'/%3E%3Cpath d='M0 92 L6 84 L10 92 L16 82 L22 92 L30 86 L36 94 V100 H0Z M64 94 L70 84 L76 92 L82 82 L88 92 L94 84 L100 90 V100 H64Z' fill='%234A1A0A'/%3E%3Cg class='mn'%3E%3Cpolygon points='50.0,18.0 54.9,26.4 62.3,20.2 64.0,29.8 73.1,26.4 71.4,36.0 81.2,36.0 76.3,44.4 85.5,47.7 78.0,54.0 85.5,60.3 76.3,63.6 81.2,72.0 71.4,72.0 73.1,81.6 64.0,78.2 62.3,87.8 54.9,81.6 50.0,90.0 45.1,81.6 37.7,87.8 36.0,78.2 26.9,81.6 28.6,72.0 18.8,72.0 23.7,63.6 14.5,60.3 22.0,54.0 14.5,47.7 23.7,44.4 18.8,36.0 28.6,36.0 26.9,26.4 36.0,29.8 37.7,20.2 45.1,26.4' fill='%237B3F12'/%3E%3Ccircle cx='50' cy='54' r='27' fill='%239A5418'/%3E%3C/g%3E%3Ccircle cx='35' cy='36' r='5.5' fill='%23D9964A'/%3E%3Ccircle cx='35' cy='36' r='2.8' fill='%237A4A20'/%3E%3Ccircle cx='65' cy='36' r='5.5' fill='%23D9964A'/%3E%3Ccircle cx='65' cy='36' r='2.8' fill='%237A4A20'/%3E%3Cellipse cx='50' cy='54' rx='17' ry='19.5' fill='%23E2A55C'/%3E%3Cpath class='br' d='M40 45 L47 47' stroke='%235A3214' stroke-width='1.6' stroke-linecap='round' style='--r:14deg'/%3E%3Cpath class='br' d='M60 45 L53 47' stroke='%235A3214' stroke-width='1.6' stroke-linecap='round' style='--r:-14deg'/%3E%3Cellipse class='ey' cx='44' cy='50' rx='2' ry='2.2' fill='%233A2414'/%3E%3Cellipse class='ey' cx='56' cy='50' rx='2' ry='2.2' fill='%233A2414'/%3E%3Ccircle cx='44.6' cy='49.3' r='.6' fill='%23FFF'/%3E%3Ccircle cx='56.6' cy='49.3' r='.6' fill='%23FFF'/%3E%3Cg class='jw'%3E%3Cellipse cx='50' cy='71' rx='7.5' ry='5' fill='%23F1CF9C'/%3E%3C/g%3E%3Cellipse cx='50' cy='62.5' rx='10' ry='7' fill='%23F3D5A6'/%3E%3Cg class='mo'%3E%3Cellipse cx='50' cy='69' rx='6.6' ry='6' fill='%237A1414'/%3E%3Cellipse cx='50' cy='72' rx='4' ry='2.6' fill='%23C2414B'/%3E%3Cpath d='M44.2 66 l1.6 3.6 1.6 -3.6Z M52.6 66 l1.6 3.6 1.6 -3.6Z' fill='%23FFF8E8'/%3E%3C/g%3E%3Cpath d='M45.5 57.5 L54.5 57.5 L50 62Z' fill='%234A2A14'/%3E%3Cpath d='M50 62 V64.5 M50 64.5 Q46 66 44 64.5 M50 64.5 Q54 66 56 64.5' stroke='%234A2A14' stroke-width='.9' fill='none'/%3E%3Cg fill='none' stroke='%23FFF3D6' stroke-width='1.4' stroke-linecap='round'%3E%3Cpath class='rw' d='M40 80 Q50 86 60 80'/%3E%3Cpath class='rw' d='M36 84 Q50 92 64 84' style='animation-delay:-.15s'/%3E%3Cpath class='rw' d='M32 88 Q50 98 68 88' style='animation-delay:-.3s'/%3E%3C/g%3E%3C/svg%3E\")}\n.blk.sc3,.scsample.sc3{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid slice'%3E%3Cdefs%3E%3ClinearGradient id='b' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%2326323F'/%3E%3Cstop offset='1' stop-color='%2346596A'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cstyle%3E.rd%7Bstroke:%23BFD6E6;stroke-width:.9;stroke-linecap:round;opacity:.85;animation:rd .8s linear infinite%7D@keyframes rd%7Bfrom%7Btransform:translate(0,-12px)%7Dto%7Btransform:translate(-6px,92px)%7D%7D.rp%7Banimation:rp 1.6s ease-out infinite;transform-box:fill-box;transform-origin:center%7D@keyframes rp%7Bfrom%7Btransform:scale(.2);opacity:.9%7Dto%7Btransform:scale(1.6);opacity:0%7D%7D.bt%7Banimation:bt 2.4s ease-in-out infinite;transform-origin:56px 84px%7D@keyframes bt%7B0%25,100%25%7Btransform:rotate(-5deg) translateY(0)%7D50%25%7Btransform:rotate(5deg) translateY(-1px)%7D%7D.fl%7Banimation:fl 6s linear infinite;opacity:0%7D@keyframes fl%7B0%25,93%25,100%25%7Bopacity:0%7D94%25%7Bopacity:.55%7D95%25%7Bopacity:.1%7D96%25%7Bopacity:.45%7D%7D.cl%7Banimation:cl 12s ease-in-out infinite alternate%7D@keyframes cl%7Bto%7Btransform:translateX(8px)%7D%7D%3C/style%3E%3Crect width='100' height='100' fill='url(%23b)'/%3E%3Crect class='fl' width='100' height='100' fill='%23EAF2FF'/%3E%3Cg class='cl'%3E%3Cellipse cx='22' cy='12' rx='22' ry='9' fill='%235B6B7C'/%3E%3Cellipse cx='42' cy='8' rx='16' ry='8' fill='%236B7B8C'/%3E%3Cellipse cx='70' cy='12' rx='24' ry='9' fill='%23566676'/%3E%3Cellipse cx='92' cy='8' rx='14' ry='7' fill='%23647485'/%3E%3C/g%3E%3Cpath class='fl' d='M62 14 L56 28 L61 28 L55 42' stroke='%23FFF6C2' stroke-width='1.4' fill='none'/%3E%3Cline class='rd' x1='4' y1='0' x2='2' y2='8' style='animation-delay:-0.29s;animation-duration:0.66s'/%3E%3Cline class='rd' x1='11' y1='0' x2='9' y2='8' style='animation-delay:-0.59s;animation-duration:0.63s'/%3E%3Cline class='rd' x1='18' y1='0' x2='16' y2='8' style='animation-delay:-0.48s;animation-duration:0.75s'/%3E%3Cline class='rd' x1='25' y1='0' x2='23' y2='8' style='animation-delay:-0.05s;animation-duration:0.80s'/%3E%3Cline class='rd' x1='32' y1='0' x2='30' y2='8' style='animation-delay:-0.03s;animation-duration:0.77s'/%3E%3Cline class='rd' x1='39' y1='0' x2='37' y2='8' style='animation-delay:-0.06s;animation-duration:0.64s'/%3E%3Cline class='rd' x1='46' y1='0' x2='44' y2='8' style='animation-delay:-0.38s;animation-duration:0.93s'/%3E%3Cline class='rd' x1='53' y1='0' x2='51' y2='8' style='animation-delay:-0.11s;animation-duration:0.69s'/%3E%3Cline class='rd' x1='60' y1='0' x2='58' y2='8' style='animation-delay:-0.56s;animation-duration:0.98s'/%3E%3Cline class='rd' x1='67' y1='0' x2='65' y2='8' style='animation-delay:-0.52s;animation-duration:0.76s'/%3E%3Cline class='rd' x1='74' y1='0' x2='72' y2='8' style='animation-delay:-0.88s;animation-duration:0.62s'/%3E%3Cline class='rd' x1='81' y1='0' x2='79' y2='8' style='animation-delay:-0.77s;animation-duration:0.72s'/%3E%3Cline class='rd' x1='88' y1='0' x2='86' y2='8' style='animation-delay:-0.13s;animation-duration:0.65s'/%3E%3Cline class='rd' x1='95' y1='0' x2='93' y2='8' style='animation-delay:-0.28s;animation-duration:0.93s'/%3E%3Cellipse cx='50' cy='88' rx='46' ry='10' fill='%232F4556'/%3E%3Cellipse cx='50' cy='87' rx='42' ry='7.5' fill='%233D5A70'/%3E%3Cellipse class='rp' cx='24' cy='88' rx='6' ry='1.8' fill='none' stroke='%23A9C7DA' stroke-width='.6'/%3E%3Cellipse class='rp' cx='78' cy='86' rx='6' ry='1.8' fill='none' stroke='%23A9C7DA' stroke-width='.6' style='animation-delay:-.6s'/%3E%3Cellipse class='rp' cx='40' cy='91' rx='5' ry='1.5' fill='none' stroke='%23A9C7DA' stroke-width='.6' style='animation-delay:-1.1s'/%3E%3Cg class='bt'%3E%3Cpath d='M46 82 L66 82 L62 87 L50 87Z' fill='%23F5F1E6'/%3E%3Cpath d='M55 82 L55 71 L63 82Z' fill='%23FFFFFF'/%3E%3Cpath d='M55 82 L55 73 L49 82Z' fill='%23E4DECF'/%3E%3C/g%3E%3C/svg%3E\")}\n.blk.sc4,.scsample.sc4{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid slice'%3E%3Cdefs%3E%3ClinearGradient id='b' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%230F2C1D'/%3E%3Cstop offset='1' stop-color='%231F4F31'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cstyle%3E.o%7Banimation:o 6s ease-in-out infinite;transform:scale(0)%7D@keyframes o%7B0%25,8%25%7Btransform:scale(0) rotate(-60deg)%7D38%25,82%25%7Btransform:scale(1) rotate(0)%7D96%25,100%25%7Btransform:scale(0) rotate(-60deg)%7D%7D.i%7Banimation:i 6s ease-in-out infinite;transform:scale(0)%7D@keyframes i%7B0%25,14%25%7Btransform:scale(0) rotate(40deg)%7D42%25,80%25%7Btransform:scale(1) rotate(0)%7D94%25,100%25%7Btransform:scale(0) rotate(40deg)%7D%7D.c%7Banimation:c 6s ease-in-out infinite;transform:scale(0)%7D@keyframes c%7B0%25,22%25%7Btransform:scale(0)%7D44%25,78%25%7Btransform:scale(1)%7D92%25,100%25%7Btransform:scale(0)%7D%7D.bud%7Banimation:bd 6s ease-in-out infinite%7D@keyframes bd%7B0%25,10%25,94%25,100%25%7Bopacity:1%7D30%25,84%25%7Bopacity:0%7D%7D.pl%7Banimation:pl 5s linear infinite;opacity:0%7D@keyframes pl%7B0%25%7Bopacity:0;transform:translate(0,0)%7D20%25%7Bopacity:1%7D100%25%7Bopacity:0;transform:translate(6px,-30px)%7D%7D.sw%7Banimation:sw 5s ease-in-out infinite;transform-origin:50px 100px%7D@keyframes sw%7B50%25%7Btransform:rotate(2deg)%7D%7D%3C/style%3E%3Crect width='100' height='100' fill='url(%23b)'/%3E%3Cg class='sw'%3E%3Cpath d='M26 100 C28 84 24 70 26 58 M72 100 C70 86 74 74 72 66 M50 100 C51 92 49 84 50 80' stroke='%233E8E4A' stroke-width='2' fill='none'/%3E%3Cpath d='M26 80 C16 74 12 78 10 82 C16 84 22 84 26 80Z M72 84 C82 78 88 80 90 84 C84 88 78 88 72 84Z M50 90 C42 86 38 88 36 92 C42 94 46 94 50 90Z' fill='%232E7D3C'/%3E%3Cg transform='translate(26 54)'%3E%3Cg class='bud' style='animation-delay:0s'%3E%3Cellipse cx='0' cy='-3.8' rx='3.8' ry='6.2' fill='%234C9A4A'/%3E%3C/g%3E%3Cg class='o' style='animation-delay:0s'%3E%3Cellipse cx='0' cy='-10.0' rx='5.2' ry='10.0' fill='%23F06292' transform='rotate(0)'/%3E%3Cellipse cx='0' cy='-10.0' rx='5.2' ry='10.0' fill='%23F06292' transform='rotate(45)'/%3E%3Cellipse cx='0' cy='-10.0' rx='5.2' ry='10.0' fill='%23F06292' transform='rotate(90)'/%3E%3Cellipse cx='0' cy='-10.0' rx='5.2' ry='10.0' fill='%23F06292' transform='rotate(135)'/%3E%3Cellipse cx='0' cy='-10.0' rx='5.2' ry='10.0' fill='%23F06292' transform='rotate(180)'/%3E%3Cellipse cx='0' cy='-10.0' rx='5.2' ry='10.0' fill='%23F06292' transform='rotate(225)'/%3E%3Cellipse cx='0' cy='-10.0' rx='5.2' ry='10.0' fill='%23F06292' transform='rotate(270)'/%3E%3Cellipse cx='0' cy='-10.0' rx='5.2' ry='10.0' fill='%23F06292' transform='rotate(315)'/%3E%3C/g%3E%3Cg class='i' style='animation-delay:0s'%3E%3Cellipse cx='0' cy='-6.2' rx='3.8' ry='6.2' fill='%23F8BBD0' transform='rotate(22)'/%3E%3Cellipse cx='0' cy='-6.2' rx='3.8' ry='6.2' fill='%23F8BBD0' transform='rotate(67)'/%3E%3Cellipse cx='0' cy='-6.2' rx='3.8' ry='6.2' fill='%23F8BBD0' transform='rotate(112)'/%3E%3Cellipse cx='0' cy='-6.2' rx='3.8' ry='6.2' fill='%23F8BBD0' transform='rotate(157)'/%3E%3Cellipse cx='0' cy='-6.2' rx='3.8' ry='6.2' fill='%23F8BBD0' transform='rotate(202)'/%3E%3Cellipse cx='0' cy='-6.2' rx='3.8' ry='6.2' fill='%23F8BBD0' transform='rotate(247)'/%3E%3Cellipse cx='0' cy='-6.2' rx='3.8' ry='6.2' fill='%23F8BBD0' transform='rotate(292)'/%3E%3Cellipse cx='0' cy='-6.2' rx='3.8' ry='6.2' fill='%23F8BBD0' transform='rotate(337)'/%3E%3C/g%3E%3Ccircle class='c' r='3.8' fill='%23FFD54F' style='animation-delay:0s'/%3E%3C/g%3E%3Cg transform='translate(72 62)'%3E%3Cg class='bud' style='animation-delay:-2s'%3E%3Cellipse cx='0' cy='-3.2' rx='3.2' ry='5.2' fill='%234C9A4A'/%3E%3C/g%3E%3Cg class='o' style='animation-delay:-2s'%3E%3Cellipse cx='0' cy='-8.4' rx='4.4' ry='8.4' fill='%23E53935' transform='rotate(0)'/%3E%3Cellipse cx='0' cy='-8.4' rx='4.4' ry='8.4' fill='%23E53935' transform='rotate(45)'/%3E%3Cellipse cx='0' cy='-8.4' rx='4.4' ry='8.4' fill='%23E53935' transform='rotate(90)'/%3E%3Cellipse cx='0' cy='-8.4' rx='4.4' ry='8.4' fill='%23E53935' transform='rotate(135)'/%3E%3Cellipse cx='0' cy='-8.4' rx='4.4' ry='8.4' fill='%23E53935' transform='rotate(180)'/%3E%3Cellipse cx='0' cy='-8.4' rx='4.4' ry='8.4' fill='%23E53935' transform='rotate(225)'/%3E%3Cellipse cx='0' cy='-8.4' rx='4.4' ry='8.4' fill='%23E53935' transform='rotate(270)'/%3E%3Cellipse cx='0' cy='-8.4' rx='4.4' ry='8.4' fill='%23E53935' transform='rotate(315)'/%3E%3C/g%3E%3Cg class='i' style='animation-delay:-2s'%3E%3Cellipse cx='0' cy='-5.2' rx='3.2' ry='5.2' fill='%23FF8A80' transform='rotate(22)'/%3E%3Cellipse cx='0' cy='-5.2' rx='3.2' ry='5.2' fill='%23FF8A80' transform='rotate(67)'/%3E%3Cellipse cx='0' cy='-5.2' rx='3.2' ry='5.2' fill='%23FF8A80' transform='rotate(112)'/%3E%3Cellipse cx='0' cy='-5.2' rx='3.2' ry='5.2' fill='%23FF8A80' transform='rotate(157)'/%3E%3Cellipse cx='0' cy='-5.2' rx='3.2' ry='5.2' fill='%23FF8A80' transform='rotate(202)'/%3E%3Cellipse cx='0' cy='-5.2' rx='3.2' ry='5.2' fill='%23FF8A80' transform='rotate(247)'/%3E%3Cellipse cx='0' cy='-5.2' rx='3.2' ry='5.2' fill='%23FF8A80' transform='rotate(292)'/%3E%3Cellipse cx='0' cy='-5.2' rx='3.2' ry='5.2' fill='%23FF8A80' transform='rotate(337)'/%3E%3C/g%3E%3Ccircle class='c' r='3.2' fill='%23FFEB3B' style='animation-delay:-2s'/%3E%3C/g%3E%3Cg transform='translate(50 78)'%3E%3Cg class='bud' style='animation-delay:-4s'%3E%3Cellipse cx='0' cy='-2.5' rx='2.5' ry='4.2' fill='%234C9A4A'/%3E%3C/g%3E%3Cg class='o' style='animation-delay:-4s'%3E%3Cellipse cx='0' cy='-6.8' rx='3.6' ry='6.8' fill='%23FFB300' transform='rotate(0)'/%3E%3Cellipse cx='0' cy='-6.8' rx='3.6' ry='6.8' fill='%23FFB300' transform='rotate(45)'/%3E%3Cellipse cx='0' cy='-6.8' rx='3.6' ry='6.8' fill='%23FFB300' transform='rotate(90)'/%3E%3Cellipse cx='0' cy='-6.8' rx='3.6' ry='6.8' fill='%23FFB300' transform='rotate(135)'/%3E%3Cellipse cx='0' cy='-6.8' rx='3.6' ry='6.8' fill='%23FFB300' transform='rotate(180)'/%3E%3Cellipse cx='0' cy='-6.8' rx='3.6' ry='6.8' fill='%23FFB300' transform='rotate(225)'/%3E%3Cellipse cx='0' cy='-6.8' rx='3.6' ry='6.8' fill='%23FFB300' transform='rotate(270)'/%3E%3Cellipse cx='0' cy='-6.8' rx='3.6' ry='6.8' fill='%23FFB300' transform='rotate(315)'/%3E%3C/g%3E%3Cg class='i' style='animation-delay:-4s'%3E%3Cellipse cx='0' cy='-4.2' rx='2.5' ry='4.2' fill='%23FFE082' transform='rotate(22)'/%3E%3Cellipse cx='0' cy='-4.2' rx='2.5' ry='4.2' fill='%23FFE082' transform='rotate(67)'/%3E%3Cellipse cx='0' cy='-4.2' rx='2.5' ry='4.2' fill='%23FFE082' transform='rotate(112)'/%3E%3Cellipse cx='0' cy='-4.2' rx='2.5' ry='4.2' fill='%23FFE082' transform='rotate(157)'/%3E%3Cellipse cx='0' cy='-4.2' rx='2.5' ry='4.2' fill='%23FFE082' transform='rotate(202)'/%3E%3Cellipse cx='0' cy='-4.2' rx='2.5' ry='4.2' fill='%23FFE082' transform='rotate(247)'/%3E%3Cellipse cx='0' cy='-4.2' rx='2.5' ry='4.2' fill='%23FFE082' transform='rotate(292)'/%3E%3Cellipse cx='0' cy='-4.2' rx='2.5' ry='4.2' fill='%23FFE082' transform='rotate(337)'/%3E%3C/g%3E%3Ccircle class='c' r='2.5' fill='%238D4E1A' style='animation-delay:-4s'/%3E%3C/g%3E%3C/g%3E%3Ccircle class='pl' cx='30' cy='50' r='.9' fill='%23FFF59D'/%3E%3Ccircle class='pl' cx='70' cy='58' r='.8' fill='%23FFF59D' style='animation-delay:-2s'/%3E%3Ccircle class='pl' cx='50' cy='74' r='.8' fill='%23FFF59D' style='animation-delay:-3.5s'/%3E%3C/svg%3E\")}\n.blk.sc5,.scsample.sc5{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid slice'%3E%3Cdefs%3E%3ClinearGradient id='b' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%230B1630'/%3E%3Cstop offset='1' stop-color='%231A3350'/%3E%3C/linearGradient%3E%3CradialGradient id='g'%3E%3Cstop offset='0' stop-color='%23FFF6B8'/%3E%3Cstop offset='.35' stop-color='%23FFE066' stop-opacity='.9'/%3E%3Cstop offset='1' stop-color='%23FFE066' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Cstyle%3E.f%7Banimation:fl 3.2s ease-in-out infinite;transform-box:fill-box;transform-origin:center%7D.f2%7Banimation-delay:-1s;animation-duration:2.6s%7D.f3%7Banimation-delay:-2s;animation-duration:3.8s%7D.f4%7Banimation-delay:-.5s;animation-duration:2.9s%7D.f5%7Banimation-delay:-1.6s%7D@keyframes fl%7B0%25,100%25%7Bopacity:.15;transform:translate(0,0)%7D50%25%7Bopacity:1;transform:translate(4px,-6px)%7D%7D.st%7Banimation:tw 4s ease-in-out infinite%7D@keyframes tw%7B50%25%7Bopacity:.25%7D%7D%3C/style%3E%3Crect width='100' height='100' fill='url(%23b)'/%3E%3Ccircle class='st' cx='18' cy='16' r='.9' fill='%23DDE7FF'/%3E%3Ccircle class='st' cx='72' cy='10' r='.7' fill='%23DDE7FF' style='animation-delay:-2s'/%3E%3Ccircle cx='88' cy='26' r='.6' fill='%23DDE7FF'/%3E%3Ccircle cx='80' cy='20' r='7' fill='%23F3E6B5'/%3E%3Ccircle cx='83' cy='18' r='6.2' fill='%230F1C38'/%3E%3Cpath d='M0 78 Q25 66 50 74 T100 70 V100 H0Z' fill='%2313301F'/%3E%3Cpath d='M0 88 Q30 80 60 86 T100 84 V100 H0Z' fill='%230C2316'/%3E%3Cg fill='%230C2316'%3E%3Cpath d='M10 88 l3-16 2 16z'/%3E%3Cpath d='M20 88 l2-12 3 12z'/%3E%3Cpath d='M62 88 l3-14 2 14z'/%3E%3Cpath d='M74 88 l2-18 3 18z'/%3E%3Cpath d='M86 88 l2-11 2 11z'/%3E%3C/g%3E%3Ccircle class='f' cx='24' cy='56' r='5' fill='url(%23g)'/%3E%3Ccircle class='f f2' cx='46' cy='44' r='4.5' fill='url(%23g)'/%3E%3Ccircle class='f f3' cx='66' cy='60' r='5' fill='url(%23g)'/%3E%3Ccircle class='f f4' cx='36' cy='70' r='4' fill='url(%23g)'/%3E%3Ccircle class='f f5' cx='80' cy='48' r='4' fill='url(%23g)'/%3E%3C/svg%3E\")}\n.blk.sc6,.scsample.sc6{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid slice'%3E%3Cdefs%3E%3ClinearGradient id='b' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%231B1E45'/%3E%3Cstop offset='1' stop-color='%233B2F63'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cstyle%3E.t%7Banimation:tl 3s ease-in-out infinite;transform-box:fill-box;transform-origin:0%25 100%25%7D@keyframes tl%7B0%25,100%25%7Btransform:rotate(0)%7D50%25%7Btransform:rotate(-14deg)%7D%7D.br%7Banimation:br 3.6s ease-in-out infinite;transform-box:fill-box;transform-origin:50%25 100%25%7D@keyframes br%7B50%25%7Btransform:scaleY(1.035)%7D%7D.e%7Banimation:ea 5s ease-in-out infinite;transform-box:fill-box;transform-origin:50%25 100%25%7D@keyframes ea%7B0%25,86%25,100%25%7Btransform:rotate(0)%7D90%25%7Btransform:rotate(-12deg)%7D%7D.st%7Banimation:tw 3s ease-in-out infinite%7D@keyframes tw%7B50%25%7Bopacity:.2%7D%7D%3C/style%3E%3Crect width='100' height='100' fill='url(%23b)'/%3E%3Ccircle class='st' cx='14' cy='14' r='1' fill='%23E8EBFF'/%3E%3Ccircle class='st' cx='30' cy='30' r='.7' fill='%23E8EBFF' style='animation-delay:-1s'/%3E%3Ccircle class='st' cx='90' cy='52' r='.8' fill='%23E8EBFF' style='animation-delay:-2s'/%3E%3Ccircle cx='70' cy='28' r='15' fill='%23F6E7B0'/%3E%3Ccircle cx='64' cy='24' r='2.4' fill='%23E9D693'/%3E%3Ccircle cx='75' cy='33' r='1.8' fill='%23E9D693'/%3E%3Crect x='0' y='82' width='100' height='18' fill='%235A3A2A'/%3E%3Crect x='0' y='82' width='100' height='3' fill='%237A5038'/%3E%3Cg fill='%230D0B18'%3E%3Cpath class='t' d='M52 82 C64 82 66 72 60 66 C57 63 55 66 58 68 C62 71 60 78 50 79Z'/%3E%3Cpath class='br' d='M30 82 C28 70 31 58 40 55 C49 58 52 70 50 82Z'/%3E%3Ccircle cx='40' cy='50' r='8.5'/%3E%3Cpath class='e' d='M33 47 L33.5 37 L39 44Z'/%3E%3Cpath class='e' d='M47 47 L46.5 37 L41 44Z' style='animation-delay:-.3s'/%3E%3C/g%3E%3C/svg%3E\")}\n.blk.sc7,.scsample.sc7{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid slice'%3E%3Cdefs%3E%3CradialGradient id='b' cx='.4' cy='.4' r='.8'%3E%3Cstop offset='0' stop-color='%2317606F'/%3E%3Cstop offset='1' stop-color='%230A2C36'/%3E%3C/radialGradient%3E%3C/defs%3E%3Cstyle%3E.k%7Banimation:sw 9s linear infinite%7D@keyframes sw%7Bfrom%7Btransform:translate(-45px,6px)%7D50%25%7Btransform:translate(30px,-4px)%7Dto%7Btransform:translate(110px,6px)%7D%7D.k2%7Banimation:sw2 11s linear infinite%7D@keyframes sw2%7Bfrom%7Btransform:translate(110px,0) scaleX(-1)%7Dto%7Btransform:translate(-40px,-8px) scaleX(-1)%7D%7D.r%7Banimation:rp 4s ease-out infinite;transform-box:fill-box;transform-origin:center%7D@keyframes rp%7Bfrom%7Btransform:scale(.3);opacity:.8%7Dto%7Btransform:scale(1.6);opacity:0%7D%7D.tf%7Banimation:tf .6s ease-in-out infinite alternate;transform-box:fill-box;transform-origin:100%25 50%25%7D@keyframes tf%7Bto%7Btransform:rotate(18deg)%7D%7D%3C/style%3E%3Crect width='100' height='100' fill='url(%23b)'/%3E%3Ccircle class='r' cx='30' cy='30' r='8' fill='none' stroke='%239FD8DF' stroke-width='.8'/%3E%3Ccircle class='r' cx='72' cy='72' r='8' fill='none' stroke='%239FD8DF' stroke-width='.8' style='animation-delay:-2s'/%3E%3Cg class='k'%3E%3Cg transform='translate(0 50)'%3E%3Cpath class='tf' d='M-2 0 L-10 -6 L-8 0 L-10 6Z' fill='%23F28C38'/%3E%3Cellipse cx='8' cy='0' rx='11' ry='5' fill='%23F7F1E8'/%3E%3Cpath d='M2 -4 Q8 -6 14 -3 Q10 0 4 1Z' fill='%23E8562A'/%3E%3Ccircle cx='16' cy='-1.2' r='.9' fill='%23222'/%3E%3C/g%3E%3C/g%3E%3Cg class='k2'%3E%3Cg transform='translate(0 70)'%3E%3Cpath class='tf' d='M-2 0 L-9 -5 L-7 0 L-9 5Z' fill='%23FFB347'/%3E%3Cellipse cx='7' cy='0' rx='9.5' ry='4.2' fill='%23F58A2E'/%3E%3Ccircle cx='14' cy='-1' r='.8' fill='%23222'/%3E%3C/g%3E%3C/g%3E%3Cpath d='M58 22 a13 13 0 1 0 12 -6 L62 26Z' fill='%232F8A55'/%3E%3Cpath d='M14 80 a10 10 0 1 0 9 -5 L18 84Z' fill='%2327794A'/%3E%3Cg transform='translate(70 26)'%3E%3Cpath d='M0 0 C-6 -4 -6 -12 0 -16 C6 -12 6 -4 0 0Z' fill='%23F7A8C4'/%3E%3Cpath d='M0 0 C-10 -2 -12 -9 -9 -12 C-5 -8 -2 -4 0 0Z' fill='%23EC7FA9'/%3E%3Cpath d='M0 0 C10 -2 12 -9 9 -12 C5 -8 2 -4 0 0Z' fill='%23EC7FA9'/%3E%3C/g%3E%3C/svg%3E\")}\n.blk.sc8,.scsample.sc8{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid slice'%3E%3Cdefs%3E%3ClinearGradient id='b' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%232A2152'/%3E%3Cstop offset='.6' stop-color='%237A3E6B'/%3E%3Cstop offset='1' stop-color='%23B65A5E'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cstyle%3E.h%7Banimation:hb 2.4s ease-in-out infinite;transform-box:fill-box;transform-origin:30%25 90%25%7D@keyframes hb%7B0%25,60%25,100%25%7Btransform:rotate(0)%7D70%25%7Btransform:rotate(-16deg)%7D80%25%7Btransform:rotate(6deg)%7D%7D.fly%7Banimation:fy 10s linear infinite%7D@keyframes fy%7Bfrom%7Btransform:translate(-20px,0)%7Dto%7Btransform:translate(120px,-10px)%7D%7D.w%7Banimation:wg .5s ease-in-out infinite alternate;transform-box:fill-box;transform-origin:center%7D@keyframes wg%7Bto%7Btransform:scaleY(-.6)%7D%7D%3C/style%3E%3Crect width='100' height='100' fill='url(%23b)'/%3E%3Ccircle cx='74' cy='70' r='13' fill='%23F6B26B' opacity='.95'/%3E%3Cg class='fly'%3E%3Cpath class='w' d='M10 22 q4 -4 8 0 q4 -4 8 0' fill='none' stroke='%231A1230' stroke-width='1.6' stroke-linecap='round'/%3E%3C/g%3E%3Cg class='fly' style='animation-delay:-5s'%3E%3Cpath class='w' d='M0 34 q3 -3 6 0 q3 -3 6 0' fill='none' stroke='%231A1230' stroke-width='1.3' stroke-linecap='round'/%3E%3C/g%3E%3Cpath d='M-2 84 C30 76 60 80 104 70 L104 75 C62 85 30 82 -2 90Z' fill='%231A1230'/%3E%3Cpath d='M58 79 C62 72 70 70 76 72 C70 74 64 76 62 80Z' fill='%231A1230'/%3E%3Cg fill='%231A1230'%3E%3Cpath d='M22 70 L10 76 L18 76Z'/%3E%3Cellipse cx='30' cy='70' rx='11' ry='7.5'/%3E%3Cg class='h'%3E%3Ccircle cx='38' cy='62' r='5.5'/%3E%3Cpath d='M43 61 L49 62.5 L43 64Z' fill='%23E89A4F'/%3E%3Ccircle cx='39.5' cy='61' r='1' fill='%23F6B26B'/%3E%3C/g%3E%3Cpath d='M28 77 v6 M32 77 v6' stroke='%231A1230' stroke-width='1.4'/%3E%3C/g%3E%3C/svg%3E\")}\n.blk.sc9,.scsample.sc9{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid slice'%3E%3Cdefs%3E%3ClinearGradient id='b' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23123B2F'/%3E%3Cstop offset='1' stop-color='%231F5C40'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cstyle%3E.bf%7Banimation:mv 7s ease-in-out infinite%7D@keyframes mv%7B0%25,100%25%7Btransform:translate(0,0)%7D25%25%7Btransform:translate(14px,-8px)%7D50%25%7Btransform:translate(4px,-16px)%7D75%25%7Btransform:translate(-12px,-6px)%7D%7D.wl,.wr%7Banimation:fp .35s ease-in-out infinite alternate%7D.wl%7Btransform-box:fill-box;transform-origin:100%25 50%25%7D.wr%7Btransform-box:fill-box;transform-origin:0%25 50%25%7D@keyframes fp%7Bto%7Btransform:scaleX(.25)%7D%7D.sw%7Banimation:sw 4s ease-in-out infinite;transform-box:fill-box;transform-origin:50%25 100%25%7D@keyframes sw%7B50%25%7Btransform:rotate(5deg)%7D%7D%3C/style%3E%3Crect width='100' height='100' fill='url(%23b)'/%3E%3Ccircle cx='20' cy='18' r='.9' fill='%23CFEBD9' opacity='.7'/%3E%3Ccircle cx='82' cy='30' r='.7' fill='%23CFEBD9' opacity='.7'/%3E%3Cg class='sw'%3E%3Cpath d='M28 100 C28 86 30 76 30 68' stroke='%233E8E5A' stroke-width='2' fill='none'/%3E%3Cg transform='translate(30 66)'%3E%3Ccircle r='3' fill='%23FFD54F'/%3E%3Cg fill='%23F48FB1'%3E%3Ccircle cx='0' cy='-6' r='4'/%3E%3Ccircle cx='6' cy='-1' r='4'/%3E%3Ccircle cx='3.5' cy='5.5' r='4'/%3E%3Ccircle cx='-3.5' cy='5.5' r='4'/%3E%3Ccircle cx='-6' cy='-1' r='4'/%3E%3C/g%3E%3Ccircle r='3' fill='%23FFD54F'/%3E%3C/g%3E%3C/g%3E%3Cg class='sw' style='animation-delay:-2s'%3E%3Cpath d='M72 100 C72 90 70 82 70 76' stroke='%233E8E5A' stroke-width='2' fill='none'/%3E%3Cg transform='translate(70 74)'%3E%3Cg fill='%23B39DDB'%3E%3Ccircle cx='0' cy='-5' r='3.4'/%3E%3Ccircle cx='5' cy='-1' r='3.4'/%3E%3Ccircle cx='3' cy='4.5' r='3.4'/%3E%3Ccircle cx='-3' cy='4.5' r='3.4'/%3E%3Ccircle cx='-5' cy='-1' r='3.4'/%3E%3C/g%3E%3Ccircle r='2.6' fill='%23FFF3B0'/%3E%3C/g%3E%3C/g%3E%3Cpath d='M0 92 Q20 84 40 92 T80 90 T100 92 V100 H0Z' fill='%230E2E22'/%3E%3Cg class='bf'%3E%3Cg transform='translate(50 42)'%3E%3Cg class='wl'%3E%3Cpath d='M0 0 C-8 -12 -18 -8 -14 -1 C-18 4 -10 10 0 2Z' fill='%23FFB74D'/%3E%3Ccircle cx='-9' cy='-4' r='2' fill='%23FFF3E0'/%3E%3C/g%3E%3Cg class='wr'%3E%3Cpath d='M0 0 C8 -12 18 -8 14 -1 C18 4 10 10 0 2Z' fill='%23FF8A65'/%3E%3Ccircle cx='9' cy='-4' r='2' fill='%23FFF3E0'/%3E%3C/g%3E%3Cellipse cx='0' cy='1' rx='1.3' ry='6' fill='%233E2723'/%3E%3Cpath d='M0 -5 l-3 -5 M0 -5 l3 -5' stroke='%233E2723' stroke-width='.8'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")}\n.blk.sc10,.scsample.sc10{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid slice'%3E%3Cdefs%3E%3ClinearGradient id='b' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%23141A36'/%3E%3Cstop offset='1' stop-color='%2326315A'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cstyle%3E.lid%7Banimation:bl 4.5s ease-in-out infinite;transform-box:fill-box;transform-origin:50%25 0%25%7D@keyframes bl%7B0%25,88%25,100%25%7Btransform:scaleY(0)%7D92%25,95%25%7Btransform:scaleY(1)%7D%7D.hd%7Banimation:tl 6s ease-in-out infinite;transform-box:fill-box;transform-origin:50%25 100%25%7D@keyframes tl%7B0%25,40%25,100%25%7Btransform:rotate(0)%7D50%25,70%25%7Btransform:rotate(-8deg)%7D%7D.st%7Banimation:tw 3s ease-in-out infinite%7D@keyframes tw%7B50%25%7Bopacity:.2%7D%7D%3C/style%3E%3Crect width='100' height='100' fill='url(%23b)'/%3E%3Ccircle class='st' cx='12' cy='12' r='.9' fill='%23E3E8FF'/%3E%3Ccircle class='st' cx='88' cy='18' r='.8' fill='%23E3E8FF' style='animation-delay:-1.5s'/%3E%3Ccircle cx='16' cy='30' r='8' fill='%23F4E3B2'/%3E%3Ccircle cx='19.5' cy='27.5' r='7' fill='%231A2142'/%3E%3Crect x='36' y='0' width='46' height='100' rx='6' fill='%234A3426'/%3E%3Cpath d='M44 0 v100 M60 0 v100 M74 0 v100' stroke='%233B291E' stroke-width='1.2'/%3E%3Cellipse cx='59' cy='56' rx='16' ry='21' fill='%231E140F'/%3E%3Cg class='hd'%3E%3Cellipse cx='59' cy='62' rx='11' ry='13' fill='%23A1785A'/%3E%3Cellipse cx='59' cy='66' rx='7' ry='8' fill='%23D9BE9A'/%3E%3Cpath d='M48 46 L50 40 L54 47Z M70 46 L68 40 L64 47Z' fill='%23A1785A'/%3E%3Ccircle cx='54.5' cy='52' r='4.6' fill='%23FFF6DA'/%3E%3Ccircle cx='63.5' cy='52' r='4.6' fill='%23FFF6DA'/%3E%3Ccircle cx='54.5' cy='52.5' r='2.3' fill='%231B1B1B'/%3E%3Ccircle cx='63.5' cy='52.5' r='2.3' fill='%231B1B1B'/%3E%3Crect class='lid' x='49.6' y='47.2' width='9.8' height='9.8' rx='4.9' fill='%238C6447'/%3E%3Crect class='lid' x='58.6' y='47.2' width='9.8' height='9.8' rx='4.9' fill='%238C6447'/%3E%3Cpath d='M57.5 56 L59 59.5 L60.5 56Z' fill='%23E7A23A'/%3E%3C/g%3E%3Crect x='30' y='76' width='60' height='4' rx='2' fill='%233B291E'/%3E%3C/svg%3E\")}\n.blk.sc11,.scsample.sc11{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid slice'%3E%3Cdefs%3E%3ClinearGradient id='b' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%230E2F3B'/%3E%3Cstop offset='1' stop-color='%231D4E4A'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cstyle%3E.hd%7Banimation:tl 3.4s ease-in-out infinite;transform-box:fill-box;transform-origin:40%25 90%25%7D@keyframes tl%7B0%25,50%25,100%25%7Btransform:rotate(0)%7D60%25,80%25%7Btransform:rotate(-15deg)%7D%7D.lf%7Banimation:lf 5s ease-in-out infinite;transform-box:fill-box;transform-origin:0%25 50%25%7D@keyframes lf%7B50%25%7Btransform:rotate(-8deg)%7D%7D.mg%7Banimation:mg 5s ease-in-out infinite;transform-box:fill-box;transform-origin:50%25 0%25%7D@keyframes mg%7B50%25%7Btransform:rotate(6deg)%7D%7D%3C/style%3E%3Crect width='100' height='100' fill='url(%23b)'/%3E%3Cpath d='M-2 70 C30 62 60 66 104 56' stroke='%234B3122' stroke-width='5' fill='none' stroke-linecap='round'/%3E%3Cpath class='lf' d='M70 62 C80 52 92 54 98 58 C90 64 80 66 70 62Z' fill='%232E7D32'/%3E%3Cpath class='lf' d='M10 68 C2 58 -6 60 -8 64 C-2 70 4 72 10 68Z' fill='%23388E3C' style='animation-delay:-2s'/%3E%3Cg class='mg'%3E%3Cpath d='M84 58 v6' stroke='%234B3122' stroke-width='1.2'/%3E%3Cellipse cx='84' cy='71' rx='5.5' ry='7.5' fill='%23F9A825'/%3E%3Cellipse cx='82' cy='69' rx='1.6' ry='3' fill='%23FFE082' opacity='.8'/%3E%3C/g%3E%3Cpath d='M34 66 L28 92 L33 92 L38 68Z' fill='%231B7A3A'/%3E%3Cpath d='M38 66 L36 94 L40 93 L41 68Z' fill='%232E9E4F'/%3E%3Cellipse cx='40' cy='56' rx='10' ry='13' fill='%2343A047'/%3E%3Cpath d='M34 52 C30 60 32 68 40 70 C36 64 36 58 38 52Z' fill='%232E7D32'/%3E%3Cg class='hd'%3E%3Ccircle cx='44' cy='40' r='8.5' fill='%234CAF50'/%3E%3Cpath d='M51 38 C57 38 58 45 53 47 C52 44 51 42 49 42Z' fill='%23E53935'/%3E%3Ccircle cx='46.5' cy='37.5' r='2' fill='%23FFF'/%3E%3Ccircle cx='47' cy='37.6' r='1.1' fill='%23111'/%3E%3Cpath d='M38 46 Q44 49 50 46' stroke='%231B1B1B' stroke-width='.9' fill='none'/%3E%3C/g%3E%3Cpath d='M36 68 v4 M42 68 v4' stroke='%237A5A2A' stroke-width='1.6'/%3E%3C/svg%3E\")}\n.blk.sc12,.scsample.sc12{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid slice'%3E%3Cdefs%3E%3ClinearGradient id='b' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%232E1A2E'/%3E%3Cstop offset='1' stop-color='%235A2E22'/%3E%3C/linearGradient%3E%3Cpath id='lf' d='M0 -6 C5 -4 6 2 0 6 C-6 2 -5 -4 0 -6Z M0 -6 V6'/%3E%3C/defs%3E%3Cstyle%3E.d%7Banimation:dr 7s linear infinite%7D@keyframes dr%7Bfrom%7Btransform:translate(0,-20px) rotate(0)%7D25%25%7Btransform:translate(8px,10px) rotate(90deg)%7D50%25%7Btransform:translate(-4px,40px) rotate(180deg)%7D75%25%7Btransform:translate(8px,70px) rotate(270deg)%7Dto%7Btransform:translate(0,110px) rotate(360deg)%7D%7D.d2%7Banimation-duration:9s;animation-delay:-3s%7D.d3%7Banimation-duration:8s;animation-delay:-6s%7D.d4%7Banimation-duration:10s;animation-delay:-1.5s%7D%3C/style%3E%3Crect width='100' height='100' fill='url(%23b)'/%3E%3Cpath d='M0 0 C20 10 30 4 46 14 C40 18 30 16 22 22 C14 18 6 20 0 16Z' fill='%231E1016'/%3E%3Ccircle cx='30' cy='10' r='5' fill='%23C0392B'/%3E%3Ccircle cx='18' cy='16' r='4' fill='%23E67E22'/%3E%3Ccircle cx='40' cy='16' r='3.5' fill='%23D35400'/%3E%3Cpath d='M0 90 Q30 84 60 90 T100 88 V100 H0Z' fill='%233A1C14'/%3E%3Cg fill='%23E67E22'%3E%3Cellipse cx='20' cy='92' rx='3' ry='1.4'/%3E%3Cellipse cx='64' cy='93' rx='3' ry='1.4' fill='%23C0392B'/%3E%3Cellipse cx='84' cy='91' rx='2.6' ry='1.2' fill='%23F1C40F'/%3E%3C/g%3E%3Cg transform='translate(24 0)'%3E%3Cg class='d'%3E%3Cuse href='%23lf' fill='%23E67E22' stroke='%238E3B12' stroke-width='.6'/%3E%3C/g%3E%3C/g%3E%3Cg transform='translate(56 0)'%3E%3Cg class='d d2'%3E%3Cuse href='%23lf' fill='%23F1C40F' stroke='%239A6A0B' stroke-width='.6'/%3E%3C/g%3E%3C/g%3E%3Cg transform='translate(78 0)'%3E%3Cg class='d d3'%3E%3Cuse href='%23lf' fill='%23C0392B' stroke='%236E1D15' stroke-width='.6'/%3E%3C/g%3E%3C/g%3E%3Cg transform='translate(40 0)'%3E%3Cg class='d d4'%3E%3Cuse href='%23lf' fill='%23D35400' stroke='%237A2E0A' stroke-width='.6'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")}\n@media (prefers-reduced-motion: reduce){\n.blk.sc0,.scsample.sc0{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid slice'%3E%3Cdefs%3E%3ClinearGradient id='b' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%230D3436'/%3E%3Cstop offset='1' stop-color='%231E5A45'/%3E%3C/linearGradient%3E%3ClinearGradient id='n' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%2329B6F6'/%3E%3Cstop offset='1' stop-color='%230D47A1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23b)'/%3E%3Ccircle class='sp' cx='12' cy='14' r='.9' fill='%23E0F2F1'/%3E%3Ccircle class='sp' cx='88' cy='12' r='.8' fill='%23E0F2F1' style='animation-delay:-1.2s'/%3E%3Cellipse cx='50' cy='92' rx='46' ry='7' fill='%23123A2C'/%3E%3Cg class='fan'%3E%3Cg transform='rotate(-80 50 64)'%3E%3Cg class='q' style='animation-delay:-0.00s'%3E%3Cpath d='M50 64 Q43 44 50 18 Q57 44 50 64Z' fill='%232F7D3B' opacity='.75'/%3E%3Cpath d='M50 64 V24' stroke='%239CCC65' stroke-width='.6'/%3E%3Cellipse cx='50' cy='22' rx='5.6' ry='7.4' fill='%231B5E20'/%3E%3Cellipse cx='50' cy='22.6' rx='4.2' ry='5.6' fill='%23F9A825'/%3E%3Cellipse cx='50' cy='23.2' rx='2.9' ry='3.9' fill='%231565C0'/%3E%3Cellipse cx='50' cy='23.6' rx='1.5' ry='2' fill='%230A1F44'/%3E%3C/g%3E%3C/g%3E%3Cg transform='rotate(-64 50 64)'%3E%3Cg class='q' style='animation-delay:-0.07s'%3E%3Cpath d='M50 64 Q43 44 50 18 Q57 44 50 64Z' fill='%232F7D3B' opacity='.75'/%3E%3Cpath d='M50 64 V24' stroke='%239CCC65' stroke-width='.6'/%3E%3Cellipse cx='50' cy='22' rx='5.6' ry='7.4' fill='%231B5E20'/%3E%3Cellipse cx='50' cy='22.6' rx='4.2' ry='5.6' fill='%23F9A825'/%3E%3Cellipse cx='50' cy='23.2' rx='2.9' ry='3.9' fill='%231565C0'/%3E%3Cellipse cx='50' cy='23.6' rx='1.5' ry='2' fill='%230A1F44'/%3E%3C/g%3E%3C/g%3E%3Cg transform='rotate(-48 50 64)'%3E%3Cg class='q' style='animation-delay:-0.14s'%3E%3Cpath d='M50 64 Q43 44 50 18 Q57 44 50 64Z' fill='%232F7D3B' opacity='.75'/%3E%3Cpath d='M50 64 V24' stroke='%239CCC65' stroke-width='.6'/%3E%3Cellipse cx='50' cy='22' rx='5.6' ry='7.4' fill='%231B5E20'/%3E%3Cellipse cx='50' cy='22.6' rx='4.2' ry='5.6' fill='%23F9A825'/%3E%3Cellipse cx='50' cy='23.2' rx='2.9' ry='3.9' fill='%231565C0'/%3E%3Cellipse cx='50' cy='23.6' rx='1.5' ry='2' fill='%230A1F44'/%3E%3C/g%3E%3C/g%3E%3Cg transform='rotate(-32 50 64)'%3E%3Cg class='q' style='animation-delay:-0.21s'%3E%3Cpath d='M50 64 Q43 44 50 18 Q57 44 50 64Z' fill='%232F7D3B' opacity='.75'/%3E%3Cpath d='M50 64 V24' stroke='%239CCC65' stroke-width='.6'/%3E%3Cellipse cx='50' cy='22' rx='5.6' ry='7.4' fill='%231B5E20'/%3E%3Cellipse cx='50' cy='22.6' rx='4.2' ry='5.6' fill='%23F9A825'/%3E%3Cellipse cx='50' cy='23.2' rx='2.9' ry='3.9' fill='%231565C0'/%3E%3Cellipse cx='50' cy='23.6' rx='1.5' ry='2' fill='%230A1F44'/%3E%3C/g%3E%3C/g%3E%3Cg transform='rotate(-16 50 64)'%3E%3Cg class='q' style='animation-delay:-0.00s'%3E%3Cpath d='M50 64 Q43 44 50 18 Q57 44 50 64Z' fill='%232F7D3B' opacity='.75'/%3E%3Cpath d='M50 64 V24' stroke='%239CCC65' stroke-width='.6'/%3E%3Cellipse cx='50' cy='22' rx='5.6' ry='7.4' fill='%231B5E20'/%3E%3Cellipse cx='50' cy='22.6' rx='4.2' ry='5.6' fill='%23F9A825'/%3E%3Cellipse cx='50' cy='23.2' rx='2.9' ry='3.9' fill='%231565C0'/%3E%3Cellipse cx='50' cy='23.6' rx='1.5' ry='2' fill='%230A1F44'/%3E%3C/g%3E%3C/g%3E%3Cg transform='rotate(0 50 64)'%3E%3Cg class='q' style='animation-delay:-0.07s'%3E%3Cpath d='M50 64 Q43 44 50 18 Q57 44 50 64Z' fill='%232F7D3B' opacity='.75'/%3E%3Cpath d='M50 64 V24' stroke='%239CCC65' stroke-width='.6'/%3E%3Cellipse cx='50' cy='22' rx='5.6' ry='7.4' fill='%231B5E20'/%3E%3Cellipse cx='50' cy='22.6' rx='4.2' ry='5.6' fill='%23F9A825'/%3E%3Cellipse cx='50' cy='23.2' rx='2.9' ry='3.9' fill='%231565C0'/%3E%3Cellipse cx='50' cy='23.6' rx='1.5' ry='2' fill='%230A1F44'/%3E%3C/g%3E%3C/g%3E%3Cg transform='rotate(16 50 64)'%3E%3Cg class='q' style='animation-delay:-0.14s'%3E%3Cpath d='M50 64 Q43 44 50 18 Q57 44 50 64Z' fill='%232F7D3B' opacity='.75'/%3E%3Cpath d='M50 64 V24' stroke='%239CCC65' stroke-width='.6'/%3E%3Cellipse cx='50' cy='22' rx='5.6' ry='7.4' fill='%231B5E20'/%3E%3Cellipse cx='50' cy='22.6' rx='4.2' ry='5.6' fill='%23F9A825'/%3E%3Cellipse cx='50' cy='23.2' rx='2.9' ry='3.9' fill='%231565C0'/%3E%3Cellipse cx='50' cy='23.6' rx='1.5' ry='2' fill='%230A1F44'/%3E%3C/g%3E%3C/g%3E%3Cg transform='rotate(32 50 64)'%3E%3Cg class='q' style='animation-delay:-0.21s'%3E%3Cpath d='M50 64 Q43 44 50 18 Q57 44 50 64Z' fill='%232F7D3B' opacity='.75'/%3E%3Cpath d='M50 64 V24' stroke='%239CCC65' stroke-width='.6'/%3E%3Cellipse cx='50' cy='22' rx='5.6' ry='7.4' fill='%231B5E20'/%3E%3Cellipse cx='50' cy='22.6' rx='4.2' ry='5.6' fill='%23F9A825'/%3E%3Cellipse cx='50' cy='23.2' rx='2.9' ry='3.9' fill='%231565C0'/%3E%3Cellipse cx='50' cy='23.6' rx='1.5' ry='2' fill='%230A1F44'/%3E%3C/g%3E%3C/g%3E%3Cg transform='rotate(48 50 64)'%3E%3Cg class='q' style='animation-delay:-0.00s'%3E%3Cpath d='M50 64 Q43 44 50 18 Q57 44 50 64Z' fill='%232F7D3B' opacity='.75'/%3E%3Cpath d='M50 64 V24' stroke='%239CCC65' stroke-width='.6'/%3E%3Cellipse cx='50' cy='22' rx='5.6' ry='7.4' fill='%231B5E20'/%3E%3Cellipse cx='50' cy='22.6' rx='4.2' ry='5.6' fill='%23F9A825'/%3E%3Cellipse cx='50' cy='23.2' rx='2.9' ry='3.9' fill='%231565C0'/%3E%3Cellipse cx='50' cy='23.6' rx='1.5' ry='2' fill='%230A1F44'/%3E%3C/g%3E%3C/g%3E%3Cg transform='rotate(64 50 64)'%3E%3Cg class='q' style='animation-delay:-0.07s'%3E%3Cpath d='M50 64 Q43 44 50 18 Q57 44 50 64Z' fill='%232F7D3B' opacity='.75'/%3E%3Cpath d='M50 64 V24' stroke='%239CCC65' stroke-width='.6'/%3E%3Cellipse cx='50' cy='22' rx='5.6' ry='7.4' fill='%231B5E20'/%3E%3Cellipse cx='50' cy='22.6' rx='4.2' ry='5.6' fill='%23F9A825'/%3E%3Cellipse cx='50' cy='23.2' rx='2.9' ry='3.9' fill='%231565C0'/%3E%3Cellipse cx='50' cy='23.6' rx='1.5' ry='2' fill='%230A1F44'/%3E%3C/g%3E%3C/g%3E%3Cg transform='rotate(80 50 64)'%3E%3Cg class='q' style='animation-delay:-0.14s'%3E%3Cpath d='M50 64 Q43 44 50 18 Q57 44 50 64Z' fill='%232F7D3B' opacity='.75'/%3E%3Cpath d='M50 64 V24' stroke='%239CCC65' stroke-width='.6'/%3E%3Cellipse cx='50' cy='22' rx='5.6' ry='7.4' fill='%231B5E20'/%3E%3Cellipse cx='50' cy='22.6' rx='4.2' ry='5.6' fill='%23F9A825'/%3E%3Cellipse cx='50' cy='23.2' rx='2.9' ry='3.9' fill='%231565C0'/%3E%3Cellipse cx='50' cy='23.6' rx='1.5' ry='2' fill='%230A1F44'/%3E%3C/g%3E%3C/g%3E%3Cg transform='rotate(-72 50 64)'%3E%3Cpath d='M50 64 Q45 50 50 36 Q55 50 50 64Z' fill='%2343A047' opacity='.8'/%3E%3Cellipse cx='50' cy='38' rx='3.4' ry='4.4' fill='%23F9A825'/%3E%3Cellipse cx='50' cy='38.5' rx='2.2' ry='3' fill='%231976D2'/%3E%3Cellipse cx='50' cy='38.8' rx='1' ry='1.4' fill='%230A1F44'/%3E%3C/g%3E%3Cg transform='rotate(-56 50 64)'%3E%3Cpath d='M50 64 Q45 50 50 36 Q55 50 50 64Z' fill='%2343A047' opacity='.8'/%3E%3Cellipse cx='50' cy='38' rx='3.4' ry='4.4' fill='%23F9A825'/%3E%3Cellipse cx='50' cy='38.5' rx='2.2' ry='3' fill='%231976D2'/%3E%3Cellipse cx='50' cy='38.8' rx='1' ry='1.4' fill='%230A1F44'/%3E%3C/g%3E%3Cg transform='rotate(-40 50 64)'%3E%3Cpath d='M50 64 Q45 50 50 36 Q55 50 50 64Z' fill='%2343A047' opacity='.8'/%3E%3Cellipse cx='50' cy='38' rx='3.4' ry='4.4' fill='%23F9A825'/%3E%3Cellipse cx='50' cy='38.5' rx='2.2' ry='3' fill='%231976D2'/%3E%3Cellipse cx='50' cy='38.8' rx='1' ry='1.4' fill='%230A1F44'/%3E%3C/g%3E%3Cg transform='rotate(-24 50 64)'%3E%3Cpath d='M50 64 Q45 50 50 36 Q55 50 50 64Z' fill='%2343A047' opacity='.8'/%3E%3Cellipse cx='50' cy='38' rx='3.4' ry='4.4' fill='%23F9A825'/%3E%3Cellipse cx='50' cy='38.5' rx='2.2' ry='3' fill='%231976D2'/%3E%3Cellipse cx='50' cy='38.8' rx='1' ry='1.4' fill='%230A1F44'/%3E%3C/g%3E%3Cg transform='rotate(-8 50 64)'%3E%3Cpath d='M50 64 Q45 50 50 36 Q55 50 50 64Z' fill='%2343A047' opacity='.8'/%3E%3Cellipse cx='50' cy='38' rx='3.4' ry='4.4' fill='%23F9A825'/%3E%3Cellipse cx='50' cy='38.5' rx='2.2' ry='3' fill='%231976D2'/%3E%3Cellipse cx='50' cy='38.8' rx='1' ry='1.4' fill='%230A1F44'/%3E%3C/g%3E%3Cg transform='rotate(8 50 64)'%3E%3Cpath d='M50 64 Q45 50 50 36 Q55 50 50 64Z' fill='%2343A047' opacity='.8'/%3E%3Cellipse cx='50' cy='38' rx='3.4' ry='4.4' fill='%23F9A825'/%3E%3Cellipse cx='50' cy='38.5' rx='2.2' ry='3' fill='%231976D2'/%3E%3Cellipse cx='50' cy='38.8' rx='1' ry='1.4' fill='%230A1F44'/%3E%3C/g%3E%3Cg transform='rotate(24 50 64)'%3E%3Cpath d='M50 64 Q45 50 50 36 Q55 50 50 64Z' fill='%2343A047' opacity='.8'/%3E%3Cellipse cx='50' cy='38' rx='3.4' ry='4.4' fill='%23F9A825'/%3E%3Cellipse cx='50' cy='38.5' rx='2.2' ry='3' fill='%231976D2'/%3E%3Cellipse cx='50' cy='38.8' rx='1' ry='1.4' fill='%230A1F44'/%3E%3C/g%3E%3Cg transform='rotate(40 50 64)'%3E%3Cpath d='M50 64 Q45 50 50 36 Q55 50 50 64Z' fill='%2343A047' opacity='.8'/%3E%3Cellipse cx='50' cy='38' rx='3.4' ry='4.4' fill='%23F9A825'/%3E%3Cellipse cx='50' cy='38.5' rx='2.2' ry='3' fill='%231976D2'/%3E%3Cellipse cx='50' cy='38.8' rx='1' ry='1.4' fill='%230A1F44'/%3E%3C/g%3E%3Cg transform='rotate(56 50 64)'%3E%3Cpath d='M50 64 Q45 50 50 36 Q55 50 50 64Z' fill='%2343A047' opacity='.8'/%3E%3Cellipse cx='50' cy='38' rx='3.4' ry='4.4' fill='%23F9A825'/%3E%3Cellipse cx='50' cy='38.5' rx='2.2' ry='3' fill='%231976D2'/%3E%3Cellipse cx='50' cy='38.8' rx='1' ry='1.4' fill='%230A1F44'/%3E%3C/g%3E%3Cg transform='rotate(72 50 64)'%3E%3Cpath d='M50 64 Q45 50 50 36 Q55 50 50 64Z' fill='%2343A047' opacity='.8'/%3E%3Cellipse cx='50' cy='38' rx='3.4' ry='4.4' fill='%23F9A825'/%3E%3Cellipse cx='50' cy='38.5' rx='2.2' ry='3' fill='%231976D2'/%3E%3Cellipse cx='50' cy='38.8' rx='1' ry='1.4' fill='%230A1F44'/%3E%3C/g%3E%3C/g%3E%3Cg class='bd'%3E%3Cpath d='M47 84 L46 92 M53 84 L54 92' stroke='%23B0957A' stroke-width='1.3' stroke-linecap='round'/%3E%3Cellipse cx='50' cy='76' rx='7.5' ry='9' fill='%230D47A1'/%3E%3Cpath d='M44 74 C46 82 54 84 57 78 C55 86 46 88 44 74Z' fill='%238D6E63'/%3E%3Cpath d='M47 72 C45 62 47 52 50 47 C53 52 54 62 53 72Z' fill='url(%23n)'/%3E%3Cg class='hd'%3E%3Ccircle cx='51' cy='45' r='3.6' fill='%231E88E5'/%3E%3Cellipse cx='52.2' cy='44.2' rx='1.5' ry='.9' fill='%23FFF'/%3E%3Ccircle cx='52.4' cy='44.3' r='.5' fill='%23111'/%3E%3Cpath d='M54.3 45 L57.5 45.8 L54.3 46.6Z' fill='%23C9A26B'/%3E%3Cpath d='M50 41.6 L48.6 36.4 M51 41.4 L51 36 M52 41.6 L53.4 36.4' stroke='%231E88E5' stroke-width='.5'/%3E%3Ccircle cx='48.6' cy='36.2' r='.9' fill='%231E88E5'/%3E%3Ccircle cx='51' cy='35.8' r='.9' fill='%231E88E5'/%3E%3Ccircle cx='53.4' cy='36.2' r='.9' fill='%231E88E5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")}\n.blk.sc1,.scsample.sc1{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid slice'%3E%3Cdefs%3E%3ClinearGradient id='b' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%232E4A66'/%3E%3Cstop offset='.55' stop-color='%237E9DB4'/%3E%3Cstop offset='.56' stop-color='%231C6E92'/%3E%3Cstop offset='1' stop-color='%230B3A55'/%3E%3C/linearGradient%3E%3Cpath id='w' d='M0 0 Q12.5 -7 25 0 T50 0 T75 0 T100 0 T125 0 T150 0 T175 0 T200 0 V60 H0Z'/%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23b)'/%3E%3Cg class='cl'%3E%3Cellipse cx='10' cy='18' rx='12' ry='4' fill='%239FB4C6' opacity='.7'/%3E%3Cellipse cx='18' cy='15' rx='8' ry='4' fill='%23B5C7D5' opacity='.7'/%3E%3C/g%3E%3Cg class='gl'%3E%3Cpath class='wg' d='M10 30 q3 -3 6 0 q3 -3 6 0' fill='none' stroke='%23F2F5F8' stroke-width='1.2' stroke-linecap='round'/%3E%3C/g%3E%3Cg class='bob'%3E%3Cg transform='translate(0 58)'%3E%3Cuse class='w1' href='%23w' fill='%2322769A'/%3E%3C/g%3E%3C/g%3E%3Cpath d='M74 100 L78 68 L86 62 L94 66 L100 64 V100Z' fill='%232B2F36'/%3E%3Cpath d='M78 68 L86 62 L90 66 L82 72Z' fill='%233C424B'/%3E%3Cg class='bob' style='animation-delay:-1s'%3E%3Cg transform='translate(0 70)'%3E%3Cuse class='w2' href='%23w' fill='%23155F84'/%3E%3Cuse class='w2' href='%23w' fill='none' stroke='%23D7EEF7' stroke-width='1.2' opacity='.8'/%3E%3C/g%3E%3C/g%3E%3Cg transform='translate(84 66)'%3E%3Ccircle class='dr' r='1.6' fill='%23EAF6FB' style='--x:-8px'/%3E%3Ccircle class='dr' r='1.2' fill='%23EAF6FB' style='--x:-3px;animation-delay:-.2s'/%3E%3Ccircle class='dr' r='1.4' fill='%23EAF6FB' style='--x:4px;animation-delay:-.4s'/%3E%3Ccircle class='dr' r='1' fill='%23EAF6FB' style='--x:-12px;animation-delay:-.6s'/%3E%3Ccircle class='dr' r='1.8' fill='%23FFFFFF' style='--x:1px;animation-delay:-.1s'/%3E%3C/g%3E%3Cg class='bob' style='animation-delay:-2s'%3E%3Cg transform='translate(0 82)'%3E%3Cuse class='w3' href='%23w' fill='%230C4A6B'/%3E%3Cuse class='w3' href='%23w' fill='none' stroke='%23FFFFFF' stroke-width='1.6' stroke-dasharray='6 4' opacity='.85'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")}\n.blk.sc2,.scsample.sc2{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid slice'%3E%3Cdefs%3E%3CradialGradient id='b' cx='.5' cy='.45' r='.75'%3E%3Cstop offset='0' stop-color='%23FFCC80'/%3E%3Cstop offset='.55' stop-color='%23EF7B2B'/%3E%3Cstop offset='1' stop-color='%236B2410'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23b)'/%3E%3Cpath d='M0 92 L6 84 L10 92 L16 82 L22 92 L30 86 L36 94 V100 H0Z M64 94 L70 84 L76 92 L82 82 L88 92 L94 84 L100 90 V100 H64Z' fill='%234A1A0A'/%3E%3Cg class='mn'%3E%3Cpolygon points='50.0,18.0 54.9,26.4 62.3,20.2 64.0,29.8 73.1,26.4 71.4,36.0 81.2,36.0 76.3,44.4 85.5,47.7 78.0,54.0 85.5,60.3 76.3,63.6 81.2,72.0 71.4,72.0 73.1,81.6 64.0,78.2 62.3,87.8 54.9,81.6 50.0,90.0 45.1,81.6 37.7,87.8 36.0,78.2 26.9,81.6 28.6,72.0 18.8,72.0 23.7,63.6 14.5,60.3 22.0,54.0 14.5,47.7 23.7,44.4 18.8,36.0 28.6,36.0 26.9,26.4 36.0,29.8 37.7,20.2 45.1,26.4' fill='%237B3F12'/%3E%3Ccircle cx='50' cy='54' r='27' fill='%239A5418'/%3E%3C/g%3E%3Ccircle cx='35' cy='36' r='5.5' fill='%23D9964A'/%3E%3Ccircle cx='35' cy='36' r='2.8' fill='%237A4A20'/%3E%3Ccircle cx='65' cy='36' r='5.5' fill='%23D9964A'/%3E%3Ccircle cx='65' cy='36' r='2.8' fill='%237A4A20'/%3E%3Cellipse cx='50' cy='54' rx='17' ry='19.5' fill='%23E2A55C'/%3E%3Cpath class='br' d='M40 45 L47 47' stroke='%235A3214' stroke-width='1.6' stroke-linecap='round' style='--r:14deg'/%3E%3Cpath class='br' d='M60 45 L53 47' stroke='%235A3214' stroke-width='1.6' stroke-linecap='round' style='--r:-14deg'/%3E%3Cellipse class='ey' cx='44' cy='50' rx='2' ry='2.2' fill='%233A2414'/%3E%3Cellipse class='ey' cx='56' cy='50' rx='2' ry='2.2' fill='%233A2414'/%3E%3Ccircle cx='44.6' cy='49.3' r='.6' fill='%23FFF'/%3E%3Ccircle cx='56.6' cy='49.3' r='.6' fill='%23FFF'/%3E%3Cg class='jw'%3E%3Cellipse cx='50' cy='71' rx='7.5' ry='5' fill='%23F1CF9C'/%3E%3C/g%3E%3Cellipse cx='50' cy='62.5' rx='10' ry='7' fill='%23F3D5A6'/%3E%3Cg class='mo'%3E%3Cellipse cx='50' cy='69' rx='6.6' ry='6' fill='%237A1414'/%3E%3Cellipse cx='50' cy='72' rx='4' ry='2.6' fill='%23C2414B'/%3E%3Cpath d='M44.2 66 l1.6 3.6 1.6 -3.6Z M52.6 66 l1.6 3.6 1.6 -3.6Z' fill='%23FFF8E8'/%3E%3C/g%3E%3Cpath d='M45.5 57.5 L54.5 57.5 L50 62Z' fill='%234A2A14'/%3E%3Cpath d='M50 62 V64.5 M50 64.5 Q46 66 44 64.5 M50 64.5 Q54 66 56 64.5' stroke='%234A2A14' stroke-width='.9' fill='none'/%3E%3Cg fill='none' stroke='%23FFF3D6' stroke-width='1.4' stroke-linecap='round'%3E%3Cpath class='rw' d='M40 80 Q50 86 60 80'/%3E%3Cpath class='rw' d='M36 84 Q50 92 64 84' style='animation-delay:-.15s'/%3E%3Cpath class='rw' d='M32 88 Q50 98 68 88' style='animation-delay:-.3s'/%3E%3C/g%3E%3C/svg%3E\")}\n.blk.sc3,.scsample.sc3{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid slice'%3E%3Cdefs%3E%3ClinearGradient id='b' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%2326323F'/%3E%3Cstop offset='1' stop-color='%2346596A'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23b)'/%3E%3Crect class='fl' width='100' height='100' fill='%23EAF2FF'/%3E%3Cg class='cl'%3E%3Cellipse cx='22' cy='12' rx='22' ry='9' fill='%235B6B7C'/%3E%3Cellipse cx='42' cy='8' rx='16' ry='8' fill='%236B7B8C'/%3E%3Cellipse cx='70' cy='12' rx='24' ry='9' fill='%23566676'/%3E%3Cellipse cx='92' cy='8' rx='14' ry='7' fill='%23647485'/%3E%3C/g%3E%3Cpath class='fl' d='M62 14 L56 28 L61 28 L55 42' stroke='%23FFF6C2' stroke-width='1.4' fill='none'/%3E%3Cline class='rd' x1='4' y1='0' x2='2' y2='8' style='animation-delay:-0.29s;animation-duration:0.66s'/%3E%3Cline class='rd' x1='11' y1='0' x2='9' y2='8' style='animation-delay:-0.59s;animation-duration:0.63s'/%3E%3Cline class='rd' x1='18' y1='0' x2='16' y2='8' style='animation-delay:-0.48s;animation-duration:0.75s'/%3E%3Cline class='rd' x1='25' y1='0' x2='23' y2='8' style='animation-delay:-0.05s;animation-duration:0.80s'/%3E%3Cline class='rd' x1='32' y1='0' x2='30' y2='8' style='animation-delay:-0.03s;animation-duration:0.77s'/%3E%3Cline class='rd' x1='39' y1='0' x2='37' y2='8' style='animation-delay:-0.06s;animation-duration:0.64s'/%3E%3Cline class='rd' x1='46' y1='0' x2='44' y2='8' style='animation-delay:-0.38s;animation-duration:0.93s'/%3E%3Cline class='rd' x1='53' y1='0' x2='51' y2='8' style='animation-delay:-0.11s;animation-duration:0.69s'/%3E%3Cline class='rd' x1='60' y1='0' x2='58' y2='8' style='animation-delay:-0.56s;animation-duration:0.98s'/%3E%3Cline class='rd' x1='67' y1='0' x2='65' y2='8' style='animation-delay:-0.52s;animation-duration:0.76s'/%3E%3Cline class='rd' x1='74' y1='0' x2='72' y2='8' style='animation-delay:-0.88s;animation-duration:0.62s'/%3E%3Cline class='rd' x1='81' y1='0' x2='79' y2='8' style='animation-delay:-0.77s;animation-duration:0.72s'/%3E%3Cline class='rd' x1='88' y1='0' x2='86' y2='8' style='animation-delay:-0.13s;animation-duration:0.65s'/%3E%3Cline class='rd' x1='95' y1='0' x2='93' y2='8' style='animation-delay:-0.28s;animation-duration:0.93s'/%3E%3Cellipse cx='50' cy='88' rx='46' ry='10' fill='%232F4556'/%3E%3Cellipse cx='50' cy='87' rx='42' ry='7.5' fill='%233D5A70'/%3E%3Cellipse class='rp' cx='24' cy='88' rx='6' ry='1.8' fill='none' stroke='%23A9C7DA' stroke-width='.6'/%3E%3Cellipse class='rp' cx='78' cy='86' rx='6' ry='1.8' fill='none' stroke='%23A9C7DA' stroke-width='.6' style='animation-delay:-.6s'/%3E%3Cellipse class='rp' cx='40' cy='91' rx='5' ry='1.5' fill='none' stroke='%23A9C7DA' stroke-width='.6' style='animation-delay:-1.1s'/%3E%3Cg class='bt'%3E%3Cpath d='M46 82 L66 82 L62 87 L50 87Z' fill='%23F5F1E6'/%3E%3Cpath d='M55 82 L55 71 L63 82Z' fill='%23FFFFFF'/%3E%3Cpath d='M55 82 L55 73 L49 82Z' fill='%23E4DECF'/%3E%3C/g%3E%3C/svg%3E\")}\n.blk.sc4,.scsample.sc4{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid slice'%3E%3Cdefs%3E%3ClinearGradient id='b' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%230F2C1D'/%3E%3Cstop offset='1' stop-color='%231F4F31'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23b)'/%3E%3Cg class='sw'%3E%3Cpath d='M26 100 C28 84 24 70 26 58 M72 100 C70 86 74 74 72 66 M50 100 C51 92 49 84 50 80' stroke='%233E8E4A' stroke-width='2' fill='none'/%3E%3Cpath d='M26 80 C16 74 12 78 10 82 C16 84 22 84 26 80Z M72 84 C82 78 88 80 90 84 C84 88 78 88 72 84Z M50 90 C42 86 38 88 36 92 C42 94 46 94 50 90Z' fill='%232E7D3C'/%3E%3Cg transform='translate(26 54)'%3E%3Cg class='bud' style='animation-delay:0s'%3E%3Cellipse cx='0' cy='-3.8' rx='3.8' ry='6.2' fill='%234C9A4A'/%3E%3C/g%3E%3Cg class='o' style='animation-delay:0s'%3E%3Cellipse cx='0' cy='-10.0' rx='5.2' ry='10.0' fill='%23F06292' transform='rotate(0)'/%3E%3Cellipse cx='0' cy='-10.0' rx='5.2' ry='10.0' fill='%23F06292' transform='rotate(45)'/%3E%3Cellipse cx='0' cy='-10.0' rx='5.2' ry='10.0' fill='%23F06292' transform='rotate(90)'/%3E%3Cellipse cx='0' cy='-10.0' rx='5.2' ry='10.0' fill='%23F06292' transform='rotate(135)'/%3E%3Cellipse cx='0' cy='-10.0' rx='5.2' ry='10.0' fill='%23F06292' transform='rotate(180)'/%3E%3Cellipse cx='0' cy='-10.0' rx='5.2' ry='10.0' fill='%23F06292' transform='rotate(225)'/%3E%3Cellipse cx='0' cy='-10.0' rx='5.2' ry='10.0' fill='%23F06292' transform='rotate(270)'/%3E%3Cellipse cx='0' cy='-10.0' rx='5.2' ry='10.0' fill='%23F06292' transform='rotate(315)'/%3E%3C/g%3E%3Cg class='i' style='animation-delay:0s'%3E%3Cellipse cx='0' cy='-6.2' rx='3.8' ry='6.2' fill='%23F8BBD0' transform='rotate(22)'/%3E%3Cellipse cx='0' cy='-6.2' rx='3.8' ry='6.2' fill='%23F8BBD0' transform='rotate(67)'/%3E%3Cellipse cx='0' cy='-6.2' rx='3.8' ry='6.2' fill='%23F8BBD0' transform='rotate(112)'/%3E%3Cellipse cx='0' cy='-6.2' rx='3.8' ry='6.2' fill='%23F8BBD0' transform='rotate(157)'/%3E%3Cellipse cx='0' cy='-6.2' rx='3.8' ry='6.2' fill='%23F8BBD0' transform='rotate(202)'/%3E%3Cellipse cx='0' cy='-6.2' rx='3.8' ry='6.2' fill='%23F8BBD0' transform='rotate(247)'/%3E%3Cellipse cx='0' cy='-6.2' rx='3.8' ry='6.2' fill='%23F8BBD0' transform='rotate(292)'/%3E%3Cellipse cx='0' cy='-6.2' rx='3.8' ry='6.2' fill='%23F8BBD0' transform='rotate(337)'/%3E%3C/g%3E%3Ccircle class='c' r='3.8' fill='%23FFD54F' style='animation-delay:0s'/%3E%3C/g%3E%3Cg transform='translate(72 62)'%3E%3Cg class='bud' style='animation-delay:-2s'%3E%3Cellipse cx='0' cy='-3.2' rx='3.2' ry='5.2' fill='%234C9A4A'/%3E%3C/g%3E%3Cg class='o' style='animation-delay:-2s'%3E%3Cellipse cx='0' cy='-8.4' rx='4.4' ry='8.4' fill='%23E53935' transform='rotate(0)'/%3E%3Cellipse cx='0' cy='-8.4' rx='4.4' ry='8.4' fill='%23E53935' transform='rotate(45)'/%3E%3Cellipse cx='0' cy='-8.4' rx='4.4' ry='8.4' fill='%23E53935' transform='rotate(90)'/%3E%3Cellipse cx='0' cy='-8.4' rx='4.4' ry='8.4' fill='%23E53935' transform='rotate(135)'/%3E%3Cellipse cx='0' cy='-8.4' rx='4.4' ry='8.4' fill='%23E53935' transform='rotate(180)'/%3E%3Cellipse cx='0' cy='-8.4' rx='4.4' ry='8.4' fill='%23E53935' transform='rotate(225)'/%3E%3Cellipse cx='0' cy='-8.4' rx='4.4' ry='8.4' fill='%23E53935' transform='rotate(270)'/%3E%3Cellipse cx='0' cy='-8.4' rx='4.4' ry='8.4' fill='%23E53935' transform='rotate(315)'/%3E%3C/g%3E%3Cg class='i' style='animation-delay:-2s'%3E%3Cellipse cx='0' cy='-5.2' rx='3.2' ry='5.2' fill='%23FF8A80' transform='rotate(22)'/%3E%3Cellipse cx='0' cy='-5.2' rx='3.2' ry='5.2' fill='%23FF8A80' transform='rotate(67)'/%3E%3Cellipse cx='0' cy='-5.2' rx='3.2' ry='5.2' fill='%23FF8A80' transform='rotate(112)'/%3E%3Cellipse cx='0' cy='-5.2' rx='3.2' ry='5.2' fill='%23FF8A80' transform='rotate(157)'/%3E%3Cellipse cx='0' cy='-5.2' rx='3.2' ry='5.2' fill='%23FF8A80' transform='rotate(202)'/%3E%3Cellipse cx='0' cy='-5.2' rx='3.2' ry='5.2' fill='%23FF8A80' transform='rotate(247)'/%3E%3Cellipse cx='0' cy='-5.2' rx='3.2' ry='5.2' fill='%23FF8A80' transform='rotate(292)'/%3E%3Cellipse cx='0' cy='-5.2' rx='3.2' ry='5.2' fill='%23FF8A80' transform='rotate(337)'/%3E%3C/g%3E%3Ccircle class='c' r='3.2' fill='%23FFEB3B' style='animation-delay:-2s'/%3E%3C/g%3E%3Cg transform='translate(50 78)'%3E%3Cg class='bud' style='animation-delay:-4s'%3E%3Cellipse cx='0' cy='-2.5' rx='2.5' ry='4.2' fill='%234C9A4A'/%3E%3C/g%3E%3Cg class='o' style='animation-delay:-4s'%3E%3Cellipse cx='0' cy='-6.8' rx='3.6' ry='6.8' fill='%23FFB300' transform='rotate(0)'/%3E%3Cellipse cx='0' cy='-6.8' rx='3.6' ry='6.8' fill='%23FFB300' transform='rotate(45)'/%3E%3Cellipse cx='0' cy='-6.8' rx='3.6' ry='6.8' fill='%23FFB300' transform='rotate(90)'/%3E%3Cellipse cx='0' cy='-6.8' rx='3.6' ry='6.8' fill='%23FFB300' transform='rotate(135)'/%3E%3Cellipse cx='0' cy='-6.8' rx='3.6' ry='6.8' fill='%23FFB300' transform='rotate(180)'/%3E%3Cellipse cx='0' cy='-6.8' rx='3.6' ry='6.8' fill='%23FFB300' transform='rotate(225)'/%3E%3Cellipse cx='0' cy='-6.8' rx='3.6' ry='6.8' fill='%23FFB300' transform='rotate(270)'/%3E%3Cellipse cx='0' cy='-6.8' rx='3.6' ry='6.8' fill='%23FFB300' transform='rotate(315)'/%3E%3C/g%3E%3Cg class='i' style='animation-delay:-4s'%3E%3Cellipse cx='0' cy='-4.2' rx='2.5' ry='4.2' fill='%23FFE082' transform='rotate(22)'/%3E%3Cellipse cx='0' cy='-4.2' rx='2.5' ry='4.2' fill='%23FFE082' transform='rotate(67)'/%3E%3Cellipse cx='0' cy='-4.2' rx='2.5' ry='4.2' fill='%23FFE082' transform='rotate(112)'/%3E%3Cellipse cx='0' cy='-4.2' rx='2.5' ry='4.2' fill='%23FFE082' transform='rotate(157)'/%3E%3Cellipse cx='0' cy='-4.2' rx='2.5' ry='4.2' fill='%23FFE082' transform='rotate(202)'/%3E%3Cellipse cx='0' cy='-4.2' rx='2.5' ry='4.2' fill='%23FFE082' transform='rotate(247)'/%3E%3Cellipse cx='0' cy='-4.2' rx='2.5' ry='4.2' fill='%23FFE082' transform='rotate(292)'/%3E%3Cellipse cx='0' cy='-4.2' rx='2.5' ry='4.2' fill='%23FFE082' transform='rotate(337)'/%3E%3C/g%3E%3Ccircle class='c' r='2.5' fill='%238D4E1A' style='animation-delay:-4s'/%3E%3C/g%3E%3C/g%3E%3Ccircle class='pl' cx='30' cy='50' r='.9' fill='%23FFF59D'/%3E%3Ccircle class='pl' cx='70' cy='58' r='.8' fill='%23FFF59D' style='animation-delay:-2s'/%3E%3Ccircle class='pl' cx='50' cy='74' r='.8' fill='%23FFF59D' style='animation-delay:-3.5s'/%3E%3C/svg%3E\")}\n.blk.sc5,.scsample.sc5{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid slice'%3E%3Cdefs%3E%3ClinearGradient id='b' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%230B1630'/%3E%3Cstop offset='1' stop-color='%231A3350'/%3E%3C/linearGradient%3E%3CradialGradient id='g'%3E%3Cstop offset='0' stop-color='%23FFF6B8'/%3E%3Cstop offset='.35' stop-color='%23FFE066' stop-opacity='.9'/%3E%3Cstop offset='1' stop-color='%23FFE066' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23b)'/%3E%3Ccircle class='st' cx='18' cy='16' r='.9' fill='%23DDE7FF'/%3E%3Ccircle class='st' cx='72' cy='10' r='.7' fill='%23DDE7FF' style='animation-delay:-2s'/%3E%3Ccircle cx='88' cy='26' r='.6' fill='%23DDE7FF'/%3E%3Ccircle cx='80' cy='20' r='7' fill='%23F3E6B5'/%3E%3Ccircle cx='83' cy='18' r='6.2' fill='%230F1C38'/%3E%3Cpath d='M0 78 Q25 66 50 74 T100 70 V100 H0Z' fill='%2313301F'/%3E%3Cpath d='M0 88 Q30 80 60 86 T100 84 V100 H0Z' fill='%230C2316'/%3E%3Cg fill='%230C2316'%3E%3Cpath d='M10 88 l3-16 2 16z'/%3E%3Cpath d='M20 88 l2-12 3 12z'/%3E%3Cpath d='M62 88 l3-14 2 14z'/%3E%3Cpath d='M74 88 l2-18 3 18z'/%3E%3Cpath d='M86 88 l2-11 2 11z'/%3E%3C/g%3E%3Ccircle class='f' cx='24' cy='56' r='5' fill='url(%23g)'/%3E%3Ccircle class='f f2' cx='46' cy='44' r='4.5' fill='url(%23g)'/%3E%3Ccircle class='f f3' cx='66' cy='60' r='5' fill='url(%23g)'/%3E%3Ccircle class='f f4' cx='36' cy='70' r='4' fill='url(%23g)'/%3E%3Ccircle class='f f5' cx='80' cy='48' r='4' fill='url(%23g)'/%3E%3C/svg%3E\")}\n.blk.sc6,.scsample.sc6{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid slice'%3E%3Cdefs%3E%3ClinearGradient id='b' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%231B1E45'/%3E%3Cstop offset='1' stop-color='%233B2F63'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23b)'/%3E%3Ccircle class='st' cx='14' cy='14' r='1' fill='%23E8EBFF'/%3E%3Ccircle class='st' cx='30' cy='30' r='.7' fill='%23E8EBFF' style='animation-delay:-1s'/%3E%3Ccircle class='st' cx='90' cy='52' r='.8' fill='%23E8EBFF' style='animation-delay:-2s'/%3E%3Ccircle cx='70' cy='28' r='15' fill='%23F6E7B0'/%3E%3Ccircle cx='64' cy='24' r='2.4' fill='%23E9D693'/%3E%3Ccircle cx='75' cy='33' r='1.8' fill='%23E9D693'/%3E%3Crect x='0' y='82' width='100' height='18' fill='%235A3A2A'/%3E%3Crect x='0' y='82' width='100' height='3' fill='%237A5038'/%3E%3Cg fill='%230D0B18'%3E%3Cpath class='t' d='M52 82 C64 82 66 72 60 66 C57 63 55 66 58 68 C62 71 60 78 50 79Z'/%3E%3Cpath class='br' d='M30 82 C28 70 31 58 40 55 C49 58 52 70 50 82Z'/%3E%3Ccircle cx='40' cy='50' r='8.5'/%3E%3Cpath class='e' d='M33 47 L33.5 37 L39 44Z'/%3E%3Cpath class='e' d='M47 47 L46.5 37 L41 44Z' style='animation-delay:-.3s'/%3E%3C/g%3E%3C/svg%3E\")}\n.blk.sc7,.scsample.sc7{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid slice'%3E%3Cdefs%3E%3CradialGradient id='b' cx='.4' cy='.4' r='.8'%3E%3Cstop offset='0' stop-color='%2317606F'/%3E%3Cstop offset='1' stop-color='%230A2C36'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23b)'/%3E%3Ccircle class='r' cx='30' cy='30' r='8' fill='none' stroke='%239FD8DF' stroke-width='.8'/%3E%3Ccircle class='r' cx='72' cy='72' r='8' fill='none' stroke='%239FD8DF' stroke-width='.8' style='animation-delay:-2s'/%3E%3Cg class='k'%3E%3Cg transform='translate(0 50)'%3E%3Cpath class='tf' d='M-2 0 L-10 -6 L-8 0 L-10 6Z' fill='%23F28C38'/%3E%3Cellipse cx='8' cy='0' rx='11' ry='5' fill='%23F7F1E8'/%3E%3Cpath d='M2 -4 Q8 -6 14 -3 Q10 0 4 1Z' fill='%23E8562A'/%3E%3Ccircle cx='16' cy='-1.2' r='.9' fill='%23222'/%3E%3C/g%3E%3C/g%3E%3Cg class='k2'%3E%3Cg transform='translate(0 70)'%3E%3Cpath class='tf' d='M-2 0 L-9 -5 L-7 0 L-9 5Z' fill='%23FFB347'/%3E%3Cellipse cx='7' cy='0' rx='9.5' ry='4.2' fill='%23F58A2E'/%3E%3Ccircle cx='14' cy='-1' r='.8' fill='%23222'/%3E%3C/g%3E%3C/g%3E%3Cpath d='M58 22 a13 13 0 1 0 12 -6 L62 26Z' fill='%232F8A55'/%3E%3Cpath d='M14 80 a10 10 0 1 0 9 -5 L18 84Z' fill='%2327794A'/%3E%3Cg transform='translate(70 26)'%3E%3Cpath d='M0 0 C-6 -4 -6 -12 0 -16 C6 -12 6 -4 0 0Z' fill='%23F7A8C4'/%3E%3Cpath d='M0 0 C-10 -2 -12 -9 -9 -12 C-5 -8 -2 -4 0 0Z' fill='%23EC7FA9'/%3E%3Cpath d='M0 0 C10 -2 12 -9 9 -12 C5 -8 2 -4 0 0Z' fill='%23EC7FA9'/%3E%3C/g%3E%3C/svg%3E\")}\n.blk.sc8,.scsample.sc8{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid slice'%3E%3Cdefs%3E%3ClinearGradient id='b' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%232A2152'/%3E%3Cstop offset='.6' stop-color='%237A3E6B'/%3E%3Cstop offset='1' stop-color='%23B65A5E'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23b)'/%3E%3Ccircle cx='74' cy='70' r='13' fill='%23F6B26B' opacity='.95'/%3E%3Cg class='fly'%3E%3Cpath class='w' d='M10 22 q4 -4 8 0 q4 -4 8 0' fill='none' stroke='%231A1230' stroke-width='1.6' stroke-linecap='round'/%3E%3C/g%3E%3Cg class='fly' style='animation-delay:-5s'%3E%3Cpath class='w' d='M0 34 q3 -3 6 0 q3 -3 6 0' fill='none' stroke='%231A1230' stroke-width='1.3' stroke-linecap='round'/%3E%3C/g%3E%3Cpath d='M-2 84 C30 76 60 80 104 70 L104 75 C62 85 30 82 -2 90Z' fill='%231A1230'/%3E%3Cpath d='M58 79 C62 72 70 70 76 72 C70 74 64 76 62 80Z' fill='%231A1230'/%3E%3Cg fill='%231A1230'%3E%3Cpath d='M22 70 L10 76 L18 76Z'/%3E%3Cellipse cx='30' cy='70' rx='11' ry='7.5'/%3E%3Cg class='h'%3E%3Ccircle cx='38' cy='62' r='5.5'/%3E%3Cpath d='M43 61 L49 62.5 L43 64Z' fill='%23E89A4F'/%3E%3Ccircle cx='39.5' cy='61' r='1' fill='%23F6B26B'/%3E%3C/g%3E%3Cpath d='M28 77 v6 M32 77 v6' stroke='%231A1230' stroke-width='1.4'/%3E%3C/g%3E%3C/svg%3E\")}\n.blk.sc9,.scsample.sc9{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid slice'%3E%3Cdefs%3E%3ClinearGradient id='b' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23123B2F'/%3E%3Cstop offset='1' stop-color='%231F5C40'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23b)'/%3E%3Ccircle cx='20' cy='18' r='.9' fill='%23CFEBD9' opacity='.7'/%3E%3Ccircle cx='82' cy='30' r='.7' fill='%23CFEBD9' opacity='.7'/%3E%3Cg class='sw'%3E%3Cpath d='M28 100 C28 86 30 76 30 68' stroke='%233E8E5A' stroke-width='2' fill='none'/%3E%3Cg transform='translate(30 66)'%3E%3Ccircle r='3' fill='%23FFD54F'/%3E%3Cg fill='%23F48FB1'%3E%3Ccircle cx='0' cy='-6' r='4'/%3E%3Ccircle cx='6' cy='-1' r='4'/%3E%3Ccircle cx='3.5' cy='5.5' r='4'/%3E%3Ccircle cx='-3.5' cy='5.5' r='4'/%3E%3Ccircle cx='-6' cy='-1' r='4'/%3E%3C/g%3E%3Ccircle r='3' fill='%23FFD54F'/%3E%3C/g%3E%3C/g%3E%3Cg class='sw' style='animation-delay:-2s'%3E%3Cpath d='M72 100 C72 90 70 82 70 76' stroke='%233E8E5A' stroke-width='2' fill='none'/%3E%3Cg transform='translate(70 74)'%3E%3Cg fill='%23B39DDB'%3E%3Ccircle cx='0' cy='-5' r='3.4'/%3E%3Ccircle cx='5' cy='-1' r='3.4'/%3E%3Ccircle cx='3' cy='4.5' r='3.4'/%3E%3Ccircle cx='-3' cy='4.5' r='3.4'/%3E%3Ccircle cx='-5' cy='-1' r='3.4'/%3E%3C/g%3E%3Ccircle r='2.6' fill='%23FFF3B0'/%3E%3C/g%3E%3C/g%3E%3Cpath d='M0 92 Q20 84 40 92 T80 90 T100 92 V100 H0Z' fill='%230E2E22'/%3E%3Cg class='bf'%3E%3Cg transform='translate(50 42)'%3E%3Cg class='wl'%3E%3Cpath d='M0 0 C-8 -12 -18 -8 -14 -1 C-18 4 -10 10 0 2Z' fill='%23FFB74D'/%3E%3Ccircle cx='-9' cy='-4' r='2' fill='%23FFF3E0'/%3E%3C/g%3E%3Cg class='wr'%3E%3Cpath d='M0 0 C8 -12 18 -8 14 -1 C18 4 10 10 0 2Z' fill='%23FF8A65'/%3E%3Ccircle cx='9' cy='-4' r='2' fill='%23FFF3E0'/%3E%3C/g%3E%3Cellipse cx='0' cy='1' rx='1.3' ry='6' fill='%233E2723'/%3E%3Cpath d='M0 -5 l-3 -5 M0 -5 l3 -5' stroke='%233E2723' stroke-width='.8'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")}\n.blk.sc10,.scsample.sc10{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid slice'%3E%3Cdefs%3E%3ClinearGradient id='b' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%23141A36'/%3E%3Cstop offset='1' stop-color='%2326315A'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23b)'/%3E%3Ccircle class='st' cx='12' cy='12' r='.9' fill='%23E3E8FF'/%3E%3Ccircle class='st' cx='88' cy='18' r='.8' fill='%23E3E8FF' style='animation-delay:-1.5s'/%3E%3Ccircle cx='16' cy='30' r='8' fill='%23F4E3B2'/%3E%3Ccircle cx='19.5' cy='27.5' r='7' fill='%231A2142'/%3E%3Crect x='36' y='0' width='46' height='100' rx='6' fill='%234A3426'/%3E%3Cpath d='M44 0 v100 M60 0 v100 M74 0 v100' stroke='%233B291E' stroke-width='1.2'/%3E%3Cellipse cx='59' cy='56' rx='16' ry='21' fill='%231E140F'/%3E%3Cg class='hd'%3E%3Cellipse cx='59' cy='62' rx='11' ry='13' fill='%23A1785A'/%3E%3Cellipse cx='59' cy='66' rx='7' ry='8' fill='%23D9BE9A'/%3E%3Cpath d='M48 46 L50 40 L54 47Z M70 46 L68 40 L64 47Z' fill='%23A1785A'/%3E%3Ccircle cx='54.5' cy='52' r='4.6' fill='%23FFF6DA'/%3E%3Ccircle cx='63.5' cy='52' r='4.6' fill='%23FFF6DA'/%3E%3Ccircle cx='54.5' cy='52.5' r='2.3' fill='%231B1B1B'/%3E%3Ccircle cx='63.5' cy='52.5' r='2.3' fill='%231B1B1B'/%3E%3Crect class='lid' x='49.6' y='47.2' width='9.8' height='9.8' rx='4.9' fill='%238C6447'/%3E%3Crect class='lid' x='58.6' y='47.2' width='9.8' height='9.8' rx='4.9' fill='%238C6447'/%3E%3Cpath d='M57.5 56 L59 59.5 L60.5 56Z' fill='%23E7A23A'/%3E%3C/g%3E%3Crect x='30' y='76' width='60' height='4' rx='2' fill='%233B291E'/%3E%3C/svg%3E\")}\n.blk.sc11,.scsample.sc11{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid slice'%3E%3Cdefs%3E%3ClinearGradient id='b' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%230E2F3B'/%3E%3Cstop offset='1' stop-color='%231D4E4A'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23b)'/%3E%3Cpath d='M-2 70 C30 62 60 66 104 56' stroke='%234B3122' stroke-width='5' fill='none' stroke-linecap='round'/%3E%3Cpath class='lf' d='M70 62 C80 52 92 54 98 58 C90 64 80 66 70 62Z' fill='%232E7D32'/%3E%3Cpath class='lf' d='M10 68 C2 58 -6 60 -8 64 C-2 70 4 72 10 68Z' fill='%23388E3C' style='animation-delay:-2s'/%3E%3Cg class='mg'%3E%3Cpath d='M84 58 v6' stroke='%234B3122' stroke-width='1.2'/%3E%3Cellipse cx='84' cy='71' rx='5.5' ry='7.5' fill='%23F9A825'/%3E%3Cellipse cx='82' cy='69' rx='1.6' ry='3' fill='%23FFE082' opacity='.8'/%3E%3C/g%3E%3Cpath d='M34 66 L28 92 L33 92 L38 68Z' fill='%231B7A3A'/%3E%3Cpath d='M38 66 L36 94 L40 93 L41 68Z' fill='%232E9E4F'/%3E%3Cellipse cx='40' cy='56' rx='10' ry='13' fill='%2343A047'/%3E%3Cpath d='M34 52 C30 60 32 68 40 70 C36 64 36 58 38 52Z' fill='%232E7D32'/%3E%3Cg class='hd'%3E%3Ccircle cx='44' cy='40' r='8.5' fill='%234CAF50'/%3E%3Cpath d='M51 38 C57 38 58 45 53 47 C52 44 51 42 49 42Z' fill='%23E53935'/%3E%3Ccircle cx='46.5' cy='37.5' r='2' fill='%23FFF'/%3E%3Ccircle cx='47' cy='37.6' r='1.1' fill='%23111'/%3E%3Cpath d='M38 46 Q44 49 50 46' stroke='%231B1B1B' stroke-width='.9' fill='none'/%3E%3C/g%3E%3Cpath d='M36 68 v4 M42 68 v4' stroke='%237A5A2A' stroke-width='1.6'/%3E%3C/svg%3E\")}\n.blk.sc12,.scsample.sc12{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid slice'%3E%3Cdefs%3E%3ClinearGradient id='b' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%232E1A2E'/%3E%3Cstop offset='1' stop-color='%235A2E22'/%3E%3C/linearGradient%3E%3Cpath id='lf' d='M0 -6 C5 -4 6 2 0 6 C-6 2 -5 -4 0 -6Z M0 -6 V6'/%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23b)'/%3E%3Cpath d='M0 0 C20 10 30 4 46 14 C40 18 30 16 22 22 C14 18 6 20 0 16Z' fill='%231E1016'/%3E%3Ccircle cx='30' cy='10' r='5' fill='%23C0392B'/%3E%3Ccircle cx='18' cy='16' r='4' fill='%23E67E22'/%3E%3Ccircle cx='40' cy='16' r='3.5' fill='%23D35400'/%3E%3Cpath d='M0 90 Q30 84 60 90 T100 88 V100 H0Z' fill='%233A1C14'/%3E%3Cg fill='%23E67E22'%3E%3Cellipse cx='20' cy='92' rx='3' ry='1.4'/%3E%3Cellipse cx='64' cy='93' rx='3' ry='1.4' fill='%23C0392B'/%3E%3Cellipse cx='84' cy='91' rx='2.6' ry='1.2' fill='%23F1C40F'/%3E%3C/g%3E%3Cg transform='translate(24 0)'%3E%3Cg class='d'%3E%3Cuse href='%23lf' fill='%23E67E22' stroke='%238E3B12' stroke-width='.6'/%3E%3C/g%3E%3C/g%3E%3Cg transform='translate(56 0)'%3E%3Cg class='d d2'%3E%3Cuse href='%23lf' fill='%23F1C40F' stroke='%239A6A0B' stroke-width='.6'/%3E%3C/g%3E%3C/g%3E%3Cg transform='translate(78 0)'%3E%3Cg class='d d3'%3E%3Cuse href='%23lf' fill='%23C0392B' stroke='%236E1D15' stroke-width='.6'/%3E%3C/g%3E%3C/g%3E%3Cg transform='translate(40 0)'%3E%3Cg class='d d4'%3E%3Cuse href='%23lf' fill='%23D35400' stroke='%237A2E0A' stroke-width='.6'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")}\n}\nhtml.epv-on body>.navbar,html.epv-on body>.body-fauxcolumns,html.epv-on body>div.content,html.epv-on #navbar-iframe-container{display:none!important}\nhtml.epv-on,html.epv-on body{min-width:0!important;width:auto!important;margin:0!important;padding-left:0!important;padding-right:0!important}\nhtml.epv-on body{height:100%;padding:0!important;background:var(--bg)!important}\nhtml.epv-on body.loading{display:block!important;padding:0!important;text-align:start!important}\n";
  var SHELL = "<div id=\"app\">\n  <main id=\"view\" aria-live=\"polite\"></main>\n  <nav id=\"tabs\" aria-label=\"\u0c2a\u0c4d\u0c30\u0c27\u0c3e\u0c28 \u0c2e\u0c46\u0c28\u0c42\">\n    <a href=\"#home\" data-tab=\"home\"><span><svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z\"></path></svg></span>\u0c39\u0c4b\u0c2e\u0c4d</a>\n    <a href=\"#archive\" data-tab=\"archive\"><span><svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" aria-hidden=\"true\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"16\" rx=\"2\"></rect><path d=\"M3 10h18M8 3v4M16 3v4\"></path></svg></span>\u0c06\u0c30\u0c4d\u0c15\u0c48\u0c35\u0c4d</a>\n    <a href=\"#profile\" data-tab=\"profile\"><span><svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"8\" r=\"4\"></circle><path d=\"M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6\"></path></svg></span>\u0c28\u0c47\u0c28\u0c41</a>\n    <a href=\"#prefs\" data-tab=\"prefs\"><span><svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" aria-hidden=\"true\"><path d=\"M4 6h9M17 6h3M4 12h3M11 12h9M4 18h11M19 18h1\"></path><circle cx=\"15\" cy=\"6\" r=\"2\"></circle><circle cx=\"9\" cy=\"12\" r=\"2\"></circle><circle cx=\"17\" cy=\"18\" r=\"2\"></circle></svg></span>\u0c05\u0c2e\u0c30\u0c3f\u0c15\u0c32\u0c41</a>\n  </nav>\n</div>\n<div id=\"toast\" role=\"status\" hidden></div>\n\n";
  var FONTS = "https://fonts.googleapis.com/css2?family=Ramabhadra&family=Anek+Telugu:wght@400;500;600;700&display=swap";
  function APP() {
(function () {
  'use strict';
  var root = document.documentElement;
  var view = document.getElementById('view');
  var tabs = document.getElementById('tabs');
  var toastEl = document.getElementById('toast');
  // Inside Claude this page is the admin studio; on your own website it is the public reader that loads the blog live.
  var IS_CLAUDE = !!(window.claude && typeof window.claude.use === 'function');
  // the Android app (APK) opens this same site; it adds "EPadavinodamApp" to its browser name
  var IN_APK = /EPadavinodamApp|; wv\)/.test(navigator.userAgent), IS_ANDROID = /Android/i.test(navigator.userAgent);
  // the blog itself (telugupadavinodam.blogspot.com, its new theme loads this app over the old layout): the same screens; files from the website
  var IN_BLOG = !IS_CLAUDE && !!window.EPV_IN_BLOG && !/[?&]embed=1(&|$)/.test(location.search);
  var APPBASE = IN_BLOG ? 'https://uvsubbaiah-spec.github.io/e-padavinodam/' : '';
  if (IN_BLOG) document.documentElement.classList.add('inblog');
  var APK = { file: APPBASE + 'e-padavinodam.apk', ok: false, mb: 0 };
  // inside a blog post on a phone (the blog's theme puts this page in a frame): only that post is played, the blog hands it over
  var EMBED = !IS_CLAUDE && /[?&]embed=1(&|$)/.test(location.search);
  if (EMBED) document.documentElement.classList.add('embed');
  var BLOG_STATE = 'loading';

  var BLOG = 'https://telugupadavinodam.blogspot.com/';
  var FEED = BLOG + 'feeds/posts/default?alt=json&max-results=500';
  var WEEKDAYS = ['\u0c06\u0c26\u0c3f\u0c35\u0c3e\u0c30\u0c02', '\u0c38\u0c4b\u0c2e\u0c35\u0c3e\u0c30\u0c02', '\u0c2e\u0c02\u0c17\u0c33\u0c35\u0c3e\u0c30\u0c02', '\u0c2c\u0c41\u0c27\u0c35\u0c3e\u0c30\u0c02', '\u0c17\u0c41\u0c30\u0c41\u0c35\u0c3e\u0c30\u0c02', '\u0c36\u0c41\u0c15\u0c4d\u0c30\u0c35\u0c3e\u0c30\u0c02', '\u0c36\u0c28\u0c3f\u0c35\u0c3e\u0c30\u0c02'];
  var MONTHS = ['\u0c1c\u0c28\u0c35\u0c30\u0c3f', '\u0c2b\u0c3f\u0c2c\u0c4d\u0c30\u0c35\u0c30\u0c3f', '\u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f', '\u0c0f\u0c2a\u0c4d\u0c30\u0c3f\u0c32\u0c4d', '\u0c2e\u0c47', '\u0c1c\u0c42\u0c28\u0c4d', '\u0c1c\u0c42\u0c32\u0c48', '\u0c06\u0c17\u0c38\u0c4d\u0c1f\u0c41', '\u0c38\u0c46\u0c2a\u0c4d\u0c1f\u0c46\u0c02\u0c2c\u0c30\u0c4d', '\u0c05\u0c15\u0c4d\u0c1f\u0c4b\u0c2c\u0c30\u0c4d', '\u0c28\u0c35\u0c02\u0c2c\u0c30\u0c4d', '\u0c21\u0c3f\u0c38\u0c46\u0c02\u0c2c\u0c30\u0c4d'];
  var AKSHARA = /[\u0c15-\u0c39\u0c58-\u0c5a](?:\u0c4d[\u0c15-\u0c39\u0c58-\u0c5a])*(?:[\u0c3e-\u0c4c\u0c55\u0c56]|\u0c4d(?![\u0c15-\u0c39]))?[\u0c00-\u0c03]?|[\u0c05-\u0c14\u0c60\u0c61][\u0c00-\u0c03]?|\S/g;

  /* ================= puzzles =================
     A puzzle: {id, title, date 'DD.MM.YYYY', src, url?, grid: ['..#.'], nums: {'r,c': n}, ans: [['\u0c15','',..]] | null,
                clues: [{d:'A'|'D', n, len, text}]} */
  function sampleToPuzzle() {
    var rows = [
      ['\u0c15', '\u0c2e', '\u0c32\u0c02', null, '\u0c2a\u0c3e', '\u0c35\u0c41', '\u0c30\u0c02'], ['\u0c32\u0c41', null, '\u0c17', null, '\u0c2f', null, '\u0c17\u0c41'], ['\u0c35', '\u0c28', '\u0c30\u0c41', null, '\u0c38\u0c02', '\u0c15\u0c46', '\u0c32\u0c41'],
      [null, null, null, null, null, null, null],
      ['\u0c15\u0c4b', '\u0c15\u0c3f', '\u0c32', null, '\u0c09', '\u0c17\u0c3e', '\u0c26\u0c3f'], ['\u0c35\u0c46', null, '\u0c15\u0c4d\u0c37', null, '\u0c2f\u0c4d\u0c2f\u0c3e', null, '\u0c15\u0c4d\u0c15\u0c41'], ['\u0c32', '\u0c35', '\u0c23\u0c02', null, '\u0c32', '\u0c24', '\u0c32\u0c41']];
    var text = {
      A1: '\u0c24\u0c3e\u0c2e\u0c30 \u0c2a\u0c41\u0c35\u0c4d\u0c35\u0c41', A3: '\u0c36\u0c3e\u0c02\u0c24\u0c3f\u0c15\u0c3f \u0c1a\u0c3f\u0c39\u0c4d\u0c28\u0c2e\u0c48\u0c28 \u0c2a\u0c15\u0c4d\u0c37\u0c3f', A5: '\u0c28\u0c40\u0c30\u0c41, \u0c05\u0c21\u0c35\u0c3f \u0c35\u0c02\u0c1f\u0c3f \u0c38\u0c39\u0c1c \u0c38\u0c02\u0c2a\u0c26', A6: '\u0c16\u0c48\u0c26\u0c40 \u0c15\u0c3e\u0c33\u0c4d\u0c33\u0c15\u0c41 \u0c35\u0c47\u0c38\u0c47\u0c35\u0c3f', A7: '\u0c35\u0c38\u0c02\u0c24\u0c02\u0c32\u0c4b \u0c15\u0c42\u0c38\u0c47 \u0c2a\u0c15\u0c4d\u0c37\u0c3f', A9: '\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41 \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c3e\u0c26\u0c3f', A11: '\u0c09\u0c2a\u0c4d\u0c2a\u0c41', A12: '\u0c24\u0c40\u0c17\u0c32\u0c41',
      D1: '\u0c35\u0c46\u0c28\u0c4d\u0c28\u0c46\u0c32\u0c32\u0c4b \u0c35\u0c3f\u0c1a\u0c4d\u0c1a\u0c47 \u0c2a\u0c41\u0c35\u0c4d\u0c35\u0c41', D2: '\u0c13\u0c21\u0c28\u0c41 \u0c28\u0c3f\u0c32\u0c3f\u0c2a\u0c47 \u0c07\u0c28\u0c41\u0c2a \u0c38\u0c3e\u0c27\u0c28\u0c02', D3: '\u0c2a\u0c02\u0c21\u0c41\u0c17 \u0c30\u0c4b\u0c1c\u0c41 \u0c1a\u0c47\u0c38\u0c47 \u0c24\u0c40\u0c2a\u0c3f \u0c35\u0c02\u0c1f\u0c15\u0c02', D4: '\u0c39\u0c30\u0c3f\u0c35\u0c3f\u0c32\u0c4d\u0c32\u0c41\u0c32\u0c4b \u0c0f\u0c21\u0c41', D7: '\u0c17\u0c41\u0c21\u0c3f, \u0c26\u0c47\u0c35\u0c3e\u0c32\u0c2f\u0c02', D8: '\u0c17\u0c41\u0c23\u0c02, \u0c38\u0c4d\u0c35\u0c2d\u0c3e\u0c35\u0c02', D9: '\u0c2a\u0c38\u0c3f\u0c2a\u0c3e\u0c2a\u0c28\u0c41 \u0c0a\u0c2a\u0c47 \u0c24\u0c4a\u0c1f\u0c4d\u0c1f\u0c3f', D10: '\u0c24\u0c42\u0c30\u0c4d\u0c2a\u0c41, \u0c2a\u0c21\u0c2e\u0c30 \u0c35\u0c02\u0c1f\u0c3f\u0c35\u0c3f'
    };
    var p = { id: 'sample', title: '\u0c28\u0c2e\u0c42\u0c28\u0c3e \u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02', date: '', src: 'sample', grid: [], nums: {}, ans: [], clues: [] };
    rows.forEach(function (r) { p.grid.push(r.map(function (x) { return x === null ? '#' : '.'; }).join('')); p.ans.push(r.map(function (x) { return x || ''; })); });
    autoNumber(p);
    Object.keys(text).forEach(function (k) { p.clues.push({ d: k[0], n: +k.slice(1), len: 3, text: text[k] }); });
    return p;
  }
  // Eenadu gives a white square with no white neighbour its own \u0c05\u0c21\u0c4d\u0c21\u0c02 clue of one letter
  function lone(w, r, c) { return w(r, c) && !w(r, c - 1) && !w(r, c + 1) && !w(r - 1, c) && !w(r + 1, c); }
  function autoNumber(p) {
    var R = p.grid.length, C = p.grid[0].length, n = 0; p.nums = {};
    function w(r, c) { return r >= 0 && c >= 0 && r < R && c < C && p.grid[r][c] !== '#'; }
    for (var r = 0; r < R; r++) for (var c = 0; c < C; c++) {
      if (!w(r, c)) continue;
      if ((!w(r, c - 1) && w(r, c + 1)) || (!w(r - 1, c) && w(r + 1, c)) || lone(w, r, c)) p.nums[r + ',' + c] = ++n;
    }
  }
  var SAMPLE = sampleToPuzzle();
  var PUZZLES = [];
  var DATA_STATE = 'loading';

  function key(r, c) { return r + ',' + c; }
  // the papers whose puzzles are posted. A puzzle's id starts with its paper's letter (Eenadu's ids stay as they always were),
  // so two papers' puzzles of the same Sunday live side by side.
  var PAPERS = [
    { id: 'eenadu', te: '\u0c08\u0c28\u0c3e\u0c21\u0c41', en: 'Eenadu', pre: 'e', title: '\u0c08\u0c28\u0c3e\u0c21\u0c41 \u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02', re: /\u0c08\u0c28\u0c3e\u0c21\u0c41|eenadu/i },
    { id: 'sakshi', te: '\u0c38\u0c3e\u0c15\u0c4d\u0c37\u0c3f', en: 'Sakshi', pre: 's', title: '\u0c38\u0c3e\u0c15\u0c4d\u0c37\u0c3f \u0c2a\u0c26\u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02', re: /\u0c38\u0c3e\u0c15\u0c4d\u0c37\u0c3f|sakshi/i },
    { id: 'jyothy', te: '\u0c06\u0c02\u0c27\u0c4d\u0c30\u0c1c\u0c4d\u0c2f\u0c4b\u0c24\u0c3f', en: 'Andhra Jyothy', pre: 'j', title: '\u0c06\u0c02\u0c27\u0c4d\u0c30\u0c1c\u0c4d\u0c2f\u0c4b\u0c24\u0c3f \u0c2a\u0c26\u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02', re: /\u0c1c\u0c4d\u0c2f\u0c4b\u0c24\u0c3f|jyoth/i },
    { id: 'namasthe', te: '\u0c28\u0c2e\u0c38\u0c4d\u0c24\u0c47 \u0c24\u0c46\u0c32\u0c02\u0c17\u0c3e\u0c23', en: 'Namasthe Telangana', pre: 'n', title: '\u0c28\u0c2e\u0c38\u0c4d\u0c24\u0c47 \u0c24\u0c46\u0c32\u0c02\u0c17\u0c3e\u0c23 \u0c2a\u0c26\u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02', re: /\u0c28\u0c2e\u0c38\u0c4d\u0c24\u0c47|namast/i },
    { id: 'vaartha', te: '\u0c35\u0c3e\u0c30\u0c4d\u0c24', en: 'Vaartha', pre: 'v', title: '\u0c35\u0c3e\u0c30\u0c4d\u0c24 \u0c2a\u0c26\u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02', re: /\u0c35\u0c3e\u0c30\u0c4d\u0c24|vaartha|vartha/i },
    { id: 'bhoomi', te: '\u0c06\u0c02\u0c27\u0c4d\u0c30\u0c2d\u0c42\u0c2e\u0c3f', en: 'Andhra Bhoomi', pre: 'b', title: '\u0c06\u0c02\u0c27\u0c4d\u0c30\u0c2d\u0c42\u0c2e\u0c3f \u0c2a\u0c26\u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02', re: /\u0c2d\u0c42\u0c2e\u0c3f|bhoomi/i },
    { id: 'prabha', te: '\u0c06\u0c02\u0c27\u0c4d\u0c30\u0c2a\u0c4d\u0c30\u0c2d', en: 'Andhra Prabha', pre: 'p', title: '\u0c06\u0c02\u0c27\u0c4d\u0c30\u0c2a\u0c4d\u0c30\u0c2d \u0c2a\u0c26\u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02', re: /\u0c06\u0c02\u0c27\u0c4d\u0c30\u0c2a\u0c4d\u0c30\u0c2d|prabha/i },
    { id: 'other', te: '\u0c07\u0c24\u0c30 \u0c2a\u0c24\u0c4d\u0c30\u0c3f\u0c15', en: 'Other', pre: 'x', title: '\u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02', re: null }
  ];
  function paperOf(id) { for (var i = 0; i < PAPERS.length; i++) if (PAPERS[i].id === id) return PAPERS[i]; return PAPERS[0]; }
  function paperIn(text) { text = String(text || ''); if (PAPERS[0].re.test(text)) return 'eenadu'; for (var i = 1; i < PAPERS.length; i++) if (PAPERS[i].re && PAPERS[i].re.test(text)) return PAPERS[i].id; return 'eenadu'; }
  function pkey(p) { return (p.paper && p.paper !== 'eenadu' ? p.paper + ':' : '') + (p.date || ''); }   // one paper's one date
  function paperOptions(sel) { sel = sel || 'eenadu'; return PAPERS.map(function (x) { return '<option value="' + x.id + '"' + (x.id === sel ? ' selected' : '') + '>' + x.te + ' \u00b7 ' + x.en + '</option>'; }).join(''); }
  function upPaper() { var el = document.getElementById('up-paper'); var v = el ? el.value : (S.prefs.paper || 'eenadu'); return paperOf(v).id; }
  function dateKey(d) { var m = /^(\d{2})\.(\d{2})\.(\d{4})$/.exec(d || ''); return m ? m[3] + m[2] + m[1] : '00000000'; }
  function weekday(d) { var m = /^(\d{2})\.(\d{2})\.(\d{4})$/.exec(d || ''); if (!m) return ''; var dt = new Date(+m[3], +m[2] - 1, +m[1]); return WEEKDAYS[dt.getDay()] || ''; }
  function monthName(d) { var m = /^(\d{2})\.(\d{2})\.(\d{4})$/.exec(d || ''); return m ? MONTHS[+m[2] - 1] + ' ' + m[3] : '\u0c24\u0c47\u0c26\u0c40 \u0c32\u0c47\u0c28\u0c3f\u0c35\u0c3f'; }
  function sorted() { return PUZZLES.slice().sort(function (a, b) { return dateKey(b.date).localeCompare(dateKey(a.date)); }); }
  function lastUse(id) { var P = S.prog[id]; return P && (P.started || P.done) ? (P.used || 1) : 0; }
  // the order a player sees: posts played most recently first (then the rest by date), or simply newest first
  function byUse() { var l = sorted(); if (S.prefs.order === 'date') return l; return l.map(function (p, i) { return [p, lastUse(p.id), i]; }).sort(function (a, b) { return (b[1] - a[1]) || (a[2] - b[2]); }).map(function (x) { return x[0]; }); }
  function findPuzzle(id) {
    if (id === 'sample') return SAMPLE;
    if (id === 'draft') return D ? draftToPuzzle(D, true) : null;
    for (var i = 0; i < PUZZLES.length; i++) if (PUZZLES[i].id === id) return PUZZLES[i];
    return null;
  }

  var MODELS = {};
  function model(p) {
    if (p.id !== 'draft' && MODELS[p.id] && MODELS[p.id].p === p) return MODELS[p.id];
    var R = p.grid.length, C = R ? p.grid[0].length : 0;
    function isW(r, c) { return r >= 0 && c >= 0 && r < R && c < C && p.grid[r][c] !== '#'; }
    var pos = {}; Object.keys(p.nums || {}).forEach(function (k) { var a = k.split(','); if (isW(+a[0], +a[1])) pos[p.nums[k]] = [+a[0], +a[1]]; });
    var starts = { A: {}, D: {} };
    (p.clues || []).forEach(function (cl) { var st = pos[cl.n]; if (st) starts[cl.d][key(st[0], st[1])] = true; });
    var entries = {}, cellA = {}, cellD = {}, order = { A: [], D: [] }, problems = [];
    (p.clues || []).slice().sort(function (a, b) { return a.n - b.n; }).forEach(function (cl) {
      var id = cl.d + cl.n;
      if (entries[id]) { problems.push(dirName(cl.d) + ' ' + cl.n + ': \u0c30\u0c46\u0c02\u0c21\u0c41\u0c38\u0c3e\u0c30\u0c4d\u0c32\u0c41 \u0c09\u0c02\u0c26\u0c3f'); return; }
      var st = pos[cl.n];
      if (!st) { problems.push(dirName(cl.d) + ' ' + cl.n + ': \u0c17\u0c21\u0c3f\u0c32\u0c4b \u0c08 \u0c38\u0c02\u0c16\u0c4d\u0c2f \u0c32\u0c47\u0c26\u0c41'); return; }
      var dr = cl.d === 'D' ? 1 : 0, dc = cl.d === 'A' ? 1 : 0, cells = [], r = st[0], c = st[1];
      var L = +cl.len || 0;
      while (isW(r, c)) {
        if (cells.length && !L && starts[cl.d][key(r, c)]) break;
        cells.push([r, c]); r += dr; c += dc;
        if (L && cells.length >= L) break;
      }
      if (L && cells.length < L) problems.push(dirName(cl.d) + ' ' + cl.n + ': \u0c2a\u0c4a\u0c21\u0c35\u0c41 ' + L + ', \u0c15\u0c3e\u0c28\u0c40 \u0c17\u0c21\u0c3f\u0c32\u0c4b ' + cells.length + ' \u0c17\u0c21\u0c41\u0c32\u0c47 \u0c09\u0c28\u0c4d\u0c28\u0c3e\u0c2f\u0c3f');
      if (!cells.length) return;
      entries[id] = { id: id, d: cl.d, n: cl.n, cells: cells, text: cl.text || '' };
      order[cl.d].push(id);
      cells.forEach(function (x) { var k = key(x[0], x[1]); if (cl.d === 'A') { if (!cellA[k]) cellA[k] = id; } else if (!cellD[k]) cellD[k] = id; });
    });
    var whites = 0, uncovered = 0, missingAns = 0;
    for (var r = 0; r < R; r++) for (var c = 0; c < C; c++) {
      if (!isW(r, c)) continue; whites++;
      var k = key(r, c);
      if (!cellA[k] && !cellD[k]) uncovered++;
      if (!p.ans || !p.ans[r] || !p.ans[r][c]) missingAns++;
    }
    if (uncovered) problems.push(uncovered + ' \u0c24\u0c46\u0c32\u0c4d\u0c32 \u0c17\u0c21\u0c41\u0c32\u0c41 \u0c0f \u0c06\u0c27\u0c3e\u0c30\u0c02\u0c32\u0c4b\u0c28\u0c42 \u0c32\u0c47\u0c35\u0c41');
    var m = { p: p, R: R, C: C, isW: isW, entries: entries, cellA: cellA, cellD: cellD, order: order, whites: whites, missingAns: missingAns, hasAns: whites > 0 && missingAns === 0, problems: problems };
    m.sol = function (k) { var a = k.split(','); return (p.ans && p.ans[+a[0]] && p.ans[+a[0]][+a[1]]) || ''; };
    if (p.id !== 'draft') MODELS[p.id] = m;
    return m;
  }

  /* ================= saved state (this device) ================= */
  var reduced = false;
  try { reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
  var LS = 'e-padavinodam-v2';
  function freshProgress() { return { letters: {}, r: -1, c: -1, dir: 'A', elapsed: 0, hints: 0, done: false, doneTime: 0, variant: 0, started: false }; }
  var S = { prefs: { theme: 'auto', accent: '#F2A93B', font: 'Anek Telugu', size: 'm', rain: !reduced, hard: false, skip: true, timer: true, keypad: 'phone', fontGrid: 'Ramabhadra', fontClue: 'Anek Telugu', fontHead: 'Ramabhadra', zoom: 2, blk: 'post', order: 'use' }, prog: {}, lastVariant: -1, draft: null, profile: { id: 'p1', name: '', avatar: '\ud83e\udd9a' } };
  var PREF_DEFAULTS = JSON.parse(JSON.stringify(S.prefs));
  try {
    var raw = localStorage.getItem(LS);
    if (raw) { var o = JSON.parse(raw); if (o.prefs) Object.assign(S.prefs, o.prefs); if (o.prog) S.prog = o.prog; if (o.profile && o.profile.id) S.profile = o.profile; if (typeof o.lastVariant === 'number') S.lastVariant = o.lastVariant; if (o.draft) S.draft = o.draft; if (Array.isArray(o.drafts)) S.drafts = o.drafts; }
    else {
      var old = localStorage.getItem('e-padavinodam-v1');
      if (old) { var oo = JSON.parse(old); if (oo.prefs) Object.assign(S.prefs, oo.prefs); if (oo.prog) S.prog.sample = Object.assign(freshProgress(), oo.prog); }
    }
  } catch (e) {}
  ['font', 'fontGrid', 'fontClue', 'fontHead'].forEach(function (k) { if (S.prefs[k] === 'Hind Guntur') S.prefs[k] = k === 'fontHead' ? 'Ramabhadra' : 'Noto Sans Telugu'; });   // Hind Guntur cannot join \u0c33\u0c4d\u0c33
  if (!S.prefs.blkV) { S.prefs.blk = S.prefs.rain === false ? 'plain' : 'nature'; S.prefs.blkV = 1; }
  if (S.prefs.zoomV !== 2) { S.prefs.zoom = 2; S.prefs.zoomV = 2; }
  if ((S.prefs.blkV || 0) < 2) { if (S.prefs.blk !== 'plain') S.prefs.blk = 'post'; S.prefs.blkV = 2; }   // the post's own picture (as on the blog) is now the default
  if (!S.prefs.order) S.prefs.order = 'use';
  if ((S.prefs.kbV || 0) < 1) { S.prefs.keypad = 'phone'; S.prefs.kbV = 1; }
  function save() { try { localStorage.setItem(LS, JSON.stringify(S)); } catch (e) {} }
  // ---- players on this phone: the active one lives in S, the others are kept aside with their own settings and progress ----
  var LSO = LS + '-players';
  var AVATARS = ['\ud83e\udd9a', '\ud83e\udd81', '\ud83d\udc18', '\ud83d\udc2f', '\ud83e\udd9c', '\ud83d\udc1f', '\ud83d\udc31', '\ud83e\udd8b', '\ud83c\udf38', '\ud83c\udf3b', '\ud83e\ude94', '\ud83c\udf19', '\u2b50', '\ud83d\udcda'];
  function others() { try { var a = JSON.parse(localStorage.getItem(LSO) || '[]'); return Array.isArray(a) ? a : []; } catch (e) { return []; } }
  function saveOthers(a) { try { localStorage.setItem(LSO, JSON.stringify(a)); } catch (e) {} }
  function snapshot() { return { prefs: S.prefs, prog: S.prog, lastVariant: S.lastVariant, profile: S.profile }; }
  function loadPlayer(o) {
    S.prefs = Object.assign(JSON.parse(JSON.stringify(PREF_DEFAULTS)), o.prefs || {}); S.prefs.zoomV = 2; S.prefs.blkV = 2;
    if ((S.prefs.kbV || 0) < 1) { S.prefs.keypad = 'phone'; S.prefs.kbV = 1; }
    S.prog = o.prog || {}; S.lastVariant = typeof o.lastVariant === 'number' ? o.lastVariant : -1; S.profile = o.profile;
    CUR = null; MODELS = {}; save(); applyPrefs();
  }
  function switchPlayer(id) {
    var list = others(), i = list.findIndex(function (o) { return o.profile && o.profile.id === id; }); if (i < 0) return;
    var target = list.splice(i, 1)[0]; list.push(snapshot()); saveOthers(list); loadPlayer(target);
    toast((S.profile.name || '\u0c15\u0c4a\u0c24\u0c4d\u0c24 \u0c06\u0c1f\u0c17\u0c3e\u0c21\u0c41') + ' \u0c2a\u0c4d\u0c30\u0c4a\u0c2b\u0c48\u0c32\u0c4d\u200c\u0c15\u0c41 \u0c2e\u0c3e\u0c30\u0c3e\u0c02.'); render();
  }
  function addPlayer(name) {
    var list = others(); list.push(snapshot()); saveOthers(list);
    var used = list.map(function (o) { return o.profile && o.profile.avatar; }), av = AVATARS.filter(function (a) { return used.indexOf(a) < 0; })[0] || AVATARS[list.length % AVATARS.length];
    loadPlayer({ prefs: {}, prog: {}, profile: { id: 'p' + Date.now().toString(36), name: name, avatar: av } });
    toast((name || '\u0c15\u0c4a\u0c24\u0c4d\u0c24 \u0c06\u0c1f\u0c17\u0c3e\u0c21\u0c41') + ' \u0c2a\u0c4d\u0c30\u0c4a\u0c2b\u0c48\u0c32\u0c4d \u0c24\u0c2f\u0c3e\u0c30\u0c48\u0c02\u0c26\u0c3f.'); render();
  }
  function dropPlayer(id) { saveOthers(others().filter(function (o) { return !o.profile || o.profile.id !== id; })); }
  function playerStats(st) {
    var out = { done: 0, best: 0, total: 0, hints: 0, started: 0 }, prog = (st || S).prog || {};
    Object.keys(prog).forEach(function (id) {
      if (id === 'draft') return; var P = prog[id]; if (!P) return;
      if (P.started) out.started++;
      if (P.done) { out.done++; out.total += P.doneTime || 0; out.hints += P.hints || 0; if (P.doneTime && (!out.best || P.doneTime < out.best)) out.best = P.doneTime; }
    });
    out.avg = out.done ? out.total / out.done : 0; return out;
  }
  function greeting() { var h = new Date().getHours(); return h < 12 ? '\u0c36\u0c41\u0c2d\u0c4b\u0c26\u0c2f\u0c02' : h < 17 ? '\u0c28\u0c2e\u0c38\u0c4d\u0c15\u0c3e\u0c30\u0c02' : '\u0c36\u0c41\u0c2d \u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02'; }
  function prog(id) { if (!S.prog[id]) S.prog[id] = freshProgress(); return S.prog[id]; }
  var D = S.draft;
  var U = { panel: 'keys', tab: 'A', cons: null, conj: null, shown: {}, confirm: '', showVariant: null, query: '', busy: '', status: null, imports: null, importSel: {}, emode: 'black', er: 0, ec: 0, edir: 'A', etab: 'A', srcUrls: [], ctl: null };

  // Telugu fonts from Google Fonts: name, size factor (evens out how big each one draws), heaviest weight used, where it suits (g grid, c clues, h headings), feel
  var FONTLIST = [
    ['Ramabhadra', 1.30, 400, 'gch', '\u0c2e\u0c40 \u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d \u0c17\u0c21\u0c41\u0c32 \u0c2b\u0c3e\u0c02\u0c1f\u0c4d \u00b7 \u0c2c\u0c4a\u0c26\u0c4d\u0c26\u0c41'], ['Anek Telugu', 0.94, 600, 'gch', '\u0c2e\u0c40 \u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d \u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32 \u0c2b\u0c3e\u0c02\u0c1f\u0c4d \u00b7 \u0c06\u0c27\u0c41\u0c28\u0c3f\u0c15\u0c02'],
    ['Mandali', 1.05, 400, 'gch', '\u0c17\u0c41\u0c02\u0c21\u0c4d\u0c30\u0c28\u0c3f, \u0c24\u0c47\u0c32\u0c3f\u0c15'], ['NTR', 1.01, 400, 'gch', '\u0c2a\u0c24\u0c4d\u0c30\u0c3f\u0c15 \u0c36\u0c40\u0c30\u0c4d\u0c37\u0c3f\u0c15\u0c32 \u0c36\u0c48\u0c32\u0c3f'],
    ['Baloo Tammudu 2', 0.93, 600, 'gch', '\u0c17\u0c41\u0c02\u0c21\u0c4d\u0c30\u0c28\u0c3f, \u0c2c\u0c4a\u0c26\u0c4d\u0c26\u0c41'], ['Gurajada', 1.28, 400, 'gch', '\u0c38\u0c4a\u0c17\u0c38\u0c48\u0c28 \u0c2c\u0c4a\u0c26\u0c4d\u0c26\u0c41'], ['Ponnala', 1.05, 400, 'gch', '\u0c2e\u0c43\u0c26\u0c41\u0c35\u0c48\u0c28 \u0c15\u0c32\u0c02 \u0c30\u0c3e\u0c24'],
    ['Tenali Ramakrishna', 1.15, 400, 'gch', '\u0c15\u0c32\u0c02 \u0c30\u0c3e\u0c24'], ['Peddana', 1.15, 400, 'gch', '\u0c38\u0c28\u0c4d\u0c28\u0c28\u0c3f \u0c15\u0c32\u0c02 \u0c30\u0c3e\u0c24'], ['Suravaram', 1.16, 400, 'gch', '\u0c2a\u0c41\u0c38\u0c4d\u0c24\u0c15 \u0c05\u0c1a\u0c4d\u0c1a\u0c41'],
    ['Sree Krushnadevaraya', 1.16, 400, 'gch', '\u0c38\u0c02\u0c2a\u0c4d\u0c30\u0c26\u0c3e\u0c2f \u0c05\u0c1a\u0c4d\u0c1a\u0c41'], ['Ramaraja', 1.13, 400, 'gch', '\u0c2a\u0c3e\u0c24 \u0c05\u0c1a\u0c4d\u0c1a\u0c41'], ['Suranna', 1.16, 400, 'gch', '\u0c38\u0c28\u0c4d\u0c28\u0c28\u0c3f \u0c2a\u0c3e\u0c24 \u0c05\u0c1a\u0c4d\u0c1a\u0c41'],
    ['Tiro Telugu', 1.04, 400, 'gch', '\u0c2e\u0c41\u0c26\u0c4d\u0c30\u0c23 \u0c36\u0c48\u0c32\u0c3f'], ['Noto Serif Telugu', 1.04, 600, 'gch', '\u0c38\u0c46\u0c30\u0c3f\u0c2b\u0c4d \u0c05\u0c1a\u0c4d\u0c1a\u0c41'], ['Noto Sans Telugu', 1.04, 600, 'gch', '\u0c38\u0c3e\u0c27\u0c3e\u0c30\u0c23'],
    ['Mallanna', 1.24, 400, 'gch', '\u0c38\u0c30\u0c33\u0c02'], ['Timmana', 1.13, 400, 'gh', '\u0c05\u0c32\u0c02\u0c15\u0c3e\u0c30 \u0c2c\u0c4a\u0c26\u0c4d\u0c26\u0c41'], ['Dhurjati', 1.30, 400, 'gh', '\u0c2c\u0c32\u0c2e\u0c48\u0c28 \u0c36\u0c40\u0c30\u0c4d\u0c37\u0c3f\u0c15'],
    ['Gidugu', 1.47, 400, 'gh', '\u0c1a\u0c47\u0c24\u0c3f\u0c30\u0c3e\u0c24'], ['Ravi Prakash', 1.26, 400, 'gh', '\u0c38\u0c28\u0c4d\u0c28\u0c28\u0c3f, \u0c2a\u0c4a\u0c21\u0c35\u0c41'], ['Lakki Reddy', 0.99, 400, 'gh', '\u0c38\u0c30\u0c26\u0c3e'],
    ['Akaya Telivigala', 1.05, 400, 'h', '\u0c05\u0c32\u0c02\u0c15\u0c3e\u0c30\u0c02'], ['Sirivennela', 1.50, 400, 'h', '\u0c38\u0c28\u0c4d\u0c28\u0c28\u0c3f \u0c1a\u0c47\u0c24\u0c3f\u0c30\u0c3e\u0c24']
  ];
  var FONT = {}; FONTLIST.forEach(function (f) { FONT[f[0]] = { n: f[0], s: f[1], w: f[2], k: f[3], feel: f[4] }; });
  var FONTSETS = [
    ['blog', '\u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d \u0c36\u0c48\u0c32\u0c3f', 'Ramabhadra', 'Anek Telugu', 'Ramabhadra'], ['paper', '\u0c2a\u0c24\u0c4d\u0c30\u0c3f\u0c15', 'NTR', 'Suravaram', 'NTR'],
    ['classic', '\u0c38\u0c02\u0c2a\u0c4d\u0c30\u0c26\u0c3e\u0c2f\u0c02', 'Sree Krushnadevaraya', 'Tiro Telugu', 'Peddana'], ['round', '\u0c17\u0c41\u0c02\u0c21\u0c4d\u0c30\u0c28\u0c3f', 'Baloo Tammudu 2', 'Mandali', 'Lakki Reddy'],
    ['pen', '\u0c15\u0c32\u0c02 \u0c30\u0c3e\u0c24', 'Gurajada', 'Ponnala', 'Tenali Ramakrishna'], ['plain', '\u0c38\u0c3e\u0c26\u0c3e', 'Noto Sans Telugu', 'Noto Sans Telugu', 'Ramabhadra']
  ];
  var FONT_KINDS = { g: ['fontGrid', '\u0c17\u0c21\u0c3f \u0c05\u0c15\u0c4d\u0c37\u0c30\u0c3e\u0c32\u0c41', '\u0c15 \u0c2e \u0c32\u0c02'], c: ['fontClue', '\u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32\u0c41', '\u0c24\u0c3e\u0c2e\u0c30 \u0c2a\u0c41\u0c35\u0c4d\u0c35\u0c41 (3)'], h: ['fontHead', '\u0c36\u0c40\u0c30\u0c4d\u0c37\u0c3f\u0c15\u0c32\u0c41', '\u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02'] };
  var PREVIEW_TXT = (function () { var t = '\u0c15\u0c2e\u0c32\u0c02\u0c24\u0c3e\u0c2e\u0c30\u0c2a\u0c41\u0c35\u0c4d\u0c35\u0c41(3)\u0c2a\u0c26\u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02'; FONTSETS.forEach(function (f) { t += f[1]; }); return Array.from(new Set(Array.from(t.replace(/\s/g, '')))).join(''); })();
  var STATIC_FONTS = { 'Ramabhadra': 1, 'Anek Telugu': 1 };
  var fontLoaded = {}, fontPreviewed = {};
  function fontStack(n) { return "'" + n + "','Anek Telugu','Noto Sans Telugu',sans-serif"; }
  function fontURL(n) { var f = FONT[n]; return 'https://fonts.googleapis.com/css2?family=' + n.replace(/ /g, '+') + (n === 'Anek Telugu' ? ':wght@400;500;600;700' : f && f.w > 400 ? ':wght@400;600' : ''); }
  function loadFont(n) {
    if (!FONT[n] || STATIC_FONTS[n] || fontLoaded[n]) return; fontLoaded[n] = true;
    var l = document.createElement('link'); l.rel = 'stylesheet'; l.href = fontURL(n) + '&display=swap'; document.head.appendChild(l);
  }
  // small preview files (only the letters the settings page shows) under their own names, so they never mix with a full font
  function previewFonts(names) {
    names = names.filter(function (n) { return FONT[n] && !fontPreviewed[n]; }); if (!names.length) return;
    names.forEach(function (n) { fontPreviewed[n] = true; });
    var url = 'https://fonts.googleapis.com/css2?' + names.map(function (n) { return 'family=' + n.replace(/ /g, '+'); }).join('&') + '&text=' + encodeURIComponent(PREVIEW_TXT) + '&display=swap';
    fetch(url).then(function (r) { if (!r.ok) throw new Error(r.status); return r.text(); }).then(function (css) {
      var st = document.createElement('style'); st.textContent = css.replace(/font-family: '([^']+)'/g, "font-family: 'P-$1'"); document.head.appendChild(st);
    }).catch(function () { names.forEach(loadFont); });
  }
  function previewStack(n) { return "'P-" + n + "','" + n + "','Anek Telugu',sans-serif"; }
  var SIZES = { s: .84, m: 1, l: 1.22 };
  function applyPrefs() {
    var p = S.prefs;
    if (p.theme === 'auto') root.removeAttribute('data-app-theme'); else root.setAttribute('data-app-theme', p.theme);
    root.style.setProperty('--accent', p.accent);
    var pal = { '#6FA27A': 'tulsi', '#D9644A': 'kumkum', '#A48BD6': 'oodha', '#5DA9E9': 'neelam' }[p.accent];
    if (pal) root.setAttribute('data-app-color', pal); else root.removeAttribute('data-app-color');
    var fg = FONT[p.fontGrid] || FONT.Ramabhadra, fc = FONT[p.fontClue] || FONT['Anek Telugu'], fh = FONT[p.fontHead] || FONT.Ramabhadra;
    [fg, fc, fh].forEach(function (f) { loadFont(f.n); });
    root.style.setProperty('--font-grid', fontStack(fg.n)); root.style.setProperty('--grid-scale', String(fg.s)); root.style.setProperty('--grid-wt', fg.w > 400 ? '600' : '400');
    root.style.setProperty('--font-clue', fontStack(fc.n)); root.style.setProperty('--clue-scale', String(Math.min(1.25, fc.s))); root.style.setProperty('--clue-wt', fc.w > 400 ? '500' : '400');
    root.style.setProperty('--font-head', fontStack(fh.n)); root.style.setProperty('--font-display', fontStack(fh.n)); root.style.setProperty('--head-scale', String(Math.min(1.3, fh.s)));
    root.style.setProperty('--size-mult', String(SIZES[p.size] || 1));
    document.body.classList.toggle('no-rain', p.blk === 'plain');
  }

  /* ================= helpers ================= */
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
  function fmt(sec) { sec = Math.max(0, sec | 0); var h = Math.floor(sec / 3600), m = Math.floor(sec / 60) % 60, s = sec % 60; return (h ? h + ':' : '') + String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0'); }
  function dirName(d) { return d === 'A' ? '\u0c05\u0c21\u0c4d\u0c21\u0c02' : '\u0c28\u0c3f\u0c32\u0c41\u0c35\u0c41'; }
  var toastTimer = 0;
  function toast(msg) { toastEl.textContent = msg; toastEl.hidden = false; clearTimeout(toastTimer); toastTimer = setTimeout(function () { toastEl.hidden = true; }, 3200); }
  function cap(name) { try { return (window.claude && window.claude.use) ? window.claude.use(name) : Promise.resolve(null); } catch (e) { return Promise.resolve(null); } }

  /* ================= English \u2192 Telugu (phonetic typing) =================
     kamalam \u2192 \u0c15\u0c2e\u0c32\u0c02, sankranti \u2192 \u0c38\u0c02\u0c15\u0c4d\u0c30\u0c3e\u0c02\u0c24\u0c3f, amma \u2192 \u0c05\u0c2e\u0c4d\u0c2e, telugu \u2192 \u0c24\u0c46\u0c32\u0c41\u0c17\u0c41.
     Capitals pick the harder sounds: T \u0c1f, D \u0c21, N \u0c23, L \u0c33, Sh \u0c37, E \u0c0f, O \u0c13; aa/A \u0c06, ee/ii/I \u0c08, oo/uu/U \u0c0a.
     Ambiguous lowercase letters also come back as alternatives to tap. */
  var TL = (function () {
    var VOW = [['aa', '\u0c06', '\u0c3e'], ['ai', '\u0c10', '\u0c48'], ['au', '\u0c14', '\u0c4c'], ['ou', '\u0c14', '\u0c4c'], ['ae', '\u0c0f', '\u0c47'], ['ee', '\u0c08', '\u0c40'], ['ii', '\u0c08', '\u0c40'],
      ['oo', '\u0c0a', '\u0c42'], ['uu', '\u0c0a', '\u0c42'], ['oa', '\u0c13', '\u0c4b'], ['Ru', '\u0c0b', '\u0c43'], ['A', '\u0c06', '\u0c3e'], ['I', '\u0c08', '\u0c40'], ['U', '\u0c0a', '\u0c42'],
      ['E', '\u0c0f', '\u0c47'], ['O', '\u0c13', '\u0c4b'], ['a', '\u0c05', ''], ['i', '\u0c07', '\u0c3f'], ['u', '\u0c09', '\u0c41'], ['e', '\u0c0e', '\u0c46'], ['o', '\u0c12', '\u0c4a']];
    var CONS = [['ksh', '\u0c15\u0c4d\u0c37'], ['chh', '\u0c1b'], ['Ch', '\u0c1b'], ['jn', '\u0c1c\u0c4d\u0c1e'], ['kh', '\u0c16'], ['gh', '\u0c18'], ['ch', '\u0c1a'], ['jh', '\u0c1d'], ['Th', '\u0c20'], ['th', '\u0c25'], ['Dh', '\u0c22'], ['dh', '\u0c27'],
      ['ph', '\u0c2b'], ['bh', '\u0c2d'], ['Sh', '\u0c37'], ['SH', '\u0c37'], ['sh', '\u0c36'], ['k', '\u0c15'], ['g', '\u0c17'], ['c', '\u0c1a'], ['j', '\u0c1c'], ['z', '\u0c1c'], ['T', '\u0c1f'], ['t', '\u0c24'], ['D', '\u0c21'], ['d', '\u0c26'],
      ['N', '\u0c23'], ['n', '\u0c28'], ['p', '\u0c2a'], ['f', '\u0c2b'], ['b', '\u0c2c'], ['m', '\u0c2e'], ['y', '\u0c2f'], ['r', '\u0c30'], ['l', '\u0c32'], ['L', '\u0c33'], ['v', '\u0c35'], ['w', '\u0c35'], ['S', '\u0c36'], ['s', '\u0c38'],
      ['h', '\u0c39'], ['x', '\u0c15\u0c4d\u0c37'], ['q', '\u0c15'], ['R', '\u0c30'], ['K', '\u0c15'], ['G', '\u0c17'], ['J', '\u0c1c'], ['P', '\u0c2a'], ['B', '\u0c2c'], ['V', '\u0c35'], ['W', '\u0c35'], ['Y', '\u0c2f'], ['Z', '\u0c1c'],
      ['F', '\u0c2b'], ['C', '\u0c1a'], ['X', '\u0c15\u0c4d\u0c37'], ['Q', '\u0c15']];
    var CALT = { '\u0c24': ['\u0c1f'], '\u0c1f': ['\u0c24'], '\u0c26': ['\u0c21'], '\u0c21': ['\u0c26'], '\u0c25': ['\u0c20'], '\u0c20': ['\u0c25'], '\u0c27': ['\u0c22'], '\u0c22': ['\u0c27'], '\u0c28': ['\u0c23'], '\u0c23': ['\u0c28'], '\u0c32': ['\u0c33'], '\u0c33': ['\u0c32'], '\u0c38': ['\u0c36', '\u0c37'], '\u0c36': ['\u0c37', '\u0c38'], '\u0c37': ['\u0c36', '\u0c38'] };
    var VALT = { '\u0c0e': ['\u0c0f', '\u0c47'], '\u0c0f': ['\u0c0e', '\u0c46'], '\u0c12': ['\u0c13', '\u0c4b'], '\u0c13': ['\u0c12', '\u0c4a'] };
    var SONORANT = 'mnyrlvw';
    function tokenize(w) {
      if (w.length > 1 && /^[A-Z][a-z]/.test(w)) w = w[0].toLowerCase() + w.slice(1);   // phone auto-capitalisation
      var out = [], i = 0;
      while (i < w.length) {
        var prev = out[out.length - 1], hit = null, k;
        if ((w[i] === 'M' || w[i] === 'H') && prev && prev.t === 'V') { out.push({ t: w[i] }); i++; continue; }
        for (k = 0; k < VOW.length && !hit; k++) if (w.substr(i, VOW[k][0].length) === VOW[k][0]) hit = { t: 'V', src: VOW[k][0], ind: VOW[k][1], sign: VOW[k][2] };
        for (k = 0; k < CONS.length && !hit; k++) if (w.substr(i, CONS[k][0].length) === CONS[k][0]) hit = { t: 'C', src: CONS[k][0], val: CONS[k][1] };
        if (!hit) { i++; continue; }
        out.push(hit); i += hit.src.length;
      }
      // m/n after a vowel: \u0c02 before most consonants and at the end (m), a joined letter before m n y r l v
      for (var j = 0; j < out.length; j++) {
        var t = out[j], p = out[j - 1], nx = out[j + 1];
        if (t.t !== 'C' || (t.src !== 'm' && t.src !== 'n') || !p || p.t !== 'V') continue;
        if (!nx) { if (t.src === 'm') out[j] = { t: 'M' }; }
        else if (nx.t === 'C' && SONORANT.indexOf(nx.src[0].toLowerCase()) < 0) out[j] = { t: 'M' };
      }
      return out;
    }
    function build(toks) {
      var aks = [], i = 0;
      while (i < toks.length) {
        var t = toks[i];
        if (t.t === 'C') {
          var cl = []; while (i < toks.length && toks[i].t === 'C') { cl.push(toks[i].val); i++; }
          var a = cl.join('\u0c4d');
          if (i < toks.length && toks[i].t === 'V') { a += toks[i].sign; i++; } else a += '\u0c4d';
          aks.push(a);
        } else if (t.t === 'V') { aks.push(t.ind); i++; }
        else { var mk = t.t === 'M' ? '\u0c02' : '\u0c03'; if (aks.length) aks[aks.length - 1] += mk; else aks.push(mk); i++; }
      }
      return aks;
    }
    function word(w) {
      var toks = tokenize(w), first = build(toks), seen = {}, cands = [];
      function add(a) { var s = a.join(''); if (s && !seen[s]) { seen[s] = true; cands.push(a); } }
      add(first);
      for (var j = 0; j < toks.length && cands.length < 6; j++) {
        var t = toks[j], alts = [];
        if (t.t === 'C' && CALT[t.val]) alts = CALT[t.val].map(function (v) { return Object.assign({}, t, { val: v }); });
        if (t.t === 'V' && VALT[t.ind]) alts = [Object.assign({}, t, { ind: VALT[t.ind][0], sign: VALT[t.ind][1] })];
        alts.forEach(function (alt) { var c = toks.slice(); c[j] = alt; add(build(c)); });
      }
      return cands;
    }
    // Any mix of English and Telugu \u2192 candidate list; each candidate is a list of aksharas (one per crossword square)
    function convert(text) {
      var parts = String(text || '').normalize('NFC').match(/[A-Za-z]+|[^A-Za-z]+/g) || [], cands = [[]];
      parts.forEach(function (seg) {
        if (/^[A-Za-z]+$/.test(seg)) {
          var opts = word(seg), next = [];
          cands.forEach(function (base, bi) { opts.forEach(function (o, oi) { if (bi === 0 || oi === 0) next.push(base.concat(o)); }); });
          cands = next.slice(0, 6);
        } else {
          var tel = (seg.match(AKSHARA) || []).filter(function (g) { return /[\u0c00-\u0c7f]/.test(g); });
          cands = cands.map(function (b) { return b.concat(tel); });
        }
      });
      return cands.filter(function (c) { return c.length; });
    }
    return { convert: convert };
  })();


  var I = {
    back: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6"></path></svg>',
    ext: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 4h6v6"></path><path d="M20 4 11 13"></path><path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"></path></svg>',
    next: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 6 6 6-6 6"></path></svg>',
    prev: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6"></path></svg>',
    arrow: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>',
    check: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="m8 12 3 3 5-6"></path></svg>',
    tick: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 5 5 9-10"></path></svg>',
    clock: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></svg>',
    kb: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><rect x="2" y="6" width="20" height="12" rx="2"></rect><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M7 14h10"></path></svg>',
    list: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01"></path></svg>',
    swap: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 4v16M7 20l-3-3M7 20l3-3M17 20V4M17 4l-3 3M17 4l3 3"></path></svg>',
    del: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 5H9l-6 7 6 7h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"></path><path d="m12 9 5 6M17 9l-5 6"></path></svg>',
    sliders: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M4 6h9M17 6h3M4 12h3M11 12h9M4 18h11M19 18h1"></path><circle cx="15" cy="6" r="2"></circle><circle cx="9" cy="12" r="2"></circle><circle cx="17" cy="18" r="2"></circle></svg>',
    lock: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4.5" y="10.5" width="15" height="10" rx="2.5"></rect><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"></path><circle cx="12" cy="15.5" r="1.4"></circle></svg>',
    unlock: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4.5" y="10.5" width="15" height="10" rx="2.5"></rect><path d="M8 10.5V7.5a4 4 0 0 1 7.6-1.7"></path><circle cx="12" cy="15.5" r="1.4"></circle></svg>',
    biglock: '<svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4.5" y="10.5" width="15" height="10" rx="2.5"></rect><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"></path><circle cx="12" cy="15.5" r="1.4"></circle></svg>',
    out: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"></path></svg>',
    search: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>',
    copy: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"></rect><path d="M5 15V5a1 1 0 0 1 1-1h10"></path></svg>',
    grid: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M9 3v18M15 3v18M3 9h18M3 15h18"></path></svg>',
    save: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 3h11l3 3v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"/><path d="M8 3v5h7V3"/><path d="M8 21v-7h8v7"/></svg>',
    close: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"></path></svg>',
    down: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>',
    zin: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5M11 8v6M8 11h6"></path></svg>',
    zout: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5M8 11h6"></path></svg>',
    pen: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 20h4L19 9l-4-4L4 16z"></path><path d="m13.5 6.5 4 4"></path></svg>'
  };
  var MUGGU = '<svg class="muggu" width="150" height="150" viewBox="0 0 120 120" fill="none" aria-hidden="true"><path d="M60 6 114 60 60 114 6 60Z" stroke="#F2A93B" stroke-width="2"></path><path d="M60 30 90 60 60 90 30 60Z" stroke="#F2A93B" stroke-width="2"></path><circle cx="60" cy="60" r="10" stroke="#F2A93B" stroke-width="2"></circle><g fill="#F2A93B"><circle cx="60" cy="18" r="3"></circle><circle cx="102" cy="60" r="3"></circle><circle cx="60" cy="102" r="3"></circle><circle cx="18" cy="60" r="3"></circle><circle cx="39" cy="39" r="3"></circle><circle cx="81" cy="39" r="3"></circle><circle cx="81" cy="81" r="3"></circle><circle cx="39" cy="81" r="3"></circle></g></svg>';
  function bulb(px) {
    return '<svg width="' + px + '" height="' + px + '" viewBox="0 0 48 60" aria-hidden="true" focusable="false">' +
      '<circle class="b-halo1" cx="24" cy="24" r="23"></circle><circle class="b-halo2" cx="24" cy="24" r="16"></circle>' +
      '<path class="b-ray" d="M6.5 8.5l3.5 3.5M41.5 8.5 38 12M24 1.5v4.5M2.5 24h4M41.5 24h4"></path>' +
      '<path class="b-glass" d="M24 9a14 14 0 0 0-8.2 25.4c1.5 1.1 2.4 2.8 2.4 4.6V42h11.6v-3c0-1.8.9-3.5 2.4-4.6A14 14 0 0 0 24 9z"></path>' +
      '<path class="b-hi" d="M16.5 19.5a8.5 8.5 0 0 1 5-5.5"></path><path class="b-fil" d="M20 40.5v-9l2-3 2 3 2-3 2 3v9"></path>' +
      '<rect class="b-base" x="17.5" y="42" width="13" height="10" rx="2.5"></rect><path class="b-lines" d="M18 45.5h12M18 48.5h12"></path><path class="b-tip" d="M21 52h6l-1 4.5h-4z"></path></svg>';
  }
  var VARIANTS = [
    { key: 'chai', label: '\u0c1a\u0c3e\u0c2f\u0c4d', alt: '\u0c1a\u0c3e\u0c2f\u0c4d \u0c15\u0c2a\u0c4d\u0c2a\u0c41, \u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02 \u0c15\u0c3e\u0c17\u0c3f\u0c24\u0c02' }, { key: 'deepam', label: '\u0c26\u0c40\u0c2a\u0c02', alt: '\u0c2e\u0c41\u0c17\u0c4d\u0c17\u0c41\u0c2a\u0c48 \u0c35\u0c46\u0c32\u0c41\u0c17\u0c41\u0c24\u0c41\u0c28\u0c4d\u0c28 \u0c26\u0c40\u0c2a\u0c02' },
    { key: 'kite', label: '\u0c17\u0c3e\u0c32\u0c3f\u0c2a\u0c1f\u0c02', alt: '\u0c2e\u0c2c\u0c4d\u0c2c\u0c41\u0c32\u0c4d\u0c32\u0c4b \u0c0e\u0c17\u0c41\u0c30\u0c41\u0c24\u0c41\u0c28\u0c4d\u0c28 \u0c17\u0c3e\u0c32\u0c3f\u0c2a\u0c1f\u0c02' }, { key: 'medal', label: '\u0c2a\u0c24\u0c15\u0c02', alt: '\u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02 \u0c17\u0c21\u0c3f\u0c2a\u0c48 \u0c2c\u0c02\u0c17\u0c3e\u0c30\u0c41 \u0c2a\u0c24\u0c15\u0c02' }];
  function congrats(i) {
    var v = VARIANTS[i] || VARIANTS[0];
    var bg = '<circle class="f-halo" cx="120" cy="110" r="104"></circle><circle class="s-ring" cx="120" cy="110" r="104"></circle>', body = '';
    if (v.key === 'chai') body = '<g class="stars"><circle cx="44" cy="56" r="2.5"></circle><circle cx="196" cy="48" r="2"></circle><circle cx="212" cy="112" r="2.5"></circle><circle cx="160" cy="22" r="2"></circle><circle cx="66" cy="30" r="1.8"></circle></g><g transform="rotate(-10 52 120)"><rect class="f-cream s-ink" stroke-width="3" x="24" y="86" width="56" height="66" rx="5"></rect><path class="s-ink nf" stroke-width="1.5" opacity=".5" d="M38 86v66M52 86v66M66 86v66M24 102h56M24 118h56M24 134h56"></path><rect class="f-ink" x="38" y="102" width="14" height="16"></rect><rect class="f-ink" x="52" y="134" width="14" height="18"></rect></g><path class="s-steam nf" stroke-width="4" stroke-linecap="round" d="M108 96c-8-10 8-16 0-26M124 90c-8-10 8-16 0-26M140 96c-8-10 8-16 0-26"></path><ellipse class="f-cream s-ink" stroke-width="3" cx="124" cy="176" rx="62" ry="11"></ellipse><path class="s-ink nf" stroke-width="10" stroke-linecap="round" d="M164 120c20-3 25 24 2 31"></path><path class="nf" style="stroke:var(--i-maroon)" stroke-width="4" stroke-linecap="round" d="M164 120c20-3 25 24 2 31"></path><path class="f-maroon s-ink" stroke-width="3" stroke-linejoin="round" d="M82 108h84v20c0 26-19 42-42 42s-42-16-42-42z"></path><ellipse class="f-chai s-ink" stroke-width="3" cx="124" cy="108" rx="42" ry="8"></ellipse><g class="f-gold"><circle cx="100" cy="138" r="3.5"></circle><circle cx="112" cy="142" r="3.5"></circle><circle cx="124" cy="143" r="3.5"></circle><circle cx="136" cy="142" r="3.5"></circle><circle cx="148" cy="138" r="3.5"></circle></g><ellipse class="f-leaf s-ink" stroke-width="2" cx="190" cy="172" rx="10" ry="5" transform="rotate(-30 190 172)"></ellipse><circle class="f-gold s-ink" stroke-width="2.5" cx="202" cy="156" r="13"></circle><circle class="f-clay" cx="202" cy="156" r="6.5"></circle>';
    if (v.key === 'deepam') body = '<g class="stars"><circle cx="40" cy="70" r="2.5"></circle><circle cx="200" cy="44" r="2"></circle><circle cx="214" cy="104" r="2"></circle><circle cx="150" cy="20" r="2.2"></circle><circle cx="80" cy="26" r="1.8"></circle></g><circle class="f-glow" cx="120" cy="100" r="46"></circle><path class="nf s-gold" stroke-width="3" stroke-linejoin="round" d="M120 140 200 172 120 204 40 172Z"></path><path class="nf s-clay" stroke-width="2.5" stroke-linejoin="round" d="M120 154 164 172 120 190 76 172Z"></path><g class="f-maroon"><circle cx="120" cy="140" r="4"></circle><circle cx="200" cy="172" r="4"></circle><circle cx="120" cy="204" r="4"></circle><circle cx="40" cy="172" r="4"></circle></g><g class="f-gold"><circle cx="80" cy="156" r="3"></circle><circle cx="160" cy="156" r="3"></circle><circle cx="160" cy="188" r="3"></circle><circle cx="80" cy="188" r="3"></circle></g><path class="f-clay s-ink" stroke-width="3" stroke-linejoin="round" d="M168 146l24-10-8 18z"></path><path class="f-clay s-ink" stroke-width="3" stroke-linejoin="round" d="M68 150c4 22 24 34 52 34s48-12 52-34"></path><ellipse class="f-maroon s-ink" stroke-width="3" cx="120" cy="150" rx="52" ry="9"></ellipse><g class="f-gold"><circle cx="92" cy="166" r="3"></circle><circle cx="106" cy="171" r="3"></circle><circle cx="120" cy="173" r="3"></circle><circle cx="134" cy="171" r="3"></circle><circle cx="148" cy="166" r="3"></circle></g><path class="s-ink" stroke-width="3" stroke-linecap="round" d="M120 146v-26"></path><path class="f-gold s-ink" stroke-width="3" stroke-linejoin="round" d="M120 68c16 20 18 36 0 52c-18-16-16-32 0-52z"></path><path class="f-cream" d="M120 92c7 9 8 17 0 25c-8-8-7-16 0-25z"></path><path class="s-gold" stroke-width="3" stroke-linecap="round" d="M62 72v14M55 79h14M184 66v12M178 72h12M192 116v10M187 121h10"></path>';
    if (v.key === 'kite') body = '<g class="stars"><circle cx="48" cy="60" r="2.5"></circle><circle cx="206" cy="124" r="2"></circle><circle cx="74" cy="28" r="2"></circle><circle cx="214" cy="92" r="1.8"></circle><circle cx="30" cy="110" r="2"></circle></g><path class="f-cream s-ink" stroke-width="2.5" stroke-linejoin="round" d="M150 60a12 12 0 0 1 12-12a16 16 0 0 1 30 2a11 11 0 0 1 3 22h-34a11 11 0 0 1-11-12z"></path><path class="s-ink nf" stroke-width="1.8" opacity=".7" d="M126 84Q64 140 28 214"></path><path class="f-maroon" d="M126 30 174 84 126 148 78 84Z"></path><path class="f-gold" d="M126 30 78 84H126Z"></path><path class="f-gold" d="M126 84H174L126 148Z"></path><path class="nf s-ink" stroke-width="3" stroke-linejoin="round" d="M126 30 174 84 126 148 78 84Z"></path><path class="s-ink" stroke-width="2" d="M126 30V148M78 84H174"></path><circle class="f-cream s-ink" stroke-width="2" cx="126" cy="84" r="6"></circle><path class="s-ink nf" stroke-width="2.5" stroke-linecap="round" d="M126 148c-12 14 12 22 0 36c-10 12 8 18 2 30"></path><path class="f-clay s-ink" stroke-width="1.5" stroke-linejoin="round" d="M112 162l12 6-12 6zM138 162l-12 6 12 6z"></path><path class="f-leaf s-ink" stroke-width="1.5" stroke-linejoin="round" d="M114 190l10 5-10 5zM136 190l-10 5 10 5z"></path><path class="f-cream s-ink" stroke-width="2.5" stroke-linejoin="round" d="M36 170a16 16 0 0 1 16-16a20 20 0 0 1 38 2a14 14 0 0 1 4 28H50a14 14 0 0 1-14-14z"></path>';
    if (v.key === 'medal') body = '<g class="stars"><circle cx="40" cy="80" r="2.5"></circle><circle cx="204" cy="84" r="2"></circle><circle cx="58" cy="168" r="2"></circle><circle cx="190" cy="176" r="2.2"></circle></g><rect class="f-cream s-ink" stroke-width="3" x="58" y="100" width="124" height="96" rx="10"></rect><path class="s-ink nf" stroke-width="1.5" opacity=".5" d="M89 100v96M120 100v96M151 100v96M58 132h124M58 164h124"></path><rect class="f-ink" x="89" y="164" width="31" height="32"></rect><rect class="f-ink" x="151" y="132" width="31" height="32"></rect><text class="f-ink" x="73.5" y="156" text-anchor="middle" font-family="Anek Telugu, sans-serif" font-size="19" font-weight="700">\u0c2a</text><text class="f-ink" x="104.5" y="156" text-anchor="middle" font-family="Anek Telugu, sans-serif" font-size="19" font-weight="700">\u0c26\u0c02</text><path class="f-maroon s-ink" stroke-width="2.5" stroke-linejoin="round" d="M100 14h20l16 50h-20z"></path><path class="f-clay s-ink" stroke-width="2.5" stroke-linejoin="round" d="M140 14h-20l-16 50h20z"></path><circle class="f-gold s-ink" stroke-width="3" cx="120" cy="92" r="30"></circle><circle class="nf s-ink" stroke-width="1.5" opacity=".4" cx="120" cy="92" r="21"></circle><path class="f-cream s-ink" stroke-width="2" stroke-linejoin="round" d="M120 80 122.94 87.95 131.41 88.29 124.76 93.55 127.05 101.71 120 97 112.95 101.71 115.24 93.55 108.59 88.29 117.06 87.95Z"></path><g class="s-ink" stroke-width="1.5"><rect class="f-clay" x="40" y="58" width="11" height="5" rx="2" transform="rotate(30 45 60)"></rect><rect class="f-leaf" x="186" y="54" width="11" height="5" rx="2" transform="rotate(-25 191 56)"></rect><rect class="f-gold" x="196" y="120" width="11" height="5" rx="2" transform="rotate(50 201 122)"></rect><rect class="f-gold" x="28" y="120" width="11" height="5" rx="2" transform="rotate(-40 33 122)"></rect><circle class="f-leaf" cx="66" cy="36" r="4"></circle><circle class="f-clay" cx="176" cy="30" r="4"></circle></g>';
    return '<svg viewBox="0 0 240 220" role="img" aria-label="' + esc(v.alt) + '">' + bg + body + '</svg>';
  }

  /* ================= solving ================= */
  var CUR = null; // {p, m, P}
  function setCurrent(id) {
    var p = findPuzzle(id); if (!p) { CUR = null; return; }
    var m = model(p), P = prog(id);
    if (!m.isW(P.r, P.c)) {
      var first = m.order.A[0] || m.order.D[0];
      if (first) { P.r = m.entries[first].cells[0][0]; P.c = m.entries[first].cells[0][1]; P.dir = m.entries[first].d; }
      else { outer: for (var r = 0; r < m.R; r++) for (var c = 0; c < m.C; c++) if (m.isW(r, c)) { P.r = r; P.c = c; break outer; } }
    }
    if (id !== 'draft' && (!CUR || CUR.id !== id) && (P.started || P.done)) P.used = Date.now();
    CUR = { id: id, p: p, m: m, P: P };
  }
  function cur() {
    var m = CUR.m, P = CUR.P, k = key(P.r, P.c);
    var id = (P.dir === 'A' ? m.cellA[k] : m.cellD[k]) || m.cellA[k] || m.cellD[k];
    return id ? m.entries[id] : { id: 'X', d: P.dir, n: '', cells: [[P.r, P.c]], text: '' };
  }
  function idxIn(e) { var P = CUR.P; for (var i = 0; i < e.cells.length; i++) if (e.cells[i][0] === P.r && e.cells[i][1] === P.c) return i; return 0; }
  function filledCount() { var m = CUR.m, L = CUR.P.letters, n = 0; for (var k in L) { var a = k.split(','); if (L[k] && m.isW(+a[0], +a[1])) n++; } return n; }
  function wrongKeys() { var m = CUR.m, L = CUR.P.letters, out = []; if (!m.hasAns) return out; for (var k in L) if (L[k] && m.sol(k) && L[k] !== m.sol(k)) out.push(k); return out; }
  function pickCell(r, c) {
    var m = CUR.m, P = CUR.P, k = key(r, c);
    if (P.r === r && P.c === c) { var o = P.dir === 'A' ? 'D' : 'A'; if (o === 'A' ? m.cellA[k] : m.cellD[k]) { P.dir = o; U.tab = o; } else toast('\u0c08 \u0c17\u0c21\u0c3f\u0c15\u0c3f ' + dirName(o) + ' \u0c06\u0c27\u0c3e\u0c30\u0c02 \u0c32\u0c47\u0c26\u0c41.'); }
    else { var d = P.dir; if (d === 'A' && !m.cellA[k] && m.cellD[k]) d = 'D'; else if (d === 'D' && !m.cellD[k] && m.cellA[k]) d = 'A'; P.r = r; P.c = c; P.dir = d; U.tab = d; }
    save();
  }
  function goEntry(id) {
    var e = CUR.m.entries[id], L = CUR.P.letters, first = null;
    for (var i = 0; i < e.cells.length; i++) if (!L[key(e.cells[i][0], e.cells[i][1])]) { first = e.cells[i]; break; }
    first = first || e.cells[0]; CUR.P.r = first[0]; CUR.P.c = first[1]; CUR.P.dir = e.d; U.tab = e.d; save();
  }
  function step(d) {
    var all = CUR.m.order.A.concat(CUR.m.order.D); if (!all.length) return;
    var i = all.indexOf(cur().id) + d; if (i < 0) i = all.length - 1; if (i >= all.length) i = 0; goEntry(all[i]);
  }
  // a square holding the right letter is frozen: typing and delete pass over it
  function locked(k) { var m = CUR.m, sol = m.sol(k), L = CUR.P.letters[k]; return !!(m.hasAns && sol && L && L === sol); }
  // all clues by their number on the board (1 \u0c05\u0c21\u0c4d\u0c21\u0c02, 1 \u0c28\u0c3f\u0c32\u0c41\u0c35\u0c41, 2 \u2026): the order the cursor walks after a word is done
  function numOrder() { var m = CUR.m; if (!m.numOrd) m.numOrd = m.order.A.concat(m.order.D).sort(function (a, b) { var x = m.entries[a], y = m.entries[b]; return (+x.n - +y.n) || (x.d === 'A' ? -1 : 1); }); return m.numOrd; }
  function emptyIn(e, from, to) { var L = CUR.P.letters; for (var j = from; j < to; j++) { var c = e.cells[j], k = key(c[0], c[1]); if (!L[k] && !locked(k)) return c; } return null; }
  // after a letter: the next empty square in the same word, then its earlier empty squares; a finished word: the across / down word
  // that already has the largest share of its letters (put there by crossing words), so it is the easiest to complete; when none
  // has any, the next clue by number with empty squares, wrapping to the start
  function advance(e, idx) {
    var P = CUR.P, c = e.id !== 'X' ? (emptyIn(e, idx + 1, e.cells.length) || emptyIn(e, 0, idx)) : null;
    if (!S.prefs.skip && e.id !== 'X') { var nc = nextCell(e, idx); if (nc) c = nc; }
    if (c) { P.r = c[0]; P.c = c[1]; return true; }
    var all = numOrder(), at = all.indexOf(e.id), best = null, bestShare = 0;
    for (var s = 1; s <= all.length; s++) {
      var en = CUR.m.entries[all[(Math.max(at, 0) + s) % all.length]]; if (!en || en.id === e.id || !emptyIn(en, 0, en.cells.length)) continue;
      var have = 0; en.cells.forEach(function (x) { var k = key(x[0], x[1]); if (P.letters[k] || locked(k)) have++; });
      var share = have / en.cells.length; if (share > bestShare + 1e-9) { best = en; bestShare = share; }
    }
    if (best) { var bf = emptyIn(best, 0, best.cells.length); P.r = bf[0]; P.c = bf[1]; P.dir = best.d; U.tab = best.d; return true; }
    for (var s2 = 1; s2 <= all.length; s2++) { var en2 = CUR.m.entries[all[(Math.max(at, 0) + s2) % all.length]], f = en2 && emptyIn(en2, 0, en2.cells.length); if (f) { P.r = f[0]; P.c = f[1]; P.dir = en2.d; U.tab = en2.d; return true; } }
    return false;
  }
  // squares filled by a hint or \u0c06\u0c1f\u0c4b (shown differently in the clue list); typing a letter there clears the mark
  function markHint(k, on) { var P = CUR.P; if (on) { P.hinted = P.hinted || {}; P.hinted[k] = 1; } else if (P.hinted) delete P.hinted[k]; }
  function nextCell(e, idx) { for (var j = idx + 1; j < e.cells.length; j++) { var c = e.cells[j], k = key(c[0], c[1]); if (locked(k)) continue; if (!S.prefs.skip || !CUR.P.letters[k]) return c; } return null; }
  function put(val, quiet, byHint) {
    var P = CUR.P;
    if (P.done) { toast('\u0c08 \u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02 \u0c2a\u0c42\u0c30\u0c4d\u0c24\u0c2f\u0c3f\u0c02\u0c26\u0c3f. \u0c2e\u0c33\u0c4d\u0c33\u0c40 \u0c06\u0c21\u0c3e\u0c32\u0c02\u0c1f\u0c47 \u201c\u0c2e\u0c33\u0c4d\u0c33\u0c40 \u0c06\u0c21\u0c02\u0c21\u0c3f\u201d \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c02\u0c21\u0c3f.'); return; }
    var e = cur(), k = key(P.r, P.c);
    if (locked(k)) {
      var i = idxIn(e), t = null, j;
      for (j = i + 1; j < e.cells.length && !t; j++) if (!locked(key(e.cells[j][0], e.cells[j][1]))) t = e.cells[j];
      for (j = 0; j < i && !t; j++) if (!locked(key(e.cells[j][0], e.cells[j][1]))) t = e.cells[j];
      if (!t) { U.cons = null; U.conj = null; toast('\u0c08 \u0c2a\u0c26\u0c02 \u0c2a\u0c42\u0c30\u0c4d\u0c24\u0c3f\u0c17\u0c3e \u0c38\u0c30\u0c48\u0c28\u0c26\u0c47 \u2014 \u0c2e\u0c30\u0c4b \u0c06\u0c27\u0c3e\u0c30\u0c02 \u0c0e\u0c02\u0c1a\u0c41\u0c15\u0c4b\u0c02\u0c21\u0c3f.'); render(); return; }
      P.r = t[0]; P.c = t[1]; k = key(P.r, P.c);
    }
    P.letters[k] = val.normalize('NFC'); P.started = true; P.used = Date.now(); delete U.shown[k]; markHint(k, byHint);
    if (isWrong(k)) U.stay = k;
    else { U.stay = null; advance(e, idxIn(e)); }
    U.cons = null; U.conj = null; U.follow = true; save();
    if (!quiet) afterInput();
  }
  function isWrong(k) { var m = CUR.m, sol = m.sol(k), L = CUR.P.letters[k]; return !!(m.hasAns && sol && L && L !== sol); }
  function afterInput(soft) {
    if (filledCount() === CUR.m.whites) {
      if (!CUR.m.hasAns) { finish(); return; }
      var w = wrongKeys();
      if (!w.length) { finish(); return; }
      w.forEach(function (k) { U.shown[k] = true; });
      toast('\u0c05\u0c28\u0c4d\u0c28\u0c3f \u0c17\u0c21\u0c41\u0c32\u0c42 \u0c28\u0c3f\u0c02\u0c21\u0c3e\u0c2f\u0c3f \u2014 ' + w.length + ' \u0c17\u0c21\u0c41\u0c32\u0c4d\u0c32\u0c4b \u0c24\u0c2a\u0c4d\u0c2a\u0c41\u0c32\u0c41 \u0c09\u0c28\u0c4d\u0c28\u0c3e\u0c2f\u0c3f.');
    }
    if (soft) refreshPlay(); else render();
  }
  function back(soft) {
    U.follow = true;
    function redraw() { if (soft) refreshPlay(); else render(); }
    if (U.cons || U.conj) { U.cons = null; U.conj = null; render(); return; }
    var P = CUR.P; if (P.done) return;
    var k = key(P.r, P.c);
    if (P.letters[k] && !locked(k)) { delete P.letters[k]; delete U.shown[k]; markHint(k, false); save(); redraw(); return; }
    var e = cur(), i = idxIn(e);
    for (var j = i - 1; j >= 0; j--) { var pc = e.cells[j], pk = key(pc[0], pc[1]); if (!locked(pk)) { delete P.letters[pk]; delete U.shown[pk]; markHint(pk, false); P.r = pc[0]; P.c = pc[1]; save(); break; } }
    redraw();
  }
  function doHint() {
    var P = CUR.P, m = CUR.m; if (P.done) return;
    if (!m.hasAns) { toast('\u0c08 \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d\u200c\u0c15\u0c41 \u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32\u0c41 \u0c07\u0c02\u0c15\u0c3e \u0c1a\u0c47\u0c30\u0c4d\u0c1a\u0c32\u0c47\u0c26\u0c41, \u0c15\u0c3e\u0c2c\u0c1f\u0c4d\u0c1f\u0c3f \u0c38\u0c42\u0c1a\u0c28 \u0c05\u0c02\u0c26\u0c41\u0c2c\u0c3e\u0c1f\u0c41\u0c32\u0c4b \u0c32\u0c47\u0c26\u0c41.'); return; }
    // \u0c38\u0c41\u0c32\u0c2d\u0c02: hints any time from the first square. \u0c15\u0c37\u0c4d\u0c1f\u0c02: the blog's rule, only for the last 10 letters.
    if (S.prefs.hard) {
      var empty = m.whites - filledCount();
      if (empty > 10) { toast('\u0c15\u0c37\u0c4d\u0c1f\u0c02 \u0c2e\u0c4b\u0c21\u0c4d\u200c\u0c32\u0c4b \u0c38\u0c42\u0c1a\u0c28 \u0c1a\u0c3f\u0c35\u0c30\u0c3f 10 \u0c05\u0c15\u0c4d\u0c37\u0c30\u0c3e\u0c32\u0c15\u0c41 \u0c2e\u0c3e\u0c24\u0c4d\u0c30\u0c2e\u0c47. \u0c07\u0c02\u0c15\u0c3e ' + empty + ' \u0c17\u0c21\u0c41\u0c32\u0c41 \u0c16\u0c3e\u0c33\u0c40\u0c17\u0c3e \u0c09\u0c28\u0c4d\u0c28\u0c3e\u0c2f\u0c3f. \u0c38\u0c41\u0c32\u0c2d\u0c02 \u0c0e\u0c02\u0c1a\u0c41\u0c15\u0c41\u0c02\u0c1f\u0c47 \u0c2e\u0c4a\u0c26\u0c1f\u0c3f \u0c28\u0c41\u0c02\u0c1a\u0c47 \u0c38\u0c42\u0c1a\u0c28 \u0c35\u0c3e\u0c21\u0c4a\u0c1a\u0c4d\u0c1a\u0c41.'); return; }
    }
    var k = key(P.r, P.c);
    if (P.letters[k] === m.sol(k)) {
      // the selected square is already right: help with the next empty or wrong square of this word
      var e = cur(), target = null;
      e.cells.forEach(function (x) { var kk = key(x[0], x[1]); if (!target && P.letters[kk] !== m.sol(kk)) target = x; });
      if (!target) { toast('\u0c08 \u0c2a\u0c26\u0c02 \u0c2a\u0c42\u0c30\u0c4d\u0c24\u0c3f\u0c17\u0c3e \u0c38\u0c30\u0c48\u0c28\u0c26\u0c47. \u0c2e\u0c30\u0c4b \u0c2a\u0c26\u0c02 \u0c0e\u0c02\u0c1a\u0c41\u0c15\u0c4b\u0c02\u0c21\u0c3f.'); return; }
      P.r = target[0]; P.c = target[1]; k = key(P.r, P.c);
    }
    P.hints++; put(m.sol(k), false, true);
  }
  // ---- \u0c06\u0c1f\u0c4b: fills only the empty and wrong squares, from the first clue on the board, one letter at a time ----
  var AUTO_SPEED = { slow: [900, 2600], mid: [520, 1700], fast: [260, 900] };
  function autoCan() { return !!CUR && (CUR.m.hasAns || (CUR.id === 'draft' && CUR.m.whites > CUR.m.missingAns)); }
  function autoOn() { return !!(U.auto && U.auto.on && CUR && U.auto.id === CUR.id); }
  function autoList() { var m = CUR.m; return m.order.A.concat(m.order.D); }
  function autoNeed(k) { var s = CUR.m.sol(k); return !!s && CUR.P.letters[k] !== s; }
  // squares that have an answer but belong to no clue (a clue is missing): \u0c06\u0c1f\u0c4b fills them last
  function autoStrays() { var m = CUR.m, out = []; for (var r = 0; r < m.R; r++) for (var c = 0; c < m.C; c++) { var k = key(r, c); if (m.isW(r, c) && !m.cellA[k] && !m.cellD[k] && autoNeed(k)) out.push([r, c]); } return out; }
  function autoLeft() { var m = CUR.m, seen = {}, n = 0; autoList().forEach(function (id) { m.entries[id].cells.forEach(function (x) { var k = key(x[0], x[1]); if (!seen[k]) { seen[k] = 1; if (autoNeed(k)) n++; } }); }); return n + autoStrays().length; }
  // numbers on the board with no clue in either direction
  function cluelessNums() { var p = CUR.p, has = {}, out = []; (p.clues || []).forEach(function (c) { has[c.n] = 1; }); Object.keys(p.nums || {}).forEach(function (k) { var n = p.nums[k]; if (!has[n]) out.push(n); }); return out.sort(function (a, b) { return a - b; }); }
  function autoWordLeft(e) { return e.cells.some(function (x) { return autoNeed(key(x[0], x[1])); }); }
  function autoStart() {
    if (!autoCan()) return;
    autoStop(true);
    var left = autoLeft();
    if (!left) { toast('\u0c05\u0c28\u0c4d\u0c28\u0c3f \u0c17\u0c21\u0c41\u0c32\u0c42 \u0c07\u0c2a\u0c4d\u0c2a\u0c1f\u0c3f\u0c15\u0c47 \u0c38\u0c30\u0c48\u0c28\u0c35\u0c47 \u2014 \u0c06\u0c1f\u0c4b \u0c1a\u0c47\u0c2f\u0c3e\u0c32\u0c4d\u0c38\u0c3f\u0c02\u0c26\u0c3f \u0c0f\u0c2e\u0c40 \u0c32\u0c47\u0c26\u0c41.'); return; }
    // always from the beginning of the board: \u0c05\u0c21\u0c4d\u0c21\u0c02 1 first, then the rest in order
    U.auto = { on: true, paused: false, id: CUR.id, list: autoList(), i: 0, j: -1, speed: (U.auto && U.auto.speed) || 'mid', t: null, shown: 0, words: 0, total: left };
    U.lastKb = U.panel === 'auto' ? U.lastKb : (U.panel !== 'none' ? U.panel : U.lastKb); U.panel = 'auto';
    var ti = document.getElementById('tl-in'); if (ti) ti.blur();
    render(); autoTick();
  }
  function autoStop(silent) {
    if (!U.auto) return; clearTimeout(U.auto.t); var was = U.auto.on; U.auto.on = false;
    if (!silent && was && CUR) { U.panel = 'none'; U.autoHidden = false; render(); }
  }
  function autoTick() {
    var A = U.auto; if (!A || !A.on || A.paused || !CUR || A.id !== CUR.id) return;
    var m = CUR.m, P = CUR.P, sp = AUTO_SPEED[A.speed] || AUTO_SPEED.mid;
    if (A.j < 0) {   // next word that still has an empty or wrong square
      while (A.i < A.list.length && !autoWordLeft(m.entries[A.list[A.i]])) A.i++;
      if (A.i >= A.list.length) {   // all clues done: squares that belong to no clue (missing clue) last
        var st = autoStrays();
        if (!st.length) { autoDone(); return; }
        var sk = key(st[0][0], st[0][1]); P.r = st[0][0]; P.c = st[0][1];
        P.letters[sk] = m.sol(sk); delete U.shown[sk]; markHint(sk, true); P.started = true; P.hints = (P.hints || 0) + 1; P.auto = true; A.shown++; A.strays = (A.strays || 0) + 1;
        U.follow = true; save(); refreshPlay(); A.t = setTimeout(autoTick, sp[1]); return;
      }
      if (!autoLeft()) { autoDone(); return; }
      var e0 = m.entries[A.list[A.i]], first = e0.cells.filter(function (x) { return autoNeed(key(x[0], x[1])); })[0];
      P.dir = e0.d; U.tab = e0.d; P.r = first[0]; P.c = first[1]; A.j = 0; A.words++; U.follow = true; refreshPlay();
      A.t = setTimeout(autoTick, sp[0]); return;
    }
    var e = m.entries[A.list[A.i]];
    while (A.j < e.cells.length && !autoNeed(key(e.cells[A.j][0], e.cells[A.j][1]))) A.j++;   // right squares are left alone
    if (A.j < e.cells.length) {
      var c = e.cells[A.j], k = key(c[0], c[1]);
      P.r = c[0]; P.c = c[1];
      P.letters[k] = m.sol(k); delete U.shown[k]; markHint(k, true); P.started = true; P.hints = (P.hints || 0) + 1; P.auto = true; A.shown++;
      A.j++; U.follow = true; save(); refreshPlay();
      var more = false; for (var j2 = A.j; j2 < e.cells.length; j2++) if (autoNeed(key(e.cells[j2][0], e.cells[j2][1]))) { more = true; break; }
      A.t = setTimeout(autoTick, more ? sp[0] : sp[1]); return;
    }
    A.i++; A.j = -1; autoTick();
  }
  function autoDone() {
    var A = U.auto; A.on = false; if (!autoLeft()) CUR.P.revealed = true; save();
    U.panel = 'none'; U.autoHidden = false; render();
    var cn = A.strays ? cluelessNums() : [];
    if (cn.length) { toast('\u0c06\u0c1f\u0c4b \u0c2a\u0c42\u0c30\u0c4d\u0c24\u0c2f\u0c3f\u0c02\u0c26\u0c3f \u2014 ' + A.shown + ' \u0c17\u0c21\u0c41\u0c32\u0c41 \u0c28\u0c3f\u0c02\u0c2a\u0c3e\u0c02. \u0c06\u0c27\u0c3e\u0c30\u0c02 \u0c32\u0c47\u0c28\u0c3f \u0c38\u0c02\u0c16\u0c4d\u0c2f\u0c32\u0c41: ' + cn.join(', ') + ' \u2014 \u0c35\u0c3e\u0c1f\u0c3f \u0c17\u0c21\u0c41\u0c32\u0c41 (' + A.strays + ') \u0c0f \u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c28\u0c3f\u0c15\u0c40 \u0c1a\u0c46\u0c02\u0c26\u0c35\u0c41, \u0c15\u0c3e\u0c2c\u0c1f\u0c4d\u0c1f\u0c3f \u0c1a\u0c3f\u0c35\u0c30\u0c4d\u0c32\u0c4b \u0c28\u0c3f\u0c02\u0c2a\u0c3e\u0c02. ' + (CUR.id === 'draft' ? '\u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d\u200c\u0c32\u0c4b \u0c06 \u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32\u0c41 \u0c1a\u0c47\u0c30\u0c4d\u0c1a\u0c02\u0c21\u0c3f.' : '\u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d\u200c\u0c32\u0c4b \u0c06 \u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32\u0c41 \u0c32\u0c47\u0c35\u0c41.')); return; }
    if (CUR.id === 'draft' && CUR.m.missingAns) { toast('\u0c06\u0c1f\u0c4b \u0c2a\u0c42\u0c30\u0c4d\u0c24\u0c2f\u0c3f\u0c02\u0c26\u0c3f \u2014 ' + A.shown + ' \u0c17\u0c21\u0c41\u0c32\u0c41 \u0c28\u0c3f\u0c02\u0c2a\u0c3e\u0c02. ' + CUR.m.missingAns + ' \u0c17\u0c21\u0c41\u0c32\u0c15\u0c41 \u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d\u200c\u0c32\u0c4b \u0c1c\u0c35\u0c3e\u0c2c\u0c41 \u0c32\u0c47\u0c26\u0c41 (\u0c16\u0c3e\u0c33\u0c40\u0c17\u0c3e \u0c09\u0c28\u0c4d\u0c28\u0c3e\u0c2f\u0c3f): \u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d\u200c\u0c15\u0c41 \u0c35\u0c46\u0c33\u0c4d\u0c33\u0c3f \u201c\u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32\u0c41\u201d \u0c32\u0c4b \u0c28\u0c3f\u0c02\u0c2a\u0c02\u0c21\u0c3f.'); return; }
    toast(A.shown ? '\u0c06\u0c1f\u0c4b \u0c2a\u0c42\u0c30\u0c4d\u0c24\u0c2f\u0c3f\u0c02\u0c26\u0c3f \u2014 \u0c16\u0c3e\u0c33\u0c40\u0c17\u0c3e \u0c32\u0c47\u0c26\u0c3e \u0c24\u0c2a\u0c4d\u0c2a\u0c41\u0c17\u0c3e \u0c09\u0c28\u0c4d\u0c28 ' + A.shown + ' \u0c17\u0c21\u0c41\u0c32\u0c41 (' + A.words + ' \u0c2a\u0c26\u0c3e\u0c32\u0c4d\u0c32\u0c4b) \u0c28\u0c3f\u0c02\u0c2a\u0c3e\u0c02; \u0c2e\u0c40\u0c30\u0c41 \u0c38\u0c30\u0c3f\u0c17\u0c4d\u0c17\u0c3e \u0c35\u0c47\u0c38\u0c3f\u0c28\u0c35\u0c3f \u0c05\u0c32\u0c3e\u0c17\u0c47 \u0c09\u0c02\u0c1a\u0c3e\u0c02. \u0c2e\u0c40\u0c30\u0c47 \u0c2e\u0c33\u0c4d\u0c33\u0c40 \u0c06\u0c21\u0c3e\u0c32\u0c02\u0c1f\u0c47 \u201c\u0c17\u0c21\u0c3f \u0c16\u0c3e\u0c33\u0c40 \u0c1a\u0c47\u0c38\u0c3f \u0c2e\u0c40\u0c30\u0c47 \u0c06\u0c21\u0c02\u0c21\u0c3f\u201d \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c02\u0c21\u0c3f.' : '\u0c05\u0c28\u0c4d\u0c28\u0c3f \u0c17\u0c21\u0c41\u0c32\u0c42 \u0c38\u0c30\u0c48\u0c28\u0c35\u0c47.');
  }
  function autoPanelHTML() {
    var A = U.auto, e = cur(), m = CUR.m, word = e.cells.map(function (x) { var k = key(x[0], x[1]); return CUR.P.letters[k] === m.sol(k) ? CUR.P.letters[k] : '\u00b7'; }).join(' ');
    var sp = [['slow', '\u0c28\u0c46\u0c2e\u0c4d\u0c2e\u0c26\u0c3f'], ['mid', '\u0c2e\u0c3e\u0c2e\u0c42\u0c32\u0c41'], ['fast', '\u0c35\u0c47\u0c17\u0c02']].map(function (o) { return '<button data-act="auto-speed" data-v="' + o[0] + '" aria-pressed="' + (A.speed === o[0]) + '">' + o[1] + '</button>'; }).join('');
    var left = autoLeft();
    return '<div class="autobox"><div class="autohead"><b>\u0c06\u0c1f\u0c4b</b><span>' + (left ? '\u0c07\u0c02\u0c15\u0c3e ' + left + ' / ' + A.total + ' \u0c17\u0c21\u0c41\u0c32\u0c41' : '\u0c2a\u0c42\u0c30\u0c4d\u0c24\u0c3f') + '</span></div>' +
      '<div class="autoword" aria-live="polite">' + esc(word) + '</div>' +
      '<p class="autonote">\u0c16\u0c3e\u0c33\u0c40, \u0c24\u0c2a\u0c4d\u0c2a\u0c41 \u0c17\u0c21\u0c41\u0c32\u0c41 \u0c2e\u0c3e\u0c24\u0c4d\u0c30\u0c2e\u0c47 \u0c28\u0c3f\u0c02\u0c2a\u0c41\u0c24\u0c41\u0c02\u0c26\u0c3f; \u0c38\u0c30\u0c48\u0c28\u0c35\u0c3f \u0c2e\u0c3e\u0c30\u0c35\u0c41.</p>' +
      '<div class="autobtns"><button class="smallbtn pri" data-act="auto-pause">' + (A.paused ? '\u25b6 \u0c15\u0c4a\u0c28\u0c38\u0c3e\u0c17\u0c3f\u0c02\u0c1a\u0c41' : '\u23f8 \u0c06\u0c2a\u0c3f \u0c1a\u0c42\u0c21\u0c02\u0c21\u0c3f') + '</button><button class="smallbtn" data-act="auto-next">\u0c24\u0c26\u0c41\u0c2a\u0c30\u0c3f \u23ed</button><button class="smallbtn danger" data-act="auto-stop">\u23f9 \u0c2e\u0c41\u0c17\u0c3f\u0c02\u0c1a\u0c41</button></div>' +
      '<div class="seg" role="group" aria-label="\u0c35\u0c47\u0c17\u0c02">' + sp + '</div></div>';
  }
  function doCheck() {
    if (!CUR.m.hasAns) { toast('\u0c08 \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d\u200c\u0c15\u0c41 \u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32\u0c41 \u0c07\u0c02\u0c15\u0c3e \u0c1a\u0c47\u0c30\u0c4d\u0c1a\u0c32\u0c47\u0c26\u0c41.'); return; }
    var w = wrongKeys(); U.shown = {}; w.forEach(function (k) { U.shown[k] = true; });
    toast(w.length ? w.length + ' \u0c17\u0c21\u0c41\u0c32\u0c4d\u0c32\u0c4b \u0c24\u0c2a\u0c4d\u0c2a\u0c41\u0c32\u0c41 \u0c09\u0c28\u0c4d\u0c28\u0c3e\u0c2f\u0c3f \u2014 \u0c2a\u0c38\u0c41\u0c2a\u0c41 \u0c30\u0c02\u0c17\u0c41\u0c32\u0c4b, \u0c0e\u0c30\u0c41\u0c2a\u0c41 \u0c05\u0c02\u0c1a\u0c41\u0c24\u0c4b \u0c1a\u0c42\u0c2a\u0c3f\u0c02\u0c1a\u0c3e\u0c02.' : (filledCount() ? '\u0c07\u0c2a\u0c4d\u0c2a\u0c1f\u0c3f\u0c35\u0c30\u0c15\u0c41 \u0c28\u0c3f\u0c02\u0c2a\u0c3f\u0c28\u0c35\u0c28\u0c4d\u0c28\u0c40 \u0c38\u0c30\u0c48\u0c28\u0c35\u0c47!' : '\u0c07\u0c02\u0c15\u0c3e \u0c0f \u0c17\u0c21\u0c40 \u0c28\u0c3f\u0c02\u0c2a\u0c32\u0c47\u0c26\u0c41.'));
    render();
  }
  function finish() {
    var P = CUR.P; P.done = true; P.doneTime = P.elapsed;
    S.lastVariant = (S.lastVariant + 1) % VARIANTS.length; P.variant = S.lastVariant; U.showVariant = null; save();
    if (CUR.id === 'draft') { toast('\u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d \u0c2a\u0c30\u0c40\u0c15\u0c4d\u0c37 \u0c2a\u0c42\u0c30\u0c4d\u0c24\u0c2f\u0c3f\u0c02\u0c26\u0c3f \u2014 \u0c05\u0c28\u0c4d\u0c28\u0c40 \u0c38\u0c30\u0c3f\u0c17\u0c4d\u0c17\u0c3e \u0c09\u0c28\u0c4d\u0c28\u0c3e\u0c2f\u0c3f.'); render(); return; }
    U.fin = CUR.id; U.panel = 'none'; var ti = document.getElementById('tl-in'); if (ti) ti.blur(); render();
  }

  /* ================= views: reader ================= */
  function statusPill(id) {
    var P = S.prog[id];
    if (P && P.done) return '<span class="pill ok">\u0c2a\u0c42\u0c30\u0c4d\u0c24\u0c2f\u0c3f\u0c02\u0c26\u0c3f</span>';
    if (P && P.started) return '<span class="pill mid">\u0c2e\u0c27\u0c4d\u0c2f\u0c32\u0c4b</span>';
    return '<span class="pill new">\u0c15\u0c4a\u0c24\u0c4d\u0c24\u0c26\u0c3f</span>';
  }
  function miniGrid(p) {
    var m = model(p), P = S.prog[p.id] || {}, L = P.letters || {}, sz = Math.max(5, Math.floor(88 / m.C)), out = '';
    for (var r = 0; r < m.R; r++) for (var c = 0; c < m.C; c++) out += m.isW(r, c) ? '<span' + (L[key(r, c)] ? ' class="on"' : '') + ' style="width:' + sz + 'px;height:' + sz + 'px"></span>' : '<span class="mb" style="width:' + sz + 'px;height:' + sz + 'px"></span>';
    return '<div class="minigrid" aria-hidden="true" style="grid-template-columns:repeat(' + m.C + ',' + sz + 'px);gap:' + (m.C > 9 ? 1 : 2) + 'px">' + out + '</div>';
  }
  function puzzleRow(p) {
    var sub = p.date ? p.date + ' \u00b7 ' + weekday(p.date) : '\u0c05\u0c2d\u0c4d\u0c2f\u0c3e\u0c38\u0c02', P = S.prog[p.id], has = P && (P.started || P.done), ask = U.confirm === 'reset-' + p.id;
    if (has && P.used > 1) sub += ' \u00b7 ' + agoText(P.used);
    return '<div class="rowwrap"><a class="rowlink" href="#play-' + esc(p.id) + '"><span class="tile">' + I.grid + '</span><span class="t"><b>' + esc(p.title) + '</b><small>' + esc(sub) + '</small></span>' + statusPill(p.id) + '</a>' +
      (has ? '<button class="rowreset' + (ask ? ' ask' : '') + '" data-act="reset-post" data-id="' + esc(p.id) + '" aria-label="' + esc((p.date || p.title) + ' \u2014 \u0c2e\u0c4a\u0c26\u0c1f\u0c3f \u0c28\u0c41\u0c02\u0c1a\u0c3f') + '">' + (ask ? '\u0c16\u0c1a\u0c4d\u0c1a\u0c3f\u0c24\u0c2e\u0c3e?' : '\u21ba') + '</button>' : '') + '</div>';
  }
  function agoText(t) { var d = Math.floor((Date.now() - t) / 864e5); return d <= 0 ? '\u0c08\u0c30\u0c4b\u0c1c\u0c41 \u0c06\u0c21\u0c3e\u0c30\u0c41' : d === 1 ? '\u0c28\u0c3f\u0c28\u0c4d\u0c28 \u0c06\u0c21\u0c3e\u0c30\u0c41' : d + ' \u0c30\u0c4b\u0c1c\u0c41\u0c32 \u0c15\u0c4d\u0c30\u0c3f\u0c24\u0c02 \u0c06\u0c21\u0c3e\u0c30\u0c41'; }
  function orderSwitchHTML() { var o = S.prefs.order === 'date' ? 'date' : 'use'; return '<div class="seg small" role="group" aria-label="\u0c15\u0c4d\u0c30\u0c2e\u0c02"><button data-act="order" data-v="use" aria-pressed="' + (o === 'use') + '">\u0c06\u0c21\u0c3f\u0c28 \u0c15\u0c4d\u0c30\u0c2e\u0c02</button><button data-act="order" data-v="date" aria-pressed="' + (o === 'date') + '">\u0c24\u0c47\u0c26\u0c40 \u0c15\u0c4d\u0c30\u0c2e\u0c02</button></div>'; }
  function homeView() {
    var list = sorted(), hero = list[0] || SAMPLE, m = model(hero), P = S.prog[hero.id] || freshProgress();
    var L = P.letters || {}, filled = 0; for (var k in L) { var a = k.split(','); if (L[k] && m.isW(+a[0], +a[1])) filled++; }
    var pct = Math.round(filled / Math.max(1, m.whites) * 100);
    var status = P.done ? '\u0c2a\u0c42\u0c30\u0c4d\u0c24\u0c2f\u0c3f\u0c02\u0c26\u0c3f \u00b7 ' + fmt(P.doneTime) : (P.started ? '\u0c2e\u0c27\u0c4d\u0c2f\u0c32\u0c4b \u0c09\u0c02\u0c26\u0c3f' : '\u0c07\u0c02\u0c15\u0c3e \u0c2e\u0c4a\u0c26\u0c32\u0c41\u0c2a\u0c46\u0c1f\u0c4d\u0c1f\u0c32\u0c47\u0c26\u0c41');
    var cta = P.done ? '\u0c05\u0c2d\u0c3f\u0c28\u0c02\u0c26\u0c28\u0c32\u0c41 \u0c1a\u0c42\u0c21\u0c02\u0c21\u0c3f' : (P.started ? '\u0c15\u0c4a\u0c28\u0c38\u0c3e\u0c17\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f' : '\u0c06\u0c21\u0c1f\u0c02 \u0c2e\u0c4a\u0c26\u0c32\u0c41\u0c2a\u0c46\u0c1f\u0c4d\u0c1f\u0c02\u0c21\u0c3f');
    var months = {}, mlist = [];
    list.forEach(function (p) { var mn = monthName(p.date); if (!months[mn]) { months[mn] = 0; mlist.push(mn); } months[mn]++; });
    var chips = mlist.map(function (mn) { return '<button class="mchip" data-act="month" data-v="' + esc(mn) + '" style="border:0;text-align:left"><b>' + esc(mn) + '</b><small>' + months[mn] + (months[mn] === 1 ? ' \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c41' : ' \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c41\u0c32\u0c41') + '</small></button>'; }).join('');
    var recent = byUse().filter(function (p) { return p !== hero; }).slice(0, 4).map(puzzleRow).join('');
    var emptyMsg = DATA_STATE === 'loading' ? (IS_CLAUDE ? '\u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c41\u0c32\u0c41 \u0c32\u0c4b\u0c21\u0c4d \u0c05\u0c35\u0c41\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c2f\u0c3f\u2026' : '\u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d \u0c28\u0c41\u0c02\u0c1a\u0c3f \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c41\u0c32\u0c41 \u0c32\u0c4b\u0c21\u0c4d \u0c05\u0c35\u0c41\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c2f\u0c3f\u2026')
      : (!IS_CLAUDE && BLOG_STATE === 'error') ? '\u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d\u200c\u0c28\u0c41 \u0c1a\u0c47\u0c30\u0c41\u0c15\u0c4b\u0c32\u0c47\u0c15\u0c2a\u0c4b\u0c2f\u0c3e\u0c02. \u0c07\u0c02\u0c1f\u0c30\u0c4d\u0c28\u0c46\u0c1f\u0c4d \u0c15\u0c28\u0c46\u0c15\u0c4d\u0c37\u0c28\u0c4d \u0c1a\u0c42\u0c38\u0c3f \u0c2f\u0c3e\u0c2a\u0c4d\u200c\u0c28\u0c41 \u0c2e\u0c33\u0c4d\u0c33\u0c40 \u0c24\u0c46\u0c30\u0c35\u0c02\u0c21\u0c3f. \u0c05\u0c2a\u0c4d\u0c2a\u0c1f\u0c3f\u0c26\u0c3e\u0c15\u0c3e \u0c15\u0c3f\u0c02\u0c26\u0c3f \u0c05\u0c2d\u0c4d\u0c2f\u0c3e\u0c38\u0c02 \u0c06\u0c21\u0c4a\u0c1a\u0c4d\u0c1a\u0c41.'
      : (IS_CLAUDE ? '\u0c07\u0c02\u0c15\u0c3e \u0c0f \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c42 \u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c3f\u0c02\u0c1a\u0c32\u0c47\u0c26\u0c41. \u0c24\u0c3e\u0c33\u0c02 \u0c17\u0c41\u0c30\u0c4d\u0c24\u0c41 \u0c28\u0c41\u0c02\u0c1a\u0c3f \u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c41\u0c32\u0c41 \u0c26\u0c3f\u0c17\u0c41\u0c2e\u0c24\u0c3f \u0c1a\u0c47\u0c2f\u0c35\u0c1a\u0c4d\u0c1a\u0c41 \u0c32\u0c47\u0c26\u0c3e \u0c15\u0c4a\u0c24\u0c4d\u0c24 \u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02 \u0c05\u0c2a\u0c4d\u200c\u0c32\u0c4b\u0c21\u0c4d \u0c1a\u0c47\u0c2f\u0c35\u0c1a\u0c4d\u0c1a\u0c41.' : '\u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d\u200c\u0c32\u0c4b \u0c07\u0c02\u0c15\u0c3e \u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02 \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c41\u0c32\u0c41 \u0c32\u0c47\u0c35\u0c41.');
    var empty = !list.length ? '<section class="sec"><h2 class="sec-h">\u0c2e\u0c40 \u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c41\u0c32\u0c41</h2><div class="box">' + (DATA_STATE === 'loading' ? loaderHTML(true) : '<p class="bignote">' + emptyMsg + '</p>') + (ADMIN ? '<a class="wide-btn pri" href="#admin">\u0c28\u0c3f\u0c30\u0c4d\u0c35\u0c3e\u0c39\u0c23\u0c15\u0c41 \u0c35\u0c46\u0c33\u0c4d\u0c33\u0c02\u0c21\u0c3f</a>' : '') + '</div></section>' : '';
    return '<div class="page gutter">' +
      '<header class="apphead"><div><h1 class="apptitle">\u0c08-\u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02</h1><p class="appsub">' + (S.profile.name ? greeting() + ', ' + esc(S.profile.name) + '!' : '\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41 \u0c2d\u0c3e\u0c37\u0c3e\u0c2d\u0c3f\u0c2e\u0c3e\u0c28\u0c41\u0c32\u0c15\u0c41 \u0c38\u0c4d\u0c35\u0c3e\u0c17\u0c24\u0c02') + '</p></div>' +
      '<div class="hdr-btns">' + (!IS_CLAUDE || ADMIN ? '<a class="iconbtn lockbtn' + (ADMIN ? ' is-admin' : '') + '" href="#admin" aria-label="' + (ADMIN ? '\u0c28\u0c3f\u0c30\u0c4d\u0c35\u0c3e\u0c39\u0c23 (\u0c24\u0c46\u0c30\u0c3f\u0c1a\u0c3f \u0c09\u0c02\u0c26\u0c3f)' : '\u0c28\u0c3f\u0c30\u0c4d\u0c35\u0c3e\u0c39\u0c23 (\u0c24\u0c3e\u0c33\u0c02)') + '">' + (ADMIN ? I.unlock : I.lock) + '</a>' : '') +
      '<a class="iconbtn avbtn" href="#profile" aria-label="\u0c28\u0c3e \u0c2a\u0c4d\u0c30\u0c4a\u0c2b\u0c48\u0c32\u0c4d">' + esc(S.profile.avatar) + '</a><a class="iconbtn" href="#prefs" aria-label="\u0c05\u0c2e\u0c30\u0c3f\u0c15\u0c32\u0c41">' + I.sliders + '</a></div></header>' +
      (IS_ANDROID ? apkCardHTML(true) : '') +
      (list.length ? '<section class="sec homesearch"><div class="search"><label for="home-q">\u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d \u0c35\u0c46\u0c24\u0c15\u0c02\u0c21\u0c3f</label><div class="box">' + I.search + '<input id="home-q" type="search" enterkeyhint="search" autocomplete="off" placeholder="\u0c24\u0c47\u0c26\u0c40 (01.11.2026, 1/11), \u0c28\u0c46\u0c32 \u0c32\u0c47\u0c26\u0c3e \u0c2a\u0c47\u0c30\u0c41" value="' + esc(U.homeQ || '') + '"></div></div><div id="home-res">' + homeResults() + '</div></section>' : '') +
      '<article class="hero">' + MUGGU +
        '<div class="hero-top"><div class="hero-txt"><span class="badge">' + (hero.id === 'sample' ? '\u0c05\u0c2d\u0c4d\u0c2f\u0c3e\u0c38\u0c02' : '\u0c24\u0c3e\u0c1c\u0c3e \u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02') + '</span><h2>' + esc(hero.title) + '</h2>' +
        '<p>' + (hero.date ? esc(hero.date) + ' \u00b7 ' + weekday(hero.date) : m.R + '\u00d7' + m.C + ' \u00b7 \u0c2a\u0c30\u0c40\u0c15\u0c4d\u0c37 \u0c15\u0c4b\u0c38\u0c02') + '</p><p>\u0c05\u0c21\u0c4d\u0c21\u0c02 ' + m.order.A.length + ' \u00b7 \u0c28\u0c3f\u0c32\u0c41\u0c35\u0c41 ' + m.order.D.length + '</p></div>' + miniGrid(hero) + '</div>' +
        '<div class="prog"><div class="prog-row"><span>' + status + '</span><span>' + filled + '/' + m.whites + '</span></div><div class="bar"><i style="width:' + pct + '%"></i></div></div>' +
        '<a class="cta" href="' + (P.done ? '#done-' : '#play-') + esc(hero.id) + '">' + cta + I.arrow + '</a>' +
      '</article>' + empty +
      (recent ? '<section class="sec"><div class="sec-row"><h2 class="sec-h">' + (S.prefs.order === 'date' ? '\u0c07\u0c02\u0c24\u0c15\u0c41 \u0c2e\u0c41\u0c02\u0c26\u0c41\u0c35\u0c3f' : '\u0c07\u0c1f\u0c40\u0c35\u0c32 \u0c06\u0c21\u0c3f\u0c28\u0c35\u0c3f') + '</h2>' + orderSwitchHTML() + '</div><div class="card" id="recent">' + recent + '</div></section>' : '') +
      (chips ? '<section class="sec"><div class="sec-row"><h2 class="sec-h">\u0c28\u0c46\u0c32\u0c32 \u0c35\u0c3e\u0c30\u0c40\u0c17\u0c3e</h2><a href="#archive" style="font-size:14px;font-weight:600;text-decoration:none;padding:10px 0">\u0c05\u0c28\u0c4d\u0c28\u0c40 \u0c1a\u0c42\u0c21\u0c02\u0c21\u0c3f</a></div><div class="chips">' + chips + '</div></section>' : '') +
      '<section class="tip"><span class="ic">' + I.kb + '</span><p><b>\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41 \u0c15\u0c40\u0c2c\u0c4b\u0c30\u0c4d\u0c21\u0c4d \u0c05\u0c35\u0c38\u0c30\u0c02 \u0c32\u0c47\u0c26\u0c41.</b> \u0c05\u0c15\u0c4d\u0c37\u0c30 \u0c15\u0c40\u0c2a\u0c4d\u0c2f\u0c3e\u0c21\u0c4d \u0c35\u0c3e\u0c21\u0c02\u0c21\u0c3f, \u0c32\u0c47\u0c26\u0c3e \u0c15\u0c40\u0c2c\u0c4b\u0c30\u0c4d\u0c21\u0c4d \u0c2a\u0c48\u0c28 ENG \u0c0e\u0c02\u0c1a\u0c41\u0c15\u0c41\u0c28\u0c3f \u0c07\u0c02\u0c17\u0c4d\u0c32\u0c40\u0c37\u0c4d\u200c\u0c32\u0c4b \u0c1f\u0c48\u0c2a\u0c4d \u0c1a\u0c47\u0c2f\u0c02\u0c21\u0c3f: kamalam \u2192 \u0c15\u0c2e\u0c32\u0c02.</p></section>' +
    '</div>';
  }
  // finding a post: by date in any common form (01.11.2026, 1/11/26, 1-11, 01112026, 11.2026, 2026), month (\u0c28\u0c35\u0c02\u0c2c\u0c30\u0c4d, nov),
  // weekday or title
  var EN_MON = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
  function postMatches(p, q) {
    q = String(q || '').trim(); if (!q) return true;
    var pp = paperOf(p.paper), date = p.date || '', hay = (date + ' ' + monthName(date) + ' ' + weekday(date) + ' ' + (p.title || '') + ' ' + pp.te + ' ' + pp.en).toLowerCase(), ql = q.toLowerCase();
    if (hay.indexOf(ql) >= 0) return true;
    // "sakshi 01.11" / "\u0c38\u0c3e\u0c15\u0c4d\u0c37\u0c3f \u0c28\u0c35\u0c02\u0c2c\u0c30\u0c4d": the paper's name narrows, the rest is matched as usual
    for (var pi = 0; pi < PAPERS.length; pi++) { var P2 = PAPERS[pi], nm = [P2.te, P2.en.toLowerCase()].filter(function (x) { return ql.indexOf(x.toLowerCase()) >= 0; })[0];
      if (nm && P2.id !== 'other') { if ((p.paper || 'eenadu') !== P2.id) return false; var rest = ql.replace(nm.toLowerCase(), '').trim(); return !rest || postMatches(Object.assign({}, p, { paper: 'other', title: '' }), rest); } }
    var dm = /^(\d{2})\.(\d{2})\.(\d{4})$/.exec(date); if (!dm) return false;
    var dd = +dm[1], mm = +dm[2], yy = +dm[3];
    var en = ql.match(/^[a-z]{3,}/); if (en) { var mi = EN_MON.indexOf(en[0].slice(0, 3)); if (mi < 0 || mi + 1 !== mm) return false; var yq = ql.match(/\d{4}/); return !yq || +yq[0] === yy; }
    var g = q.match(/\d+/g); if (!g) return false;
    if (g.length === 1) { var x = g[0]; if (x.length === 8) return +x.slice(0, 2) === dd && +x.slice(2, 4) === mm && +x.slice(4) === yy; if (x.length === 6) return +x.slice(0, 2) === dd && +x.slice(2, 4) === mm && +x.slice(4) === yy % 100; if (x.length === 4) return +x === yy; return +x === dd; }
    if (g.length === 2) return g[1].length === 4 ? +g[0] === mm && +g[1] === yy : +g[0] === dd && +g[1] === mm;
    return +g[0] === dd && +g[1] === mm && (+g[2] === yy || +g[2] === yy % 100);
  }
  function homeResults() {
    var q = (U.homeQ || '').trim(); if (!q) return '';
    var hits = byUse().filter(function (p) { return postMatches(p, q); });
    if (!hits.length) return '<p class="note">\u201c' + esc(q) + '\u201d \u0c15\u0c41 \u0c38\u0c30\u0c3f\u0c2a\u0c21\u0c47 \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d \u0c32\u0c47\u0c26\u0c41. \u0c24\u0c47\u0c26\u0c40 (01.11.2026 \u0c32\u0c47\u0c26\u0c3e 1/11), \u0c28\u0c46\u0c32 (\u0c28\u0c35\u0c02\u0c2c\u0c30\u0c4d) \u0c32\u0c47\u0c26\u0c3e \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c02 (2025) \u0c2a\u0c4d\u0c30\u0c2f\u0c24\u0c4d\u0c28\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f.</p>';
    return '<div class="card">' + hits.slice(0, 12).map(puzzleRow).join('') + '</div>' + (hits.length > 12 ? '<a class="note" href="#archive" data-act="arch-from-home">\u0c07\u0c02\u0c15\u0c3e ' + (hits.length - 12) + ' \u2014 \u0c06\u0c30\u0c4d\u0c15\u0c48\u0c35\u0c4d\u200c\u0c32\u0c4b \u0c1a\u0c42\u0c21\u0c02\u0c21\u0c3f</a>' : '');
  }
  function archiveResults() {
    var q = U.query.trim(), groups = {}, order = [], played = [];
    if (S.prefs.order !== 'date' && !q) played = byUse().filter(function (p) { return lastUse(p.id); });
    sorted().forEach(function (p) {
      if (played.indexOf(p) >= 0) return;
      var mn = monthName(p.date);
      if (q && !postMatches(p, q)) return;
      if (!groups[mn]) { groups[mn] = []; order.push(mn); } groups[mn].push(p);
    });
    if (!order.length && !played.length) return PUZZLES.length ? '<p class="note">\u201c' + esc(q) + '\u201d\u0c15\u0c41 \u0c38\u0c30\u0c3f\u0c2a\u0c21\u0c47 \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d \u0c26\u0c4a\u0c30\u0c15\u0c32\u0c47\u0c26\u0c41. \u0c24\u0c47\u0c26\u0c40 (18.05.2025), \u0c28\u0c46\u0c32 (\u0c2e\u0c47) \u0c32\u0c47\u0c26\u0c3e \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c02 (2021) \u0c2a\u0c4d\u0c30\u0c2f\u0c24\u0c4d\u0c28\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f.</p>' : '<p class="note">\u0c07\u0c02\u0c15\u0c3e \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c41\u0c32\u0c41 \u0c32\u0c47\u0c35\u0c41.</p>';
    return (played.length ? '<div class="sec"><h3 class="sec-h" style="font-size:16px">\u0c07\u0c1f\u0c40\u0c35\u0c32 \u0c06\u0c21\u0c3f\u0c28\u0c35\u0c3f \u00b7 ' + played.length + '</h3><div class="card">' + played.map(puzzleRow).join('') + '</div></div>' : '') +
      order.map(function (mn) { return '<div class="sec"><h3 class="sec-h" style="font-size:16px">' + esc(mn) + ' \u00b7 ' + groups[mn].length + '</h3><div class="card">' + groups[mn].map(puzzleRow).join('') + '</div></div>'; }).join('');
  }
  function archiveView() {
    return '<div class="page gutter">' +
      '<header><h1 class="apptitle" style="font-size:38px">\u0c06\u0c30\u0c4d\u0c15\u0c48\u0c35\u0c4d</h1><p class="appsub">' + (PUZZLES.length ? '\u0c2e\u0c4a\u0c24\u0c4d\u0c24\u0c02 ' + PUZZLES.length + ' \u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c3e\u0c32\u0c41' : '\u0c06\u0c30\u0c4d\u0c15\u0c48\u0c35\u0c4d') + '</p></header>' +
      '<div class="sec-row" style="margin-top:4px"><span class="lbl">\u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c41\u0c32 \u0c15\u0c4d\u0c30\u0c2e\u0c02</span>' + orderSwitchHTML() + '</div>' + '<div class="search"><label for="arch-q">\u0c24\u0c47\u0c26\u0c40 \u0c32\u0c47\u0c26\u0c3e \u0c28\u0c46\u0c32\u0c24\u0c4b \u0c35\u0c46\u0c24\u0c15\u0c02\u0c21\u0c3f</label><div class="box">' + I.search + '<input id="arch-q" type="search" placeholder="\u0c09\u0c26\u0c3e: 18.05.2025, 18/5, \u0c2e\u0c47 \u0c32\u0c47\u0c26\u0c3e 2025" value="' + esc(U.query) + '"></div></div>' +
      '<div id="arch-res" class="sec">' + archiveResults() + '</div>' +
      '<section class="sec"><h2 class="sec-h">\u0c05\u0c2d\u0c4d\u0c2f\u0c3e\u0c38\u0c02</h2><div class="card">' + puzzleRow(SAMPLE) + '</div></section>' +
      '<p class="note">\u0c05\u0c38\u0c32\u0c41 \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c41\u0c32\u0c41 \u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d\u200c\u0c32\u0c4b: <a href="' + BLOG + '" target="_blank" rel="noopener">telugupadavinodam.blogspot.com</a></p>' +
    '</div>';
  }
  function keypadHTML(acts, five) {
    var SIGNS = ['', '\u0c3e', '\u0c3f', '\u0c40', '\u0c41', '\u0c42', '\u0c43', '\u0c46', '\u0c47', '\u0c48', '\u0c4a', '\u0c4b', '\u0c4c', '\u0c02'];
    var VOWELS = ['\u0c05', '\u0c06', '\u0c07', '\u0c08', '\u0c09', '\u0c0a', '\u0c0b', '\u0c0e', '\u0c0f', '\u0c10', '\u0c12', '\u0c13', '\u0c14'];
    var CONS = ['\u0c15', '\u0c16', '\u0c17', '\u0c18', '\u0c1a', '\u0c1b', '\u0c1c', '\u0c1d', '\u0c1f', '\u0c20', '\u0c21', '\u0c22', '\u0c23', '\u0c24', '\u0c25', '\u0c26', '\u0c27', '\u0c28', '\u0c2a', '\u0c2b', '\u0c2c', '\u0c2d', '\u0c2e', '\u0c2f', '\u0c30', '\u0c32', '\u0c35', '\u0c36', '\u0c37', '\u0c38', '\u0c39', '\u0c33'];
    var strip;
    if (U.conj && !U.cons) strip = '<div class="strip"><div class="note2">' + esc(U.conj) + '\u0c4d + \u0c30\u0c46\u0c02\u0c21\u0c4b \u0c39\u0c32\u0c4d\u0c32\u0c41 \u0c0e\u0c02\u0c1a\u0c41\u0c15\u0c4b\u0c02\u0c21\u0c3f</div></div>';
    else if (U.cons) strip = '<div class="strip guni">' + SIGNS.map(function (s) { var v = U.cons + s; return '<button class="k" data-act="put" data-v="' + esc(v) + '">' + esc(v) + '</button>'; }).join('') + '</div>';
    else strip = '<div class="strip">' + VOWELS.map(function (v) { return '<button class="k" data-act="put" data-v="' + v + '">' + v + '</button>'; }).join('') + '</div>';
    return strip + '<div class="keys">' + CONS.map(function (k) { return '<button class="k" data-act="cons" data-v="' + k + '" aria-pressed="' + (U.cons === k || U.conj === k) + '">' + k + '</button>'; }).join('') + '</div><div class="acts' + (five ? ' five' : '') + '">' + acts + '</div>';
  }
  function typeBoxHTML() {
    return '<div class="typebox">' +
      '<div class="tl-row"><input id="tl-in" class="inp" type="text" lang="te" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="done" aria-label="\u0c1c\u0c35\u0c3e\u0c2c\u0c41 \u2014 \u0c2a\u0c42\u0c30\u0c4d\u0c24\u0c3f \u0c2a\u0c26\u0c02, \u0c07\u0c02\u0c17\u0c4d\u0c32\u0c40\u0c37\u0c4d \u0c32\u0c47\u0c26\u0c3e \u0c24\u0c46\u0c32\u0c41\u0c17\u0c41\u0c32\u0c4b" placeholder="\u0c2a\u0c42\u0c30\u0c4d\u0c24\u0c3f \u0c2a\u0c26\u0c02: kamalam \u2192 \u0c15\u0c2e\u0c32\u0c02"><button class="smallbtn pri" data-act="tl-commit" data-keepfocus>\u0c2a\u0c46\u0c1f\u0c4d\u0c1f\u0c41</button><button class="smallbtn tl-te" data-act="kb-te" data-keepfocus aria-label="\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41 \u0c05\u0c15\u0c4d\u0c37\u0c30 \u0c15\u0c40\u0c2a\u0c4d\u0c2f\u0c3e\u0c21\u0c4d\u200c\u0c15\u0c41 \u0c2e\u0c3e\u0c30\u0c02\u0c21\u0c3f" title="\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41 \u0c05\u0c15\u0c4d\u0c37\u0c30 \u0c15\u0c40\u0c2a\u0c4d\u0c2f\u0c3e\u0c21\u0c4d">\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41</button><button class="ghostbtn helpbtn" data-act="tl-help" data-keepfocus aria-label="\u0c1f\u0c48\u0c2a\u0c3f\u0c02\u0c17\u0c4d \u0c1a\u0c3f\u0c1f\u0c4d\u0c15\u0c3e\u0c32\u0c41">?</button></div>' +
      '<div id="tl-cands" class="tl-cands" aria-live="polite"></div>' +
      '<p class="note" id="tl-help" hidden>\u0c2a\u0c26\u0c02 \u0c2e\u0c4a\u0c24\u0c4d\u0c24\u0c02 \u0c1f\u0c48\u0c2a\u0c4d \u0c1a\u0c47\u0c38\u0c3f \u0c38\u0c4d\u0c2a\u0c47\u0c38\u0c4d, Enter \u0c32\u0c47\u0c26\u0c3e \u201c\u0c2a\u0c46\u0c1f\u0c4d\u0c1f\u0c41\u201d \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c02\u0c21\u0c3f \u2014 \u0c05\u0c15\u0c4d\u0c37\u0c30\u0c3e\u0c32\u0c41 \u0c06 \u0c2a\u0c26\u0c02 \u0c17\u0c21\u0c41\u0c32\u0c4d\u0c32\u0c4b \u0c35\u0c30\u0c41\u0c38\u0c17\u0c3e \u0c2a\u0c21\u0c24\u0c3e\u0c2f\u0c3f. \u0c2a\u0c42\u0c30\u0c4d\u0c24\u0c3f \u0c2a\u0c26\u0c02 \u0c1f\u0c48\u0c2a\u0c4d \u0c1a\u0c47\u0c38\u0c4d\u0c24\u0c47 \u0c2e\u0c4a\u0c26\u0c1f\u0c3f \u0c17\u0c21\u0c3f \u0c28\u0c41\u0c02\u0c1a\u0c47 \u0c2a\u0c46\u0c21\u0c24\u0c3e\u0c02. aa \u0c06 \u00b7 ee \u0c08 \u00b7 oo \u0c0a \u00b7 E \u0c0f \u00b7 O \u0c13 \u00b7 T \u0c1f \u00b7 D \u0c21 \u00b7 N \u0c23 \u00b7 L \u0c33 \u00b7 Sh \u0c37. \u0c35\u0c47\u0c30\u0c47 \u0c30\u0c42\u0c2a\u0c02 \u0c15\u0c3e\u0c35\u0c3e\u0c32\u0c02\u0c1f\u0c47 \u0c15\u0c3f\u0c02\u0c26\u0c3f \u0c35\u0c3e\u0c1f\u0c3f\u0c32\u0c4b \u0c12\u0c15\u0c1f\u0c3f \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c02\u0c21\u0c3f. \u0c2b\u0c4b\u0c28\u0c4d \u0c15\u0c40\u0c2c\u0c4b\u0c30\u0c4d\u0c21\u0c4d\u200c\u0c28\u0c41 \u0c24\u0c46\u0c32\u0c41\u0c17\u0c41\u0c15\u0c41 \u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f \u0c28\u0c47\u0c30\u0c41\u0c17\u0c3e \u0c24\u0c46\u0c32\u0c41\u0c17\u0c41\u0c32\u0c4b\u0c28\u0c42 \u0c1f\u0c48\u0c2a\u0c4d \u0c1a\u0c47\u0c2f\u0c35\u0c1a\u0c4d\u0c1a\u0c41.</p></div>';
  }
  // the selected word's squares, shown right above the typing box so they stay in sight while the phone keyboard is open
  function stripHTML() {
    if (!CUR) return '';
    var e = cur(), P = CUR.P, m = CUR.m, i0 = idxIn(e), anyPre = U.pre && Object.keys(U.pre).length;
    return '<div class="wstrip" style="--n:' + e.cells.length + '" role="group" aria-label="\u0c0e\u0c02\u0c1a\u0c41\u0c15\u0c41\u0c28\u0c4d\u0c28 \u0c2a\u0c26\u0c02 \u0c17\u0c21\u0c41\u0c32\u0c41">' + e.cells.map(function (c, i) {
      var k = key(c[0], c[1]), pre = U.pre && U.pre[k], L = pre || P.letters[k] || '', st = pre ? '' : cellState(k, L);
      return '<button class="sc' + (pre ? ' is-pre' : st) + (!anyPre && i === i0 ? ' is-cur' : '') + '" data-act="scell" data-r="' + c[0] + '" data-c="' + c[1] + '" data-keepfocus aria-label="\u0c17\u0c21\u0c3f ' + (i + 1) + (L ? ' \u00b7 ' + esc(L) : ' \u00b7 \u0c16\u0c3e\u0c33\u0c40') + '">' + esc(L) + '</button>';
    }).join('') + '</div>';
  }
  // like the blog: a right letter turns grey with a green border and blue letter, a wrong one gold with a red border
  function cellState(k, L) {
    var m = CUR.m, sol = m.sol(k);
    if (!L) return '';
    if (U.shown[k] || (m.hasAns && sol && L !== sol)) return ' is-wrong';
    if (m.hasAns && sol && L === sol) return ' is-ok';
    return '';
  }
  // where a typed word goes: the whole word from its first square, a shorter piece from the selected square
  function placeStart(e, n) { var i0 = idxIn(e), len = e.cells.length; if (n >= len) return 0; if (n <= len - i0) return i0; return 0; }
  function bestFit(cands, e) {
    if (!cands || !cands.length) return null;
    var len = e.cells.length;
    if (cands[0].length <= len) return cands[0];
    for (var i = 1; i < cands.length; i++) if (cands[i].length === len) return cands[i];
    return cands[0];
  }
  function computePre() {
    U.pre = {};
    if (U.panel !== 'type' || !CUR || route().indexOf('play-') !== 0) return;
    var el = document.getElementById('tl-in'), v = el ? el.value.trim() : '';
    if (!v) return;
    var e = cur(), a = bestFit(TL.convert(v), e); if (!a) return;
    var s0 = placeStart(e, a.length);
    for (var i = 0; i < a.length && s0 + i < e.cells.length; i++) { var c = e.cells[s0 + i], k = key(c[0], c[1]); if (!locked(k)) U.pre[k] = a[i]; }
  }
  function drawBoard() {
    var el = document.getElementById('pmid');
    if (el) { var vt = view.scrollTop, gw = el.querySelector('.gridwrap'), sl = gw ? gw.scrollLeft : 0; el.innerHTML = midHTML(); var gw2 = el.querySelector('.gridwrap'); if (gw2) gw2.scrollLeft = sl; view.scrollTop = vt; }
    var ws = document.getElementById('wstrip'); if (ws) ws.innerHTML = stripHTML();
  }
  function kbBar(mode) {
    var t = mode === 'type';
    return '<div class="kbbar"><div class="seg" role="group" aria-label="\u0c15\u0c40\u0c2c\u0c4b\u0c30\u0c4d\u0c21\u0c4d \u0c2d\u0c3e\u0c37"><button data-act="kb-en" aria-pressed="' + t + '">ENG</button><button data-act="kb-te" aria-pressed="' + (mode === 'keys') + '">\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41</button></div><div class="kbr">' +
      (t ? '<button class="smallbtn" data-act="flip" data-keepfocus aria-label="\u0c26\u0c3f\u0c36 \u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c41">' + I.swap + dirName(CUR.P.dir) + '</button><button class="smallbtn" data-act="back" data-keepfocus aria-label="\u0c24\u0c4a\u0c32\u0c17\u0c3f\u0c02\u0c1a\u0c41">' + I.del + '</button>' : '') +
      '<button class="smallbtn" data-act="kb-hide" aria-label="\u0c15\u0c40\u0c2c\u0c4b\u0c30\u0c4d\u0c21\u0c4d \u0c26\u0c3e\u0c1a\u0c41">' + I.down + (t ? '' : ' \u0c26\u0c3e\u0c1a\u0c41') + '</button></div></div>';
  }
  function canFix(e) { return ADMIN && CUR && (IS_CLAUDE || !!(findPuzzle(CUR.id) || {}).postId) && CUR.id !== 'draft' && CUR.id !== 'sample' && e.id !== 'X' && PUZZLES.some(function (p) { return p.id === CUR.id; }); }
  function fixHTML() {
    var e = cur();
    return '<div class="fixbox"><div class="sec-row"><span class="lbl">' + e.n + ' ' + dirName(e.d) + ' \u2014 \u0c06\u0c27\u0c3e\u0c30\u0c02 \u0c38\u0c30\u0c3f\u0c26\u0c3f\u0c26\u0c4d\u0c26\u0c02\u0c21\u0c3f</span><button class="smallbtn" data-act="edit-pub" data-id="' + esc(CUR.id) + '">\u0c2a\u0c42\u0c30\u0c4d\u0c24\u0c3f \u0c0e\u0c21\u0c3f\u0c1f\u0c30\u0c4d</button></div>' +
      '<textarea id="fix-in" class="inp tel" rows="3" lang="te" aria-label="\u0c06\u0c27\u0c3e\u0c30\u0c02 \u0c35\u0c1a\u0c28\u0c02">' + esc(e.text) + '</textarea>' +
      '<p class="note">\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41\u0c32\u0c4b \u0c28\u0c47\u0c30\u0c41\u0c17\u0c3e \u0c32\u0c47\u0c26\u0c3e \u0c07\u0c02\u0c17\u0c4d\u0c32\u0c40\u0c37\u0c4d\u200c\u0c32\u0c4b \u0c1f\u0c48\u0c2a\u0c4d \u0c1a\u0c47\u0c2f\u0c35\u0c1a\u0c4d\u0c1a\u0c41. \u0c07\u0c02\u0c17\u0c4d\u0c32\u0c40\u0c37\u0c4d \u0c2a\u0c26\u0c02 \u0c24\u0c30\u0c4d\u0c35\u0c3e\u0c24 \u0c38\u0c4d\u0c2a\u0c47\u0c38\u0c4d \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c17\u0c3e\u0c28\u0c47 \u0c24\u0c46\u0c32\u0c41\u0c17\u0c41\u0c32\u0c4b\u0c15\u0c3f \u0c2e\u0c3e\u0c30\u0c41\u0c24\u0c41\u0c02\u0c26\u0c3f (kamalam \u2192 \u0c15\u0c2e\u0c32\u0c02). \u0c38\u0c47\u0c35\u0c4d \u0c1a\u0c47\u0c38\u0c4d\u0c24\u0c47 \u0c08 \u0c2f\u0c3e\u0c2a\u0c4d \u0c24\u0c46\u0c30\u0c3f\u0c1a\u0c3f\u0c28 \u0c05\u0c02\u0c26\u0c30\u0c3f\u0c15\u0c40 \u0c38\u0c30\u0c3f\u0c26\u0c3f\u0c26\u0c4d\u0c26\u0c3f\u0c28 \u0c06\u0c27\u0c3e\u0c30\u0c02 \u0c15\u0c28\u0c3f\u0c2a\u0c3f\u0c38\u0c4d\u0c24\u0c41\u0c02\u0c26\u0c3f.</p>' +
      '<div class="btnrow"><button class="wide-btn ter" data-act="panel-keys">\u0c30\u0c26\u0c4d\u0c26\u0c41</button><button class="wide-btn pri" data-act="fix-save"' + (U.busy ? ' disabled' : '') + '>\u0c38\u0c47\u0c35\u0c4d \u0c1a\u0c47\u0c38\u0c3f \u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f</button></div></div>';
  }
  // \u0c38\u0c41\u0c32\u0c2d\u0c02: the bulb is always there. \u0c15\u0c37\u0c4d\u0c1f\u0c02: it appears only when 10 or fewer squares are empty.
  function hintLocked() { return S.prefs.hard && CUR && CUR.m.hasAns && (CUR.m.whites - filledCount()) > 10; }
  function hintSlotHTML() { return hintLocked() ? '<span class="hintwait">\u0c38\u0c42\u0c1a\u0c28 \u0c1a\u0c3f\u0c35\u0c30\u0c3f 10 \u0c17\u0c21\u0c41\u0c32\u0c15\u0c41</span>' : ''; }
  // the bulb sits in the clue bar, which stays on screen: in \u0c38\u0c41\u0c32\u0c2d\u0c02 always, in \u0c15\u0c37\u0c4d\u0c1f\u0c02 once 10 squares are left
  function hintBtnHTML() {
    if (!CUR || !CUR.m.hasAns || CUR.P.done || hintLocked()) return '';
    return '<button class="cbhint" data-act="hint" data-keepfocus aria-label="\u0c38\u0c42\u0c1a\u0c28">' + bulb(30) + '<span>\u0c38\u0c42\u0c1a\u0c28</span></button>';
  }
  var ZOOMS = [1, 1.25, 1.5, 1.75, 2];
  function zoomLevel() { var z = +S.prefs.zoom || 1; return ZOOMS.indexOf(z) >= 0 ? z : 1; }
  // when zoomed, keep the selected square in view
  function keepCurVisible(force) {
    var pb = view.querySelector('.pbottom'); if (pb) view.style.setProperty('--kbh', (pb.offsetHeight + 10) + 'px');
    if (!force && !U.follow) return; U.follow = false;
    var el = view.querySelector('.cell.is-cur') || view.querySelector('.cell.is-pre'); if (el && el.scrollIntoView) el.scrollIntoView({ block: view.classList.contains('typing') ? 'center' : 'nearest', inline: zoomLevel() > 1 ? 'center' : 'nearest' });
  }
  function subText() { var p = CUR.p, m = CUR.m; return (p.date ? p.date + ' \u00b7 ' : '') + filledCount() + '/' + m.whites + ' \u0c28\u0c3f\u0c02\u0c21\u0c3e\u0c2f\u0c3f' + (m.hasAns ? '' : ' \u00b7 \u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32\u0c41 \u0c32\u0c47\u0c35\u0c41'); }
  // one picture for all the black squares of a post, as on the blog; weekly posts step through the 13 scenes in turn
  var SCENE_COUNT = 13;
  function postPic(p) { var u = p.blk || p.blkImg || BLOG_BLK[pkey(p)] || ''; if (/^http:\/\//i.test(u)) u = 'https://' + u.slice(7); return /^https:\/\/[^"'()\s]+$/.test(u) ? u : ''; }
  function sceneFor(p) {
    var d = /^(\d{2})\.(\d{2})\.(\d{4})$/.exec(p.date || '');
    if (d) return Math.floor(Date.UTC(+d[3], +d[2] - 1, +d[1]) / 864e5 / 7) % SCENE_COUNT;
    var h = 0; String(p.id || '').split('').forEach(function (ch) { h = (h * 31 + ch.charCodeAt(0)) % 997; }); return h % SCENE_COUNT;
  }
  function midHTML() {
    var m = CUR.m, P = CUR.P, p = CUR.p, e = cur(), word = {}, nums = p.nums || {}, cells = '', pimg = S.prefs.blk === 'post' ? postPic(p) : '', blkCls = S.prefs.blk === 'nature' ? ' sc' + sceneFor(p) : (pimg ? ' pimg' : '');
    e.cells.forEach(function (x) { word[key(x[0], x[1])] = true; });
    for (var r = 0; r < m.R; r++) for (var c = 0; c < m.C; c++) {
      var k = key(r, c);
      if (!m.isW(r, c)) { cells += '<div class="blk' + blkCls + '" aria-hidden="true"></div>'; continue; }
      var pre = U.pre && U.pre[k], L = pre || P.letters[k] || '';
      var st = pre ? ' is-pre' : cellState(k, L);
      var num = nums[k] || '';
      cells += '<button class="cell' + (word[k] ? ' is-word' : '') + st + (r === P.r && c === P.c && !pre ? ' is-cur' : '') + '" data-act="cell" data-r="' + r + '" data-c="' + c + '" aria-label="' + esc((num ? num + ' \u00b7 ' : '') + '\u0c05\u0c21\u0c4d\u0c21\u0c41 \u0c35\u0c30\u0c41\u0c38 ' + (r + 1) + ', \u0c28\u0c3f\u0c32\u0c41\u0c35\u0c41 \u0c35\u0c30\u0c41\u0c38 ' + (c + 1) + (L ? ' \u00b7 ' + L : ' \u00b7 \u0c16\u0c3e\u0c33\u0c40')) + '">' + (num ? '<span class="num">' + num + '</span>' : '') + '<span class="ltr">' + esc(L) + '</span></button>';
    }
    var z = zoomLevel(), base = m.C > 8 ? 'min(calc(100vw - 32px),520px)' : 'min(calc(100vw - 32px),460px,max(250px,calc(100dvh - 520px)))';
    return '<div class="gridwrap"><div class="grid" style="' + (pimg ? '--pimg:url(&quot;' + esc(pimg) + '&quot;);' : '') + '--n:' + m.C + ';--gw:calc(' + base + ' * ' + z + ')' + (z > 1 ? ';max-width:none' : '') + '" role="group" aria-label="\u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02 \u0c17\u0c21\u0c3f">' + cells + '</div></div>' +
      (p.url && IN_BLOG ? '<a class="note" href="' + esc(p.url.split('#')[0].split('?')[0]) + '?classic=1" style="text-align:center">\u0c08 \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d\u200c\u0c28\u0c41 \u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d \u0c2a\u0c3e\u0c24 \u0c30\u0c42\u0c2a\u0c02\u0c32\u0c4b \u0c1a\u0c42\u0c21\u0c02\u0c21\u0c3f</a>'
        : p.url && !EMBED ? '<a class="note" href="' + esc(p.url) + '" target="_blank" rel="noopener" style="text-align:center">\u0c08 \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d\u200c\u0c28\u0c41 \u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d\u200c\u0c32\u0c4b \u0c24\u0c46\u0c30\u0c35\u0c02\u0c21\u0c3f</a>' : '');
  }
  function clueBarHTML() {
    var e = cur();
    var m = CUR.m, k = key(CUR.P.r, CUR.P.c), both = !!(m.cellA[k] && m.cellD[k]);
    return '<div class="cluebar"><button class="ghostbtn" data-act="prev" data-keepfocus aria-label="\u0c2e\u0c41\u0c28\u0c41\u0c2a\u0c1f\u0c3f \u0c06\u0c27\u0c3e\u0c30\u0c02">' + I.prev + '</button>' +
      '<button class="tagbtn" data-act="flip" data-keepfocus aria-label="' + (both ? '\u0c05\u0c21\u0c4d\u0c21\u0c02 / \u0c28\u0c3f\u0c32\u0c41\u0c35\u0c41 \u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c02\u0c21\u0c3f' : dirName(e.d) + ' \u0c2e\u0c3e\u0c24\u0c4d\u0c30\u0c2e\u0c47') + '"><span class="tag">' + (e.n ? e.n + ' ' + dirName(e.d) : dirName(e.d)) + '</span>' + (both ? '<span class="swp">\u21c5 ' + dirName(e.d === 'A' ? 'D' : 'A') + '</span>' : '') + '</button>' +
      '<button class="mid" data-act="panel" aria-label="\u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32 \u0c1c\u0c3e\u0c2c\u0c3f\u0c24\u0c3e"><span class="txt">' + (e.text ? esc(e.text) + ' (' + e.cells.length + ')' : '\u0c08 \u0c17\u0c21\u0c3f\u0c15\u0c3f \u0c06\u0c27\u0c3e\u0c30\u0c02 \u0c32\u0c47\u0c26\u0c41') + '</span></button>' +
      (canFix(e) ? '<button class="ghostbtn" data-act="fix-open" aria-label="\u0c08 \u0c06\u0c27\u0c3e\u0c30\u0c02 \u0c38\u0c30\u0c3f\u0c26\u0c3f\u0c26\u0c4d\u0c26\u0c02\u0c21\u0c3f">' + I.pen + '</button>' : '') + hintBtnHTML() +
      '<button class="ghostbtn" data-act="next" data-keepfocus aria-label="\u0c24\u0c26\u0c41\u0c2a\u0c30\u0c3f \u0c06\u0c27\u0c3e\u0c30\u0c02">' + I.next + '</button></div>';
  }
  function panelHTML() {
    var m = CUR.m, P = CUR.P, e = cur();
    if (U.panel === 'fix' && canFix(e)) return fixHTML();
    if (U.panel === 'clues') {
      var lst = m.order[U.tab].map(function (eid) {
        var en = m.entries[eid], on = eid === e.id, ks = en.cells.map(function (x) { return key(x[0], x[1]); });
        var full = ks.every(function (q) { return P.letters[q]; }), right = full && m.hasAns && ks.every(function (q) { return P.letters[q] === m.sol(q); });
        var hd = P.hinted || {}, word = full ? ks.map(function (q) { return hd[q] ? '<span class="hl">' + esc(P.letters[q]) + '</span>' : esc(P.letters[q]); }).join('') : '';
        var chip = right ? '<span class="answ ok">' + word + ' \u2713</span>' : (full && !m.hasAns ? '<span class="answ">' + word + '</span>' : '');
        return '<button class="clue' + (on ? ' is-on' : '') + (right ? ' is-right' : '') + '" data-act="clue" data-id="' + eid + '"><span class="n">' + en.n + '</span><span class="x">' + esc(en.text) + ' (' + en.cells.length + ')' + chip + '</span></button>';
      }).join('');
      var anyHint = P.hinted && Object.keys(P.hinted).length;
      return '<div class="tabrow"><div class="seg" role="group" aria-label="\u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32 \u0c26\u0c3f\u0c36"><button data-act="tab" data-v="A" aria-pressed="' + (U.tab === 'A') + '">\u0c05\u0c21\u0c4d\u0c21\u0c02 \u00b7 ' + m.order.A.length + '</button><button data-act="tab" data-v="D" aria-pressed="' + (U.tab === 'D') + '">\u0c28\u0c3f\u0c32\u0c41\u0c35\u0c41 \u00b7 ' + m.order.D.length + '</button></div><button class="ghostbtn" style="margin-left:auto" data-act="panel" aria-label="\u0c1f\u0c48\u0c2a\u0c3f\u0c02\u0c17\u0c4d\u200c\u0c15\u0c41 \u0c24\u0c3f\u0c30\u0c3f\u0c17\u0c3f">' + I.kb + '</button></div>' + (anyHint ? '<p class="hintkey"><span class="answ ok"><span class="hl">\u0c05</span></span> \u0c38\u0c42\u0c1a\u0c28 / \u0c06\u0c1f\u0c4b\u0c24\u0c4b \u0c28\u0c3f\u0c02\u0c2a\u0c3f\u0c28 \u0c05\u0c15\u0c4d\u0c37\u0c30\u0c02</p>' : '') + '<div class="cluelist" data-scroll="clues">' + lst + '</div>';
    }
    if (U.panel === 'auto' && U.auto) return autoPanelHTML();
    if (U.panel === 'none' && CUR.P.revealed && !CUR.P.done) return '<div class="kbhidden"><button class="wide-btn pri" data-act="clear-grid">' + (U.confirm === 'clear' ? '\u0c16\u0c1a\u0c4d\u0c1a\u0c3f\u0c24\u0c2e\u0c3e? \u0c17\u0c21\u0c3f \u0c16\u0c3e\u0c33\u0c40 \u0c05\u0c35\u0c41\u0c24\u0c41\u0c02\u0c26\u0c3f' : '\u0c17\u0c21\u0c3f \u0c16\u0c3e\u0c33\u0c40 \u0c1a\u0c47\u0c38\u0c3f \u0c2e\u0c40\u0c30\u0c47 \u0c06\u0c21\u0c02\u0c21\u0c3f') + '</button><button class="smallbtn" data-act="panel">' + I.list + ' \u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32\u0c41</button></div>';
    if (U.panel === 'none') return '<div class="kbhidden"><button class="wide-btn ter" data-act="kb-show">' + I.kb + ' \u0c15\u0c40\u0c2c\u0c4b\u0c30\u0c4d\u0c21\u0c4d \u0c1a\u0c42\u0c2a\u0c3f\u0c02\u0c1a\u0c41</button><button class="smallbtn" data-act="panel">' + I.list + ' \u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32\u0c41</button></div>';
    if (U.panel === 'type') return kbBar('type') + '<div id="wstrip">' + stripHTML() + '</div>' + typeBoxHTML();
    return kbBar('keys') + keypadHTML('<button class="k" data-act="ottu" aria-pressed="' + (!!U.conj) + '">\u0c12\u0c24\u0c4d\u0c24\u0c41\u0c32\u0c41</button><button class="k" data-act="panel">' + I.list + ' \u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32\u0c41</button><button class="k" data-act="flip" aria-label="\u0c26\u0c3f\u0c36 \u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c41">' + I.swap + dirName(P.dir) + '</button><button class="k" data-act="back" aria-label="\u0c24\u0c4a\u0c32\u0c17\u0c3f\u0c02\u0c1a\u0c41">' + I.del + '</button>');
  }
  // while the posts are still coming in, show a loading screen instead of "not found"
  var LD_MSGS = IS_CLAUDE ? ['\u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c41\u0c32\u0c41 \u0c24\u0c46\u0c38\u0c4d\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c02\u2026', '\u0c17\u0c21\u0c41\u0c32\u0c41 \u0c38\u0c3f\u0c26\u0c4d\u0c27\u0c02 \u0c1a\u0c47\u0c38\u0c4d\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c02\u2026', '\u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32\u0c41 \u0c05\u0c2e\u0c30\u0c41\u0c38\u0c4d\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c02\u2026', '\u0c07\u0c02\u0c15\u0c4a\u0c26\u0c4d\u0c26\u0c3f \u0c15\u0c4d\u0c37\u0c23\u0c3e\u0c32\u0c41\u2026']
    : ['\u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d \u0c28\u0c41\u0c02\u0c1a\u0c3f \u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02 \u0c24\u0c46\u0c38\u0c4d\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c02\u2026', '\u0c17\u0c21\u0c41\u0c32\u0c41 \u0c38\u0c3f\u0c26\u0c4d\u0c27\u0c02 \u0c1a\u0c47\u0c38\u0c4d\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c02\u2026', '\u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32\u0c41 \u0c05\u0c2e\u0c30\u0c41\u0c38\u0c4d\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c02\u2026', '\u0c2e\u0c40 \u0c06\u0c1f \u0c35\u0c3f\u0c35\u0c30\u0c3e\u0c32\u0c41 \u0c24\u0c46\u0c30\u0c41\u0c38\u0c4d\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c02\u2026', '\u0c07\u0c02\u0c15\u0c4a\u0c26\u0c4d\u0c26\u0c3f \u0c15\u0c4d\u0c37\u0c23\u0c3e\u0c32\u0c41\u2026'];
  var ldIdx = 0;
  function loaderHTML(small) {
    var tiles = ['\u0c2a', '\u0c26', '', '\u0c35\u0c3f', '\u0c28\u0c4b', '\u0c26\u0c02', '', '\u0c08', '\u0c28\u0c3e'].map(function (a, i) { return '<span class="' + (a ? 't' : 'b' + (S.prefs.blk === 'nature' ? ' sc0' : '')) + '" style="animation-delay:' + (i * 0.18).toFixed(2) + 's">' + a + '</span>'; }).join('');
    return '<div class="loading' + (small ? ' sm' : '') + '" role="status" aria-live="polite"><div class="ldgrid" aria-hidden="true">' + tiles + '</div>' +
      (small ? '' : '<h1 class="apptitle">\u0c08-\u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02</h1>') + '<p class="ldmsg" id="ldmsg">' + LD_MSGS[ldIdx % LD_MSGS.length] + '</p><div class="ldbar" aria-hidden="true"><i></i></div></div>';
  }
  setInterval(function () { var el = document.getElementById('ldmsg'); if (!el) return; ldIdx++; el.textContent = LD_MSGS[ldIdx % LD_MSGS.length]; el.classList.remove('in'); void el.offsetWidth; el.classList.add('in'); }, 1600);
  function missingHTML(what) {
    if (!IS_CLAUDE && BLOG_STATE === 'error') return '<div class="page gutter"><h1 class="apptitle" style="font-size:30px">\u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d \u0c05\u0c02\u0c26\u0c41\u0c2c\u0c3e\u0c1f\u0c41\u0c32\u0c4b \u0c32\u0c47\u0c26\u0c41</h1><p class="note">\u0c07\u0c02\u0c1f\u0c30\u0c4d\u0c28\u0c46\u0c1f\u0c4d \u0c15\u0c28\u0c46\u0c15\u0c4d\u0c37\u0c28\u0c4d \u0c1a\u0c42\u0c38\u0c3f \u0c2e\u0c33\u0c4d\u0c33\u0c40 \u0c2a\u0c4d\u0c30\u0c2f\u0c24\u0c4d\u0c28\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f.</p><div class="btnrow"><button class="wide-btn pri" data-act="reload">\u0c2e\u0c33\u0c4d\u0c33\u0c40 \u0c2a\u0c4d\u0c30\u0c2f\u0c24\u0c4d\u0c28\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f</button><a class="wide-btn ter" href="#home">\u0c39\u0c4b\u0c2e\u0c4d\u200c\u0c15\u0c41 \u0c35\u0c46\u0c33\u0c4d\u0c33\u0c02\u0c21\u0c3f</a></div></div>';
    return '<div class="page gutter"><h1 class="apptitle" style="font-size:34px">' + what + '</h1><p class="note">\u0c08 \u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02 \u0c24\u0c4a\u0c32\u0c17\u0c3f\u0c02\u0c1a\u0c3f \u0c09\u0c02\u0c21\u0c35\u0c1a\u0c4d\u0c1a\u0c41.</p><a class="wide-btn pri" href="#home">\u0c39\u0c4b\u0c2e\u0c4d\u200c\u0c15\u0c41 \u0c35\u0c46\u0c33\u0c4d\u0c33\u0c02\u0c21\u0c3f</a></div>';
  }
  function playView(id) {
    var pv = playView0(id);
    return U.fin === id && CUR ? pv + finPopHTML(CUR.p) : pv;
  }
  function playView0(id) {
    setCurrent(id); U.pre = {};
    if (!CUR && DATA_STATE === 'loading' && id !== 'draft') return '<div class="page gutter">' + loaderHTML() + '</div>';
    if (!CUR) return missingHTML('\u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d \u0c26\u0c4a\u0c30\u0c15\u0c32\u0c47\u0c26\u0c41');
    var P = CUR.P, p = CUR.p, hard = S.prefs.hard, isDraft = id === 'draft';
    var timer = S.prefs.timer ? '<div class="timer">' + I.clock + '<span id="tm">' + fmt(P.elapsed) + '</span></div>' : '<span></span>';
    return '<section class="play">' +
      '<header class="pbar">' + (EMBED ? '<a class="ghostbtn" href="' + esc(location.origin + location.pathname + '#play-' + id) + '" target="_blank" rel="noopener" aria-label="\u0c2a\u0c42\u0c30\u0c4d\u0c24\u0c3f \u0c2f\u0c3e\u0c2a\u0c4d\u200c\u0c32\u0c4b \u0c24\u0c46\u0c30\u0c35\u0c02\u0c21\u0c3f" title="\u0c2a\u0c42\u0c30\u0c4d\u0c24\u0c3f \u0c2f\u0c3e\u0c2a\u0c4d\u200c\u0c32\u0c4b \u0c24\u0c46\u0c30\u0c35\u0c02\u0c21\u0c3f">' + I.ext + '</a>' : '<a class="ghostbtn" href="' + (isDraft ? '#edit' : '#home') + '" aria-label="\u0c35\u0c46\u0c28\u0c15\u0c4d\u0c15\u0c3f">' + I.back + '</a>') +
      '<div class="t"><h1>' + (isDraft ? '\u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d \u0c2a\u0c30\u0c40\u0c15\u0c4d\u0c37 \u00b7 ' : '') + esc(p.title) + '</h1><p id="psub">' + esc(subText()) + '</p></div>' +
      '<button class="ghostbtn" data-act="zoom-out" aria-label="\u0c17\u0c21\u0c3f \u0c1a\u0c3f\u0c28\u0c4d\u0c28\u0c17\u0c3e"' + (zoomLevel() <= 1 ? ' disabled' : '') + '>' + I.zout + '</button><button class="ghostbtn" data-act="zoom-in" aria-label="\u0c17\u0c21\u0c3f \u0c2a\u0c46\u0c26\u0c4d\u0c26\u0c17\u0c3e"' + (zoomLevel() >= 2 ? ' disabled' : '') + '>' + I.zin + '</button>' +
      recBtnHTML() + '<button class="ghostbtn" data-act="check" aria-label="\u0c38\u0c30\u0c3f\u0c1a\u0c42\u0c21\u0c41">' + I.check + '</button></header>' +
      '<div class="ptools gutter"><div class="seg" role="group" aria-label="\u0c15\u0c37\u0c4d\u0c1f\u0c24"><button data-act="pref" data-k="hard" data-v="0" aria-pressed="' + (!hard && !autoOn()) + '">\u0c38\u0c41\u0c32\u0c2d\u0c02</button><button data-act="pref" data-k="hard" data-v="1" aria-pressed="' + (hard && !autoOn()) + '">\u0c15\u0c37\u0c4d\u0c1f\u0c02</button>' + (autoCan() ? '<button data-act="auto-start" aria-pressed="' + autoOn() + '">\u0c06\u0c1f\u0c4b</button>' : '') + '</div>' +
      timer + '<span id="hintslot">' + hintSlotHTML() + '</span>' + (P.started && !isDraft ? '<button class="ghostbtn resetbtn' + (U.confirm === 'reset-' + id ? ' ask' : '') + '" data-act="reset-post" data-id="' + esc(id) + '" aria-label="\u0c2e\u0c4a\u0c26\u0c1f\u0c3f \u0c28\u0c41\u0c02\u0c1a\u0c3f">' + (U.confirm === 'reset-' + id ? '\u0c16\u0c1a\u0c4d\u0c1a\u0c3f\u0c24\u0c2e\u0c3e?' : '\u21ba') + '</button>' : '') + '</div>' +
      '<div class="pmid gutter" id="pmid">' + midHTML() + '</div>' +
      '<div class="pbottom"><div class="hbar gutter" id="hbar"' + (zoomLevel() > 1 ? '' : ' hidden') + '><button class="ghostbtn" data-act="hs" data-v="-1" data-keepfocus aria-label="\u0c17\u0c21\u0c3f\u0c28\u0c3f \u0c0e\u0c21\u0c2e\u0c15\u0c41 \u0c1c\u0c30\u0c41\u0c2a\u0c41">' + I.prev + '</button><div class="htrack" id="htrack" role="scrollbar" aria-orientation="horizontal" aria-label="\u0c17\u0c21\u0c3f\u0c28\u0c3f \u0c2a\u0c15\u0c4d\u0c15\u0c15\u0c41 \u0c1c\u0c30\u0c41\u0c2a\u0c41"><div class="hthumb" id="hthumb"></div></div><button class="ghostbtn" data-act="hs" data-v="1" data-keepfocus aria-label="\u0c17\u0c21\u0c3f\u0c28\u0c3f \u0c15\u0c41\u0c21\u0c3f\u0c15\u0c3f \u0c1c\u0c30\u0c41\u0c2a\u0c41">' + I.next + '</button></div><div class="gutter" id="cbar">' + clueBarHTML() + '</div><div class="ppanel gutter">' + panelHTML() + '</div></div></section>';
  }
  // redraw only the grid and clue bar so the typing box keeps focus and the phone keyboard stays open
  function refreshPlay() {
    if (!CUR || route().indexOf('play-') !== 0) { render(); return; }
    var el = document.getElementById('pmid');
    if (!el) { render(); return; }
    computePre();
    var st = el.scrollTop, gw = el.querySelector('.gridwrap'), sl = gw ? gw.scrollLeft : 0; el.innerHTML = midHTML(); el.scrollTop = st;
    var gw2 = el.querySelector('.gridwrap'); if (gw2) gw2.scrollLeft = sl; keepCurVisible(); syncHbar();
    var cb = document.getElementById('cbar'); if (cb) cb.innerHTML = clueBarHTML();
    if (U.panel === 'auto' && U.auto) { var pp = view.querySelector('.ppanel'); if (pp) pp.innerHTML = autoPanelHTML(); }
    var ws = document.getElementById('wstrip'); if (ws) ws.innerHTML = stripHTML();
    var ps = document.getElementById('psub'); if (ps) ps.textContent = subText();
    var hs = document.getElementById('hintslot'); if (hs) hs.innerHTML = hintSlotHTML();
    var fl = view.querySelector('.ppanel [data-act="flip"]'); if (fl) fl.innerHTML = I.swap + dirName(CUR.P.dir);
    updateCands();
  }
  function syncHbar() {
    var gw = view.querySelector('.gridwrap'), th = document.getElementById('hthumb'), hb = document.getElementById('hbar');
    if (!gw || !th || !hb) return;
    var max = gw.scrollWidth - gw.clientWidth; hb.hidden = max < 2;
    if (max < 2) return;
    var w = Math.max(12, gw.clientWidth / gw.scrollWidth * 100);
    th.style.width = w + '%'; th.style.left = (gw.scrollLeft / max * (100 - w)) + '%';
  }
  var REC = { on: false };
  function canRecord() { return !IS_CLAUDE && !EMBED && !!(navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) && typeof MediaRecorder !== 'undefined'; }
  function recMime() { var c = ['video/mp4;codecs=avc1,mp4a.40.2', 'video/mp4', 'video/webm;codecs=vp9,opus', 'video/webm;codecs=vp8,opus', 'video/webm']; for (var i = 0; i < c.length; i++) try { if (MediaRecorder.isTypeSupported(c[i])) return c[i]; } catch (e) {} return ''; }
  function recName() { var d = CUR && CUR.p.date ? CUR.p.date.split('.') : null; return d && d.length === 3 ? d[0] + d[1] + d[2].slice(2) : 'padavinodam-' + new Date().toISOString().slice(0, 10); }
  function recBtnHTML() { return canRecord() ? '<button class="ghostbtn recbtn' + (REC.on ? ' is-on' : '') + '" data-act="rec" aria-label="' + (REC.on ? '\u0c30\u0c3f\u0c15\u0c3e\u0c30\u0c4d\u0c21\u0c41 \u0c06\u0c2a\u0c02\u0c21\u0c3f' : '\u0c30\u0c3f\u0c15\u0c3e\u0c30\u0c4d\u0c21\u0c41 \u0c1a\u0c47\u0c2f\u0c02\u0c21\u0c3f') + '" title="' + (REC.on ? '\u0c30\u0c3f\u0c15\u0c3e\u0c30\u0c4d\u0c21\u0c41 \u0c06\u0c2a\u0c02\u0c21\u0c3f' : '\u0c30\u0c3f\u0c15\u0c3e\u0c30\u0c4d\u0c21\u0c41 \u0c1a\u0c47\u0c2f\u0c02\u0c21\u0c3f') + '"><span class="recdot"></span></button>' : ''; }
  function startRec() {
    navigator.mediaDevices.getDisplayMedia({ video: { frameRate: 30 }, audio: true, preferCurrentTab: true, selfBrowserSurface: 'include', surfaceSwitching: 'exclude' }).then(function (stream) {
      var mime = recMime(), mr;
      try { mr = new MediaRecorder(stream, mime ? { mimeType: mime } : undefined); } catch (e) { mr = new MediaRecorder(stream); }
      REC = { on: true, mr: mr, chunks: [], stream: stream, mime: mr.mimeType || mime, name: recName(), t0: Date.now() };
      mr.ondataavailable = function (e) { if (e.data && e.data.size) REC.chunks.push(e.data); };
      mr.onstop = saveRec;
      stream.getVideoTracks().forEach(function (t) { t.addEventListener('ended', function () { if (REC.on) stopRec(); }); });
      mr.start(1000); drawRec(); toast('\u0c30\u0c3f\u0c15\u0c3e\u0c30\u0c4d\u0c21\u0c3f\u0c02\u0c17\u0c4d \u0c2e\u0c4a\u0c26\u0c32\u0c48\u0c02\u0c26\u0c3f \u2014 \u0c06\u0c2a\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c0e\u0c30\u0c41\u0c2a\u0c41 \u0c2c\u0c1f\u0c28\u0c4d \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c02\u0c21\u0c3f.');
    }).catch(function (e) { toast(e && e.name === 'NotAllowedError' ? '\u0c30\u0c3f\u0c15\u0c3e\u0c30\u0c4d\u0c21\u0c3f\u0c02\u0c17\u0c4d \u0c2e\u0c4a\u0c26\u0c32\u0c41\u0c2a\u0c46\u0c1f\u0c4d\u0c1f\u0c32\u0c47\u0c26\u0c41.' : '\u0c08 \u0c2c\u0c4d\u0c30\u0c4c\u0c1c\u0c30\u0c4d\u200c\u0c32\u0c4b \u0c38\u0c4d\u0c15\u0c4d\u0c30\u0c40\u0c28\u0c4d \u0c30\u0c3f\u0c15\u0c3e\u0c30\u0c4d\u0c21\u0c3f\u0c02\u0c17\u0c4d \u0c15\u0c41\u0c26\u0c30\u0c26\u0c41.'); });
  }
  function stopRec() { if (!REC.on) return; REC.on = false; try { REC.mr.stop(); } catch (e) {} REC.stream.getTracks().forEach(function (t) { t.stop(); }); drawRec(); }
  function saveRec() {
    var type = (REC.mime || 'video/webm').split(';')[0], ext = type.indexOf('mp4') >= 0 ? 'mp4' : 'webm';
    var blob = new Blob(REC.chunks, { type: type }), url = URL.createObjectURL(blob), a = document.createElement('a');
    a.href = url; a.download = REC.name + '.' + ext; document.body.appendChild(a); a.click(); a.remove(); REC.chunks = [];
    setTimeout(function () { URL.revokeObjectURL(url); }, 10000);
    toast('\u0c35\u0c40\u0c21\u0c3f\u0c2f\u0c4b \u0c38\u0c47\u0c35\u0c4d \u0c05\u0c2f\u0c3f\u0c02\u0c26\u0c3f: ' + a.download + ' (\u0c21\u0c4c\u0c28\u0c4d\u200c\u0c32\u0c4b\u0c21\u0c4d\u0c38\u0c4d \u0c2b\u0c4b\u0c32\u0c4d\u0c21\u0c30\u0c4d\u200c\u0c32\u0c4b)');
  }
  // a small pill stays on screen while recording, on every page, with the running time and a stop button
  var recPill = null;
  function drawRec() {
    view.querySelectorAll('.recbtn').forEach(function (b) { b.classList.toggle('is-on', REC.on); b.setAttribute('aria-label', REC.on ? '\u0c30\u0c3f\u0c15\u0c3e\u0c30\u0c4d\u0c21\u0c41 \u0c06\u0c2a\u0c02\u0c21\u0c3f' : '\u0c30\u0c3f\u0c15\u0c3e\u0c30\u0c4d\u0c21\u0c41 \u0c1a\u0c47\u0c2f\u0c02\u0c21\u0c3f'); });
    if (!REC.on) { if (recPill) recPill.hidden = true; return; }
    if (!recPill) { recPill = document.createElement('button'); recPill.className = 'recpill'; recPill.addEventListener('click', stopRec); document.body.appendChild(recPill); }
    recPill.hidden = false; recPill.innerHTML = '<span class="recdot"></span>\u0c30\u0c3f\u0c15\u0c3e\u0c30\u0c4d\u0c21\u0c3f\u0c02\u0c17\u0c4d ' + fmt((Date.now() - REC.t0) / 1000) + ' \u00b7 \u0c06\u0c2a\u0c41';
  }
  setInterval(function () { if (REC.on) drawRec(); }, 1000);
  function goFull() {
    if (EMBED) return;
    if (IS_CLAUDE || IN_APK || !('ontouchstart' in window) || !document.fullscreenEnabled || document.fullscreenElement) return;
    if (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) return;
    try { var pr = document.documentElement.requestFullscreen({ navigationUI: 'hide' }); if (pr && pr.catch) pr.catch(function () {}); } catch (e) {}
  }
  function softOrFull() { if (U.panel === 'type' && route().indexOf('play-') === 0) refreshPlay(); else render(); }
  function editRunLeft() { if (!D) return 0; var dr = U.edir === 'D' ? 1 : 0, dc = U.edir === 'A' ? 1 : 0, r = U.er, c = U.ec, n = 0; while (r < D.R && c < D.C && !D.black[r][c]) { n++; r += dr; c += dc; } return n; }
  function editPlace(aks) {
    var dr = U.edir === 'D' ? 1 : 0, dc = U.edir === 'A' ? 1 : 0, r = U.er, c = U.ec;
    for (var i = 0; i < aks.length; i++) {
      if (r >= D.R || c >= D.C || D.black[r][c]) break;
      D.ans[r][c] = aks[i];
      if (r + dr < D.R && c + dc < D.C && !D.black[r + dr][c + dc]) { r += dr; c += dc; } else break;
    }
    U.er = r; U.ec = c; saveDraft(); render();
    var el = document.getElementById('tl-in'); if (el) el.focus();
  }
  function commitTyped(aks) {
    if (!aks || !aks.length) return;
    if (route() === 'edit') { editPlace(aks); return; }
    if (!CUR) return;
    var P = CUR.P;
    if (P.done) { toast('\u0c08 \u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02 \u0c2a\u0c42\u0c30\u0c4d\u0c24\u0c2f\u0c3f\u0c02\u0c26\u0c3f. \u0c2e\u0c33\u0c4d\u0c33\u0c40 \u0c06\u0c21\u0c3e\u0c32\u0c02\u0c1f\u0c47 \u201c\u0c2e\u0c33\u0c4d\u0c33\u0c40 \u0c06\u0c21\u0c02\u0c21\u0c3f\u201d \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c02\u0c21\u0c3f.'); return; }
    var e = cur(), i0 = placeStart(e, aks.length), n = 0;
    for (; n < aks.length && i0 + n < e.cells.length; n++) { var c = e.cells[i0 + n], k = key(c[0], c[1]); if (locked(k)) continue; P.letters[k] = aks[n]; delete U.shown[k]; markHint(k, false); }
    P.started = true; P.used = Date.now(); U.pre = {};
    if (n < aks.length) toast('\u0c08 \u0c2a\u0c26\u0c3e\u0c28\u0c3f\u0c15\u0c3f ' + e.cells.length + ' \u0c17\u0c21\u0c41\u0c32\u0c47 \u0c09\u0c28\u0c4d\u0c28\u0c3e\u0c2f\u0c3f \u2014 \u0c2e\u0c40\u0c30\u0c41 ' + aks.length + ' \u0c05\u0c15\u0c4d\u0c37\u0c30\u0c3e\u0c32\u0c41 \u0c1f\u0c48\u0c2a\u0c4d \u0c1a\u0c47\u0c36\u0c3e\u0c30\u0c41. \u0c2e\u0c4a\u0c26\u0c1f\u0c3f ' + n + ' \u0c2a\u0c46\u0c1f\u0c4d\u0c1f\u0c3e\u0c02.');
    var nx = null, j;
    for (j = 0; j < e.cells.length && !nx; j++) if (isWrong(key(e.cells[j][0], e.cells[j][1]))) nx = e.cells[j];
    if (nx) { P.r = nx[0]; P.c = nx[1]; U.follow = true; save(); afterInput(true); return; }   // a wrong letter: the cursor waits there (it is already marked)
    if (!advance(e, Math.min(e.cells.length - 1, i0 + Math.max(0, n - 1)))) { var lc = e.cells[Math.min(e.cells.length - 1, i0 + Math.max(0, n - 1))]; P.r = lc[0]; P.c = lc[1]; }
    U.follow = true; save(); afterInput(true);
  }
  function updateCands() {
    var box = document.getElementById('tl-cands'), el = document.getElementById('tl-in');
    if (!box || !el) return;
    var inEdit = route() === 'edit', len = inEdit ? editRunLeft() : (CUR ? cur().cells.length : 0);
    var v = el.value.trim();
    U.tlC = v ? TL.convert(v) : [];
    box.classList.toggle('is-empty', !U.tlC.length);
    box.innerHTML = U.tlC.length ? U.tlC.map(function (a, i) { return '<button class="tlc' + (a.length === len ? ' fit' : '') + '" data-act="tl-pick" data-i="' + i + '" data-keepfocus>' + esc(a.join('')) + '<small>' + a.length + '</small></button>'; }).join('')
      : '<span class="note">' + (inEdit ? '\u0c08 \u0c35\u0c30\u0c41\u0c38\u0c32\u0c4b \u0c17\u0c21\u0c41\u0c32\u0c41: ' + len : '\u0c08 \u0c2a\u0c26\u0c02: ' + len + ' \u0c17\u0c21\u0c41\u0c32\u0c41 \u2014 \u0c2a\u0c42\u0c30\u0c4d\u0c24\u0c3f \u0c2a\u0c26\u0c02 \u0c1f\u0c48\u0c2a\u0c4d \u0c1a\u0c47\u0c2f\u0c02\u0c21\u0c3f') + '</span>';
    if (!inEdit && CUR && route().indexOf('play-') === 0) { var before = JSON.stringify(U.pre || {}); computePre(); if (JSON.stringify(U.pre) !== before) drawBoard(); }
  }
  function tlInput(el) {
    var v = el.value;
    if (/[\s,.;]/.test(v)) {
      var endsSep = /[\s,.;]$/.test(v), parts = v.split(/[\s,.;]+/), done = endsSep ? parts : parts.slice(0, -1);
      el.value = endsSep ? '' : parts[parts.length - 1];
      done.forEach(function (w) { if (!w) return; var c = pickFor(w); if (c) commitTyped(c); });
    }
    updateCands();
  }
  function pickFor(text) { var c = TL.convert(text); return route() === 'edit' || !CUR ? c[0] : bestFit(c, cur()); }
  function convertLatin(text) { return String(text || '').replace(/[A-Za-z]+/g, function (w) { var c = TL.convert(w)[0]; return c ? c.join('') : w; }); }
  // in clue fields: an English word turns Telugu as soon as a space or punctuation follows it
  function autoConvertField(el) {
    var pos = el.selectionStart, v = el.value;
    if (pos == null || pos < 2 || !/[\s,.;:!?()\-]/.test(v[pos - 1])) return;
    var before = v.slice(0, pos - 1), m = before.match(/[A-Za-z]+$/);
    if (!m) return;
    var tel = convertLatin(m[0]);
    if (!tel || tel === m[0]) return;
    var start = before.length - m[0].length;
    el.value = v.slice(0, start) + tel + v.slice(pos - 1);
    var np = start + tel.length + 1; el.setSelectionRange(np, np);
    var alts = []; TL.convert(m[0]).forEach(function (c) { var t2 = c.join(''); if (alts.indexOf(t2) < 0) alts.push(t2); });
    showAlts(el, start, tel, alts.slice(0, 6));
  }
  // the other likely spellings of the word just turned Telugu (\u0c27 / \u0c26, \u0c32 / \u0c33 \u2026): one tap swaps it in
  function showAlts(el, start, tel, alts) {
    var bar = document.getElementById('tlalts');
    if (alts.length < 2) { if (bar) bar.remove(); U.tlAlt = null; return; }
    U.tlAlt = { el: el, start: start, len: tel.length, alts: alts };
    if (!bar) { bar = document.createElement('div'); bar.id = 'tlalts'; bar.className = 'tlalts'; bar.addEventListener('pointerdown', function (ev) { ev.preventDefault(); }); bar.addEventListener('mousedown', function (ev) { ev.preventDefault(); }); }
    var host = el.closest('.cluerow') || el;
    host.parentNode.insertBefore(bar, host.nextSibling);
    bar.innerHTML = '<small>\u0c35\u0c47\u0c30\u0c47 \u0c30\u0c42\u0c2a\u0c02?</small>' + alts.map(function (a, i) { return '<button type="button" data-act="tl-alt" data-v="' + i + '"' + (a === tel ? ' aria-pressed="true"' : '') + '>' + esc(a) + '</button>'; }).join('');
  }
  // A phone keyboard (Gboard) holds the word being typed as "composing" text: a word put into the box by the app while that
  // is going on is undone by the keyboard a moment later, so the tap seemed to need repeating. So: first let the keyboard
  // finish its word (blur and focus again), then replace the text the way typing does (insertText), which keyboards follow.
  var COMPOSING = null;
  function settleIME(el, fn) {
    if (!el || COMPOSING !== el) { fn(); return; }
    U.imeSettle = true; try { el.blur(); } catch (e) {}
    setTimeout(function () { COMPOSING = null; try { el.focus({ preventScroll: true }); } catch (e) {} U.imeSettle = false; fn(); }, 40);
  }
  function replaceRange(el, start, end, text) {
    var ok = false;
    try { el.focus({ preventScroll: true }); el.setSelectionRange(start, end); ok = document.execCommand && document.execCommand('insertText', false, text); } catch (e) { ok = false; }
    if (ok && el.value.slice(start, start + text.length) === text) return;   // the browser fired 'input' itself
    el.value = el.value.slice(0, start) + text + el.value.slice(end);
    try { el.setSelectionRange(start + text.length, start + text.length); } catch (e) {}
    el.dispatchEvent(new Event('input', { bubbles: true }));
  }
  function pickAlt(i) {
    var A = U.tlAlt; if (!A || !A.el || !document.body.contains(A.el)) return;
    var el = A.el, cur = el.value.slice(A.start, A.start + A.len), alt = A.alts[i]; if (alt == null) return;
    if (cur !== A.alts.filter(function (x) { return x === cur; })[0]) return;   // the text has moved on since
    settleIME(el, function () {
      replaceRange(el, A.start, A.start + A.len, alt); A.len = alt.length;
      var np = A.start + alt.length + 1; try { el.setSelectionRange(np, np); } catch (e) {}
    });
    var bar = document.getElementById('tlalts'); if (bar) bar.querySelectorAll('button').forEach(function (b, j) { b.setAttribute('aria-pressed', String(A.alts[j] === alt)); });
  }
  // fields where English typing turns Telugu: clue text (draft and reading screen), title, the fix box
  function setPic(k, url) { if (!D) return; if (k === 'blk') D.blkImg = url; else D.finImg = url; U.picOpen = ''; saveDraft(); render(); toast((k === 'blk' ? '\u0c28\u0c32\u0c41\u0c2a\u0c41 \u0c17\u0c21\u0c41\u0c32' : '\u0c05\u0c2d\u0c3f\u0c28\u0c02\u0c26\u0c28\u0c32') + ' \u0c2c\u0c4a\u0c2e\u0c4d\u0c2e \u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3e\u0c02 \u2014 \u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c3f\u0c02\u0c1a\u0c3f\u0c28\u0c2a\u0c4d\u0c2a\u0c41\u0c21\u0c41 / \u0c38\u0c30\u0c3f\u0c26\u0c3f\u0c26\u0c4d\u0c26\u0c3f\u0c28\u0c2a\u0c4d\u0c2a\u0c41\u0c21\u0c41 \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d\u200c\u0c32\u0c4b\u0c15\u0c3f \u0c35\u0c46\u0c33\u0c4d\u0c24\u0c41\u0c02\u0c26\u0c3f.'); }
  // a picture from the phone goes to the admin's Google Drive (through the admin script) and the post shows it from there
  function uploadPic(k, file) {
    if (!file || U.busy) return;
    if (!/^image\/(gif|png|jpeg|webp)$/.test(file.type)) { toast('GIF, PNG, JPG \u0c32\u0c47\u0c26\u0c3e WEBP \u0c2c\u0c4a\u0c2e\u0c4d\u0c2e \u0c07\u0c35\u0c4d\u0c35\u0c02\u0c21\u0c3f.'); return; }
    if (file.size > 6 * 1024 * 1024) { toast('\u0c2c\u0c4a\u0c2e\u0c4d\u0c2e 6 MB \u0c32\u0c4b\u0c2a\u0c41 \u0c09\u0c02\u0c21\u0c3e\u0c32\u0c3f.'); return; }
    U.busy = 'upload'; U.status = { kind: 'wait', text: '\u0c2c\u0c4a\u0c2e\u0c4d\u0c2e\u0c28\u0c41 Google Drive \u0c15\u0c41 \u0c2a\u0c02\u0c2a\u0c41\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c02\u2026 (' + Math.round(file.size / 1024) + ' KB)' }; render();
    blobToB64(file).then(function (b64) { return svc('upload', { name: file.name, mime: file.type, data: b64 }); }).then(function (r) {
      U.busy = ''; S.myPics = [{ kind: k, url: r.url }].concat((S.myPics || []).filter(function (x) { return x.url !== r.url; })).slice(0, 20);
      U.status = { kind: 'ok', text: '\u0c2c\u0c4a\u0c2e\u0c4d\u0c2e Drive \u0c32\u0c4b \u0c2a\u0c46\u0c1f\u0c4d\u0c1f\u0c3e\u0c02. \u0c15\u0c3f\u0c02\u0c26 \u0c1a\u0c42\u0c21\u0c02\u0c21\u0c3f \u2014 \u0c15\u0c26\u0c32\u0c3e\u0c32\u0c4d\u0c38\u0c3f\u0c28 GIF \u0c15\u0c26\u0c32\u0c15\u0c2a\u0c4b\u0c24\u0c47, \u0c06 GIF \u0c28\u0c41 Blogger \u0c32\u0c4b \u0c0f\u0c26\u0c48\u0c28\u0c3e \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d\u200c\u0c32\u0c4b \u0c2a\u0c46\u0c1f\u0c4d\u0c1f\u0c3f \u0c26\u0c3e\u0c28\u0c3f \u0c32\u0c3f\u0c02\u0c15\u0c4d \u0c07\u0c15\u0c4d\u0c15\u0c21 \u201c\u0c32\u0c3f\u0c02\u0c15\u0c4d\u201d \u0c32\u0c4b \u0c07\u0c35\u0c4d\u0c35\u0c02\u0c21\u0c3f.' };
      setPic(k, r.url);
    }, function (e) {
      U.busy = '';
      U.status = { kind: 'err', text: e && (e.code === 'drive_off' || e.code === 'bad_request') ? '\u0c05\u0c21\u0c4d\u0c2e\u0c3f\u0c28\u0c4d \u0c38\u0c4d\u0c15\u0c4d\u0c30\u0c3f\u0c2a\u0c4d\u0c1f\u0c4d\u200c\u0c15\u0c41 Google Drive \u0c05\u0c28\u0c41\u0c2e\u0c24\u0c3f \u0c07\u0c02\u0c15\u0c3e \u0c32\u0c47\u0c26\u0c41: (1) Cloud console \u2192 APIs & Services \u2192 Library \u2192 \u201cGoogle Drive API\u201d \u2192 Enable; (2) script \u0c32\u0c4b \u0c15\u0c4a\u0c24\u0c4d\u0c24 Code.gs, appsscript.json \u0c05\u0c24\u0c3f\u0c15\u0c3f\u0c02\u0c1a\u0c3f, setup \u0c28\u0c3f \u0c12\u0c15\u0c38\u0c3e\u0c30\u0c3f Run \u0c1a\u0c47\u0c38\u0c3f Drive \u0c15\u0c41 Allow \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c02\u0c21\u0c3f; (3) Deploy \u2192 Manage deployments \u2192 \u270f\ufe0f \u2192 New version. \u0c05\u0c2a\u0c4d\u0c2a\u0c1f\u0c3f\u0c35\u0c30\u0c15\u0c41 \u201c\u0c32\u0c3f\u0c02\u0c15\u0c4d\u201d \u0c32\u0c47\u0c26\u0c3e \u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d \u0c2c\u0c4a\u0c2e\u0c4d\u0c2e\u0c32 \u0c28\u0c41\u0c02\u0c1a\u0c3f \u0c0e\u0c02\u0c1a\u0c41\u0c15\u0c4b\u0c35\u0c1a\u0c4d\u0c1a\u0c41.' + (e.error ? ' (' + e.error + ')' : '') : svcErr(e) };
      render();
    });
  }
  function teHintHTML() {
    var on = S.prefs.teType !== false;
    return '<div class="tehint"><button class="smallbtn" data-act="te-type" aria-pressed="' + on + '">' + (on ? '\u2713 ' : '') + 'English \u2192 \u0c24\u0c46\u0c32\u0c41\u0c17\u0c41</button><small>' +
      (on ? '\u0c06\u0c02\u0c17\u0c4d\u0c32 \u0c05\u0c15\u0c4d\u0c37\u0c30\u0c3e\u0c32\u0c24\u0c4b \u0c1f\u0c48\u0c2a\u0c4d \u0c1a\u0c47\u0c38\u0c3f \u0c38\u0c4d\u0c2a\u0c47\u0c38\u0c4d \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c3f\u0c24\u0c47 \u0c24\u0c46\u0c32\u0c41\u0c17\u0c41 \u0c05\u0c35\u0c41\u0c24\u0c41\u0c02\u0c26\u0c3f: <b>dhanam</b> \u2192 \u0c27\u0c28\u0c02, <b>vennela</b> \u2192 \u0c35\u0c46\u0c28\u0c4d\u0c28\u0c46\u0c32, <b>Sh</b>=\u0c37, <b>T</b>=\u0c1f, <b>D</b>=\u0c21, <b>N</b>=\u0c23, <b>L</b>=\u0c33, <b>aa ee oo</b> \u0c26\u0c40\u0c30\u0c4d\u0c18\u0c3e\u0c32\u0c41. \u0c2a\u0c26\u0c02 \u0c15\u0c3f\u0c02\u0c26 \u0c35\u0c47\u0c30\u0c47 \u0c30\u0c42\u0c2a\u0c3e\u0c32\u0c41 \u0c35\u0c38\u0c4d\u0c24\u0c3e\u0c2f\u0c3f \u2014 \u0c38\u0c30\u0c48\u0c28\u0c26\u0c3f \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c02\u0c21\u0c3f.' : '\u0c06\u0c2b\u0c4d\u200c\u0c32\u0c4b \u0c09\u0c02\u0c26\u0c3f \u2014 \u0c2b\u0c4b\u0c28\u0c4d \u0c24\u0c46\u0c32\u0c41\u0c17\u0c41 \u0c15\u0c40\u0c2c\u0c4b\u0c30\u0c4d\u0c21\u0c4d\u200c\u0c24\u0c4b \u0c1f\u0c48\u0c2a\u0c4d \u0c1a\u0c47\u0c2f\u0c35\u0c1a\u0c4d\u0c1a\u0c41.') + '</small></div>';
  }
  function teField(t) { return t && (t.id === 'fix-in' || (t.getAttribute && (t.getAttribute('data-f') === 'text' || t.hasAttribute('data-ocr') || t.getAttribute('data-df') === 'title'))); }
  function doneView(id) {
    var p = findPuzzle(id), P = S.prog[id];
    if (!p && DATA_STATE === 'loading') return '<div class="page gutter">' + loaderHTML() + '</div>';
    if (!p || !P || !P.done) return '<div class="page gutter done"><div class="art">' + congrats(0) + '</div><h1 class="cheer" style="font-size:40px">\u0c07\u0c02\u0c15\u0c3e \u0c2a\u0c42\u0c30\u0c4d\u0c24\u0c3f \u0c15\u0c3e\u0c32\u0c47\u0c26\u0c41</h1><p class="note">\u0c05\u0c28\u0c4d\u0c28\u0c3f \u0c17\u0c21\u0c41\u0c32\u0c42 \u0c38\u0c30\u0c3f\u0c17\u0c4d\u0c17\u0c3e \u0c28\u0c3f\u0c02\u0c2a\u0c17\u0c3e\u0c28\u0c47 \u0c07\u0c15\u0c4d\u0c15\u0c21 \u0c05\u0c2d\u0c3f\u0c28\u0c02\u0c26\u0c28\u0c32\u0c41 \u0c15\u0c28\u0c3f\u0c2a\u0c3f\u0c38\u0c4d\u0c24\u0c3e\u0c2f\u0c3f.</p><div class="btncol"><a class="wide-btn pri" href="#play-' + esc(id) + '">\u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c35\u0c46\u0c33\u0c4d\u0c33\u0c02\u0c21\u0c3f</a></div></div>';
    var hasAns = model(p).hasAns, vi = U.showVariant === null ? P.variant : U.showVariant;
    var dots = VARIANTS.map(function (v, i) { return '<button data-act="variant" data-v="' + i + '" aria-label="' + v.label + '" aria-pressed="' + (i === vi) + '"><i></i></button>'; }).join('');
    return '<div class="page gutter done">' +
      '<div style="align-self:stretch;display:flex;justify-content:flex-end"><a class="iconbtn" href="#home" aria-label="\u0c2e\u0c42\u0c38\u0c3f\u0c35\u0c47\u0c2f\u0c3f">' + I.close + '</a></div>' +
      '<div class="art">' + congrats(vi) + '</div><div class="dots" role="group" aria-label="\u0c05\u0c2d\u0c3f\u0c28\u0c02\u0c26\u0c28\u0c32 \u0c2c\u0c4a\u0c2e\u0c4d\u0c2e">' + dots + '</div>' +
      '<h1 class="cheer">\u0c05\u0c2d\u0c3f\u0c28\u0c02\u0c26\u0c28\u0c32\u0c41' + (S.profile.name ? ', ' + esc(S.profile.name) : '') + '!</h1><p class="note" style="font-size:15px">' + esc(p.title) + (p.date ? ' \u00b7 ' + esc(p.date) : '') + ' ' + (hasAns ? '\u0c2a\u0c42\u0c30\u0c4d\u0c24\u0c3f \u0c1a\u0c47\u0c36\u0c3e\u0c30\u0c41' : '\u0c05\u0c28\u0c4d\u0c28\u0c3f \u0c17\u0c21\u0c41\u0c32\u0c42 \u0c28\u0c3f\u0c02\u0c2a\u0c3e\u0c30\u0c41. \u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32\u0c41 \u0c1a\u0c47\u0c30\u0c4d\u0c1a\u0c17\u0c3e\u0c28\u0c47 \u0c38\u0c30\u0c3f\u0c1a\u0c42\u0c38\u0c41\u0c15\u0c4b\u0c02\u0c21\u0c3f.') + '</p>' +
      '<div class="stats"><div class="stat"><small>\u0c38\u0c2e\u0c2f\u0c02</small><b>' + fmt(P.doneTime) + '</b></div><div class="stat"><small>\u0c35\u0c3e\u0c21\u0c3f\u0c28 \u0c38\u0c42\u0c1a\u0c28\u0c32\u0c41</small><b>' + P.hints + '</b></div></div>' +
      '<div class="btncol"><a class="wide-btn pri" href="#play-' + esc(id) + '">\u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32\u0c41 \u0c1a\u0c42\u0c21\u0c02\u0c21\u0c3f</a>' +
      '<button class="wide-btn sec" data-act="copy" data-id="' + esc(id) + '">' + I.copy + ' \u0c38\u0c02\u0c26\u0c47\u0c36\u0c02 \u0c15\u0c3e\u0c2a\u0c40 \u0c1a\u0c47\u0c2f\u0c02\u0c21\u0c3f</button>' +
      '<button class="wide-btn ter" data-act="replay" data-id="' + esc(id) + '">' + (U.confirm === 'replay' ? '\u0c16\u0c1a\u0c4d\u0c1a\u0c3f\u0c24\u0c2e\u0c3e? \u0c17\u0c21\u0c3f \u0c16\u0c3e\u0c33\u0c40 \u0c05\u0c35\u0c41\u0c24\u0c41\u0c02\u0c26\u0c3f \u2014 \u0c2e\u0c33\u0c4d\u0c33\u0c40 \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c02\u0c21\u0c3f' : '\u0c2e\u0c33\u0c4d\u0c33\u0c40 \u0c06\u0c21\u0c02\u0c21\u0c3f') + '</button>' +
      '<a class="wide-btn link" href="#home">\u0c39\u0c4b\u0c2e\u0c4d\u200c\u0c15\u0c41 \u0c35\u0c46\u0c33\u0c4d\u0c33\u0c02\u0c21\u0c3f ' + I.arrow + '</a></div></div>';
  }
  function fq(n) { return previewStack(n).replace(/'/g, '&#39;'); }
  function fontSettingsHTML() {
    var p = S.prefs;
    var sets = FONTSETS.map(function (f) {
      var on = p.fontGrid === f[2] && p.fontClue === f[3] && p.fontHead === f[4], g = FONT[f[2]], c = FONT[f[3]], h = FONT[f[4]];
      return '<button class="fset" data-act="fontset" data-v="' + f[0] + '" aria-pressed="' + on + '">' +
        '<span class="nm" style="font-family:' + fq(f[4]) + ';font-size:' + (19 * Math.min(1.3, h.s)).toFixed(1) + 'px">' + f[1] + '</span>' +
        '<span class="tiles" aria-hidden="true">' + ['\u0c15', '\u0c2e', '\u0c32\u0c02'].map(function (a) { return '<span style="font-family:' + fq(f[2]) + ';font-size:' + (13 * g.s).toFixed(1) + 'px;font-weight:' + (g.w > 400 ? 600 : 400) + '">' + a + '</span>'; }).join('') + '</span>' +
        '<span class="cl" style="font-family:' + fq(f[3]) + ';font-size:' + (14 * Math.min(1.25, c.s)).toFixed(1) + 'px">\u0c24\u0c3e\u0c2e\u0c30 \u0c2a\u0c41\u0c35\u0c4d\u0c35\u0c41 (3)</span></button>';
    }).join('');
    var picks = ['g', 'c', 'h'].map(function (kd) {
      var K = FONT_KINDS[kd], cur = FONT[p[K[0]]] || FONT.Ramabhadra, open = U.fontOpen === kd;
      var row = '<button class="fpick" data-act="fontopen" data-v="' + kd + '" aria-expanded="' + open + '"><span class="t"><small>' + K[1] + '</small><span class="s" style="font-family:' + fq(cur.n) + ';font-size:' + (20 * Math.min(1.3, cur.s)).toFixed(1) + 'px">' + K[2] + '</span></span><span class="fn">' + cur.n + '</span><span class="chev" aria-hidden="true">' + (open ? '\u25b4' : '\u25be') + '</span></button>';
      if (!open) return row;
      return row + '<div class="flist">' + FONTLIST.filter(function (f) { return f[3].indexOf(kd) >= 0; }).map(function (f) {
        return '<button class="font" data-act="pref" data-k="' + K[0] + '" data-v="' + f[0] + '" aria-pressed="' + (p[K[0]] === f[0]) + '"><span class="dot" aria-hidden="true"></span><span class="t"><span class="s" style="font-family:' + fq(f[0]) + ';font-size:' + (20 * Math.min(1.35, f[1])).toFixed(1) + 'px">' + K[2] + '</span><small>' + f[0] + ' \u00b7 ' + f[4] + '</small></span></button>';
      }).join('') + '</div>';
    }).join('');
    return '<div class="fld"><h3>\u0c2b\u0c3e\u0c02\u0c1f\u0c4d \u0c38\u0c46\u0c1f\u0c4d</h3><p class="note">\u0c12\u0c15\u0c4d\u0c15 \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c41\u0c24\u0c4b \u0c17\u0c21\u0c3f, \u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32\u0c41, \u0c36\u0c40\u0c30\u0c4d\u0c37\u0c3f\u0c15\u0c32\u0c15\u0c41 \u0c1c\u0c24\u0c17\u0c3e \u0c09\u0c02\u0c21\u0c47 \u0c2b\u0c3e\u0c02\u0c1f\u0c4d\u200c\u0c32\u0c41.</p><div class="fsets">' + sets + '</div></div>' +
      '<div class="fld"><h3>\u0c35\u0c3f\u0c21\u0c3f\u0c35\u0c3f\u0c21\u0c3f\u0c17\u0c3e \u0c0e\u0c02\u0c1a\u0c41\u0c15\u0c4b\u0c02\u0c21\u0c3f</h3><div class="fpicks">' + picks + '</div></div>';
  }
  function prefsFontsToPreview() {
    var names = []; FONTSETS.forEach(function (f) { names.push(f[2], f[3], f[4]); });
    ['g', 'c', 'h'].forEach(function (kd) { names.push(S.prefs[FONT_KINDS[kd][0]]); });
    if (U.fontOpen) FONTLIST.forEach(function (f) { if (f[3].indexOf(U.fontOpen) >= 0) names.push(f[0]); });
    return Array.from(new Set(names));
  }
  // download card for the latest APK on GitHub (shown only when the file is really there, never inside the app itself)
  function apkCardHTML(compact) {
    if (IS_CLAUDE || IN_APK || !APK.ok) return '';
    return '<a class="apkcard' + (compact ? ' sm' : '') + '" href="' + APK.file + '" download="e-padavinodam.apk">' +
      '<span class="apkic" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11"></path><path d="m7 10 5 5 5-5"></path><path d="M5 20h14"></path></svg></span><span class="t"><b>Android \u0c2f\u0c3e\u0c2a\u0c4d \u0c21\u0c4c\u0c28\u0c4d\u200c\u0c32\u0c4b\u0c21\u0c4d (APK)</b>' +
      '<small>' + (APK.mb ? APK.mb.toFixed(1) + ' MB \u00b7 ' : '') + '\u0c07\u0c28\u0c4d\u200c\u0c38\u0c4d\u0c1f\u0c3e\u0c32\u0c4d \u0c1a\u0c47\u0c38\u0c47\u0c1f\u0c2a\u0c4d\u0c2a\u0c41\u0c21\u0c41 \u0c2b\u0c4b\u0c28\u0c4d \u0c05\u0c21\u0c3f\u0c17\u0c3f\u0c24\u0c47 \u201c\u0c08 \u0c38\u0c4b\u0c30\u0c4d\u0c38\u0c4d \u0c28\u0c41\u0c02\u0c1a\u0c3f \u0c05\u0c28\u0c41\u0c2e\u0c24\u0c3f\u0c02\u0c1a\u0c41\u201d \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c02\u0c21\u0c3f.</small></span></a>';
  }
  function checkApk() {
    if (IS_CLAUDE || IN_APK) return;
    fetch(APK.file, { method: 'HEAD', cache: 'no-store' }).then(function (r) {
      if (!r.ok) return;
      APK.ok = true; APK.mb = (+r.headers.get('content-length') || 0) / 1048576;
      var rt = route(); if (rt === 'home' || rt === 'prefs' || rt === '') render();
    }).catch(function () {});
  }
  var COLORS = [['#F2A93B', '\u0c2c\u0c02\u0c24\u0c3f\u0c2a\u0c42\u0c32\u0c41', '#8E2C2C'], ['#6FA27A', '\u0c24\u0c41\u0c32\u0c38\u0c3f', '#2E6B47'], ['#D9644A', '\u0c15\u0c41\u0c02\u0c15\u0c41\u0c2e', '#B23A26'], ['#A48BD6', '\u0c0a\u0c26\u0c3e', '#5B3F9E'], ['#5DA9E9', '\u0c28\u0c40\u0c32\u0c02', '#1F5F99']];
  function colorSwatchesHTML() {
    return '<div class="swatches">' + COLORS.map(function (c) {
      return '<button class="swpick" data-act="pref" data-k="accent" data-v="' + c[0] + '" aria-pressed="' + (S.prefs.accent === c[0]) + '"><span class="swatch" style="background:linear-gradient(135deg,' + c[2] + ' 0 50%,' + c[0] + ' 50% 100%)"></span><small>' + c[1] + '</small></button>';
    }).join('') + '</div>';
  }
  function profileView() {
    var pr = S.profile, st = playerStats(), list = others();
    var av = AVATARS.map(function (a) { return '<button class="avopt" data-act="avatar" data-v="' + a + '" aria-pressed="' + (pr.avatar === a) + '" aria-label="\u0c2c\u0c4a\u0c2e\u0c4d\u0c2e ' + a + '">' + a + '</button>'; }).join('');
    var people = list.map(function (o) {
      var op = o.profile || {}, ost = playerStats(o), conf = U.confirm === 'pdel:' + op.id;
      return '<div class="mgr"><span class="avatar sm" aria-hidden="true">' + esc(op.avatar || '\ud83d\ude42') + '</span><span class="t"><b>' + esc(op.name || '\u0c2a\u0c47\u0c30\u0c41 \u0c32\u0c47\u0c28\u0c3f \u0c06\u0c1f\u0c17\u0c3e\u0c21\u0c41') + '</b><small>' + ost.done + ' \u0c2a\u0c42\u0c30\u0c4d\u0c24\u0c3f \u0c1a\u0c47\u0c36\u0c3e\u0c30\u0c41</small></span>' +
        (conf ? '<button class="smallbtn danger" data-act="pdel-yes" data-v="' + esc(op.id) + '">\u0c05\u0c35\u0c41\u0c28\u0c41, \u0c24\u0c4a\u0c32\u0c17\u0c3f\u0c02\u0c1a\u0c41</button><button class="smallbtn" data-act="pdel-no">\u0c35\u0c26\u0c4d\u0c26\u0c41</button>'
              : '<button class="smallbtn" data-act="pswitch" data-v="' + esc(op.id) + '">\u0c2e\u0c3e\u0c30\u0c02\u0c21\u0c3f</button><button class="smallbtn danger" data-act="pdel" data-v="' + esc(op.id) + '" aria-label="\u0c24\u0c4a\u0c32\u0c17\u0c3f\u0c02\u0c1a\u0c41">\u2715</button>') + '</div>';
    }).join('');
    return '<div class="page gutter"><header class="apphead"><h1 class="apptitle" style="font-size:36px">\u0c28\u0c3e \u0c2a\u0c4d\u0c30\u0c4a\u0c2b\u0c48\u0c32\u0c4d</h1></header>' +
      '<section class="sec"><div class="box profcard"><span class="avatar big" aria-hidden="true">' + esc(pr.avatar) + '</span><div class="fld" style="flex:1;min-width:0"><label class="lbl" for="prof-name">\u0c2e\u0c40 \u0c2a\u0c47\u0c30\u0c41</label><input id="prof-name" class="inp" maxlength="30" autocomplete="nickname" value="' + esc(pr.name) + '" placeholder="\u0c09\u0c26\u0c3e: \u0c38\u0c41\u0c2c\u0c4d\u0c2c\u0c2f\u0c4d\u0c2f"><p class="note">\u0c39\u0c4b\u0c2e\u0c4d\u200c\u0c32\u0c4b \u0c2a\u0c32\u0c15\u0c30\u0c3f\u0c02\u0c2a\u0c41, \u0c05\u0c2d\u0c3f\u0c28\u0c02\u0c26\u0c28\u0c32\u0c4d\u0c32\u0c4b \u0c2e\u0c40 \u0c2a\u0c47\u0c30\u0c47 \u0c35\u0c38\u0c4d\u0c24\u0c41\u0c02\u0c26\u0c3f.</p></div></div></section>' +
      '<section class="sec"><h2 class="sec-h">\u0c2e\u0c40 \u0c2c\u0c4a\u0c2e\u0c4d\u0c2e</h2><div class="box"><div class="avgrid">' + av + '</div></div></section>' +
      '<section class="sec"><h2 class="sec-h">\u0c2e\u0c40 \u0c30\u0c02\u0c17\u0c41</h2><div class="box">' + colorSwatchesHTML() + '</div></section>' +
      '<section class="sec"><h2 class="sec-h">\u0c2e\u0c40 \u0c06\u0c1f</h2><div class="box"><div class="stats">' +
        '<div class="stat"><small>\u0c2a\u0c42\u0c30\u0c4d\u0c24\u0c3f \u0c1a\u0c47\u0c38\u0c3f\u0c28\u0c35\u0c3f</small><b>' + st.done + '</b></div>' +
        '<div class="stat"><small>\u0c09\u0c24\u0c4d\u0c24\u0c2e \u0c38\u0c2e\u0c2f\u0c02</small><b>' + (st.best ? fmt(st.best) : '\u2014') + '</b></div>' +
        '<div class="stat"><small>\u0c38\u0c17\u0c1f\u0c41 \u0c38\u0c2e\u0c2f\u0c02</small><b>' + (st.avg ? fmt(Math.round(st.avg)) : '\u2014') + '</b></div>' +
        '<div class="stat"><small>\u0c35\u0c3e\u0c21\u0c3f\u0c28 \u0c38\u0c42\u0c1a\u0c28\u0c32\u0c41</small><b>' + st.hints + '</b></div></div>' +
        '<p class="note">' + (st.started > st.done ? (st.started - st.done) + ' \u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c3e\u0c32\u0c41 \u0c2e\u0c27\u0c4d\u0c2f\u0c32\u0c4b \u0c09\u0c28\u0c4d\u0c28\u0c3e\u0c2f\u0c3f.' : '\u0c15\u0c4a\u0c24\u0c4d\u0c24 \u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02 \u0c2e\u0c4a\u0c26\u0c32\u0c41\u0c2a\u0c46\u0c1f\u0c4d\u0c1f\u0c02\u0c21\u0c3f!') + '</p></div></section>' +
      '<section class="sec"><h2 class="sec-h">\u0c08 \u0c2b\u0c4b\u0c28\u0c4d\u200c\u0c32\u0c4b \u0c06\u0c1f\u0c17\u0c3e\u0c33\u0c4d\u0c32\u0c41</h2><div class="box">' +
        '<div class="mgr"><span class="avatar sm" aria-hidden="true">' + esc(pr.avatar) + '</span><span class="t"><b>' + esc(pr.name || '\u0c2e\u0c40\u0c30\u0c41') + '</b><small>\u0c07\u0c2a\u0c4d\u0c2a\u0c41\u0c21\u0c41 \u0c06\u0c21\u0c41\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c26\u0c3f</small></span></div>' + people +
        '<div class="tl-row" style="margin-top:6px"><input id="prof-new" class="inp" maxlength="30" placeholder="\u0c15\u0c4a\u0c24\u0c4d\u0c24 \u0c06\u0c1f\u0c17\u0c3e\u0c21\u0c3f \u0c2a\u0c47\u0c30\u0c41"><button class="smallbtn pri" data-act="padd">\u0c1a\u0c47\u0c30\u0c4d\u0c1a\u0c02\u0c21\u0c3f</button></div>' +
        '<p class="note">\u0c12\u0c15\u0c47 \u0c2b\u0c4b\u0c28\u0c4d\u200c\u0c32\u0c4b \u0c07\u0c02\u0c1f\u0c4d\u0c32\u0c4b \u0c05\u0c02\u0c26\u0c30\u0c42 \u0c06\u0c21\u0c4a\u0c1a\u0c4d\u0c1a\u0c41: \u0c12\u0c15\u0c4d\u0c15\u0c4a\u0c15\u0c4d\u0c15\u0c30\u0c3f\u0c15\u0c40 \u0c35\u0c3e\u0c30\u0c3f \u0c30\u0c02\u0c17\u0c41, \u0c2b\u0c3e\u0c02\u0c1f\u0c4d\u200c\u0c32\u0c41, \u0c05\u0c2e\u0c30\u0c3f\u0c15\u0c32\u0c41, \u0c06\u0c1f \u0c2a\u0c41\u0c30\u0c4b\u0c17\u0c24\u0c3f \u0c35\u0c47\u0c30\u0c41\u0c17\u0c3e \u0c09\u0c02\u0c1f\u0c3e\u0c2f\u0c3f.</p></div></section></div>';
  }
  function prefsView() {
    var p = S.prefs;
    function seg(k, opts, label) { return '<div class="seg wide" role="group" aria-label="' + label + '">' + opts.map(function (o) { return '<button data-act="pref" data-k="' + k + '" data-v="' + o[0] + '" aria-pressed="' + (k === 'hard' ? String(+p.hard) === o[0] : String(p[k]) === o[0]) + '">' + o[1] + '</button>'; }).join('') + '</div>'; }
    function toggle(k, title, sub, extra) { return '<button class="sw-row" data-act="toggle" data-k="' + k + '" aria-pressed="' + !!p[k] + '">' + (extra || '') + '<span class="t"><b>' + title + '</b><small>' + sub + '</small></span><span class="sw" aria-hidden="true"></span></button>'; }
    var sw = colorSwatchesHTML();
    var fonts = fontSettingsHTML();
    return '<div class="page gutter"><header class="apphead"><h1 class="apptitle" style="font-size:36px">\u0c05\u0c2e\u0c30\u0c3f\u0c15\u0c32\u0c41</h1></header>' +
      '<section class="sec"><h2 class="sec-h">\u0c30\u0c42\u0c2a\u0c02</h2><div class="box"><div class="fld"><h3>\u0c25\u0c40\u0c2e\u0c4d</h3>' + seg('theme', [['auto', '\u0c06\u0c1f\u0c4b'], ['cozy', '\u0c39\u0c3e\u0c2f\u0c3f'], ['night', '\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f'], ['white', '\u0c24\u0c46\u0c32\u0c41\u0c2a\u0c41']], '\u0c25\u0c40\u0c2e\u0c4d') + '<p class="note">\u0c06\u0c1f\u0c4b: \u0c2e\u0c40 \u0c2b\u0c4b\u0c28\u0c4d \u0c32\u0c48\u0c1f\u0c4d/\u0c21\u0c3e\u0c30\u0c4d\u0c15\u0c4d \u0c38\u0c46\u0c1f\u0c4d\u0c1f\u0c3f\u0c02\u0c17\u0c4d\u200c\u0c28\u0c41 \u0c05\u0c28\u0c41\u0c38\u0c30\u0c3f\u0c38\u0c4d\u0c24\u0c41\u0c02\u0c26\u0c3f.</p></div><div class="fld"><h3>\u0c2f\u0c3e\u0c2a\u0c4d \u0c30\u0c02\u0c17\u0c41</h3>' + sw + '<p class="note">\u0c2c\u0c1f\u0c28\u0c4d\u0c32\u0c41, \u0c36\u0c40\u0c30\u0c4d\u0c37\u0c3f\u0c15\u0c32\u0c41, \u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32 \u0c2a\u0c1f\u0c4d\u0c1f\u0c40, \u0c0e\u0c02\u0c1a\u0c41\u0c15\u0c41\u0c28\u0c4d\u0c28 \u0c17\u0c21\u0c3f \u0c05\u0c28\u0c4d\u0c28\u0c40 \u0c08 \u0c30\u0c02\u0c17\u0c41\u0c32\u0c4b\u0c15\u0c3f \u0c2e\u0c3e\u0c30\u0c41\u0c24\u0c3e\u0c2f\u0c3f. \u0c38\u0c30\u0c48\u0c28/\u0c24\u0c2a\u0c4d\u0c2a\u0c41 \u0c17\u0c21\u0c41\u0c32 \u0c30\u0c02\u0c17\u0c41\u0c32\u0c41 \u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d\u200c\u0c32\u0c4b\u0c32\u0c3e\u0c17\u0c47 \u0c09\u0c02\u0c1f\u0c3e\u0c2f\u0c3f.</p></div>' + '<div class="fld"><h3>\u0c28\u0c32\u0c4d\u0c32 \u0c17\u0c21\u0c41\u0c32\u0c4d\u0c32\u0c4b \u0c2c\u0c4a\u0c2e\u0c4d\u0c2e\u0c32\u0c41</h3><div class="blkopts" role="group" aria-label="\u0c28\u0c32\u0c4d\u0c32 \u0c17\u0c21\u0c41\u0c32\u0c4d\u0c32\u0c4b \u0c2c\u0c4a\u0c2e\u0c4d\u0c2e\u0c32\u0c41">' +
        [['post', '\u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d \u0c2c\u0c4a\u0c2e\u0c4d\u0c2e (\u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d\u200c\u0c32\u0c4b\u0c26\u0c3f)', '<span class="blkrow"><span class="rainsample"></span><span class="rainsample" style="filter:hue-rotate(140deg)"></span></span>'], ['nature', '\u0c2a\u0c4d\u0c30\u0c15\u0c43\u0c24\u0c3f, \u0c1c\u0c02\u0c24\u0c41\u0c35\u0c41\u0c32\u0c41', '<span class="blkrow"><span class="scsample sc0"></span><span class="scsample sc2"></span><span class="scsample sc1"></span></span>'], ['rain', '\u0c35\u0c30\u0c4d\u0c37\u0c02 (\u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d)', '<span class="blkrow"><span class="rainsample"></span></span>'], ['plain', '\u0c28\u0c32\u0c41\u0c2a\u0c41', '<span class="blkrow"><span class="plainsample"></span></span>']].map(function (o) {
          return '<button class="blkopt" data-act="pref" data-k="blk" data-v="' + o[0] + '" aria-pressed="' + (p.blk === o[0]) + '">' + o[2] + '<span>' + o[1] + '</span></button>';
        }).join('') + '</div><p class="note">\u0c28\u0c3e\u0c1f\u0c4d\u0c2f\u0c02 \u0c1a\u0c47\u0c38\u0c47 \u0c28\u0c46\u0c2e\u0c32\u0c3f, \u0c18\u0c4b\u0c37\u0c3f\u0c02\u0c1a\u0c47 \u0c38\u0c2e\u0c41\u0c26\u0c4d\u0c30\u0c02, \u0c17\u0c30\u0c4d\u0c1c\u0c3f\u0c02\u0c1a\u0c47 \u0c38\u0c3f\u0c02\u0c39\u0c02, \u0c35\u0c30\u0c4d\u0c37\u0c02, \u0c35\u0c3f\u0c15\u0c38\u0c3f\u0c02\u0c1a\u0c47 \u0c2a\u0c42\u0c32\u0c41, \u0c2e\u0c3f\u0c23\u0c41\u0c17\u0c41\u0c30\u0c41\u0c32\u0c41, \u0c1a\u0c02\u0c26\u0c4d\u0c30\u0c41\u0c23\u0c4d\u0c23\u0c3f \u0c1a\u0c42\u0c38\u0c47 \u0c2a\u0c3f\u0c32\u0c4d\u0c32\u0c3f, \u0c15\u0c4a\u0c32\u0c28\u0c41\u0c32\u0c4b \u0c1a\u0c47\u0c2a\u0c32\u0c41, \u0c38\u0c02\u0c27\u0c4d\u0c2f\u0c3e \u0c2a\u0c15\u0c4d\u0c37\u0c3f, \u0c38\u0c40\u0c24\u0c3e\u0c15\u0c4b\u0c15\u0c1a\u0c3f\u0c32\u0c41\u0c15, \u0c17\u0c41\u0c21\u0c4d\u0c32\u0c17\u0c42\u0c2c, \u0c1a\u0c3f\u0c32\u0c41\u0c15, \u0c30\u0c3e\u0c32\u0c47 \u0c06\u0c15\u0c41\u0c32\u0c41 \u2014 \u0c12\u0c15\u0c4d\u0c15\u0c4b \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d\u200c\u0c15\u0c41 \u0c12\u0c15 \u0c2c\u0c4a\u0c2e\u0c4d\u0c2e, \u0c06 \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d \u0c28\u0c32\u0c4d\u0c32 \u0c17\u0c21\u0c41\u0c32\u0c28\u0c4d\u0c28\u0c3f\u0c02\u0c1f\u0c3f\u0c32\u0c4b \u0c05\u0c26\u0c47; \u0c35\u0c3e\u0c30\u0c02 \u0c35\u0c3e\u0c30\u0c02 \u0c2e\u0c3e\u0c30\u0c41\u0c24\u0c41\u0c02\u0c26\u0c3f.</p></div>' + '</div></section>' +
      '<section class="sec"><h2 class="sec-h">\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41 \u0c2b\u0c3e\u0c02\u0c1f\u0c4d\u200c\u0c32\u0c41</h2><div class="box">' + fonts + '<div class="fld"><h3>\u0c17\u0c21\u0c3f\u0c32\u0c4b \u0c05\u0c15\u0c4d\u0c37\u0c30 \u0c2a\u0c30\u0c3f\u0c2e\u0c3e\u0c23\u0c02</h3>' + seg('size', [['s', '\u0c1a\u0c3f\u0c28\u0c4d\u0c28\u0c26\u0c3f'], ['m', '\u0c2e\u0c27\u0c4d\u0c2f\u0c38\u0c4d\u0c25\u0c02'], ['l', '\u0c2a\u0c46\u0c26\u0c4d\u0c26\u0c26\u0c3f']], '\u0c05\u0c15\u0c4d\u0c37\u0c30 \u0c2a\u0c30\u0c3f\u0c2e\u0c3e\u0c23\u0c02') + '</div></div></section>' +
      '<section class="sec"><h2 class="sec-h">\u0c06\u0c1f</h2><div class="box"><div class="fld"><h3>\u0c15\u0c37\u0c4d\u0c1f\u0c24</h3>' + seg('hard', [['0', '\u0c38\u0c41\u0c32\u0c2d\u0c02'], ['1', '\u0c15\u0c37\u0c4d\u0c1f\u0c02']], '\u0c15\u0c37\u0c4d\u0c1f\u0c24') + '<p class="note">' + (p.hard ? '\u0c15\u0c37\u0c4d\u0c1f\u0c02: \u0c1a\u0c3f\u0c35\u0c30\u0c3f 10 \u0c17\u0c21\u0c41\u0c32\u0c41 \u0c2e\u0c3f\u0c17\u0c3f\u0c32\u0c3f\u0c28\u0c2a\u0c4d\u0c2a\u0c41\u0c21\u0c47 \u0c38\u0c42\u0c1a\u0c28 \u0c2c\u0c32\u0c4d\u0c2c\u0c4d \u0c15\u0c28\u0c3f\u0c2a\u0c3f\u0c38\u0c4d\u0c24\u0c41\u0c02\u0c26\u0c3f.' : '\u0c38\u0c41\u0c32\u0c2d\u0c02: \u0c38\u0c42\u0c1a\u0c28 (\u0c2c\u0c32\u0c4d\u0c2c\u0c4d) \u0c2e\u0c4a\u0c26\u0c1f\u0c3f \u0c28\u0c41\u0c02\u0c1a\u0c47 \u0c0e\u0c2a\u0c4d\u0c2a\u0c41\u0c21\u0c48\u0c28\u0c3e \u0c35\u0c3e\u0c21\u0c4a\u0c1a\u0c4d\u0c1a\u0c41.') + ' \u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d\u200c\u0c32\u0c4b\u0c32\u0c3e\u0c17\u0c47 \u0c38\u0c30\u0c48\u0c28 \u0c05\u0c15\u0c4d\u0c37\u0c30\u0c02 \u0c06\u0c15\u0c41\u0c2a\u0c1a\u0c4d\u0c1a \u0c05\u0c02\u0c1a\u0c41\u0c24\u0c4b, \u0c24\u0c2a\u0c4d\u0c2a\u0c41 \u0c05\u0c15\u0c4d\u0c37\u0c30\u0c02 \u0c2a\u0c38\u0c41\u0c2a\u0c41 \u0c17\u0c21\u0c3f\u0c32\u0c4b \u0c0e\u0c30\u0c41\u0c2a\u0c41 \u0c05\u0c02\u0c1a\u0c41\u0c24\u0c4b \u0c15\u0c28\u0c3f\u0c2a\u0c3f\u0c38\u0c4d\u0c24\u0c3e\u0c2f\u0c3f.' + '</p></div>' + toggle('skip', '\u0c28\u0c3f\u0c02\u0c21\u0c3f\u0c28 \u0c17\u0c21\u0c41\u0c32\u0c41 \u0c26\u0c3e\u0c1f\u0c35\u0c47\u0c2f\u0c3f', '\u0c1f\u0c48\u0c2a\u0c4d \u0c1a\u0c47\u0c38\u0c47\u0c1f\u0c2a\u0c4d\u0c2a\u0c41\u0c21\u0c41 \u0c07\u0c2a\u0c4d\u0c2a\u0c1f\u0c3f\u0c15\u0c47 \u0c28\u0c3f\u0c02\u0c2a\u0c3f\u0c28 \u0c17\u0c21\u0c3f\u0c32\u0c4b\u0c15\u0c3f \u0c35\u0c46\u0c33\u0c4d\u0c33\u0c26\u0c41') + toggle('timer', '\u0c1f\u0c48\u0c2e\u0c30\u0c4d \u0c1a\u0c42\u0c2a\u0c3f\u0c02\u0c1a\u0c41', '\u0c0e\u0c02\u0c24 \u0c38\u0c47\u0c2a\u0c1f\u0c4d\u0c32\u0c4b \u0c2a\u0c42\u0c30\u0c4d\u0c24\u0c3f \u0c1a\u0c47\u0c36\u0c3e\u0c30\u0c4b \u0c30\u0c3f\u0c15\u0c3e\u0c30\u0c4d\u0c21\u0c4d \u0c05\u0c35\u0c41\u0c24\u0c41\u0c02\u0c26\u0c3f') + '</div></section>' +
      '<section class="sec"><h2 class="sec-h">\u0c1f\u0c48\u0c2a\u0c3f\u0c02\u0c17\u0c4d</h2><div class="box" style="gap:0;padding-block:6px"><button class="radio" data-act="pref" data-k="keypad" data-v="phone" aria-pressed="' + (p.keypad === 'phone') + '"><span class="dot" aria-hidden="true"></span><span class="t"><b>\u0c07\u0c02\u0c17\u0c4d\u0c32\u0c40\u0c37\u0c4d\u200c\u0c32\u0c4b \u0c1f\u0c48\u0c2a\u0c3f\u0c02\u0c17\u0c4d (\u0c38\u0c3f\u0c2b\u0c3e\u0c30\u0c4d\u0c38\u0c41)</b><small>\u0c2a\u0c42\u0c30\u0c4d\u0c24\u0c3f \u0c2a\u0c26\u0c02 \u0c1f\u0c48\u0c2a\u0c4d \u0c1a\u0c47\u0c2f\u0c02\u0c21\u0c3f \u2014 kamalam \u0c05\u0c02\u0c1f\u0c47 \u0c15\u0c2e\u0c32\u0c02, \u0c06 \u0c2a\u0c26\u0c02 \u0c17\u0c21\u0c41\u0c32\u0c4d\u0c32\u0c4b \u0c38\u0c30\u0c3f\u0c17\u0c4d\u0c17\u0c3e \u0c2a\u0c21\u0c41\u0c24\u0c41\u0c02\u0c26\u0c3f; \u0c24\u0c46\u0c32\u0c41\u0c17\u0c41 \u0c15\u0c40\u0c2c\u0c4b\u0c30\u0c4d\u0c21\u0c4d \u0c15\u0c42\u0c21\u0c3e \u0c2a\u0c28\u0c3f\u0c1a\u0c47\u0c38\u0c4d\u0c24\u0c41\u0c02\u0c26\u0c3f</small></span></button><button class="radio" data-act="pref" data-k="keypad" data-v="app" aria-pressed="' + (p.keypad === 'app') + '"><span class="dot" aria-hidden="true"></span><span class="t"><b>\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41 \u0c05\u0c15\u0c4d\u0c37\u0c30 \u0c15\u0c40\u0c2a\u0c4d\u0c2f\u0c3e\u0c21\u0c4d (\u0c2f\u0c3e\u0c2a\u0c4d\u200c\u0c32\u0c4b\u0c28\u0c3f\u0c26\u0c3f)</b><small>\u0c39\u0c32\u0c4d\u0c32\u0c41 + \u0c17\u0c41\u0c23\u0c3f\u0c02\u0c24\u0c02, \u0c12\u0c24\u0c4d\u0c24\u0c41\u0c32\u0c41 \u2014 \u0c12\u0c15\u0c4d\u0c15\u0c4b \u0c17\u0c21\u0c3f\u0c15\u0c3f \u0c12\u0c15 \u0c05\u0c15\u0c4d\u0c37\u0c30\u0c02</small></span></button></div></section>' +
      (apkCardHTML(false) ? '<section class="sec"><h2 class="sec-h">Android \u0c2f\u0c3e\u0c2a\u0c4d</h2>' + apkCardHTML(false) + '</section>' : '') +
      '<section class="sec"><h2 class="sec-h">Android \u0c2f\u0c3e\u0c2a\u0c4d\u200c\u0c32\u0c4b \u0c30\u0c3e\u0c2c\u0c4b\u0c2f\u0c47\u0c35\u0c3f</h2><div class="box"><ul class="soon"><li>\u0c15\u0c4a\u0c24\u0c4d\u0c24 \u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02 \u0c35\u0c38\u0c4d\u0c24\u0c47 \u0c28\u0c4b\u0c1f\u0c3f\u0c2b\u0c3f\u0c15\u0c47\u0c37\u0c28\u0c4d</li><li>English \u0c2d\u0c3e\u0c37\u0c32\u0c4b \u0c2f\u0c3e\u0c2a\u0c4d</li></ul>' + (IS_CLAUDE ? '' : '<p class="note">\u0c06\u0c2b\u0c4d\u200c\u0c32\u0c48\u0c28\u0c4d: \u0c12\u0c15\u0c38\u0c3e\u0c30\u0c3f \u0c24\u0c46\u0c30\u0c3f\u0c1a\u0c3f\u0c28 \u0c24\u0c30\u0c4d\u0c35\u0c3e\u0c24 \u0c07\u0c02\u0c1f\u0c30\u0c4d\u0c28\u0c46\u0c1f\u0c4d \u0c32\u0c47\u0c15\u0c41\u0c28\u0c4d\u0c28\u0c3e \u0c2f\u0c3e\u0c2a\u0c4d, \u0c1a\u0c3f\u0c35\u0c30\u0c3f\u0c38\u0c3e\u0c30\u0c3f \u0c32\u0c4b\u0c21\u0c4d \u0c05\u0c2f\u0c3f\u0c28 \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c41\u0c32\u0c41 \u0c24\u0c46\u0c30\u0c41\u0c1a\u0c41\u0c15\u0c41\u0c02\u0c1f\u0c3e\u0c2f\u0c3f.</p>') + '</div></section>' +
      '<section class="sec"><h2 class="sec-h">\u0c06\u0c1f \u0c2a\u0c41\u0c30\u0c4b\u0c17\u0c24\u0c3f</h2><div class="box"><p class="note">\u0c2e\u0c40 \u0c05\u0c2e\u0c30\u0c3f\u0c15\u0c32\u0c41, \u0c06\u0c1f \u0c2a\u0c41\u0c30\u0c4b\u0c17\u0c24\u0c3f \u0c08 \u0c2a\u0c30\u0c3f\u0c15\u0c30\u0c02\u0c32\u0c4b\u0c28\u0c47 \u0c38\u0c47\u0c35\u0c4d \u0c05\u0c35\u0c41\u0c24\u0c3e\u0c2f\u0c3f.</p><button class="wide-btn ter" data-act="resetall">' + (U.confirm === 'resetall' ? '\u0c16\u0c1a\u0c4d\u0c1a\u0c3f\u0c24\u0c2e\u0c3e? \u0c05\u0c28\u0c4d\u0c28\u0c3f \u0c06\u0c1f\u0c32 \u0c2a\u0c41\u0c30\u0c4b\u0c17\u0c24\u0c3f \u0c2a\u0c4b\u0c24\u0c41\u0c02\u0c26\u0c3f \u2014 \u0c2e\u0c33\u0c4d\u0c33\u0c40 \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c02\u0c21\u0c3f' : '\u0c05\u0c28\u0c4d\u0c28\u0c3f \u0c06\u0c1f\u0c32 \u0c2a\u0c41\u0c30\u0c4b\u0c17\u0c24\u0c3f \u0c24\u0c41\u0c21\u0c3f\u0c1a\u0c3f\u0c35\u0c47\u0c2f\u0c02\u0c21\u0c3f') + '</button></div></section>' +
      (!IS_CLAUDE ? '<section class="sec"><h2 class="sec-h">\u0c28\u0c3f\u0c30\u0c4d\u0c35\u0c3e\u0c39\u0c23</h2><div class="box"><p class="note">' + (ADMIN ? '\u0c08 \u0c2a\u0c30\u0c3f\u0c15\u0c30\u0c02\u0c32\u0c4b \u0c28\u0c3f\u0c30\u0c4d\u0c35\u0c3e\u0c39\u0c15\u0c41\u0c21\u0c3f\u0c17\u0c3e \u0c2a\u0c4d\u0c30\u0c35\u0c47\u0c36\u0c3f\u0c02\u0c1a\u0c3e\u0c30\u0c41: \u0c15\u0c4a\u0c24\u0c4d\u0c24 \u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02 (\u0c2b\u0c4b\u0c1f\u0c4b / PDF \u0c28\u0c41\u0c02\u0c1a\u0c3f \u0c15\u0c42\u0c21\u0c3e), \u0c2e\u0c3e\u0c30\u0c4d\u0c2a\u0c41\u0c32\u0c41, \u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c23.' : '\u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d \u0c28\u0c3f\u0c30\u0c4d\u0c35\u0c3e\u0c39\u0c15\u0c41\u0c21\u0c3f \u0c15\u0c4b\u0c38\u0c02 \u0c2e\u0c3e\u0c24\u0c4d\u0c30\u0c2e\u0c47: \u0c15\u0c4a\u0c24\u0c4d\u0c24 \u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02 \u0c1a\u0c47\u0c30\u0c4d\u0c1a\u0c21\u0c02, \u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32\u0c41 \u0c38\u0c30\u0c3f\u0c26\u0c3f\u0c26\u0c4d\u0c26\u0c21\u0c02.') + '</p><a class="wide-btn ' + (ADMIN ? 'pri' : 'ter') + '" href="#admin">' + I.lock + (ADMIN ? ' \u0c28\u0c3f\u0c30\u0c4d\u0c35\u0c3e\u0c39\u0c23 \u0c2a\u0c47\u0c1c\u0c40 \u0c24\u0c46\u0c30\u0c35\u0c02\u0c21\u0c3f' : ' \u0c28\u0c3f\u0c30\u0c4d\u0c35\u0c3e\u0c39\u0c15\u0c41\u0c21\u0c3f \u0c2a\u0c4d\u0c30\u0c35\u0c47\u0c36\u0c02') + '</a></div></section>' : '') +
      '<footer style="display:flex;flex-direction:column;align-items:center;gap:2px;text-align:center">' + (IN_BLOG ? '<a href="/?classic=1" style="font-weight:600;padding:10px 0">\u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d\u200c\u0c28\u0c41 \u0c2a\u0c3e\u0c24 \u0c30\u0c42\u0c2a\u0c02\u0c32\u0c4b \u0c1a\u0c42\u0c21\u0c02\u0c21\u0c3f</a><a href="' + APPBASE + '" target="_blank" rel="noopener" style="padding:4px 0 10px">\u0c35\u0c46\u0c2c\u0c4d\u200c\u0c38\u0c48\u0c1f\u0c4d / \u0c06\u0c02\u0c21\u0c4d\u0c30\u0c3e\u0c2f\u0c3f\u0c21\u0c4d \u0c2f\u0c3e\u0c2a\u0c4d</a>' : '<a href="' + BLOG + '" target="_blank" rel="noopener" style="font-weight:600;padding:10px 0">\u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d \u0c24\u0c46\u0c30\u0c35\u0c02\u0c21\u0c3f \u00b7 telugupadavinodam.blogspot.com</a>') + '<span style="font-family:var(--font-display);font-size:22px;color:var(--title)">\u0c08-\u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02</span><span class="note">\u0c35\u0c46\u0c30\u0c4d\u0c37\u0c28\u0c4d 0.27' + (IS_CLAUDE ? ' \u00b7 \u0c38\u0c4d\u0c1f\u0c42\u0c21\u0c3f\u0c2f\u0c4b' : IN_BLOG ? ' \u00b7 \u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d' : '') + '</span></footer></div>';
  }

  /* ================= admin: who may manage ================= */
  var EXTRAS = [], BLOGPOSTS = [], HIDDEN = [], BLOG_ORIG = {}, BLOG_DATE = {}, BLOG_BLK = {};
  var ADMIN = null, CONFIG = {};
  // Website admin goes through the owner's Google Apps Script (password, blog publishing, Gemini). No GitHub key.
  var SVC_K = 'epv-admin-service', SES_K = 'epv-admin-session';
  var STUDIO = 'https://claude.ai/artifact/UwfqdtktzkxrfLCcDPMAxf';
  function lsGet(k) { try { return localStorage.getItem(k) || ''; } catch (e) { return ''; } }
  function lsSet(k, v) { try { if (v) localStorage.setItem(k, v); else localStorage.removeItem(k); } catch (e) {} }
  // the owner's admin script (Deploy \u2192 Manage deployments \u2192 New version keeps this link)
  var SVC_URL = 'https://script.google.com/macros/s/AKfycbynOZQmnpch608YdWDIcP6y5CPvEz22tnspvOt54MmOEHusH4QhDNcpDav_mTW0rfFN/exec';
  function svcUrl() { return CONFIG.service || SVC_URL; }
  lsSet('epv-admin-github', ''); lsSet(SVC_K, '');
  // the admin stays signed in only while the app is open and the admin pages are in use; closing the app or leaving the admin pages signs out
  var SES = '';
  function sesGet() { if (SES) return SES; try { SES = sessionStorage.getItem(SES_K) || ''; } catch (e) {} return SES; }
  function sesSet(v) { SES = v || ''; try { if (v) sessionStorage.setItem(SES_K, v); else sessionStorage.removeItem(SES_K); } catch (e) {} }
  lsSet(SES_K, '');
  var ADMIN_ROUTES = { admin: 1, edit: 1, scan: 1, 'play-draft': 1 };
  if (!IS_CLAUDE) ADMIN = !!sesGet();
  else cap('user').then(function (u) {
    if (!u) { ADMIN = false; render(); return; }
    u.canEdit().then(function (v) { ADMIN = !!v; render(); }, function () { ADMIN = false; render(); });
  });
  function svc(action, data, signal) {
    var url = svcUrl();
    if (!url) return Promise.reject({ code: 'no_service' });
    var body = JSON.stringify(Object.assign({ action: action, token: sesGet() }, data || {}));
    // plain text body: the browser sends it without a pre-check, which Apps Script cannot answer
    return fetch(url, { method: 'POST', body: body, redirect: 'follow', cache: 'no-store', signal: signal })
      .then(function (r) { return r.text(); }, function (e) { throw { code: e && e.name === 'AbortError' ? 'cancelled' : 'network' }; })
      .then(function (t) {
        var j; try { j = JSON.parse(t); } catch (e) { throw { code: 'svc_html' }; }
        if (!j.ok) { if (j.code === 'session') adminOut(); throw j; }
        return j;
      });
  }
  function adminOut(msg) { sesSet(''); if (!IS_CLAUDE) ADMIN = false; U.svcStatus = null; if (msg) U.status = { kind: 'err', text: msg }; }
  function svcErr(e) {
    var code = e && e.code;
    return {
      no_service: '\u0c05\u0c21\u0c4d\u0c2e\u0c3f\u0c28\u0c4d \u0c38\u0c30\u0c4d\u0c35\u0c40\u0c38\u0c4d \u0c32\u0c3f\u0c02\u0c15\u0c4d \u0c07\u0c02\u0c15\u0c3e \u0c07\u0c35\u0c4d\u0c35\u0c32\u0c47\u0c26\u0c41.',
      network: '\u0c05\u0c21\u0c4d\u0c2e\u0c3f\u0c28\u0c4d \u0c38\u0c30\u0c4d\u0c35\u0c40\u0c38\u0c4d\u200c\u0c28\u0c41 \u0c1a\u0c47\u0c30\u0c41\u0c15\u0c4b\u0c32\u0c47\u0c15\u0c2a\u0c4b\u0c2f\u0c3e\u0c02. \u0c07\u0c02\u0c1f\u0c30\u0c4d\u0c28\u0c46\u0c1f\u0c4d \u0c1a\u0c42\u0c21\u0c02\u0c21\u0c3f. \u0c2e\u0c4a\u0c26\u0c1f\u0c3f\u0c38\u0c3e\u0c30\u0c48\u0c24\u0c47: \u0c38\u0c4d\u0c15\u0c4d\u0c30\u0c3f\u0c2a\u0c4d\u0c1f\u0c4d\u200c\u0c28\u0c41 Who has access: Anyone \u0c24\u0c4b \u0c21\u0c3f\u0c2a\u0c4d\u0c32\u0c3e\u0c2f\u0c4d \u0c1a\u0c47\u0c36\u0c3e\u0c30\u0c4b, \u0c32\u0c3f\u0c02\u0c15\u0c4d /exec \u0c24\u0c4b \u0c2e\u0c41\u0c17\u0c41\u0c38\u0c4d\u0c24\u0c41\u0c02\u0c26\u0c4b \u0c1a\u0c42\u0c21\u0c02\u0c21\u0c3f.',
      svc_html: '\u0c05\u0c21\u0c4d\u0c2e\u0c3f\u0c28\u0c4d \u0c38\u0c30\u0c4d\u0c35\u0c40\u0c38\u0c4d \u0c28\u0c41\u0c02\u0c1a\u0c3f \u0c38\u0c30\u0c48\u0c28 \u0c1c\u0c35\u0c3e\u0c2c\u0c41 \u0c30\u0c3e\u0c32\u0c47\u0c26\u0c41. \u0c15\u0c4a\u0c24\u0c4d\u0c24 Code.gs / appsscript.json \u0c05\u0c24\u0c3f\u0c15\u0c3f\u0c02\u0c1a\u0c3e\u0c15 script \u0c32\u0c4b setup \u0c28\u0c3f \u0c12\u0c15\u0c38\u0c3e\u0c30\u0c3f Run \u0c1a\u0c47\u0c38\u0c3f Allow \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c3e\u0c30\u0c4b (\u0c15\u0c4a\u0c24\u0c4d\u0c24 \u0c05\u0c28\u0c41\u0c2e\u0c24\u0c3f \u0c15\u0c4b\u0c38\u0c02), \u0c24\u0c30\u0c4d\u0c35\u0c3e\u0c24 Deploy \u2192 Manage deployments \u2192 \u270f\ufe0f \u2192 New version \u0c1a\u0c47\u0c36\u0c3e\u0c30\u0c4b \u0c1a\u0c42\u0c21\u0c02\u0c21\u0c3f.',
      session: '\u0c2e\u0c33\u0c4d\u0c33\u0c40 \u0c2a\u0c4d\u0c30\u0c35\u0c47\u0c36\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f.', cancelled: '\u0c06\u0c2a\u0c47\u0c36\u0c3e\u0c02.',
      blogger_api_off: 'Google Cloud \u0c2a\u0c4d\u0c30\u0c3e\u0c1c\u0c46\u0c15\u0c4d\u0c1f\u0c4d\u200c\u0c32\u0c4b Blogger API \u0c06\u0c28\u0c4d \u0c15\u0c3e\u0c32\u0c47\u0c26\u0c41. \u0c38\u0c46\u0c1f\u0c2a\u0c4d \u0c26\u0c36 1 \u0c1a\u0c42\u0c21\u0c02\u0c21\u0c3f (README).',
      self_check: '\u0c24\u0c2f\u0c3e\u0c30\u0c41\u0c1a\u0c47\u0c38\u0c3f\u0c28 \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d \u0c2e\u0c33\u0c4d\u0c33\u0c40 \u0c1a\u0c26\u0c3f\u0c35\u0c3f\u0c24\u0c47 \u0c17\u0c21\u0c3f \u0c38\u0c30\u0c3f\u0c2a\u0c4b\u0c32\u0c32\u0c47\u0c26\u0c41 \u2014 \u0c05\u0c02\u0c26\u0c41\u0c15\u0c47 \u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c3f\u0c02\u0c1a\u0c32\u0c47\u0c26\u0c41. \u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d \u0c1a\u0c42\u0c38\u0c3f \u0c2e\u0c33\u0c4d\u0c33\u0c40 \u0c2a\u0c4d\u0c30\u0c2f\u0c24\u0c4d\u0c28\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f.',
      template: '\u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d \u0c30\u0c42\u0c2a\u0c02 \u0c05\u0c30\u0c4d\u0c25\u0c02 \u0c15\u0c3e\u0c32\u0c47\u0c26\u0c41, \u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c3f\u0c02\u0c1a\u0c32\u0c47\u0c26\u0c41.',
      no_images: '\u0c1a\u0c3f\u0c24\u0c4d\u0c30\u0c02 (JPG/PNG) \u0c32\u0c47\u0c26\u0c3e PDF \u0c0e\u0c02\u0c1a\u0c41\u0c15\u0c4b\u0c02\u0c21\u0c3f.', invalid_json: '\u0c1a\u0c26\u0c3f\u0c35\u0c3f\u0c28 \u0c38\u0c2e\u0c3e\u0c1a\u0c3e\u0c30\u0c02 \u0c38\u0c30\u0c3f\u0c17\u0c4d\u0c17\u0c3e \u0c30\u0c3e\u0c32\u0c47\u0c26\u0c41. \u0c2e\u0c33\u0c4d\u0c33\u0c40 \u0c2a\u0c4d\u0c30\u0c2f\u0c24\u0c4d\u0c28\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f.',
      no_gemini: 'Gemini \u0c15\u0c40 \u0c07\u0c02\u0c15\u0c3e \u0c38\u0c47\u0c35\u0c4d \u0c1a\u0c47\u0c2f\u0c32\u0c47\u0c26\u0c41 \u2014 \u0c15\u0c3f\u0c02\u0c26\u0c3f \u0c38\u0c46\u0c1f\u0c4d\u0c1f\u0c3f\u0c02\u0c17\u0c4d\u200c\u0c32\u0c32\u0c4b \u0c07\u0c35\u0c4d\u0c35\u0c02\u0c21\u0c3f, \u0c32\u0c47\u0c26\u0c3e \u201c\u0c2b\u0c4b\u0c28\u0c4d\u200c\u0c32\u0c4b\u0c28\u0c47 \u0c1a\u0c26\u0c35\u0c02\u0c21\u0c3f\u201d \u0c35\u0c3e\u0c21\u0c02\u0c21\u0c3f.',
      rate_limited: 'Gemini \u0c09\u0c1a\u0c3f\u0c24 \u0c2a\u0c30\u0c3f\u0c2e\u0c3f\u0c24\u0c3f \u0c08 \u0c28\u0c3f\u0c2e\u0c3f\u0c37\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c05\u0c2f\u0c3f\u0c2a\u0c4b\u0c2f\u0c3f\u0c02\u0c26\u0c3f. \u0c12\u0c15 \u0c28\u0c3f\u0c2e\u0c3f\u0c37\u0c02 \u0c06\u0c17\u0c3f \u0c2a\u0c4d\u0c30\u0c2f\u0c24\u0c4d\u0c28\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f.',
      old_script: '\u0c05\u0c21\u0c4d\u0c2e\u0c3f\u0c28\u0c4d \u0c38\u0c4d\u0c15\u0c4d\u0c30\u0c3f\u0c2a\u0c4d\u0c1f\u0c4d (Code.gs) \u0c2a\u0c3e\u0c24\u0c26\u0c3f \u2014 \u0c26\u0c3e\u0c28\u0c3f\u0c24\u0c4b \u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c3f\u0c38\u0c4d\u0c24\u0c47 \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d \u0c32\u0c4b\u0c2a\u0c32\u0c3f \u0c2d\u0c3e\u0c17\u0c02 \u0c2a\u0c4b\u0c24\u0c4b\u0c02\u0c26\u0c3f. \u0c15\u0c4a\u0c24\u0c4d\u0c24 Code.gs \u0c28\u0c41 \u0c05\u0c24\u0c3f\u0c15\u0c3f\u0c02\u0c1a\u0c3f Deploy \u2192 Manage deployments \u2192 \u270f\ufe0f \u2192 New version \u0c1a\u0c47\u0c36\u0c3e\u0c15 \u0c2e\u0c33\u0c4d\u0c33\u0c40 \u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f.',
      empty_post: '\u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d \u0c35\u0c46\u0c33\u0c4d\u0c33\u0c3f\u0c02\u0c26\u0c3f \u0c15\u0c3e\u0c28\u0c40 Blogger \u0c32\u0c4b \u0c26\u0c3e\u0c28\u0c3f \u0c17\u0c21\u0c3f \u0c15\u0c28\u0c3f\u0c2a\u0c3f\u0c02\u0c1a\u0c21\u0c02 \u0c32\u0c47\u0c26\u0c41. \u201c\u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d \u0c38\u0c30\u0c3f\u0c26\u0c3f\u0c26\u0c4d\u0c26\u0c02\u0c21\u0c3f\u201d \u0c24\u0c4b \u0c2e\u0c33\u0c4d\u0c33\u0c40 \u0c2a\u0c02\u0c2a\u0c02\u0c21\u0c3f.',
      gemini_timeout: 'Gemini 2 \u0c28\u0c3f\u0c2e\u0c3f\u0c37\u0c3e\u0c32\u0c4d\u0c32\u0c4b \u0c1c\u0c35\u0c3e\u0c2c\u0c41 \u0c07\u0c35\u0c4d\u0c35\u0c32\u0c47\u0c26\u0c41 (Google \u0c35\u0c48\u0c2a\u0c41 \u0c30\u0c26\u0c4d\u0c26\u0c40 \u0c15\u0c3e\u0c35\u0c1a\u0c4d\u0c1a\u0c41). \u0c15\u0c3e\u0c38\u0c47\u0c2a\u0c3e\u0c17\u0c3f \u0c2e\u0c33\u0c4d\u0c33\u0c40 \u0c2a\u0c4d\u0c30\u0c2f\u0c24\u0c4d\u0c28\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f, \u0c32\u0c47\u0c26\u0c3e \u201c\u0c2b\u0c4b\u0c28\u0c4d\u200c\u0c32\u0c4b\u0c28\u0c47 \u0c1a\u0c26\u0c35\u0c02\u0c21\u0c3f\u201d \u0c35\u0c3e\u0c21\u0c02\u0c21\u0c3f.'
    }[code] || (e && e.error) || ('\u0c15\u0c41\u0c26\u0c30\u0c32\u0c47\u0c26\u0c41 (' + (code || (e && e.message) || 'error') + ').');
  }
  function loadSvcStatus() {
    if (IS_CLAUDE || !ADMIN || U.svcStatus || U.svcLoading) return;
    U.svcLoading = true;
    svc('status').then(function (j) {
      U.svcLoading = false; U.svcStatus = j;
      if (j && j.v >= 9 && !S.prefs.papersMarked && !U.busy) { runRelink(0, null, true); return; }
      if (route() === 'admin') render();
    }, function (e) { U.svcLoading = false; U.svcStatus = { error: svcErr(e) }; if (route() === 'admin') render(); });
  }

  /* ================= admin: blog import ================= */
  function parsePostHTML(html) {
    var doc = new DOMParser().parseFromString(html, 'text/html');
    var box = doc.querySelector('.div1') || doc.body;
    var rows = [[]], pending = null, tips = [];
    box.querySelectorAll('input, br, label.tooltip').forEach(function (el) {
      if (el.tagName === 'BR') { if (rows[rows.length - 1].length) rows.push([]); return; }
      if (el.tagName === 'LABEL') {
        var t = ''; el.childNodes.forEach(function (x) { if (x.nodeType === 3) t += x.textContent; });
        var n = parseInt(t.trim(), 10); pending = isNaN(n) ? null : n;
        var tip = el.querySelector('.tooltiptext'); if (tip) tips.push(tip.textContent);
        return;
      }
      var type = (el.getAttribute('type') || 'text').toLowerCase();
      if (type === 'image' && /btn-disabled/.test(el.className)) { rows[rows.length - 1].push(null); pending = null; return; }
      if (type === 'text') { rows[rows.length - 1].push({ a: (el.getAttribute('name') || '').trim().normalize('NFC'), n: pending }); pending = null; }
    });
    while (rows.length && !rows[rows.length - 1].length) rows.pop();
    if (!rows.length) return null;
    var C = Math.max.apply(null, rows.map(function (r) { return r.length; }));
    var p = { grid: [], nums: {}, ans: [], clues: [] };
    rows.forEach(function (row, r) {
      var g = '', a = [];
      for (var c = 0; c < C; c++) { var cell = row[c]; if (!cell) { g += '#'; a.push(''); } else { g += '.'; a.push(cell.a); if (cell.n) p.nums[r + ',' + c] = cell.n; } }
      p.grid.push(g); p.ans.push(a);
    });
    var seen = {};
    tips.forEach(function (t) {
      t.split(/(?=(?:\u0c05\u0c21\u0c4d\u0c21\u0c02|\u0c28\u0c3f\u0c32\u0c41\u0c35\u0c41)\s*:)/).forEach(function (chunk) {
        var mm = chunk.match(/^(\u0c05\u0c21\u0c4d\u0c21\u0c02|\u0c28\u0c3f\u0c32\u0c41\u0c35\u0c41)\s*:\s*(\d+)\s*\.?\s*([\s\S]*)$/); if (!mm) return;
        var text = mm[3].replace(/[\s\u21e8\u21e9\u2937\u2935\u2192\u2193\u279c\u27a1\u25b6\u25bc]+$/u, '');
        var lm = text.match(/\(\s*(\d+)\s*\)\s*$/);
        text = text.replace(/\s*\(\s*\d+\s*\)\s*$/, '').replace(/\s+/g, ' ').trim();
        var d = mm[1] === '\u0c05\u0c21\u0c4d\u0c21\u0c02' ? 'A' : 'D', id = d + mm[2];
        if (!text || seen[id]) return; seen[id] = true;
        p.clues.push({ d: d, n: +mm[2], len: lm ? +lm[1] : null, text: text });
      });
    });
    return p;
  }
  function makeId(date, taken, paper) { var pre = paperOf(paper).pre, base = pre + dateKey(date); if (base === pre + '00000000') base = pre + Date.now().toString(36); var id = base, i = 2; while (taken[id]) id = base + '-' + i++; return id; }
  function postFrom(title, html, url) {
    if (!/btn-disabled/.test(html || '')) return null;
    var p = parsePostHTML(html); if (!p) return null;
    var dm = (title || '').match(/\d{2}\.\d{2}\.\d{4}/);
    p.paper = paperIn((title || '') + ' ' + (url || ''));
    p.title = (title || '').replace(/\s*-\s*\d{2}\.\d{2}\.\d{4}\s*$/, '').trim() || paperOf(p.paper).title;
    p.date = dm ? dm[0] : ''; p.url = url || ''; p.src = 'blog';
    // the post's congratulation picture (the image inside its btn-finish2 / finish box)
    var fm = html.match(/id\s*=\s*"finish\d*"[^>]*?\ssrc\s*=\s*"([^"]+)"/i) || html.match(/<(?:input|img)[^>]*\ssrc\s*=\s*"([^"]+)"[^>]*id\s*=\s*"finish\d*"/i) || html.match(/btn-finish2[\s\S]{0,400}?\ssrc\s*=\s*"([^"]+)"/i);
    p.fin = fm ? fm[1].replace(/&amp;/g, '&') : '';
    p.blk = blkSrc(html);
    return p;
  }
  // the black squares' picture: the src of the post's first <input class="btn-disabled\u2026"> (attributes in any order and spacing)
  function blkSrc(html) {
    var tags = String(html || '').match(/<input\b[^>]*>/gi) || [];
    for (var i = 0; i < tags.length; i++) {
      var t = tags[i], cl = t.match(/\sclass\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i);
      if (!cl || !/(^|\s)btn-disabled2?(\s|$)/.test(cl[1] || cl[2] || cl[3] || '')) continue;
      var sr = t.match(/\ssrc\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i); if (!sr) continue;
      var u = (sr[1] || sr[2] || sr[3] || '').replace(/&amp;/g, '&').trim();
      if (/^\/\//.test(u)) u = 'https:' + u; else if (/^http:\/\//i.test(u)) u = 'https://' + u.slice(7);
      if (/^https:\/\//i.test(u)) return u;
    }
    return '';
  }
  // a puzzle's congratulation picture: its own, else the newest blog post's
  function finImage(p) {
    if (p && p.fin) return p.fin;
    var s0 = sorted(); for (var i = 0; i < s0.length; i++) if (s0[i].fin) return s0[i].fin;
    return '';
  }
  // on finishing, like the blog: the congratulation picture opens over the finished board; a tap shows time and hints
  function finPopHTML(p) {
    var src = IS_CLAUDE ? '' : finImage(p), P = CUR.P;
    return '<div class="finpop" role="dialog" aria-modal="true" aria-label="\u0c05\u0c2d\u0c3f\u0c28\u0c02\u0c26\u0c28\u0c32\u0c41">' +
      '<button class="finx" data-act="fin-close" aria-label="\u0c2e\u0c42\u0c38\u0c3f\u0c35\u0c47\u0c2f\u0c3f \u2014 \u0c17\u0c21\u0c3f \u0c1a\u0c42\u0c21\u0c02\u0c21\u0c3f">' + I.close + '</button>' +
      '<button class="finpic" data-act="fin-go" aria-label="\u0c05\u0c2d\u0c3f\u0c28\u0c02\u0c26\u0c28\u0c32\u0c41 \u2014 \u0c38\u0c2e\u0c2f\u0c02, \u0c38\u0c42\u0c1a\u0c28\u0c32\u0c41 \u0c1a\u0c42\u0c21\u0c02\u0c21\u0c3f">' + (src ? '<img src="' + esc(src) + '" alt="\u0c05\u0c2d\u0c3f\u0c28\u0c02\u0c26\u0c28\u0c32\u0c41">' : '<span class="finart">' + congrats(P.variant || 0) + '</span>') + '</button>' +
      '<p class="finnote">' + esc(p.title) + (p.date ? ' \u00b7 ' + esc(p.date) : '') + ' \u0c2a\u0c42\u0c30\u0c4d\u0c24\u0c3f! \u0c2c\u0c4a\u0c2e\u0c4d\u0c2e\u0c28\u0c41 \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c3f\u0c24\u0c47 \u0c2e\u0c40 \u0c38\u0c2e\u0c2f\u0c02, \u0c38\u0c42\u0c1a\u0c28\u0c32\u0c41 \u0c1a\u0c42\u0c21\u0c35\u0c1a\u0c4d\u0c1a\u0c41.</p></div>';
  }
  function postsFromFeed(j) {
    if (j && j.posts) return j.posts;   // one post handed over by the blog page
    var out = [];
    ((j && j.feed && j.feed.entry) || []).forEach(function (e) {
      var link = (e.link || []).filter(function (l) { return l.rel === 'alternate'; })[0];
      var p = postFrom(e.title && e.title.$t, (e.content && e.content.$t) || '', link && link.href);
      if (p) {
        var pm = ((e.id && e.id.$t) || '').match(/post-(\d+)$/); p.postId = pm ? pm[1] : '';
        var labs = (e.category || []).map(function (c) { return c.term || ''; }).join(' ');
        if (labs && !PAPERS[0].re.test((e.title && e.title.$t) || '')) { var lp = paperIn(labs); if (lp !== 'eenadu' || PAPERS[0].re.test(labs)) p.paper = lp; }
        out.push(p);
      }
    });
    return out;
  }
  // in a blog post: the page around hands over its own post (no need to download the whole blog); if it does not, the feed as usual
  function embedPost() {
    return new Promise(function (res) {
      var done = false, t = setTimeout(function () { if (!done) { done = true; res(loadBlogFeed()); } }, 6000);
      window.addEventListener('message', function (ev) {
        var d = ev.data;
        if (done || ev.source !== window.parent || !/^https:\/\/telugupadavinodam\.blogspot\.com$/.test(ev.origin) || !d || d.epv !== 'post' || typeof d.html !== 'string') return;
        var p = postFrom(String(d.title || ''), d.html, /^https:\/\/telugupadavinodam\.blogspot\.com\//.test(d.url || '') ? d.url : '');
        if (!p) return;
        p.postId = /^\d+$/.test(d.postId || '') ? d.postId : '';
        done = true; clearTimeout(t); res({ feed: null, posts: [p] });
      });
      try { window.parent.postMessage({ epv: 'ready' }, '*'); } catch (e) {}
    });
  }
  // Blogger allows its feed to be read from other websites only in this script form
  function loadBlogFeed() { return jsonp(BLOG + 'feeds/posts/default?alt=json-in-script&max-results=500&callback=epvFeed', 'epvFeed', 45000); }
  function jsonp(url, cb, ms) {
    return new Promise(function (res, rej) {
      var s = document.createElement('script'), done = false;
      var timer = setTimeout(function () { if (!done) { done = true; s.remove(); rej(new Error('timeout')); } }, ms);
      window[cb] = function (j) { if (done) return; done = true; clearTimeout(timer); s.remove(); res(j); };
      s.onerror = function () { if (done) return; done = true; clearTimeout(timer); s.remove(); rej(new Error('feed')); };
      s.src = url;
      document.head.appendChild(s);
    });
  }
  // on a blog post page: that post's id (Blogger writes it into the page) \u2014 only that post is fetched first, the rest after
  var BLOG_POST_PAGE = IN_BLOG && /\/\d{4}\/\d{2}\/[^\/]+\.html$/.test(location.pathname);
  function pagePostId() {
    var m = document.querySelector('meta[itemprop="postId"]'), b = document.querySelector('[id^="post-body-"]');
    var id = (m && m.getAttribute('content')) || (b && b.id.replace('post-body-', '')) || '';
    return /^\d+$/.test(id) ? id : '';
  }
  function loadOnePost(id) {
    return jsonp(BLOG + 'feeds/posts/default/' + id + '?alt=json-in-script&callback=epvOne', 'epvOne', 20000).then(function (j) {
      if (!j || !j.entry) throw new Error('no post'); return { feed: { entry: [j.entry] } };
    });
  }
  var PAGE_PATH = location.pathname;
  // in the blog, every puzzle link carries its post's real address (search engines follow those); a tap still opens it here at once
  if (IN_BLOG && window.MutationObserver) {
    var linkFix = function () {
      Array.prototype.forEach.call(view.querySelectorAll('a[href^="#play-"],a[href^="#done-"]'), function (a) {
        var h = a.getAttribute('href'), m = /^#(?:play|done)-(.+)$/.exec(h), p = m ? findPuzzle(m[1]) : null;
        if (!p || !p.url) return;
        try { var u = new URL(p.url, location.href); if (u.hostname !== location.hostname) return; a.setAttribute('data-h', h); a.setAttribute('href', u.origin + u.pathname + h); } catch (e) {}
      });
    };
    new MutationObserver(linkFix).observe(view, { childList: true, subtree: true });
    document.addEventListener('click', function (ev) {
      var a = ev.target.closest && ev.target.closest('a[data-h]');
      if (!a || ev.defaultPrevented || ev.button || ev.ctrlKey || ev.metaKey || ev.shiftKey || ev.altKey) return;
      ev.preventDefault(); location.hash = a.getAttribute('data-h');
    });
  }   // the address the blog page was opened at (the address bar follows the screens later)
  function samePath(u) { try { var a = new URL(u, location.href); return a.hostname === location.hostname && a.pathname === PAGE_PATH; } catch (e) { return false; } }
  function importFromText(text) {
    var out = [];
    function add(title, html, url) { var p = postFrom(title, html, url); if (p) out.push(p); }
    var t = text.replace(/^\ufeff/, '').trim();
    if (t[0] === '{') {
      var js = JSON.parse(t);
      out = Array.isArray(js.puzzles) ? js.puzzles.filter(function (p) { return p && Array.isArray(p.grid); }).map(function (p) { return Object.assign({}, p); }) : postsFromFeed(js);
    } else if (/^<\?xml|^<feed/i.test(t)) {
      var x = new DOMParser().parseFromString(t, 'application/xml');
      Array.prototype.forEach.call(x.getElementsByTagName('entry'), function (e) {
        var ttl = e.getElementsByTagName('title')[0], ct = e.getElementsByTagName('content')[0];
        var link = Array.prototype.filter.call(e.getElementsByTagName('link'), function (l) { return l.getAttribute('rel') === 'alternate'; })[0];
        add(ttl ? ttl.textContent : '', ct ? ct.textContent : '', link ? link.getAttribute('href') : '');
      });
    } else {
      var d = new DOMParser().parseFromString(t, 'text/html');
      var og = d.querySelector('meta[property="og:title"]'), h = d.querySelector('.post-title') || d.querySelector('title');
      var canon = d.querySelector('link[rel="canonical"]');
      var body = d.querySelector('.post-body') || d.body;
      add((og && og.getAttribute('content')) || (h && h.textContent) || '', body.innerHTML, canon ? canon.getAttribute('href') : '');
    }
    return out;
  }
  function readFileText(f) { return new Promise(function (res, rej) { var r = new FileReader(); r.onload = function () { res(String(r.result)); }; r.onerror = function () { rej(r.error); }; r.readAsText(f, 'utf-8'); }); }
  function runImport(texts) {
    var found = [];
    texts.forEach(function (t) { try { found = found.concat(importFromText(t)); } catch (e) { U.status = { kind: 'err', text: '\u0c08 \u0c2b\u0c48\u0c32\u0c4d \u0c1a\u0c26\u0c35\u0c32\u0c47\u0c15\u0c2a\u0c4b\u0c2f\u0c3e\u0c02: ' + (e && e.message ? e.message : e) }; } });
    var have = {}; PUZZLES.forEach(function (p) { have[pkey(p)] = p; });
    var taken = {}; PUZZLES.forEach(function (p) { taken[p.id] = true; });
    found.forEach(function (p) { p.exists = !!(p.date && have[pkey(p)]); p.id = p.exists ? have[pkey(p)].id : makeId(p.date, taken, p.paper); taken[p.id] = true; });
    found.sort(function (a, b) { return dateKey(b.date).localeCompare(dateKey(a.date)); });
    U.imports = found; U.importSel = {};
    found.forEach(function (p) { if (!p.exists) U.importSel[p.id] = true; });
    if (!found.length && !(U.status && U.status.kind === 'err')) U.status = { kind: 'err', text: '\u0c08 \u0c2b\u0c48\u0c32\u0c4d\u200c\u0c32\u0c4b \u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02 \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c41\u0c32\u0c41 \u0c15\u0c28\u0c3f\u0c2a\u0c3f\u0c02\u0c1a\u0c32\u0c47\u0c26\u0c41. \u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d \u0c2b\u0c40\u0c21\u0c4d (.json), Blogger \u0c2c\u0c4d\u0c2f\u0c3e\u0c15\u0c2a\u0c4d (.xml) \u0c32\u0c47\u0c26\u0c3e \u0c38\u0c47\u0c35\u0c4d \u0c1a\u0c47\u0c38\u0c3f\u0c28 \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d \u0c2a\u0c47\u0c1c\u0c40 (.html) \u0c07\u0c35\u0c4d\u0c35\u0c02\u0c21\u0c3f.' };
    else if (found.length && !IS_CLAUDE && found.length === 1) { openImport(found[0]); return; }
    else if (found.length) U.status = { kind: 'ok', text: found.length + ' \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c41\u0c32\u0c41 \u0c1a\u0c26\u0c3f\u0c35\u0c3e\u0c02. ' + (IS_CLAUDE ? '\u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c3f\u0c02\u0c1a\u0c3e\u0c32\u0c4d\u0c38\u0c3f\u0c28\u0c35\u0c3f \u0c0e\u0c02\u0c1a\u0c41\u0c15\u0c41\u0c28\u0c3f \u0c15\u0c3f\u0c02\u0c26\u0c3f \u0c2c\u0c1f\u0c28\u0c4d \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c02\u0c21\u0c3f.' : '\u0c12\u0c15\u0c4d\u0c15\u0c4a\u0c15\u0c4d\u0c15\u0c1f\u0c3f \u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d\u200c\u0c17\u0c3e \u0c24\u0c46\u0c30\u0c3f\u0c1a\u0c3f \u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d\u200c\u0c32\u0c4b \u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f.') };
    render();
  }

  /* ================= admin: publish ================= */
  function cleanPuzzle(p) { return { id: p.id, title: p.title, date: p.date, paper: p.paper && p.paper !== 'eenadu' ? p.paper : undefined, src: p.src || '', url: p.url || '', postId: p.postId || '', grid: p.grid, nums: p.nums, ans: p.ans, clues: p.clues.map(function (c) { return { d: c.d, n: c.n, len: c.len || null, text: c.text }; }), added: p.added || new Date().toISOString() }; }

  // A blog post in the blog's own layout: the latest post is the pattern (its scripts, toggle, hint bulb,
  // congratulation picture, record button); only the squares, clues, numbers and links change.
  function escAttr(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function postSuffix(html) { var m = (html || '').match(/class="input(\d+)"/); return m ? m[1] : ''; }
  function shortDate(d) { var m = /^(\d{2})\.(\d{2})\.\d{2}(\d{2})$/.exec(d || ''); return m ? m[1] + m[2] + m[3] : ''; }
  function slugDate(d) { var m = /^(\d{2})\.(\d{2})\.(\d{4})$/.exec(d || ''); return m ? m[1] + m[2] + m[3] : ''; }
  function blogGridHTML(p, suf, idp, img) {
    var R = p.grid.length, C = p.grid[0].length, out = [], first = true, clue = {};
    p.clues.forEach(function (c) { clue[c.d + c.n] = c; });
    function w(r, c) { return r >= 0 && c >= 0 && r < R && c < C && p.grid[r][c] !== '#'; }
    function run(r, c, dr, dc) { var n = 0; while (w(r, c)) { n++; r += dr; c += dc; } return n; }
    for (var r = 0; r < R; r++) {
      for (var c = 0; c < C; c++) {
        var idx = r * (C + 1) + c + 1, tab = suf + '.' + idx;
        if (!w(r, c)) { out.push('<input type="image" disabled src="' + escAttr(img) + '" class="btn-disabled2" tabindex="' + tab + '">'); continue; }
        var id = idp + '-' + idx, n = p.nums[r + ',' + c], a = String((p.ans[r] && p.ans[r][c]) || '').trim() + ' ', lab = '';
        if (n) {
          var parts = [], ca = clue['A' + n], cd = clue['D' + n];
          if (ca && !w(r, c - 1) && (w(r, c + 1) || lone(w, r, c))) parts.push('&#8680; \u0c05\u0c21\u0c4d\u0c21\u0c02: ' + n + '. ' + escAttr(ca.text) + ' (' + (ca.len || run(r, c, 0, 1)) + ')  ');
          if (cd && w(r + 1, c) && !w(r - 1, c)) parts.push('&#8681; \u0c28\u0c3f\u0c32\u0c41\u0c35\u0c41: ' + n + '. ' + escAttr(cd.text) + ' (' + (cd.len || run(r, c, 1, 0)) + ')  ');
          lab = '<label for="' + id + '" class = "tooltip">' + n + '<span class="tooltiptext">' + parts.join('&#13;\n  ') + '</span></label>';
        }
        var js = a.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
        out.push(lab + '<input class="input' + suf + '"  id = "' + id + '" type="text" name="' + escAttr(a) + '" maxlength="16" onfocusout="getVal(this,\'' + escAttr(js) + '\', congrats' + suf + ')" onclick="showCoords(event)" tabindex="' + tab + '"' + (first ? ' autofocus' : '') + '>');
        first = false;
      }
      out.push('<br />');
    }
    return out.join('\n');
  }
  function blogPostHTML(tpl, p, o) {
    var old = postSuffix(tpl), g0 = tpl.indexOf('<div class="div1">'), g1 = g0 < 0 ? -1 : tpl.indexOf('</div>', g0);
    if (!old || g1 < 0) throw { code: 'template' };
    var suf = o.suffix || old, grid = tpl.slice(g0, g1);
    var img = o.img || p.blkImg || (grid.match(/<input type="image"[^>]*?src="([^"]+)"[^>]*class="btn-disabled2"/) || grid.match(/class="btn-disabled2"[^>]*?src="([^"]+)"/) || [])[1] || '';
    var idp = shortDate(p.date) || (grid.match(/id\s*=\s*"(\d{6})-\d+"/) || [])[1] || 'epv';
    var html = tpl.slice(0, g0) + '<div class="div1">\n' + blogGridHTML(p, suf, idp, img) + '\n\n</div>' + tpl.slice(g1 + 6);
    if (suf !== old) html = html.replace(new RegExp('\\b(input|hint|theme|recording-toggle|congrats|finish)' + old + '\\b', 'g'), '$1' + suf);
    if (o.prevUrl) html = html.replace(/(<a href=")[^"]*("[^>]*class="btn-prev")/, '$1' + o.prevUrl + '$2');
    if (p.finImg) html = html.replace(/(id\s*=\s*"finish\d*"[^>]*?\ssrc\s*=\s*")[^"]*(")/, '$1' + escAttr(p.finImg) + '$2').replace(/(<(?:input|img)[^>]*\ssrc\s*=\s*")[^"]*("[^>]*id\s*=\s*"finish\d*")/, '$1' + escAttr(p.finImg) + '$2');
    if (o.newPost) html = html.replace(/(window\.prompt\("File Name",\s*")\d{6}(")/, '$1' + idp + '$2');
    return html;
  }
  // read the made post back with the app's own blog reader: the squares, answers and clues must come out the same
  function sameAsBlog(html, pz) {
    var b = postFrom('x - ' + pz.date, html, ''); if (!b) return false;
    if (b.grid.join('|') !== pz.grid.join('|')) return false;
    if (b.ans.map(function (r) { return r.join(','); }).join('|') !== pz.ans.map(function (r) { return r.map(function (x) { return String(x || '').trim(); }).join(','); }).join('|')) return false;
    var R = pz.grid.length, C = pz.grid[0].length, exp = 0, has = {};
    function w(r, c) { return r >= 0 && c >= 0 && r < R && c < C && pz.grid[r][c] !== '#'; }
    pz.clues.forEach(function (c) { has[c.d + c.n] = true; });
    Object.keys(pz.nums).forEach(function (k) {
      var x = k.split(','), r = +x[0], c = +x[1], n = pz.nums[k];
      if (has['A' + n] && !w(r, c - 1) && (w(r, c + 1) || lone(w, r, c))) exp++;
      if (has['D' + n] && w(r + 1, c) && !w(r - 1, c)) exp++;
    });
    return exp > 0 && b.clues.length === exp;
  }
  // after publishing, the draft stays in the saved drafts (marked) \u2014 nothing is lost if the blog side goes wrong
  function postTitle(pz) {
    var pp = paperOf(pz.paper), t = (pz.title || '').trim() || pp.title;
    if (pp.id !== 'other' && paperIn(t) !== pp.id) t = pp.title;
    return t + ' - ' + pz.date;
  }
  function keepPublished(d, url) { if (!d) return; d.published = Date.now(); d.pubUrl = url || ''; keepDraft(d, true); }
  function blogPublish(pz, draft) {
    U.busy = 'publish'; U.status = { kind: 'wait', text: '\u0c08 \u0c24\u0c47\u0c26\u0c40 \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d \u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d\u200c\u0c32\u0c4b \u0c07\u0c2a\u0c4d\u0c2a\u0c1f\u0c3f\u0c15\u0c47 \u0c09\u0c02\u0c26\u0c4b \u0c1a\u0c42\u0c38\u0c4d\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c02\u2026' }; render();
    var title = postTitle(pz);
    // an older admin script (before version 5) lost post bodies: do not publish through it
    var myPaper = paperOf(pz.paper).id;
    svc('find', { date: pz.date, paper: myPaper }).then(function (f) {
      var same = (f.items || []).filter(function (it) { return (it.paper || paperIn((it.title || '') + ' ' + (it.url || ''))) === myPaper; })[0];
      if (same && !draft) {   // already there (perhaps empty): correct that post instead of making a second one
        U.busy = ''; blogUpdate(Object.assign({}, pz, { postId: same.id, publishDraft: same.status === 'draft' }), pz.date + ' \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d \u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d\u200c\u0c32\u0c4b \u0c07\u0c2a\u0c4d\u0c2a\u0c1f\u0c3f\u0c15\u0c47 \u0c09\u0c02\u0c26\u0c3f \u2014 \u0c26\u0c3e\u0c28\u0c4d\u0c28\u0c47 \u0c38\u0c30\u0c3f\u0c1a\u0c47\u0c36\u0c3e\u0c02.', function () { keepPublished(D, same.url); D = null; S.draft = null; delete S.prog.draft; save(); location.hash = '#admin'; });
        return null;
      }
      U.status = { kind: 'wait', text: '\u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d\u200c\u0c32\u0c4b\u0c28\u0c3f \u0c24\u0c3e\u0c1c\u0c3e \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d \u0c30\u0c42\u0c2a\u0c02 \u0c24\u0c40\u0c38\u0c41\u0c15\u0c41\u0c02\u0c1f\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c02\u2026' }; render();
      return svc('template').then(publishWith);
    }, function (e) {
      if (e && e.code === 'bad_request') throw { code: 'old_script' };
      throw e;
    }).catch(function (e) { U.busy = ''; U.status = { kind: 'err', text: svcErr(e) }; render(); });
    function publishWith(t) {
      return Promise.resolve(t).then(function (t) {
      var html = blogPostHTML(t.content, pz, { suffix: String((+postSuffix(t.content) || 0) + 1), prevUrl: t.url, newPost: true });
      if (!sameAsBlog(html, pz)) throw { code: 'self_check' };
      U.status = { kind: 'wait', text: draft ? '\u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d\u200c\u0c32\u0c4b \u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d\u200c\u0c17\u0c3e \u0c38\u0c47\u0c35\u0c4d \u0c1a\u0c47\u0c38\u0c4d\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c02\u2026' : '\u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d\u200c\u0c32\u0c4b \u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c3f\u0c38\u0c4d\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c02\u2026' }; render();
      return svc('publish', { title: title, slug: (pz.paper && pz.paper !== 'eenadu' ? pz.paper + '-' : '') + slugDate(pz.date), html: html, draft: !!draft, prevPostId: t.id, paper: myPaper, label: paperOf(myPaper).te });
    }).then(function (r) {
      U.busy = '';
      if (!draft) {
        var np = Object.assign({}, pz, { src: 'blog', url: r.url, postId: r.id, title: pz.title || paperOf(pz.paper).title });
        np.paper = myPaper; np.id = paperOf(myPaper).pre + dateKey(pz.date);
        BLOGPOSTS = BLOGPOSTS.filter(function (p) { return pkey(p) !== pkey(np); }); BLOGPOSTS.unshift(np); mergePuzzles();
      }
      keepPublished(D, r.url); D = null; S.draft = null; delete S.prog.draft; save();
      U.status = { kind: 'ok', text: draft ? '\u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d\u200c\u0c32\u0c4b \u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d\u200c\u0c17\u0c3e \u0c38\u0c47\u0c35\u0c4d \u0c1a\u0c47\u0c36\u0c3e\u0c02. Blogger \u0c32\u0c4b \u0c24\u0c46\u0c30\u0c3f\u0c1a\u0c3f \u0c1a\u0c42\u0c38\u0c3f Publish \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c02\u0c21\u0c3f; \u0c05\u0c2a\u0c4d\u0c2a\u0c41\u0c21\u0c41 \u0c2f\u0c3e\u0c2a\u0c4d\u200c\u0c32\u0c4b\u0c28\u0c42 \u0c15\u0c28\u0c3f\u0c2a\u0c3f\u0c38\u0c4d\u0c24\u0c41\u0c02\u0c26\u0c3f.' : title + ' \u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d\u200c\u0c32\u0c4b \u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c3f\u0c02\u0c1a\u0c3e\u0c02' + (r.linkedPrev ? '; \u0c2e\u0c41\u0c02\u0c26\u0c1f\u0c3f \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d\u200c\u0c32\u0c4b \u201c\u0c24\u0c30\u0c4d\u0c35\u0c3e\u0c24 \u00bb\u201d \u0c2c\u0c1f\u0c28\u0c4d \u0c26\u0c40\u0c28\u0c3f\u0c15\u0c3f \u0c15\u0c32\u0c3f\u0c2a\u0c3e\u0c02' : '') + '. \u0c2f\u0c3e\u0c2a\u0c4d\u200c\u0c32\u0c4b \u0c07\u0c2a\u0c4d\u0c2a\u0c1f\u0c3f\u0c15\u0c47 \u0c09\u0c02\u0c26\u0c3f.', link: r.url || '' };
      location.hash = '#admin'; render(); toast(draft ? '\u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d \u0c38\u0c47\u0c35\u0c4d \u0c05\u0c2f\u0c3f\u0c02\u0c26\u0c3f.' : '\u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d\u200c\u0c32\u0c4b \u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c3f\u0c02\u0c1a\u0c3e\u0c02!');
    });
    }
  }
  function blogUpdate(pz, okMsg, after) {
    if (!pz.postId) { toast('\u0c07\u0c26\u0c3f \u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d \u0c15\u0c3e\u0c26\u0c41. \u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d\u200c\u0c17\u0c3e \u0c24\u0c46\u0c30\u0c3f\u0c1a\u0c3f \u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d\u200c\u0c32\u0c4b \u0c15\u0c4a\u0c24\u0c4d\u0c24\u0c17\u0c3e \u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f.'); return; }
    U.busy = 'publish'; U.status = { kind: 'wait', text: '\u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d \u0c24\u0c46\u0c1a\u0c4d\u0c1a\u0c41\u0c15\u0c41\u0c02\u0c1f\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c02\u2026' }; render();
    svc('get', { postId: pz.postId }).then(function (t) {
      if (/class="div1"/.test(t.content || '')) return blogPostHTML(t.content, pz, {});
      // the post has lost its body: build it again on the latest post's layout
      return svc('template').then(function (tp) { return blogPostHTML(tp.content, pz, { suffix: String((+postSuffix(tp.content) || 0) + 1), prevUrl: tp.id !== pz.postId ? tp.url : '', newPost: true }); });
    }).then(function (html) {
      if (!sameAsBlog(html, pz)) throw { code: 'self_check' };
      U.status = { kind: 'wait', text: '\u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d \u0c38\u0c30\u0c3f\u0c26\u0c3f\u0c26\u0c4d\u0c26\u0c41\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c02\u2026' }; render();
      return svc('update', { postId: pz.postId, html: html, title: postTitle(pz), publish: !!pz.publishDraft, paper: paperOf(pz.paper).id, label: paperOf(pz.paper).te });
    }).then(function (r) {
      BLOGPOSTS = BLOGPOSTS.map(function (p) { return p.postId === pz.postId ? Object.assign({}, p, pz, { src: 'blog', url: r.url || p.url }) : p; }); mergePuzzles();
      U.busy = ''; U.status = { kind: 'ok', text: okMsg + (r.kept ? ' \u0c2a\u0c3e\u0c24 \u0c30\u0c42\u0c2a\u0c02 \u0c2e\u0c40 Google Drive \u0c32\u0c4b \u201ce-padavinodam-old-\u2026\u201d \u0c2b\u0c48\u0c32\u0c4d\u200c\u0c32\u0c4b \u0c09\u0c02\u0c26\u0c3f.' : r.kept === false ? '' : ' \u0c2a\u0c3e\u0c24 \u0c30\u0c42\u0c2a\u0c02 Blogger \u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d\u200c\u0c32\u0c32\u0c4b \u201c\u0c2c\u0c4d\u0c2f\u0c3e\u0c15\u0c2a\u0c4d \u00b7\u201d \u0c2a\u0c47\u0c30\u0c41\u0c24\u0c4b \u0c09\u0c02\u0c26\u0c3f (\u0c15\u0c4a\u0c24\u0c4d\u0c24 Code.gs v7 \u0c24\u0c4b \u0c08 \u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d\u200c\u0c32\u0c41 \u0c30\u0c3e\u0c35\u0c41).'), link: r.url || '' };
      if (after) after(); render(); toast(okMsg);
    }, function (e) { U.busy = ''; U.status = { kind: 'err', text: svcErr(e) }; render(); });
  }
  function blogUnpublish(p) {
    U.busy = 'publish'; U.status = { kind: 'wait', text: '\u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d\u200c\u0c32\u0c4b \u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d\u200c\u0c17\u0c3e \u0c2e\u0c3e\u0c30\u0c41\u0c38\u0c4d\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c02\u2026' }; render();
    svc('unpublish', { postId: p.postId }).then(function () {
      BLOGPOSTS = BLOGPOSTS.filter(function (x) { return x.postId !== p.postId; }); mergePuzzles();
      U.busy = ''; U.status = { kind: 'ok', text: p.date + ' \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d \u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d \u0c28\u0c41\u0c02\u0c1a\u0c3f \u0c24\u0c40\u0c38\u0c3f \u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d\u200c\u0c17\u0c3e \u0c2a\u0c46\u0c1f\u0c4d\u0c1f\u0c3e\u0c02. Blogger \u0c32\u0c4b \u0c2e\u0c33\u0c4d\u0c33\u0c40 Publish \u0c1a\u0c47\u0c38\u0c4d\u0c24\u0c47 \u0c24\u0c3f\u0c30\u0c3f\u0c17\u0c3f \u0c35\u0c38\u0c4d\u0c24\u0c41\u0c02\u0c26\u0c3f.' }; render();
    }, function (e) { U.busy = ''; U.status = { kind: 'err', text: svcErr(e) }; render(); });
  }
  // everything that must be complete before a post goes to the blog: the date, a number on every clue square, a clue (with text)
  // for every across and down word the grid has, no clue the grid does not have, and an answer in every white square
  // the grid's across and down words of the open draft (number, length), in number order
  function draftSlots() {
    if (!D) return [];
    var pz = draftToPuzzle(D, false), R = pz.grid.length, C = R ? pz.grid[0].length : 0, nums = pz.nums || {}, out = [];
    function w(r, c) { return r >= 0 && c >= 0 && r < R && c < C && pz.grid[r][c] !== '#'; }
    for (var r = 0; r < R; r++) for (var c = 0; c < C; c++) {
      if (!w(r, c)) continue;
      var n = +nums[key(r, c)]; if (!n) continue;
      if ((!w(r, c - 1) && w(r, c + 1)) || lone(w, r, c)) { var l = 0; for (var x = c; w(r, x); x++) l++; out.push({ d: 'A', n: n, len: l }); }
      if (!w(r - 1, c) && w(r + 1, c)) { var l2 = 0; for (var y = r; w(y, c); y++) l2++; out.push({ d: 'D', n: n, len: l2 }); }
    }
    return out.sort(function (a, b) { return a.n - b.n; });
  }
  function blogBlockers(pz) {
    var out = [], R = pz.grid.length, C = R ? pz.grid[0].length : 0, nums = pz.nums || {}, slots = [], noNum = 0;
    if (!pz.date) out.push('\u0c24\u0c47\u0c26\u0c40 (DD.MM.YYYY) \u0c07\u0c35\u0c4d\u0c35\u0c32\u0c47\u0c26\u0c41');
    else if (!/^\d{2}\.\d{2}\.\d{4}$/.test(pz.date)) out.push('\u0c24\u0c47\u0c26\u0c40 DD.MM.YYYY \u0c30\u0c42\u0c2a\u0c02\u0c32\u0c4b \u0c32\u0c47\u0c26\u0c41 (\u0c09\u0c26\u0c3e: 25.05.2025)');
    function w(r, c) { return r >= 0 && c >= 0 && r < R && c < C && pz.grid[r][c] !== '#'; }
    for (var r = 0; r < R; r++) for (var c = 0; c < C; c++) {
      if (!w(r, c)) continue;
      var a = (!w(r, c - 1) && w(r, c + 1)) || lone(w, r, c), d = !w(r - 1, c) && w(r + 1, c);
      if (!a && !d) continue;
      var n = nums[key(r, c)]; if (!n) { noNum++; continue; }
      if (a) slots.push({ d: 'A', n: +n }); if (d) slots.push({ d: 'D', n: +n });
    }
    if (noNum) out.push(noNum + ' \u0c17\u0c21\u0c41\u0c32\u0c15\u0c41 \u0c38\u0c02\u0c16\u0c4d\u0c2f \u0c32\u0c47\u0c26\u0c41 (\u201c\u0c38\u0c02\u0c16\u0c4d\u0c2f\u0c32\u0c41 \u0c06\u0c1f\u0c4b\u0c17\u0c3e \u0c35\u0c47\u0c2f\u0c02\u0c21\u0c3f\u201d \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c02\u0c21\u0c3f)');
    var have = {}, slotOf = {};
    (pz.clues || []).forEach(function (cl) { if (String(cl.text || '').trim()) have[cl.d + cl.n] = (have[cl.d + cl.n] || 0) + 1; });
    slots.forEach(function (sl) { slotOf[sl.d + sl.n] = 1; });
    var noA = [], noD = []; slots.forEach(function (sl) { if (!have[sl.d + sl.n]) (sl.d === 'A' ? noA : noD).push(sl.n); });
    if (noA.length) out.push(noA.length + ' \u0c05\u0c21\u0c4d\u0c21\u0c02 \u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32\u0c41 \u0c32\u0c47\u0c35\u0c41: ' + noA.join(', '));
    if (noD.length) out.push(noD.length + ' \u0c28\u0c3f\u0c32\u0c41\u0c35\u0c41 \u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32\u0c41 \u0c32\u0c47\u0c35\u0c41: ' + noD.join(', '));
    var extra = [], twice = [];
    (pz.clues || []).forEach(function (cl) { var k = cl.d + cl.n; if (String(cl.text || '').trim() && !slotOf[k] && extra.indexOf(dirName(cl.d) + ' ' + cl.n) < 0) extra.push(dirName(cl.d) + ' ' + cl.n); if (have[k] > 1 && twice.indexOf(dirName(cl.d) + ' ' + cl.n) < 0) twice.push(dirName(cl.d) + ' ' + cl.n); });
    if (extra.length) out.push('\u0c17\u0c21\u0c3f\u0c32\u0c4b \u0c32\u0c47\u0c28\u0c3f \u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32\u0c41: ' + extra.join(', '));
    if (twice.length) out.push('\u0c30\u0c46\u0c02\u0c21\u0c41\u0c38\u0c3e\u0c30\u0c4d\u0c32\u0c41 \u0c09\u0c28\u0c4d\u0c28 \u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32\u0c41: ' + twice.join(', '));
    var m = model(Object.assign({}, pz, { id: 'draft' }));
    if (!m.whites) out.push('\u0c17\u0c21\u0c3f \u0c16\u0c3e\u0c33\u0c40\u0c17\u0c3e \u0c09\u0c02\u0c26\u0c3f');
    else if (m.missingAns) out.push(m.missingAns + ' \u0c17\u0c21\u0c41\u0c32\u0c15\u0c41 \u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32\u0c41 \u0c32\u0c47\u0c35\u0c41 (\u201c\u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32\u0c41\u201d \u0c32\u0c4b \u0c28\u0c3f\u0c02\u0c2a\u0c02\u0c21\u0c3f)');
    m.problems.forEach(function (x) { if (/\u0c2a\u0c4a\u0c21\u0c35\u0c41|\u0c0f \u0c06\u0c27\u0c3e\u0c30\u0c02\u0c32\u0c4b\u0c28\u0c42 \u0c32\u0c47\u0c35\u0c41/.test(x) && out.indexOf(x) < 0) out.push(x); });
    return out;
  }
  function draftReadyForBlog(pz) { var b = blogBlockers(pz); return b.length ? '\u0c07\u0c02\u0c15\u0c3e \u0c2a\u0c42\u0c30\u0c4d\u0c24\u0c3f \u0c15\u0c3e\u0c32\u0c47\u0c26\u0c41, \u0c05\u0c02\u0c26\u0c41\u0c15\u0c47 \u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c3f\u0c02\u0c1a\u0c32\u0c47\u0c26\u0c41 \u2014 ' + b.join('; ') + '.' : ''; }
  function savePuzzles(list, okMsg, after) {
    if (!IS_CLAUDE) { toast('\u0c35\u0c46\u0c2c\u0c4d\u200c\u0c38\u0c48\u0c1f\u0c4d \u0c28\u0c41\u0c02\u0c1a\u0c3f \u0c2e\u0c3e\u0c30\u0c4d\u0c2a\u0c41\u0c32\u0c41 \u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d\u200c\u0c32\u0c4b\u0c15\u0c3f \u0c35\u0c46\u0c33\u0c4d\u0c24\u0c3e\u0c2f\u0c3f.'); return; }
    U.busy = 'publish'; U.status = { kind: 'wait', text: '\u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c3f\u0c38\u0c4d\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c02\u2026' }; render();
    cap('artifact').then(function (art) {
      if (!art) throw { code: 'not_granted' };
      var clean = list.map(cleanPuzzle);
      var body = JSON.stringify({ v: 1, updated: new Date().toISOString(), puzzles: clean });
      return art.publish({ 'puzzles.json': { content: body, contentType: 'application/json' } }).then(function () { return clean; });
    }).then(function (clean) {
      PUZZLES = clean; MODELS = {}; DATA_STATE = 'ready';
      U.busy = ''; U.status = { kind: 'ok', text: okMsg }; if (after) after(); render(); toast(okMsg);
    }, function (e) {
      U.busy = '';
      var code = e && e.code, msg = {
        conflict: '\u0c07\u0c02\u0c15\u0c4b \u0c1a\u0c4b\u0c1f \u0c28\u0c41\u0c02\u0c1a\u0c3f \u0c2e\u0c3e\u0c30\u0c4d\u0c2a\u0c41 \u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c3f\u0c02\u0c1a\u0c3e\u0c30\u0c41. \u0c2a\u0c47\u0c1c\u0c40 \u0c24\u0c3e\u0c1c\u0c3e \u0c35\u0c46\u0c30\u0c4d\u0c37\u0c28\u0c4d\u200c\u0c15\u0c41 \u0c30\u0c40\u0c32\u0c4b\u0c21\u0c4d \u0c05\u0c35\u0c41\u0c24\u0c4b\u0c02\u0c26\u0c3f \u2014 \u0c2e\u0c33\u0c4d\u0c33\u0c40 \u0c2a\u0c4d\u0c30\u0c2f\u0c24\u0c4d\u0c28\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f.',
        not_writer: '\u0c08 \u0c2f\u0c3e\u0c2a\u0c4d\u200c\u0c28\u0c41 \u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c47 \u0c05\u0c28\u0c41\u0c2e\u0c24\u0c3f \u0c2e\u0c40\u0c15\u0c41 \u0c32\u0c47\u0c26\u0c41.', not_granted: '\u0c08 \u0c35\u0c40\u0c15\u0c4d\u0c37\u0c23\u0c32\u0c4b \u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c3f\u0c02\u0c1a\u0c21\u0c02 \u0c15\u0c41\u0c26\u0c30\u0c26\u0c41. \u0c2f\u0c3e\u0c2a\u0c4d \u0c2f\u0c1c\u0c2e\u0c3e\u0c28\u0c3f\u0c17\u0c3e Claude \u0c32\u0c4b \u0c24\u0c46\u0c30\u0c35\u0c02\u0c21\u0c3f.',
        capability_disabled: '\u0c08 \u0c32\u0c3f\u0c02\u0c15\u0c4d\u200c\u0c32\u0c4b \u0c38\u0c47\u0c35\u0c4d \u0c1a\u0c47\u0c2f\u0c21\u0c02 \u0c15\u0c41\u0c26\u0c30\u0c26\u0c41 (\u0c2a\u0c2c\u0c4d\u0c32\u0c3f\u0c15\u0c4d\u200c\u0c17\u0c3e \u0c37\u0c47\u0c30\u0c4d \u0c1a\u0c47\u0c38\u0c3f\u0c28 \u0c32\u0c3f\u0c02\u0c15\u0c4d\u200c\u0c32\u0c4b \u0c07\u0c26\u0c3f \u0c2a\u0c28\u0c3f\u0c1a\u0c47\u0c2f\u0c26\u0c41). \u0c2e\u0c40 \u0c16\u0c3e\u0c24\u0c3e\u0c32\u0c4b \u0c24\u0c46\u0c30\u0c3f\u0c1a\u0c3f \u0c2a\u0c4d\u0c30\u0c2f\u0c24\u0c4d\u0c28\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f.',
        too_large: '\u0c21\u0c47\u0c1f\u0c3e \u0c1a\u0c3e\u0c32\u0c3e \u0c2a\u0c46\u0c26\u0c4d\u0c26\u0c26\u0c48\u0c02\u0c26\u0c3f. \u0c15\u0c4a\u0c28\u0c4d\u0c28\u0c3f \u0c2a\u0c3e\u0c24 \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c41\u0c32\u0c41 \u0c24\u0c4a\u0c32\u0c17\u0c3f\u0c02\u0c1a\u0c3f \u0c2a\u0c4d\u0c30\u0c2f\u0c24\u0c4d\u0c28\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f.', rate_limited: '\u0c1a\u0c3e\u0c32\u0c3e \u0c35\u0c47\u0c17\u0c02\u0c17\u0c3e \u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c3f\u0c38\u0c4d\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c30\u0c41. \u0c12\u0c15 \u0c28\u0c3f\u0c2e\u0c3f\u0c37\u0c02 \u0c06\u0c17\u0c3f \u0c2a\u0c4d\u0c30\u0c2f\u0c24\u0c4d\u0c28\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f.'
      }[code] || '\u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c3f\u0c02\u0c1a\u0c21\u0c02 \u0c15\u0c41\u0c26\u0c30\u0c32\u0c47\u0c26\u0c41 (' + (code || 'error') + '). \u0c15\u0c3e\u0c38\u0c47\u0c2a\u0c3e\u0c17\u0c3f \u0c2e\u0c33\u0c4d\u0c33\u0c40 \u0c2a\u0c4d\u0c30\u0c2f\u0c24\u0c4d\u0c28\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f.';
      U.status = { kind: 'err', text: msg }; render();
    });
  }

  /* ================= admin: draft editor ================= */
  function newDraft(R, C) { var pp = upPaper(), d = { id: '', title: paperOf(pp).title, paper: pp, date: '', R: R, C: C, black: [], nums: {}, ans: [], clues: [], src: 'upload', url: '', postId: '' }; for (var r = 0; r < R; r++) { d.black.push(new Array(C).fill(false)); d.ans.push(new Array(C).fill('')); } return d; }
  function draftFromPuzzle(p) {
    var d = newDraft(p.grid.length, p.grid[0].length);
    d.id = p.id; d.title = p.title; d.date = p.date; d.paper = p.paper || 'eenadu'; d.url = p.url || ''; d.postId = p.postId || ''; d.src = p.src || 'upload'; d.nums = Object.assign({}, p.nums);
    d.curBlk = p.blk || ''; d.curFin = p.fin || '';   // the post's pictures now (kept unless another is chosen)
    for (var r = 0; r < d.R; r++) for (var c = 0; c < d.C; c++) { d.black[r][c] = p.grid[r][c] === '#'; d.ans[r][c] = (p.ans && p.ans[r] && p.ans[r][c]) || ''; }
    d.clues = p.clues.map(function (c) { return { d: c.d, n: c.n, len: c.len, text: c.text }; });
    return d;
  }
  function draftToPuzzle(d, forPlay) {
    var grid = [], ans = [], nums = {};
    for (var r = 0; r < d.R; r++) { var g = '', a = []; for (var c = 0; c < d.C; c++) { g += d.black[r][c] ? '#' : '.'; a.push(d.black[r][c] ? '' : (d.ans[r][c] || '')); } grid.push(g); ans.push(a); }
    Object.keys(d.nums).forEach(function (k) { var x = k.split(','); if (+x[0] < d.R && +x[1] < d.C && !d.black[+x[0]][+x[1]] && d.nums[k]) nums[k] = +d.nums[k]; });
    var clues = d.clues.filter(function (c) { return c.n && (c.text || '').trim(); }).map(function (c) { return { d: c.d, n: +c.n, len: c.len ? +c.len : null, text: c.text.trim() }; });
    return { id: forPlay ? 'draft' : d.id, blkImg: d.blkImg || '', finImg: d.finImg || '', title: (d.title || '').trim() || paperOf(d.paper).title, paper: d.paper || 'eenadu', date: (d.date || '').trim(), src: d.src, url: d.url, postId: d.postId || '', grid: grid, nums: nums, ans: ans, clues: clues };
  }
  function forgetDraft() { if (D && D.uid) dropKept(D.uid); }
  function saveDraft() {
    if (D) { if (!D.uid) D.uid = Date.now().toString(36) + Math.random().toString(36).slice(2, 5); D.edited = Date.now(); var i = (S.drafts || []).map(function (x) { return x.uid; }).indexOf(D.uid); if (i >= 0) { var cp = JSON.parse(JSON.stringify(D)); cp.saved = S.drafts[i].saved; cp.published = S.drafts[i].published; cp.pubUrl = S.drafts[i].pubUrl; S.drafts[i] = cp; } }
    S.draft = D; save();
  }
  // drafts the admin keeps on this phone (a list), besides the one open now
  function draftHasWork(d) {
    if (!d) return false;
    return !!(d.date || '').trim() || (d.clues || []).length > 0 || (d.black || []).some(function (r) { return r.some(function (x) { return x; }); }) ||
      (d.ans || []).some(function (r) { return r.some(function (x) { return x; }); });
  }
  function draftLabel(d) { return (d.title || '\u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02') + (d.date ? ' \u00b7 ' + d.date : ''); }
  function keepDraft(d, quiet) {
    if (!d) return;
    if (!d.uid) d.uid = Date.now().toString(36);
    var copy = JSON.parse(JSON.stringify(d)); copy.saved = Date.now();
    S.drafts = (S.drafts || []).filter(function (x) { return x.uid !== copy.uid; });
    S.drafts.unshift(copy); S.drafts = S.drafts.slice(0, 15); save();
    if (!quiet) toast('\u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d \u0c38\u0c47\u0c35\u0c4d \u0c05\u0c2f\u0c3f\u0c02\u0c26\u0c3f (\u0c08 \u0c2b\u0c4b\u0c28\u0c4d\u200c\u0c32\u0c4b) \u2014 \u0c28\u0c3f\u0c30\u0c4d\u0c35\u0c3e\u0c39\u0c23 \u0c2a\u0c47\u0c1c\u0c40\u0c32\u0c4b \u201c\u0c38\u0c47\u0c35\u0c4d \u0c1a\u0c47\u0c38\u0c3f\u0c28 \u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d\u200c\u0c32\u0c41\u201d \u0c28\u0c41\u0c02\u0c1a\u0c3f \u0c0e\u0c2a\u0c4d\u0c2a\u0c41\u0c21\u0c48\u0c28\u0c3e \u0c2e\u0c33\u0c4d\u0c33\u0c40 \u0c24\u0c46\u0c30\u0c35\u0c35\u0c1a\u0c4d\u0c1a\u0c41.');
  }
  // before a new upload or post replaces the open draft, keep the old one so nothing is lost
  function stashDraft() { if (D && draftHasWork(D)) { keepDraft(D, true); setTimeout(function () { toast('\u0c2e\u0c41\u0c02\u0c26\u0c1f\u0c3f \u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d (' + draftLabel(S.drafts[0] || {}) + ') \u201c\u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d\u200c\u0c32\u0c41\u201d \u0c1c\u0c3e\u0c2c\u0c3f\u0c24\u0c3e\u0c32\u0c4b \u0c09\u0c02\u0c26\u0c3f \u2014 \u0c28\u0c3f\u0c30\u0c4d\u0c35\u0c3e\u0c39\u0c23 \u0c2a\u0c47\u0c1c\u0c40 \u0c28\u0c41\u0c02\u0c1a\u0c3f \u0c0e\u0c2a\u0c4d\u0c2a\u0c41\u0c21\u0c48\u0c28\u0c3e \u0c24\u0c46\u0c30\u0c35\u0c02\u0c21\u0c3f.'); }, 1200); } }
  function dropKept(uid) { S.drafts = (S.drafts || []).filter(function (x) { return x.uid !== uid; }); save(); }
  function hhmm(t) { var d = new Date(t), p2 = function (n) { return (n < 10 ? '0' : '') + n; }; return p2(d.getDate()) + '.' + p2(d.getMonth() + 1) + ' \u00b7 ' + p2(d.getHours()) + ':' + p2(d.getMinutes()); }
  function keptDraftsHTML() {
    var list = (S.drafts || []).filter(function (x) { return !D || x.uid !== D.uid; });
    if (!list.length) return '';
    function row(x, open) {
      var n = (x.clues || []).filter(function (c) { return (c.text || '').trim(); }).length;
      return '<div class="keptrow' + (open ? ' open' : '') + '"><div class="t"><b>' + esc(x.date || '\u0c24\u0c47\u0c26\u0c40 \u0c32\u0c47\u0c26\u0c41') + (open ? ' \u00b7 \u0c24\u0c46\u0c30\u0c3f\u0c1a\u0c3f \u0c09\u0c02\u0c26\u0c3f' : x.published ? ' \u00b7 \u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c3f\u0c02\u0c1a\u0c3f\u0c02\u0c26\u0c3f' : '') + '</b><small>' + esc(x.title || '\u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02') + ' \u00b7 ' + n + ' \u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32\u0c41 \u00b7 ' + (x.published ? '\u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c23: ' + hhmm(x.published) : '\u0c2e\u0c3e\u0c30\u0c4d\u0c2a\u0c41: ' + hhmm(x.edited || x.saved || Date.now())) + '</small></div>' +
        (open ? '<a class="smallbtn pri" href="#edit">\u0c15\u0c4a\u0c28\u0c38\u0c3e\u0c17\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f</a>' : '<button class="smallbtn" data-act="draft-open" data-v="' + esc(x.uid) + '">\u0c24\u0c46\u0c30\u0c35\u0c02\u0c21\u0c3f</button>' +
        '<button class="smallbtn danger" data-act="draft-del" data-v="' + esc(x.uid) + '">' + (U.confirm === 'ddel-' + x.uid ? '\u0c16\u0c1a\u0c4d\u0c1a\u0c3f\u0c24\u0c2e\u0c3e?' : '\u0c24\u0c40\u0c38\u0c3f\u0c35\u0c47\u0c2f\u0c3f') + '</button>') + '</div>';
    }
    return '<div class="kept"><h3 class="lbl">\u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d\u200c\u0c32\u0c41 (\u0c08 \u0c2b\u0c4b\u0c28\u0c4d\u200c\u0c32\u0c4b) \u00b7 ' + (list.length + (D ? 1 : 0)) + '</h3>' + (D ? row(D, true) : '') + list.map(function (x) { return row(x, false); }).join('') + '</div>';
  }
  function draftAutoNumber() { var p = draftToPuzzle(D, true); autoNumber(p); D.nums = p.nums; saveDraft(); }
  function resizeDraft(R, C) {
    R = Math.max(3, Math.min(25, R | 0)); C = Math.max(3, Math.min(25, C | 0));
    var nd = newDraft(R, C);
    for (var r = 0; r < Math.min(R, D.R); r++) for (var c = 0; c < Math.min(C, D.C); c++) { nd.black[r][c] = D.black[r][c]; nd.ans[r][c] = D.ans[r][c]; }
    Object.keys(D.nums).forEach(function (k) { var x = k.split(','); if (+x[0] < R && +x[1] < C) nd.nums[k] = D.nums[k]; });
    nd.id = D.id; nd.title = D.title; nd.date = D.date; nd.paper = D.paper; nd.clues = D.clues; nd.src = D.src; nd.url = D.url; nd.postId = D.postId;
    D = nd; saveDraft();
  }
  function draftFromAI(j, fallbackDate) {
    var grid = Array.isArray(j.grid) ? j.grid.map(function (r) { return Array.isArray(r) ? r.map(function (x) { return x === '#' || x === 1 || x === true ? '#' : '.'; }).join('') : String(r || ''); }) : [];
    var R = Math.max(3, Math.min(25, parseInt(j.rows, 10) || grid.length || 12));
    var C = Math.max(3, Math.min(25, parseInt(j.cols, 10) || (grid[0] || '').length || 12));
    var d = newDraft(R, C);
    for (var r = 0; r < R; r++) for (var c = 0; c < C; c++) d.black[r][c] = ((grid[r] || '')[c] || '.') === '#';
    (Array.isArray(j.numbers) ? j.numbers : []).forEach(function (t) { if (Array.isArray(t) && t.length >= 3) { var rr = +t[0], cc = +t[1], n = +t[2]; if (rr >= 0 && cc >= 0 && rr < R && cc < C && n > 0) d.nums[rr + ',' + cc] = n; } });
    ['across', 'down'].forEach(function (dir) {
      (Array.isArray(j[dir]) ? j[dir] : []).forEach(function (cl) {
        if (!cl) return; var n = parseInt(cl.n, 10); if (!n) return;
        var text = String(cl.text || '').replace(/\s*\(\s*\d+\s*\)\s*$/, '').trim();
        d.clues.push({ d: dir === 'across' ? 'A' : 'D', n: n, len: parseInt(cl.len, 10) || null, text: text });
      });
    });
    if (Array.isArray(j.answers)) applyAnswers(d, j.answers);
    d.title = String(j.title || '').replace(/\s*-?\s*\d{2}\.\d{2}\.\d{4}\s*$/, '').trim() || paperOf(d.paper).title;
    d.date = /^\d{2}\.\d{2}\.\d{4}$/.test(j.date || '') ? j.date : (fallbackDate || '');
    if (!Object.keys(d.nums).length) { D = d; draftAutoNumber(); d = D; }
    return d;
  }
  // a reader's rows \u2192 a full grid of letters. A row that does not line up with the draft's squares (a square skipped or
  // added, which would shift every later letter) is put back on the row's open squares in order; if even that does not fit, the row is doubtful.
  function gridFromRows(d, answers) {
    var g = [], bad = {};
    for (var r = 0; r < d.R; r++) {
      var row = answers[r], cells = Array.isArray(row) ? row.map(function (x) { return String(x == null ? '' : x).trim(); }) : (String(row || '').match(AKSHARA) || []);
      var out = []; for (var c = 0; c < d.C; c++) out.push('');
      var opens = []; for (c = 0; c < d.C; c++) if (!d.black[r][c]) opens.push(c);
      var fits = cells.length === d.C && opens.every(function (c2) { var v = cells[c2]; return v && v !== '#' && v !== '.'; });
      if (fits) opens.forEach(function (c2) { out[c2] = cells[c2]; });
      else {
        var letters = cells.filter(function (v) { return v && v !== '#' && v !== '.'; });
        if (letters.length === opens.length) opens.forEach(function (c2, i) { out[c2] = letters[i]; });
        else { opens.forEach(function (c2) { var v = cells[c2]; if (v && v !== '#' && v !== '.') out[c2] = v; bad[key(r, c2)] = 1; }); }
      }
      g.push(out.map(function (v) { return String(v || '').normalize('NFC'); }));
    }
    return { grid: g, bad: bad };
  }
  function applyAnswers(d, answers) { mergeAnswers(d, gridFromRows(d, answers), 'gemini'); }
  // put a reader's letters in; squares you corrected stay as they are. If the other reader already filled the grid,
  // squares where the two agree are very likely right; where they differ the square turns yellow (Gemini's letter is kept).
  function mergeAnswers(d, res, by) {
    var prevBy = d.ansBy, prev = d.ans.map(function (row) { return row.slice(); }), chg = d.chg || {}, low = {}, same = 0, diff = 0;
    var cmp = prevBy && prevBy !== by && prevBy !== 'mixed';
    for (var r = 0; r < d.R; r++) for (var c = 0; c < d.C; c++) {
      if (d.black[r][c]) continue;
      var k = key(r, c), v = res.grid[r][c] || '', o = prev[r][c] || '';
      if (chg[k]) continue;                                   // the admin's own correction wins
      if (cmp && o && v) {
        if (o === v) { same++; d.ans[r][c] = v; }
        else { diff++; low[k] = 1; d.ans[r][c] = by === 'gemini' ? v : o; }
      } else {
        if (v) d.ans[r][c] = v;
        if (!v || res.bad[k] || (res.low && res.low[k])) low[k] = 1;
      }
    }
    d.low = low; d.ansBy = cmp ? 'mixed' : by; d.ansCmp = cmp ? { same: same, diff: diff } : null;
    return d.ansCmp;
  }

  /* ================= admin: reading images and PDFs with Claude ================= */
  function loadScript(src) { return new Promise(function (res, rej) { var s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = function () { rej(new Error('script')); }; document.head.appendChild(s); }); }
  var PDFJS = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/';
  function pdfToBlobs(file, maxPages) {
    var ready = window.pdfjsLib ? Promise.resolve() : loadScript(PDFJS + 'pdf.min.js').then(function () {
      try { window.pdfjsLib.GlobalWorkerOptions.workerPort = new Worker(URL.createObjectURL(new Blob(["importScripts('" + PDFJS + "pdf.worker.min.js');"], { type: 'application/javascript' }))); }
      catch (e) { window.pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS + 'pdf.worker.min.js'; }
    });
    return ready.then(function () { return file.arrayBuffer(); }).then(function (buf) { return window.pdfjsLib.getDocument({ data: buf }).promise; }).then(function (pdf) {
      var n = Math.min(pdf.numPages, maxPages), out = [], chain = Promise.resolve();
      for (var i = 1; i <= n; i++) (function (i) {
        chain = chain.then(function () { return pdf.getPage(i); }).then(function (page) {
          var v1 = page.getViewport({ scale: 1 }), scale = Math.min(3, 2400 / Math.max(v1.width, v1.height));
          var vp = page.getViewport({ scale: scale }), cv = document.createElement('canvas');
          cv.width = Math.ceil(vp.width); cv.height = Math.ceil(vp.height);
          return page.render({ canvasContext: cv.getContext('2d'), viewport: vp }).promise.then(function () { return new Promise(function (res) { cv.toBlob(function (b) { out.push(b); res(); }, 'image/jpeg', 0.92); }); });
        });
      })(i);
      return chain.then(function () { return out; });
    });
  }
  function blobToImage(b) { return new Promise(function (res, rej) { var u = URL.createObjectURL(b), im = new Image(); im.onload = function () { res(im); }; im.onerror = rej; im.src = u; }); }
  // the reader sees about 1.2 megapixels per image, so a big page also goes in as four zoomed quarters
  function withTiles(blob, budget) {
    return blobToImage(blob).then(function (im) {
      var W = im.naturalWidth, H = im.naturalHeight, out = [blob];
      if (W * H <= 1.6e6 || budget < 5) return out;
      var ov = 0.08, parts = [[0, 0], [1, 0], [0, 1], [1, 1]], jobs = parts.map(function (q) {
        var x0 = Math.max(0, Math.floor((q[0] * 0.5 - (q[0] ? ov : 0)) * W)), y0 = Math.max(0, Math.floor((q[1] * 0.5 - (q[1] ? ov : 0)) * H));
        var w = Math.min(W - x0, Math.ceil((0.5 + ov) * W)), h = Math.min(H - y0, Math.ceil((0.5 + ov) * H));
        var cv = document.createElement('canvas'); cv.width = w; cv.height = h; cv.getContext('2d').drawImage(im, x0, y0, w, h, 0, 0, w, h);
        return new Promise(function (res) { cv.toBlob(function (b) { res(b); }, 'image/jpeg', 0.92); });
      });
      return Promise.all(jobs).then(function (tiles) { return out.concat(tiles); });
    });
  }
  function prepareImages(files, maxCount) {
    var list = Array.prototype.slice.call(files || []), blobs = [], chain = Promise.resolve();
    list.forEach(function (f) {
      chain = chain.then(function () {
        if (/pdf$/i.test(f.type) || /\.pdf$/i.test(f.name)) return pdfToBlobs(f, 3).then(function (bs) { blobs = blobs.concat(bs); });
        if (/^image\//.test(f.type)) blobs.push(f);
      });
    });
    return chain.then(function () {
      if (blobs.length !== 1) return blobs.slice(0, maxCount);
      return withTiles(blobs[0], maxCount).then(function (b) { return b.slice(0, maxCount); });
    });
  }
  var PROMPT_PUZZLE =
    'You are digitising a Telugu crossword (\u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02) from photos or scans of a newspaper page. ' +
    'The images show one puzzle grid and its clues: \u0c05\u0c21\u0c4d\u0c21\u0c02 = across, \u0c28\u0c3f\u0c32\u0c41\u0c35\u0c41 = down. If there is more than one image, the first is usually the whole page and the others are zoomed parts of the same page; use the zoomed parts to read small text.\n\n' +
    'Reply with only one JSON object, no other text:\n' +
    '{"title": "puzzle name as printed, or empty", "date": "DD.MM.YYYY or empty", "rows": <int>, "cols": <int>,\n' +
    ' "grid": ["one string per row, exactly cols characters: # for a black or shaded square, . for a white square"],\n' +
    ' "numbers": [[row, col, number], ...]  (every white square that carries a printed clue number; row and col start at 0 from the top-left),\n' +
    ' "across": [{"n": <number>, "text": "the clue exactly as printed in Telugu, without the length in brackets", "len": <the number in brackets, or null>}],\n' +
    ' "down": [same shape],\n' +
    ' "answers": null, or, only if a solved grid with letters is visible: [[one string per square: "" for black squares, otherwise the single Telugu akshara written there, e.g. "\u0c15\u0c4d\u0c37", "\u0c2e\u0c4d\u0c2e", "\u0c30\u0c02"]]}\n\n' +
    'Count rows and columns carefully by looking at the grid lines. Copy Telugu text exactly; do not translate or correct it. Include every clue you can see. If a part is hard to read, give your best reading and continue.\n\n' +
    'Eenadu web pages saved as PDF: the puzzle is called \u0c2a\u0c26\u0c15\u0c47\u0c33\u0c3f or \u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02. Blocked squares may be drawn as coloured squares (yellow-green leaves), purple circles with a white star or small flowers instead of black: mark all of them #. Clue numbers are small red numbers in the squares. The clues may be spread over two or three pages under \u0c05\u0c21\u0c4d\u0c21\u0c02 and \u0c28\u0c3f\u0c32\u0c41\u0c35\u0c41; ignore other puzzles such as \u0c38\u0c41\u0c21\u0c4b\u0c15\u0c41, news links and advertisements. Sakshi (\u0c38\u0c3e\u0c15\u0c4d\u0c37\u0c3f \u0c2b\u0c28\u0c4d\u200c\u0c21\u0c47) pages: the puzzle is \u0c2a\u0c26\u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02-NNN, its blocked squares are light grey squares with a small white flower; its clues are in a box \u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32\u0c41 with an \u0c05\u0c21\u0c4d\u0c21\u0c02 box above a \u0c28\u0c3f\u0c32\u0c41\u0c35\u0c41 box, each in three columns. Other papers may draw blocked squares black or shaded: mark them all #. A white square with blocked squares on all four sides is numbered too and has a one-letter \u0c05\u0c21\u0c4d\u0c21\u0c02 clue, e.g. "20. ... (1)": include it in across with len 1. When a close-up of the grid is included, use it for the squares and numbers.';
  var PROMPT_ANSWERS =
    'This image shows a SOLVED Telugu crossword grid (\u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02 \u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32\u0c41). On Eenadu pages it is the \u0c2a\u0c26\u0c15\u0c47\u0c33\u0c3f grid in the section \u0c17\u0c24\u0c35\u0c3e\u0c30\u0c02 \u0c38\u0c2e\u0c3e\u0c27\u0c3e\u0c28\u0c3e\u0c32\u0c41 (last week\'s answers), usually beside a \u0c38\u0c41\u0c21\u0c4b\u0c15\u0c41 grid \u2014 read only the \u0c2a\u0c26\u0c15\u0c47\u0c33\u0c3f grid; its blocked squares may be purple circles with stars or small flowers. On Sakshi pages it is the small grid titled \u201c\u0c2a\u0c26\u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02 - NNN \u0c1c\u0c35\u0c3e\u0c2c\u0c41\u201d (its title written sideways), next to a \u0c38\u0c41\u0c21\u0c4b\u0c15\u0c41 answer; its blocked squares are light grey with a white flower. Read only the crossword grid that matches the pattern below. The grid has ROWS rows and COLS columns; black squares are marked # in this pattern, one string per row:\nPATTERN\n\n' +
    'Reply with only one JSON object: {"answers": [[one string per square, row by row: "" for black squares, otherwise the single Telugu akshara in that square, e.g. "\u0c15\u0c4d\u0c37", "\u0c2e\u0c4d\u0c2e", "\u0c30\u0c02"]]}. Keep exactly ROWS rows and COLS entries per row.';
  function aiRead(kind, files) {
    if (!IS_CLAUDE) return geminiRead(kind, files);
    if (U.busy) return;
    var date = (document.getElementById('up-date') || {}).value || '';
    U.busy = 'ai'; U.status = { kind: 'wait', text: '\u0c1a\u0c3f\u0c24\u0c4d\u0c30\u0c3e\u0c32\u0c41 \u0c38\u0c3f\u0c26\u0c4d\u0c27\u0c02 \u0c1a\u0c47\u0c38\u0c4d\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c02\u2026' }; render();
    var sample, lim;
    cap('sample').then(function (s) {
      sample = s; if (!sample) throw { code: 'not_granted' };
      return sample.limits().catch(function () { return null; });
    }).then(function (l) {
      lim = l; if (!lim || !lim.images) throw { code: 'images_unavailable' };
      return smartImages(kind, files, lim.images.maxCount);
    }).then(function (blobs) {
      if (!blobs.length) throw { code: 'no_images' };
      keepSourceImage(kind, blobs[0]);
      var prompt = PROMPT_PUZZLE;
      if (kind === 'answers') {
        var pz = draftToPuzzle(D, true);
        prompt = PROMPT_ANSWERS.replace(/ROWS/g, D.R).replace(/COLS/g, D.C).replace('PATTERN', pz.grid.join('\n'));
      } else if (date) prompt += '\nThe admin says this puzzle is dated ' + date + '.';
      U.ctl = new AbortController();
      U.status = { kind: 'wait', text: 'Claude \u0c1a\u0c26\u0c41\u0c35\u0c41\u0c24\u0c4b\u0c02\u0c26\u0c3f\u2026 (' + blobs.length + ' \u0c1a\u0c3f\u0c24\u0c4d\u0c30\u0c3e\u0c32\u0c41). \u0c2a\u0c46\u0c26\u0c4d\u0c26 \u0c17\u0c21\u0c3f\u0c15\u0c3f \u0c12\u0c15\u0c1f\u0c4d\u0c30\u0c46\u0c02\u0c21\u0c41 \u0c28\u0c3f\u0c2e\u0c3f\u0c37\u0c3e\u0c32\u0c41 \u0c2a\u0c1f\u0c4d\u0c1f\u0c35\u0c1a\u0c4d\u0c1a\u0c41.' }; render();
      return sample.json(prompt, { images: blobs, modelTier: 'complex', signal: U.ctl.signal, onText: function (u) { var el = document.getElementById('ai-progress'); if (el) el.textContent = '\u0c05\u0c02\u0c26\u0c41\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c26\u0c3f: ' + u.text.length + ' \u0c05\u0c15\u0c4d\u0c37\u0c30\u0c3e\u0c32\u0c41'; } });
    }).then(function (j) {
      U.busy = ''; U.ctl = null;
      if (kind === 'answers') {
        if (!j || !Array.isArray(j.answers)) throw { code: 'invalid_json' };
        applyAnswers(D, j.answers); saveDraft();
        U.status = { kind: 'ok', text: '\u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32\u0c41 \u0c28\u0c3f\u0c02\u0c2a\u0c3e\u0c02. \u0c2a\u0c4d\u0c30\u0c24\u0c3f \u0c17\u0c21\u0c3f\u0c28\u0c40 \u0c12\u0c15\u0c38\u0c3e\u0c30\u0c3f \u0c1a\u0c42\u0c38\u0c3f \u0c38\u0c30\u0c3f\u0c26\u0c3f\u0c26\u0c4d\u0c26\u0c02\u0c21\u0c3f.' }; U.emode = 'ans'; render(); return;
      }
      stashDraft(); D = draftFromAI(j || {}, date); D.src = 'upload'; saveDraft();
      setTimeout(function () { readPendingAnswers(aiRead); }, 0);
      U.status = { kind: 'ok', text: '\u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d \u0c38\u0c3f\u0c26\u0c4d\u0c27\u0c02. \u0c17\u0c21\u0c3f, \u0c38\u0c02\u0c16\u0c4d\u0c2f\u0c32\u0c41, \u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32\u0c41 \u0c1a\u0c3f\u0c24\u0c4d\u0c30\u0c02\u0c24\u0c4b \u0c2a\u0c4b\u0c32\u0c4d\u0c1a\u0c3f \u0c38\u0c30\u0c3f\u0c1a\u0c42\u0c21\u0c02\u0c21\u0c3f, \u0c24\u0c30\u0c4d\u0c35\u0c3e\u0c24 \u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f.' };
      location.hash = '#edit';
    }, function (e) {
      U.busy = ''; U.ctl = null;
      var code = e && e.code, msg = {
        cancelled: '\u0c06\u0c2a\u0c47\u0c36\u0c3e\u0c02.', not_granted: '\u0c08 \u0c35\u0c40\u0c15\u0c4d\u0c37\u0c23\u0c32\u0c4b Claude \u0c28\u0c41 \u0c09\u0c2a\u0c2f\u0c4b\u0c17\u0c3f\u0c02\u0c1a\u0c21\u0c02 \u0c15\u0c41\u0c26\u0c30\u0c26\u0c41, \u0c32\u0c47\u0c26\u0c3e \u0c05\u0c28\u0c41\u0c2e\u0c24\u0c3f \u0c07\u0c35\u0c4d\u0c35\u0c32\u0c47\u0c26\u0c41. \u0c16\u0c3e\u0c33\u0c40 \u0c17\u0c21\u0c3f\u0c24\u0c4b \u0c1a\u0c47\u0c24\u0c3f\u0c24\u0c4b \u0c15\u0c42\u0c21\u0c3e \u0c24\u0c2f\u0c3e\u0c30\u0c41 \u0c1a\u0c47\u0c2f\u0c35\u0c1a\u0c4d\u0c1a\u0c41.',
        images_unavailable: '\u0c08 \u0c35\u0c40\u0c15\u0c4d\u0c37\u0c23\u0c32\u0c4b \u0c1a\u0c3f\u0c24\u0c4d\u0c30\u0c3e\u0c32\u0c41 \u0c2a\u0c02\u0c2a\u0c21\u0c02 \u0c15\u0c41\u0c26\u0c30\u0c26\u0c41. Claude \u0c2f\u0c3e\u0c2a\u0c4d \u0c32\u0c47\u0c26\u0c3e claude.ai \u0c32\u0c4b \u0c24\u0c46\u0c30\u0c3f\u0c1a\u0c3f \u0c2a\u0c4d\u0c30\u0c2f\u0c24\u0c4d\u0c28\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f.', no_images: '\u0c1a\u0c3f\u0c24\u0c4d\u0c30\u0c02 (JPG/PNG) \u0c32\u0c47\u0c26\u0c3e PDF \u0c0e\u0c02\u0c1a\u0c41\u0c15\u0c4b\u0c02\u0c21\u0c3f.',
        image_rejected: '\u0c08 \u0c1a\u0c3f\u0c24\u0c4d\u0c30\u0c3e\u0c28\u0c4d\u0c28\u0c3f \u0c1a\u0c26\u0c35\u0c32\u0c47\u0c15\u0c2a\u0c4b\u0c2f\u0c3e\u0c02. \u0c1a\u0c3f\u0c28\u0c4d\u0c28 \u0c2b\u0c48\u0c32\u0c4d \u0c32\u0c47\u0c26\u0c3e \u0c35\u0c47\u0c30\u0c47 \u0c2b\u0c4b\u0c1f\u0c4b \u0c2a\u0c4d\u0c30\u0c2f\u0c24\u0c4d\u0c28\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f.', rate_limited: '\u0c1a\u0c3e\u0c32\u0c3e \u0c05\u0c2d\u0c4d\u0c2f\u0c30\u0c4d\u0c25\u0c28\u0c32\u0c41. \u0c15\u0c3e\u0c38\u0c47\u0c2a\u0c3e\u0c17\u0c3f \u0c2a\u0c4d\u0c30\u0c2f\u0c24\u0c4d\u0c28\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f.',
        invalid_json: '\u0c1a\u0c26\u0c3f\u0c35\u0c3f\u0c28 \u0c38\u0c2e\u0c3e\u0c1a\u0c3e\u0c30\u0c02 \u0c38\u0c30\u0c3f\u0c17\u0c4d\u0c17\u0c3e \u0c30\u0c3e\u0c32\u0c47\u0c26\u0c41. \u0c2e\u0c33\u0c4d\u0c33\u0c40 \u0c2a\u0c4d\u0c30\u0c2f\u0c24\u0c4d\u0c28\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f, \u0c32\u0c47\u0c26\u0c3e \u0c17\u0c21\u0c3f, \u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32\u0c28\u0c41 \u0c35\u0c47\u0c30\u0c4d\u0c35\u0c47\u0c30\u0c41 \u0c2b\u0c4b\u0c1f\u0c4b\u0c32\u0c41\u0c17\u0c3e \u0c07\u0c35\u0c4d\u0c35\u0c02\u0c21\u0c3f.', refused: '\u0c08 \u0c1a\u0c3f\u0c24\u0c4d\u0c30\u0c3e\u0c28\u0c4d\u0c28\u0c3f \u0c1a\u0c26\u0c35\u0c21\u0c02 \u0c15\u0c41\u0c26\u0c30\u0c32\u0c47\u0c26\u0c41.',
        session_expired: '\u0c2e\u0c33\u0c4d\u0c33\u0c40 \u0c38\u0c48\u0c28\u0c4d \u0c07\u0c28\u0c4d \u0c1a\u0c47\u0c2f\u0c02\u0c21\u0c3f.'
      }[code] || '\u0c1a\u0c26\u0c35\u0c21\u0c02 \u0c15\u0c41\u0c26\u0c30\u0c32\u0c47\u0c26\u0c41 (' + (code || (e && e.message) || 'error') + ').';
      U.status = { kind: code === 'cancelled' ? 'wait' : 'err', text: msg }; render();
    });
  }

  /* ================= admin: reading a photo or PDF on the phone itself (no AI, no key) ================= */
  // For Eenadu's web pages saved as PDF the grid, its page and the clue columns are found by themselves;
  // for a newspaper photo the admin draws the boxes. Everything found is shown for review before the draft.
  var TESS = 'https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/tesseract.min.js';
  var SC = null, TW = null, TPROG = null;
  window.__epvScan = function () { return SC; };   // for checking the reader in tests
  function pdfLib() {
    if (window.pdfjsLib) return Promise.resolve(window.pdfjsLib);
    return loadScript(PDFJS + 'pdf.min.js').then(function () {
      try { window.pdfjsLib.GlobalWorkerOptions.workerPort = new Worker(URL.createObjectURL(new Blob(["importScripts('" + PDFJS + "pdf.worker.min.js');"], { type: 'application/javascript' }))); }
      catch (e) { window.pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS + 'pdf.worker.min.js'; }
      return window.pdfjsLib;
    });
  }
  function tessWorker() {
    if (TW) return TW;
    TW = loadScript(TESS).then(function () { return window.Tesseract.createWorker('tel', 1, { logger: function (m) { if (TPROG) TPROG(m); } }); });
    TW.catch(function () { TW = null; });
    return TW;
  }
  function scanMsg(text, kind) {
    U.status = { kind: kind || 'wait', text: text };
    var el = document.querySelector('#view .status > span');
    if (el && route() === 'scan') { el.textContent = text; el.parentNode.className = 'status' + (kind === 'err' ? ' err' : kind === 'ok' ? ' ok' : ''); } else render();
  }
  function loadPages(files) {
    var pages = [], chain = Promise.resolve();
    Array.prototype.slice.call(files || []).forEach(function (f) {
      chain = chain.then(function () {
        if (/pdf$/i.test(f.type) || /\.pdf$/i.test(f.name)) return pdfLib().then(function (lib) { return f.arrayBuffer().then(function (b) { return lib.getDocument({ data: b }).promise; }); }).then(function (pdf) { for (var i = 1; i <= Math.min(pdf.numPages, 10); i++) pages.push({ pdf: pdf, num: i }); });
        if (/^image\//.test(f.type)) pages.push({ blob: f });
      });
    });
    return chain.then(function () { return pages; });
  }
  // one page drawn at most `max` pixels on its long side; `src` tells how to cut sharper parts from it later
  function renderPage(pg, max) {
    var cv = document.createElement('canvas');
    if (pg.blob) return blobToImage(pg.blob).then(function (im) {
      var W0 = im.naturalWidth, H0 = im.naturalHeight, s = Math.min(1, max / Math.max(W0, H0));
      cv.width = Math.round(W0 * s); cv.height = Math.round(H0 * s); cv.getContext('2d').drawImage(im, 0, 0, cv.width, cv.height);
      return { cv: cv, src: { img: im, k: W0 / cv.width } };
    });
    return pg.pdf.getPage(pg.num).then(function (page) {
      var v1 = page.getViewport({ scale: 1 }), s = max / Math.max(v1.width, v1.height), vp = page.getViewport({ scale: s });
      cv.width = Math.ceil(vp.width); cv.height = Math.ceil(vp.height);
      var ctx = cv.getContext('2d'); ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, cv.width, cv.height);
      return page.render({ canvasContext: ctx, viewport: vp }).promise.then(function () { return { cv: cv, src: { page: page, base: s } }; });
    });
  }

  /* --- finding the grid: evenly spaced lines (Eenadu's pink lines, or dark lines), square cells --- */
  function lineMask(d, W, H) {
    var m = new Uint8Array(W * H);
    for (var i = 0, p = 0; i < m.length; i++, p += 4) {
      var r = d[p], g = d[p + 1], b = d[p + 2], lum = (r * 299 + g * 587 + b * 114) / 1000;
      if (r > 150 && r - g > 10 && r - b > 12 && lum < 240) m[i] = 1;          // Eenadu's pink/red grid lines
    }
    return m;
  }
  function lineCenters(counts, rel, minabs) {
    var mx = 0, i; for (i = 0; i < counts.length; i++) if (counts[i] > mx) mx = counts[i];
    var thr = Math.max(rel * mx, minabs), out = [], start = -1, last = -9;
    if (mx < minabs) return out;
    for (i = 0; i < counts.length; i++) if (counts[i] >= thr) { if (i - last > 2) { if (start >= 0) out.push((start + last) / 2); start = i; } last = i; }
    if (start >= 0) out.push((start + last) / 2);
    return out;
  }
  function evenRuns(c, minlen, wantGap) {
    var out = [];
    for (var i = 0; i < c.length; i++) for (var j = i + 1; j < c.length; j++) {
      var gap = c[j] - c[i];
      if (gap < 8 || (wantGap && Math.abs(gap - wantGap) > 0.25 * wantGap)) continue;
      var run = [c[i], c[j]], k = j;
      for (;;) {
        var nx = -1;
        for (var q = k + 1; q < c.length; q++) if (Math.abs(c[q] - run[run.length - 1] - gap) <= 0.2 * gap) { nx = q; break; }
        if (nx < 0) break; run.push(c[nx]); k = nx;
      }
      if (run.length >= minlen) out.push(run);
    }
    out.sort(function (a, b) { return b.length - a.length; });
    var keep = [];
    out.forEach(function (r) { if (!keep.some(function (k) { return r[0] >= k[0] - 1 && r[r.length - 1] <= k[k.length - 1] + 1; })) keep.push(r); });
    return keep;
  }
  function findGrid(d, W, H) {
    var m0 = lineMask(d, W, H), mh = new Uint8Array(W * H), mv = new Uint8Array(W * H), x, y, T = 4;
    // a second reading with only thin strokes: a pink banner touching the grid is filled, not a line. Whichever finds the
    // bigger grid wins (shaded blocked squares can hide lines in the thin reading instead).
    for (y = 0; y < H; y++) for (x = 0; x < W; x++) { var i = y * W + x; if (!m0[i]) continue;
      if (!(y >= T && y + T < H && m0[i - T * W] && m0[i + T * W])) mh[i] = 1;
      if (!(x >= T && x + T < W && m0[i - T] && m0[i + T])) mv[i] = 1; }
    function scan(m, n2) {
      var hc = new Uint32Array(H), best = null;
      for (y = 0; y < H; y++) { var s = 0, o = y * W; for (x = 0; x < W; x++) s += m[o + x]; hc[y] = s; }
      // 0.3: rows with many blocked squares have short lines (27.09.2026: blue blocks, a heavy top border)
      evenRuns(lineCenters(hc, 0.3, 20), 6).slice(0, 8).forEach(function (rr) {
        var y0 = Math.round(rr[0]), y1 = Math.round(rr[rr.length - 1]), gy = (y1 - y0) / (rr.length - 1), vc = new Uint32Array(W);
        for (y = y0; y <= y1; y++) { var o2 = y * W; for (x = 0; x < W; x++) vc[x] += n2[o2 + x]; }
        evenRuns(lineCenters(vc, 0.3, Math.round(0.25 * (y1 - y0))), 6, gy).forEach(function (cc) {
          var n = Math.min(rr.length, cc.length) - 1, score = n * 1000 + (rr.length - 1) * (cc.length - 1);
          if (!best || score > best.score) best = { score: score, R: rr.length - 1, C: cc.length - 1, x0: cc[0], x1: cc[cc.length - 1], y0: y0, y1: y1, mh: m, mv: n2 };
        });
      });
      return best;
    }
    var a = scan(m0, m0), b2 = scan(mh, mv), best = !a ? b2 : !b2 ? a : b2.score > a.score ? b2 : a;
    if (!best) return best;
    // the number of rows / columns: the count whose evenly spaced lines fall on the strongest strokes (a line the first pass
    // missed or a stray one it took makes the squares drift otherwise)
    function refine(prof, lo, hi, n0) {
      function sc(n) { var gap = (hi - lo) / n, t = 0; for (var k = 1; k < n; k++) { var c = Math.round(lo + k * gap), mx = 0; for (var q = c - 2; q <= c + 2; q++) mx = Math.max(mx, prof[q] || 0); t += mx; } return t / (n - 1); }
      var bn = n0, bs = sc(n0);
      for (var n = Math.max(5, n0 - 3); n <= n0 + 3; n++) { if (n === n0 || (hi - lo) / n < 8) continue; var v = sc(n); if (v > 1.15 * bs) { bn = n; bs = v; } }
      return bn;
    }
    var ph = new Float32Array(H), pv = new Float32Array(W), X0 = Math.round(best.x0), X1 = Math.round(best.x1), Y0 = Math.round(best.y0), Y1 = Math.round(best.y1);
    for (y = 0; y < H; y++) for (x = X0; x <= X1; x++) ph[y] += best.mh[y * W + x];
    for (y = Y0; y <= Y1; y++) for (x = 0; x < W; x++) pv[x] += best.mv[y * W + x];
    best.R = refine(ph, Y0, Y1, best.R); best.C = refine(pv, X0, X1, best.C); delete best.mh; delete best.mv;
    return best;
  }
  /* --- any paper's grid: a table of straight thin lines of any colour (Sakshi's grey lines on a peach page, black lines,
     blue lines \u2026). Long straight runs of ink are kept, filled areas (banners, black squares) dropped; each connected set of
     such lines is one table; its evenly spaced lines give the rows and columns. Several tables on a page (the puzzle, last
     week's answers, a sudoku) come back as separate candidates. --- */
  function genericGrids(d, W, H, reg) {
    var x0r = reg ? Math.max(0, reg.x0 | 0) : 0, y0r = reg ? Math.max(0, reg.y0 | 0) : 0, x1r = reg ? Math.min(W, Math.ceil(reg.x1)) : W, y1r = reg ? Math.min(H, Math.ceil(reg.y1)) : H;
    var w = x1r - x0r, h = y1r - y0r; if (w < 30 || h < 30) return [];
    var N = w * h, ink = new Uint8Array(N), lum = new Uint8Array(N), i, x, y, M = Math.max(W, H);
    for (y = 0; y < h; y++) for (x = 0; x < w; x++) { var p = ((y + y0r) * W + x + x0r) * 4; lum[y * w + x] = (d[p] * 299 + d[p + 1] * 587 + d[p + 2] * 114) / 1000; }
    // ink = clearly darker than the paper around it (white, peach, grey or a photo's dull paper alike): the paper is the
    // brightest value in the 3\u00d73 blocks of 8 px around a point
    var B = 8, bw = Math.ceil(w / B), bh = Math.ceil(h / B), bm = new Uint8Array(bw * bh), bg = new Uint8Array(bw * bh);
    for (y = 0; y < h; y++) for (x = 0; x < w; x++) { var bi = ((y / B) | 0) * bw + ((x / B) | 0), lv = lum[y * w + x]; if (lv > bm[bi]) bm[bi] = lv; }
    for (var by = 0; by < bh; by++) for (var bx = 0; bx < bw; bx++) { var mx = 0; for (var dy0 = -1; dy0 <= 1; dy0++) for (var dx0 = -1; dx0 <= 1; dx0++) { var yy0 = by + dy0, xx0 = bx + dx0; if (yy0 >= 0 && xx0 >= 0 && yy0 < bh && xx0 < bw && bm[yy0 * bw + xx0] > mx) mx = bm[yy0 * bw + xx0]; } bg[by * bw + bx] = mx; }
    for (y = 0; y < h; y++) for (x = 0; x < w; x++) { var li = y * w + x; if (lum[li] < bg[((y / B) | 0) * bw + ((x / B) | 0)] - 18) ink[li] = 1; }
    var L = Math.max(12, Math.round(0.016 * M)), T = Math.max(2, Math.round(0.0035 * M)), mh = new Uint8Array(N), mv = new Uint8Array(N);
    for (y = T; y < h - T; y++) { var o = y * w, st = -1;
      for (x = 0; x <= w; x++) { if (x < w && ink[o + x]) { if (st < 0) st = x; continue; }
        if (st >= 0 && x - st >= L) { var th = 0; for (var q = st; q < x; q++) if (ink[o + q - T * w] && ink[o + q + T * w]) th++; if (th < 0.5 * (x - st)) for (q = st; q < x; q++) mh[o + q] = 1; }
        st = -1; } }
    for (x = T; x < w - T; x++) { var s2 = -1;
      for (y = 0; y <= h; y++) { if (y < h && ink[y * w + x]) { if (s2 < 0) s2 = y; continue; }
        if (s2 >= 0 && y - s2 >= L) { var t2 = 0; for (var q2 = s2; q2 < y; q2++) if (ink[q2 * w + x - T] && ink[q2 * w + x + T]) t2++; if (t2 < 0.5 * (y - s2)) for (q2 = s2; q2 < y; q2++) mv[q2 * w + x] = 1; }
        s2 = -1; } }
    // connected sets of lines (8-neighbours)
    var lab = new Int32Array(N), comps = [], stack = new Int32Array(N), minSide = Math.max(40, 0.05 * Math.min(W, H));
    for (i = 0; i < N; i++) { if (!(mh[i] || mv[i]) || lab[i]) continue;
      var n = 0, sp = 0, bx0 = w, by0 = h, bx1 = 0, by1 = 0, id = comps.length + 1; stack[sp++] = i; lab[i] = id;
      while (sp) { var k = stack[--sp], ky = (k / w) | 0, kx = k - ky * w; n++;
        if (kx < bx0) bx0 = kx; if (kx > bx1) bx1 = kx; if (ky < by0) by0 = ky; if (ky > by1) by1 = ky;
        for (var dy = -1; dy <= 1; dy++) for (var dx = -1; dx <= 1; dx++) { var yy = ky + dy, xx = kx + dx; if (yy < 0 || xx < 0 || yy >= h || xx >= w) continue; var kk = yy * w + xx; if (!lab[kk] && (mh[kk] || mv[kk])) { lab[kk] = id; stack[sp++] = kk; } } }
      comps.push({ x0: bx0, y0: by0, x1: bx1, y1: by1, n: n }); }
    var out = [];
    comps.forEach(function (cp) {
      var cw = cp.x1 - cp.x0 + 1, ch = cp.y1 - cp.y0 + 1; if (cw < minSide || ch < minSide || cw > 3 * ch || ch > 3 * cw) return;
      var hc = new Float32Array(ch), vc = new Float32Array(cw);
      for (var yy = cp.y0; yy <= cp.y1; yy++) for (var xx = cp.x0; xx <= cp.x1; xx++) { var kk = yy * w + xx; if (mh[kk]) hc[yy - cp.y0]++; if (mv[kk]) vc[xx - cp.x0]++; }
      var hl = lineCenters(hc, 0.4, Math.max(8, 0.35 * cw)), vl = lineCenters(vc, 0.4, Math.max(8, 0.35 * ch));
      var rr = evenRuns(hl, 5)[0]; if (!rr) return;
      var gy = (rr[rr.length - 1] - rr[0]) / (rr.length - 1), cc = evenRuns(vl, 5, gy)[0]; if (!cc) return;
      // the table's own edges: an end column with no row lines across it (a page divider beside the grid) goes; a row the
      // columns' lines run on past (a faint last line next to a frame) is added \u2014 and the same the other way round
      function at(m, xx, yy) { xx = Math.round(xx); yy = Math.round(yy); if (xx < 0 || yy < 0 || xx >= w || yy >= h) return 0; return m[yy * w + xx] || (yy > 0 && m[(yy - 1) * w + xx]) || (yy + 1 < h && m[(yy + 1) * w + xx]) || (xx > 0 && m[yy * w + xx - 1]) || (xx + 1 < w && m[yy * w + xx + 1]) ? 1 : 0; }
      function gapCov(lines, a, b, along, m) { var t = 0, n3 = 0; lines.forEach(function (ln) { for (var z = a + 2; z <= b - 2; z++) { n3++; t += along ? at(m, z + cp.x0, ln + cp.y0) : at(m, ln + cp.x0, z + cp.y0); } }); return n3 ? t / n3 : 0; }
      for (var tr = 0; tr < 3; tr++) {
        if (cc.length > 5 && gapCov(rr, cc[cc.length - 2], cc[cc.length - 1], true, mh) < 0.5) cc.pop();
        else if (cc.length > 5 && gapCov(rr, cc[0], cc[1], true, mh) < 0.5) cc.shift();
        else if (rr.length > 5 && gapCov(cc, rr[rr.length - 2], rr[rr.length - 1], false, mv) < 0.5) rr.pop();
        else if (rr.length > 5 && gapCov(cc, rr[0], rr[1], false, mv) < 0.5) rr.shift();
        else break;
      }
      function runOn(lines, from, dir, along, m, gap) { var ext = lines.map(function (ln) { var z = from, miss = 0, go = 0; while (miss <= 3 && go < 1.3 * gap) { z += dir; go++; if (along ? at(m, z + cp.x0, ln + cp.y0) : at(m, ln + cp.x0, z + cp.y0)) miss = 0; else miss++; } return go - miss; }).sort(function (a, b) { return a - b; }); return ext[Math.floor(ext.length / 2)] || 0; }
      for (var ex = 0; ex < 2; ex++) {
        var gR = (rr[rr.length - 1] - rr[0]) / (rr.length - 1), gC = (cc[cc.length - 1] - cc[0]) / (cc.length - 1), grew = false;
        if (runOn(cc, rr[rr.length - 1], 1, false, mv, gR) >= 0.8 * gR) { rr.push(rr[rr.length - 1] + gR); grew = true; }
        if (runOn(cc, rr[0], -1, false, mv, gR) >= 0.8 * gR) { rr.unshift(rr[0] - gR); grew = true; }
        if (runOn(rr, cc[cc.length - 1], 1, true, mh, gC) >= 0.8 * gC) { cc.push(cc[cc.length - 1] + gC); grew = true; }
        if (runOn(rr, cc[0], -1, true, mh, gC) >= 0.8 * gC) { cc.unshift(cc[0] - gC); grew = true; }
        if (!grew) break;
      }
      if (window.__epvDebug) (window.__epvLines = window.__epvLines || []).push({ at: [x0r + cp.x0, y0r + cp.y0, x0r + cp.x1, y0r + cp.y1], hl: hl.map(Math.round), vl: vl.map(Math.round), rr: rr.map(Math.round), cc: cc.map(Math.round), W: W });
      var gx = (cc[cc.length - 1] - cc[0]) / (cc.length - 1); if (gx < 6 || gy < 6 || gx / gy > 1.45 || gy / gx > 1.45) return;
      var g = { kind: 'lines', R: rr.length - 1, C: cc.length - 1, x0: x0r + cp.x0 + cc[0], x1: x0r + cp.x0 + cc[cc.length - 1], y0: y0r + cp.y0 + rr[0], y1: y0r + cp.y0 + rr[rr.length - 1] };
      // a line the even spacing missed (or a stray one it took): the count whose lines fall on the strongest strokes
      function refineN(prof, lo, hi, n0) {
        function sc(nn) { var gap = (hi - lo) / nn, t = 0; for (var k2 = 1; k2 < nn; k2++) { var c2 = Math.round(lo + k2 * gap), mx = 0; for (var q3 = c2 - 2; q3 <= c2 + 2; q3++) mx = Math.max(mx, prof[q3] || 0); t += mx; } return t / (nn - 1); }
        var bn = n0, bs = sc(n0); for (var nn = Math.max(4, n0 - 3); nn <= n0 + 3; nn++) { if (nn === n0 || (hi - lo) / nn < 6) continue; var v = sc(nn); if (v > 1.15 * bs) { bn = nn; bs = v; } } return bn;
      }
      g.R = refineN(hc, rr[0], rr[rr.length - 1], g.R); g.C = refineN(vc, cc[0], cc[cc.length - 1], g.C);
      if (g.R >= 4 && g.C >= 4) out.push(g);
    });
    return out;
  }
  // every grid on a page: Eenadu's pink-lined one, and any table of thin lines (other papers); the same grid found both ways
  // is kept once (the pink reading, as before)
  function findGrids(d, W, H) {
    var out = [], pk = findGrid(d, W, H);
    if (pk) { pk.kind = 'pink'; out.push(pk); }
    genericGrids(d, W, H).forEach(function (g) {
      var dup = out.some(function (o) { var ix = Math.max(0, Math.min(o.x1, g.x1) - Math.max(o.x0, g.x0)), iy = Math.max(0, Math.min(o.y1, g.y1) - Math.max(o.y0, g.y0)); return ix * iy > 0.5 * Math.min((o.x1 - o.x0) * (o.y1 - o.y0), (g.x1 - g.x0) * (g.y1 - g.y0)); });
      if (!dup) out.push(g);
    });
    return out;
  }
  // per square: share of coloured samples (Eenadu's stars, leaves, flowers) and of dark ones (black squares or letters); `br`:
  // share of not-white samples in a patch near the bottom-right corner \u2014 a shaded blocked square (Sakshi's grey) is shaded
  // there, a plain square stays white (its number is top-left, its letter in the middle)
  function cellStats(d, W, H, pt, R, C) {
    var out = [];
    for (var r = 0; r < R; r++) for (var c = 0; c < C; c++) {
      var col = 0, dark = 0, n = 0;
      for (var i = 0; i < 7; i++) for (var j = 0; j < 7; j++) {
        var p = pt((c + 0.3 + 0.4 * j / 6) / C, (r + 0.3 + 0.4 * i / 6) / R), xx = p.x | 0, yy = p.y | 0;
        if (xx < 0 || yy < 0 || xx >= W || yy >= H) continue;
        var o = (yy * W + xx) * 4, R0 = d[o], G0 = d[o + 1], B0 = d[o + 2], mx = Math.max(R0, G0, B0), mn = Math.min(R0, G0, B0), lum = (R0 * 299 + G0 * 587 + B0 * 114) / 1000;
        n++; if (mx - mn > 40) col++; else if (lum < 110) dark++;
      }
      var nb = 0, br = 0, ink2 = 0, n2 = 0;
      for (i = 0; i < 4; i++) for (j = 0; j < 4; j++) {
        var p2 = pt((c + 0.74 + 0.14 * j / 3) / C, (r + 0.74 + 0.14 * i / 3) / R), x2 = p2.x | 0, y2 = p2.y | 0;
        if (x2 < 0 || y2 < 0 || x2 >= W || y2 >= H) continue;
        var o2 = (y2 * W + x2) * 4; nb++; if ((d[o2] * 299 + d[o2 + 1] * 587 + d[o2 + 2] * 114) / 1000 < 236) br++;
      }
      for (i = 0; i < 5; i++) for (j = 0; j < 5; j++) {
        var p3 = pt((c + 0.3 + 0.4 * j / 4) / C, (r + 0.3 + 0.4 * i / 4) / R), x3 = p3.x | 0, y3 = p3.y | 0;
        if (x3 < 0 || y3 < 0 || x3 >= W || y3 >= H) continue;
        var o3 = (y3 * W + x3) * 4; n2++; if ((d[o3] * 299 + d[o3 + 1] * 587 + d[o3 + 2] * 114) / 1000 < 170) ink2++;
      }
      out.push({ col: n ? col / n : 0, dark: n ? dark / n : 0, br: nb ? br / nb : 0, ink: n2 ? ink2 / n2 : 0 });
    }
    return out;
  }
  // how blocked a square looks: Eenadu (pink lines) as before; other papers' grids by their shaded / dark squares
  function blockVals(st, kind, filled) {
    if (kind !== 'lines') return st.map(function (s) { return filled ? s.col : Math.max(s.col, s.dark); });
    return st.map(function (s) { return Math.max(s.br, filled ? 0 : s.dark, s.col); });
  }
  function otsu(v) {
    var lo = Math.min.apply(null, v), hi = Math.max.apply(null, v);
    if (hi - lo < 0.2) return hi + 1;     // nothing stands out: no blocked squares
    var best = -1, thr = (lo + hi) / 2;
    for (var t = lo + 0.02; t < hi; t += 0.02) {
      var a = v.filter(function (x) { return x < t; }), b = v.filter(function (x) { return x >= t; });
      if (!a.length || !b.length) continue;
      var ma = a.reduce(function (x, y) { return x + y; }, 0) / a.length, mb = b.reduce(function (x, y) { return x + y; }, 0) / b.length, s = a.length * b.length * (ma - mb) * (ma - mb);
      if (s > best) { best = s; thr = t; }
    }
    return thr;
  }
  function rectPt(g) { return function (u, v) { return { x: g.x0 + u * (g.x1 - g.x0), y: g.y0 + v * (g.y1 - g.y0) }; }; }
  // every page is looked at once at low size: where is a grid, is it empty (a puzzle) or filled (answers)?
  function analysePages(pages, note, kind) {
    var info = [], chain = Promise.resolve();
    // one grid judged: how many squares are blocked, empty (a puzzle) or filled (answers), is it a crossword at all
    function judge(fx, W, H) {
      var g = fx.g; if (g.R < 5 || g.C < 5) return null;
      var gs = fx.f === 1 ? g : { x0: g.x0 * fx.f, y0: g.y0 * fx.f, x1: g.x1 * fx.f, y1: g.y1 * fx.f };
      var st = cellStats(fx.d, fx.W || W, fx.H || H, rectPt(gs), g.R, g.C), v0 = blockVals(st, g.kind, false), t0 = otsu(v0);
      var white = st.filter(function (s, k) { return v0[k] < t0; });
      var ink = white.length ? white.reduce(function (a, s) { return a + (g.kind === 'lines' ? s.ink : s.dark); }, 0) / white.length : 0;
      var c = { grid: g, ink: ink, filled: ink > (g.kind === 'lines' ? 0.08 : 0.04), area: (g.x1 - g.x0) * (g.y1 - g.y0) };
      var v1 = blockVals(st, g.kind, c.filled), t1 = otsu(v1); c.blk = v1.filter(function (x) { return x >= t1; }).length / v1.length;
      c.pat = g.kind === 'lines' ? (t1 > 1 ? null : v1.map(function (x) { return x >= t1; })) : blockedFrom(st, c.filled);
      // a crossword: Eenadu's pink grid as before (8\u00d78 or more, not a 9\u00d79 sudoku); any other table needs some blocked squares
      // (a sudoku or a word search has none)
      c.cross = g.kind === 'pink' ? (g.R >= 8 && g.C >= 8 && !(g.R === 9 && g.C === 9)) : (c.blk >= 0.06 && c.blk <= 0.5 && !(g.R === 9 && g.C === 9));
      return c;
    }
    function mainGrid(it) {   // the page's main grid: its biggest crossword (empty before filled)
      var cs = it.cands.filter(function (c) { return c.cross; }).sort(function (a, b) { return (a.filled - b.filled) || (b.area - a.area); });
      delete it.grid; if (cs[0]) { it.grid = cs[0].grid; it.ink = cs[0].ink; it.filled = cs[0].filled; it.area = cs[0].area; it.pat = cs[0].pat; }
    }
    function overlaps(o, g) { var ix = Math.max(0, Math.min(o.x1, g.x1) - Math.max(o.x0, g.x0)), iy = Math.max(0, Math.min(o.y1, g.y1) - Math.max(o.y0, g.y0)); return ix * iy > 0.5 * Math.min((o.x1 - o.x0) * (o.y1 - o.y0), (g.x1 - g.x0) * (g.y1 - g.y0)); }
    pages.forEach(function (pg, i) {
      chain = chain.then(function () { if (note) note(i); return renderPage(pg, 1200); }).then(function (r) {
        var W = r.cv.width, H = r.cv.height, d = r.cv.getContext('2d').getImageData(0, 0, W, H).data, it = { i: i, W: W, H: H, cands: [], pg: pg };
        it.k = (r.src.img ? Math.min(Math.max(r.src.img.naturalWidth, r.src.img.naturalHeight), 2000) : 2000) / Math.max(W, H);   // analysis \u2192 screen size
        findGrids(d, W, H).forEach(function (g) { var c = judge({ g: g, d: d, f: 1 }, W, H); if (c) it.cands.push(c); });
        mainGrid(it); info.push(it);
      });
    });
    // nothing suitable at this size (another paper's small \u201clast week's answers\u201d box, a faint grid): the pages again, sharper
    return chain.then(function () {
      var want = function (c) { return c.cross && (kind === 'answers' ? c.filled && (!D || (c.grid.R === D.R && c.grid.C === D.C)) : !c.filled); };
      if (info.some(function (it) { return it.cands.some(want); })) return info;
      var ch2 = Promise.resolve();
      info.forEach(function (it) {
        ch2 = ch2.then(function () { if (note) note(it.i); return renderPage(it.pg, 2000); }).then(function (r2) {
          var W2 = r2.cv.width, H2 = r2.cv.height, d2 = r2.cv.getContext('2d').getImageData(0, 0, W2, H2).data, f = W2 / it.W;
          genericGrids(d2, W2, H2).forEach(function (g2) {
            var g = { kind: 'lines', R: g2.R, C: g2.C, x0: g2.x0 / f, y0: g2.y0 / f, x1: g2.x1 / f, y1: g2.y1 / f };
            if (it.cands.some(function (c) { return overlaps(c.grid, g); })) return;
            var c = judge({ g: g, d: d2, f: f, W: W2, H: H2 }, it.W, it.H); if (c) it.cands.push(c);
          });
          mainGrid(it);
        });
      });
      return ch2.then(function () { return info; });
    });
  }
  // which squares are blocked: in an empty grid the coloured or dark ones; in a solved grid only the coloured ones
  // (stars, leaves, flowers) \u2014 its letters are dark too. null when a solved grid has no coloured blocks to go by.
  function blockedFrom(st, filled) {
    if (!filled) { var v = st.map(function (x) { return Math.max(x.col, x.dark); }), t = otsu(v); return v.map(function (x) { return x >= t; }); }
    var c = st.map(function (x) { return x.col; }), tc = otsu(c); if (tc > 1) return null;
    return c.map(function (x) { return x >= tc; });
  }
  function patDiff(pat, R, C, black) {
    if (!pat || !black || pat.length !== R * C) return null;
    var n = 0; for (var r = 0; r < R; r++) for (var c = 0; c < C; c++) if (!!pat[r * C + c] !== !!(black[r] && black[r][c])) n++;
    return n;
  }
  function plusWeek(d) { var m = /^(\d{2})\.(\d{2})\.(\d{4})$/.exec(d || ''); if (!m) return ''; var t = new Date(+m[3], +m[2] - 1, +m[1] + 7), p2 = function (x) { return (x < 10 ? '0' : '') + x; }; return p2(t.getDate()) + '.' + p2(t.getMonth() + 1) + '.' + t.getFullYear(); }
  function fileDate(files) { var out = ''; Array.prototype.forEach.call(files || [], function (f) { var m = String(f.name || '').match(/(\d{2})[.\-_](\d{2})[.\-_](\d{4})/); if (m && !out) out = m[1] + '.' + m[2] + '.' + m[3]; }); return out; }
  // answers of a puzzle are printed in the NEXT week's paper; a grid of another week has its blocked squares elsewhere
  function wrongWeekText(diff, files) {
    var fd = fileDate(files), nx = plusWeek(D && D.date);
    return '\u0c08 \u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32 \u0c17\u0c21\u0c3f \u0c2e\u0c40 \u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d \u0c17\u0c21\u0c3f\u0c24\u0c4b \u0c38\u0c30\u0c3f\u0c2a\u0c4b\u0c32\u0c32\u0c47\u0c26\u0c41 (' + diff + ' \u0c17\u0c21\u0c41\u0c32\u0c4d\u0c32\u0c4b \u0c28\u0c32\u0c41\u0c2a\u0c41 / \u0c24\u0c46\u0c32\u0c41\u0c2a\u0c41 \u0c24\u0c47\u0c21\u0c3e) \u2014 \u0c07\u0c26\u0c3f \u0c35\u0c47\u0c30\u0c47 \u0c35\u0c3e\u0c30\u0c02 \u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02 \u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32\u0c41.' +
      (D && D.date ? ' ' + D.date + ' \u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02 \u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32\u0c41 \u0c24\u0c30\u0c4d\u0c35\u0c3e\u0c24\u0c3f \u0c35\u0c3e\u0c30\u0c02' + (nx ? ' (' + nx + ')' : '') + ' \u0c2a\u0c47\u0c2a\u0c30\u0c4d\u200c\u0c32\u0c4b\u0c28\u0c3f \u201c\u0c17\u0c24\u0c35\u0c3e\u0c30\u0c02 \u0c38\u0c2e\u0c3e\u0c27\u0c3e\u0c28\u0c3e\u0c32\u0c41\u201d \u0c32\u0c4b \u0c09\u0c02\u0c1f\u0c3e\u0c2f\u0c3f.' : '') +
      (fd && D && fd === D.date ? ' \u0c2e\u0c40\u0c30\u0c41 \u0c07\u0c1a\u0c4d\u0c1a\u0c3f\u0c28 \u0c2b\u0c48\u0c32\u0c4d ' + fd + ' \u0c26\u0c47 \u2014 \u0c05\u0c02\u0c26\u0c41\u0c32\u0c4b \u0c09\u0c28\u0c4d\u0c28\u0c35\u0c3f \u0c05\u0c02\u0c24\u0c15\u0c41 \u0c2e\u0c41\u0c02\u0c26\u0c41 \u0c35\u0c3e\u0c30\u0c02 \u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32\u0c41.' : '') +
      ' \u0c32\u0c47\u0c26\u0c3e \u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d \u0c17\u0c21\u0c47 \u0c24\u0c2a\u0c4d\u0c2a\u0c41\u0c17\u0c3e \u0c09\u0c02\u0c1f\u0c47, \u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02 \u0c2b\u0c48\u0c32\u0c4d \u0c28\u0c41\u0c02\u0c1a\u0c3f \u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d \u0c2e\u0c33\u0c4d\u0c33\u0c40 \u0c24\u0c2f\u0c3e\u0c30\u0c41 \u0c1a\u0c47\u0c2f\u0c02\u0c21\u0c3f.';
  }
  function pickGridPage(info, kind) {
    var all = [];
    info.forEach(function (it) { (it.cands || []).forEach(function (c) { if (c.cross) all.push({ i: it.i, W: it.W, H: it.H, k: it.k, grid: c.grid, ink: c.ink, filled: c.filled, area: c.area, pat: c.pat }); }); });
    var c = all.filter(function (x) { return kind === 'answers' ? x.filled : !x.filled; });
    if (kind === 'answers' && D) {
      var same = c.filter(function (x) { return x.grid.R === D.R && x.grid.C === D.C; });
      if (same.length) c = same;
    }
    if (!c.length) c = all;
    c.sort(function (a, b) { return b.area - a.area; });
    return c[0] || null;
  }

  function scanOpen(kind, files) {
    if (U.busy) return;
    var date = (document.getElementById('up-date') || {}).value || (D && D.date) || '', paper = kind === 'answers' && D ? D.paper : upPaper(), pages;
    if (kind !== 'answers') { S.prefs.paper = paper; save(); }
    U.busy = 'scan'; U.status = { kind: 'wait', text: '\u0c2b\u0c48\u0c32\u0c4d \u0c24\u0c46\u0c30\u0c41\u0c38\u0c4d\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c02\u2026' }; render();
    loadPages(files).then(function (p) {
      pages = p; if (!pages.length) throw { code: 'no_images' };
      if (kind === 'answers' && D) { var fk2 = Array.prototype.map.call(files || [], function (f) { return f.name + ':' + f.size; }).join('|'); if (D.ansFile && D.ansFile !== fk2) D.ansBy = null; D.ansFile = fk2; }
      SC = { files: Array.prototype.slice.call(files || []), kind: kind, pages: pages, page: -1, gridPage: -1, mode: 'grid', zoom: 1, quad: null, boxes: [], R: kind === 'answers' && D ? D.R : 12, C: kind === 'answers' && D ? D.C : 12, vals: null, thr: 1, flip: {}, ocr: { A: '', D: '' }, date: date, paper: paper, srcs: {} };
      return analysePages(pages, function (i) { scanMsg('\u0c2a\u0c47\u0c1c\u0c40\u0c32\u0c41 \u0c1a\u0c42\u0c38\u0c4d\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c02\u2026 ' + (i + 1) + ' / ' + pages.length); }, kind);
    }).then(function (info) {
      SC.info = info;
      var hit = pickGridPage(info, kind);
      return scanPage(hit ? hit.i : 0).then(function () {
        if (!hit) return;
        var k = SC.W / hit.W, g = hit.grid;
        SC.gridPage = hit.i; SC.auto = true; SC.gkind = g.kind || 'pink';
        if (g.kind === 'lines') {   // the lines again at full size (a small answers grid needs the detail): the same table, exactly
          var mg = 0.06 * Math.max(g.x1 - g.x0, g.y1 - g.y0) * k, fine = genericGrids(SC.data, SC.W, SC.H, { x0: g.x0 * k - mg, y0: g.y0 * k - mg, x1: g.x1 * k + mg, y1: g.y1 * k + mg })
            .sort(function (a, b) { return (b.x1 - b.x0) * (b.y1 - b.y0) - (a.x1 - a.x0) * (a.y1 - a.y0); })[0];
          if (fine && Math.abs((fine.x1 - fine.x0) - (g.x1 - g.x0) * k) < 0.15 * (g.x1 - g.x0) * k) { g = { kind: 'lines', R: fine.R, C: fine.C, x0: fine.x0 / k, x1: fine.x1 / k, y0: fine.y0 / k, y1: fine.y1 / k }; hit = Object.assign({}, hit, { grid: g }); }
        }
        if (kind !== 'answers' || !D || g.R !== D.R || g.C !== D.C) { SC.R = g.R; SC.C = g.C; }   // answers: a grid of another size is drawn as printed
        SC.quad = { tl: { x: g.x0 * k, y: g.y0 * k }, tr: { x: g.x1 * k, y: g.y0 * k }, bl: { x: g.x0 * k, y: g.y1 * k }, br: { x: g.x1 * k, y: g.y1 * k } };
        scanDetect();
        if (kind !== 'answers') SC.boxes = clueRegions(hit, info);
      });
    }).then(function () {
      U.busy = '';
      var found = SC.quad && SC.auto, ans = kind === 'answers';
      U.status = found ? { kind: 'ok', text: (ans ? '\u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32 \u0c17\u0c21\u0c3f \u0c2a\u0c47\u0c1c\u0c40 ' + (SC.gridPage + 1) + ' \u0c32\u0c4b \u0c26\u0c4a\u0c30\u0c3f\u0c15\u0c3f\u0c02\u0c26\u0c3f' + matchNote() + '.' : '\u0c17\u0c21\u0c3f \u0c2a\u0c47\u0c1c\u0c40 ' + (SC.gridPage + 1) + ' \u0c32\u0c4b \u0c26\u0c4a\u0c30\u0c3f\u0c15\u0c3f\u0c02\u0c26\u0c3f (' + SC.R + '\u00d7' + SC.C + '). \u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32\u0c41 \u0c1a\u0c26\u0c41\u0c35\u0c41\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c02\u2026') }
        : { kind: 'ok', text: ans ? '\u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32 \u0c17\u0c21\u0c3f \u0c1a\u0c41\u0c1f\u0c4d\u0c1f\u0c42 \u0c35\u0c47\u0c32\u0c3f\u0c24\u0c4b \u0c2a\u0c46\u0c1f\u0c4d\u0c1f\u0c46 \u0c17\u0c40\u0c2f\u0c02\u0c21\u0c3f (\u0c0e\u0c30\u0c41\u0c2a\u0c41 \u0c17\u0c40\u0c24\u0c32\u0c41 \u0c17\u0c21\u0c3f \u0c17\u0c40\u0c24\u0c32\u0c2a\u0c48 \u0c2a\u0c21\u0c47\u0c32\u0c3e \u0c2e\u0c42\u0c32\u0c32 \u0c1a\u0c41\u0c15\u0c4d\u0c15\u0c32\u0c41 \u0c32\u0c3e\u0c17\u0c02\u0c21\u0c3f), \u0c24\u0c30\u0c4d\u0c35\u0c3e\u0c24 \u201c\u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32\u0c41 \u0c1a\u0c26\u0c3f\u0c35\u0c3f \u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d\u200c\u0c32\u0c4b \u0c28\u0c3f\u0c02\u0c2a\u0c02\u0c21\u0c3f\u201d \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c02\u0c21\u0c3f.' : '\u0c17\u0c21\u0c3f \u0c24\u0c3e\u0c28\u0c41\u0c17\u0c3e \u0c26\u0c4a\u0c30\u0c15\u0c32\u0c47\u0c26\u0c41. \u0c17\u0c21\u0c3f \u0c1a\u0c41\u0c1f\u0c4d\u0c1f\u0c42, \u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32 \u0c1a\u0c41\u0c1f\u0c4d\u0c1f\u0c42 \u0c35\u0c47\u0c32\u0c3f\u0c24\u0c4b \u0c2a\u0c46\u0c1f\u0c4d\u0c1f\u0c46\u0c32\u0c41 \u0c17\u0c40\u0c2f\u0c02\u0c21\u0c3f.' };
      location.hash = '#scan'; if (route() === 'scan') render();
      // found by itself: read straight away; the admin reviews the result on this screen and in the draft
      if (found && !ans && SC.boxes.length) setTimeout(scanOCR, 60);
      if (found && ans && SC.match >= 0.85) setTimeout(scanAnswers, 60);
    }, function (e) {
      U.busy = ''; U.status = { kind: 'err', text: e && e.code === 'no_images' ? '\u0c1a\u0c3f\u0c24\u0c4d\u0c30\u0c02 (JPG/PNG) \u0c32\u0c47\u0c26\u0c3e PDF \u0c0e\u0c02\u0c1a\u0c41\u0c15\u0c4b\u0c02\u0c21\u0c3f.' : '\u0c2b\u0c48\u0c32\u0c4d \u0c24\u0c46\u0c30\u0c35\u0c32\u0c47\u0c15\u0c2a\u0c4b\u0c2f\u0c3e\u0c02 (' + ((e && e.message) || 'error') + ').' }; render();
    });
  }
  // where the clues are likely: the grid's column on the grid page (above and below it) and on the pages around it
  function clueRegions(hit, info) {
    var out = [], g = hit.grid, k = hit.k;
    for (var i = Math.max(0, hit.i - 1); i <= Math.min(info.length - 1, hit.i + 2); i++) {
      var it = info[i], kk = it.k, W = it.W * kk, H = it.H * kk, pad = 0.04 * W;
      var x0 = Math.max(0, g.x0 * k - pad), x1 = Math.min(W, g.x1 * k + pad);
      if (i === hit.i) {
        if (g.y0 * k > 120) out.push({ page: i, x: x0, y: 0, w: x1 - x0, h: g.y0 * k - 6, auto: true });
        if (H - g.y1 * k > 120) out.push({ page: i, x: x0, y: g.y1 * k + 6, w: x1 - x0, h: H - g.y1 * k - 6, auto: true });
      } else if (!(it.grid && it.grid !== g && it.filled)) out.push({ page: i, x: x0, y: 0, w: x1 - x0, h: H, auto: true });
    }
    return out;
  }
  // Shows one page at up to 2000 px; crops for reading come from the full-size photo or a sharper PDF render
  function scanPage(i) {
    return renderPage(SC.pages[i], 2000).then(function (r) {
      SC.page = i; SC.cv = r.cv; SC.W = r.cv.width; SC.H = r.cv.height; SC.src = r.src; SC.srcs[i] = r.src;
      SC.data = r.cv.getContext('2d').getImageData(0, 0, SC.W, SC.H).data;
      if (SC.kind === 'answers' || (SC.gridPage >= 0 && i !== SC.gridPage)) return;   // the editor keeps showing the puzzle's grid page
      U.srcUrls.forEach(function (u) { URL.revokeObjectURL(u); });
      return new Promise(function (res) { r.cv.toBlob(function (b) { U.srcUrls = b ? [URL.createObjectURL(b)] : []; res(); }, 'image/jpeg', 0.85); });
    });
  }
  function pageSrc(i) {
    if (SC.srcs[i]) return Promise.resolve(SC.srcs[i]);
    var pg = SC.pages[i];
    var p = pg.blob ? blobToImage(pg.blob).then(function (im) { var s = Math.min(1, 2000 / Math.max(im.naturalWidth, im.naturalHeight)); return { img: im, k: im.naturalWidth / Math.round(im.naturalWidth * s) }; })
      : pg.pdf.getPage(pg.num).then(function (page) { var v1 = page.getViewport({ scale: 1 }); return { page: page, base: 2000 / Math.max(v1.width, v1.height) }; });
    return p.then(function (s) { SC.srcs[i] = s; return s; });
  }
  // a part of a page, sharp enough to read: at least minW pixels wide where the source allows
  function scanCrop(rc, minW, pageIdx) {
    var pi = pageIdx == null ? SC.page : pageIdx;
    return pageSrc(pi).then(function (src) {
      var x = Math.max(0, rc.x), y = Math.max(0, rc.y), w = rc.w, h = rc.h, out = document.createElement('canvas');
      if (src.img) {
        var k = src.k, up = Math.min(3, Math.max(1, minW / (w * k)));
        out.width = Math.round(w * k * up); out.height = Math.round(h * k * up);
        var c0 = out.getContext('2d'); c0.fillStyle = '#fff'; c0.fillRect(0, 0, out.width, out.height); c0.imageSmoothingQuality = 'high';
        c0.drawImage(src.img, x * k, y * k, w * k, h * k, 0, 0, out.width, out.height);
        return out;
      }
      var f = Math.min(4, Math.max(1, minW / w)), vp = src.page.getViewport({ scale: src.base * f });
      out.width = Math.round(w * f); out.height = Math.round(h * f);
      var ctx = out.getContext('2d'); ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, out.width, out.height);
      return src.page.render({ canvasContext: ctx, viewport: vp, transform: [1, 0, 0, 1, -x * f, -y * f] }).promise.then(function () { return out; });
    });
  }
  function qpt(u, v) {
    var q = SC.quad;
    return { x: (1 - u) * (1 - v) * q.tl.x + u * (1 - v) * q.tr.x + (1 - u) * v * q.bl.x + u * v * q.br.x,
             y: (1 - u) * (1 - v) * q.tl.y + u * (1 - v) * q.tr.y + (1 - u) * v * q.bl.y + u * v * q.br.y };
  }
  // blocked squares: coloured (Eenadu's stars, leaves, flowers) or dark squares, split from the plain ones (Otsu's method)
  function scanDetect() {
    if (!SC.quad || SC.page !== SC.gridPage) { if (!SC.quad) SC.vals = null; return; }
    var st = cellStats(SC.data, SC.W, SC.H, qpt, SC.R, SC.C);
    SC.stats = st; SC.vals = blockVals(st, SC.gkind, false); SC.thr = otsu(SC.vals);
    SC.dimDiff = SC.kind === 'answers' && !!D && (D.R !== SC.R || D.C !== SC.C); SC.apat = SC.kind === 'answers' ? pageBlocks(st) : null;
    if (SC.dimDiff) { SC.match = 0; SC.patDiff = null; }
    if (SC.kind === 'answers' && D && D.R === SC.R && D.C === SC.C) {
      // answers: the squares come from the draft; check that its open squares hold letters here
      var whites = 0, inked = 0;
      for (var r = 0; r < D.R; r++) for (var c = 0; c < D.C; c++) if (!D.black[r][c]) { whites++; var s = st[r * D.C + c]; if (s.dark > 0.03 || s.col > 0.3 || (SC.gkind === 'lines' && s.ink > 0.08)) inked++; }
      SC.match = whites ? inked / whites : 0;
      var ap = pageBlocks(st); SC.patDiff = patDiff(ap, D.R, D.C, D.black);
      if (SC.patDiff != null && SC.patDiff > Math.max(2, 0.03 * D.R * D.C)) SC.match = 0;   // another week's grid
    }
  }
  // an answers grid's own blocked squares (letters are dark too: Eenadu's by colour, other papers' by their shading)
  function pageBlocks(st) { if (SC.gkind !== 'lines') return blockedFrom(st, true); var v = blockVals(st, 'lines', true), t = otsu(v); return t > 1 ? null : v.map(function (x) { return x >= t; }); }
  function matchNote() { if (SC.dimDiff) return '. ' + dimText(); if (SC.patDiff != null && SC.patDiff > Math.max(2, 0.03 * SC.R * SC.C)) return '. ' + wrongWeekText(SC.patDiff, SC.files).replace(/\.\s*$/, ''); return SC.match == null ? '' : ' \u00b7 \u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d\u200c\u0c32\u0c4b\u0c28\u0c3f ' + Math.round(SC.match * 100) + '% \u0c24\u0c46\u0c32\u0c4d\u0c32 \u0c17\u0c21\u0c41\u0c32\u0c4d\u0c32\u0c4b \u0c05\u0c15\u0c4d\u0c37\u0c30\u0c3e\u0c32\u0c41 \u0c15\u0c28\u0c3f\u0c2a\u0c3f\u0c02\u0c1a\u0c3e\u0c2f\u0c3f' + (SC.match >= 0.85 ? ' \u2014 \u0c38\u0c30\u0c3f\u0c2a\u0c4b\u0c2f\u0c3f\u0c02\u0c26\u0c3f, \u0c1a\u0c26\u0c41\u0c35\u0c41\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c02\u2026' : ' \u2014 \u0c07\u0c26\u0c3f \u0c38\u0c30\u0c48\u0c28 \u0c17\u0c21\u0c47\u0c28\u0c3e? \u0c17\u0c21\u0c3f \u0c2a\u0c46\u0c1f\u0c4d\u0c1f\u0c46 \u0c38\u0c30\u0c3f\u0c1a\u0c42\u0c38\u0c3f \u201c\u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32\u0c41 \u0c1a\u0c26\u0c35\u0c02\u0c21\u0c3f\u201d \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c02\u0c21\u0c3f'); }
  function ansSame() { return !!D && D.R === SC.R && D.C === SC.C && !(SC.patDiff != null && SC.patDiff > Math.max(2, 0.03 * SC.R * SC.C)); }
  function pageBlack(r, c) { var b = SC.apat ? !!SC.apat[r * SC.C + c] : (SC.vals ? SC.vals[r * SC.C + c] >= SC.thr : false); return SC.flip[r + ',' + c] ? !b : b; }
  function scanBlack(r, c) {
    if (SC.kind === 'answers' && D && D.black[r] && ansSame()) return !!D.black[r][c];
    if (SC.kind === 'answers') return pageBlack(r, c);
    if (!SC.vals) return false; var b = SC.vals[r * SC.C + c] >= SC.thr; return SC.flip[r + ',' + c] ? !b : b;
  }
  // the numbers the grid gives, in order, with the length of each word: clues are matched to these
  // The paper's own clue list (its numbers and "(3)" lengths, as read) checks the grid. When blocked squares were misjudged
  // (a pale picture, a dark number), another reading of them fits the list far better: that reading is taken, shown as
  // flipped squares on the reading screen so they can be checked.
  function listFit(all, ex) { var t = 0; ['A', 'D'].forEach(function (d) { t += all[d].length && ex[d].length ? alignItems(all[d], ex[d]).score : -0.6 * all[d].length; }); return t; }
  function fitGridToClues(all) {
    if (!SC || !SC.vals || !SC.stats || SC.kind === 'answers' || Object.keys(SC.flip || {}).length) return 0;
    var R = SC.R, C = SC.C, N = R * C, i, k;
    if ((all.A.length + all.D.length) < 0.5 * gridStarts().A.concat(gridStarts().D).length) return 0;   // too little was read to judge by
    function arr(v, t) { var b = new Uint8Array(N); for (var q = 0; q < N; q++) b[q] = v[q] >= t ? 1 : 0; return b; }
    function fitOf(b) { return listFit(all, slotsFor(function (r, c) { return !!b[r * C + c]; })); }
    var cur = arr(SC.vals, SC.thr), base = fitOf(cur), best = { b: cur, f: base };
    [SC.vals, SC.stats.map(function (x) { return x.col; }), SC.stats.map(function (x) { return x.dark; })].forEach(function (v) {
      var u = v.slice().sort(function (a, b) { return a - b; });
      for (i = 1; i < u.length; i++) {
        if (u[i] - u[i - 1] < 0.005) continue;
        var b = arr(v, (u[i] + u[i - 1]) / 2), cnt = 0; for (k = 0; k < N; k++) cnt += b[k];
        if (cnt < 0.06 * N || cnt > 0.5 * N) continue;
        var f = fitOf(b); if (f > best.f) best = { b: b, f: f };
      }
    });
    // then the single squares the picture is least sure about
    var near = []; for (k = 0; k < N; k++) near.push(k); near.sort(function (a, b) { return Math.abs(SC.vals[a] - SC.thr) - Math.abs(SC.vals[b] - SC.thr); });
    for (var pass = 0; pass < 2; pass++) near.slice(0, 48).forEach(function (q) { var b2 = best.b.slice(); b2[q] ^= 1; var f2 = fitOf(b2); if (f2 > best.f + 0.5) best = { b: b2, f: f2 }; });
    if (best.f < base + 2) return 0;
    var n = 0; SC.flip = {};
    for (k = 0; k < N; k++) if (best.b[k] !== cur[k]) { SC.flip[Math.floor(k / C) + ',' + (k % C)] = true; n++; }
    return n;
  }
  function gridStarts() { return slotsFor(scanBlack); }
  function slotsFor(black) {
    var R = SC.R, C = SC.C, A = [], Dn = [], n = 0;
    function w(r, c) { return r >= 0 && c >= 0 && r < R && c < C && !black(r, c); }
    for (var r = 0; r < R; r++) for (var c = 0; c < C; c++) {
      if (!w(r, c)) continue;
      var a = (!w(r, c - 1) && w(r, c + 1)) || lone(w, r, c), d = !w(r - 1, c) && w(r + 1, c);
      if (!a && !d) continue; n++;
      if (a) { var l = 0; for (var x = c; w(r, x); x++) l++; A.push({ n: n, len: l }); }
      if (d) { var l2 = 0; for (var y = r; w(y, c); y++) l2++; Dn.push({ n: n, len: l2 }); }
    }
    return { A: A, D: Dn };
  }
  function dimText() { return '\u0c15\u0c3e\u0c28\u0c40 \u0c08 \u0c2a\u0c47\u0c1c\u0c40\u0c32\u0c4b\u0c28\u0c3f \u0c17\u0c21\u0c3f ' + SC.R + '\u00d7' + SC.C + ', \u0c2e\u0c40 \u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d \u0c17\u0c21\u0c3f ' + D.R + '\u00d7' + D.C + ' \u2014 \u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d \u0c17\u0c21\u0c3f \u0c24\u0c2a\u0c4d\u0c2a\u0c41\u0c17\u0c3e \u0c1a\u0c26\u0c3f\u0c35\u0c3f\u0c28\u0c1f\u0c4d\u0c1f\u0c41\u0c02\u0c26\u0c3f. \u0c15\u0c3f\u0c02\u0c26 \u201c\u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d \u0c17\u0c21\u0c3f\u0c28\u0c3f \u0c08 \u0c17\u0c21\u0c3f\u0c32\u0c3e \u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c02\u0c21\u0c3f\u201d \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c02\u0c21\u0c3f'; }
  // the answers grid (letters + printed stars / flowers) is the surer copy of the grid: the draft's size and black squares follow it,
  // the numbers are put again, and its letters are read in
  function regridDraft() {
    if (!D || !SC || U.busy) return;
    var R = SC.R, C = SC.C, blk = [], ans = [];
    for (var r = 0; r < R; r++) { blk.push([]); ans.push([]); for (var c = 0; c < C; c++) { blk[r].push(pageBlack(r, c)); ans[r].push(''); } }
    D.R = R; D.C = C; D.black = blk; D.ans = ans; D.low = {}; D.ansBy = null;
    var p = draftToPuzzle(D, true); autoNumber(p); D.nums = p.nums;
    SC.flip = {}; saveDraft(); scanDetect();
    U.status = { kind: 'ok', text: '\u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d \u0c17\u0c21\u0c3f\u0c28\u0c3f \u0c08 \u0c2a\u0c47\u0c1c\u0c40 \u0c2a\u0c4d\u0c30\u0c15\u0c3e\u0c30\u0c02 ' + R + '\u00d7' + C + ' \u0c17\u0c3e \u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f, \u0c38\u0c02\u0c16\u0c4d\u0c2f\u0c32\u0c41 \u0c2e\u0c33\u0c4d\u0c33\u0c40 \u0c35\u0c47\u0c36\u0c3e\u0c02. \u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32\u0c41 \u0c1a\u0c26\u0c41\u0c35\u0c41\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c02\u2026' }; render();
    setTimeout(scanAnswers, 60);
  }
  function scanView() {
    if (!ADMIN || !SC) return '<div class="page gutter"><p class="note">\u0c1a\u0c26\u0c35\u0c3e\u0c32\u0c4d\u0c38\u0c3f\u0c28 \u0c1a\u0c3f\u0c24\u0c4d\u0c30\u0c02 \u0c32\u0c47\u0c26\u0c41.</p><a class="wide-btn pri" href="#admin">\u0c28\u0c3f\u0c30\u0c4d\u0c35\u0c3e\u0c39\u0c23\u0c15\u0c41 \u0c35\u0c46\u0c33\u0c4d\u0c33\u0c02\u0c21\u0c3f</a></div>';
    var ans = SC.kind === 'answers', busy = !!U.busy, onGrid = SC.page === SC.gridPage;
    var modes = [['move', '\u0c15\u0c26\u0c41\u0c2a\u0c41'], ['grid', '\u0c17\u0c21\u0c3f']].concat(ans ? [] : [['A', '\u0c05\u0c21\u0c4d\u0c21\u0c02 \u0c2a\u0c46\u0c1f\u0c4d\u0c1f\u0c46'], ['D', '\u0c28\u0c3f\u0c32\u0c41\u0c35\u0c41 \u0c2a\u0c46\u0c1f\u0c4d\u0c1f\u0c46']]);
    var help = SC.mode === 'move' ? '\u0c2a\u0c47\u0c1c\u0c40\u0c28\u0c3f \u0c35\u0c47\u0c32\u0c3f\u0c24\u0c4b \u0c1c\u0c30\u0c3f\u0c2a\u0c3f \u0c1a\u0c42\u0c21\u0c02\u0c21\u0c3f. \u0c17\u0c40\u0c2f\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c2a\u0c48\u0c28 \u0c12\u0c15 \u0c2a\u0c46\u0c1f\u0c4d\u0c1f\u0c46 \u0c30\u0c15\u0c02 \u0c0e\u0c02\u0c1a\u0c41\u0c15\u0c4b\u0c02\u0c21\u0c3f.'
      : SC.mode === 'grid' ? (SC.quad && onGrid ? '\u0c17\u0c21\u0c3f \u0c2e\u0c42\u0c32\u0c32\u0c4d\u0c32\u0c4b\u0c28\u0c3f \u0c1a\u0c41\u0c15\u0c4d\u0c15\u0c32\u0c28\u0c41 \u0c32\u0c3e\u0c17\u0c3f, \u0c0e\u0c30\u0c41\u0c2a\u0c41 \u0c17\u0c40\u0c24\u0c32\u0c41 \u0c17\u0c21\u0c3f \u0c17\u0c40\u0c24\u0c32\u0c2a\u0c48 \u0c2a\u0c21\u0c47\u0c32\u0c3e \u0c38\u0c30\u0c3f\u0c1a\u0c47\u0c2f\u0c02\u0c21\u0c3f. \u0c15\u0c3e\u0c35\u0c3e\u0c32\u0c02\u0c1f\u0c47 \u0c2e\u0c33\u0c4d\u0c33\u0c40 \u0c17\u0c40\u0c2f\u0c02\u0c21\u0c3f.' : '\u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02 \u0c17\u0c21\u0c3f \u0c12\u0c15 \u0c2e\u0c42\u0c32 \u0c28\u0c41\u0c02\u0c1a\u0c3f \u0c0e\u0c26\u0c41\u0c30\u0c41 \u0c2e\u0c42\u0c32 \u0c26\u0c3e\u0c15\u0c3e \u0c35\u0c47\u0c32\u0c3f\u0c24\u0c4b \u0c32\u0c3e\u0c17\u0c3f \u0c2a\u0c46\u0c1f\u0c4d\u0c1f\u0c46 \u0c17\u0c40\u0c2f\u0c02\u0c21\u0c3f.')
      : (SC.mode === 'A' ? '\u0c05\u0c21\u0c4d\u0c21\u0c02' : '\u0c28\u0c3f\u0c32\u0c41\u0c35\u0c41') + ' \u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32\u0c41 \u0c09\u0c28\u0c4d\u0c28 \u0c2d\u0c3e\u0c17\u0c02 \u0c1a\u0c41\u0c1f\u0c4d\u0c1f\u0c42 \u0c16\u0c3e\u0c33\u0c40 \u0c1a\u0c4b\u0c1f \u0c35\u0c47\u0c32\u0c3f\u0c24\u0c4b \u0c32\u0c3e\u0c17\u0c3f \u0c15\u0c4a\u0c24\u0c4d\u0c24 \u0c2a\u0c46\u0c1f\u0c4d\u0c1f\u0c46 \u0c17\u0c40\u0c2f\u0c02\u0c21\u0c3f. \u0c09\u0c28\u0c4d\u0c28 \u0c2a\u0c46\u0c1f\u0c4d\u0c1f\u0c46\u0c28\u0c41 \u0c2e\u0c27\u0c4d\u0c2f\u0c32\u0c4b \u0c2a\u0c1f\u0c4d\u0c1f\u0c41\u0c15\u0c41\u0c28\u0c3f \u0c1c\u0c30\u0c2a\u0c02\u0c21\u0c3f, \u0c2e\u0c42\u0c32\u0c32 \u0c1a\u0c41\u0c15\u0c4d\u0c15\u0c32\u0c41 \u0c32\u0c3e\u0c17\u0c3f \u0c2a\u0c46\u0c02\u0c1a\u0c02\u0c21\u0c3f / \u0c24\u0c17\u0c4d\u0c17\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f, \u0c2a\u0c48\u0c28 \u0c15\u0c41\u0c21\u0c3f\u0c35\u0c48\u0c2a\u0c41 \u00d7 \u0c24\u0c4b \u0c24\u0c40\u0c38\u0c3f\u0c35\u0c47\u0c2f\u0c02\u0c21\u0c3f. \u0c2a\u0c47\u0c1c\u0c40 \u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f \u0c06 \u0c2a\u0c47\u0c1c\u0c40\u0c32\u0c4b\u0c28\u0c42 \u0c17\u0c40\u0c2f\u0c35\u0c1a\u0c4d\u0c1a\u0c41.';
    var pages = SC.pages.length > 1 ? '<div class="seg wide pagesel" role="group" aria-label="\u0c2a\u0c47\u0c1c\u0c40">' + SC.pages.map(function (x, i) { var tag = i === SC.gridPage ? ' \u25a6' : (SC.boxes.some(function (b) { return b.page === i; }) ? ' \u270e' : ''); return '<button data-act="scan-page" data-v="' + i + '" aria-pressed="' + (i === SC.page) + '">' + (i + 1) + tag + '</button>'; }).join('') + '</div>' : '';
    var mini = '';
    if (SC.vals || ans) {
      var nb = 0, cells = '';
      for (var r = 0; r < SC.R; r++) for (var c = 0; c < SC.C; c++) { var b = scanBlack(r, c); if (b) nb++; cells += '<button class="mc' + (b ? ' b' : '') + (SC.flip[r + ',' + c] ? ' f' : '') + '" data-act="scan-flip" data-r="' + r + '" data-c="' + c + '"' + (ans && ansSame() ? ' disabled' : '') + ' aria-label="' + (r + 1) + ', ' + (c + 1) + (b ? ' \u0c28\u0c32\u0c41\u0c2a\u0c41' : ' \u0c24\u0c46\u0c32\u0c41\u0c2a\u0c41') + '"></button>'; }
      mini = '<div class="fld"><h3 class="lbl">' + (ans ? (ansSame() ? '\u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d\u200c\u0c32\u0c4b\u0c28\u0c3f \u0c17\u0c21\u0c3f' : '\u0c08 \u0c2a\u0c47\u0c1c\u0c40\u0c32\u0c4b\u0c28\u0c3f \u0c17\u0c21\u0c3f \u00b7 ' + SC.R + '\u00d7' + SC.C + ' \u00b7 \u0c28\u0c32\u0c4d\u0c32 \u0c17\u0c21\u0c41\u0c32\u0c41 ' + nb) : '\u0c17\u0c41\u0c30\u0c4d\u0c24\u0c3f\u0c02\u0c1a\u0c3f\u0c28 \u0c17\u0c21\u0c3f \u00b7 ' + SC.R + '\u00d7' + SC.C + ' \u00b7 \u0c28\u0c32\u0c4d\u0c32 \u0c17\u0c21\u0c41\u0c32\u0c41 ' + nb) + '</h3><div class="scanmini" style="--n:' + SC.C + '">' + cells + '</div><p class="note">' +
        (ans ? (SC.match != null && ansSame() ? '\u0c08 \u0c2a\u0c47\u0c1c\u0c40\u0c32\u0c4b ' + Math.round(SC.match * 100) + '% \u0c24\u0c46\u0c32\u0c4d\u0c32 \u0c17\u0c21\u0c41\u0c32\u0c4d\u0c32\u0c4b \u0c05\u0c15\u0c4d\u0c37\u0c30\u0c3e\u0c32\u0c41 \u0c15\u0c28\u0c3f\u0c2a\u0c3f\u0c02\u0c1a\u0c3e\u0c2f\u0c3f.' : '') : '\u0c2a\u0c47\u0c2a\u0c30\u0c4d\u200c\u0c24\u0c4b \u0c2a\u0c4b\u0c32\u0c4d\u0c1a\u0c02\u0c21\u0c3f: \u0c24\u0c2a\u0c4d\u0c2a\u0c41\u0c17\u0c3e \u0c35\u0c1a\u0c4d\u0c1a\u0c3f\u0c28 \u0c17\u0c21\u0c3f\u0c28\u0c3f \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c3f\u0c24\u0c47 \u0c28\u0c32\u0c41\u0c2a\u0c41 \u2194 \u0c24\u0c46\u0c32\u0c41\u0c2a\u0c41 \u0c2e\u0c3e\u0c30\u0c41\u0c24\u0c41\u0c02\u0c26\u0c3f.') + '</p></div>';
    }
    var exp = !ans && SC.vals ? gridStarts() : null;
    var ocr = ans ? '' : '<section class="sec"><h2 class="sec-h">\u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32\u0c41</h2><div class="box">' +
      '<p class="note">' + (SC.boxes.some(function (b) { return b.auto; }) ? '\u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32\u0c41 \u0c09\u0c02\u0c21\u0c47 \u0c2d\u0c3e\u0c17\u0c3e\u0c32\u0c41 \u0c24\u0c3e\u0c28\u0c41\u0c17\u0c3e \u0c17\u0c41\u0c30\u0c4d\u0c24\u0c3f\u0c02\u0c1a\u0c3e\u0c02 (\u0c2c\u0c42\u0c21\u0c3f\u0c26 \u0c1a\u0c41\u0c15\u0c4d\u0c15\u0c32 \u0c2a\u0c46\u0c1f\u0c4d\u0c1f\u0c46\u0c32\u0c41) \u2014 \u0c2a\u0c48\u0c28 \u201c\u0c05\u0c21\u0c4d\u0c21\u0c02 / \u0c28\u0c3f\u0c32\u0c41\u0c35\u0c41 \u0c2a\u0c46\u0c1f\u0c4d\u0c1f\u0c46\u201d \u0c0e\u0c02\u0c1a\u0c41\u0c15\u0c41\u0c28\u0c3f \u0c35\u0c3e\u0c1f\u0c3f\u0c28\u0c3f \u0c1c\u0c30\u0c2a\u0c35\u0c1a\u0c4d\u0c1a\u0c41, \u0c2e\u0c42\u0c32\u0c32\u0c41 \u0c32\u0c3e\u0c17\u0c3f \u0c2a\u0c46\u0c02\u0c1a\u0c35\u0c1a\u0c4d\u0c1a\u0c41, \u00d7 \u0c24\u0c4b \u0c24\u0c40\u0c38\u0c3f\u0c35\u0c47\u0c2f\u0c35\u0c1a\u0c4d\u0c1a\u0c41. ' : '') + '\u0c1a\u0c26\u0c3f\u0c35\u0c3f\u0c28\u0c35\u0c3f \u0c15\u0c3f\u0c02\u0c26 \u0c09\u0c28\u0c4d\u0c28\u0c3e\u0c2f\u0c3f \u2014 \u0c2a\u0c4d\u0c30\u0c24\u0c3f \u0c06\u0c27\u0c3e\u0c30\u0c02 \u201c\u0c38\u0c02\u0c16\u0c4d\u0c2f. \u0c06\u0c27\u0c3e\u0c30\u0c02 (\u0c2a\u0c4a\u0c21\u0c35\u0c41)\u201d \u0c05\u0c28\u0c3f \u0c12\u0c15\u0c4d\u0c15\u0c4b \u0c32\u0c48\u0c28\u0c4d\u200c\u0c32\u0c4b. \u0c38\u0c02\u0c16\u0c4d\u0c2f\u0c32\u0c41, \u0c2a\u0c4a\u0c21\u0c35\u0c41\u0c32\u0c41 \u0c17\u0c21\u0c3f \u0c28\u0c41\u0c02\u0c1a\u0c3f \u0c35\u0c47\u0c36\u0c3e\u0c02; \u0c24\u0c46\u0c32\u0c41\u0c17\u0c41 \u0c05\u0c15\u0c4d\u0c37\u0c30\u0c3e\u0c32\u0c4d\u0c32\u0c4b \u0c24\u0c2a\u0c4d\u0c2a\u0c41\u0c32\u0c41 \u0c09\u0c02\u0c1f\u0c47 \u0c07\u0c15\u0c4d\u0c15\u0c21\u0c47 \u0c38\u0c30\u0c3f\u0c26\u0c3f\u0c26\u0c4d\u0c26\u0c02\u0c21\u0c3f.</p>' +
      '<div class="btnrow"><button class="wide-btn ter" data-act="scan-ocr"' + (busy ? ' disabled' : '') + '>' + (SC.ocr.A || SC.ocr.D ? '\u0c2e\u0c33\u0c4d\u0c33\u0c40 \u0c1a\u0c26\u0c35\u0c02\u0c21\u0c3f' : '\u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32\u0c41 \u0c1a\u0c26\u0c35\u0c02\u0c21\u0c3f') + '</button>' + (SC.boxes.length ? '<button class="wide-btn link" data-act="scan-clear"' + (busy ? ' disabled' : '') + '>\u0c17\u0c40\u0c38\u0c3f\u0c28 \u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32 \u0c2a\u0c46\u0c1f\u0c4d\u0c1f\u0c46\u0c32\u0c41 \u0c24\u0c40\u0c38\u0c3f\u0c35\u0c47\u0c2f\u0c02\u0c21\u0c3f</button>' : '') + '</div>' +
      teHintHTML() + ['A', 'D'].map(function (d) { var n = parseClueText(SC.ocr[d], d).length, want = exp ? exp[d].length : 0; return '<div class="fld"><label class="lbl" for="ocr-' + d + '">' + (d === 'A' ? '\u0c05\u0c21\u0c4d\u0c21\u0c02' : '\u0c28\u0c3f\u0c32\u0c41\u0c35\u0c41') + ' \u00b7 <span id="ocr-n-' + d + '">' + n + '</span>' + (want ? ' / ' + want : '') + ' \u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32\u0c41</label><textarea id="ocr-' + d + '" class="inp ocrbox" data-ocr="' + d + '" placeholder="1. \u0c06\u0c27\u0c3e\u0c30\u0c02 (3)">' + esc(SC.ocr[d]) + '</textarea></div>'; }).join('') +
      '</div></section>';
    return '<section class="play" style="overflow-y:auto" data-scroll="scan">' +
      '<header class="ebar"><a class="ghostbtn" href="' + (ans ? '#edit' : '#admin') + '" aria-label="\u0c35\u0c46\u0c28\u0c15\u0c4d\u0c15\u0c3f">' + I.back + '</a><h1>' + (ans ? '\u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32\u0c41 \u00b7 \u0c2b\u0c4b\u0c28\u0c4d\u200c\u0c32\u0c4b\u0c28\u0c47 \u0c1a\u0c26\u0c35\u0c21\u0c02' : '\u0c2b\u0c4b\u0c28\u0c4d\u200c\u0c32\u0c4b\u0c28\u0c47 \u0c1a\u0c26\u0c35\u0c21\u0c02') + '</h1></header>' +
      '<div class="page gutter" style="gap:14px">' + statusBox() + pages +
        '<div class="seg wide" role="group" aria-label="\u0c17\u0c40\u0c38\u0c47 \u0c2a\u0c46\u0c1f\u0c4d\u0c1f\u0c46">' + modes.map(function (m) { return '<button data-act="scan-mode" data-v="' + m[0] + '" aria-pressed="' + (SC.mode === m[0]) + '">' + m[1] + '</button>'; }).join('') + '</div>' +
        '<p class="note" id="scan-help">' + help + '</p>' +
        (SC.quad ? '<div class="btnrow"><button class="wide-btn link" data-act="scan-ungrid"' + (busy ? ' disabled' : '') + '>' + (U.confirm === 'ungrid' ? '\u0c16\u0c1a\u0c4d\u0c1a\u0c3f\u0c24\u0c2e\u0c3e? \u0c17\u0c21\u0c3f \u0c2a\u0c46\u0c1f\u0c4d\u0c1f\u0c46 \u0c24\u0c40\u0c38\u0c3f\u0c35\u0c47\u0c38\u0c4d\u0c24\u0c3e\u0c02 \u2014 \u0c2e\u0c33\u0c4d\u0c33\u0c40 \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c02\u0c21\u0c3f' : '\u0c17\u0c21\u0c3f \u0c2a\u0c46\u0c1f\u0c4d\u0c1f\u0c46 \u0c24\u0c40\u0c38\u0c3f\u0c35\u0c47\u0c2f\u0c02\u0c21\u0c3f (\u0c2a\u0c47\u0c1c\u0c40 ' + (SC.gridPage + 1) + ')') + '</button></div>' : '') +
        '<div class="scanwrap" id="scanwrap"><div class="scanbox" id="scanbox"><canvas id="scan-cv"></canvas><svg id="scan-ov" class="' + (SC.mode === 'move' ? '' : 'draw') + '" xmlns="http://www.w3.org/2000/svg"></svg></div></div>' +
        '<div class="btnrow scanzoom"><button class="smallbtn" data-act="scan-zoom" data-v="-1" aria-label="\u0c1a\u0c3f\u0c28\u0c4d\u0c28\u0c17\u0c3e">\u2212</button><span class="note">' + Math.round(SC.zoom * 100) + '%</span><button class="smallbtn" data-act="scan-zoom" data-v="1" aria-label="\u0c2a\u0c46\u0c26\u0c4d\u0c26\u0c17\u0c3e">+</button></div>' +
        '<div class="row3"><div class="fld"><label class="lbl" for="sc-r">\u0c35\u0c30\u0c41\u0c38\u0c32\u0c41</label><input id="sc-r" class="inp sm" type="number" min="3" max="25" value="' + SC.R + '"></div><div class="fld"><label class="lbl" for="sc-c">\u0c28\u0c3f\u0c32\u0c41\u0c35\u0c41 \u0c35\u0c30\u0c41\u0c38\u0c32\u0c41</label><input id="sc-c" class="inp sm" type="number" min="3" max="25" value="' + SC.C + '"></div>' +
          (ans ? '' : '<div class="fld"><label class="lbl" for="sc-paper">\u0c2a\u0c24\u0c4d\u0c30\u0c3f\u0c15</label><select id="sc-paper" class="inp sm" style="width:100%">' + paperOptions(SC.paper) + '</select></div>') +
          (ans ? '' : '<div class="fld"><label class="lbl" for="sc-date">\u0c24\u0c47\u0c26\u0c40</label><input id="sc-date" class="inp sm" style="width:100%" inputmode="numeric" placeholder="DD.MM.YYYY" value="' + esc(SC.date) + '"></div>') + '</div>' +
        mini + ocr +
        (ans && !ansSame() ? '<p class="note scanwarn">' + (SC.dimDiff ? '\u0c08 \u0c2a\u0c47\u0c1c\u0c40\u0c32\u0c4b\u0c28\u0c3f \u0c17\u0c21\u0c3f ' + SC.R + '\u00d7' + SC.C + ', \u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d \u0c17\u0c21\u0c3f ' + D.R + '\u00d7' + D.C + '. \u0c0e\u0c30\u0c41\u0c2a\u0c41 \u0c17\u0c40\u0c24\u0c32\u0c41 \u0c2a\u0c47\u0c2a\u0c30\u0c4d \u0c17\u0c21\u0c3f \u0c17\u0c40\u0c24\u0c32\u0c2a\u0c48, \u0c0e\u0c30\u0c41\u0c2a\u0c41 \u0c17\u0c21\u0c41\u0c32\u0c41 \u0c2a\u0c47\u0c2a\u0c30\u0c4d\u200c\u0c32\u0c4b\u0c28\u0c3f \u0c28\u0c32\u0c4d\u0c32 \u0c17\u0c21\u0c41\u0c32\u0c2a\u0c48 (\u0c2a\u0c41\u0c35\u0c4d\u0c35\u0c41\u0c32\u0c41 / \u0c28\u0c15\u0c4d\u0c37\u0c24\u0c4d\u0c30\u0c3e\u0c32\u0c41) \u0c2a\u0c21\u0c3f\u0c24\u0c47 \u2014 \u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d \u0c17\u0c21\u0c3f\u0c28\u0c47 \u0c07\u0c32\u0c3e \u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c02\u0c21\u0c3f.' : '\u0c08 \u0c2a\u0c47\u0c1c\u0c40\u0c32\u0c4b\u0c28\u0c3f \u0c28\u0c32\u0c4d\u0c32 \u0c17\u0c21\u0c41\u0c32\u0c41 \u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d\u200c\u0c24\u0c4b ' + SC.patDiff + ' \u0c1a\u0c4b\u0c1f\u0c4d\u0c32 \u0c24\u0c47\u0c21\u0c3e. \u0c07\u0c26\u0c3f \u0c07\u0c26\u0c47 \u0c35\u0c3e\u0c30\u0c02 \u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32\u0c47 \u0c05\u0c2f\u0c3f\u0c24\u0c47 (\u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d \u0c17\u0c21\u0c3f \u0c24\u0c2a\u0c4d\u0c2a\u0c41\u0c17\u0c3e \u0c1a\u0c26\u0c3f\u0c35\u0c3f\u0c24\u0c47), \u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d \u0c17\u0c21\u0c3f\u0c28\u0c3f \u0c08 \u0c2a\u0c47\u0c1c\u0c40\u0c32\u0c3e \u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c02\u0c21\u0c3f.') + ' \u0c24\u0c2a\u0c4d\u0c2a\u0c41\u0c17\u0c3e \u0c35\u0c1a\u0c4d\u0c1a\u0c3f\u0c28 \u0c17\u0c21\u0c3f\u0c28\u0c3f \u0c2a\u0c48 \u0c1a\u0c3f\u0c28\u0c4d\u0c28 \u0c17\u0c21\u0c3f\u0c32\u0c4b \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c3f \u0c38\u0c30\u0c3f\u0c1a\u0c47\u0c2f\u0c35\u0c1a\u0c4d\u0c1a\u0c41.</p>' +
          '<button class="wide-btn pri" data-act="scan-regrid"' + (busy || !SC.quad ? ' disabled' : '') + '>\u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d \u0c17\u0c21\u0c3f\u0c28\u0c3f \u0c08 \u0c17\u0c21\u0c3f\u0c32\u0c3e (' + SC.R + '\u00d7' + SC.C + ') \u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f \u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32\u0c41 \u0c1a\u0c26\u0c35\u0c02\u0c21\u0c3f</button>' : '') +
        (ans ? '<button class="wide-btn ' + (ansSame() ? 'pri' : 'ter') + '" data-act="scan-answers"' + (busy || !SC.quad || !ansSame() ? ' disabled' : '') + '>\u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32\u0c41 \u0c1a\u0c26\u0c3f\u0c35\u0c3f \u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d\u200c\u0c32\u0c4b \u0c28\u0c3f\u0c02\u0c2a\u0c02\u0c21\u0c3f</button><p class="note">\u0c2a\u0c4d\u0c30\u0c24\u0c3f \u0c17\u0c21\u0c3f\u0c32\u0c4b\u0c28\u0c3f \u0c05\u0c15\u0c4d\u0c37\u0c30\u0c3e\u0c28\u0c4d\u0c28\u0c3f \u0c35\u0c3f\u0c21\u0c3f\u0c17\u0c3e \u0c1a\u0c26\u0c41\u0c35\u0c41\u0c24\u0c3e\u0c02. \u0c24\u0c46\u0c32\u0c41\u0c17\u0c41 \u0c17\u0c41\u0c23\u0c3f\u0c02\u0c24\u0c3e\u0c32\u0c41, \u0c12\u0c24\u0c4d\u0c24\u0c41\u0c32\u0c4d\u0c32\u0c4b \u0c24\u0c2a\u0c4d\u0c2a\u0c41\u0c32\u0c41 \u0c30\u0c3e\u0c35\u0c1a\u0c4d\u0c1a\u0c41 \u2014 \u0c24\u0c30\u0c4d\u0c35\u0c3e\u0c24 \u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d\u200c\u0c32\u0c4b \u201c\u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32\u0c41\u201d \u0c32\u0c4b \u0c38\u0c30\u0c3f\u0c1a\u0c42\u0c21\u0c02\u0c21\u0c3f.</p>'
          : '<button class="wide-btn pri" data-act="scan-draft"' + (busy || !SC.vals ? ' disabled' : '') + '>\u0c38\u0c30\u0c3f\u0c1a\u0c42\u0c36\u0c3e\u0c28\u0c41 \u2014 \u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d \u0c24\u0c2f\u0c3e\u0c30\u0c41 \u0c1a\u0c47\u0c2f\u0c02\u0c21\u0c3f</button>') +
      '</div></section>';
  }
  function mountScan() {
    var wrap = document.getElementById('scanwrap'), box = document.getElementById('scanbox'), cv = document.getElementById('scan-cv'), ov = document.getElementById('scan-ov');
    if (!wrap || !SC || !SC.cv) return;
    cv.width = SC.W; cv.height = SC.H; cv.getContext('2d').drawImage(SC.cv, 0, 0);
    box.style.width = Math.round(wrap.clientWidth * SC.zoom) + 'px';
    ov.setAttribute('viewBox', '0 0 ' + SC.W + ' ' + SC.H); ov.setAttribute('preserveAspectRatio', 'none');
    if (SC.scroll) { wrap.scrollLeft = SC.scroll[0]; wrap.scrollTop = SC.scroll[1]; }
    else if (SC.quad && SC.page === SC.gridPage && SC.zoom === 1) { var bh = box.getBoundingClientRect().height, k = bh / SC.H; wrap.scrollTop = Math.max(0, SC.quad.tl.y * k - 20); }
    wrap.onscroll = function () { SC.scroll = [wrap.scrollLeft, wrap.scrollTop]; };
    drawScanOverlay();
    var drag = null;
    function pt(ev) { var b = ov.getBoundingClientRect(); return { x: (ev.clientX - b.left) / b.width * SC.W, y: (ev.clientY - b.top) / b.height * SC.H }; }
    ov.onpointerdown = function (ev) {
      if (SC.mode === 'move' || U.busy) return;
      var p = pt(ev), rad = 34 / (ov.getBoundingClientRect().width / SC.W);
      drag = null;
      if (SC.mode === 'grid' && SC.quad && SC.page === SC.gridPage) ['tl', 'tr', 'bl', 'br'].forEach(function (k) { var q = SC.quad[k]; if (!drag && Math.hypot(q.x - p.x, q.y - p.y) < rad) drag = { corner: k }; });
      if (!drag && SC.mode !== 'grid') {
        for (var bi = SC.boxes.length - 1; bi >= 0 && !drag; bi--) {
          var b = SC.boxes[bi]; if (b.page !== SC.page) continue;
          var del = boxDel(b, rad);
          if (Math.hypot(p.x - del.x, p.y - del.y) < rad * 0.8) { SC.boxes.splice(bi, 1); drawScanOverlay(); render(); ev.preventDefault(); return; }
          var cs = { tl: [b.x, b.y], tr: [b.x + b.w, b.y], bl: [b.x, b.y + b.h], br: [b.x + b.w, b.y + b.h] };
          Object.keys(cs).forEach(function (k) { if (!drag && Math.hypot(p.x - cs[k][0], p.y - cs[k][1]) < rad) drag = { box: b, bcorner: k }; });
          if (!drag && p.x > b.x && p.x < b.x + b.w && p.y > b.y && p.y < b.y + b.h) drag = { box: b, move: { dx: p.x - b.x, dy: p.y - b.y } };
        }
      }
      if (!drag) drag = { start: p, box: null };
      try { ov.setPointerCapture(ev.pointerId); } catch (e) {}
      ev.preventDefault();
    };
    ov.onpointermove = function (ev) {
      if (!drag) return;
      var p = pt(ev);
      if (drag.corner) SC.quad[drag.corner] = p;
      else if (drag.move) { drag.box.x = Math.max(0, Math.min(SC.W - drag.box.w, p.x - drag.move.dx)); drag.box.y = Math.max(0, Math.min(SC.H - drag.box.h, p.y - drag.move.dy)); }
      else if (drag.bcorner) {
        var bx = drag.box, L = bx.x, T = bx.y, Rr = bx.x + bx.w, B = bx.y + bx.h, kc = drag.bcorner;
        if (kc[1] === 'l') L = Math.min(p.x, Rr - 20); else Rr = Math.max(p.x, L + 20);
        if (kc[0] === 't') T = Math.min(p.y, B - 20); else B = Math.max(p.y, T + 20);
        bx.x = Math.max(0, L); bx.y = Math.max(0, T); bx.w = Math.min(SC.W, Rr) - bx.x; bx.h = Math.min(SC.H, B) - bx.y;
      }
      else {
        var x0 = Math.min(drag.start.x, p.x), y0 = Math.min(drag.start.y, p.y), x1 = Math.max(drag.start.x, p.x), y1 = Math.max(drag.start.y, p.y);
        if (x1 - x0 < 12 || y1 - y0 < 12) return;
        if (SC.mode === 'grid') { SC.quad = { tl: { x: x0, y: y0 }, tr: { x: x1, y: y0 }, bl: { x: x0, y: y1 }, br: { x: x1, y: y1 } }; SC.gridPage = SC.page; SC.flip = {}; }
        else {
          if (!drag.box) { drag.box = { page: SC.page, d: SC.mode }; SC.boxes.push(drag.box); }
          drag.box.x = x0; drag.box.y = y0; drag.box.w = x1 - x0; drag.box.h = y1 - y0;
        }
      }
      drawScanOverlay();
    };
    ov.onpointerup = ov.onpointercancel = function () {
      if (!drag) return; var was = drag; drag = null;
      if (SC.mode === 'grid' && SC.quad) { scanDetect(); render(); }
      else if (was.box) { was.box.auto = was.box.auto && !was.start; render(); }
    };
  }
  function boxDel(b, rad) { return { x: b.x + b.w - rad * 2.2, y: b.y + rad * 1.4 }; }
  function drawScanOverlay() {
    var ov = document.getElementById('scan-ov'); if (!ov) return;
    var sw = SC.W / 400, s = '';
    if (SC.quad && SC.page === SC.gridPage) {
      var R = SC.R, C = SC.C;
      for (var r = 0; r < R; r++) for (var c = 0; c < C; c++) if (scanBlack(r, c)) {
        var a = qpt(c / C, r / R), b = qpt((c + 1) / C, r / R), d = qpt((c + 1) / C, (r + 1) / R), e = qpt(c / C, (r + 1) / R);
        s += '<polygon points="' + [a, b, d, e].map(function (p) { return p.x.toFixed(1) + ',' + p.y.toFixed(1); }).join(' ') + '" fill="rgba(220,30,30,.35)"/>';
      }
      for (var i = 0; i <= R; i++) { var p0 = qpt(0, i / R), p1 = qpt(1, i / R); s += '<line x1="' + p0.x + '" y1="' + p0.y + '" x2="' + p1.x + '" y2="' + p1.y + '" stroke="#E00000" stroke-width="' + (i % R ? sw : sw * 2) + '"/>'; }
      for (var j = 0; j <= C; j++) { var q0 = qpt(j / C, 0), q1 = qpt(j / C, 1); s += '<line x1="' + q0.x + '" y1="' + q0.y + '" x2="' + q1.x + '" y2="' + q1.y + '" stroke="#E00000" stroke-width="' + (j % C ? sw : sw * 2) + '"/>'; }
      ['tl', 'tr', 'bl', 'br'].forEach(function (k) { var q = SC.quad[k]; s += '<circle cx="' + q.x + '" cy="' + q.y + '" r="' + sw * 9 + '" fill="rgba(224,0,0,.25)" stroke="#E00000" stroke-width="' + sw * 2 + '"/>'; });
    }
    SC.boxes.forEach(function (b) {
      if (b.page !== SC.page) return;
      var col = b.d === 'A' ? '#1565C0' : b.d === 'D' ? '#2E7D32' : '#6B5849', lab = b.d === 'A' ? '\u0c05\u0c21\u0c4d\u0c21\u0c02' : b.d === 'D' ? '\u0c28\u0c3f\u0c32\u0c41\u0c35\u0c41' : '\u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32\u0c41 (\u0c06\u0c1f\u0c4b)';
      s += '<rect x="' + b.x + '" y="' + b.y + '" width="' + b.w + '" height="' + b.h + '" fill="' + (SC.mode === 'A' || SC.mode === 'D' ? 'rgba(255,255,255,.06)' : 'none') + '" stroke="' + col + '" stroke-width="' + sw * 2.5 + '"' + (b.d ? '' : ' stroke-dasharray="' + sw * 8 + ' ' + sw * 6 + '"') + '/>' +
        '<text x="' + (b.x + sw * 4) + '" y="' + (b.y + sw * 22) + '" fill="' + col + '" font-size="' + sw * 18 + '" font-weight="700">' + lab + '</text>';
      if (SC.mode === 'A' || SC.mode === 'D') {
        [[b.x, b.y], [b.x + b.w, b.y], [b.x, b.y + b.h], [b.x + b.w, b.y + b.h]].forEach(function (q) { s += '<circle cx="' + q[0] + '" cy="' + q[1] + '" r="' + sw * 8 + '" fill="' + col + '" fill-opacity=".25" stroke="' + col + '" stroke-width="' + sw * 2 + '"/>'; });
        var dl = boxDel(b, 34 / ((ov.getBoundingClientRect().width || SC.W) / SC.W));
        s += '<circle cx="' + dl.x + '" cy="' + dl.y + '" r="' + sw * 9 + '" fill="#fff" stroke="#C00000" stroke-width="' + sw * 2 + '"/><text x="' + dl.x + '" y="' + (dl.y + sw * 6) + '" text-anchor="middle" fill="#C00000" font-size="' + sw * 18 + '" font-weight="700">\u00d7</text>';
      }
    });
    ov.innerHTML = s;
  }
  // reviewed clue lines ("12. text (3)") as the admin sees them in the text boxes
  function parseClueText(text, dir) {
    var out = [], cur = null, d = dir;
    String(text || '').replace(/[\u200c\u200d]/g, '').replace(/\)\s+(?=\d{1,2}\s*[.)])/g, ')\n').split(/\n/).forEach(function (line) {
      line = line.replace(/\s+/g, ' ').trim(); if (!line) return;
      var hm = line.match(HEAD_RE);
      if (hm && !/^\d/.test(line)) { d = /^\u0c05/.test(hm[1]) ? 'A' : 'D'; line = line.slice(hm[0].length); if (!line) return; }
      var m = line.match(/^(\d{1,2})\s*[.)\-:,]?\s*(.*)$/);
      if (m) { cur = { d: d, n: +m[1], text: m[2], len: null }; out.push(cur); }
      else if (cur) cur.text += ' ' + line;
    });
    out.forEach(function (c) {
      var lm = c.text.match(/\s*[(\[{]?\s*(\d{1,2})\s*[)\]}]\s*$/);
      if (lm) { c.len = +lm[1]; c.text = c.text.slice(0, c.text.length - lm[0].length); }
      c.text = c.text.replace(/\s*\(\s*\)\s*$/, '').replace(/\s+/g, ' ').trim().normalize('NFC');
    });
    return out.filter(function (c) { return c.n > 0 && c.text; });
  }
  // headings, as printed or as the reader bends them (\u0c05\u0c21\u0c21\u0c02, \u0c05\u0c32\u0c4d\u0c21\u0c02, \u0c28\u0c3f\u0c32\u0c41\u0c2a)
  var HEAD_RE = /^(\u0c05\S{0,3}\u0c21\S{0,2}\u0c02|\u0c05\u0c21\u0c4d\u0c21\u0c2e\u0c41|\u0c28\u0c3f\S{0,2}\u0c32\u0c41\S{0,2})\s*[:\uff1a.-]?\s*/;
  // raw reading of a clue column \u2192 clues. A clue ends at its length mark "(3)"; clue numbers are often lost by the
  // reader, so they are taken from the grid, in order.
  // a clue number as the reader bends it: 31 \u2192 81, 2 \u2192 \u00a3, 4 \u2192 \u0c15\u0c4d\u0c37, 7 \u2192 \u0c17, 9 \u2192 \u0c30, 6 \u2192 &
  var NUM_START = /^[\s.,:;'"\u201c\u201d\u2018\u2019`_~\-\u2013\u2014\u2022\u00b7\[\]()]*((?:\d|[\u00a3\u20ac&$?\[\]|]|\u0c15\u0c4d\u0c37){1,3}'?|[\u0c17\u0c30\u0c36&'](?=\s*[.,]))\s*[.,:;'\u2019)]\s*(?=\S)/;
  var LEN_END = /\s*[(\[{]\s*([^()\[\]{}\s]{0,3})\s*[)\]}]\s*$|\s*[(\[{]\s*([^()\s]{0,2})\s*$|\s+([^()\s]{1,3})\)\s*$|\s*([0-9?\u00a3\u20ac!|]{1,3})\)\s*$|\s+(\d{1,2})\s*\??\s*$/;
  function teluguLetters(t) { return (String(t).match(/[\u0c05-\u0c39]/g) || []).length; }
  // raw reading of a clue column \u2192 clues. A clue ends at its length mark "(3)" or where the next number starts;
  // numbers and lengths are kept only as hints (the reader bends them) \u2014 the grid decides them later.
  function parseClueItems(text, dir) {
    var items = [], cur = null, d = dir || null;
    String(text || '').replace(/[\u200c\u200d|]/g, '').split(/\n/).forEach(function (raw) {
      // specks: far right of the text, or a dot/quote just after the length mark
      var line = raw.replace(/\s{3,}\S{1,2}\s*$/, '').replace(/\)\s*[,.'"`\u2019\u201d]{1,2}\s*$/, ')').replace(/\s+/g, ' ').trim(); if (!line) return;
      if ((line.match(/[\u0C3E-\u0C4C]{2}/g) || []).length >= 2 || /[^\s]{22,}/.test(line.replace(/[()\[\]0-9]/g, ' '))) return;   // a decorated border read as letters
      var hh = headingOf(line);
      if (hh) { d = hh.d; cur = null; line = hh.rest; if (!line) return; }
      if (HEAD_STOP.test(line)) { d = null; cur = null; return; }
      if (/^\S{0,2}\s*\u0c06?\u0c27\u0c3e\u0c30\u0c3e\u0c32\u0c41\s*[-\u2013:.]?\s*$/.test(line)) return;   // a bare "\u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32\u0c41" banner
      if (!d) return;
      var nm = line.match(NUM_START);
      if (cur && nm && /^[\u0C05-\u0C39\u201c"'\u2018]/.test(line.slice(nm[0].length))) cur = null;   // a fresh number starts a new clue
      if (!cur) {
        nm = nm || line.match(/^\s*(\d{1,3})\s+(?=[\u0C05-\u0C39])/)   // a number whose dot was lost ("85 \u0c35\u0c02\u0c1a\u0c28") or read as 8 ("182" for 12.)
          || line.match(/^\s*(\S{0,3}[0-9\u00a3\u20ac&$?\[\]|]\S{0,3})\s*[.,]\s+(?=[\u0C05-\u0C39\u201c"'\u2018])/)   // "\u0c15[8.", "\u0c15\u0c4d\u0c374."
          || line.match(/^\s*(\u0c15\u0c4d\u0c37\S{0,2}|[\u0c15-\u0c39][\u0C3E-\u0C4C]?)\s*\.\s+(?=[\u0C05-\u0C39\u201c"'\u2018])/);   // "\u0c15\u0c4d\u0c37\u0c40\u0c21.", "\u0c15." (44., 48.)
        var num = nm ? nm[1] : '';
        line = line.slice(nm ? nm[0].length : 0).replace(/^(?:[\u0c15-\u0c39][\u0C3E-\u0C4D]?|[\u00a3\u20ac$&]{1,2}\??)\s+(?=\S\S)/, function (x) { if (!num) num = x.trim(); return ''; });
        if (!line) return;
        cur = { d: d, raw: num.replace(/'/g, ''), n: /^\d{1,2}$/.test(num) ? +num : null, text: '' }; items.push(cur);
      }
      var em = line.match(LEN_END);
      if (em && teluguLetters(line.slice(0, line.length - em[0].length) + cur.text) >= 2) {
        var lr = em[1] || em[2] || em[3] || em[4] || em[5] || '', lv = (lr.match(/[1-9]/) || [''])[0];
        cur.text += (cur.text ? ' ' : '') + line.slice(0, line.length - em[0].length); cur.len = lv ? +lv : null; cur.lenRaw = lr; cur = null;
      } else cur.text += (cur.text ? ' ' : '') + line;
    });
    items.forEach(function (it) { it.text = it.text.replace(/^\(\s+/, '').replace(/\s[\/\\]\s/g, ' ').replace(/\s*[(\[{]\s*$/, '').replace(/[\s\u0C66-\u0C6F_~]+$/, '').replace(/^[^\u0c05-\u0c39\u201c"'\u2018(]+/, '').replace(/\s+/g, ' ').trim().normalize('NFC'); });
    return { items: items.filter(function (it) { return teluguLetters(it.text) >= 2; }), dir: d };
  }
  // how well a bent clue number / length fits the grid's one
  var DIGIT_LIKE = { '8': '386', '3': '38', '0': '06893', '1': '174', '7': '17', '9': '93', '6': '68', '5': '5', '2': '2', '4': '4', 'Q': '4', '\u00a3': '2', '\u20ac': '2', '&': '68', '\u0c17': '57', '\u0c30': '9', '\u0c36': '3' };
  function digitSim(a, b) { return a === b ? 1 : (DIGIT_LIKE[a] || '').indexOf(b) >= 0 ? 0.6 : 0; }
  function numSim(raw, n) {
    if (!raw) return 0;
    var r = String(raw).replace(/\u0c15\u0c4d\u0c37/g, 'Q').replace(/[\[\]|?$'`]/g, '').split(''), t = String(n).split('');
    if (!r.length) return 0;
    function cmp(x, y) { var s = 0; for (var i = 0; i < y.length; i++) { var v = digitSim(x[i], y[i]); if (!v) return 0; s += v; } return s / y.length; }
    if (r.length === t.length) return 3 * cmp(r, t);
    if (r.length === t.length - 1) return 1.2 * cmp(r, t.slice(1));                        // the first digit lost
    if (r.length === t.length + 1) { var bm = 0; for (var q = 0; q < r.length; q++) bm = Math.max(bm, cmp(r.slice(0, q).concat(r.slice(q + 1)), t)); return 1.2 * bm; }
    return 0;
  }
  function lenSim(it, L) { if (!it.len) return 0; return it.len === L ? 0.6 : digitSim(String(it.len), String(L)) ? 0.3 : 0; }
  // read clues \u2192 the grid's clue slots, in order: a bent number or a stray line must not shift every clue after it
  function alignItems(items, exp) {
    var m = items.length, k = exp.length, DROP = -0.6, SKIP = -0.35, i, j;
    var sc = [], how = [];
    for (i = 0; i <= m; i++) { sc.push(new Float64Array(k + 1)); how.push(new Int8Array(k + 1)); }
    for (i = 1; i <= m; i++) { sc[i][0] = sc[i - 1][0] + DROP; how[i][0] = 1; }
    for (j = 1; j <= k; j++) { sc[0][j] = sc[0][j - 1] + SKIP; how[0][j] = 2; }
    for (i = 1; i <= m; i++) for (j = 1; j <= k; j++) {
      var it = items[i - 1], e = exp[j - 1];
      var a = sc[i - 1][j - 1] + 1 + numSim(it.raw, e.n) + lenSim(it, e.len), b = sc[i - 1][j] + DROP, c = sc[i][j - 1] + SKIP;
      if (a >= b && a >= c) { sc[i][j] = a; how[i][j] = 0; } else if (b >= c) { sc[i][j] = b; how[i][j] = 1; } else { sc[i][j] = c; how[i][j] = 2; }
    }
    var got = new Array(k), extra = []; i = m; j = k;
    while (i > 0 || j > 0) {
      var h = i === 0 ? 2 : j === 0 ? 1 : how[i][j];
      if (h === 0) { got[j - 1] = items[i - 1]; i--; j--; } else if (h === 1) { extra.unshift(items[i - 1]); i--; } else j--;
    }
    return { got: got, extra: extra, score: sc[m][k] };
  }
  function numberItems(items, exp) {
    if (!exp || !exp.length) return items.map(function (it) { return { n: it.n || '', text: it.text, len: it.len }; });
    var al = alignItems(items, exp);
    return exp.map(function (e, j) { var it = al.got[j]; return { n: e.n, text: it ? it.text : '', len: e.len }; });
  }
  function ocrLabel(m) {
    var pc = m && m.progress ? ' ' + Math.round(m.progress * 100) + '%' : '';
    return /loading|initializ/i.test((m && m.status) || '') ? '\u0c1a\u0c26\u0c3f\u0c35\u0c47 \u0c09\u0c2a\u0c15\u0c30\u0c23\u0c02 \u0c38\u0c3f\u0c26\u0c4d\u0c27\u0c2e\u0c35\u0c41\u0c24\u0c4b\u0c02\u0c26\u0c3f\u2026' + pc : /recogniz/i.test((m && m.status) || '') ? '\u0c1a\u0c26\u0c41\u0c35\u0c41\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c02\u2026' + pc : '';
  }
  // Eenadu's red \u0c2a\u0c26\u0c15\u0c47\u0c33\u0c3f banner beside the clues is blanked out so its big letters are not read as clue text
  function blankBanner(cv) {
    var W = cv.width, H = cv.height, ctx = cv.getContext('2d'), d = ctx.getImageData(0, 0, W, H).data, step = Math.max(1, Math.floor(H / 400));
    var red = new Uint32Array(W), top = new Int32Array(W).fill(-1), bot = new Int32Array(W).fill(-1), rows = 0;
    for (var y = 0; y < H; y += step) { rows++; for (var x = 0; x < W; x++) { var o = (y * W + x) * 4; if (d[o] > 170 && d[o + 1] < 140 && d[o + 2] < 140) { red[x]++; if (top[x] < 0) top[x] = y; bot[x] = y; } } }
    // the banner: columns that are mostly red over their red stretch; whiten that stretch only, not the clues above or below it
    ctx.fillStyle = '#fff';
    for (var x2 = 0; x2 < W; x2++) {
      if (top[x2] < 0) continue;
      var span = (bot[x2] - top[x2]) / step + 1;
      if (span > rows * 0.06 && red[x2] > span * 0.45) ctx.fillRect(x2, top[x2], 1, bot[x2] - top[x2] + step);
    }
    return cv;
  }
  // a clue area \u2192 blocks (separated by wide empty bands) \u2192 columns (separated by empty gutters, dashed rules allowed).
  // A block whose columns are not separated all the way down (a \u0c38\u0c41\u0c21\u0c4b\u0c15\u0c41 grid under the clues) is first cut at its widest
  // empty band. A narrow strip (a column of clue numbers) stays with its text.
  function splitLayout(cv) {
    var W = cv.width, H = cv.height, d = cv.getContext('2d').getImageData(0, 0, W, H).data, ink = new Uint8Array(W * H), rowInk = new Uint32Array(H), x, y;
    for (y = 0; y < H; y++) for (x = 0; x < W; x++) { var o = (y * W + x) * 4; if ((d[o] * 299 + d[o + 1] * 587 + d[o + 2] * 114) / 1000 < 150) { ink[y * W + x] = 1; rowInk[y]++; } }
    function emptyRuns(a, lim) { var out = [], st = -1; for (var i = 0; i < a.length; i++) { var z = a[i] <= lim; if (z && st < 0) st = i; if (!z && st >= 0) { if (st > 0) out.push([st, i]); st = -1; } } return out; }
    var runs = emptyRuns(rowInk, 1);
    var lens = runs.map(function (r) { return r[1] - r[0]; }).sort(function (a, b) { return a - b; }), med = lens.length ? lens[lens.length >> 1] : 0;
    var cuts = [0]; runs.forEach(function (r) { if (r[1] - r[0] >= Math.max(2.5 * med, 0.03 * W)) cuts.push((r[0] + r[1]) >> 1); }); cuts.push(H);
    // a box's top / bottom border (a line across most of the width) inside a region, nearest its middle
    function ruleIn(x0, x1, y0, y1) {
      var w = x1 - x0, edge = 0.08 * (y1 - y0), rb = -1, best = null, mid = (y0 + y1) / 2;
      for (y = y0; y <= y1; y++) {
        var longest = 0;
        if (y < y1) { var run = 0; for (x = x0; x < x1; x++) { if (ink[y * W + x]) { run++; if (run > longest) longest = run; } else run = 0; } }
        var rule = y < y1 && longest >= 0.6 * w;
        if (rule && rb < 0) rb = y;
        if (!rule && rb >= 0) { var c = (rb + y) >> 1; if (y - rb <= 0.02 * H && c - y0 > edge && y1 - c > edge && (best == null || Math.abs(c - mid) < Math.abs(best - mid))) best = c; rb = -1; }
      }
      return best;
    }
    // columns of a region: a gutter is a vertical strip that (almost) no text line crosses. Thin vertical rules
    // (dashed column lines) are ignored; loose: up to 12% of the lines (a title, a link) may cross it.
    function columns(x0, x1, y0, y1, loose) {
      var w = x1 - x0, bh = y1 - y0, col = new Float32Array(w), tot = 0, rowc = new Uint32Array(bh);
      var in0 = x0 + Math.round(0.1 * w), in1 = x1 - Math.round(0.1 * w);   // text lines are found away from the side margins
      for (y = y0; y < y1; y++) for (x = x0; x < x1; x++) if (ink[y * W + x]) { col[x - x0]++; tot++; if (x >= in0 && x < in1) rowc[y - y0]++; }
      var bands = [], bs = -1;
      for (y = 0; y <= bh; y++) { var on = y < bh && rowc[y] > 2; if (on && bs < 0) bs = y; if (!on && bs >= 0) { if (y - bs >= 4) bands.push([bs, y]); bs = -1; } }
      var hit = new Uint16Array(w), win = Math.max(3, Math.round(0.006 * W)), R = 12, ps = new Int32Array(w + 1);
      bands.forEach(function (bd) {
        var orr = new Uint8Array(w);
        for (var yy = y0 + bd[0]; yy < y0 + bd[1]; yy++) {
          for (x = 0; x < w; x++) ps[x + 1] = ps[x] + ink[yy * W + x0 + x];
          for (x = 0; x < w; x++) if (ink[yy * W + x0 + x] && ps[Math.min(w, x + R + 1)] - ps[Math.max(0, x - R)] > 5) orr[x] = 1;
        }
        var last = -1e9; for (x = 0; x < w; x++) if (orr[x]) last = x; else if (x - last <= win) orr[x] = 2;   // widen each mark a little
        last = 1e9; for (x = w - 1; x >= 0; x--) if (orr[x] === 1) last = x; else if (last - x <= win && !orr[x]) orr[x] = 2;
        var cov = 0; for (x = 0; x < w; x++) if (orr[x]) cov++;
        if (cov > 0.85 * w) return;   // a box's border or a rule across the whole width, not a line of text
        for (x = 0; x < w; x++) if (orr[x]) hit[x]++;
      });
      var nb = Math.max(1, bands.length), lim = loose ? 0.12 * nb : Math.max(1, Math.floor(0.04 * nb));   // a heading may cross
      var gut = [], gs = -1;
      for (x = 0; x < w; x++) { var e = hit[x] <= lim; if (e && gs < 0) gs = x; if (!e && gs >= 0) { gut.push([gs, x]); gs = -1; } }
      // a column gutter is wide; the gap between a clue number and its text is narrow \u2014 keep only the wide ones
      var cand = gut.filter(function (g) { return g[0] > 0.12 * w && g[1] < 0.88 * w && g[1] - g[0] >= Math.max(6, (loose ? 0.015 : 0.025) * W); });
      var widest = cand.reduce(function (m, g) { return Math.max(m, g[1] - g[0]); }, 0), xs = [0];
      cand.forEach(function (g) {
        if (g[1] - g[0] < 0.5 * widest) return;
        var lo = Infinity, a0 = g[0], a1 = g[0], b0 = -1;       // cut where the fewest lines cross, in the middle of that stretch
        for (var xx = g[0]; xx < g[1]; xx++) lo = Math.min(lo, hit[xx]);
        for (xx = g[0]; xx <= g[1]; xx++) { var ok = xx < g[1] && hit[xx] <= lo; if (ok && b0 < 0) b0 = xx; if (!ok && b0 >= 0) { if (xx - b0 > a1 - a0) { a0 = b0; a1 = xx; } b0 = -1; } }
        xs.push((a0 + a1) >> 1);
      });
      xs.push(w);
      for (var again = true; again && xs.length > 2;) {           // a strip narrower than 15% joins its neighbour
        again = false;
        for (var j = 0; j < xs.length - 1; j++) if (xs[j + 1] - xs[j] < 0.15 * w) { xs.splice(j + 1 < xs.length - 1 ? j + 1 : j, 1); again = true; break; }
      }
      var strips = [];
      for (var j2 = 0; j2 < xs.length - 1; j2++) { var ink2 = 0; for (x = xs[j2]; x < xs[j2 + 1]; x++) ink2 += col[x]; if (ink2 > 0.002 * bh * (xs[j2 + 1] - xs[j2])) strips.push([x0 + xs[j2], x0 + xs[j2 + 1]]); }
      return { tot: tot, strips: strips };
    }
    function cut(x0, x1, y0, y1, depth, out) {
      var cs = columns(x0, x1, y0, y1); if (cs.tot < 60) return;
      if (cs.strips.length > 1) {
        // two clue boxes one above the other (08.11.2026, 27.09.2026): their columns line up, so the gutters run the whole height,
        // but each box must be read on its own (top box's columns, then the bottom box's). Cut across where every wide column is empty.
        if (depth < 6) {
          var wide = cs.strips.filter(function (sp) { return sp[1] - sp[0] >= 0.2 * (x1 - x0); }), common = null;
          if (wide.length > 1) {
            var emp = new Uint8Array(y1 - y0).fill(1);
            wide.forEach(function (sp) { var a0 = sp[0] + Math.round(0.05 * (sp[1] - sp[0])), a1 = sp[1] - Math.round(0.05 * (sp[1] - sp[0])); for (y = y0; y < y1; y++) { var n0 = 0; for (x = a0; x < a1; x++) n0 += ink[y * W + x]; if (n0 > 1 && n0 < 0.7 * (a1 - a0)) emp[y - y0] = 0; } });   /* a box's border line counts as empty */
            var rs = -1, edge = 0.08 * (y1 - y0), gaps = [];
            for (y = 0; y <= y1 - y0; y++) { var e2 = y < y1 - y0 && emp[y]; if (e2 && rs < 0) rs = y; if (!e2 && rs >= 0) { if (rs > 0 && y < y1 - y0) gaps.push([rs, y]); rs = -1; } }
            var gl = gaps.map(function (g) { return g[1] - g[0]; }).sort(function (a, b) { return a - b; }), gmd = gl.length ? gl[gl.length >> 1] : 0, minGap = Math.max(2.5 * gmd, 0.03 * W);
            gaps.forEach(function (g) { if (g[1] - g[0] >= minGap && g[0] > edge && g[1] < y1 - y0 - edge && (!common || g[1] - g[0] > common[1] - common[0])) common = g; });
          }
          // no empty band between them, but a box border across (Sakshi's \u0c05\u0c21\u0c4d\u0c21\u0c02 box right above its \u0c28\u0c3f\u0c32\u0c41\u0c35\u0c41 box): cut on the border
          var midC = common ? y0 + ((common[0] + common[1]) >> 1) : ruleIn(x0, x1, y0, y1);
          if (midC != null) {
            var up2 = columns(x0, x1, y0, midC), dn2 = columns(x0, x1, midC, y1);
            if (up2.tot >= 60 && dn2.tot >= 60) { cut(x0, x1, y0, midC, depth + 1, out); cut(x0, x1, midC, y1, depth + 1, out); return; }
          }
        }
        cs.strips.forEach(function (sp) { if (depth < 3 && sp[1] - sp[0] > 0.3 * W) cut(sp[0], sp[1], y0, y1, depth + 2, out); else out.push([sp[0], y0, sp[1], y1]); });
        return;
      }
      if (depth < 8) {
        // split across at an empty band \u2014 preferably the one that leaves clean columns above and below (between two clue boxes)
        var a = new Uint32Array(y1 - y0), ix0 = x0 + Math.round(0.1 * (x1 - x0)), ix1 = x1 - Math.round(0.1 * (x1 - x0));
        for (y = y0; y < y1; y++) for (x = ix0; x < ix1; x++) if (ink[y * W + x]) a[y - y0]++;
        var rr = emptyRuns(a, 1), ls = rr.map(function (r) { return r[1] - r[0]; }).sort(function (p, q) { return p - q; }), md = ls.length ? ls[ls.length >> 1] : 0;
        var cands = rr.filter(function (r) { return r[1] - r[0] >= Math.max(6, 0.008 * W); }).sort(function (p, q) { return (q[1] - q[0]) - (p[1] - p[0]); }).slice(0, 10);
        var both = null, one = null;
        for (var ci = 0; ci < cands.length && !both; ci++) {
          var mid0 = y0 + ((cands[ci][0] + cands[ci][1]) >> 1), up = columns(x0, x1, y0, mid0).strips.length > 1, dn = columns(x0, x1, mid0, y1).strips.length > 1;
          if (up && dn) both = mid0; else if ((up || dn) && one == null) one = mid0;
        }
        var bigGap = cands.length && rr.length > 1 && cands[0][1] - cands[0][0] >= Math.max(1.6 * md, 0.01 * W) ? y0 + ((cands[0][0] + cands[0][1]) >> 1) : null;
        var mid = both != null ? both : one != null ? one : bigGap;
        if (mid != null) { cut(x0, x1, y0, mid, depth + 1, out); cut(x0, x1, mid, y1, depth + 1, out); return; }
      }
      var lc = columns(x0, x1, y0, y1, true);
      if (lc.strips.length > 1) { lc.strips.forEach(function (sp) { out.push([sp[0], y0, sp[1], y1]); }); return; }
      out.push([cs.strips.length ? cs.strips[0][0] : x0, y0, cs.strips.length ? cs.strips[0][1] : x1, y1]);
    }
    var blocks = [];
    for (var i = 0; i < cuts.length - 1; i++) { var rects = []; cut(0, W, cuts[i], cuts[i + 1], 0, rects); if (rects.length) blocks.push({ rects: rects }); }
    return blocks;
  }
  function subCanvas(cv, x0, y0, x1, y1) { var c = document.createElement('canvas'), pad = 16; c.width = x1 - x0 + 2 * pad; c.height = y1 - y0 + 2 * pad; var g = c.getContext('2d'); g.fillStyle = '#fff'; g.fillRect(0, 0, c.width, c.height); g.drawImage(cv, x0, y0, x1 - x0, y1 - y0, pad, pad, x1 - x0, y1 - y0); return c; }
  var HEAD_STOP = /\u0c38\u0c41[\u0c21\u0c1f\u0c26\u0c22]\S{0,2}\u0c15\u0c41|Sudoku/i;   // \u0c38\u0c41\u0c21\u0c4b\u0c15\u0c41, also as the reader bends it (\u0c38\u0c41\u0c1f\u0c26\u0c4a\u0c15\u0c41)
  // a heading line: \u0c05\u0c21\u0c4d\u0c21\u0c02 / \u0c28\u0c3f\u0c32\u0c41\u0c35\u0c41 (also "\u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32\u0c41 - \u0c05\u0c21\u0c4d\u0c21\u0c02"), alone or followed by a numbered clue \u2014 not a clue like "\u0c05\u0c21\u0c4d\u0c21\u0c02 4\u0c24\u0c4b \u0c2f\u0c41\u0c26\u0c4d\u0c27\u0c02"
  var HEAD_RE2 = /^(?:\S{0,2}\s+)?(?:\u0c06?\u0c27\u0c3e\u0c30\u0c3e\u0c32\u0c41\s*[-\u2013:.]?\s*)?(\u0c05\S{0,3}\u0c21\S{0,2}\u0c02|\u0c05\u0c21\u0c4d\u0c21\u0c2e\u0c41|\u0c28\u0c3f\S{0,2}\u0c32\u0c41\S{0,2})(?=\s|$|[:\uff1a.-])\s*[:\uff1a.-]?\s*/;
  function headingOf(line) {
    line = String(line || '').replace(/[\u200C\u200D]/g, '').replace(/\s{4,}\S{1,8}\s*$/, '').trim();   // a speck far right of the heading
    var m = line.match(HEAD_RE2); if (!m) return null;
    var rest = line.slice(m[0].length).trim();
    if (rest && !/^\d{1,2}\s*[.)]/.test(rest) && rest.length > 4) return null;
    return { d: /^\u0c05/.test(m[1]) ? 'A' : 'D', rest: /^\d/.test(rest) ? rest : '' };
  }
  function scanOCR() {
    var jobs = SC.boxes.slice().sort(function (a, b) { return a.page - b.page || a.y - b.y || a.x - b.x; });
    if (!jobs.length) { toast('\u0c2e\u0c41\u0c02\u0c26\u0c41 \u201c\u0c05\u0c21\u0c4d\u0c21\u0c02 \u0c2a\u0c46\u0c1f\u0c4d\u0c1f\u0c46\u201d, \u201c\u0c28\u0c3f\u0c32\u0c41\u0c35\u0c41 \u0c2a\u0c46\u0c1f\u0c4d\u0c1f\u0c46\u201d \u0c0e\u0c02\u0c1a\u0c41\u0c15\u0c41\u0c28\u0c3f \u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32 \u0c1a\u0c41\u0c1f\u0c4d\u0c1f\u0c42 \u0c2a\u0c46\u0c1f\u0c4d\u0c1f\u0c46\u0c32\u0c41 \u0c17\u0c40\u0c2f\u0c02\u0c21\u0c3f.'); return; }
    U.busy = 'ocr'; render(); scanMsg('\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41 \u0c1a\u0c26\u0c3f\u0c35\u0c47 \u0c09\u0c2a\u0c15\u0c30\u0c23\u0c02 \u0c24\u0c46\u0c38\u0c4d\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c02\u2026 \u0c2e\u0c4a\u0c26\u0c1f\u0c3f\u0c38\u0c3e\u0c30\u0c3f \u0c15\u0c4a\u0c02\u0c24 \u0c38\u0c2e\u0c2f\u0c02 \u0c2a\u0c21\u0c41\u0c24\u0c41\u0c02\u0c26\u0c3f.');
    var label = '', texts = [], sudoku = false;   // nothing after the \u0c38\u0c41\u0c21\u0c4b\u0c15\u0c41 heading is read
    TPROG = function (m) { var t = ocrLabel(m); if (t) scanMsg(label + t); };
    tessWorker().then(function (w) {
      var chain = w.setParameters({ tessedit_pageseg_mode: '6', preserve_interword_spaces: '1' });   // each strip is one column: read it line by line
      jobs.forEach(function (job, ji) {
        chain = chain.then(function () { if (sudoku) return null; label = '\u0c2a\u0c47\u0c1c\u0c40 ' + (job.page + 1) + ' (' + (ji + 1) + '/' + jobs.length + '): '; scanMsg(label + '\u0c1a\u0c26\u0c41\u0c35\u0c41\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c02\u2026'); return scanCrop(job, 1500, job.page); })
          .then(function (cv) {
            if (!cv) return null;
            var pre = window.__epvDebug ? cv.toDataURL('image/png') : '';
            cv = blankBanner(cv);
            var blocks = splitLayout(cv), c2 = Promise.resolve();
            if (window.__epvDebug) (SC.dbg = SC.dbg || []).push({ page: job.page, img: cv.toDataURL('image/png'), pre: pre, blocks: blocks });
            blocks.forEach(function (bl) {
              var parts = [];
              bl.rects.forEach(function (q) { c2 = c2.then(function () { if (sudoku) return null; return w.recognize(subCanvas(cv, q[0], q[1], q[2], q[3])); }).then(function (res) { if (!res) return; var t = String(res.data.text || ''); parts.push(t); if (HEAD_STOP.test(t)) sudoku = true; }); });
              c2 = c2.then(function () { if (parts.length) texts.push({ d: job.d || null, parts: parts, page: job.page }); });
            });
            return c2;
          });
      });
      return chain;
    }).then(function () {
      TPROG = null; U.busy = ''; SC.raw = texts;
      // each block: its heading (\u0c05\u0c21\u0c4d\u0c21\u0c02 / \u0c28\u0c3f\u0c32\u0c41\u0c35\u0c41, wherever the columns cut it) sets the direction. A part with no heading near it
      // ('?') is decided below by the grid's numbers: the reader often mangles a small heading (27.09.2026: \u0c05\u0c21\u0c4d\u0c21\u0c02 read as \u0c17\u0c02).
      var segs = [], dir = null, stop = false;
      texts.forEach(function (bl) {
        if (stop) return;
        var heads = []; bl.parts.forEach(function (t) { t.split('\n').forEach(function (l) { var h = headingOf(l); if (h) heads.push(h.d); }); });
        var hasA = heads.indexOf('A') >= 0, hasD = heads.indexOf('D') >= 0;
        var start = bl.d || (hasA && !hasD ? 'A' : hasD && !hasA ? 'D' : hasA && hasD ? (dir || '?') : '?');
        bl.parts.forEach(function (t) {
          if (stop) return;
          var cut = t.search(HEAD_STOP); if (cut >= 0) { t = t.slice(0, Math.max(0, t.lastIndexOf('\n', cut))); stop = true; }
          var r = parseClueItems(t, start), cur = null;
          r.items.forEach(function (it) { if (!cur || cur.d !== it.d) { cur = { d: it.d, items: [] }; segs.push(cur); } cur.items.push(it); });
          if (hasA && hasD && r.dir) start = r.dir;
          if (r.dir && r.dir !== '?') dir = r.dir;
        });
        if (start !== '?') dir = start;
      });
      // before the first heading only a real list counts (three numbered clues), not the page's title or links
      var firstHard = -1; segs.forEach(function (sg, i) { if (firstHard < 0 && sg.d !== '?') firstHard = i; });
      segs = segs.filter(function (sg, i) { return firstHard < 0 || i >= firstHard || sg.items.filter(function (it) { return it.n != null; }).length >= 3; });
      var exp = SC.vals ? gridStarts() : null, note = [], all = { A: [], D: [] };
      function assign(dirs) { var a = { A: [], D: [] }; segs.forEach(function (sg, i) { var d = dirs[i]; if (a[d]) sg.items.forEach(function (it) { a[d].push(Object.assign({}, it, { d: d })); }); }); return a; }
      function fit(a) { return (exp ? ['A', 'D'].reduce(function (t, d) { return t + (a[d].length && exp[d].length ? alignItems(a[d], exp[d]).score : -0.6 * a[d].length); }, 0) : 0); }
      // candidates: unknown parts continue the list before them (the old way), or the parts split once into two lists
      var cands = [], inherit = [], last = null;
      segs.forEach(function (sg) { if (sg.d !== '?') last = sg.d; inherit.push(sg.d !== '?' ? sg.d : (last || 'A')); });
      cands.push(inherit);
      if (exp) ['AD', 'DA'].forEach(function (ord) {
        for (var k = 0; k <= segs.length; k++) {
          var dirs = segs.map(function (sg, i) { return i < k ? ord[0] : ord[1]; });
          if (segs.every(function (sg, i) { return sg.d === '?' || sg.d === dirs[i]; })) cands.push(dirs);
        }
      });
      function choose() { var bestS = -Infinity; cands.forEach(function (dirs) { var a = assign(dirs), f = fit(a); if (f > bestS) { bestS = f; all = a; } }); }
      choose();
      var refit = exp ? fitGridToClues(all) : 0;
      if (refit) { exp = gridStarts(); choose(); }
      ['A', 'D'].forEach(function (d) {
        var got = all[d], out = numberItems(got, exp && exp[d]), have = out.filter(function (c) { return c.text; }).length;
        SC.ocr[d] = out.map(function (c) { return c.n + '. ' + c.text + (c.len ? ' (' + c.len + ')' : ''); }).join('\n');
        if (exp) note.push((d === 'A' ? '\u0c05\u0c21\u0c4d\u0c21\u0c02 ' : '\u0c28\u0c3f\u0c32\u0c41\u0c35\u0c41 ') + have + ' / ' + exp[d].length + (have === exp[d].length ? ' \u2713' : ' \u2014 ' + (exp[d].length - have) + ' \u0c16\u0c3e\u0c33\u0c40, \u0c38\u0c30\u0c3f\u0c1a\u0c42\u0c21\u0c02\u0c21\u0c3f'));
      });
      // the numbers printed in the paper's list against the grid's: if most disagree, the grid box or its black squares are off
      if (exp) { var agree = 0, numbered = 0; ['A', 'D'].forEach(function (d) { if (!all[d].length || !exp[d].length) return; var al = alignItems(all[d], exp[d]); al.got.forEach(function (it, j) { if (it && /^\d{1,2}$/.test(it.raw || '')) { numbered++; if (numSim(it.raw, exp[d][j].n) >= 1.5) agree++; } }); });
        if (numbered >= 8 && agree < 0.6 * numbered) note.push('\u0c1c\u0c3e\u0c17\u0c4d\u0c30\u0c24\u0c4d\u0c24: \u0c2a\u0c47\u0c2a\u0c30\u0c4d\u200c\u0c32\u0c4b\u0c28\u0c3f \u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32 \u0c38\u0c02\u0c16\u0c4d\u0c2f\u0c32\u0c4d\u0c32\u0c4b ' + numbered + ' \u0c32\u0c4b ' + agree + ' \u0c2e\u0c3e\u0c24\u0c4d\u0c30\u0c2e\u0c47 \u0c17\u0c21\u0c3f \u0c38\u0c02\u0c16\u0c4d\u0c2f\u0c32\u0c24\u0c4b \u0c38\u0c30\u0c3f\u0c2a\u0c4b\u0c2f\u0c3e\u0c2f\u0c3f \u2014 \u0c17\u0c21\u0c3f \u0c2a\u0c46\u0c1f\u0c4d\u0c1f\u0c46 (\u0c0e\u0c30\u0c41\u0c2a\u0c41 \u0c17\u0c40\u0c24\u0c32\u0c41) \u0c17\u0c21\u0c3f \u0c05\u0c02\u0c1a\u0c41\u0c32 \u0c2e\u0c40\u0c26 \u0c38\u0c30\u0c3f\u0c17\u0c4d\u0c17\u0c3e \u0c09\u0c02\u0c26\u0c4b, \u0c35\u0c30\u0c41\u0c38\u0c32\u0c41 / \u0c28\u0c3f\u0c32\u0c41\u0c35\u0c41 \u0c35\u0c30\u0c41\u0c38\u0c32 \u0c38\u0c02\u0c16\u0c4d\u0c2f, \u0c28\u0c32\u0c41\u0c2a\u0c41 \u0c17\u0c21\u0c41\u0c32\u0c41 \u0c38\u0c30\u0c48\u0c28\u0c35\u0c4b \u0c1a\u0c42\u0c38\u0c3f \u201c\u0c2e\u0c33\u0c4d\u0c33\u0c40 \u0c1a\u0c26\u0c35\u0c02\u0c21\u0c3f\u201d \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c02\u0c21\u0c3f'); }
      if (refit) note.push(refit + ' \u0c17\u0c21\u0c41\u0c32 \u0c28\u0c32\u0c41\u0c2a\u0c41 / \u0c24\u0c46\u0c32\u0c41\u0c2a\u0c41 \u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3e\u0c02 \u2014 \u0c2a\u0c47\u0c2a\u0c30\u0c4d\u200c\u0c32\u0c4b\u0c28\u0c3f \u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32 \u0c38\u0c02\u0c16\u0c4d\u0c2f\u0c32\u0c41, \u0c2a\u0c4a\u0c21\u0c35\u0c41\u0c32\u0c15\u0c41 \u0c17\u0c21\u0c3f \u0c38\u0c30\u0c3f\u0c2a\u0c4b\u0c2f\u0c47\u0c32\u0c3e (\u0c0e\u0c30\u0c41\u0c2a\u0c41 \u0c17\u0c40\u0c24\u0c24\u0c4b \u0c1a\u0c42\u0c2a\u0c3e\u0c02; \u0c17\u0c21\u0c3f \u0c2c\u0c4a\u0c2e\u0c4d\u0c2e\u0c24\u0c4b \u0c2a\u0c4b\u0c32\u0c4d\u0c1a\u0c02\u0c21\u0c3f)');
      U.status = { kind: 'ok', text: '\u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32\u0c41 \u0c1a\u0c26\u0c3f\u0c35\u0c3e\u0c02: ' + (note.join(', ') || (parseClueText(SC.ocr.A, 'A').length + parseClueText(SC.ocr.D, 'D').length) + '') + '. \u0c15\u0c3f\u0c02\u0c26\u0c3f \u0c2a\u0c46\u0c1f\u0c4d\u0c1f\u0c46\u0c32\u0c4d\u0c32\u0c4b \u0c2a\u0c4d\u0c30\u0c24\u0c3f \u0c06\u0c27\u0c3e\u0c30\u0c02 \u0c2a\u0c47\u0c2a\u0c30\u0c4d\u200c\u0c24\u0c4b \u0c2a\u0c4b\u0c32\u0c4d\u0c1a\u0c3f, \u0c24\u0c2a\u0c4d\u0c2a\u0c41\u0c32\u0c41 \u0c38\u0c30\u0c3f\u0c26\u0c3f\u0c26\u0c4d\u0c26\u0c3f \u201c\u0c38\u0c30\u0c3f\u0c1a\u0c42\u0c36\u0c3e\u0c28\u0c41 \u2014 \u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d \u0c24\u0c2f\u0c3e\u0c30\u0c41 \u0c1a\u0c47\u0c2f\u0c02\u0c21\u0c3f\u201d \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c02\u0c21\u0c3f.' }; render();
    }, function (e) { TPROG = null; U.busy = ''; U.status = { kind: 'err', text: '\u0c1a\u0c26\u0c35\u0c21\u0c02 \u0c15\u0c41\u0c26\u0c30\u0c32\u0c47\u0c26\u0c41 (' + ((e && e.message) || e || 'error') + '). \u0c07\u0c02\u0c1f\u0c30\u0c4d\u0c28\u0c46\u0c1f\u0c4d \u0c1a\u0c42\u0c38\u0c3f \u0c2e\u0c33\u0c4d\u0c33\u0c40 \u0c2a\u0c4d\u0c30\u0c2f\u0c24\u0c4d\u0c28\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f.' }; render(); });
  }
  function scanMakeDraft() {
    var d = newDraft(SC.R, SC.C);
    for (var r = 0; r < SC.R; r++) for (var c = 0; c < SC.C; c++) d.black[r][c] = scanBlack(r, c);
    d.date = String(SC.date || '').trim(); d.src = 'upload'; d.paper = paperOf(SC.paper).id; d.title = paperOf(d.paper).title;
    d.clues = parseClueText(SC.ocr.A, 'A').concat(parseClueText(SC.ocr.D, 'D')).map(function (c) { return { d: c.d, n: c.n, len: c.len, text: c.text }; });
    stashDraft(); D = d; draftAutoNumber(); U.er = 0; U.ec = 0; U.emode = 'ans'; U.edir = 'A';
    U.status = { kind: 'ok', text: '\u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d \u0c38\u0c3f\u0c26\u0c4d\u0c27\u0c02: ' + d.clues.length + ' \u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32\u0c41. \u0c38\u0c02\u0c16\u0c4d\u0c2f\u0c32\u0c41, \u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32\u0c41 \u0c1a\u0c3f\u0c24\u0c4d\u0c30\u0c02\u0c24\u0c4b \u0c2a\u0c4b\u0c32\u0c4d\u0c1a\u0c3f \u0c38\u0c30\u0c3f\u0c1a\u0c42\u0c21\u0c02\u0c21\u0c3f; \u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32\u0c41 \u201c\u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32\u0c41\u201d \u0c32\u0c4b \u0c1f\u0c48\u0c2a\u0c4d \u0c1a\u0c47\u0c2f\u0c02\u0c21\u0c3f \u0c32\u0c47\u0c26\u0c3e \u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32 \u0c1a\u0c3f\u0c24\u0c4d\u0c30\u0c02 \u0c28\u0c41\u0c02\u0c1a\u0c3f \u0c28\u0c3f\u0c02\u0c2a\u0c02\u0c21\u0c3f.' };
    saveDraft();
    if (U.pendingAns) { var pa = U.pendingAns; U.pendingAns = null; scanOpen('answers', pa); return; }
    location.hash = '#edit';
  }
  function scanAnswers() {
    if (!D || !SC.quad || U.busy) return;
    var xs = ['tl', 'tr', 'bl', 'br'].map(function (k) { return SC.quad[k].x; }), ys = ['tl', 'tr', 'bl', 'br'].map(function (k) { return SC.quad[k].y; });
    var bb = { x: Math.min.apply(null, xs), y: Math.min.apply(null, ys) }; bb.w = Math.max.apply(null, xs) - bb.x; bb.h = Math.max.apply(null, ys) - bb.y;
    var cells = []; for (var r = 0; r < D.R; r++) for (var c = 0; c < D.C; c++) if (!D.black[r][c]) cells.push([r, c]);
    U.busy = 'ocr'; render(); scanMsg('\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41 \u0c1a\u0c26\u0c3f\u0c35\u0c47 \u0c09\u0c2a\u0c15\u0c30\u0c23\u0c02 \u0c24\u0c46\u0c38\u0c4d\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c02\u2026');
    TPROG = function (m) { var t = ocrLabel(m); if (t && /\u0c09\u0c2a\u0c15\u0c30\u0c23\u0c02/.test(t)) scanMsg(t); };
    var big, shown = null, f, got = 0, pg = { grid: D.ans.map(function (row) { return row.map(function () { return ''; }); }), bad: {}, low: {} };
    Promise.all([tessWorker(), scanCrop(bb, 2400, SC.gridPage)]).then(function (x) {
      var w = x[0]; big = x[1]; f = big.width / bb.w;
      // Each letter is read up to five ways and they vote: the square alone (three cuts) and, because Tesseract reads real words far
      // better than lone letters, the whole across word and the whole down word laid out as a line of text (twice: as printed, and in
      // plain black and white). Tested on two Eenadu answer grids: 73 \u2192 92 of 99 and 70 \u2192 89 of 101 right; most of the rest are
      // marked yellow (the readings did not agree).
      function box(r, c) { var a = qpt(c / D.C, r / D.R), b = qpt((c + 1) / D.C, (r + 1) / D.R); return { x: (a.x - bb.x) * f, y: (a.y - bb.y) * f, w: (b.x - a.x) * f, h: (b.y - a.y) * f }; }
      function piece(r, c, ix, it, ib, H) {   // the square's letter, red clue number washed out, scaled to height H
        var g = box(r, c), sx = g.x + g.w * ix, sy = g.y + g.h * it, sW = g.w * (1 - 2 * ix), sH = g.h * (1 - it - ib), W = Math.max(8, Math.round(H * sW / sH));
        var cv = document.createElement('canvas'); cv.width = W; cv.height = H; var cx = cv.getContext('2d'); cx.imageSmoothingQuality = 'high'; cx.drawImage(big, sx, sy, sW, sH, 0, 0, W, H);
        var id = cx.getImageData(0, 0, W, H), q = id.data; for (var o = 0; o < q.length; o += 4) if (q[o] > 140 && q[o] - q[o + 1] > 60 && q[o] - q[o + 2] > 40) { q[o] = q[o + 1] = q[o + 2] = 255; }
        cx.putImageData(id, 0, 0); return cv;
      }
      function framed(parts, H, bw) {   // pieces side by side on white, like a line of print
        var W = parts.reduce(function (t, p) { return t + p.width; }, 0) + 60, cv = document.createElement('canvas'); cv.width = W; cv.height = H + 60;
        var cx = cv.getContext('2d'); cx.fillStyle = '#fff'; cx.fillRect(0, 0, W, H + 60); var at = 30; parts.forEach(function (p) { cx.drawImage(p, at, 30); at += p.width; });
        return bw ? otsuBW(cv) : cv;
      }
      function otsuBW(cv) {
        var cx = cv.getContext('2d'), id = cx.getImageData(0, 0, cv.width, cv.height), q = id.data, h = new Array(256).fill(0), n = 0, sum = 0, o, t;
        for (o = 0; o < q.length; o += 4) { var l = Math.round((q[o] * 3 + q[o + 1] * 6 + q[o + 2]) / 10); q[o] = l; h[l]++; n++; }
        for (t = 0; t < 256; t++) sum += t * h[t];
        var sB = 0, wB = 0, best = 0, th = 128; for (t = 0; t < 256; t++) { wB += h[t]; if (!wB) continue; var wF = n - wB; if (!wF) break; sB += t * h[t]; var mB = sB / wB, mF = (sum - sB) / wF, v = wB * wF * (mB - mF) * (mB - mF); if (v > best) { best = v; th = t; } }
        for (o = 0; o < q.length; o += 4) { var bw = q[o] < th ? 0 : 255; q[o] = q[o + 1] = q[o + 2] = bw; }
        cx.putImageData(id, 0, 0); return cv;
      }
      function aks(text) { return (String(text || '').replace(/[^\u0c00-\u0c7f]/g, '').match(AKSHARA) || []).map(function (a) { return a.normalize('NFC'); }); }
      // Clue numbers printed in dark ink (Sakshi and most papers; Eenadu's red ones are washed out in piece()) are taken out of
      // each numbered square before reading: the leftmost small marks along its top, as many digits as the number has. On Sakshi's
      // answers grid nearly every misread letter was in a numbered square.
      (function washNumbers() {
        shown = document.createElement('canvas'); shown.width = big.width; shown.height = big.height; shown.getContext('2d').drawImage(big, 0, 0);   // as printed, for the editor
        var cx = big.getContext('2d'), nums = D.nums || {}, anyNums = Object.keys(nums).length > 0;
        cells.forEach(function (rc) {
          var num = nums[key(rc[0], rc[1])]; if (anyNums && !num) return;
          var digits = num ? String(num).length : 2;
          var g = box(rc[0], rc[1]), x0 = Math.round(g.x + g.w * 0.04), y0 = Math.round(g.y + g.h * 0.04), w = Math.round(g.w * 0.92), h = Math.round(g.h * 0.92);
          if (w < 12 || h < 12 || x0 < 0 || y0 < 0 || x0 + w > big.width || y0 + h > big.height) return;
          var id = cx.getImageData(x0, y0, w, h), q = id.data, n = w * h, dark = new Uint8Array(n), lab = new Int32Array(n), stack = new Int32Array(n), i, comps = [];
          for (i = 0; i < n; i++) { var o = i * 4; if ((q[o] * 299 + q[o + 1] * 587 + q[o + 2] * 114) / 1000 < 150) dark[i] = 1; }
          // the square's own border lines (a number often touches them) are left out of the marks
          var xx0, yy0, cnt;
          var rowL = [], colL = [];
          for (yy0 = 0; yy0 < h; yy0++) { cnt = 0; for (xx0 = 0; xx0 < w; xx0++) cnt += dark[yy0 * w + xx0]; rowL.push(cnt > 0.45 * w); }
          for (xx0 = 0; xx0 < w; xx0++) { cnt = 0; for (yy0 = 0; yy0 < h; yy0++) cnt += dark[yy0 * w + xx0]; colL.push(cnt > 0.45 * h); }
          for (yy0 = 0; yy0 < h; yy0++) if (rowL[yy0] || rowL[yy0 - 1] || rowL[yy0 + 1]) for (xx0 = 0; xx0 < w; xx0++) dark[yy0 * w + xx0] = 0;
          for (xx0 = 0; xx0 < w; xx0++) if (colL[xx0] || colL[xx0 - 1] || colL[xx0 + 1]) for (yy0 = 0; yy0 < h; yy0++) dark[yy0 * w + xx0] = 0;
          for (i = 0; i < n; i++) {
            if (!dark[i] || lab[i]) continue;
            var sp = 0, bx0 = w, by0 = h, bx1 = 0, by1 = 0, idn = comps.length + 1; stack[sp++] = i; lab[i] = idn;
            while (sp) {
              var k = stack[--sp], ky = (k / w) | 0, kx = k - ky * w;
              if (kx < bx0) bx0 = kx; if (kx > bx1) bx1 = kx; if (ky < by0) by0 = ky; if (ky > by1) by1 = ky;
              for (var dy = -1; dy <= 1; dy++) for (var dx = -1; dx <= 1; dx++) { var nx = kx + dx, ny = ky + dy; if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue; var nk = ny * w + nx; if (dark[nk] && !lab[nk]) { lab[nk] = idn; stack[sp++] = nk; } }
            }
            comps.push({ x0: bx0, y0: by0, x1: bx1, y1: by1 });
          }
          // marks wholly along the top: small, ending above the middle
          var top = comps.filter(function (cp) { return cp.y1 < 0.45 * h && cp.y1 - cp.y0 < 0.32 * h && cp.x1 - cp.x0 < 0.3 * w && (cp.x1 - cp.x0 + 1) * (cp.y1 - cp.y0 + 1) >= 6; }).sort(function (a2, b2) { return a2.x0 - b2.x0; });
          var first = top[0]; if (!first || first.x0 > 0.35 * w) return;
          var dh = first.y1 - first.y0 + 1, limit = first.x0 + digits * 0.85 * dh + 0.04 * w, gone = 0;
          top.forEach(function (cp) {
            if (cp.x0 > limit || cp.y1 - cp.y0 + 1 > 1.35 * dh) return;
            for (var yy = Math.max(0, cp.y0 - 2); yy <= Math.min(h - 1, cp.y1 + 2); yy++) for (var xx = Math.max(0, cp.x0 - 2); xx <= Math.min(w - 1, cp.x1 + 2); xx++) { var oo = (yy * w + xx) * 4; q[oo] = q[oo + 1] = q[oo + 2] = 255; }
            gone++;
          });
          if (gone) cx.putImageData(id, x0, y0);
        });
      })();
      var votes = {}, runs = [];
      function vote(k, a, wt) { if (!a) return; var v = votes[k] = votes[k] || {}; v[a] = (v[a] || 0) + wt; }
      for (var r0 = 0; r0 < D.R; r0++) for (var c0 = 0; c0 < D.C; c0++) {
        if (D.black[r0][c0]) continue;
        if ((c0 === 0 || D.black[r0][c0 - 1]) && c0 + 1 < D.C && !D.black[r0][c0 + 1]) { var ra = []; for (var x1 = c0; x1 < D.C && !D.black[r0][x1]; x1++) ra.push([r0, x1]); runs.push(ra); }
        if ((r0 === 0 || D.black[r0 - 1][c0]) && r0 + 1 < D.R && !D.black[r0 + 1][c0]) { var rd = []; for (var y1 = r0; y1 < D.R && !D.black[y1][c0]; y1++) rd.push([y1, c0]); runs.push(rd); }
      }
      var chain = w.setParameters({ tessedit_pageseg_mode: '7' }), done = 0, total = runs.length * 2 + cells.length;
      [[100, false], [80, true]].forEach(function (sv) {
        runs.forEach(function (ru) {
          chain = chain.then(function () {
            if (done++ % 8 === 0) scanMsg('\u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32\u0c41 \u0c1a\u0c26\u0c41\u0c35\u0c41\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c02 (\u0c2a\u0c26\u0c3e\u0c32\u0c41\u0c17\u0c3e)\u2026 ' + Math.round(done / total * 100) + '%');
            return w.recognize(framed(ru.map(function (rc) { return piece(rc[0], rc[1], 0.08, 0.10, 0.04, sv[0]); }), sv[0], sv[1])).then(function (res) {
              var got2 = aks(res.data.text); if (got2.length !== ru.length) return;   // the word came out longer or shorter: no vote
              ru.forEach(function (rc, j) { vote(key(rc[0], rc[1]), got2[j], 1); });
            });
          });
        });
      });
      chain = chain.then(function () { return w.setParameters({ tessedit_pageseg_mode: '8' }); });
      cells.forEach(function (rc) {
        chain = chain.then(function () {
          var r = rc[0], c = rc[1], kk = key(r, c), seen = [];
          if (done++ % 8 === 0) scanMsg('\u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32\u0c41 \u0c1a\u0c26\u0c41\u0c35\u0c41\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c02 (\u0c17\u0c21\u0c3f \u0c17\u0c21\u0c3f)\u2026 ' + Math.round(done / total * 100) + '%');
          var cuts = [[0.08, 0.18, 0.06, false], [0.08, 0.10, 0.04, false], [0.08, 0.10, 0.04, true]], cc = Promise.resolve();
          cuts.forEach(function (cu) {
            cc = cc.then(function () { return w.recognize(framed([piece(r, c, cu[0], cu[1], cu[2], 120)], 120, cu[3])); }).then(function (res) {
              var t = String(res.data.text || '').replace(/[^\u0c00-\u0c7f]/g, '').replace(/^([\u0c15-\u0c39])\u0c4d$/, '$1'), a1 = (t.match(AKSHARA) || [''])[0].normalize('NFC');
              seen.push(a1 + ':' + Math.round(res.data.confidence || 0)); vote(kk, a1, 0.5 + (res.data.confidence || 0) / 100);
            });
          });
          return cc.then(function () {
            var v = votes[kk] || {}, ks = Object.keys(v).sort(function (a, b) { return v[b] - v[a]; }), tot = ks.reduce(function (t2, a) { return t2 + v[a]; }, 0), best = ks[0] || '';
            if (window.__epvDebug) (SC.conf = SC.conf || {})[kk] = { votes: v, cells: seen };
            if (best) { pg.grid[r][c] = best; got++; }
            if (!best || v[best] < 0.7 * tot || v[best] < 2.4) pg.low[kk] = 1;   // the readings did not agree well enough: yellow
          });
        });
      });
      if (window.__epvDebug) SC.dbgBig = big.toDataURL('image/png');
      return chain;
    }).then(function () {
      var cmpP = mergeAnswers(D, pg, 'phone');
      TPROG = null; U.busy = ''; saveDraft(); U.emode = 'sheet'; U.srcOpen = true;
      try { (shown || big).toBlob(function (b) { if (b) { if (U.ansGrid) URL.revokeObjectURL(U.ansGrid); U.ansGrid = URL.createObjectURL(b); if (route() === 'edit') render(); } }, 'image/jpeg', 0.85); } catch (e) {}
      try { SC.cv.toBlob(function (b) { if (b) U.srcUrls = U.srcUrls.slice(0, 1).concat([URL.createObjectURL(b)]); if (route() === 'edit') render(); }, 'image/jpeg', 0.85); } catch (e) {}
      U.status = { kind: 'ok', text: cmpP ? 'Gemini, \u0c2b\u0c4b\u0c28\u0c4d \u0c30\u0c40\u0c21\u0c30\u0c4d \u2014 \u0c30\u0c46\u0c02\u0c21\u0c42 \u0c1a\u0c26\u0c3f\u0c35\u0c3e\u0c2f\u0c3f: ' + cmpP.same + ' \u0c17\u0c21\u0c41\u0c32\u0c4d\u0c32\u0c4b \u0c12\u0c15\u0c47 \u0c05\u0c15\u0c4d\u0c37\u0c30\u0c02 (\u0c38\u0c30\u0c48\u0c28\u0c35\u0c3f \u0c05\u0c2f\u0c4d\u0c2f\u0c47 \u0c05\u0c35\u0c15\u0c3e\u0c36\u0c02 \u0c0e\u0c15\u0c4d\u0c15\u0c41\u0c35), ' + cmpP.diff + ' \u0c17\u0c21\u0c41\u0c32\u0c4d\u0c32\u0c4b \u0c24\u0c47\u0c21\u0c3e \u2014 \u0c2a\u0c38\u0c41\u0c2a\u0c41 \u0c17\u0c21\u0c41\u0c32\u0c28\u0c41 \u0c2a\u0c47\u0c2a\u0c30\u0c4d\u200c\u0c24\u0c4b \u0c1a\u0c42\u0c38\u0c3f \u0c38\u0c30\u0c3f\u0c1a\u0c47\u0c2f\u0c02\u0c21\u0c3f (Gemini \u0c05\u0c15\u0c4d\u0c37\u0c30\u0c02 \u0c09\u0c02\u0c1a\u0c3e\u0c02).' : cells.length + ' \u0c17\u0c21\u0c41\u0c32\u0c4d\u0c32\u0c4b ' + got + ' \u0c05\u0c15\u0c4d\u0c37\u0c30\u0c3e\u0c32\u0c41 \u0c1a\u0c26\u0c3f\u0c35\u0c3e\u0c02. \u0c2a\u0c4d\u0c30\u0c24\u0c3f \u0c17\u0c21\u0c3f\u0c28\u0c40 \u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32 \u0c1a\u0c3f\u0c24\u0c4d\u0c30\u0c02\u0c24\u0c4b \u0c2a\u0c4b\u0c32\u0c4d\u0c1a\u0c3f \u0c38\u0c30\u0c3f\u0c26\u0c3f\u0c26\u0c4d\u0c26\u0c02\u0c21\u0c3f (\u0c2a\u0c48 \u201c\u0c2e\u0c42\u0c32 \u0c1a\u0c3f\u0c24\u0c4d\u0c30\u0c02\u201d \u0c32\u0c4b \u0c2a\u0c47\u0c2a\u0c30\u0c4d \u0c09\u0c02\u0c26\u0c3f).' };
      location.hash = '#edit';
    }, function (e) { TPROG = null; U.busy = ''; U.status = { kind: 'err', text: '\u0c1a\u0c26\u0c35\u0c21\u0c02 \u0c15\u0c41\u0c26\u0c30\u0c32\u0c47\u0c26\u0c41 (' + ((e && e.message) || e || 'error') + ').' }; render(); });
  }
  function keepSourceImage(kind, blob) {
    var u = URL.createObjectURL(blob); U.srcOpen = true;
    if (kind === 'answers') U.srcUrls = U.srcUrls.slice(0, 1).concat([u]);
    else { U.srcUrls.forEach(function (x) { URL.revokeObjectURL(x); }); U.srcUrls = [u]; }
  }
  function isPdf(f) { return /pdf$/i.test(f.type) || /\.pdf$/i.test(f.name); }
  // PDFs: only the pages that matter (the grid page and its clue pages, or the page with last week's answers) and a close-up of the grid
  function smartImages(kind, files, max) {
    var list = Array.prototype.slice.call(files || []);
    if (!list.some(isPdf)) return prepareImages(files, max);
    var pages, hit, info;
    return loadPages(files).then(function (p) { pages = p; return analysePages(pages, function (i) { var el = document.querySelector('#view .status > span'); if (el) el.textContent = '\u0c2a\u0c47\u0c1c\u0c40\u0c32\u0c41 \u0c1a\u0c42\u0c38\u0c4d\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c02\u2026 ' + (i + 1) + ' / ' + pages.length; }); }).then(function (inf) {
      info = inf; hit = pickGridPage(info, kind);
      U.smartHit = hit ? { R: hit.grid.R, C: hit.grid.C, pat: hit.pat, filled: hit.filled, page: hit.i } : null;
      var pick = [];
      if (!hit) for (var i = 0; i < Math.min(3, pages.length); i++) pick.push(i);
      else if (kind === 'answers') pick = [hit.i];
      else for (var j = Math.max(0, hit.i - 1); j <= Math.min(pages.length - 1, hit.i + 2); j++) pick.push(j);
      var blobs = [], chain = Promise.resolve();
      pick.forEach(function (i) { chain = chain.then(function () { return renderPage(pages[i], 1800); }).then(function (r) {
        var cv = r.cv;
        if (hit) {   // keep the puzzle's column; the news and links beside it only cost upload time
          var k = cv.width / info[i].W, gx0 = (hit.grid.x0 / hit.W) * info[i].W, gx1 = (hit.grid.x1 / hit.W) * info[i].W, pad = 0.06 * info[i].W;
          var x0 = Math.max(0, (gx0 - pad) * k), x1 = Math.min(cv.width, (gx1 + pad) * k), c2 = document.createElement('canvas');
          c2.width = Math.round(x1 - x0); c2.height = cv.height; c2.getContext('2d').drawImage(cv, x0, 0, x1 - x0, cv.height, 0, 0, c2.width, c2.height); cv = c2;
        }
        return new Promise(function (res) { cv.toBlob(function (b) { if (b) blobs.push(b); res(); }, 'image/jpeg', 0.82); });
      }); });
      if (hit) chain = chain.then(function () { return renderPage(pages[hit.i], 2400); }).then(function (r) {
        var keepGrid = kind === 'answers';
        var k = r.cv.width / hit.W, g = hit.grid, pad = 12 * k, x = Math.max(0, g.x0 * k - pad), y = Math.max(0, g.y0 * k - pad), w = Math.min(r.cv.width - x, (g.x1 - g.x0) * k + 2 * pad), h = Math.min(r.cv.height - y, (g.y1 - g.y0) * k + 2 * pad), c = document.createElement('canvas');
        c.width = Math.round(w); c.height = Math.round(h); c.getContext('2d').drawImage(r.cv, x, y, w, h, 0, 0, c.width, c.height);
        return new Promise(function (res) { c.toBlob(function (b) { if (b) { blobs.push(b); if (keepGrid) { if (U.ansGrid) URL.revokeObjectURL(U.ansGrid); U.ansGrid = URL.createObjectURL(b); } } res(); }, 'image/jpeg', 0.9); });
      });
      return chain.then(function () { return blobs.slice(0, max); });
    });
  }
  function blobToB64(b) { return new Promise(function (res, rej) { var r = new FileReader(); r.onload = function () { res(String(r.result).split(',')[1] || ''); }; r.onerror = function () { rej(r.error); }; r.readAsDataURL(b); }); }
  // Website: the admin script sends the pictures to Google Gemini with the same instructions Claude gets in the studio
  function geminiRead(kind, files) {
    if (U.busy) return;
    var date = (document.getElementById('up-date') || {}).value || '';
    U.busy = 'ai'; U.aiStart = Date.now(); U.status = { kind: 'wait', text: '\u0c1a\u0c3f\u0c24\u0c4d\u0c30\u0c3e\u0c32\u0c41 \u0c38\u0c3f\u0c26\u0c4d\u0c27\u0c02 \u0c1a\u0c47\u0c38\u0c4d\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c02\u2026' }; render();
    clearInterval(U.aiTick);
    if (!IS_CLAUDE) U.aiTick = setInterval(function () {
      if (U.busy !== 'ai') { clearInterval(U.aiTick); return; }
      var el = document.getElementById('ai-progress'); if (el) el.textContent = Math.round((Date.now() - U.aiStart) / 1000) + ' \u0c38\u0c46\u0c15\u0c28\u0c4d\u0c32\u0c41';
    }, 1000);
    var blobs; U.smartHit = null;
    smartImages(kind, files, 5).then(function (bs) {
      blobs = bs; if (!blobs.length) throw { code: 'no_images' };
      var sh = U.smartHit;
      if (kind === 'answers' && D) { var fk = Array.prototype.map.call(files || [], function (f) { return f.name + ':' + f.size; }).join('|'); if (D.ansFile && D.ansFile !== fk) { D.ansBy = null; } D.ansFile = fk; }
      if (kind === 'answers' && D && sh && sh.filled && sh.R === D.R && sh.C === D.C) {   // wrong week? stop before asking Gemini
        var df = patDiff(sh.pat, D.R, D.C, D.black);
        if (df != null && df > Math.max(2, 0.03 * D.R * D.C)) throw { code: 'wrong_answers', error: wrongWeekText(df, files) };
      }
      keepSourceImage(kind, blobs[0]);
      return Promise.all(blobs.map(blobToB64));
    }).then(function (datas) {
      var prompt = PROMPT_PUZZLE;
      if (kind === 'answers') { var pz = draftToPuzzle(D, true); prompt = PROMPT_ANSWERS.replace(/ROWS/g, D.R).replace(/COLS/g, D.C).replace('PATTERN', pz.grid.join('\n')); }
      else if (date) prompt += '\nThe admin says this puzzle is dated ' + date + '.';
      U.ctl = new AbortController();
      U.status = { kind: 'wait', text: 'Gemini \u0c1a\u0c26\u0c41\u0c35\u0c41\u0c24\u0c4b\u0c02\u0c26\u0c3f\u2026 (' + blobs.length + ' \u0c1a\u0c3f\u0c24\u0c4d\u0c30\u0c3e\u0c32\u0c41). \u0c38\u0c3e\u0c27\u0c3e\u0c30\u0c23\u0c02\u0c17\u0c3e \u0c05\u0c30 \u0c28\u0c3f\u0c2e\u0c3f\u0c37\u0c02 \u0c28\u0c41\u0c02\u0c1a\u0c3f \u0c12\u0c15 \u0c28\u0c3f\u0c2e\u0c3f\u0c37\u0c02; 2 \u0c28\u0c3f\u0c2e\u0c3f\u0c37\u0c3e\u0c32\u0c41 \u0c26\u0c3e\u0c1f\u0c3f\u0c24\u0c47 \u0c06\u0c2a\u0c47\u0c38\u0c4d\u0c24\u0c3e\u0c02.' }; render();
      var imgs = datas.map(function (d, i) { return { mime: blobs[i].type || 'image/jpeg', data: d }; });
      // the admin script's own reading (slower: the pictures go through it), with the same time limit
      function viaScript(note) {
        U.status = { kind: 'wait', text: note }; render();
        var tm = timed(GEMINI_WAIT + 30000, U.ctl.signal);
        return svc('read', { prompt: prompt, images: imgs }, tm.signal).then(function (r) { tm.done(); return r; }, function (e) { tm.done(); throw tm.out ? { code: 'gemini_timeout' } : e; });
      }
      return svc('gemini-get', {}, U.ctl.signal).then(function (g) {
        return geminiDirect(g, prompt, imgs, U.ctl.signal).catch(function (e) {   // Google not reachable from this phone: let the admin script ask
          if (e && e.code === 'network') return viaScript('Gemini \u0c28\u0c47\u0c30\u0c41\u0c17\u0c3e \u0c05\u0c02\u0c26\u0c32\u0c47\u0c26\u0c41 \u2014 \u0c05\u0c21\u0c4d\u0c2e\u0c3f\u0c28\u0c4d \u0c38\u0c30\u0c4d\u0c35\u0c40\u0c38\u0c4d \u0c26\u0c4d\u0c35\u0c3e\u0c30\u0c3e \u0c2a\u0c02\u0c2a\u0c41\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c02\u2026');
          throw e;
        });
      }, function (e) {
        if (e && (e.code === 'bad_request' || e.code === 'svc_html')) return viaScript('\u0c05\u0c21\u0c4d\u0c2e\u0c3f\u0c28\u0c4d \u0c38\u0c4d\u0c15\u0c4d\u0c30\u0c3f\u0c2a\u0c4d\u0c1f\u0c4d \u0c2a\u0c3e\u0c24\u0c26\u0c3f \u2014 \u0c1a\u0c3f\u0c24\u0c4d\u0c30\u0c3e\u0c32\u0c41 \u0c26\u0c3e\u0c28\u0c3f \u0c26\u0c4d\u0c35\u0c3e\u0c30\u0c3e \u0c35\u0c46\u0c33\u0c4d\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c2f\u0c3f, \u0c06\u0c32\u0c38\u0c4d\u0c2f\u0c02 \u0c05\u0c35\u0c41\u0c24\u0c41\u0c02\u0c26\u0c3f. \u0c15\u0c4a\u0c24\u0c4d\u0c24 Code.gs \u0c28\u0c41 \u201cNew version\u201d \u0c17\u0c3e \u0c21\u0c3f\u0c2a\u0c4d\u0c32\u0c3e\u0c2f\u0c4d \u0c1a\u0c47\u0c38\u0c4d\u0c24\u0c47 \u0c35\u0c47\u0c17\u0c02\u0c17\u0c3e \u0c09\u0c02\u0c1f\u0c41\u0c02\u0c26\u0c3f.');   // older admin script
        throw e;
      });
    }).then(function (r) { U.busy = ''; U.ctl = null; aiDone(kind, r.json, date, 'Gemini (' + (r.model || '') + ')'); }, function (e) {
      U.busy = ''; U.ctl = null; U.status = { kind: e && e.code === 'cancelled' ? 'wait' : 'err', text: svcErr(e) }; render();
    });
  }
  function pendingAnswers() { var el = document.getElementById('up-ans'); U.pendingAns = el && el.files && el.files.length ? Array.prototype.slice.call(el.files) : null; }
  function readPendingAnswers(reader) {
    var f = U.pendingAns; U.pendingAns = null; if (!f || !D) return;
    var note = U.status ? U.status.text + ' ' : '';
    setTimeout(function () { U.busy = ''; reader('answers', f); if (U.status && U.status.kind === 'wait') U.status.text = note + '\u0c07\u0c2a\u0c4d\u0c2a\u0c41\u0c21\u0c41 \u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32 \u0c1a\u0c3f\u0c24\u0c4d\u0c30\u0c02 \u0c1a\u0c26\u0c41\u0c35\u0c41\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c02\u2026'; render(); }, 50);
  }
  // a request that gives up after ms (or when the admin presses \u0c06\u0c2a\u0c02\u0c21\u0c3f)
  function timed(ms, outer) {
    var ac = new AbortController(), t = { signal: ac.signal, out: false };
    t.timer = setTimeout(function () { t.out = true; ac.abort(); }, ms);
    if (outer) { if (outer.aborted) ac.abort(); else outer.addEventListener('abort', function () { ac.abort(); }); }
    t.done = function () { clearTimeout(t.timer); };
    return t;
  }
  var GEMINI_WAIT = 120000;
  function geminiDirect(g, prompt, imgs, signal) {
    if (!g || !g.key) return Promise.reject({ code: 'no_gemini' });
    var parts = [{ text: prompt }].concat(imgs.map(function (im) { return { inline_data: { mime_type: im.mime, data: im.data } }; }));
    var noThink = false;
    function bodyFor(m) {
      var gc = { temperature: 0.1, responseMimeType: 'application/json' };
      if (!noThink && /2\.5-flash/.test(m)) gc.thinkingConfig = { thinkingBudget: 0 };   // reading a page needs no long thinking; much faster
      return JSON.stringify({ contents: [{ role: 'user', parts: parts }], generationConfig: gc });
    }
    var models = (g.models && g.models.length ? g.models : ['gemini-flash-latest', 'gemini-2.5-flash']).slice(0, 3), i = 0, last = '';
    function next() {
      if (i >= models.length) return Promise.reject({ code: /^429/.test(last) ? 'rate_limited' : 'gemini', error: 'Gemini \u0c1a\u0c26\u0c35\u0c32\u0c47\u0c15\u0c2a\u0c4b\u0c2f\u0c3f\u0c02\u0c26\u0c3f: ' + last });
      var m = models[i++], tm = timed(GEMINI_WAIT, signal);
      return fetch('https://generativelanguage.googleapis.com/v1beta/models/' + m + ':generateContent', { method: 'POST', headers: { 'Content-Type': 'application/json', 'x-goog-api-key': g.key }, body: bodyFor(m), signal: tm.signal })
        .then(function (r) { return r.text().then(function (t) { tm.done(); return { code: r.status, t: t }; }); }, function (e) { tm.done(); throw { code: tm.out ? 'gemini_timeout' : e && e.name === 'AbortError' ? 'cancelled' : 'network' }; })
        .then(function (x) {
          if (x.code === 200) {
            var j = JSON.parse(x.t), c = j.candidates && j.candidates[0], txt = '';
            ((c && c.content && c.content.parts) || []).forEach(function (pp) { if (pp.text && !pp.thought) txt += pp.text; });
            txt = txt.replace(/^```(?:json)?\s*|\s*```\s*$/g, '').trim();
            try { return { ok: true, model: m, json: JSON.parse(txt) }; } catch (e) { last = 'invalid_json'; return next(); }
          }
          try { last = x.code + ' ' + JSON.parse(x.t).error.message; } catch (e) { last = String(x.code); }
          if (x.code === 400 && /thinking/i.test(last) && !noThink && /2\.5-flash/.test(m)) { noThink = true; i--; return next(); }   // this model wants its thinking: ask again without the setting
          if (x.code === 400 || x.code === 403) return Promise.reject({ code: 'gemini', error: 'Gemini \u0c1a\u0c26\u0c35\u0c32\u0c47\u0c15\u0c2a\u0c4b\u0c2f\u0c3f\u0c02\u0c26\u0c3f: ' + last });
          return next();
        });
    }
    return next();
  }
  // the PDF's own empty puzzle grid (found by the app) wins over what the reader said about blocked squares
  function gridFromPaper(d) {
    var sh = U.smartHit; if (!sh || sh.filled || !sh.pat) return '';
    if (sh.R !== d.R || sh.C !== d.C) {
      var nd = newDraft(sh.R, sh.C); nd.title = d.title; nd.date = d.date; nd.paper = d.paper; nd.clues = d.clues; nd.src = d.src; nd.uid = d.uid;
      for (var r0 = 0; r0 < sh.R; r0++) for (var c0 = 0; c0 < sh.C; c0++) nd.black[r0][c0] = !!sh.pat[r0 * sh.C + c0];
      Object.keys(nd).forEach(function (k) { d[k] = nd[k]; }); d.nums = {}; var p0 = draftToPuzzle(d, true); autoNumber(p0); d.nums = p0.nums;
      return ' (\u0c17\u0c21\u0c3f \u0c2a\u0c30\u0c3f\u0c2e\u0c3e\u0c23\u0c02 \u0c2a\u0c47\u0c2a\u0c30\u0c4d \u0c2a\u0c4d\u0c30\u0c15\u0c3e\u0c30\u0c02 ' + sh.R + '\u00d7' + sh.C + ' \u0c17\u0c3e \u0c38\u0c30\u0c3f\u0c1a\u0c47\u0c36\u0c3e\u0c02.)';
    }
    var n = patDiff(sh.pat, d.R, d.C, d.black); if (!n) return '';
    for (var r = 0; r < d.R; r++) for (var c = 0; c < d.C; c++) { d.black[r][c] = !!sh.pat[r * d.C + c]; if (d.black[r][c]) d.ans[r][c] = ''; }
    var p = draftToPuzzle(d, true); autoNumber(p); d.nums = p.nums;
    return ' (Gemini \u0c1a\u0c46\u0c2a\u0c4d\u0c2a\u0c3f\u0c28 \u0c17\u0c21\u0c3f\u0c32\u0c4b ' + n + ' \u0c28\u0c32\u0c41\u0c2a\u0c41 \u0c17\u0c21\u0c41\u0c32\u0c41 \u0c2a\u0c47\u0c2a\u0c30\u0c4d\u200c\u0c24\u0c4b \u0c38\u0c30\u0c3f\u0c2a\u0c4b\u0c32\u0c32\u0c47\u0c26\u0c41 \u2014 \u0c2a\u0c47\u0c2a\u0c30\u0c4d\u200c\u0c32\u0c4b\u0c28\u0c3f \u0c17\u0c21\u0c3f \u0c2a\u0c4d\u0c30\u0c15\u0c3e\u0c30\u0c02 \u0c38\u0c30\u0c3f\u0c1a\u0c47\u0c38\u0c3f, \u0c38\u0c02\u0c16\u0c4d\u0c2f\u0c32\u0c41 \u0c2e\u0c33\u0c4d\u0c33\u0c40 \u0c35\u0c47\u0c36\u0c3e\u0c02.)';
  }
  function aiDone(kind, j, date, who) {
    if (kind === 'answers') {
      if (!j || !Array.isArray(j.answers)) { U.status = { kind: 'err', text: '\u0c1a\u0c26\u0c3f\u0c35\u0c3f\u0c28 \u0c38\u0c2e\u0c3e\u0c1a\u0c3e\u0c30\u0c02 \u0c38\u0c30\u0c3f\u0c17\u0c4d\u0c17\u0c3e \u0c30\u0c3e\u0c32\u0c47\u0c26\u0c41. \u0c2e\u0c33\u0c4d\u0c33\u0c40 \u0c2a\u0c4d\u0c30\u0c2f\u0c24\u0c4d\u0c28\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f.' }; render(); return; }
      var cmpG = mergeAnswers(D, gridFromRows(D, j.answers), 'gemini'), nBad = Object.keys(D.low || {}).length; saveDraft();
      U.status = { kind: 'ok', text: cmpG ? who + ', \u0c2b\u0c4b\u0c28\u0c4d \u0c30\u0c40\u0c21\u0c30\u0c4d \u2014 \u0c30\u0c46\u0c02\u0c21\u0c42 \u0c1a\u0c26\u0c3f\u0c35\u0c3e\u0c2f\u0c3f: ' + cmpG.same + ' \u0c17\u0c21\u0c41\u0c32\u0c4d\u0c32\u0c4b \u0c12\u0c15\u0c47 \u0c05\u0c15\u0c4d\u0c37\u0c30\u0c02 (\u0c38\u0c30\u0c48\u0c28\u0c35\u0c3f \u0c05\u0c2f\u0c4d\u0c2f\u0c47 \u0c05\u0c35\u0c15\u0c3e\u0c36\u0c02 \u0c0e\u0c15\u0c4d\u0c15\u0c41\u0c35), ' + cmpG.diff + ' \u0c17\u0c21\u0c41\u0c32\u0c4d\u0c32\u0c4b \u0c24\u0c47\u0c21\u0c3e \u2014 \u0c2a\u0c38\u0c41\u0c2a\u0c41 \u0c17\u0c21\u0c41\u0c32\u0c28\u0c41 \u0c2a\u0c47\u0c2a\u0c30\u0c4d\u200c\u0c24\u0c4b \u0c1a\u0c42\u0c38\u0c3f \u0c38\u0c30\u0c3f\u0c1a\u0c47\u0c2f\u0c02\u0c21\u0c3f.'
        : who + ' \u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32\u0c41 \u0c28\u0c3f\u0c02\u0c2a\u0c3f\u0c02\u0c26\u0c3f.' + (nBad ? ' ' + nBad + ' \u0c17\u0c21\u0c41\u0c32\u0c41 \u0c38\u0c02\u0c26\u0c47\u0c39\u0c02 (\u0c2a\u0c38\u0c41\u0c2a\u0c41).' : '') + ' \u201c\u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32\u0c41\u201d \u0c32\u0c4b \u0c17\u0c21\u0c3f\u0c28\u0c3f \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c3f \u0c28\u0c47\u0c30\u0c41\u0c17\u0c3e \u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c35\u0c1a\u0c4d\u0c1a\u0c41. \u0c07\u0c02\u0c15\u0c3e \u0c28\u0c2e\u0c4d\u0c2e\u0c15\u0c02\u0c17\u0c3e \u0c09\u0c02\u0c21\u0c3e\u0c32\u0c02\u0c1f\u0c47 \u201c\u0c2b\u0c4b\u0c28\u0c4d\u200c\u0c32\u0c4b\u0c28\u0c47\u201d \u0c24\u0c4b \u0c15\u0c42\u0c21\u0c3e \u0c1a\u0c26\u0c3f\u0c35\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f \u2014 \u0c30\u0c46\u0c02\u0c21\u0c42 \u0c12\u0c15\u0c1f\u0c47 \u0c1a\u0c46\u0c2a\u0c4d\u0c2a\u0c3f\u0c28 \u0c17\u0c21\u0c41\u0c32\u0c41 \u0c38\u0c30\u0c48\u0c28\u0c35\u0c3f, \u0c24\u0c47\u0c21\u0c3e \u0c09\u0c28\u0c4d\u0c28\u0c35\u0c3f \u0c2e\u0c3e\u0c24\u0c4d\u0c30\u0c2e\u0c47 \u0c2a\u0c38\u0c41\u0c2a\u0c41\u0c32\u0c4b.' }; U.emode = 'sheet'; render(); return;
    }
    stashDraft(); D = draftFromAI(j || {}, date); D.src = 'upload';
    var fixNote = gridFromPaper(D); saveDraft();
    U.status = { kind: 'ok', text: who + ' \u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d \u0c1a\u0c47\u0c38\u0c3f\u0c02\u0c26\u0c3f.' + fixNote + ' \u0c17\u0c21\u0c3f, \u0c38\u0c02\u0c16\u0c4d\u0c2f\u0c32\u0c41, \u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32\u0c41 \u0c1a\u0c3f\u0c24\u0c4d\u0c30\u0c02\u0c24\u0c4b \u0c2a\u0c4b\u0c32\u0c4d\u0c1a\u0c3f \u0c38\u0c30\u0c3f\u0c1a\u0c42\u0c21\u0c02\u0c21\u0c3f, \u0c24\u0c30\u0c4d\u0c35\u0c3e\u0c24 \u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f.' };
    location.hash = '#edit';
    readPendingAnswers(geminiRead);
  }

  /* ================= views: website admin ================= */
  function upPickersHTML() {
    var acc = 'accept="image/jpeg,image/png,image/webp,application/pdf"';
    return '<div class="file"><label class="lbl" for="up-files">1 \u00b7 \u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02 (\u0c17\u0c21\u0c3f + \u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32\u0c41) \u2014 \u0c2b\u0c4b\u0c1f\u0c4b(\u0c32\u0c41) \u0c32\u0c47\u0c26\u0c3e PDF</label><input id="up-files" type="file" ' + acc + ' multiple></div>' +
      '<div class="file"><label class="lbl" for="up-ans">2 \u00b7 \u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32 \u0c17\u0c21\u0c3f \u2014 \u0c2b\u0c4b\u0c1f\u0c4b \u0c32\u0c47\u0c26\u0c3e PDF (\u0c10\u0c1a\u0c4d\u0c1b\u0c3f\u0c15\u0c02)</label><input id="up-ans" type="file" ' + acc + '><p class="note">\u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32\u0c41 \u0c24\u0c30\u0c4d\u0c35\u0c3e\u0c24\u0c3f \u0c35\u0c3e\u0c30\u0c02 \u0c2a\u0c47\u0c2a\u0c30\u0c4d\u200c\u0c32\u0c4b \u0c35\u0c38\u0c4d\u0c24\u0c3e\u0c2f\u0c3f \u0c15\u0c3e\u0c2c\u0c1f\u0c4d\u0c1f\u0c3f \u0c35\u0c3e\u0c1f\u0c3f\u0c28\u0c3f \u0c35\u0c3f\u0c21\u0c3f\u0c17\u0c3e \u0c07\u0c35\u0c4d\u0c35\u0c02\u0c21\u0c3f. \u0c07\u0c2a\u0c4d\u0c2a\u0c41\u0c21\u0c41 \u0c32\u0c47\u0c15\u0c2a\u0c4b\u0c24\u0c47 \u0c24\u0c30\u0c4d\u0c35\u0c3e\u0c24 \u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d\u200c\u0c32\u0c4b\u0c28\u0c3f \u201c\u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32\u0c41\u201d \u0c15\u0c3e\u0c30\u0c4d\u0c21\u0c4d \u0c28\u0c41\u0c02\u0c1a\u0c3f \u0c07\u0c35\u0c4d\u0c35\u0c4a\u0c1a\u0c4d\u0c1a\u0c41. \u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02 \u0c1a\u0c26\u0c35\u0c17\u0c3e\u0c28\u0c47 \u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32\u0c41 \u0c15\u0c42\u0c21\u0c3e \u0c1a\u0c26\u0c3f\u0c35\u0c3f \u0c05\u0c26\u0c47 \u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d\u200c\u0c32\u0c4b \u0c28\u0c3f\u0c02\u0c2a\u0c41\u0c24\u0c3e\u0c02.</p></div>';
  }
  function webLoginView() {
    var hasSvc = !!svcUrl();
    return '<div class="page gutter"><header class="apphead"><a class="ghostbtn" href="#home" aria-label="\u0c35\u0c46\u0c28\u0c15\u0c4d\u0c15\u0c3f">' + I.back + '</a></header><div class="lockscreen"><span class="big">' + I.biglock + '</span><h1 class="apptitle" style="font-size:32px">\u0c28\u0c3f\u0c30\u0c4d\u0c35\u0c3e\u0c39\u0c15\u0c41\u0c21\u0c3f \u0c2a\u0c4d\u0c30\u0c35\u0c47\u0c36\u0c02</h1>' +
      '<p class="bignote">\u0c15\u0c4a\u0c24\u0c4d\u0c24 \u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02 (\u0c2a\u0c47\u0c2a\u0c30\u0c4d \u0c2b\u0c4b\u0c1f\u0c4b / PDF \u0c28\u0c41\u0c02\u0c1a\u0c3f \u0c15\u0c42\u0c21\u0c3e) \u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d\u200c\u0c32\u0c4b \u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c3f\u0c02\u0c1a\u0c21\u0c02, \u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32\u0c41 \u0c38\u0c30\u0c3f\u0c26\u0c3f\u0c26\u0c4d\u0c26\u0c21\u0c02.</p></div>' + statusBox() +
      '<section class="sec"><div class="box">' +

        '<div class="fld"><label class="lbl" for="adm-pw">\u0c2a\u0c3e\u0c38\u0c4d\u200c\u0c35\u0c30\u0c4d\u0c21\u0c4d</label><input id="adm-pw" class="inp" type="password" autocomplete="current-password" enterkeyhint="go"' + (U.busy === 'login' ? ' disabled value="' + esc(U.pwHold || '') + '"' : '') + '></div>' +
        '<button class="wide-btn pri" data-act="svc-login"' + (U.busy ? ' disabled' : '') + '>' + (U.busy === 'login' && U.pwHold ? '\u0c38\u0c30\u0c3f\u0c1a\u0c42\u0c38\u0c4d\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c02\u2026' : '\u0c2a\u0c4d\u0c30\u0c35\u0c47\u0c36\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f') + '</button>' +
        '<button class="wide-btn ter" data-act="svc-reset"' + (U.busy ? ' disabled' : '') + '>' + (U.confirm === 'reset' ? '\u0c16\u0c1a\u0c4d\u0c1a\u0c3f\u0c24\u0c2e\u0c3e? \u0c15\u0c4a\u0c24\u0c4d\u0c24 \u0c2a\u0c3e\u0c38\u0c4d\u200c\u0c35\u0c30\u0c4d\u0c21\u0c4d blogofrulings@gmail.com \u0c15\u0c41 \u0c2a\u0c02\u0c2a\u0c41\u0c24\u0c3e\u0c02 \u2014 \u0c2e\u0c33\u0c4d\u0c33\u0c40 \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c02\u0c21\u0c3f' : '\u0c2a\u0c3e\u0c38\u0c4d\u200c\u0c35\u0c30\u0c4d\u0c21\u0c4d \u0c2e\u0c30\u0c4d\u0c1a\u0c3f\u0c2a\u0c4b\u0c2f\u0c3e\u0c30\u0c3e?') + '</button>' +
        '<p class="note">\u201c\u0c2a\u0c3e\u0c38\u0c4d\u200c\u0c35\u0c30\u0c4d\u0c21\u0c4d \u0c2e\u0c30\u0c4d\u0c1a\u0c3f\u0c2a\u0c4b\u0c2f\u0c3e\u0c30\u0c3e?\u201d \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c3f\u0c24\u0c47 \u0c15\u0c4a\u0c24\u0c4d\u0c24 \u0c2a\u0c3e\u0c38\u0c4d\u200c\u0c35\u0c30\u0c4d\u0c21\u0c4d blogofrulings@gmail.com \u0c15\u0c41 \u0c2e\u0c46\u0c2f\u0c3f\u0c32\u0c4d \u0c35\u0c38\u0c4d\u0c24\u0c41\u0c02\u0c26\u0c3f. \u0c2f\u0c3e\u0c2a\u0c4d \u0c2e\u0c42\u0c38\u0c3f\u0c28\u0c3e, \u0c28\u0c3f\u0c30\u0c4d\u0c35\u0c3e\u0c39\u0c23 \u0c2a\u0c47\u0c1c\u0c40 \u0c28\u0c41\u0c02\u0c1a\u0c3f \u0c2c\u0c2f\u0c1f\u0c15\u0c41 \u0c35\u0c46\u0c33\u0c4d\u0c33\u0c3f\u0c28\u0c3e \u0c2e\u0c33\u0c4d\u0c33\u0c40 \u0c2a\u0c3e\u0c38\u0c4d\u200c\u0c35\u0c30\u0c4d\u0c21\u0c4d \u0c05\u0c21\u0c41\u0c17\u0c41\u0c24\u0c41\u0c02\u0c26\u0c3f.</p>' +

      '</div></section>' +
      (hasSvc ? '' : '<section class="sec"><h2 class="sec-h">\u0c38\u0c30\u0c4d\u0c35\u0c40\u0c38\u0c4d \u0c12\u0c15\u0c38\u0c3e\u0c30\u0c3f \u0c0f\u0c30\u0c4d\u0c2a\u0c3e\u0c1f\u0c41</h2><div class="box"><p class="note">\u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d \u0c28\u0c3f\u0c30\u0c4d\u0c35\u0c39\u0c3f\u0c02\u0c1a\u0c47 Google \u0c16\u0c3e\u0c24\u0c3e\u0c32\u0c4b \u0c1a\u0c3f\u0c28\u0c4d\u0c28 Apps Script (\u0c09\u0c1a\u0c3f\u0c24\u0c02, \u0c15\u0c3e\u0c30\u0c4d\u0c21\u0c4d \u0c05\u0c15\u0c4d\u0c15\u0c30\u0c4d\u0c32\u0c47\u0c26\u0c41) \u0c21\u0c3f\u0c2a\u0c4d\u0c32\u0c3e\u0c2f\u0c4d \u0c1a\u0c47\u0c2f\u0c3e\u0c32\u0c3f. \u0c26\u0c36\u0c32\u0c28\u0c4d\u0c28\u0c40 \u0c35\u0c46\u0c2c\u0c4d\u200c\u0c38\u0c48\u0c1f\u0c4d \u0c2b\u0c48\u0c33\u0c4d\u0c32\u0c32\u0c4b\u0c28\u0c3f README \u0c32\u0c4b \u201cAdmin service\u201d \u0c35\u0c3f\u0c2d\u0c3e\u0c17\u0c02\u0c32\u0c4b \u0c09\u0c28\u0c4d\u0c28\u0c3e\u0c2f\u0c3f. \u0c21\u0c3f\u0c2a\u0c4d\u0c32\u0c3e\u0c2f\u0c4d \u0c05\u0c2f\u0c4d\u0c2f\u0c3e\u0c15 \u0c35\u0c1a\u0c4d\u0c1a\u0c47 \u0c32\u0c3f\u0c02\u0c15\u0c4d\u200c\u0c28\u0c41 \u0c2a\u0c48\u0c28 \u0c05\u0c24\u0c3f\u0c15\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f.</p></div></section>') +
      '</div>';
  }
  // one tap: every post onto its puzzle date on the blog, and \u00ab \u00bb to the puzzles on either side
  function relinkHTML(busy) {
    var ask = U.confirm === 'relink', R = U.relink;
    return '<div class="box relinkbox"><b>\u0c24\u0c47\u0c26\u0c40\u0c32 \u0c35\u0c30\u0c41\u0c38, \u00ab \u00bb \u0c32\u0c3f\u0c02\u0c15\u0c41\u0c32\u0c41, \u0c2a\u0c24\u0c4d\u0c30\u0c3f\u0c15 \u0c32\u0c47\u0c2c\u0c41\u0c32\u0c4d</b><p class="note">\u0c2a\u0c4d\u0c30\u0c24\u0c3f \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d\u200c\u0c28\u0c41 \u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d\u200c\u0c32\u0c4b \u0c26\u0c3e\u0c28\u0c3f \u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02 \u0c24\u0c47\u0c26\u0c40\u0c15\u0c3f (\u0c09\u0c26\u0c3e: 01.11.2026 \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d \u2192 1 \u0c28\u0c35\u0c02\u0c2c\u0c30\u0c4d) \u0c2e\u0c3e\u0c30\u0c41\u0c38\u0c4d\u0c24\u0c41\u0c02\u0c26\u0c3f; \u00ab \u00bb \u0c32\u0c41 \u0c05\u0c26\u0c47 \u0c2a\u0c24\u0c4d\u0c30\u0c3f\u0c15 \u0c2e\u0c41\u0c02\u0c26\u0c41, \u0c24\u0c30\u0c4d\u0c35\u0c3e\u0c24\u0c3f \u0c24\u0c47\u0c26\u0c40\u0c32 \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c41\u0c32\u0c15\u0c41 \u0c35\u0c46\u0c33\u0c4d\u0c24\u0c3e\u0c2f\u0c3f; \u0c2a\u0c4d\u0c30\u0c24\u0c3f \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d\u200c\u0c15\u0c41 \u0c26\u0c3e\u0c28\u0c3f \u0c2a\u0c24\u0c4d\u0c30\u0c3f\u0c15 \u0c2a\u0c47\u0c30\u0c41 \u0c32\u0c47\u0c2c\u0c41\u0c32\u0c4d\u200c\u0c17\u0c3e (\u0c08\u0c28\u0c3e\u0c21\u0c41 / \u0c38\u0c3e\u0c15\u0c4d\u0c37\u0c3f) \u0c2a\u0c46\u0c21\u0c41\u0c24\u0c41\u0c02\u0c26\u0c3f. \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c41\u0c32 \u0c32\u0c3f\u0c02\u0c15\u0c41\u0c32\u0c41 (URL) \u0c2e\u0c3e\u0c30\u0c35\u0c41. \u0c2e\u0c33\u0c4d\u0c33\u0c40 \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c3f\u0c28\u0c3e \u0c38\u0c2e\u0c38\u0c4d\u0c2f \u0c32\u0c47\u0c26\u0c41 \u2014 \u0c38\u0c30\u0c3f\u0c17\u0c3e \u0c09\u0c28\u0c4d\u0c28\u0c35\u0c3e\u0c1f\u0c3f\u0c28\u0c3f \u0c2e\u0c41\u0c1f\u0c4d\u0c1f\u0c26\u0c41.</p>' +
      (R && R.text ? '<p class="note"><b>' + esc(R.text) + '</b></p>' : '') +
      '<button class="wide-btn ' + (ask ? 'pri' : 'ter') + '" data-act="relink"' + (busy ? ' disabled' : '') + '>' + (ask ? '\u0c16\u0c1a\u0c4d\u0c1a\u0c3f\u0c24\u0c2e\u0c3e? \u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d\u200c\u0c32\u0c4b \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c41\u0c32\u0c41 \u0c2e\u0c3e\u0c30\u0c41\u0c24\u0c3e\u0c2f\u0c3f \u2014 \u0c2e\u0c33\u0c4d\u0c33\u0c40 \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c02\u0c21\u0c3f' : '\u0c24\u0c47\u0c26\u0c40\u0c32\u0c41, \u00ab \u00bb \u0c32\u0c3f\u0c02\u0c15\u0c41\u0c32\u0c41 \u0c38\u0c30\u0c3f\u0c1a\u0c47\u0c2f\u0c02\u0c21\u0c3f') + '</button></div>';
  }
  function runRelink(from, acc, auto) {
    acc = acc || { changed: 0, nodate: [], failed: [] };
    U.busy = 'relink'; U.status = { kind: 'wait', text: (auto ? '\u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d\u200c\u0c32\u0c4b \u0c09\u0c28\u0c4d\u0c28 \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c41\u0c32\u0c28\u0c4d\u0c28\u0c3f\u0c1f\u0c3f\u0c15\u0c40 \u0c2a\u0c24\u0c4d\u0c30\u0c3f\u0c15 \u0c2a\u0c47\u0c30\u0c41 (\u0c08\u0c28\u0c3e\u0c21\u0c41) \u0c32\u0c47\u0c2c\u0c41\u0c32\u0c4d \u0c2a\u0c46\u0c21\u0c41\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c02 (\u0c12\u0c15\u0c4d\u0c15\u0c38\u0c3e\u0c30\u0c47)\u2026 ' : '') + '\u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c41\u0c32 \u0c24\u0c47\u0c26\u0c40\u0c32\u0c41, \u00ab \u00bb \u0c32\u0c3f\u0c02\u0c15\u0c41\u0c32\u0c41 \u0c38\u0c30\u0c3f\u0c1a\u0c47\u0c38\u0c4d\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c02\u2026' + (from ? ' (' + from + ' \u0c05\u0c2f\u0c4d\u0c2f\u0c3e\u0c2f\u0c3f)' : '') + ' \u0c15\u0c4a\u0c28\u0c4d\u0c28\u0c3f \u0c28\u0c3f\u0c2e\u0c3f\u0c37\u0c3e\u0c32\u0c41 \u0c2a\u0c1f\u0c4d\u0c1f\u0c35\u0c1a\u0c4d\u0c1a\u0c41; \u0c08 \u0c2a\u0c47\u0c1c\u0c40 \u0c24\u0c46\u0c30\u0c3f\u0c1a\u0c47 \u0c09\u0c02\u0c1a\u0c02\u0c21\u0c3f.' }; render();
    svc('relink', { from: from || 0 }).then(function (r) {
      acc.changed += r.changed || 0; acc.nodate = acc.nodate.concat(r.nodate || []); acc.failed = acc.failed.concat(r.failed || []);
      if (r.left > 0 && r.next > (from || 0)) { runRelink(r.next, acc, auto); return; }
      U.busy = '';
      if (!acc.failed.length) { S.prefs.papersMarked = 9; save(); }
      var t = r.total + ' \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c41\u0c32\u0c41 \u0c1a\u0c42\u0c36\u0c3e\u0c02; ' + (acc.changed ? acc.changed + ' \u0c38\u0c30\u0c3f\u0c1a\u0c47\u0c36\u0c3e\u0c02.' : '\u0c05\u0c28\u0c4d\u0c28\u0c40 \u0c07\u0c2a\u0c4d\u0c2a\u0c1f\u0c3f\u0c15\u0c47 \u0c38\u0c30\u0c3f\u0c17\u0c3e \u0c09\u0c28\u0c4d\u0c28\u0c3e\u0c2f\u0c3f.');
      if (acc.nodate.length) t += ' \u0c08 \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c41\u0c32 \u0c24\u0c47\u0c26\u0c40\u0c28\u0c3f Blogger \u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c28\u0c3f\u0c35\u0c4d\u0c35\u0c32\u0c47\u0c26\u0c41 (\u0c32\u0c3f\u0c02\u0c15\u0c41\u0c32\u0c41 \u0c2e\u0c3e\u0c24\u0c4d\u0c30\u0c02 \u0c38\u0c30\u0c3f\u0c1a\u0c47\u0c36\u0c3e\u0c02): ' + acc.nodate.join(', ') + ' \u2014 Blogger \u0c32\u0c4b \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d \u0c24\u0c46\u0c30\u0c3f\u0c1a\u0c3f \u201cPublished on\u201d \u0c24\u0c47\u0c26\u0c40 \u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c02\u0c21\u0c3f.';
      if (acc.failed.length) t += ' \u0c35\u0c40\u0c1f\u0c3f\u0c28\u0c3f \u0c1a\u0c47\u0c2f\u0c32\u0c47\u0c15\u0c2a\u0c4b\u0c2f\u0c3e\u0c02: ' + acc.failed.join(', ') + ' \u2014 \u0c2e\u0c33\u0c4d\u0c33\u0c40 \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c3f \u0c1a\u0c42\u0c21\u0c02\u0c21\u0c3f.';
      U.relink = { text: t }; U.status = { kind: acc.nodate.length || acc.failed.length ? 'warn' : 'ok', text: t }; render();
    }, function (e) { U.busy = ''; U.status = { kind: 'err', text: e && e.code === 'bad_request' ? '\u0c05\u0c21\u0c4d\u0c2e\u0c3f\u0c28\u0c4d \u0c38\u0c4d\u0c15\u0c4d\u0c30\u0c3f\u0c2a\u0c4d\u0c1f\u0c4d \u0c2a\u0c3e\u0c24\u0c26\u0c3f \u2014 \u0c15\u0c4a\u0c24\u0c4d\u0c24 Code.gs (v7) \u0c05\u0c24\u0c3f\u0c15\u0c3f\u0c02\u0c1a\u0c3f New version \u0c17\u0c3e Deploy \u0c1a\u0c47\u0c38\u0c3f \u0c2e\u0c33\u0c4d\u0c33\u0c40 \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c02\u0c21\u0c3f.' : svcErr(e) }; render(); });
  }
  function mgrRow(p, busy) {
    var m = model(p), conf = U.confirm === 'unpub:' + p.id, blog = !!p.postId;
    return '<div class="mgr"><span class="t"><b>' + esc(p.date || '\u0c24\u0c47\u0c26\u0c40 \u0c32\u0c47\u0c26\u0c41') + (p.date ? ' \u00b7 ' + weekday(p.date) : '') + '</b><small>' + esc(p.title) + ' \u00b7 ' + m.R + '\u00d7' + m.C + ' \u00b7 ' + (m.hasAns ? '\u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32\u0c24\u0c4b' : '\u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32\u0c41 \u0c32\u0c47\u0c35\u0c41') + (blog ? '' : ' \u00b7 \u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d\u200c\u0c32\u0c4b \u0c32\u0c47\u0c26\u0c41') + '</small></span>' +
      '<a class="smallbtn" href="#play-' + esc(p.id) + '" aria-label="\u0c06\u0c21\u0c3f \u0c1a\u0c42\u0c21\u0c02\u0c21\u0c3f">\u25b6</a>' +
      '<button class="smallbtn" data-act="edit-pub" data-id="' + esc(p.id) + '"' + (busy ? ' disabled' : '') + '>' + I.pen + ' \u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c41</button>' +
      (blog ? '<button class="smallbtn danger" data-act="unpub" data-id="' + esc(p.id) + '"' + (busy ? ' disabled' : '') + '>' + (conf ? '\u0c16\u0c1a\u0c4d\u0c1a\u0c3f\u0c24\u0c2e\u0c3e?' : '\u0c26\u0c3e\u0c1a\u0c41') + '</button>' : '') + '</div>';
  }
  // the admin's search box at the top: published posts and the drafts on this phone, by date (any form), month, year or title
  function admFindHTML(busy) {
    var q = (U.admFind || '').trim(); if (!q) return '';
    var posts = sorted().filter(function (p) { return postMatches(p, q); });
    var drafts = (D ? [D] : []).concat((S.drafts || []).filter(function (x) { return !D || x.uid !== D.uid; })).filter(function (d) { return postMatches({ date: d.date || '', title: d.title || '' }, q); });
    if (!posts.length && !drafts.length) return '<p class="note">\u201c' + esc(q) + '\u201d \u0c15\u0c41 \u0c38\u0c30\u0c3f\u0c2a\u0c21\u0c47 \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c41, \u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d \u0c32\u0c47\u0c35\u0c41. \u0c24\u0c47\u0c26\u0c40 (01.11.2026 \u0c32\u0c47\u0c26\u0c3e 1/11), \u0c28\u0c46\u0c32 (\u0c28\u0c35\u0c02\u0c2c\u0c30\u0c4d) \u0c32\u0c47\u0c26\u0c3e \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c02 \u0c2a\u0c4d\u0c30\u0c2f\u0c24\u0c4d\u0c28\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f.</p>';
    return (posts.length ? '<h3 class="lbl">\u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c41\u0c32\u0c41 \u00b7 ' + posts.length + '</h3><div class="box" style="gap:0;padding-block:6px">' + posts.slice(0, 20).map(function (p) { return mgrRow(p, busy); }).join('') + '</div>' : '') +
      (drafts.length ? '<h3 class="lbl">\u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d\u200c\u0c32\u0c41 \u00b7 ' + drafts.length + '</h3><div class="kept">' + drafts.map(function (d) {
        var open = D && d.uid === D.uid, n = (d.clues || []).filter(function (c) { return (c.text || '').trim(); }).length;
        return '<div class="keptrow' + (open ? ' open' : '') + '"><div class="t"><b>' + esc(d.date || '\u0c24\u0c47\u0c26\u0c40 \u0c32\u0c47\u0c26\u0c41') + (open ? ' \u00b7 \u0c24\u0c46\u0c30\u0c3f\u0c1a\u0c3f \u0c09\u0c02\u0c26\u0c3f' : d.published ? ' \u00b7 \u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c3f\u0c02\u0c1a\u0c3f\u0c02\u0c26\u0c3f' : '') + '</b><small>' + esc(d.title || '\u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02') + ' \u00b7 ' + n + ' \u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32\u0c41</small></div>' +
          (open ? '<a class="smallbtn pri" href="#edit">\u0c15\u0c4a\u0c28\u0c38\u0c3e\u0c17\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f</a>' : '<button class="smallbtn" data-act="draft-open" data-v="' + esc(d.uid) + '">\u0c24\u0c46\u0c30\u0c35\u0c02\u0c21\u0c3f</button>') + '</div>';
      }).join('') + '</div>' : '');
  }
  function postsMgrHTML(busy) {
    var q = (U.admQ || '').trim(), list = sorted().filter(function (p) { return !q || postMatches(p, q); });
    if (!list.length) return q ? '<p class="note" style="padding:10px 0">\u201c' + esc(q) + '\u201d \u0c24\u0c4b \u0c0f \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c42 \u0c26\u0c4a\u0c30\u0c15\u0c32\u0c47\u0c26\u0c41.</p>' : '';
    return list.slice(0, q ? 60 : 30).map(function (p) { return mgrRow(p, busy); }).join('') + (!q && list.length > 30 ? '<p class="note" style="padding:10px 0">\u0c2a\u0c3e\u0c24 \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c41\u0c32 \u0c15\u0c4b\u0c38\u0c02 \u0c2a\u0c48\u0c28 \u0c24\u0c47\u0c26\u0c40\u0c24\u0c4b \u0c35\u0c46\u0c24\u0c15\u0c02\u0c21\u0c3f (' + list.length + ' \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c41\u0c32\u0c41).</p>' : '');
  }
  function webAdminView() {
    loadSvcStatus();
    var busy = !!U.busy, st = U.svcStatus || {}, gem = !!st.gemini;
    var blogLine = U.svcLoading && !U.svcStatus ? '\u0c38\u0c30\u0c4d\u0c35\u0c40\u0c38\u0c4d\u200c\u0c24\u0c4b \u0c2e\u0c3e\u0c1f\u0c4d\u0c32\u0c3e\u0c21\u0c41\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c02\u2026' : st.error ? st.error : st.blog ? (st.blog.error ? '\u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d: ' + st.blog.error : '\u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d: ' + (st.blog.name || '') + (st.blog.posts ? ' \u00b7 ' + st.blog.posts + ' \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c41\u0c32\u0c41' : '') + (st.account ? ' \u00b7 \u0c16\u0c3e\u0c24\u0c3e ' + st.account : '')) : '';
    var mgr = postsMgrHTML(busy);
    var imp = '';
    if (U.imports && U.imports.length) imp = '<div class="implist">' + U.imports.map(function (p, i) {
      return '<button class="imp" data-act="imp-open" data-i="' + i + '"><span class="chk" aria-hidden="true">' + I.pen + '</span><span class="t"><b>' + esc(p.title) + ' \u00b7 ' + esc(p.date || '\u0c24\u0c47\u0c26\u0c40 \u0c32\u0c47\u0c26\u0c41') + '</b><small>\u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d\u200c\u0c17\u0c3e \u0c24\u0c46\u0c30\u0c35\u0c02\u0c21\u0c3f</small></span></button>';
    }).join('') + '</div>';
    return '<div class="page gutter">' +
      '<header class="apphead"><div style="display:flex;align-items:center;gap:6px"><a class="ghostbtn" href="#home" aria-label="\u0c35\u0c46\u0c28\u0c15\u0c4d\u0c15\u0c3f">' + I.back + '</a><h1 class="apptitle" style="font-size:34px">\u0c28\u0c3f\u0c30\u0c4d\u0c35\u0c3e\u0c39\u0c23</h1></div><span class="iconbtn lockbtn is-admin" aria-hidden="true">' + I.unlock + '</span></header>' +
      statusBox() + (blogLine ? '<p class="note">' + esc(blogLine) + '</p>' : '') +
      '<section class="sec homesearch"><div class="search"><label for="adm-find">\u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c41\u0c32\u0c41, \u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d\u200c\u0c32\u0c41 \u0c35\u0c46\u0c24\u0c15\u0c02\u0c21\u0c3f</label><div class="box">' + I.search + '<input id="adm-find" type="search" enterkeyhint="search" autocomplete="off" placeholder="\u0c24\u0c47\u0c26\u0c40 (01.11.2026, 1/11), \u0c28\u0c46\u0c32 \u0c32\u0c47\u0c26\u0c3e \u0c2a\u0c47\u0c30\u0c41" value="' + esc(U.admFind || '') + '"></div></div><div id="adm-find-res">' + admFindHTML(busy) + '</div></section>' +
      (st.v && st.v >= 7 && st.v < 9 ? '<div class="status warn"><b>\u0c15\u0c4a\u0c24\u0c4d\u0c24 Code.gs (v9) \u0c05\u0c24\u0c3f\u0c15\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f.</b> \u0c2a\u0c4d\u0c30\u0c24\u0c3f \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d\u200c\u0c15\u0c41 \u0c26\u0c3e\u0c28\u0c3f \u0c2a\u0c24\u0c4d\u0c30\u0c3f\u0c15 \u0c32\u0c47\u0c2c\u0c41\u0c32\u0c4d (\u0c08\u0c28\u0c3e\u0c21\u0c41 / \u0c38\u0c3e\u0c15\u0c4d\u0c37\u0c3f) \u0c2a\u0c46\u0c21\u0c41\u0c24\u0c41\u0c02\u0c26\u0c3f; \u0c12\u0c15\u0c47 \u0c24\u0c47\u0c26\u0c40 \u0c08\u0c28\u0c3e\u0c21\u0c41, \u0c38\u0c3e\u0c15\u0c4d\u0c37\u0c3f \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c41\u0c32\u0c41 \u0c12\u0c15\u0c26\u0c3e\u0c28\u0c3f\u0c2a\u0c48 \u0c12\u0c15\u0c1f\u0c3f \u0c2a\u0c21\u0c35\u0c41; \u00ab \u00bb \u0c05\u0c26\u0c47 \u0c2a\u0c24\u0c4d\u0c30\u0c3f\u0c15 \u0c2a\u0c15\u0c4d\u0c15 \u0c24\u0c47\u0c26\u0c40\u0c32 \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c41\u0c32\u0c15\u0c41 \u0c35\u0c46\u0c33\u0c4d\u0c24\u0c3e\u0c2f\u0c3f. \u0c05\u0c24\u0c3f\u0c15\u0c3f\u0c02\u0c1a\u0c3e\u0c15 \u201c\u0c32\u0c3f\u0c02\u0c15\u0c41\u0c32\u0c41 \u0c38\u0c30\u0c3f\u0c1a\u0c47\u0c2f\u0c02\u0c21\u0c3f\u201d \u0c12\u0c15\u0c38\u0c3e\u0c30\u0c3f \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c02\u0c21\u0c3f \u2014 \u0c09\u0c28\u0c4d\u0c28 \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c41\u0c32\u0c28\u0c4d\u0c28\u0c3f\u0c1f\u0c3f\u0c15\u0c40 \u201c\u0c08\u0c28\u0c3e\u0c21\u0c41\u201d \u0c32\u0c47\u0c2c\u0c41\u0c32\u0c4d \u0c35\u0c38\u0c4d\u0c24\u0c41\u0c02\u0c26\u0c3f. \u0c0e\u0c32\u0c3e: README \u0c32\u0c4b \u201cCode.gs v9\u201d.</div>' : '') +
      (st.v && st.v < 7 ? '<div class="status warn"><b>\u0c15\u0c4a\u0c24\u0c4d\u0c24 Code.gs (v8) \u0c05\u0c24\u0c3f\u0c15\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f.</b> \u0c05\u0c2a\u0c4d\u0c2a\u0c41\u0c21\u0c41: \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c41\u0c32\u0c41 \u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02 \u0c24\u0c47\u0c26\u0c40\u0c24\u0c4b \u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d\u200c\u0c32\u0c4b \u0c35\u0c30\u0c41\u0c38\u0c17\u0c3e \u0c35\u0c38\u0c4d\u0c24\u0c3e\u0c2f\u0c3f, \u00ab \u00bb \u0c2a\u0c15\u0c4d\u0c15 \u0c24\u0c47\u0c26\u0c40\u0c32 \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c41\u0c32\u0c15\u0c41 \u0c35\u0c46\u0c33\u0c4d\u0c24\u0c3e\u0c2f\u0c3f, \u0c38\u0c30\u0c3f\u0c26\u0c3f\u0c26\u0c4d\u0c26\u0c3f\u0c28\u0c2a\u0c4d\u0c2a\u0c41\u0c21\u0c41 \u201c\u0c2c\u0c4d\u0c2f\u0c3e\u0c15\u0c2a\u0c4d \u00b7\u201d \u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d\u200c\u0c32\u0c41 \u0c30\u0c3e\u0c35\u0c41. \u0c0e\u0c32\u0c3e: README \u0c32\u0c4b \u201cCode.gs v8\u201d.</div>' : '') +
      '<section class="sec"><h2 class="sec-h">\u0c15\u0c4a\u0c24\u0c4d\u0c24 \u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02</h2><div class="box">' +
        '<p class="bignote">\u0c2a\u0c47\u0c2a\u0c30\u0c4d\u200c\u0c32\u0c4b\u0c28\u0c3f \u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02 \u0c2b\u0c4b\u0c1f\u0c4b \u0c32\u0c47\u0c26\u0c3e PDF \u0c07\u0c35\u0c4d\u0c35\u0c02\u0c21\u0c3f. \u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d \u0c24\u0c2f\u0c3e\u0c30\u0c48, \u0c2e\u0c40\u0c30\u0c41 \u0c38\u0c30\u0c3f\u0c1a\u0c42\u0c38\u0c3f \u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c3f\u0c02\u0c1a\u0c17\u0c3e\u0c28\u0c47 \u0c05\u0c26\u0c3f \u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d\u200c\u0c32\u0c4b \u0c15\u0c4a\u0c24\u0c4d\u0c24 \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d \u0c05\u0c35\u0c41\u0c24\u0c41\u0c02\u0c26\u0c3f \u2014 \u0c2f\u0c3e\u0c2a\u0c4d\u200c\u0c32\u0c4b\u0c28\u0c42 \u0c15\u0c28\u0c3f\u0c2a\u0c3f\u0c38\u0c4d\u0c24\u0c41\u0c02\u0c26\u0c3f.</p>' +
        upPickersHTML() +
        '<div class="fld"><label class="lbl" for="up-paper">\u0c2a\u0c24\u0c4d\u0c30\u0c3f\u0c15</label><select id="up-paper" class="inp">' + paperOptions(S.prefs.paper) + '</select></div>' +
        '<div class="fld"><label class="lbl" for="up-date">\u0c24\u0c47\u0c26\u0c40</label><input id="up-date" class="inp" type="text" inputmode="numeric" placeholder="DD.MM.YYYY" value=""></div>' +
        '<div class="readers">' +
          '<button class="reader" data-act="gem-read"' + (busy ? ' disabled' : '') + '><b>Gemini \u0c24\u0c4b \u0c1a\u0c26\u0c35\u0c02\u0c21\u0c3f</b><small>' + (gem ? '\u0c17\u0c21\u0c3f, \u0c38\u0c02\u0c16\u0c4d\u0c2f\u0c32\u0c41, \u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32\u0c41, \u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32 \u0c17\u0c21\u0c3f \u0c15\u0c42\u0c21\u0c3e \u2014 \u0c2c\u0c3e\u0c17\u0c3e \u0c1a\u0c26\u0c41\u0c35\u0c41\u0c24\u0c41\u0c02\u0c26\u0c3f' : '\u0c2e\u0c41\u0c02\u0c26\u0c41 \u0c15\u0c3f\u0c02\u0c26 Gemini \u0c15\u0c40 \u0c38\u0c47\u0c35\u0c4d \u0c1a\u0c47\u0c2f\u0c02\u0c21\u0c3f (\u0c09\u0c1a\u0c3f\u0c24\u0c02)') + '</small></button>' +
          '<button class="reader" data-act="scan-start"' + (busy ? ' disabled' : '') + '><b>\u0c2b\u0c4b\u0c28\u0c4d\u200c\u0c32\u0c4b\u0c28\u0c47 \u0c1a\u0c26\u0c35\u0c02\u0c21\u0c3f</b><small>\u0c15\u0c40 \u0c05\u0c15\u0c4d\u0c15\u0c30\u0c4d\u0c32\u0c47\u0c26\u0c41. \u0c2a\u0c47\u0c2a\u0c30\u0c4d PDF \u0c05\u0c2f\u0c3f\u0c24\u0c47 (\u0c08\u0c28\u0c3e\u0c21\u0c41, \u0c38\u0c3e\u0c15\u0c4d\u0c37\u0c3f\u2026 \u0c0f \u0c2a\u0c24\u0c4d\u0c30\u0c3f\u0c15\u0c26\u0c48\u0c28\u0c3e) \u0c17\u0c21\u0c3f, \u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32\u0c41, \u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32 \u0c17\u0c21\u0c3f \u0c24\u0c3e\u0c28\u0c41\u0c17\u0c3e \u0c15\u0c28\u0c41\u0c15\u0c4d\u0c15\u0c41\u0c28\u0c3f \u0c1a\u0c26\u0c41\u0c35\u0c41\u0c24\u0c41\u0c02\u0c26\u0c3f; \u0c2b\u0c4b\u0c1f\u0c4b \u0c05\u0c2f\u0c3f\u0c24\u0c47 \u0c17\u0c21\u0c3f, \u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32 \u0c1a\u0c41\u0c1f\u0c4d\u0c1f\u0c42 \u0c2a\u0c46\u0c1f\u0c4d\u0c1f\u0c46\u0c32\u0c41 \u0c17\u0c40\u0c2f\u0c02\u0c21\u0c3f. \u0c24\u0c2a\u0c4d\u0c2a\u0c41\u0c32\u0c41 \u0c2e\u0c40\u0c30\u0c41 \u0c38\u0c30\u0c3f\u0c26\u0c3f\u0c26\u0c4d\u0c26\u0c3e\u0c32\u0c3f</small></button>' +
          '<a class="reader" href="' + STUDIO + '" target="_blank" rel="noopener"><b>Claude \u0c24\u0c4b \u0c1a\u0c26\u0c3f\u0c35\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f</b><small>Claude \u0c38\u0c4d\u0c1f\u0c42\u0c21\u0c3f\u0c2f\u0c4b\u0c32\u0c4b \u0c2b\u0c4b\u0c1f\u0c4b \u0c07\u0c1a\u0c4d\u0c1a\u0c3f \u0c1a\u0c26\u0c3f\u0c35\u0c3f\u0c02\u0c1a\u0c3f, \u0c05\u0c15\u0c4d\u0c15\u0c21 \u201c\u0c35\u0c46\u0c2c\u0c4d\u200c\u0c38\u0c48\u0c1f\u0c4d \u0c15\u0c4b\u0c38\u0c02 \u0c15\u0c3e\u0c2a\u0c40\u201d \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c3f, \u0c15\u0c3f\u0c02\u0c26\u0c3f \u201cClaude \u0c28\u0c41\u0c02\u0c1a\u0c3f\u201d \u0c2a\u0c46\u0c1f\u0c4d\u0c1f\u0c46\u0c32\u0c4b \u0c05\u0c24\u0c3f\u0c15\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f</small></a>' +
        '</div>' +
        '<button class="wide-btn ter" data-act="blank"' + (busy ? ' disabled' : '') + '>\u0c16\u0c3e\u0c33\u0c40 12\u00d712 \u0c17\u0c21\u0c3f\u0c24\u0c4b \u0c2e\u0c4a\u0c26\u0c32\u0c41\u0c2a\u0c46\u0c1f\u0c4d\u0c1f\u0c02\u0c21\u0c3f</button>' +
        (D ? '<a class="wide-btn sec" href="#edit">\u0c24\u0c46\u0c30\u0c3f\u0c1a\u0c3f \u0c09\u0c28\u0c4d\u0c28 \u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d \u0c15\u0c4a\u0c28\u0c38\u0c3e\u0c17\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f \u00b7 ' + esc(draftLabel(D)) + '</a>' : '') + keptDraftsHTML() + (IS_CLAUDE ? '' : '<button class="wide-btn ter" data-act="go-posts">' + I.pen + ' \u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c3f\u0c02\u0c1a\u0c3f\u0c28 \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d \u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c02\u0c21\u0c3f</button>') +
      '</div></section>' +
      '<section class="sec"><h2 class="sec-h">Claude \u0c28\u0c41\u0c02\u0c1a\u0c3f</h2><div class="box">' +
        '<p class="note">\u0c38\u0c4d\u0c1f\u0c42\u0c21\u0c3f\u0c2f\u0c4b\u0c32\u0c4b \u201c\u0c35\u0c46\u0c2c\u0c4d\u200c\u0c38\u0c48\u0c1f\u0c4d \u0c15\u0c4b\u0c38\u0c02 \u0c15\u0c3e\u0c2a\u0c40\u201d \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c3f \u0c07\u0c15\u0c4d\u0c15\u0c21 \u0c05\u0c24\u0c3f\u0c15\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f, \u0c32\u0c47\u0c26\u0c3e \u0c05\u0c15\u0c4d\u0c15\u0c21 \u0c38\u0c47\u0c35\u0c4d \u0c1a\u0c47\u0c38\u0c3f\u0c28 puzzles.json \u0c07\u0c35\u0c4d\u0c35\u0c02\u0c21\u0c3f.</p>' +
        '<div class="fld"><label class="lbl" for="imp-paste">\u0c05\u0c24\u0c3f\u0c15\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f</label><textarea id="imp-paste" class="inp" placeholder="{&quot;puzzles&quot;: \u2026"></textarea></div>' +
        '<div class="btnrow"><button class="wide-btn ter" data-act="imp-read"' + (busy ? ' disabled' : '') + '>\u0c05\u0c24\u0c3f\u0c15\u0c3f\u0c02\u0c1a\u0c3f\u0c28\u0c26\u0c3f \u0c24\u0c46\u0c30\u0c35\u0c02\u0c21\u0c3f</button><label class="wide-btn ter" for="imp-files" style="cursor:pointer">\u0c2b\u0c48\u0c32\u0c4d \u0c0e\u0c02\u0c1a\u0c41\u0c15\u0c4b\u0c02\u0c21\u0c3f</label></div>' +
        '<input id="imp-files" type="file" accept=".json,.xml,.html,.htm,.txt,application/json,text/xml,text/html" multiple style="position:absolute;width:1px;height:1px;opacity:0">' + imp +
      '</div></section>' +
      '<section class="sec" id="adm-posts"><h2 class="sec-h">\u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c41\u0c32\u0c41 \u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c02\u0c21\u0c3f \u00b7 ' + PUZZLES.length + '</h2><p class="note">\u0c0f \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d\u200c\u0c28\u0c48\u0c28\u0c3e <b>\u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c41</b> \u0c24\u0c4b \u0c24\u0c46\u0c30\u0c3f\u0c1a\u0c3f \u0c17\u0c21\u0c3f, \u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32\u0c41, \u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32\u0c41, \u0c36\u0c40\u0c30\u0c4d\u0c37\u0c3f\u0c15, \u0c2c\u0c4a\u0c2e\u0c4d\u0c2e\u0c32\u0c41 \u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f \u201c\u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d \u0c38\u0c30\u0c3f\u0c26\u0c3f\u0c26\u0c4d\u0c26\u0c02\u0c21\u0c3f\u201d \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c02\u0c21\u0c3f \u2014 \u0c05\u0c26\u0c47 \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d \u0c2e\u0c3e\u0c30\u0c41\u0c24\u0c41\u0c02\u0c26\u0c3f (\u0c15\u0c4a\u0c24\u0c4d\u0c24 \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d \u0c30\u0c3e\u0c26\u0c41; \u0c2a\u0c3e\u0c24 \u0c30\u0c42\u0c2a\u0c02 \u0c2e\u0c40 Google Drive \u0c32\u0c4b \u201ce-padavinodam-old-\u2026\u201d \u0c2b\u0c48\u0c32\u0c4d\u200c\u0c17\u0c3e \u0c09\u0c02\u0c1f\u0c41\u0c02\u0c26\u0c3f). <b>\u0c26\u0c3e\u0c1a\u0c41</b> \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d\u200c\u0c28\u0c41 \u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d \u0c28\u0c41\u0c02\u0c1a\u0c3f \u0c24\u0c40\u0c38\u0c3f \u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d \u0c1a\u0c47\u0c38\u0c4d\u0c24\u0c41\u0c02\u0c26\u0c3f.</p>' + relinkHTML(busy) + '<input id="adm-q" class="inp" type="search" placeholder="\u0c24\u0c47\u0c26\u0c40 (01.11.2026, 1/11), \u0c28\u0c46\u0c32 \u0c32\u0c47\u0c26\u0c3e \u0c2a\u0c47\u0c30\u0c41\u0c24\u0c4b \u0c35\u0c46\u0c24\u0c15\u0c02\u0c21\u0c3f" value="' + esc(U.admQ || '') + '"><div class="box" id="adm-list" style="gap:0;padding-block:6px">' + (mgr || '<p class="note" style="padding:10px 0">\u0c07\u0c02\u0c15\u0c3e \u0c0f \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c42 \u0c32\u0c47\u0c26\u0c41.</p>') + '</div></section>' +
      '<section class="sec"><h2 class="sec-h">\u0c38\u0c46\u0c1f\u0c4d\u0c1f\u0c3f\u0c02\u0c17\u0c4d\u200c\u0c32\u0c41</h2><div class="box">' +
        '<div class="fld"><label class="lbl" for="gem-key">Gemini \u0c15\u0c40 ' + (gem ? '\u00b7 \u0c38\u0c47\u0c35\u0c4d \u0c05\u0c2f\u0c3f\u0c02\u0c26\u0c3f (' + esc(st.gemini) + ')' : '\u00b7 \u0c07\u0c02\u0c15\u0c3e \u0c32\u0c47\u0c26\u0c41') + '</label><input id="gem-key" class="inp" type="password" autocomplete="off" placeholder="AQ.\u2026 \u0c32\u0c47\u0c26\u0c3e AIza\u2026"><p class="note">aistudio.google.com/apikey \u0c32\u0c4b \u0c09\u0c1a\u0c3f\u0c24\u0c02\u0c17\u0c3e \u0c24\u0c40\u0c38\u0c41\u0c15\u0c4b\u0c02\u0c21\u0c3f. \u0c07\u0c26\u0c3f \u0c2e\u0c40 Apps Script \u0c32\u0c4b \u0c09\u0c02\u0c1f\u0c41\u0c02\u0c26\u0c3f \u2014 \u0c2b\u0c4b\u0c28\u0c4d\u200c\u0c32\u0c32\u0c4b \u0c15\u0c3e\u0c26\u0c41.</p>' +
          '<div class="btnrow"><button class="wide-btn ter" data-act="gem-save"' + (busy ? ' disabled' : '') + '>\u0c15\u0c40 \u0c38\u0c47\u0c35\u0c4d \u0c1a\u0c47\u0c2f\u0c02\u0c21\u0c3f</button>' + (gem ? '<button class="wide-btn link" data-act="gem-clear"' + (busy ? ' disabled' : '') + '>\u0c15\u0c40 \u0c24\u0c40\u0c38\u0c3f\u0c35\u0c47\u0c2f\u0c02\u0c21\u0c3f</button>' : '') + '</div></div>' +
        '<div class="fld"><h3 class="lbl">\u0c2a\u0c3e\u0c38\u0c4d\u200c\u0c35\u0c30\u0c4d\u0c21\u0c4d \u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c02\u0c21\u0c3f</h3><input id="pw-old" class="inp" type="password" autocomplete="current-password" placeholder="\u0c2a\u0c4d\u0c30\u0c38\u0c4d\u0c24\u0c41\u0c24 \u0c2a\u0c3e\u0c38\u0c4d\u200c\u0c35\u0c30\u0c4d\u0c21\u0c4d"><input id="pw-new" class="inp" type="password" autocomplete="new-password" placeholder="\u0c15\u0c4a\u0c24\u0c4d\u0c24 \u0c2a\u0c3e\u0c38\u0c4d\u200c\u0c35\u0c30\u0c4d\u0c21\u0c4d (\u0c15\u0c28\u0c40\u0c38\u0c02 6)"><input id="pw-new2" class="inp" type="password" autocomplete="new-password" placeholder="\u0c15\u0c4a\u0c24\u0c4d\u0c24 \u0c2a\u0c3e\u0c38\u0c4d\u200c\u0c35\u0c30\u0c4d\u0c21\u0c4d \u0c2e\u0c33\u0c4d\u0c33\u0c40"><button class="wide-btn ter" data-act="pw-change"' + (busy ? ' disabled' : '') + '>\u0c2a\u0c3e\u0c38\u0c4d\u200c\u0c35\u0c30\u0c4d\u0c21\u0c4d \u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c02\u0c21\u0c3f</button><p class="note">\u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c17\u0c3e\u0c28\u0c47 \u0c05\u0c28\u0c4d\u0c28\u0c3f \u0c2a\u0c30\u0c3f\u0c15\u0c30\u0c3e\u0c32\u0c4d\u0c32\u0c4b \u0c2e\u0c33\u0c4d\u0c33\u0c40 \u0c2a\u0c4d\u0c30\u0c35\u0c47\u0c36\u0c3f\u0c02\u0c1a\u0c3e\u0c32\u0c3f. \u0c2e\u0c30\u0c4d\u0c1a\u0c3f\u0c2a\u0c4b\u0c24\u0c47 \u0c2a\u0c4d\u0c30\u0c35\u0c47\u0c36 \u0c2a\u0c47\u0c1c\u0c40\u0c32\u0c4b \u201c\u0c2a\u0c3e\u0c38\u0c4d\u200c\u0c35\u0c30\u0c4d\u0c21\u0c4d \u0c2e\u0c30\u0c4d\u0c1a\u0c3f\u0c2a\u0c4b\u0c2f\u0c3e\u0c30\u0c3e?\u201d \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c3f\u0c24\u0c47 \u0c15\u0c4a\u0c24\u0c4d\u0c24\u0c26\u0c3f blogofrulings@gmail.com \u0c15\u0c41 \u0c35\u0c38\u0c4d\u0c24\u0c41\u0c02\u0c26\u0c3f.</p></div>' +
        '<button class="wide-btn ter" data-act="svc-logout">\u0c08 \u0c2a\u0c30\u0c3f\u0c15\u0c30\u0c02\u0c32\u0c4b \u0c28\u0c3f\u0c30\u0c4d\u0c35\u0c3e\u0c39\u0c23 \u0c28\u0c41\u0c02\u0c1a\u0c3f \u0c2c\u0c2f\u0c1f\u0c15\u0c41</button>' +
      '</div></section>' +
      '<p class="note">\u0c08\u0c28\u0c3e\u0c21\u0c41 \u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02 \u0c39\u0c15\u0c4d\u0c15\u0c41\u0c32\u0c41 \u0c08\u0c28\u0c3e\u0c21\u0c41\u0c35\u0c3f \u2014 \u0c2a\u0c2c\u0c4d\u0c32\u0c3f\u0c15\u0c4d\u200c\u0c17\u0c3e \u0c2a\u0c02\u0c1a\u0c47 \u0c2e\u0c41\u0c02\u0c26\u0c41 \u0c05\u0c28\u0c41\u0c2e\u0c24\u0c3f \u0c38\u0c02\u0c17\u0c24\u0c3f \u0c1a\u0c42\u0c38\u0c41\u0c15\u0c4b\u0c02\u0c21\u0c3f.</p>' +
    '</div>';
  }
  function openImport(p) {
    stashDraft(); D = draftFromPuzzle(Object.assign({ title: '\u0c08\u0c28\u0c3e\u0c21\u0c41 \u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02', date: '', clues: [], nums: {} }, p));
    D.id = ''; D.postId = ''; D.src = 'upload'; U.er = 0; U.ec = 0; U.emode = 'ans'; U.srcUrls = []; U.imports = null; saveDraft();
    U.status = { kind: 'ok', text: '\u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d\u200c\u0c17\u0c3e \u0c24\u0c46\u0c30\u0c3f\u0c1a\u0c3e\u0c02' + (p.date ? ' (' + p.date + ')' : '') + '. \u0c38\u0c30\u0c3f\u0c1a\u0c42\u0c38\u0c3f \u201c\u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d\u200c\u0c32\u0c4b \u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f\u201d \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c02\u0c21\u0c3f.' };
    location.hash = '#edit'; render();
  }
  function copyForSite(p) {
    var txt = JSON.stringify({ v: 1, puzzles: [cleanPuzzle(p)] });
    function fallback() { U.copyText = txt; render(); var cb = document.getElementById('copy-box'); if (cb) { cb.focus(); cb.select(); } toast('\u0c15\u0c3f\u0c02\u0c26\u0c3f \u0c2a\u0c46\u0c1f\u0c4d\u0c1f\u0c46\u0c32\u0c4b\u0c26\u0c3f \u0c2e\u0c4a\u0c24\u0c4d\u0c24\u0c02 \u0c15\u0c3e\u0c2a\u0c40 \u0c1a\u0c47\u0c2f\u0c02\u0c21\u0c3f.'); }
    try { navigator.clipboard.writeText(txt).then(function () { toast('\u0c15\u0c3e\u0c2a\u0c40 \u0c05\u0c2f\u0c3f\u0c02\u0c26\u0c3f. \u0c35\u0c46\u0c2c\u0c4d\u200c\u0c38\u0c48\u0c1f\u0c4d \u0c28\u0c3f\u0c30\u0c4d\u0c35\u0c3e\u0c39\u0c23\u0c32\u0c4b \u201cClaude \u0c28\u0c41\u0c02\u0c1a\u0c3f\u201d \u0c2a\u0c46\u0c1f\u0c4d\u0c1f\u0c46\u0c32\u0c4b \u0c05\u0c24\u0c3f\u0c15\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f.'); }, fallback); } catch (e) { fallback(); }
  }

  /* ================= views: admin ================= */
  function statusBox() {
    if (!U.status) return '';
    var stop = U.busy === 'ai' ? '<button class="smallbtn" data-act="ai-stop">\u0c06\u0c2a\u0c02\u0c21\u0c3f</button>' : '';
    return '<div class="status ' + (U.status.kind === 'err' ? 'err' : U.status.kind === 'ok' ? 'ok' : '') + '" role="status"><span>' + esc(U.status.text) + '</span>' +
      (U.status.link ? '<a href="' + esc(U.status.link) + '" target="_blank" rel="noopener" style="font-weight:700">\u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d\u200c\u0c32\u0c4b \u0c1a\u0c42\u0c21\u0c02\u0c21\u0c3f \u2192</a>' : '') +
      (U.busy === 'ai' ? '<span class="note" id="ai-progress">' + (IS_CLAUDE ? '\u0c05\u0c02\u0c26\u0c41\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c26\u0c3f: 0 \u0c05\u0c15\u0c4d\u0c37\u0c30\u0c3e\u0c32\u0c41' : '') + '</span>' : '') + stop +
      (U.copyText ? '<textarea class="inp" readonly id="copy-box" style="min-height:90px;font-size:12px">' + esc(U.copyText) + '</textarea><button class="smallbtn" data-act="copy-close">\u0c2e\u0c42\u0c38\u0c3f\u0c35\u0c47\u0c2f\u0c02\u0c21\u0c3f</button>' : '') + '</div>';
  }
  function adminView() {
    if (!IS_CLAUDE) return ADMIN ? webAdminView() : webLoginView();
    if (!IS_CLAUDE && !ADMIN) return '<div class="page gutter"><header class="apphead"><a class="ghostbtn" href="#home" aria-label="\u0c35\u0c46\u0c28\u0c15\u0c4d\u0c15\u0c3f">' + I.back + '</a></header><div class="lockscreen"><span class="big">' + I.biglock + '</span><h1 class="apptitle" style="font-size:32px">\u0c28\u0c3f\u0c30\u0c4d\u0c35\u0c3e\u0c39\u0c15\u0c41\u0c21\u0c3f \u0c2a\u0c4d\u0c30\u0c35\u0c47\u0c36\u0c02</h1>' +
      '<p class="bignote">\u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c3e\u0c32\u0c41, \u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32\u0c41 \u0c07\u0c15\u0c4d\u0c15\u0c21\u0c3f \u0c28\u0c41\u0c02\u0c1a\u0c47 \u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c3f\u0c02\u0c1a\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c2e\u0c40 GitHub \u0c1f\u0c4b\u0c15\u0c46\u0c28\u0c4d \u0c07\u0c35\u0c4d\u0c35\u0c02\u0c21\u0c3f. \u0c05\u0c26\u0c3f \u0c08 \u0c2b\u0c4b\u0c28\u0c4d/\u0c15\u0c02\u0c2a\u0c4d\u0c2f\u0c42\u0c1f\u0c30\u0c4d\u200c\u0c32\u0c4b\u0c28\u0c47 \u0c09\u0c02\u0c1f\u0c41\u0c02\u0c26\u0c3f \u2014 \u0c0e\u0c35\u0c30\u0c3f\u0c15\u0c40 \u0c2a\u0c02\u0c2a\u0c02.</p></div>' + statusBox() +
      '<section class="sec"><div class="box"><div class="fld"><label class="lbl" for="gh-token">GitHub \u0c1f\u0c4b\u0c15\u0c46\u0c28\u0c4d</label><input id="gh-token" class="inp" type="password" autocomplete="off" placeholder="github_pat_\u2026"></div>' +
      '<button class="wide-btn pri" data-act="gh-login"' + (U.busy ? ' disabled' : '') + '>\u0c2a\u0c4d\u0c30\u0c35\u0c47\u0c36\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f</button></div></section>' +
      '<section class="sec"><h2 class="sec-h">\u0c1f\u0c4b\u0c15\u0c46\u0c28\u0c4d \u0c12\u0c15\u0c38\u0c3e\u0c30\u0c3f \u0c24\u0c2f\u0c3e\u0c30\u0c41\u0c1a\u0c47\u0c2f\u0c21\u0c02</h2><div class="box"><ol class="steps">' +
        '<li>uvsubbaiah-spec \u0c16\u0c3e\u0c24\u0c3e\u0c24\u0c4b GitHub \u0c32\u0c4b \u0c2a\u0c4d\u0c30\u0c35\u0c47\u0c36\u0c3f\u0c02\u0c1a\u0c3f <a href="https://github.com/settings/personal-access-tokens/new" target="_blank" rel="noopener">\u0c15\u0c4a\u0c24\u0c4d\u0c24 fine-grained \u0c1f\u0c4b\u0c15\u0c46\u0c28\u0c4d</a> \u0c2a\u0c47\u0c1c\u0c40 \u0c24\u0c46\u0c30\u0c35\u0c02\u0c21\u0c3f.</li>' +
        '<li>\u0c2a\u0c47\u0c30\u0c41: e-padavinodam admin \u00b7 \u0c17\u0c21\u0c41\u0c35\u0c41: \u0c2e\u0c40\u0c15\u0c41 \u0c28\u0c1a\u0c4d\u0c1a\u0c3f\u0c28\u0c02\u0c24 (\u0c09\u0c26\u0c3e: 1 \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c02).</li>' +
        '<li>Repository access: <b>Only select repositories</b> \u2192 <b>e-padavinodam</b>.</li>' +
        '<li>Permissions \u2192 Repository permissions \u2192 <b>Contents: Read and write</b>.</li>' +
        '<li>Generate token \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c3f, \u0c35\u0c1a\u0c4d\u0c1a\u0c3f\u0c28 \u0c1f\u0c4b\u0c15\u0c46\u0c28\u0c4d \u0c15\u0c3e\u0c2a\u0c40 \u0c1a\u0c47\u0c38\u0c3f \u0c2a\u0c48\u0c28 \u0c05\u0c24\u0c3f\u0c15\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f.</li></ol>' +
        '<p class="note">\u0c08 \u0c1f\u0c4b\u0c15\u0c46\u0c28\u0c4d e-padavinodam \u0c32\u0c4b\u0c28\u0c3f \u0c2b\u0c48\u0c33\u0c4d\u0c32\u0c28\u0c41 \u0c2e\u0c3e\u0c24\u0c4d\u0c30\u0c2e\u0c47 \u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c17\u0c32\u0c26\u0c41. \u0c2b\u0c4b\u0c28\u0c4d \u0c2a\u0c4b\u0c2f\u0c3f\u0c28\u0c3e, \u0c0e\u0c35\u0c30\u0c3f\u0c15\u0c48\u0c28\u0c3e \u0c24\u0c46\u0c32\u0c3f\u0c38\u0c3f\u0c28\u0c3e GitHub \u0c32\u0c4b \u0c26\u0c3e\u0c28\u0c4d\u0c28\u0c3f \u0c24\u0c4a\u0c32\u0c17\u0c3f\u0c38\u0c4d\u0c24\u0c47 \u0c1a\u0c3e\u0c32\u0c41.</p></div></section></div>';
    if (ADMIN === null) return '<div class="page gutter"><div class="lockscreen"><span class="big">' + I.biglock + '</span><p class="note">\u0c05\u0c28\u0c41\u0c2e\u0c24\u0c41\u0c32\u0c41 \u0c24\u0c28\u0c3f\u0c16\u0c40 \u0c1a\u0c47\u0c38\u0c4d\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c02\u2026</p></div></div>';
    if (!ADMIN) return '<div class="page gutter"><header class="apphead"><a class="ghostbtn" href="#home" aria-label="\u0c35\u0c46\u0c28\u0c15\u0c4d\u0c15\u0c3f">' + I.back + '</a></header><div class="lockscreen"><span class="big">' + I.biglock + '</span><h1 class="apptitle" style="font-size:34px">\u0c28\u0c3f\u0c30\u0c4d\u0c35\u0c3e\u0c39\u0c15\u0c41\u0c32\u0c15\u0c41 \u0c2e\u0c3e\u0c24\u0c4d\u0c30\u0c2e\u0c47</h1><p class="bignote">\u0c15\u0c4a\u0c24\u0c4d\u0c24 \u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c3e\u0c32\u0c41 \u0c05\u0c2a\u0c4d\u200c\u0c32\u0c4b\u0c21\u0c4d \u0c1a\u0c47\u0c2f\u0c21\u0c02, \u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c41\u0c32\u0c41 \u0c26\u0c3f\u0c17\u0c41\u0c2e\u0c24\u0c3f \u0c1a\u0c47\u0c2f\u0c21\u0c02 \u0c2f\u0c3e\u0c2a\u0c4d \u0c2f\u0c1c\u0c2e\u0c3e\u0c28\u0c3f \u0c32\u0c47\u0c26\u0c3e \u0c0e\u0c21\u0c3f\u0c1f\u0c30\u0c4d \u0c2e\u0c3e\u0c24\u0c4d\u0c30\u0c2e\u0c47 \u0c1a\u0c47\u0c2f\u0c17\u0c32\u0c30\u0c41.</p><a class="wide-btn pri" href="#home">\u0c39\u0c4b\u0c2e\u0c4d\u200c\u0c15\u0c41 \u0c35\u0c46\u0c33\u0c4d\u0c33\u0c02\u0c21\u0c3f</a></div></div>';
    var busy = !!U.busy;
    var imp = '';
    if (U.imports && U.imports.length) {
      var n = Object.keys(U.importSel).filter(function (k) { return U.importSel[k]; }).length;
      imp = '<div class="implist">' + U.imports.map(function (p) {
        var m = model(Object.assign({}, p, { id: 'imp-' + p.id })), on = !!U.importSel[p.id];
        var info = p.grid.length + '\u00d7' + p.grid[0].length + ' \u00b7 \u0c05\u0c21\u0c4d\u0c21\u0c02 ' + m.order.A.length + ' \u00b7 \u0c28\u0c3f\u0c32\u0c41\u0c35\u0c41 ' + m.order.D.length + (m.hasAns ? '' : ' \u00b7 \u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32\u0c41 ' + m.missingAns + ' \u0c32\u0c47\u0c35\u0c41') + (m.problems.length ? ' \u00b7 ' + m.problems.length + ' \u0c17\u0c2e\u0c28\u0c3f\u0c15\u0c32\u0c41' : '') + (p.exists ? ' \u00b7 \u0c07\u0c2a\u0c4d\u0c2a\u0c1f\u0c3f\u0c15\u0c47 \u0c09\u0c02\u0c26\u0c3f (\u0c24\u0c3f\u0c30\u0c3f\u0c17\u0c3f \u0c30\u0c3e\u0c38\u0c4d\u0c24\u0c41\u0c02\u0c26\u0c3f)' : '');
        return '<button class="imp" data-act="imp-toggle" data-id="' + esc(p.id) + '" aria-pressed="' + on + '"><span class="chk" aria-hidden="true">' + (on ? I.tick : '') + '</span><span class="t"><b>' + esc(p.title) + ' \u00b7 ' + esc(p.date || '\u0c24\u0c47\u0c26\u0c40 \u0c32\u0c47\u0c26\u0c41') + '</b><small>' + esc(info) + '</small></span></button>';
      }).join('') + '</div><div class="btnrow"><button class="wide-btn ter" data-act="imp-all">' + (n === U.imports.length ? '\u0c05\u0c28\u0c4d\u0c28\u0c40 \u0c24\u0c40\u0c38\u0c3f\u0c35\u0c47\u0c2f\u0c02\u0c21\u0c3f' : '\u0c05\u0c28\u0c4d\u0c28\u0c40 \u0c0e\u0c02\u0c1a\u0c41\u0c15\u0c4b\u0c02\u0c21\u0c3f') + '</button><button class="wide-btn pri" data-act="imp-publish"' + (busy || !n ? ' disabled' : '') + '>' + n + ' \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c41\u0c32\u0c41 \u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f</button></div>';
    }
    var mgr = sorted().map(function (p) {
      var m = model(p), conf = U.confirm === 'del:' + p.id;
      return '<div class="mgr"><span class="t"><b>' + esc(p.title) + ' \u00b7 ' + esc(p.date || '\u0c24\u0c47\u0c26\u0c40 \u0c32\u0c47\u0c26\u0c41') + '</b><small>' + m.R + '\u00d7' + m.C + ' \u00b7 ' + (m.hasAns ? '\u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32\u0c24\u0c4b' : '\u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32\u0c41 \u0c32\u0c47\u0c35\u0c41') + ' \u00b7 ' + (p.src === 'blog' ? '\u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d \u0c28\u0c41\u0c02\u0c1a\u0c3f' : '\u0c05\u0c2a\u0c4d\u200c\u0c32\u0c4b\u0c21\u0c4d') + '</small></span><button class="smallbtn" data-act="edit-pub" data-id="' + esc(p.id) + '"' + (busy ? ' disabled' : '') + '>\u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c41</button>' + (IS_CLAUDE ? '<button class="smallbtn" data-act="copy-site" data-id="' + esc(p.id) + '">\u0c15\u0c3e\u0c2a\u0c40</button>' : '') + '<button class="smallbtn danger" data-act="del-pub" data-id="' + esc(p.id) + '"' + (busy ? ' disabled' : '') + '>' + (conf ? '\u0c16\u0c1a\u0c4d\u0c1a\u0c3f\u0c24\u0c2e\u0c3e?' : '\u0c24\u0c4a\u0c32\u0c17\u0c3f\u0c02\u0c1a\u0c41') + '</button></div>';
    }).join('');
    return '<div class="page gutter">' +
      '<header class="apphead"><div style="display:flex;align-items:center;gap:6px"><a class="ghostbtn" href="#home" aria-label="\u0c35\u0c46\u0c28\u0c15\u0c4d\u0c15\u0c3f">' + I.back + '</a><h1 class="apptitle" style="font-size:34px">\u0c28\u0c3f\u0c30\u0c4d\u0c35\u0c3e\u0c39\u0c23</h1></div><span class="iconbtn lockbtn is-admin" aria-hidden="true">' + I.unlock + '</span></header>' +
      statusBox() +
      (!IS_CLAUDE ? '<section class="sec"><h2 class="sec-h">\u0c15\u0c4a\u0c24\u0c4d\u0c24 \u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02</h2><div class="box">' +
        '<p class="bignote">\u0c16\u0c3e\u0c33\u0c40 12\u00d712 \u0c17\u0c21\u0c3f\u0c24\u0c4b \u0c2e\u0c4a\u0c26\u0c32\u0c41\u0c2a\u0c46\u0c1f\u0c4d\u0c1f\u0c3f \u0c28\u0c32\u0c4d\u0c32 \u0c17\u0c21\u0c41\u0c32\u0c41, \u0c05\u0c02\u0c15\u0c46\u0c32\u0c41, \u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32\u0c41, \u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32\u0c41 \u0c28\u0c3f\u0c02\u0c2a\u0c02\u0c21\u0c3f. \u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c3f\u0c02\u0c1a\u0c17\u0c3e\u0c28\u0c47 \u0c05\u0c26\u0c3f \u0c28\u0c47\u0c30\u0c41\u0c17\u0c3e \u0c2e\u0c40 \u0c38\u0c48\u0c1f\u0c4d, \u0c2f\u0c3e\u0c2a\u0c4d\u200c\u0c32\u0c4b\u0c15\u0c3f \u0c35\u0c46\u0c33\u0c4d\u0c24\u0c41\u0c02\u0c26\u0c3f.</p>' +
        '<div class="fld"><label class="lbl" for="up-paper">\u0c2a\u0c24\u0c4d\u0c30\u0c3f\u0c15</label><select id="up-paper" class="inp">' + paperOptions(S.prefs.paper) + '</select></div>' +
        '<div class="fld"><label class="lbl" for="up-date">\u0c24\u0c47\u0c26\u0c40</label><input id="up-date" class="inp" type="text" inputmode="numeric" placeholder="DD.MM.YYYY" value=""></div>' +
        '<div class="btnrow"><button class="wide-btn pri" data-act="blank"' + (busy ? ' disabled' : '') + '>\u0c16\u0c3e\u0c33\u0c40 \u0c17\u0c21\u0c3f\u0c24\u0c4b \u0c2e\u0c4a\u0c26\u0c32\u0c41\u0c2a\u0c46\u0c1f\u0c4d\u0c1f\u0c02\u0c21\u0c3f</button></div>' +
        (D ? '<a class="wide-btn sec" href="#edit">\u0c24\u0c46\u0c30\u0c3f\u0c1a\u0c3f \u0c09\u0c28\u0c4d\u0c28 \u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d \u0c15\u0c4a\u0c28\u0c38\u0c3e\u0c17\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f \u00b7 ' + esc(draftLabel(D)) + '</a>' : '') + keptDraftsHTML() + (IS_CLAUDE ? '' : '<button class="wide-btn ter" data-act="go-posts">' + I.pen + ' \u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c3f\u0c02\u0c1a\u0c3f\u0c28 \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d \u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c02\u0c21\u0c3f</button>') +
        '<p class="note">\u0c2a\u0c47\u0c2a\u0c30\u0c4d \u0c2b\u0c4b\u0c1f\u0c4b/PDF \u0c28\u0c41\u0c02\u0c1a\u0c3f Claude \u0c1a\u0c26\u0c35\u0c3e\u0c32\u0c02\u0c1f\u0c47 \u0c2e\u0c40 Claude \u0c38\u0c4d\u0c1f\u0c42\u0c21\u0c3f\u0c2f\u0c4b\u0c32\u0c4b \u0c1a\u0c26\u0c3f\u0c35\u0c3f\u0c02\u0c1a\u0c3f, \u0c05\u0c15\u0c4d\u0c15\u0c21 \u201cpuzzles.json \u0c38\u0c47\u0c35\u0c4d \u0c1a\u0c47\u0c2f\u0c02\u0c21\u0c3f\u201d \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c3f, \u0c06 \u0c2b\u0c48\u0c32\u0c4d\u200c\u0c28\u0c41 \u0c15\u0c3f\u0c02\u0c26 \u201c\u0c2b\u0c48\u0c32\u0c4d \u0c28\u0c41\u0c02\u0c1a\u0c3f \u0c26\u0c3f\u0c17\u0c41\u0c2e\u0c24\u0c3f\u201d \u0c32\u0c4b \u0c07\u0c35\u0c4d\u0c35\u0c02\u0c21\u0c3f.</p>' +
        '</div></section>' : '') +
      (IS_CLAUDE ? '<section class="sec"><h2 class="sec-h">\u0c15\u0c4a\u0c24\u0c4d\u0c24 \u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02 \u0c05\u0c2a\u0c4d\u200c\u0c32\u0c4b\u0c21\u0c4d</h2><div class="box">' +
        '<p class="bignote">\u0c2a\u0c47\u0c2a\u0c30\u0c4d\u200c\u0c32\u0c4b\u0c28\u0c3f \u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02 \u0c2b\u0c4b\u0c1f\u0c4b \u0c32\u0c47\u0c26\u0c3e PDF \u0c07\u0c35\u0c4d\u0c35\u0c02\u0c21\u0c3f. Claude \u0c17\u0c21\u0c3f, \u0c38\u0c02\u0c16\u0c4d\u0c2f\u0c32\u0c41, \u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32\u0c41 \u0c1a\u0c26\u0c3f\u0c35\u0c3f \u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d \u0c24\u0c2f\u0c3e\u0c30\u0c41 \u0c1a\u0c47\u0c38\u0c4d\u0c24\u0c41\u0c02\u0c26\u0c3f. \u0c2e\u0c40\u0c30\u0c41 \u0c38\u0c30\u0c3f\u0c1a\u0c42\u0c38\u0c3f \u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c3f\u0c38\u0c4d\u0c24\u0c47 \u0c05\u0c26\u0c3f \u0c2f\u0c3e\u0c2a\u0c4d\u200c\u0c32\u0c4b \u0c15\u0c4a\u0c24\u0c4d\u0c24 \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d \u0c05\u0c35\u0c41\u0c24\u0c41\u0c02\u0c26\u0c3f.</p>' +
        upPickersHTML() +
        '<div class="fld"><label class="lbl" for="up-paper">\u0c2a\u0c24\u0c4d\u0c30\u0c3f\u0c15</label><select id="up-paper" class="inp">' + paperOptions(S.prefs.paper) + '</select></div>' +
        '<div class="fld"><label class="lbl" for="up-date">\u0c24\u0c47\u0c26\u0c40 (\u0c10\u0c1a\u0c4d\u0c1b\u0c3f\u0c15\u0c02)</label><input id="up-date" class="inp" type="text" inputmode="numeric" placeholder="DD.MM.YYYY" value=""></div>' +
        '<p class="note">\u0c17\u0c21\u0c3f, \u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32\u0c41 \u0c35\u0c47\u0c30\u0c4d\u0c35\u0c47\u0c30\u0c41 \u0c2b\u0c4b\u0c1f\u0c4b\u0c32\u0c41\u0c17\u0c3e \u0c26\u0c17\u0c4d\u0c17\u0c30\u0c17\u0c3e \u0c24\u0c40\u0c38\u0c4d\u0c24\u0c47 \u0c2c\u0c3e\u0c17\u0c3e \u0c1a\u0c26\u0c41\u0c35\u0c41\u0c24\u0c41\u0c02\u0c26\u0c3f. \u0c12\u0c15\u0c4d\u0c15\u0c4b \u0c1a\u0c26\u0c41\u0c35\u0c41\u0c15\u0c41 \u0c2e\u0c40 Claude \u0c35\u0c3f\u0c28\u0c3f\u0c2f\u0c4b\u0c17\u0c02 \u0c16\u0c30\u0c4d\u0c1a\u0c35\u0c41\u0c24\u0c41\u0c02\u0c26\u0c3f. \u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d\u200c\u0c32\u0c4b \u0c35\u0c47\u0c2f\u0c3e\u0c32\u0c02\u0c1f\u0c47: \u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d \u0c38\u0c30\u0c3f\u0c1a\u0c42\u0c38\u0c3f \u201c\u0c35\u0c46\u0c2c\u0c4d\u200c\u0c38\u0c48\u0c1f\u0c4d \u0c15\u0c4b\u0c38\u0c02 \u0c15\u0c3e\u0c2a\u0c40\u201d \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c3f, \u0c35\u0c46\u0c2c\u0c4d\u200c\u0c38\u0c48\u0c1f\u0c4d \u0c28\u0c3f\u0c30\u0c4d\u0c35\u0c3e\u0c39\u0c23\u0c32\u0c4b \u201cClaude \u0c28\u0c41\u0c02\u0c1a\u0c3f\u201d \u0c2a\u0c46\u0c1f\u0c4d\u0c1f\u0c46\u0c32\u0c4b \u0c05\u0c24\u0c3f\u0c15\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f.</p>' +
        '<div class="btnrow"><button class="wide-btn pri" data-act="ai-read"' + (busy ? ' disabled' : '') + '>Claude \u0c24\u0c4b \u0c1a\u0c26\u0c3f\u0c35\u0c3f \u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d \u0c1a\u0c47\u0c2f\u0c02\u0c21\u0c3f</button><button class="wide-btn ter" data-act="blank"' + (busy ? ' disabled' : '') + '>\u0c16\u0c3e\u0c33\u0c40 \u0c17\u0c21\u0c3f\u0c24\u0c4b \u0c2e\u0c4a\u0c26\u0c32\u0c41\u0c2a\u0c46\u0c1f\u0c4d\u0c1f\u0c02\u0c21\u0c3f</button></div>' +
        (D ? '<a class="wide-btn sec" href="#edit">\u0c24\u0c46\u0c30\u0c3f\u0c1a\u0c3f \u0c09\u0c28\u0c4d\u0c28 \u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d \u0c15\u0c4a\u0c28\u0c38\u0c3e\u0c17\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f \u00b7 ' + esc(draftLabel(D)) + '</a>' : '') + keptDraftsHTML() + (IS_CLAUDE ? '' : '<button class="wide-btn ter" data-act="go-posts">' + I.pen + ' \u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c3f\u0c02\u0c1a\u0c3f\u0c28 \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d \u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c02\u0c21\u0c3f</button>') +
      '</div></section>' : '') +
      '<section class="sec"><h2 class="sec-h">' + (IS_CLAUDE ? '\u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d \u0c28\u0c41\u0c02\u0c1a\u0c3f \u0c26\u0c3f\u0c17\u0c41\u0c2e\u0c24\u0c3f' : '\u0c2b\u0c48\u0c32\u0c4d \u0c28\u0c41\u0c02\u0c1a\u0c3f \u0c26\u0c3f\u0c17\u0c41\u0c2e\u0c24\u0c3f') + '</h2><div class="box">' +
        (!IS_CLAUDE ? '<p class="note">Claude \u0c38\u0c4d\u0c1f\u0c42\u0c21\u0c3f\u0c2f\u0c4b \u0c28\u0c41\u0c02\u0c1a\u0c3f \u0c38\u0c47\u0c35\u0c4d \u0c1a\u0c47\u0c38\u0c3f\u0c28 puzzles.json, \u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d \u0c2b\u0c40\u0c21\u0c4d \u0c32\u0c47\u0c26\u0c3e \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d \u0c2a\u0c47\u0c1c\u0c40 \u0c07\u0c35\u0c4d\u0c35\u0c02\u0c21\u0c3f. \u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c41\u0c32\u0c41 \u0c38\u0c48\u0c1f\u0c4d\u200c\u0c32\u0c4b \u0c24\u0c3e\u0c28\u0c41\u0c17\u0c3e \u0c35\u0c38\u0c4d\u0c24\u0c3e\u0c2f\u0c3f \u2014 \u0c35\u0c3e\u0c1f\u0c3f\u0c28\u0c3f \u0c38\u0c30\u0c3f\u0c26\u0c3f\u0c26\u0c4d\u0c26\u0c3e\u0c32\u0c02\u0c1f\u0c47 \u0c15\u0c3f\u0c02\u0c26\u0c3f \u0c1c\u0c3e\u0c2c\u0c3f\u0c24\u0c3e\u0c32\u0c4b \u201c\u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c41\u201d \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c02\u0c21\u0c3f.</p>' : '') +
        '<ol class="steps"><li>\u0c15\u0c02\u0c2a\u0c4d\u0c2f\u0c42\u0c1f\u0c30\u0c4d\u200c\u0c32\u0c4b \u0c08 \u0c2b\u0c40\u0c21\u0c4d \u0c32\u0c3f\u0c02\u0c15\u0c4d \u0c24\u0c46\u0c30\u0c35\u0c02\u0c21\u0c3f.</li><li>Ctrl+S \u0c24\u0c4b \u0c2b\u0c48\u0c32\u0c4d\u200c\u0c17\u0c3e \u0c38\u0c47\u0c35\u0c4d \u0c1a\u0c47\u0c2f\u0c02\u0c21\u0c3f (\u0c32\u0c47\u0c26\u0c3e Ctrl+A, Ctrl+C \u0c24\u0c4b \u0c15\u0c3e\u0c2a\u0c40 \u0c1a\u0c47\u0c2f\u0c02\u0c21\u0c3f).</li><li>\u0c06 \u0c2b\u0c48\u0c32\u0c4d \u0c07\u0c15\u0c4d\u0c15\u0c21 \u0c0e\u0c02\u0c1a\u0c41\u0c15\u0c4b\u0c02\u0c21\u0c3f, \u0c32\u0c47\u0c26\u0c3e \u0c15\u0c3f\u0c02\u0c26\u0c3f \u0c2a\u0c46\u0c1f\u0c4d\u0c1f\u0c46\u0c32\u0c4b \u0c05\u0c24\u0c3f\u0c15\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f.</li></ol>' +
        '<div class="copyline"><code id="feed-url">' + esc(FEED) + '</code><button class="smallbtn" data-act="copy-feed">\u0c15\u0c3e\u0c2a\u0c40</button></div>' +
        '<a href="' + esc(FEED) + '" target="_blank" rel="noopener" style="font-size:14px;font-weight:600">\u0c2b\u0c40\u0c21\u0c4d \u0c32\u0c3f\u0c02\u0c15\u0c4d \u0c24\u0c46\u0c30\u0c35\u0c02\u0c21\u0c3f</a>' +
        '<div class="file"><label class="lbl" for="imp-files">\u0c2b\u0c40\u0c21\u0c4d (.json), Blogger \u0c2c\u0c4d\u0c2f\u0c3e\u0c15\u0c2a\u0c4d (.xml) \u0c32\u0c47\u0c26\u0c3e \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d \u0c2a\u0c47\u0c1c\u0c40\u0c32\u0c41 (.html)</label><input id="imp-files" type="file" accept=".json,.xml,.html,.htm,.txt,application/json,text/xml,text/html" multiple></div>' +
        '<div class="fld"><label class="lbl" for="imp-paste">\u0c32\u0c47\u0c26\u0c3e \u0c07\u0c15\u0c4d\u0c15\u0c21 \u0c05\u0c24\u0c3f\u0c15\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f</label><textarea id="imp-paste" class="inp" placeholder="{&quot;version&quot;:&quot;1.0&quot;, &quot;feed&quot;: \u2026"></textarea><button class="wide-btn ter" data-act="imp-read"' + (busy ? ' disabled' : '') + '>\u0c05\u0c24\u0c3f\u0c15\u0c3f\u0c02\u0c1a\u0c3f\u0c28\u0c26\u0c3f \u0c1a\u0c26\u0c35\u0c02\u0c21\u0c3f</button></div>' +
        imp +
      '</div></section>' +
      '<section class="sec"><h2 class="sec-h">\u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c3f\u0c02\u0c1a\u0c3f\u0c28 \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c41\u0c32\u0c41 \u00b7 ' + PUZZLES.length + '</h2><div class="box" style="gap:0;padding-block:6px">' + (mgr || '<p class="note" style="padding:10px 0">\u0c07\u0c02\u0c15\u0c3e \u0c0f \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c42 \u0c32\u0c47\u0c26\u0c41.</p>') + '</div></section>' +
      (!IS_CLAUDE ? '<section class="sec"><h2 class="sec-h">\u0c28\u0c3f\u0c30\u0c4d\u0c35\u0c3e\u0c39\u0c23</h2><div class="box"><p class="note">\u0c07\u0c15\u0c4d\u0c15\u0c21 \u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c3f\u0c02\u0c1a\u0c3f\u0c28\u0c35\u0c3f \u0c28\u0c47\u0c30\u0c41\u0c17\u0c3e GitHub \u0c32\u0c4b\u0c28\u0c3f puzzles.json \u0c32\u0c4b\u0c15\u0c3f \u0c35\u0c46\u0c33\u0c4d\u0c24\u0c3e\u0c2f\u0c3f.</p><button class="wide-btn ter" data-act="gh-logout">\u0c08 \u0c2a\u0c30\u0c3f\u0c15\u0c30\u0c02\u0c32\u0c4b \u0c28\u0c3f\u0c30\u0c4d\u0c35\u0c3e\u0c39\u0c23 \u0c28\u0c41\u0c02\u0c1a\u0c3f \u0c2c\u0c2f\u0c1f\u0c15\u0c41</button></div></section>' : '') +
      (!IS_CLAUDE ? '' : '<section class="sec"><h2 class="sec-h">\u0c2e\u0c40 \u0c35\u0c46\u0c2c\u0c4d\u200c\u0c38\u0c48\u0c1f\u0c4d\u200c\u0c15\u0c41 \u0c2a\u0c02\u0c2a\u0c21\u0c02</h2><div class="box"><p class="bignote">\u0c35\u0c46\u0c2c\u0c4d\u200c\u0c38\u0c48\u0c1f\u0c4d \u0c2f\u0c3e\u0c2a\u0c4d \u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c41\u0c32\u0c28\u0c41 \u0c24\u0c3e\u0c28\u0c41\u0c17\u0c3e \u0c1a\u0c26\u0c41\u0c35\u0c41\u0c24\u0c41\u0c02\u0c26\u0c3f. \u0c07\u0c15\u0c4d\u0c15\u0c21 \u0c05\u0c2a\u0c4d\u200c\u0c32\u0c4b\u0c21\u0c4d \u0c1a\u0c47\u0c38\u0c3f\u0c28\u0c35\u0c3f, \u0c38\u0c30\u0c3f\u0c26\u0c3f\u0c26\u0c4d\u0c26\u0c3f\u0c28\u0c35\u0c3f \u0c05\u0c15\u0c4d\u0c15\u0c21 \u0c15\u0c28\u0c3f\u0c2a\u0c3f\u0c02\u0c1a\u0c3e\u0c32\u0c02\u0c1f\u0c47 \u0c08 \u0c2b\u0c48\u0c32\u0c4d \u0c38\u0c47\u0c35\u0c4d \u0c1a\u0c47\u0c38\u0c3f, \u0c38\u0c48\u0c1f\u0c4d\u200c\u0c32\u0c4b\u0c28\u0c3f \u0c2a\u0c3e\u0c24 puzzles.json \u0c38\u0c4d\u0c25\u0c3e\u0c28\u0c02\u0c32\u0c4b \u0c2a\u0c46\u0c1f\u0c4d\u0c1f\u0c02\u0c21\u0c3f.</p><button class="wide-btn ter" data-act="export"' + (busy || !PUZZLES.length ? ' disabled' : '') + '>puzzles.json \u0c38\u0c47\u0c35\u0c4d \u0c1a\u0c47\u0c2f\u0c02\u0c21\u0c3f</button></div></section>') +
      '<p class="note">\u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c3f\u0c02\u0c1a\u0c3f\u0c28 \u0c2e\u0c3e\u0c30\u0c4d\u0c2a\u0c41\u0c32\u0c41 \u0c08 \u0c2f\u0c3e\u0c2a\u0c4d \u0c24\u0c46\u0c30\u0c3f\u0c1a\u0c3f\u0c28 \u0c05\u0c02\u0c26\u0c30\u0c3f\u0c15\u0c40 \u0c35\u0c46\u0c02\u0c1f\u0c28\u0c47 \u0c15\u0c28\u0c3f\u0c2a\u0c3f\u0c38\u0c4d\u0c24\u0c3e\u0c2f\u0c3f. \u0c08\u0c28\u0c3e\u0c21\u0c41 \u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02 \u0c39\u0c15\u0c4d\u0c15\u0c41\u0c32\u0c41 \u0c08\u0c28\u0c3e\u0c21\u0c41\u0c35\u0c3f \u2014 \u0c2a\u0c2c\u0c4d\u0c32\u0c3f\u0c15\u0c4d\u200c\u0c17\u0c3e \u0c2a\u0c02\u0c1a\u0c47 \u0c2e\u0c41\u0c02\u0c26\u0c41 \u0c05\u0c28\u0c41\u0c2e\u0c24\u0c3f \u0c38\u0c02\u0c17\u0c24\u0c3f \u0c1a\u0c42\u0c38\u0c41\u0c15\u0c4b\u0c02\u0c21\u0c3f.</p>' +
    '</div>';
  }
  // after a change typed in place (no full redraw): the checks box and whether the publish buttons may be pressed
  function refreshChecks() {
    var ck = document.getElementById('checks'); if (!ck || !D) return;
    ck.innerHTML = draftChecks();
    var off = !!U.busy || blogBlockers(draftToPuzzle(D, false)).length > 0;
    view.querySelectorAll('[data-act="update-blog"], [data-act="publish-blog"]:not([data-v])').forEach(function (b) { b.disabled = off; });
    var bn = view.querySelector('.blocknote'); if (bn) bn.hidden = !off;
  }
  function draftChecks() {
    var p = draftToPuzzle(D, true), m = model(p), out = [];
    // what still stops it going to the blog (all of it is checked again when publishing)
    blogBlockers(draftToPuzzle(D, false)).forEach(function (x) { out.push('\u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c23\u0c15\u0c41 \u0c2e\u0c41\u0c02\u0c26\u0c41: ' + x); });
    m.problems.forEach(function (x) { if (!/\u0c2a\u0c4a\u0c21\u0c35\u0c41|\u0c0f \u0c06\u0c27\u0c3e\u0c30\u0c02\u0c32\u0c4b\u0c28\u0c42 \u0c32\u0c47\u0c35\u0c41/.test(x)) out.push(x); });
    var info = m.whites + ' \u0c24\u0c46\u0c32\u0c4d\u0c32 \u0c17\u0c21\u0c41\u0c32\u0c41 \u00b7 \u0c05\u0c21\u0c4d\u0c21\u0c02 ' + m.order.A.length + ' \u00b7 \u0c28\u0c3f\u0c32\u0c41\u0c35\u0c41 ' + m.order.D.length + ' \u00b7 ' + (m.hasAns ? '\u0c05\u0c28\u0c4d\u0c28\u0c3f \u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32\u0c42 \u0c09\u0c28\u0c4d\u0c28\u0c3e\u0c2f\u0c3f' : '\u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32\u0c41 \u0c32\u0c47\u0c28\u0c3f \u0c17\u0c21\u0c41\u0c32\u0c41 ' + m.missingAns);
    return '<div class="status ' + (out.length ? '' : 'ok') + '"><span>' + esc(info) + '</span>' + (out.length ? '<ul class="problems">' + out.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' : '<span>\u0c38\u0c2e\u0c38\u0c4d\u0c2f\u0c32\u0c47\u0c2e\u0c40 \u0c15\u0c28\u0c3f\u0c2a\u0c3f\u0c02\u0c1a\u0c32\u0c47\u0c26\u0c41.</span>') + '</div>';
  }
  // answers as a sheet: every open square is a box to type in directly, under the paper's own answers grid
  // the post's two pictures: the black squares' picture and the congratulation picture
  function picGallery(kind) {
    var seen = {}, out = [];
    sorted().forEach(function (p) { var u = kind === 'blk' ? p.blk : p.fin; if (u && !seen[u]) { seen[u] = 1; out.push(u); } });
    (S.myPics || []).forEach(function (x) { if (x.kind === kind && !seen[x.url]) { seen[x.url] = 1; out.unshift(x.url); } });
    return out.slice(0, 16);
  }
  function picsHTML() {
    var rows = [['blk', '\u0c28\u0c32\u0c41\u0c2a\u0c41 \u0c17\u0c21\u0c41\u0c32 \u0c2c\u0c4a\u0c2e\u0c4d\u0c2e', '\u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d\u200c\u0c32\u0c4b\u0c28\u0c3f \u0c2a\u0c4d\u0c30\u0c24\u0c3f \u0c28\u0c32\u0c41\u0c2a\u0c41 \u0c17\u0c21\u0c3f\u0c32\u0c4b \u0c15\u0c28\u0c3f\u0c2a\u0c3f\u0c38\u0c4d\u0c24\u0c41\u0c02\u0c26\u0c3f.'], ['fin', '\u0c05\u0c2d\u0c3f\u0c28\u0c02\u0c26\u0c28\u0c32 \u0c2c\u0c4a\u0c2e\u0c4d\u0c2e', '\u0c2a\u0c42\u0c30\u0c4d\u0c24\u0c3f \u0c1a\u0c47\u0c38\u0c3f\u0c28\u0c2a\u0c4d\u0c2a\u0c41\u0c21\u0c41 \u0c35\u0c1a\u0c4d\u0c1a\u0c47\u0c26\u0c3f.']];
    return '<section class="sec"><h2 class="sec-h">\u0c2c\u0c4a\u0c2e\u0c4d\u0c2e\u0c32\u0c41 (GIF)</h2><div class="box pics">' + rows.map(function (rw) {
      var k = rw[0], chosen = k === 'blk' ? D.blkImg : D.finImg, cur = chosen || (k === 'blk' ? D.curBlk : D.curFin) || '', open = U.picOpen === k, gal = open ? picGallery(k) : [];
      return '<div class="picrow"><div class="pichead"><span class="picnow">' + (cur ? '<img src="' + esc(cur) + '" alt="">' : '<i>\u0c24\u0c3e\u0c1c\u0c3e \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d\u200c\u0c32\u0c4b\u0c26\u0c3f</i>') + '</span><div class="t"><b>' + rw[1] + '</b><small>' + rw[2] + ' ' + (chosen ? '\u0c2e\u0c40\u0c30\u0c41 \u0c0e\u0c02\u0c1a\u0c41\u0c15\u0c41\u0c28\u0c4d\u0c28\u0c26\u0c3f.' : D.postId ? '\u0c08 \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d\u200c\u0c32\u0c4b \u0c07\u0c2a\u0c4d\u0c2a\u0c41\u0c21\u0c41\u0c28\u0c4d\u0c28\u0c26\u0c3f.' : '\u0c0e\u0c02\u0c1a\u0c41\u0c15\u0c4b\u0c15\u0c2a\u0c4b\u0c24\u0c47 \u0c24\u0c3e\u0c1c\u0c3e \u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d\u200c\u0c32\u0c4b\u0c26\u0c47.') + '</small></div></div>' +
        '<div class="btnrow"><button class="smallbtn" data-act="pic-open" data-v="' + k + '" aria-expanded="' + open + '">' + (open ? '\u0c2e\u0c42\u0c38\u0c3f\u0c35\u0c47\u0c2f\u0c3f' : '\u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c02\u0c21\u0c3f') + '</button>' + (chosen ? '<button class="smallbtn" data-act="pic-reset" data-v="' + k + '">\u0c2e\u0c4a\u0c26\u0c1f\u0c3f\u0c26\u0c47 \u0c09\u0c02\u0c1a\u0c02\u0c21\u0c3f</button>' : '') + '</div>' +
        (open ? '<div class="picpick">' +
          (gal.length ? '<p class="lbl">\u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d\u200c\u0c32\u0c4b \u0c35\u0c3e\u0c21\u0c3f\u0c28 \u0c2c\u0c4a\u0c2e\u0c4d\u0c2e\u0c32\u0c41 \u2014 \u0c12\u0c15\u0c1f\u0c3f \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c02\u0c21\u0c3f</p><div class="picgal">' + gal.map(function (u) { return '<button class="picbtn" data-act="pic-use" data-k="' + k + '" data-u="' + esc(u) + '" aria-pressed="' + (u === cur) + '"><img src="' + esc(u) + '" alt="" loading="lazy"></button>'; }).join('') + '</div>' : '') +
          (IS_CLAUDE ? '' : '<label class="wide-btn ter" for="pic-file-' + k + '" style="cursor:pointer">\u0c2b\u0c4b\u0c28\u0c4d / \u0c15\u0c02\u0c2a\u0c4d\u0c2f\u0c42\u0c1f\u0c30\u0c4d \u0c28\u0c41\u0c02\u0c1a\u0c3f GIF \u0c0e\u0c02\u0c1a\u0c41\u0c15\u0c4b\u0c02\u0c21\u0c3f</label><input id="pic-file-' + k + '" data-pick="' + k + '" type="file" accept="image/gif,image/png,image/jpeg,image/webp" style="position:absolute;width:1px;height:1px;opacity:0">' +
            '<p class="note">\u0c0e\u0c02\u0c1a\u0c41\u0c15\u0c41\u0c28\u0c4d\u0c28 \u0c2c\u0c4a\u0c2e\u0c4d\u0c2e \u0c2e\u0c40 Google Drive \u0c32\u0c4b \u201ce-padavinodam-\u2026\u201d \u0c2a\u0c47\u0c30\u0c41\u0c24\u0c4b \u0c09\u0c02\u0c1f\u0c41\u0c02\u0c26\u0c3f (\u0c32\u0c3f\u0c02\u0c15\u0c4d \u0c09\u0c28\u0c4d\u0c28\u0c35\u0c3e\u0c30\u0c41 \u0c1a\u0c42\u0c21\u0c17\u0c32\u0c3f\u0c17\u0c47\u0c32\u0c3e); \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d \u0c26\u0c3e\u0c28\u0c4d\u0c28\u0c3f \u0c05\u0c15\u0c4d\u0c15\u0c21\u0c3f \u0c28\u0c41\u0c02\u0c1a\u0c3f \u0c1a\u0c42\u0c2a\u0c3f\u0c38\u0c4d\u0c24\u0c41\u0c02\u0c26\u0c3f.</p>') +
          '<div class="fld"><label class="lbl" for="pic-url-' + k + '">\u0c32\u0c47\u0c26\u0c3e \u0c2c\u0c4a\u0c2e\u0c4d\u0c2e \u0c32\u0c3f\u0c02\u0c15\u0c4d (https://\u2026gif)</label><div class="btnrow"><input id="pic-url-' + k + '" class="inp" type="url" inputmode="url" placeholder="https://\u2026"><button class="smallbtn" data-act="pic-link" data-v="' + k + '">\u0c35\u0c3e\u0c21\u0c02\u0c21\u0c3f</button></div></div>' +
        '</div>' : '') + '</div>';
    }).join('') + '</div></section>';
  }
  function sheetHTML(p) {
    var low = D.low || {}, chg = D.chg || {}, out = '';
    for (var r = 0; r < D.R; r++) for (var c = 0; c < D.C; c++) {
      var k = key(r, c), n = p.nums[k] || '';
      if (D.black[r][c]) { out += '<span class="ecell b" aria-hidden="true"></span>'; continue; }
      out += '<label class="scell' + (low[k] ? ' low' : '') + (chg[k] ? ' chg' : '') + '">' + (n ? '<i>' + n + '</i>' : '') +
        '<input data-sr="' + r + '" data-sc="' + c + '" value="' + esc(D.ans[r][c] || '') + '" enterkeyhint="next" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" aria-label="' + esc('\u0c35\u0c30\u0c41\u0c38 ' + (r + 1) + ', \u0c28\u0c3f\u0c32\u0c41\u0c35\u0c41 ' + (c + 1) + (n ? ' \u00b7 \u0c38\u0c02\u0c16\u0c4d\u0c2f ' + n : '')) + '"></label>';
    }
    var nLow = Object.keys(low).length;
    return (U.ansGrid ? '<figure class="papergrid"><img src="' + U.ansGrid + '" alt="\u0c2a\u0c47\u0c2a\u0c30\u0c4d\u200c\u0c32\u0c4b\u0c28\u0c3f \u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32 \u0c17\u0c21\u0c3f"><figcaption>\u0c2a\u0c47\u0c2a\u0c30\u0c4d\u200c\u0c32\u0c4b\u0c28\u0c3f \u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32 \u0c17\u0c21\u0c3f \u2014 \u0c15\u0c3f\u0c02\u0c26\u0c3f \u0c2a\u0c1f\u0c4d\u0c1f\u0c3f\u0c15\u0c24\u0c4b \u0c17\u0c21\u0c3f \u0c17\u0c21\u0c3f \u0c2a\u0c4b\u0c32\u0c4d\u0c1a\u0c02\u0c21\u0c3f</figcaption></figure>'
        : '<p class="note">\u0c2a\u0c47\u0c2a\u0c30\u0c4d\u200c\u0c32\u0c4b\u0c28\u0c3f \u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32 \u0c17\u0c21\u0c3f \u0c2c\u0c4a\u0c2e\u0c4d\u0c2e \u0c07\u0c15\u0c4d\u0c15\u0c21\u0c47 \u0c1a\u0c42\u0c2a\u0c3e\u0c32\u0c02\u0c1f\u0c47 \u0c2a\u0c48\u0c28 \u201c\u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32\u0c41\u201d \u0c15\u0c3e\u0c30\u0c4d\u0c21\u0c4d\u200c\u0c32\u0c4b \u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32 \u0c2b\u0c48\u0c32\u0c4d (\u0c2e\u0c33\u0c4d\u0c33\u0c40) \u0c07\u0c35\u0c4d\u0c35\u0c02\u0c21\u0c3f.</p>') +
      '<div class="btnrow"><button class="wide-btn ter" data-act="eflip">' + I.swap + ' \u0c26\u0c3f\u0c36: ' + dirName(U.edir) + '</button></div>' +
      '<p class="note">\u0c17\u0c21\u0c3f\u0c28\u0c3f \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c3f \u0c07\u0c02\u0c17\u0c4d\u0c32\u0c40\u0c37\u0c4d\u200c\u0c32\u0c4b \u0c1f\u0c48\u0c2a\u0c4d \u0c1a\u0c47\u0c2f\u0c02\u0c21\u0c3f (<b>ka</b> \u2192 \u0c15, <b>kSha</b> \u2192 \u0c15\u0c4d\u0c37, <b>rru</b> \u2192 \u0c0b) \u2014 \u0c24\u0c46\u0c32\u0c41\u0c17\u0c41\u0c17\u0c3e \u0c2e\u0c3e\u0c30\u0c41\u0c24\u0c41\u0c02\u0c26\u0c3f; \u0c06 \u0c17\u0c21\u0c3f\u0c15\u0c3f \u0c38\u0c30\u0c3f\u0c2a\u0c21\u0c47 \u0c24\u0c46\u0c32\u0c41\u0c17\u0c41 \u0c05\u0c15\u0c4d\u0c37\u0c30\u0c3e\u0c32\u0c41 (\u0c32 \u0c33 \u0c32\u0c3e \u0c33\u0c3e \u0c32\u0c02 \u2026) \u0c15\u0c3f\u0c02\u0c26 \u0c1c\u0c3e\u0c2c\u0c3f\u0c24\u0c3e\u0c32\u0c4b \u0c35\u0c38\u0c4d\u0c24\u0c3e\u0c2f\u0c3f: <b>\u2191 \u2193</b> \u0c24\u0c4b \u0c0e\u0c02\u0c1a\u0c41\u0c15\u0c41\u0c28\u0c3f <b>Enter</b> (\u0c32\u0c47\u0c26\u0c3e \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c02\u0c21\u0c3f / 1\u20139). \u0c05\u0c15\u0c4d\u0c37\u0c30\u0c02 \u0c2a\u0c21\u0c17\u0c3e\u0c28\u0c47 ' + (U.edir === 'D' ? '\u0c15\u0c3f\u0c02\u0c26\u0c3f' : '\u0c2a\u0c15\u0c4d\u0c15') + ' \u0c17\u0c21\u0c3f\u0c15\u0c3f \u0c35\u0c46\u0c33\u0c4d\u0c24\u0c41\u0c02\u0c26\u0c3f (\u0c26\u0c3f\u0c36 \u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c35\u0c1a\u0c4d\u0c1a\u0c41). \u0c16\u0c3e\u0c33\u0c40 \u0c17\u0c21\u0c3f\u0c32\u0c4b \u232b \u2192 \u0c35\u0c46\u0c28\u0c15\u0c1f\u0c3f \u0c17\u0c21\u0c3f. \u0c07\u0c02\u0c15\u0c3e \u0c1f\u0c48\u0c2a\u0c4d \u0c1a\u0c47\u0c2f\u0c28\u0c3f \u0c17\u0c21\u0c3f\u0c32\u0c4b \u0c2c\u0c3e\u0c23\u0c02 \u0c15\u0c40\u0c32\u0c41 \u0c17\u0c21\u0c41\u0c32 \u0c2e\u0c27\u0c4d\u0c2f \u0c15\u0c26\u0c41\u0c2a\u0c41\u0c24\u0c3e\u0c2f\u0c3f. \u0c2b\u0c4b\u0c28\u0c4d \u0c24\u0c46\u0c32\u0c41\u0c17\u0c41 \u0c15\u0c40\u0c2c\u0c4b\u0c30\u0c4d\u0c21\u0c4d\u200c\u0c24\u0c4b \u0c15\u0c42\u0c21\u0c3e \u0c1f\u0c48\u0c2a\u0c4d \u0c1a\u0c47\u0c2f\u0c35\u0c1a\u0c4d\u0c1a\u0c41. ' +
      (nLow ? '<b class="lowkey">\u0c2a\u0c38\u0c41\u0c2a\u0c41</b> \u0c17\u0c21\u0c41\u0c32\u0c41 (' + nLow + '): \u0c2b\u0c4b\u0c28\u0c4d \u0c38\u0c02\u0c26\u0c47\u0c39\u0c02\u0c17\u0c3e \u0c1a\u0c26\u0c3f\u0c35\u0c3f\u0c28\u0c35\u0c3f \u2014 \u0c2e\u0c41\u0c02\u0c26\u0c41 \u0c35\u0c3e\u0c1f\u0c3f\u0c28\u0c3f \u0c1a\u0c42\u0c21\u0c02\u0c21\u0c3f. ' : '') + '<b class="chgkey">\u0c06\u0c15\u0c41\u0c2a\u0c1a\u0c4d\u0c1a</b>: \u0c2e\u0c40\u0c30\u0c41 \u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f\u0c28\u0c35\u0c3f.</p>' +
      '<div class="egrid sheet" style="--n:' + D.C + '">' + out + '</div>';
  }
  function sheetCommit(t) {
    var r = +t.getAttribute('data-sr'), c = +t.getAttribute('data-sc'), v = t.value.replace(/\s+/g, ''), old = t.getAttribute('data-old') || '';
    // like a spreadsheet, typing replaces what was there: if the new letters landed after the old one, drop the old one
    // (but a vowel sign added to it \u2014 \u0c30 + \u0c3e \u2192 \u0c30\u0c3e \u2014 is an edit of that letter and stays)
    if (old && v.length > old.length && v.indexOf(old) === 0 && /^[\u0c05-\u0c39A-Za-z]/.test(v.slice(old.length))) { v = v.slice(old.length); t.value = v; }
    if (/[A-Za-z]/.test(v)) { v = convertLatin(v).replace(/\s+/g, ''); t.value = v; }
    v = v.normalize('NFC');
    if ((D.ans[r][c] || '') === v) return;
    D.ans[r][c] = v; t.setAttribute('data-old', v); var k = key(r, c);
    if (D.low) delete D.low[k]; D.chg = D.chg || {}; D.chg[k] = 1;
    var lab = t.parentNode; if (lab) { lab.classList.remove('low'); lab.classList.add('chg'); }
    saveDraft();
    refreshChecks();
  }
  // English in a square: every Telugu letter it could be (short/long vowel, \u0c1f/\u0c24, \u0c32/\u0c33, \u0c02 \u2026), one tap puts it in
  var VLEN = { a: 'aa', aa: 'a', A: 'a', i: 'ee', ee: 'i', ii: 'i', I: 'i', u: 'oo', oo: 'u', uu: 'u', U: 'u', e: 'E', ae: 'e', E: 'e', o: 'O', oa: 'o', O: 'o', ai: 'a', au: 'o', ou: 'o' };
  var GUNI = ['a', 'aa', 'i', 'ee', 'u', 'oo', 'e', 'E', 'ai', 'o', 'O', 'au', 'am'];
  function letterOpts(lat) {
    lat = String(lat || '').replace(/[^A-Za-z]/g, ''); if (!lat) return [];
    var srcs = [lat], m = /^(.*?)(aa|ae|ai|au|ou|ee|ii|oo|uu|oa|[aAiIuUeEoO])$/.exec(lat), out = [], seen = {};
    if (m) { if (VLEN[m[2]]) srcs.push(m[1] + VLEN[m[2]]); srcs.push(lat + 'm'); }
    else if (/[a-zA-Z]$/.test(lat) && !/[aeiouAEIOU]/.test(lat)) GUNI.forEach(function (g) { srcs.push(lat + g); });   // only consonants so far: the whole \u0c17\u0c41\u0c23\u0c3f\u0c02\u0c24\u0c02
    else if (/m$/.test(lat)) srcs.push(lat.slice(0, -1));
    srcs.forEach(function (x) { TL.convert(x).forEach(function (a) { var w = a.join(''); if (!seen[w] && a.length === 1) { seen[w] = 1; out.push(w); } }); });
    srcs.forEach(function (x) { TL.convert(x).forEach(function (a) { var w = a.join(''); if (!seen[w]) { seen[w] = 1; out.push(w); } }); });
    return out.slice(0, 18);
  }
  // Telugu typed straight in: the same letter with every vowel sign (\u0c17\u0c41\u0c23\u0c3f\u0c02\u0c24\u0c02), with \u0c02, its look-alike / sound-alike letters and its \u0c12\u0c24\u0c4d\u0c24\u0c41
  var TSIGNS = ['', '\u0c3e', '\u0c3f', '\u0c40', '\u0c41', '\u0c42', '\u0c43', '\u0c46', '\u0c47', '\u0c48', '\u0c4a', '\u0c4b', '\u0c4c'];
  var TKIN = { '\u0c15': '\u0c16\u0c17', '\u0c16': '\u0c15', '\u0c17': '\u0c18\u0c30\u0c15', '\u0c18': '\u0c17', '\u0c1a': '\u0c1b', '\u0c1b': '\u0c1a', '\u0c1c': '\u0c1d', '\u0c1d': '\u0c1c', '\u0c1f': '\u0c20\u0c24', '\u0c20': '\u0c1f\u0c25\u0c33', '\u0c21': '\u0c22\u0c26', '\u0c22': '\u0c21\u0c27', '\u0c24': '\u0c25\u0c1f', '\u0c25': '\u0c24\u0c20', '\u0c26': '\u0c27\u0c21', '\u0c27': '\u0c26\u0c22', '\u0c28': '\u0c23\u0c38', '\u0c23': '\u0c28', '\u0c2a': '\u0c2b', '\u0c2b': '\u0c2a', '\u0c2c': '\u0c2d\u0c35', '\u0c2d': '\u0c2c', '\u0c35': '\u0c2c', '\u0c32': '\u0c33', '\u0c33': '\u0c32\u0c20', '\u0c36': '\u0c37\u0c38', '\u0c37': '\u0c36\u0c38', '\u0c38': '\u0c36\u0c37\u0c28', '\u0c30': '\u0c31\u0c17', '\u0c31': '\u0c30' };
  function teluguOpts(v) {
    var all = (String(v || '').normalize('NFC').match(AKSHARA) || []).filter(function (a) { return /[\u0c00-\u0c7f]/.test(a); }), A = all[all.length - 1];
    if (!A) return [];
    var out = [], seen = {}; function add(x) { x = x.normalize('NFC'); if (x && !seen[x]) { seen[x] = 1; out.push(x); } }
    var m = /^([\u0c15-\u0c39\u0c58-\u0c5a](?:\u0c4d[\u0c15-\u0c39\u0c58-\u0c5a])*)([\u0c3e-\u0c4c\u0c55\u0c56\u0c4d]?)([\u0c00-\u0c03]?)$/.exec(A);
    if (!m) {   // a vowel
      var V = ['\u0c05', '\u0c06', '\u0c07', '\u0c08', '\u0c09', '\u0c0a', '\u0c0b', '\u0c0e', '\u0c0f', '\u0c10', '\u0c12', '\u0c13', '\u0c14'], b0 = A.replace(/[\u0c00-\u0c03]$/, '');
      add(A); if (A === b0) add(b0 + '\u0c02'); V.forEach(function (x) { add(x); }); return out.slice(0, 20);
    }
    var base = m[1], sign = m[2] === '\u0c4d' ? '' : m[2], mod = m[3], last = base.slice(-1);
    add(A); if (!mod) add(base + sign + '\u0c02');
    TSIGNS.forEach(function (sg) { add(base + sg); });
    (TKIN[last] || '').split('').forEach(function (k2) { add(base.slice(0, -1) + k2 + sign + mod); });
    if (base.length === 1) add(base + '\u0c4d' + base + sign + mod);   // \u0c15 \u2192 \u0c15\u0c4d\u0c15
    add(base + '\u0c02'); TSIGNS.slice(1).forEach(function (sg) { add(base + sg + '\u0c02'); });
    return out.slice(0, 24);
  }
  // \u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32\u0c41 fields (clue boxes, title, the fix box): a suggestion strip like a phone keyboard's \u2014 the Telugu words for the English
  // word being typed, or every form of the Telugu letter just before the cursor (also the reader's look-alike mix-ups); a tap swaps it in
  var TE = null;
  function teHide() { var b = document.getElementById('teopts'); if (b) b.remove(); TE = null; }
  function teStrip(el) {
    if (!el || !teField(el) || el.selectionStart == null || el.selectionStart !== el.selectionEnd) { teHide(); return; }
    var pos = el.selectionStart, before = el.value.slice(0, pos), m = before.match(/[A-Za-z]+$/), opts = [], start = pos, word = false, seen = {};
    function add(x) { if (x && !seen[x]) { seen[x] = 1; opts.push(x); } }
    if (m && S.prefs.teType !== false) { word = true; start = pos - m[0].length; TL.convert(m[0]).forEach(function (a) { add(a.join('')); }); predict(opts[0]).forEach(add); letterOpts(m[0]).forEach(function (x) { if (opts.length < 14) add(x); }); }
    else {
      var parts = before.slice(-14).normalize('NFC').match(AKSHARA) || [], last = parts[parts.length - 1] || '';
      if (last && /[\u0c00-\u0c7f]/.test(last) && before.slice(-last.length) === last) { start = pos - last.length; teluguOpts(last).forEach(add); }
    }
    if (opts.length < 2) { teHide(); return; }
    var bar = document.getElementById('teopts');
    if (!bar) { bar = document.createElement('div'); bar.id = 'teopts'; bar.className = 'shopts teopts'; bar.setAttribute('role', 'listbox'); optBar(bar); document.body.appendChild(bar); }
    TE = { el: el, start: start, end: pos, word: word };
    bar.innerHTML = (word ? '<small>' + esc(m[0]) + '</small>' : '') + opts.map(function (o, i) { return '<button type="button" role="option" data-te="' + i + '"' + (i === 0 ? ' class="hi"' : '') + '><span class="no">' + (i + 1) + '</span>' + esc(o) + '</button>'; }).join('');
    bar._opts = opts; bar._hi = 0; bar.scrollTop = 0; placeTe();
  }
  // whole words that begin with what is being typed (\u0c30\u0c3e \u2192 \u0c30\u0c3e\u0c2e\u0c41\u0c21\u0c41, \u0c30\u0c3e\u0c1c\u0c41 \u2026), most used first: the answers already on the blog, and
  // words used in the clues of two or more posts (a jumbled word that is part of one riddle is not offered)
  var WBANK = null, WBANK_N = -1;
  function ansWords(p) {
    var g = p.grid, a = p.ans, out = []; if (!g || !a || !g.length) return out;
    var R = g.length, C = g[0].length;
    function w(r, c) { return r >= 0 && c >= 0 && r < R && c < C && g[r][c] !== '#'; }
    function run(r, c, dr, dc) { var s = ''; while (w(r, c)) { var x = String((a[r] && a[r][c]) || '').trim(); if (!x) return ''; s += x; r += dr; c += dc; } return s; }
    for (var r = 0; r < R; r++) for (var c = 0; c < C; c++) {
      if (!w(r, c)) continue;
      if (!w(r, c - 1) && w(r, c + 1)) out.push(run(r, c, 0, 1));
      if (!w(r - 1, c) && w(r + 1, c)) out.push(run(r, c, 1, 0));
    }
    return out.filter(Boolean);
  }
  function oneLetter(w) { var a = w.match(AKSHARA) || []; return a.every(function (x) { return x === a[0]; }); }
  function predict(pre) {
    if (!pre || pre.length < 1) return [];
    var l = sorted();
    if (!WBANK || WBANK_N !== l.length) {
      var f = {};
      l.forEach(function (p) {
        var seen = {};   // a word counts once a post
        (p.clues || []).forEach(function (c) { (String(c.text || '').normalize('NFC').match(/[\u0c00-\u0c7f]+/g) || []).forEach(function (w) { if (w.length > 2 && !seen[w]) { seen[w] = 1; f[w] = (f[w] || 0) + 1; } }); });
        try { ansWords(p).forEach(function (w) { w = w.normalize('NFC'); if (/^[\u0c00-\u0c7f]{2,}$/.test(w) && seen[w] !== 2 && !oneLetter(w)) { f[w] = (f[w] || 0) + (seen[w] ? 1 : 2); seen[w] = 2; } }); } catch (e) {}
      });
      WBANK = Object.keys(f).filter(function (w) { return f[w] >= 2; }).sort(function (a, b) { return (f[b] - f[a]) || (a.length - b.length); }); WBANK_N = l.length;
    }
    var out = [];
    for (var i = 0; i < WBANK.length && out.length < 5; i++) if (WBANK[i] !== pre && WBANK[i].indexOf(pre) === 0) out.push(WBANK[i]);
    return out;
  }
  // both suggestion lists: the mouse pointing at a row lights it up (as the arrow keys do); taps never take the focus away
  function optBar(bar) {
    bar.addEventListener('pointerdown', function (ev) { ev.preventDefault(); }); bar.addEventListener('mousedown', function (ev) { ev.preventDefault(); });
    bar.addEventListener('mousemove', function (ev) { var b = ev.target.closest && ev.target.closest('button'); if (!b) return; var i = Array.prototype.indexOf.call(bar.querySelectorAll('button'), b); if (i >= 0 && i !== bar._hi) optHi(bar, i, true); });
  }
  // light up row n of a list (the arrow keys go round from the last row to the first)
  function optHi(bar, n, still) {
    var bs = bar.querySelectorAll('button'); if (!bs.length) return;
    n = (n % bs.length + bs.length) % bs.length; bar._hi = n;
    Array.prototype.forEach.call(bs, function (b, i) { b.classList.toggle('hi', i === n); b.setAttribute('aria-selected', i === n ? 'true' : 'false'); });
    if (!still) { var b = bs[n]; if (bar.classList.contains('drop')) { if (b.offsetTop < bar.scrollTop) bar.scrollTop = b.offsetTop - 4; else if (b.offsetTop + b.offsetHeight > bar.scrollTop + bar.clientHeight) bar.scrollTop = b.offsetTop + b.offsetHeight - bar.clientHeight + 4; } else if (b.scrollIntoView) b.scrollIntoView({ block: 'nearest', inline: 'nearest' }); }
  }
  // where the cursor is inside a box (a copy of the box measures the text before it): for putting the list right under the word
  function caretBox(el, idx) {
    var cs = getComputedStyle(el), ta = el.tagName === 'TEXTAREA', d = document.createElement('div'), r = el.getBoundingClientRect();
    ['boxSizing', 'width', 'borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'fontStyle', 'fontVariant', 'fontWeight', 'fontSize', 'fontFamily', 'lineHeight', 'textAlign', 'textTransform', 'textIndent', 'letterSpacing', 'wordSpacing', 'tabSize'].forEach(function (k) { d.style[k] = cs[k]; });
    d.style.position = 'fixed'; d.style.left = '-9999px'; d.style.top = '0'; d.style.visibility = 'hidden'; d.style.height = 'auto'; d.style.borderStyle = 'solid';
    d.style.whiteSpace = ta ? 'pre-wrap' : 'pre'; d.style.overflowWrap = ta ? 'break-word' : 'normal';
    d.textContent = el.value.slice(0, idx);
    var sp = document.createElement('span'); sp.textContent = (el.value.slice(idx).match(/^\S+/) || ['.'])[0]; d.appendChild(sp); document.body.appendChild(d);
    var bl = parseFloat(cs.borderLeftWidth) || 0, bt = parseFloat(cs.borderTopWidth) || 0, lh = parseFloat(cs.lineHeight) || (parseFloat(cs.fontSize) || 16) * 1.5;
    var x = r.left + bl + sp.offsetLeft - el.scrollLeft, y = r.top + bt + sp.offsetTop - el.scrollTop;
    d.remove();
    if (!ta) return { x: x, top: r.top, bottom: r.bottom };
    return { x: x, top: Math.max(r.top, y), bottom: Math.min(r.bottom, y + lh) };
  }
  function placeTe() {
    var bar = document.getElementById('teopts'); if (!bar || !TE || !document.body.contains(TE.el)) { if (bar && TE && !document.body.contains(TE.el)) teHide(); return; }
    var vv = window.visualViewport, kb = !!vv && window.innerHeight - vv.height > 120;
    bar.classList.toggle('kb', kb); bar.classList.toggle('drop', !kb);
    var h = bar.offsetHeight;
    if (kb) { bar.style.top = Math.round(vv.offsetTop + vv.height - h) + 'px'; bar.style.left = Math.round(vv.offsetLeft) + 'px'; bar.style.width = Math.round(vv.width) + 'px'; return; }
    // otherwise a numbered list right under the word, like a computer's Telugu keyboard: \u2191 \u2193 to choose, Enter / Space / 1\u20139 to put it in
    bar.style.width = '';
    var c = caretBox(TE.el, TE.start), w = bar.offsetWidth, top = c.bottom + 3;
    if (top + h > window.innerHeight - 4 && c.top - h - 3 >= 0) top = c.top - h - 3;
    bar.style.top = Math.round(Math.max(0, top)) + 'px'; bar.style.left = Math.round(Math.max(8, Math.min(c.x - 12, window.innerWidth - w - 8))) + 'px';
  }
  function tePick(i, suf) {
    var bar = document.getElementById('teopts'); if (!TE || !bar || !bar._opts || bar._opts[i] == null) return;
    var el = TE.el, o = bar._opts[i] + (suf || ''), word = TE.word || !!suf, s0 = TE.start, e0 = TE.end, v0 = el.value;
    if (word) teHide();
    settleIME(el, function () {
      var v = el.value, start = s0, end = e0;
      if (v !== v0) {   // the keyboard changed the text while finishing its word: find the piece before the cursor again
        var pos = el.selectionStart != null ? el.selectionStart : v.length, before = v.slice(0, pos), m = word ? before.match(/[A-Za-z]+$/) : null;
        if (word && m) { start = pos - m[0].length; end = pos; }
        else if (!word) { var parts = before.slice(-14).normalize('NFC').match(AKSHARA) || [], last = parts[parts.length - 1] || ''; if (last && before.slice(-last.length) === last) { start = pos - last.length; end = pos; } }
      }
      replaceRange(el, start, end, o);
      if (word) teHide(); else teStrip(el);
    });
  }
  document.addEventListener('click', function (ev) { var b = ev.target.closest && ev.target.closest('#teopts button[data-te]'); if (b) { ev.preventDefault(); tePick(+b.getAttribute('data-te')); } });
  if (window.visualViewport) { window.visualViewport.addEventListener('resize', placeTe); window.visualViewport.addEventListener('scroll', placeTe); }
  window.addEventListener('scroll', placeTe, true);
  function sheetOpts(t) {
    var bar = document.getElementById('shopts'), lat = /[A-Za-z]/.test(t.value) ? t.value.replace(/[^A-Za-z]/g, '') : '', opts = lat ? letterOpts(lat) : teluguOpts(t.value);
    if (!opts.length) { if (bar) bar.remove(); U.shIn = null; return; }
    var grid = t.closest('.egrid'), lab = t.parentNode; if (!grid || !lab) return;
    if (!bar) { bar = document.createElement('div'); bar.id = 'shopts'; bar.className = 'shopts'; bar.setAttribute('role', 'listbox'); optBar(bar); }
    if (bar.parentNode !== grid) grid.appendChild(bar);
    U.shIn = t;
    bar.innerHTML = (lat ? '<small>' + esc(lat) + '</small>' : '') + opts.map(function (o, i) { return '<button type="button" role="option" data-act="sh-opt" data-v="' + esc(o) + '"' + (i === 0 ? ' class="hi"' : '') + '><span class="no">' + (i + 1) + '</span>' + esc(o) + '</button>'; }).join('');
    bar._opts = opts; bar._hi = 0; bar.scrollTop = 0;
    placeOpts();
  }
  // like a phone keyboard's suggestion strip: right above the keyboard when it is open, otherwise just under the square
  function placeOpts() {
    var bar = document.getElementById('shopts'), t = U.shIn; if (!bar || !t || !t.parentNode) return;
    var vv = window.visualViewport, kb = !!vv && window.innerHeight - vv.height > 120;
    bar.classList.toggle('kb', kb); bar.classList.toggle('drop', !kb);
    if (kb) { bar.style.top = Math.round(vv.offsetTop + vv.height - bar.offsetHeight) + 'px'; bar.style.left = Math.round(vv.offsetLeft) + 'px'; bar.style.width = Math.round(vv.width) + 'px'; }
    else { var lab = t.parentNode, gw = bar.parentNode ? bar.parentNode.clientWidth : 0; bar.style.width = ''; bar.style.top = (lab.offsetTop + lab.offsetHeight + 3) + 'px'; bar.style.left = Math.max(0, Math.min(lab.offsetLeft, gw - bar.offsetWidth - 2)) + 'px'; }
  }
  if (window.visualViewport) { window.visualViewport.addEventListener('resize', placeOpts); window.visualViewport.addEventListener('scroll', placeOpts); }
  function sheetMove(t, dr, dc) {
    var r = +t.getAttribute('data-sr'), c = +t.getAttribute('data-sc');
    for (var i = 0; i < D.R * D.C; i++) {
      if (dr || dc) { r += dr; c += dc; if (r < 0 || c < 0 || r >= D.R || c >= D.C) return; }
      var n = document.querySelector('input[data-sr="' + r + '"][data-sc="' + c + '"]');
      if (n) { n.focus(); return; }
    }
  }
  function sheetNext(t, back) {   // Enter: the next open square across (wraps to the next row) or down (wraps to the next column)
    var r = +t.getAttribute('data-sr'), c = +t.getAttribute('data-sc'), step = back ? -1 : 1, down = U.edir === 'D';
    for (var i = 0; i < D.R * D.C; i++) {
      if (down) { r += step; if (r >= D.R) { r = 0; c++; } if (r < 0) { r = D.R - 1; c--; } if (c < 0 || c >= D.C) return; }
      else { c += step; if (c >= D.C) { c = 0; r++; } if (c < 0) { c = D.C - 1; r--; } if (r < 0 || r >= D.R) return; }
      if (!D.black[r][c]) { var n = document.querySelector('input[data-sr="' + r + '"][data-sc="' + c + '"]'); if (n) { n.focus(); return; } }
    }
  }
  function editView() {
    if (!ADMIN) return adminView();
    if (U.emode === 'sheet') U.emode = 'ans';   // the old \u0c2a\u0c1f\u0c4d\u0c1f\u0c3f\u0c15 tab is the answers tab now
    if (!D) return '<div class="page gutter"><p class="note">\u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d \u0c32\u0c47\u0c26\u0c41.</p><a class="wide-btn pri" href="#admin">\u0c28\u0c3f\u0c30\u0c4d\u0c35\u0c3e\u0c39\u0c23\u0c15\u0c41 \u0c35\u0c46\u0c33\u0c4d\u0c33\u0c02\u0c21\u0c3f</a></div>';
    var p = draftToPuzzle(D, true), m = model(p), busy = !!U.busy, notReady = blogBlockers(draftToPuzzle(D, false)).length > 0;
    var runs = {};
    if (U.emode === 'ans') { var dr = U.edir === 'D' ? 1 : 0, dc = U.edir === 'A' ? 1 : 0, r0 = U.er, c0 = U.ec; while (m.isW(r0 - dr, c0 - dc)) { r0 -= dr; c0 -= dc; } while (m.isW(r0, c0)) { runs[key(r0, c0)] = true; r0 += dr; c0 += dc; } }
    var cells = '';
    for (var r = 0; r < D.R; r++) for (var c = 0; c < D.C; c++) {
      var k = key(r, c), b = D.black[r][c], n = p.nums[k] || '', a = b ? '' : D.ans[r][c] || '', sel = r === U.er && c === U.ec;
      cells += '<button class="ecell' + (b ? ' b' : '') + (!b && D.low && D.low[k] ? ' low' : '') + (sel ? ' sel' : '') + (runs[k] && !sel ? ' run' : '') + '" data-act="ecell" data-r="' + r + '" data-c="' + c + '" aria-label="' + esc('\u0c05\u0c21\u0c4d\u0c21\u0c41 \u0c35\u0c30\u0c41\u0c38 ' + (r + 1) + ', \u0c28\u0c3f\u0c32\u0c41\u0c35\u0c41 \u0c35\u0c30\u0c41\u0c38 ' + (c + 1) + (b ? ' \u00b7 \u0c28\u0c32\u0c41\u0c2a\u0c41' : '') + (n ? ' \u00b7 \u0c38\u0c02\u0c16\u0c4d\u0c2f ' + n : '') + (a ? ' \u00b7 ' + a : '')) + '">' + (n ? '<span class="num">' + n + '</span>' : '') + '<span class="ltr">' + esc(a) + '</span></button>';
    }
    var tool = '';
    if (U.emode === 'black') tool = '<p class="note">\u0c17\u0c21\u0c3f\u0c28\u0c3f \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c3f\u0c24\u0c47 \u0c28\u0c32\u0c41\u0c2a\u0c41 \u2194 \u0c24\u0c46\u0c32\u0c41\u0c2a\u0c41 \u0c2e\u0c3e\u0c30\u0c41\u0c24\u0c41\u0c02\u0c26\u0c3f.</p><button class="wide-btn ter" data-act="auto-num">\u0c38\u0c02\u0c16\u0c4d\u0c2f\u0c32\u0c41 \u0c06\u0c1f\u0c4b\u0c17\u0c3e \u0c35\u0c47\u0c2f\u0c02\u0c21\u0c3f</button>';
    if (U.emode === 'num') tool = '<div class="numedit"><span class="lbl">\u0c0e\u0c02\u0c1a\u0c41\u0c15\u0c41\u0c28\u0c4d\u0c28 \u0c17\u0c21\u0c3f (' + (U.er + 1) + ', ' + (U.ec + 1) + ') \u0c38\u0c02\u0c16\u0c4d\u0c2f</span><input id="num-in" class="inp sm" type="number" inputmode="numeric" min="1" value="' + esc(D.nums[key(U.er, U.ec)] || '') + '"><button class="smallbtn" data-act="num-set">\u0c38\u0c30\u0c47</button><button class="smallbtn danger" data-act="num-clear">\u0c24\u0c40\u0c38\u0c3f\u0c35\u0c47\u0c2f\u0c3f</button></div><button class="wide-btn ter" data-act="auto-num">\u0c05\u0c28\u0c4d\u0c28\u0c3f \u0c38\u0c02\u0c16\u0c4d\u0c2f\u0c32\u0c42 \u0c06\u0c1f\u0c4b\u0c17\u0c3e \u0c35\u0c47\u0c2f\u0c02\u0c21\u0c3f</button>';
    if (U.emode === 'ans') tool = '<div class="btnrow"><button class="wide-btn ter" data-act="eflip">' + I.swap + ' \u0c26\u0c3f\u0c36: ' + dirName(U.edir) + '</button></div>' + typeBoxHTML() +
      '<div class="ppanel" style="border-top:0;padding-top:0">' + keypadHTML('<button class="k" data-act="ottu" aria-pressed="' + (!!U.conj) + '">\u0c12\u0c24\u0c4d\u0c24\u0c41\u0c32\u0c41</button><button class="k" data-act="vowels">\u0c05\u0c1a\u0c4d\u0c1a\u0c41\u0c32\u0c41</button><button class="k" data-act="eflip">' + I.swap + dirName(U.edir) + '</button><button class="k" data-act="back" aria-label="\u0c24\u0c4a\u0c32\u0c17\u0c3f\u0c02\u0c1a\u0c41">' + I.del + '</button>') + '</div>';
    var clueRows = D.clues.map(function (cl, i) {
      if (cl.d !== U.etab) return '';
      return '<div class="cluerow"><input class="inp sm" type="number" inputmode="numeric" aria-label="\u0c38\u0c02\u0c16\u0c4d\u0c2f" data-ci="' + i + '" data-f="n" value="' + esc(cl.n || '') + '"><input class="inp" style="min-height:40px;padding:6px 10px;font-size:15px" type="text" aria-label="\u0c06\u0c27\u0c3e\u0c30\u0c02" data-ci="' + i + '" data-f="text" value="' + esc(cl.text || '') + '"><input class="inp sm" type="number" inputmode="numeric" aria-label="\u0c2a\u0c4a\u0c21\u0c35\u0c41" data-ci="' + i + '" data-f="len" value="' + esc(cl.len || '') + '"><button class="plus" data-act="clue-ins" data-i="' + i + '" aria-label="\u0c26\u0c40\u0c28\u0c3f \u0c24\u0c30\u0c4d\u0c35\u0c3e\u0c24 \u0c06\u0c27\u0c3e\u0c30\u0c02 \u0c1c\u0c4b\u0c21\u0c3f\u0c02\u0c1a\u0c41">+</button><button class="x" data-act="clue-del" data-i="' + i + '" aria-label="\u0c08 \u0c06\u0c27\u0c3e\u0c30\u0c02 \u0c24\u0c4a\u0c32\u0c17\u0c3f\u0c02\u0c1a\u0c41">\u00d7</button></div>';
    }).join('');
    var nA = D.clues.filter(function (c) { return c.d === 'A'; }).length, nD = D.clues.length - nA;
    return '<section class="play" style="overflow-y:auto" data-scroll="edit">' +
      '<header class="ebar"><a class="ghostbtn" href="#admin" aria-label="\u0c28\u0c3f\u0c30\u0c4d\u0c35\u0c3e\u0c39\u0c23\u0c15\u0c41 \u0c35\u0c46\u0c28\u0c15\u0c4d\u0c15\u0c3f">' + I.back + '</a><h1>' + (D.id ? '\u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d \u0c2e\u0c3e\u0c30\u0c4d\u0c2a\u0c41' : '\u0c15\u0c4a\u0c24\u0c4d\u0c24 \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d \u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d') + '</h1></header>' +
      '<div class="page gutter" style="gap:18px">' + statusBox() +
        (U.srcUrls.length ? '<details' + (U.srcOpen ? ' open' : '') + '><summary class="lbl" style="cursor:pointer">\u0c2e\u0c42\u0c32 \u0c1a\u0c3f\u0c24\u0c4d\u0c30\u0c02 \u0c1a\u0c42\u0c21\u0c02\u0c21\u0c3f' + (U.srcUrls.length > 1 ? ' (\u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02, \u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32\u0c41)' : '') + '</summary><div class="srcimgs">' + U.srcUrls.map(function (u) { return '<img src="' + u + '" alt="\u0c05\u0c2a\u0c4d\u200c\u0c32\u0c4b\u0c21\u0c4d \u0c1a\u0c47\u0c38\u0c3f\u0c28 \u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02 \u0c1a\u0c3f\u0c24\u0c4d\u0c30\u0c02">'; }).join('') + '</div></details>' : '') +
        '<div class="box"><div class="row2"><div class="fld"><label class="lbl" for="d-title">\u0c36\u0c40\u0c30\u0c4d\u0c37\u0c3f\u0c15</label><input id="d-title" class="inp" data-df="title" value="' + esc(D.title) + '"></div><div class="fld"><label class="lbl" for="d-date">\u0c24\u0c47\u0c26\u0c40</label><input id="d-date" class="inp" data-df="date" inputmode="numeric" placeholder="DD.MM.YYYY" value="' + esc(D.date) + '"></div></div>' +
        '<div class="fld"><label class="lbl" for="d-paper">\u0c2a\u0c24\u0c4d\u0c30\u0c3f\u0c15</label><select id="d-paper" class="inp">' + paperOptions(D.paper) + '</select></div>' +
        '<div class="row3"><div class="fld"><label class="lbl" for="d-rows">\u0c35\u0c30\u0c41\u0c38\u0c32\u0c41</label><input id="d-rows" class="inp sm" type="number" min="3" max="25" value="' + D.R + '"></div><div class="fld"><label class="lbl" for="d-cols">\u0c28\u0c3f\u0c32\u0c41\u0c35\u0c41 \u0c35\u0c30\u0c41\u0c38\u0c32\u0c41</label><input id="d-cols" class="inp sm" type="number" min="3" max="25" value="' + D.C + '"></div><div class="fld"><span class="lbl">&nbsp;</span><button class="smallbtn" style="min-height:40px" data-act="resize">\u0c2a\u0c30\u0c3f\u0c2e\u0c3e\u0c23\u0c02 \u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c41</button></div></div></div>' +
        '<div class="seg wide" role="group" aria-label="\u0c2e\u0c3e\u0c30\u0c4d\u0c2a\u0c41 \u0c30\u0c15\u0c02"><button data-act="emode" data-v="black" aria-pressed="' + (U.emode === 'black') + '">\u0c28\u0c32\u0c41\u0c2a\u0c41 \u0c17\u0c21\u0c41\u0c32\u0c41</button><button data-act="emode" data-v="num" aria-pressed="' + (U.emode === 'num') + '">\u0c38\u0c02\u0c16\u0c4d\u0c2f\u0c32\u0c41</button><button data-act="emode" data-v="ans" aria-pressed="' + (U.emode === 'ans') + '">\u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32\u0c41</button></div>' +
        ansCardHTML(m) + (U.emode === 'ans' ? sheetHTML(p) : '<div class="egrid" style="--n:' + D.C + '">' + cells + '</div>' + tool) +
        '<section class="sec"><div class="sec-row"><h2 class="sec-h">\u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32\u0c41</h2><div class="seg" role="group" aria-label="\u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32 \u0c26\u0c3f\u0c36"><button data-act="etab" data-v="A" aria-pressed="' + (U.etab === 'A') + '">\u0c05\u0c21\u0c4d\u0c21\u0c02 \u00b7 ' + nA + '</button><button data-act="etab" data-v="D" aria-pressed="' + (U.etab === 'D') + '">\u0c28\u0c3f\u0c32\u0c41\u0c35\u0c41 \u00b7 ' + nD + '</button></div></div>' +
          teHintHTML() + '<div class="cluerow" style="font-size:12px;color:var(--muted)"><span>\u0c38\u0c02\u0c16\u0c4d\u0c2f</span><span>\u0c06\u0c27\u0c3e\u0c30\u0c02</span><span>\u0c2a\u0c4a\u0c21\u0c35\u0c41</span><span></span><span></span></div>' + clueRows +
          '<button class="wide-btn ter" data-act="clue-add">' + dirName(U.etab) + ' \u0c06\u0c27\u0c3e\u0c30\u0c02 \u0c1c\u0c4b\u0c21\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f</button></section>' + (IS_CLAUDE ? '' : picsHTML()) +
        '<div id="checks">' + draftChecks() + '</div>' + (notReady && !IS_CLAUDE ? '<p class="note blocknote">\u0c2a\u0c48\u0c28 \u201c\u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c23\u0c15\u0c41 \u0c2e\u0c41\u0c02\u0c26\u0c41\u201d \u0c32\u0c4b \u0c09\u0c28\u0c4d\u0c28\u0c35\u0c28\u0c4d\u0c28\u0c40 \u0c2a\u0c42\u0c30\u0c4d\u0c24\u0c2f\u0c4d\u0c2f\u0c47 \u0c35\u0c30\u0c15\u0c41 \u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d\u200c\u0c32\u0c4b \u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c3f\u0c02\u0c1a\u0c47 \u0c2c\u0c1f\u0c28\u0c4d \u0c06\u0c17\u0c3f \u0c09\u0c02\u0c1f\u0c41\u0c02\u0c26\u0c3f (\u0c32\u0c4b\u0c2a\u0c3e\u0c32\u0c41\u0c28\u0c4d\u0c28 \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d \u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d\u200c\u0c15\u0c41 \u0c35\u0c46\u0c33\u0c4d\u0c33\u0c26\u0c41). Blogger \u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d\u200c\u0c17\u0c3e \u0c2e\u0c3e\u0c24\u0c4d\u0c30\u0c02 \u0c38\u0c47\u0c35\u0c4d \u0c1a\u0c47\u0c2f\u0c35\u0c1a\u0c4d\u0c1a\u0c41.</p>' : '') +
        '<div class="btnrow"><a class="wide-btn ter" href="#play-draft" data-act="try">\u0c2a\u0c30\u0c40\u0c15\u0c4d\u0c37\u0c17\u0c3e \u0c06\u0c21\u0c02\u0c21\u0c3f</a>' + (IS_CLAUDE ? '<button class="wide-btn pri" data-act="publish-draft"' + (busy ? ' disabled' : '') + '>' + (D.id ? '\u0c2e\u0c3e\u0c30\u0c4d\u0c2a\u0c41\u0c32\u0c41 \u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f' : '\u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d\u200c\u0c17\u0c3e \u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f') + '</button></div><button class="wide-btn ter" data-act="copy-site-draft">\u0c35\u0c46\u0c2c\u0c4d\u200c\u0c38\u0c48\u0c1f\u0c4d \u0c15\u0c4b\u0c38\u0c02 \u0c15\u0c3e\u0c2a\u0c40 (\u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d\u200c\u0c32\u0c4b \u0c35\u0c47\u0c2f\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f)</button>'
          : D.postId ? '<button class="wide-btn pri" data-act="update-blog"' + (busy || notReady ? ' disabled' : '') + '>\u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d \u0c38\u0c30\u0c3f\u0c26\u0c3f\u0c26\u0c4d\u0c26\u0c02\u0c21\u0c3f</button></div>'
          : '<button class="wide-btn pri" data-act="publish-blog"' + (busy || notReady ? ' disabled' : '') + '>\u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d\u200c\u0c32\u0c4b \u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f</button></div><button class="wide-btn ter" data-act="publish-blog" data-v="draft"' + (busy ? ' disabled' : '') + '>\u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d\u200c\u0c32\u0c4b \u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d\u200c\u0c17\u0c3e \u0c38\u0c47\u0c35\u0c4d \u0c1a\u0c47\u0c2f\u0c02\u0c21\u0c3f (Blogger \u0c32\u0c4b \u0c1a\u0c42\u0c38\u0c3f \u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c3f\u0c02\u0c1a\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f)</button>') +
        (busy ? '<div class="status"><span>' + (U.busy === 'ai' ? 'Gemini \u0c07\u0c02\u0c15\u0c3e \u0c1a\u0c26\u0c41\u0c35\u0c41\u0c24\u0c4b\u0c02\u0c26\u0c3f \u2014 \u0c05\u0c26\u0c3f \u0c2e\u0c41\u0c17\u0c3f\u0c38\u0c47 \u0c35\u0c30\u0c15\u0c41 \u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c3f\u0c02\u0c1a\u0c47 \u0c2c\u0c1f\u0c28\u0c4d\u0c32\u0c41 \u0c06\u0c17\u0c41\u0c24\u0c3e\u0c2f\u0c3f.' : U.busy === 'ocr' || U.busy === 'scan' ? '\u0c2b\u0c4b\u0c28\u0c4d \u0c07\u0c02\u0c15\u0c3e \u0c1a\u0c26\u0c41\u0c35\u0c41\u0c24\u0c4b\u0c02\u0c26\u0c3f \u2014 \u0c05\u0c26\u0c3f \u0c2e\u0c41\u0c17\u0c3f\u0c38\u0c47 \u0c35\u0c30\u0c15\u0c41 \u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c3f\u0c02\u0c1a\u0c47 \u0c2c\u0c1f\u0c28\u0c4d\u0c32\u0c41 \u0c06\u0c17\u0c41\u0c24\u0c3e\u0c2f\u0c3f.' : '\u0c2a\u0c28\u0c3f \u0c1c\u0c30\u0c41\u0c17\u0c41\u0c24\u0c4b\u0c02\u0c26\u0c3f \u2014 \u0c2e\u0c41\u0c17\u0c3f\u0c38\u0c47 \u0c35\u0c30\u0c15\u0c41 \u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c3f\u0c02\u0c1a\u0c47 \u0c2c\u0c1f\u0c28\u0c4d\u0c32\u0c41 \u0c06\u0c17\u0c41\u0c24\u0c3e\u0c2f\u0c3f.') + '</span>' + (U.busy === 'ai' ? '<button class="smallbtn" data-act="ai-stop">\u0c06\u0c2a\u0c02\u0c21\u0c3f</button>' : '') + '</div>' : '') +
        '<div class="savebar"><button class="wide-btn sec" data-act="draft-save">' + I.save + ' \u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d \u0c38\u0c47\u0c35\u0c4d \u0c1a\u0c47\u0c2f\u0c02\u0c21\u0c3f</button><small>' + (D.edited ? '\u0c2e\u0c3e\u0c30\u0c4d\u0c2a\u0c41\u0c32\u0c41 \u0c08 \u0c2b\u0c4b\u0c28\u0c4d\u200c\u0c32\u0c4b \u0c24\u0c3e\u0c28\u0c41\u0c17\u0c3e \u0c38\u0c47\u0c35\u0c4d \u0c05\u0c35\u0c41\u0c24\u0c3e\u0c2f\u0c3f \u00b7 \u0c1a\u0c3f\u0c35\u0c30\u0c3f \u0c2e\u0c3e\u0c30\u0c4d\u0c2a\u0c41 ' + hhmm(D.edited) : '') + ((S.drafts || []).some(function (x) { return x.uid === D.uid; }) ? ' \u00b7 \u0c38\u0c47\u0c35\u0c4d \u0c1a\u0c47\u0c38\u0c3f\u0c28 \u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d\u200c\u0c32\u0c4d\u0c32\u0c4b \u0c09\u0c02\u0c26\u0c3f' : '') + '</small></div>' +
        '<button class="wide-btn link" data-act="draft-drop">' + (U.confirm === 'drop' ? '\u0c16\u0c1a\u0c4d\u0c1a\u0c3f\u0c24\u0c2e\u0c3e? \u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d \u0c2a\u0c4b\u0c24\u0c41\u0c02\u0c26\u0c3f \u2014 \u0c2e\u0c33\u0c4d\u0c33\u0c40 \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c02\u0c21\u0c3f' : '\u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d \u0c35\u0c26\u0c3f\u0c32\u0c47\u0c2f\u0c02\u0c21\u0c3f') + '</button>' +
      '</div></section>';
  }
  // answers come from a separate picture (Eenadu prints them the next week): one card in every editing mode
  function ansCardHTML(m) {
    var hid = 'style="position:absolute;width:1px;height:1px;opacity:0"', acc = 'accept="image/jpeg,image/png,image/webp,application/pdf"', busy = U.busy ? ' aria-disabled="true"' : '';
    var btns = IS_CLAUDE ? '<label class="wide-btn ter" for="ans-files" style="cursor:pointer"' + busy + '>Claude \u0c24\u0c4b \u0c1a\u0c26\u0c35\u0c02\u0c21\u0c3f</label><input id="ans-files" type="file" ' + acc + ' ' + hid + '>'
      : '<label class="wide-btn ter" for="ans-gem" style="cursor:pointer"' + busy + '>Gemini \u0c24\u0c4b</label><label class="wide-btn ter" for="ans-scan" style="cursor:pointer"' + busy + '>\u0c2b\u0c4b\u0c28\u0c4d\u200c\u0c32\u0c4b\u0c28\u0c47</label><input id="ans-gem" type="file" ' + acc + ' ' + hid + '><input id="ans-scan" type="file" ' + acc + ' ' + hid + '>';
    return '<div class="anscard' + (m.hasAns ? ' is-full' : '') + '"><b>' + (m.hasAns ? '\u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32\u0c41 \u0c05\u0c28\u0c4d\u0c28\u0c40 \u0c09\u0c28\u0c4d\u0c28\u0c3e\u0c2f\u0c3f' : '\u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32\u0c41: ' + m.missingAns + ' \u0c17\u0c21\u0c41\u0c32\u0c41 \u0c16\u0c3e\u0c33\u0c40') + '</b><small>' + (m.hasAns ? '\u0c15\u0c4a\u0c24\u0c4d\u0c24 \u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32 \u0c1a\u0c3f\u0c24\u0c4d\u0c30\u0c02\u0c24\u0c4b \u0c2e\u0c33\u0c4d\u0c33\u0c40 \u0c28\u0c3f\u0c02\u0c2a\u0c3e\u0c32\u0c02\u0c1f\u0c47:' : '\u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32 \u0c17\u0c21\u0c3f \u0c2b\u0c4b\u0c1f\u0c4b / PDF \u0c07\u0c35\u0c4d\u0c35\u0c02\u0c21\u0c3f (\u0c35\u0c3f\u0c21\u0c3f\u0c17\u0c3e), \u0c32\u0c47\u0c26\u0c3e \u201c\u0c1c\u0c35\u0c3e\u0c2c\u0c41\u0c32\u0c41\u201d \u0c32\u0c4b \u0c1f\u0c48\u0c2a\u0c4d \u0c1a\u0c47\u0c2f\u0c02\u0c21\u0c3f.') + '</small><div class="btnrow">' + btns + '</div></div>';
  }
  function editPut(v) {
    if (D.black[U.er][U.ec]) return;
    D.ans[U.er][U.ec] = v.normalize('NFC'); U.cons = null; U.conj = null;
    var dr = U.edir === 'D' ? 1 : 0, dc = U.edir === 'A' ? 1 : 0, nr = U.er + dr, nc = U.ec + dc;
    if (nr < D.R && nc < D.C && !D.black[nr][nc]) { U.er = nr; U.ec = nc; }
    saveDraft(); render();
  }
  function editBack() {
    if (U.cons || U.conj) { U.cons = null; U.conj = null; render(); return; }
    if (D.ans[U.er][U.ec]) { D.ans[U.er][U.ec] = ''; }
    else { var dr = U.edir === 'D' ? 1 : 0, dc = U.edir === 'A' ? 1 : 0, pr = U.er - dr, pc = U.ec - dc; if (pr >= 0 && pc >= 0 && !D.black[pr][pc]) { U.er = pr; U.ec = pc; D.ans[pr][pc] = ''; } }
    saveDraft(); render();
  }

  /* ================= render & routing ================= */
  function route() { var h = location.hash.replace('#', ''); return h || 'home'; }
  // in the blog: a puzzle shows its own post's address (reload or share opens that post); the lists show the blog's home address
  function blogAddress(r) {
    try {
      var m = /^(?:play|done)-(.+)$/.exec(r), p = m ? findPuzzle(m[1]) : null, path = '/';
      if (p && p.url) { var u = new URL(p.url, location.href); if (u.hostname === location.hostname) path = u.pathname; else return; }
      else if (m) return;
      if (path !== location.pathname) history.replaceState(history.state, '', path + location.hash);
    } catch (e) {}
  }
  // how to find "the same field" again after the screen is redrawn
  function focusKey(el) {
    if (el.id) return '#' + el.id;
    var at = ['data-ci', 'data-f', 'data-sr', 'data-sc', 'data-ocr', 'data-df'].filter(function (a) { return el.hasAttribute(a); });
    return at.length ? el.tagName.toLowerCase() + at.map(function (a) { return '[' + a + '="' + el.getAttribute(a) + '"]'; }).join('') : null;
  }
  function render() {
    var r = route(), keep = {};
    view.querySelectorAll('[data-scroll]').forEach(function (el) { keep[el.getAttribute('data-scroll')] = el.scrollTop; });
    var ae = document.activeElement, fsel = null, fpos = null;
    if (ae && view.contains(ae) && /^(INPUT|TEXTAREA)$/.test(ae.tagName) && ae.type !== 'file') { fsel = focusKey(ae); try { fpos = [ae.selectionStart, ae.selectionEnd]; } catch (e) {} }
    var html;
    if (r.indexOf('play-') === 0) html = playView(r.slice(5));
    else if (r.indexOf('done-') === 0) html = doneView(r.slice(5));
    else if (r === 'archive') html = archiveView();
    else if (r === 'prefs') html = prefsView();
    else if (r === 'profile') html = profileView();
    else if (r === 'admin') html = adminView();
    else if (r === 'edit') html = editView();
    else if (r === 'scan') html = scanView();
    else html = homeView();
    view.innerHTML = html;
    var fimg = view.querySelector('.finpic img');
    if (fimg) fimg.onerror = function () { fimg.parentNode.innerHTML = '<span class="finart">' + congrats((CUR && CUR.P.variant) || 0) + '</span>'; };
    var fixed = r.indexOf('play-') === 0 && !!CUR;
    view.classList.toggle('is-fixed', fixed);
    view.querySelectorAll('[data-scroll]').forEach(function (el) { var v = keep[el.getAttribute('data-scroll')]; if (v) el.scrollTop = v; });
    if (fsel) { var ne = view.querySelector(fsel); if (ne && ne !== document.activeElement) { try { ne.focus({ preventScroll: true }); if (fpos && fpos[0] != null) ne.setSelectionRange(fpos[0], fpos[1]); } catch (e) {} } }
    if (TE && !document.body.contains(TE.el)) { var nf = document.activeElement; if (nf && teField(nf)) teStrip(nf); else teHide(); }
    var apw = view.querySelector('#adm-pw');   // the admin sign-in: the cursor waits in the password box
    if (apw && !U.busy && document.activeElement !== apw && !(fsel && view.querySelector(fsel))) { try { apw.focus({ preventScroll: true }); } catch (e) {} }
    tabs.hidden = EMBED || r.indexOf('play-') === 0 || r.indexOf('done-') === 0 || r === 'edit' || r === 'scan';
    if (r === 'scan') mountScan();
    var tab = r === 'archive' || r === 'prefs' || r === 'profile' ? r : (r === 'home' ? 'home' : '');
    tabs.querySelectorAll('a').forEach(function (a) { if (a.getAttribute('data-tab') === tab) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
    if (document.getElementById('tl-cands')) updateCands();
    if (r.indexOf('play-') === 0) keepCurVisible();
    if (r === 'prefs') previewFonts(prefsFontsToPreview());
    if (r.indexOf('play-') !== 0 && document.fullscreenElement && document.exitFullscreen) { try { var xf = document.exitFullscreen(); if (xf && xf.catch) xf.catch(function () {}); } catch (e) {} }
    if (r.indexOf('play-') === 0) syncHbar();
  }
  var lastRoute = null;
  function onRoute() {
    var r = route();
    if (IN_BLOG && /^(admin|edit|scan)$/.test(r)) { location.href = APPBASE + '#admin'; return; }
    if (IN_BLOG && lastRoute && r !== lastRoute) blogAddress(r);
    if (r !== lastRoute && !IS_CLAUDE && ADMIN && !ADMIN_ROUTES[r] && lastRoute && ADMIN_ROUTES[lastRoute]) {
      var tk = sesGet(); adminOut(); U.status = null;
      if (tk) { try { fetch(svcUrl(), { method: 'POST', body: JSON.stringify({ action: 'logout', token: tk }), keepalive: true }).catch(function () {}); } catch (e) {} }
      toast('\u0c28\u0c3f\u0c30\u0c4d\u0c35\u0c3e\u0c39\u0c23 \u0c28\u0c41\u0c02\u0c1a\u0c3f \u0c2c\u0c2f\u0c1f\u0c15\u0c41 \u0c35\u0c1a\u0c4d\u0c1a\u0c3e\u0c30\u0c41. \u0c2e\u0c33\u0c4d\u0c33\u0c40 \u0c35\u0c3e\u0c21\u0c3e\u0c32\u0c02\u0c1f\u0c47 \u0c2a\u0c3e\u0c38\u0c4d\u200c\u0c35\u0c30\u0c4d\u0c21\u0c4d \u0c07\u0c35\u0c4d\u0c35\u0c02\u0c21\u0c3f.');
    }
    if (r !== lastRoute) {
      view.scrollTop = 0; U.confirm = ''; if (U.auto && U.auto.on) autoStop(true);
      if (U.fin && r !== 'play-' + U.fin) U.fin = null;
      if (r.indexOf('done-') === 0) U.showVariant = null;
      if (r.indexOf('play-') === 0) { U.lastKb = S.prefs.keypad === 'phone' ? 'type' : 'keys'; U.panel = 'none'; U.autoHidden = true; U.cons = null; U.conj = null; U.shown = {}; var P = S.prog[r.slice(5)]; U.tab = P ? P.dir : 'A'; }
      if (r === 'play-draft' && S.prog.draft) { S.prog.draft = freshProgress(); }
      if ((r === 'admin' || r === 'edit') && lastRoute && lastRoute !== 'admin' && lastRoute !== 'edit' && lastRoute !== 'play-draft' && lastRoute !== 'scan') U.status = null;
    }
    lastRoute = r; render();
  }

  /* ================= events ================= */
  view.addEventListener('click', function (ev) {
    var t = ev.target.closest('[data-act]'); if (!t) return;
    var a = t.getAttribute('data-act'), v = t.getAttribute('data-v'), r = route(), inEdit = r === 'edit';
    switch (a) {
      case 'cell':
        if (autoOn()) { autoStop(true); U.panel = 'none'; U.autoHidden = false; }
        var tr0 = +t.getAttribute('data-r'), tc0 = +t.getAttribute('data-c');
        // the tap that opens the hidden keyboard keeps the word's direction
        if (!(U.panel === 'none' && U.autoHidden && CUR.P.r === tr0 && CUR.P.c === tc0)) pickCell(tr0, tc0);
        if (U.panel === 'none' && U.autoHidden) { U.autoHidden = false; U.panel = U.lastKb || 'keys'; U.follow = true; render(); if (U.panel === 'type') { var tac = document.getElementById('tl-in'); if (tac) tac.focus(); } break; }
        if (U.panel === 'type') { U.follow = false; refreshPlay(); var tin = document.getElementById('tl-in'); if (tin && document.activeElement !== tin) tin.focus({ preventScroll: true }); } else render();
        break;
      case 'put': if (inEdit) editPut(v); else put(v); break;
      case 'cons': if (U.conj) { U.cons = U.conj + '\u0c4d' + v; U.conj = null; } else U.cons = U.cons === v ? null : v; render(); break;
      case 'ottu': if (U.cons) { U.conj = U.cons; U.cons = null; render(); } else toast('\u0c2e\u0c41\u0c02\u0c26\u0c41 \u0c12\u0c15 \u0c39\u0c32\u0c4d\u0c32\u0c41 \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c02\u0c21\u0c3f, \u0c24\u0c30\u0c4d\u0c35\u0c3e\u0c24 \u0c12\u0c24\u0c4d\u0c24\u0c41\u0c32\u0c41.'); break;
      case 'vowels': U.cons = null; U.conj = null; render(); break;
      case 'flip':
        var m = CUR.m, P = CUR.P, k = key(P.r, P.c), o = P.dir === 'A' ? 'D' : 'A';
        if (o === 'A' ? m.cellA[k] : m.cellD[k]) { P.dir = o; U.tab = o; save(); softOrFull(); } else toast('\u0c08 \u0c17\u0c21\u0c3f \u0c28\u0c41\u0c02\u0c1a\u0c3f ' + dirName(o) + ' \u0c2a\u0c26\u0c02 \u0c32\u0c47\u0c26\u0c41.');
        break;
      case 'back': if (inEdit) editBack(); else back(U.panel === 'type'); break;
      case 'prev': step(-1); U.follow = true; softOrFull(); break;
      case 'next': step(1); U.follow = true; softOrFull(); break;
      case 'panel': U.panel = U.panel === 'clues' ? (U.lastKb && U.lastPanel === 'none' ? 'none' : (S.prefs.keypad === 'phone' ? 'type' : 'keys')) : (U.lastPanel = U.panel, 'clues'); U.tab = CUR ? CUR.P.dir : 'A'; render(); break;
      case 'tab': U.tab = v; render(); break;
      case 'clue': goEntry(t.getAttribute('data-id')); U.follow = true; render(); break;
      case 'hint': doHint(); break;
      case 'check': doCheck(); break;
      case 'panel-type': U.panel = 'type'; U.cons = null; U.conj = null; render(); var tpi = document.getElementById('tl-in'); if (tpi) tpi.focus(); break;
      case 'panel-keys': U.panel = S.prefs.keypad === 'phone' ? 'type' : 'keys'; render(); break;
      case 'zoom-in': case 'zoom-out':
        var zi = ZOOMS.indexOf(zoomLevel()) + (a === 'zoom-in' ? 1 : -1);
        S.prefs.zoom = ZOOMS[Math.max(0, Math.min(ZOOMS.length - 1, zi))]; U.follow = true; save(); render();
        toast('\u0c17\u0c21\u0c3f ' + Math.round(S.prefs.zoom * 100) + '%' + (S.prefs.zoom > 1 ? ' \u2014 \u0c2a\u0c15\u0c4d\u0c15\u0c15\u0c41 \u0c1c\u0c30\u0c3f\u0c2a\u0c3f \u0c1a\u0c42\u0c21\u0c02\u0c21\u0c3f' : ''));
        break;
      case 'kb-te': U.panel = 'keys'; S.prefs.keypad = 'app'; save(); if (document.activeElement) document.activeElement.blur(); render(); break;
      case 'kb-en': U.panel = 'type'; S.prefs.keypad = 'phone'; U.cons = null; U.conj = null; save(); render(); var kbe = document.getElementById('tl-in'); if (kbe) kbe.focus(); break;
      case 'reload': location.reload(); break;
      case 'auto-start': if (autoOn()) break; autoStart(); break;
      case 'fin-go': var fid = U.fin; U.fin = null; if (fid) location.hash = '#done-' + fid; break;
      case 'fin-close': U.fin = null; render(); break;
      case 'auto-pause': if (!U.auto) break; U.auto.paused = !U.auto.paused; clearTimeout(U.auto.t); refreshPlay(); if (!U.auto.paused) autoTick(); break;
      case 'auto-next': if (!U.auto) break; clearTimeout(U.auto.t); var en0 = CUR.m.entries[U.auto.list[U.auto.i]];
        if (en0) en0.cells.forEach(function (x) { var kx = key(x[0], x[1]); if (autoNeed(kx)) { CUR.P.letters[kx] = CUR.m.sol(kx); delete U.shown[kx]; markHint(kx, true); CUR.P.hints = (CUR.P.hints || 0) + 1; CUR.P.auto = true; U.auto.shown++; } });
        U.auto.i++; U.auto.j = -1; save(); if (!U.auto.paused) autoTick(); else refreshPlay(); break;
      case 'auto-stop': autoStop(); toast('\u0c06\u0c1f\u0c4b \u0c06\u0c2a\u0c3e\u0c02. \u0c2e\u0c3f\u0c17\u0c24\u0c3e\u0c35\u0c3f \u0c2e\u0c40\u0c30\u0c47 \u0c28\u0c3f\u0c02\u0c2a\u0c02\u0c21\u0c3f.'); break;
      case 'auto-speed': if (U.auto) { U.auto.speed = v; refreshPlay(); } break;
      // website admin (Apps Script service)
      case 'svc-login':
        var sui = document.getElementById('svc-url'), suv = sui ? sui.value.trim() : '';
        if (suv) { if (!/^https:\/\/script\.google\.com\/macros\/s\/[\w-]+\/exec\/?$/.test(suv)) { toast('\u0c32\u0c3f\u0c02\u0c15\u0c4d https://script.google.com/macros/s/\u2026/exec \u0c32\u0c3e \u0c09\u0c02\u0c21\u0c3e\u0c32\u0c3f.'); break; } lsSet(SVC_K, suv.replace(/\/$/, '')); }
        var pwv = (document.getElementById('adm-pw') || {}).value || '';
        if (!svcUrl()) { toast('\u0c2e\u0c41\u0c02\u0c26\u0c41 \u0c05\u0c21\u0c4d\u0c2e\u0c3f\u0c28\u0c4d \u0c38\u0c30\u0c4d\u0c35\u0c40\u0c38\u0c4d \u0c32\u0c3f\u0c02\u0c15\u0c4d \u0c07\u0c35\u0c4d\u0c35\u0c02\u0c21\u0c3f.'); break; }
        if (!pwv) { toast('\u0c2a\u0c3e\u0c38\u0c4d\u200c\u0c35\u0c30\u0c4d\u0c21\u0c4d \u0c07\u0c35\u0c4d\u0c35\u0c02\u0c21\u0c3f.'); break; }
        U.busy = 'login'; U.pwHold = pwv; U.status = { kind: 'wait', text: '\u0c38\u0c30\u0c3f\u0c1a\u0c42\u0c38\u0c4d\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c02\u2026' }; render();
        svc('login', { password: pwv }).then(function (j) {
          sesSet(j.token); ADMIN = true; U.busy = ''; U.pwHold = ''; U.svcStatus = null;
          U.status = { kind: 'ok', text: '\u0c28\u0c3f\u0c30\u0c4d\u0c35\u0c3e\u0c39\u0c15\u0c41\u0c21\u0c3f\u0c17\u0c3e \u0c2a\u0c4d\u0c30\u0c35\u0c47\u0c36\u0c3f\u0c02\u0c1a\u0c3e\u0c30\u0c41.' + (j.firstPassword ? ' \u0c2e\u0c4a\u0c26\u0c1f\u0c3f \u0c2a\u0c3e\u0c38\u0c4d\u200c\u0c35\u0c30\u0c4d\u0c21\u0c4d (uvs-2026) \u0c35\u0c3e\u0c21\u0c41\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c30\u0c41 \u2014 \u0c15\u0c3f\u0c02\u0c26\u0c3f \u0c38\u0c46\u0c1f\u0c4d\u0c1f\u0c3f\u0c02\u0c17\u0c4d\u200c\u0c32\u0c32\u0c4b \u0c2e\u0c40 \u0c38\u0c4a\u0c02\u0c24 \u0c2a\u0c3e\u0c38\u0c4d\u200c\u0c35\u0c30\u0c4d\u0c21\u0c4d \u0c2a\u0c46\u0c1f\u0c4d\u0c1f\u0c41\u0c15\u0c4b\u0c02\u0c21\u0c3f.' : '') }; render();
        }, function (e) { U.busy = ''; U.pwHold = ''; U.status = { kind: 'err', text: svcErr(e) }; render(); });
        break;
      case 'svc-reset':
        var sur = document.getElementById('svc-url'), surv = sur ? sur.value.trim() : '';
        if (surv && /^https:\/\/script\.google\.com\/macros\/s\/[\w-]+\/exec\/?$/.test(surv)) lsSet(SVC_K, surv.replace(/\/$/, ''));
        if (!svcUrl()) { toast('\u0c2e\u0c41\u0c02\u0c26\u0c41 \u0c05\u0c21\u0c4d\u0c2e\u0c3f\u0c28\u0c4d \u0c38\u0c30\u0c4d\u0c35\u0c40\u0c38\u0c4d \u0c32\u0c3f\u0c02\u0c15\u0c4d \u0c05\u0c24\u0c3f\u0c15\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f.'); break; }
        if (U.confirm !== 'reset') { U.confirm = 'reset'; render(); break; }
        U.confirm = ''; U.busy = 'login'; U.status = { kind: 'wait', text: '\u0c15\u0c4a\u0c24\u0c4d\u0c24 \u0c2a\u0c3e\u0c38\u0c4d\u200c\u0c35\u0c30\u0c4d\u0c21\u0c4d \u0c2a\u0c02\u0c2a\u0c41\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c02\u2026' }; render();
        svc('reset').then(function (j) { U.busy = ''; U.status = { kind: 'ok', text: '\u0c15\u0c4a\u0c24\u0c4d\u0c24 \u0c2a\u0c3e\u0c38\u0c4d\u200c\u0c35\u0c30\u0c4d\u0c21\u0c4d ' + (j.sentTo || '\u0c2e\u0c46\u0c2f\u0c3f\u0c32\u0c4d') + ' \u0c15\u0c41 \u0c2a\u0c02\u0c2a\u0c3e\u0c02 (Spam \u0c32\u0c4b \u0c15\u0c42\u0c21\u0c3e \u0c1a\u0c42\u0c21\u0c02\u0c21\u0c3f). \u0c26\u0c3e\u0c28\u0c3f\u0c24\u0c4b \u0c2a\u0c4d\u0c30\u0c35\u0c47\u0c36\u0c3f\u0c02\u0c1a\u0c17\u0c3e\u0c28\u0c47 \u0c05\u0c26\u0c47 \u0c2e\u0c40 \u0c2a\u0c3e\u0c38\u0c4d\u200c\u0c35\u0c30\u0c4d\u0c21\u0c4d \u0c05\u0c35\u0c41\u0c24\u0c41\u0c02\u0c26\u0c3f; \u0c05\u0c2a\u0c4d\u0c2a\u0c1f\u0c3f\u0c26\u0c3e\u0c15\u0c3e \u0c2a\u0c3e\u0c24\u0c26\u0c3f \u0c15\u0c42\u0c21\u0c3e \u0c2a\u0c28\u0c3f\u0c1a\u0c47\u0c38\u0c4d\u0c24\u0c41\u0c02\u0c26\u0c3f.' }; render(); },
          function (e) { U.busy = ''; U.status = { kind: 'err', text: svcErr(e) }; render(); });
        break;
      case 'svc-forget': lsSet(SVC_K, ''); U.status = null; render(); break;
      case 'svc-logout': svc('logout').catch(function () {}); adminOut(); U.status = null; location.hash = '#home'; toast('\u0c08 \u0c2a\u0c30\u0c3f\u0c15\u0c30\u0c02\u0c32\u0c4b \u0c28\u0c3f\u0c30\u0c4d\u0c35\u0c3e\u0c39\u0c23 \u0c28\u0c41\u0c02\u0c1a\u0c3f \u0c2c\u0c2f\u0c1f\u0c15\u0c41 \u0c35\u0c1a\u0c4d\u0c1a\u0c3e\u0c30\u0c41.'); break;
      case 'pw-change':
        var po = (document.getElementById('pw-old') || {}).value || '', pn = (document.getElementById('pw-new') || {}).value || '', pn2 = (document.getElementById('pw-new2') || {}).value || '';
        if (!po || !pn) { toast('\u0c2a\u0c4d\u0c30\u0c38\u0c4d\u0c24\u0c41\u0c24, \u0c15\u0c4a\u0c24\u0c4d\u0c24 \u0c2a\u0c3e\u0c38\u0c4d\u200c\u0c35\u0c30\u0c4d\u0c21\u0c4d\u200c\u0c32\u0c41 \u0c07\u0c35\u0c4d\u0c35\u0c02\u0c21\u0c3f.'); break; }
        if (pn !== pn2) { toast('\u0c15\u0c4a\u0c24\u0c4d\u0c24 \u0c2a\u0c3e\u0c38\u0c4d\u200c\u0c35\u0c30\u0c4d\u0c21\u0c4d \u0c30\u0c46\u0c02\u0c21\u0c41\u0c38\u0c3e\u0c30\u0c4d\u0c32\u0c42 \u0c12\u0c15\u0c47\u0c32\u0c3e \u0c32\u0c47\u0c26\u0c41.'); break; }
        if (pn.length < 6) { toast('\u0c15\u0c4a\u0c24\u0c4d\u0c24 \u0c2a\u0c3e\u0c38\u0c4d\u200c\u0c35\u0c30\u0c4d\u0c21\u0c4d \u0c15\u0c28\u0c40\u0c38\u0c02 6 \u0c05\u0c15\u0c4d\u0c37\u0c30\u0c3e\u0c32\u0c41 \u0c09\u0c02\u0c21\u0c3e\u0c32\u0c3f.'); break; }
        U.busy = 'login'; U.status = { kind: 'wait', text: '\u0c2a\u0c3e\u0c38\u0c4d\u200c\u0c35\u0c30\u0c4d\u0c21\u0c4d \u0c2e\u0c3e\u0c30\u0c41\u0c38\u0c4d\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c02\u2026' }; render();
        svc('password', { old: po, password: pn }).then(function () { U.busy = ''; adminOut(); U.status = { kind: 'ok', text: '\u0c2a\u0c3e\u0c38\u0c4d\u200c\u0c35\u0c30\u0c4d\u0c21\u0c4d \u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3e\u0c02. \u0c15\u0c4a\u0c24\u0c4d\u0c24 \u0c2a\u0c3e\u0c38\u0c4d\u200c\u0c35\u0c30\u0c4d\u0c21\u0c4d\u200c\u0c24\u0c4b \u0c2e\u0c33\u0c4d\u0c33\u0c40 \u0c2a\u0c4d\u0c30\u0c35\u0c47\u0c36\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f.' }; render(); },
          function (e) { U.busy = ''; U.status = { kind: 'err', text: svcErr(e) }; render(); });
        break;
      case 'gem-save': case 'gem-clear':
        var gk = a === 'gem-clear' ? '' : ((document.getElementById('gem-key') || {}).value || '').trim();
        if (a === 'gem-save' && !/^(AIza[\w-]{20,}|AQ\.[\w.-]{20,}|[\w.-]{30,})$/.test(gk)) { toast('Gemini \u0c15\u0c40 \u0c2a\u0c42\u0c30\u0c4d\u0c24\u0c3f\u0c17\u0c3e \u0c05\u0c24\u0c3f\u0c15\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f (AQ.\u2026 \u0c32\u0c47\u0c26\u0c3e AIza\u2026 \u0c24\u0c4b \u0c2e\u0c4a\u0c26\u0c32\u0c35\u0c41\u0c24\u0c41\u0c02\u0c26\u0c3f). aistudio.google.com/apikey \u0c32\u0c4b Copy key \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c3f \u0c15\u0c3e\u0c2a\u0c40 \u0c1a\u0c47\u0c2f\u0c02\u0c21\u0c3f.'); break; }
        U.busy = 'login'; U.status = { kind: 'wait', text: a === 'gem-clear' ? '\u0c15\u0c40 \u0c24\u0c40\u0c38\u0c3f\u0c35\u0c47\u0c38\u0c4d\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c02\u2026' : 'Gemini \u0c15\u0c40 \u0c38\u0c30\u0c3f\u0c1a\u0c42\u0c38\u0c4d\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c02\u2026' }; render();
        svc('gemini-key', { key: gk }).then(function (j) { U.busy = ''; U.svcStatus = null; U.status = { kind: 'ok', text: j.cleared ? 'Gemini \u0c15\u0c40 \u0c24\u0c40\u0c38\u0c3f\u0c35\u0c47\u0c36\u0c3e\u0c02.' : 'Gemini \u0c15\u0c40 \u0c38\u0c47\u0c35\u0c4d \u0c1a\u0c47\u0c36\u0c3e\u0c02' + (j.models && j.models[0] ? ' (\u0c2e\u0c4b\u0c21\u0c32\u0c4d: ' + j.models[0] + ')' : '') + '. \u0c07\u0c2a\u0c4d\u0c2a\u0c41\u0c21\u0c41 \u201cGemini \u0c24\u0c4b \u0c1a\u0c26\u0c35\u0c02\u0c21\u0c3f\u201d \u0c35\u0c3e\u0c21\u0c35\u0c1a\u0c4d\u0c1a\u0c41.' }; render(); },
          function (e) { U.busy = ''; U.status = { kind: 'err', text: svcErr(e) }; render(); });
        break;
      case 'gem-read': var gf = document.getElementById('up-files'); if (!gf || !gf.files.length) { toast('\u0c2e\u0c41\u0c02\u0c26\u0c41 \u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02 \u0c2b\u0c4b\u0c1f\u0c4b \u0c32\u0c47\u0c26\u0c3e PDF (1) \u0c0e\u0c02\u0c1a\u0c41\u0c15\u0c4b\u0c02\u0c21\u0c3f.'); break; } pendingAnswers(); geminiRead('puzzle', gf.files); break;
      case 'scan-start': var sf = document.getElementById('up-files'); if (!sf || !sf.files.length) { toast('\u0c2e\u0c41\u0c02\u0c26\u0c41 \u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02 \u0c2b\u0c4b\u0c1f\u0c4b \u0c32\u0c47\u0c26\u0c3e PDF (1) \u0c0e\u0c02\u0c1a\u0c41\u0c15\u0c4b\u0c02\u0c21\u0c3f.'); break; } pendingAnswers(); scanOpen('puzzle', sf.files); break;
      case 'scan-page': if (!SC || U.busy) break; U.busy = 'scan'; scanPage(+v).then(function () { U.busy = ''; SC.scroll = null; render(); }, function () { U.busy = ''; render(); }); break;
      case 'scan-clear': if (SC) { SC.boxes = []; render(); } break;
      case 'scan-ungrid': if (!SC) break; if (U.confirm !== 'ungrid') { U.confirm = 'ungrid'; render(); break; } U.confirm = ''; SC.quad = null; SC.vals = null; SC.gridPage = -1; SC.flip = {}; SC.mode = 'grid'; render(); toast('\u0c17\u0c21\u0c3f \u0c2a\u0c46\u0c1f\u0c4d\u0c1f\u0c46 \u0c24\u0c40\u0c38\u0c3f\u0c35\u0c47\u0c36\u0c3e\u0c02. \u0c38\u0c30\u0c48\u0c28 \u0c2a\u0c47\u0c1c\u0c40\u0c32\u0c4b \u0c17\u0c21\u0c3f \u0c1a\u0c41\u0c1f\u0c4d\u0c1f\u0c42 \u0c2e\u0c33\u0c4d\u0c33\u0c40 \u0c17\u0c40\u0c2f\u0c02\u0c21\u0c3f.'); break;
      case 'scan-mode': if (SC) { SC.mode = v; render(); } break;
      case 'scan-zoom': if (SC) { SC.zoom = Math.max(1, Math.min(4, SC.zoom + (+v))); render(); } break;
      case 'scan-flip': if (SC) { var fk = t.getAttribute('data-r') + ',' + t.getAttribute('data-c'); SC.flip[fk] = !SC.flip[fk]; render(); } break;
      case 'scan-ocr': if (SC && !U.busy) scanOCR(); break;
      case 'scan-draft': if (SC && SC.vals && !U.busy) scanMakeDraft(); break;
      case 'scan-regrid': regridDraft(); break;
      case 'scan-answers': if (SC && SC.vals && !U.busy) scanAnswers(); break;
      case 'publish-blog':
        var bp = draftToPuzzle(D, false), why = v === 'draft' ? (bp.date && /^\d{2}\.\d{2}\.\d{4}$/.test(bp.date) ? '' : '\u0c2e\u0c41\u0c02\u0c26\u0c41 \u0c24\u0c47\u0c26\u0c40 (DD.MM.YYYY) \u0c07\u0c35\u0c4d\u0c35\u0c02\u0c21\u0c3f.') : draftReadyForBlog(bp);
        if (why) { U.status = { kind: 'err', text: why }; render(); toast(why); break; }
        if (PUZZLES.some(function (p) { return p.date === bp.date && p.postId; }) && U.confirm !== 'dup') { U.confirm = 'dup'; toast(bp.date + ' \u0c24\u0c47\u0c26\u0c40\u0c24\u0c4b \u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d\u200c\u0c32\u0c4b \u0c07\u0c2a\u0c4d\u0c2a\u0c1f\u0c3f\u0c15\u0c47 \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d \u0c09\u0c02\u0c26\u0c3f. \u0c05\u0c2f\u0c3f\u0c28\u0c3e \u0c15\u0c4a\u0c24\u0c4d\u0c24\u0c17\u0c3e \u0c35\u0c47\u0c2f\u0c3e\u0c32\u0c02\u0c1f\u0c47 \u0c2e\u0c33\u0c4d\u0c33\u0c40 \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c02\u0c21\u0c3f.'); break; }
        U.confirm = ''; blogPublish(bp, v === 'draft'); break;
      case 'update-blog':
        var up = draftToPuzzle(D, false), why2 = draftReadyForBlog(up);
        if (why2) { U.status = { kind: 'err', text: why2 }; render(); toast(why2); break; }
        blogUpdate(up, up.date + ' \u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d \u0c38\u0c30\u0c3f\u0c26\u0c3f\u0c26\u0c4d\u0c26\u0c3e\u0c02.', function () { keepPublished(D, up.url); D = null; S.draft = null; delete S.prog.draft; save(); location.hash = '#admin'; }); break;
      case 'unpub':
        var upp = findPuzzle(t.getAttribute('data-id')); if (!upp || !upp.postId) break;
        if (U.confirm !== 'unpub:' + upp.id) { U.confirm = 'unpub:' + upp.id; render(); break; }
        U.confirm = ''; blogUnpublish(upp); break;
      case 'imp-open': var io = U.imports && U.imports[+t.getAttribute('data-i')]; if (io) openImport(io); break;
      case 'copy-site': var cp0 = findPuzzle(t.getAttribute('data-id')); if (cp0) copyForSite(cp0); break;
      case 'copy-site-draft': if (D) { var cd0 = draftToPuzzle(D, false); if (!cd0.id) cd0.id = 'e' + dateKey(cd0.date); copyForSite(cd0); } break;
      case 'copy-close': U.copyText = ''; render(); break;
      case 'avatar': S.profile.avatar = v; save(); render(); break;
      case 'pswitch': switchPlayer(v); break;
      case 'pdel': U.confirm = 'pdel:' + v; render(); break;
      case 'pdel-no': U.confirm = ''; render(); break;
      case 'pdel-yes': dropPlayer(v); U.confirm = ''; toast('\u0c2a\u0c4d\u0c30\u0c4a\u0c2b\u0c48\u0c32\u0c4d \u0c24\u0c4a\u0c32\u0c17\u0c3f\u0c02\u0c1a\u0c3e\u0c02.'); render(); break;
      case 'padd': var pn = document.getElementById('prof-new'); addPlayer(pn ? pn.value.trim().slice(0, 30) : ''); break;
      case 'rec': if (REC.on) stopRec(); else startRec(); break;
      case 'hs': var hgw = view.querySelector('.gridwrap'); if (hgw) hgw.scrollBy({ left: +v * hgw.clientWidth * 0.6, behavior: 'smooth' }); break;
      case 'scell': CUR.P.r = +t.getAttribute('data-r'); CUR.P.c = +t.getAttribute('data-c'); save(); refreshPlay(); var sci = document.getElementById('tl-in'); if (sci) sci.focus(); break;
      case 'tl-help': var th = document.getElementById('tl-help'); if (th) th.hidden = !th.hidden; break;
      case 'kb-hide': U.autoHidden = false; U.lastKb = U.panel === 'type' ? 'type' : 'keys'; U.panel = 'none'; U.cons = null; U.conj = null; if (document.activeElement) document.activeElement.blur(); render(); break;
      case 'kb-show': U.autoHidden = false; U.panel = U.lastKb || (S.prefs.keypad === 'phone' ? 'type' : 'keys'); render(); if (U.panel === 'type') { var kbs = document.getElementById('tl-in'); if (kbs) kbs.focus(); } break;
      case 'tl-commit': case 'tl-pick':
        var tli = document.getElementById('tl-in'); if (!tli) break;
        var cand = a === 'tl-pick' ? (U.tlC || [])[+t.getAttribute('data-i')] : pickFor(tli.value);
        settleIME(tli, function () {
          tli.value = '';
          if (cand) commitTyped(cand); else updateCands();
          var tli2 = document.getElementById('tl-in'); if (tli2) { tli2.value = ''; tli2.focus(); updateCands(); }
        });
        break;
      case 'fix-open': U.panel = 'fix'; render(); var fxi = document.getElementById('fix-in'); if (fxi) { fxi.focus(); fxi.setSelectionRange(fxi.value.length, fxi.value.length); } break;
      case 'fix-save':
        var fe = cur(), fx = document.getElementById('fix-in'); if (!fx || !canFix(fe)) break;
        var nt = convertLatin(fx.value).replace(/\s+/g, ' ').trim();
        if (!nt) { toast('\u0c06\u0c27\u0c3e\u0c30\u0c02 \u0c16\u0c3e\u0c33\u0c40\u0c17\u0c3e \u0c09\u0c02\u0c21\u0c15\u0c42\u0c21\u0c26\u0c41.'); break; }
        var orig = PUZZLES.filter(function (p) { return p.id === CUR.id; })[0];
        var np = JSON.parse(JSON.stringify(orig)), hit = np.clues.filter(function (c) { return c.d === fe.d && +c.n === +fe.n; })[0];
        if (!hit) { toast('\u0c08 \u0c06\u0c27\u0c3e\u0c30\u0c02 \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d\u200c\u0c32\u0c4b \u0c26\u0c4a\u0c30\u0c15\u0c32\u0c47\u0c26\u0c41.'); break; }
        if (hit.text === nt) { U.panel = 'keys'; render(); break; }
        hit.text = nt;
        if (!IS_CLAUDE) { blogUpdate(np, fe.n + ' ' + dirName(fe.d) + ' \u0c06\u0c27\u0c3e\u0c30\u0c02 \u0c2c\u0c4d\u0c32\u0c3e\u0c17\u0c4d\u200c\u0c32\u0c4b \u0c38\u0c30\u0c3f\u0c26\u0c3f\u0c26\u0c4d\u0c26\u0c3e\u0c02.', function () { U.panel = S.prefs.keypad === 'phone' ? 'type' : 'keys'; }); break; }
        savePuzzles(PUZZLES.map(function (p) { return p.id === np.id ? np : p; }), fe.n + ' ' + dirName(fe.d) + ' \u0c06\u0c27\u0c3e\u0c30\u0c02 \u0c38\u0c30\u0c3f\u0c26\u0c3f\u0c26\u0c4d\u0c26\u0c3e\u0c02.', function () { U.panel = S.prefs.keypad === 'phone' ? 'type' : 'keys'; });
        break;
      case 'pref': if (autoOn() && t.getAttribute('data-k') === 'hard') autoStop(true), U.panel = 'none';
        var pk = t.getAttribute('data-k'); S.prefs[pk] = pk === 'hard' ? v === '1' : v; if (pk === 'hard') U.shown = {}; applyPrefs(); save(); render(); break;
      case 'fontset': var fs = FONTSETS.filter(function (f) { return f[0] === v; })[0]; if (fs) { S.prefs.fontGrid = fs[2]; S.prefs.fontClue = fs[3]; S.prefs.fontHead = fs[4]; applyPrefs(); save(); render(); toast(fs[1] + ' \u0c2b\u0c3e\u0c02\u0c1f\u0c4d\u200c\u0c32\u0c41 \u0c2a\u0c46\u0c1f\u0c4d\u0c1f\u0c3e\u0c02.'); } break;
      case 'fontopen': U.fontOpen = U.fontOpen === v ? null : v; render(); break;
      case 'toggle': var tk = t.getAttribute('data-k'); S.prefs[tk] = !S.prefs[tk]; applyPrefs(); save(); render(); break;
      case 'variant': U.showVariant = +v; render(); break;
      case 'month': U.query = v; location.hash = '#archive'; break;
      case 'arch-from-home': U.query = U.homeQ || ''; break;
      case 'clear-grid':
        if (U.confirm !== 'clear') { U.confirm = 'clear'; refreshPlay(); var pp2 = view.querySelector('.ppanel'); if (pp2) pp2.innerHTML = panelHTML(); break; }
        S.prog[CUR.id] = freshProgress(); U.confirm = ''; U.shown = {}; save(); setCurrent(CUR.id); render(); toast('\u0c17\u0c21\u0c3f \u0c16\u0c3e\u0c33\u0c40 \u0c1a\u0c47\u0c36\u0c3e\u0c02 \u2014 \u0c07\u0c2a\u0c4d\u0c2a\u0c41\u0c21\u0c41 \u0c2e\u0c40\u0c30\u0c47 \u0c06\u0c21\u0c02\u0c21\u0c3f!'); break;
      case 'replay':
        if (U.confirm !== 'replay') { U.confirm = 'replay'; render(); break; }
        S.prog[t.getAttribute('data-id')] = freshProgress(); U.confirm = ''; save(); location.hash = '#play-' + t.getAttribute('data-id'); break;
      case 'sh-opt': var sin = U.shIn; if (!sin || !document.body.contains(sin)) break; var shv = v; var sb = document.getElementById('shopts'); if (sb) sb.remove(); U.shIn = null;
        settleIME(sin, function () { replaceRange(sin, 0, sin.value.length, shv); sin.value = shv; sheetCommit(sin); var sb2 = document.getElementById('shopts'); if (sb2) sb2.remove(); U.shIn = null; sheetNext(sin); }); break;
      case 'relink': if (U.busy) break; if (U.confirm !== 'relink') { U.confirm = 'relink'; render(); break; } U.confirm = ''; runRelink(0); break;
      case 'reset-post':
        var rid = t.getAttribute('data-id');
        if (U.confirm !== 'reset-' + rid) { U.confirm = 'reset-' + rid; render(); clearTimeout(U.rsT); U.rsT = setTimeout(function () { if (U.confirm === 'reset-' + rid) { U.confirm = ''; render(); } }, 4000); break; }
        U.confirm = ''; S.prog[rid] = freshProgress(); if (autoOn() && U.auto.id === rid) autoStop(true); if (CUR && CUR.id === rid) { U.shown = {}; U.fin = null; setCurrent(rid); } save(); render(); toast('\u0c08 \u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02 \u0c2e\u0c4a\u0c26\u0c1f\u0c3f \u0c28\u0c41\u0c02\u0c1a\u0c3f \u2014 \u0c17\u0c21\u0c3f \u0c16\u0c3e\u0c33\u0c40 \u0c1a\u0c47\u0c36\u0c3e\u0c02.'); break;
      case 'order': S.prefs.order = v === 'date' ? 'date' : 'use'; save(); render(); break;
      case 'resetall':
        if (U.confirm !== 'resetall') { U.confirm = 'resetall'; render(); break; }
        S.prog = {}; U.confirm = ''; save(); toast('\u0c05\u0c28\u0c4d\u0c28\u0c3f \u0c06\u0c1f\u0c32 \u0c2a\u0c41\u0c30\u0c4b\u0c17\u0c24\u0c3f \u0c24\u0c41\u0c21\u0c3f\u0c1a\u0c3f\u0c35\u0c47\u0c36\u0c3e\u0c02.'); render(); break;
      case 'copy':
        var cp = findPuzzle(t.getAttribute('data-id')), CP = S.prog[t.getAttribute('data-id')];
        var msg = '\u0c28\u0c47\u0c28\u0c41 \u0c08-\u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02\u0c32\u0c4b \u201c' + cp.title + (cp.date ? ' ' + cp.date : '') + '\u201d ' + fmt(CP.doneTime) + '\u0c32\u0c4b \u0c2a\u0c42\u0c30\u0c4d\u0c24\u0c3f \u0c1a\u0c47\u0c36\u0c3e\u0c28\u0c41! \u0c35\u0c3e\u0c21\u0c3f\u0c28 \u0c38\u0c42\u0c1a\u0c28\u0c32\u0c41: ' + CP.hints + '. ' + BLOG;
        try { navigator.clipboard.writeText(msg).then(function () { toast('\u0c38\u0c02\u0c26\u0c47\u0c36\u0c02 \u0c15\u0c3e\u0c2a\u0c40 \u0c05\u0c2f\u0c3f\u0c02\u0c26\u0c3f. \u0c0e\u0c15\u0c4d\u0c15\u0c21\u0c48\u0c28\u0c3e \u0c2a\u0c47\u0c38\u0c4d\u0c1f\u0c4d \u0c1a\u0c47\u0c2f\u0c02\u0c21\u0c3f.'); }, function () { toast(msg); }); } catch (e) { toast(msg); }
        break;
      case 'copy-feed':
        try { navigator.clipboard.writeText(FEED).then(function () { toast('\u0c2b\u0c40\u0c21\u0c4d \u0c32\u0c3f\u0c02\u0c15\u0c4d \u0c15\u0c3e\u0c2a\u0c40 \u0c05\u0c2f\u0c3f\u0c02\u0c26\u0c3f.'); }, function () { selectText('feed-url'); }); } catch (e) { selectText('feed-url'); }
        break;
      // admin
      case 'ai-read': var fl = document.getElementById('up-files'); if (!fl || !fl.files.length) { toast('\u0c2e\u0c41\u0c02\u0c26\u0c41 \u0c2a\u0c26 \u0c35\u0c3f\u0c28\u0c4b\u0c26\u0c02 \u0c2b\u0c4b\u0c1f\u0c4b \u0c32\u0c47\u0c26\u0c3e PDF (1) \u0c0e\u0c02\u0c1a\u0c41\u0c15\u0c4b\u0c02\u0c21\u0c3f.'); break; } pendingAnswers(); aiRead('puzzle', fl.files); break;
      case 'ai-stop': if (U.ctl) U.ctl.abort(); break;
      case 'tl-alt': pickAlt(+v); break;
      case 'go-posts': var ap = document.getElementById('adm-posts'); if (ap) { ap.scrollIntoView({ block: 'start', behavior: 'smooth' }); var aq = document.getElementById('adm-q'); if (aq) setTimeout(function () { aq.focus({ preventScroll: true }); }, 400); } break;
      case 'pic-open': U.picOpen = U.picOpen === v ? '' : v; render(); break;
      case 'pic-use': setPic(t.getAttribute('data-k'), t.getAttribute('data-u')); break;
      case 'pic-reset': if (v === 'blk') D.blkImg = ''; else D.finImg = ''; saveDraft(); render(); break;
      case 'pic-link': var pu = (document.getElementById('pic-url-' + v) || {}).value || '';
        if (!/^https:\/\/\S+$/i.test(pu.trim())) { toast('https:// \u0c24\u0c4b \u0c2e\u0c4a\u0c26\u0c32\u0c2f\u0c4d\u0c2f\u0c47 \u0c2c\u0c4a\u0c2e\u0c4d\u0c2e \u0c32\u0c3f\u0c02\u0c15\u0c4d \u0c07\u0c35\u0c4d\u0c35\u0c02\u0c21\u0c3f.'); break; }
        setPic(v, pu.trim()); break;
      case 'te-type': S.prefs.teType = S.prefs.teType === false; save(); render(); break;
      case 'draft-save': if (!D) break; saveDraft(); keepDraft(D); render(); break;
      case 'draft-open': var kd = (S.drafts || []).filter(function (x) { return x.uid === v; })[0]; if (!kd) break;
        if (D && D.uid !== kd.uid) stashDraft();
        D = JSON.parse(JSON.stringify(kd)); delete D.saved; U.er = 0; U.ec = 0; U.emode = 'ans'; U.srcUrls = []; U.status = { kind: 'ok', text: '\u0c38\u0c47\u0c35\u0c4d \u0c1a\u0c47\u0c38\u0c3f\u0c28 \u0c21\u0c4d\u0c30\u0c3e\u0c2b\u0c4d\u0c1f\u0c4d \u0c24\u0c46\u0c30\u0c3f\u0c1a\u0c3e\u0c02: ' + draftLabel(D) }; saveDraft(); location.hash = '#edit'; break;
      case 'draft-del': if (U.confirm !== 'ddel-' + v) { U.confirm = 'ddel-' + v; render(); break; } U.confirm = ''; dropKept(v); render(); break;
      case 'blank': stashDraft(); D = newDraft(12, 12); var ud = document.getElementById('up-date'); D.date = ud ? ud.value.trim() : ''; U.er = 0; U.ec = 0; U.emode = 'black'; U.srcUrls = []; saveDraft(); location.hash = '#edit'; break;
      case 'imp-read': var ta = document.getElementById('imp-paste'); if (!ta || !ta.value.trim()) { toast('\u0c2e\u0c41\u0c02\u0c26\u0c41 \u0c2b\u0c40\u0c21\u0c4d \u0c1f\u0c46\u0c15\u0c4d\u0c38\u0c4d\u0c1f\u0c4d \u0c05\u0c24\u0c3f\u0c15\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f.'); break; } runImport([ta.value]); break;
      case 'imp-toggle': var iid = t.getAttribute('data-id'); U.importSel[iid] = !U.importSel[iid]; render(); break;
      case 'imp-all': var all = U.imports.every(function (p) { return U.importSel[p.id]; }); U.imports.forEach(function (p) { U.importSel[p.id] = !all; }); render(); break;
      case 'imp-publish':
        var chosen = U.imports.filter(function (p) { return U.importSel[p.id]; }); if (!chosen.length) break;
        var ids = {}; chosen.forEach(function (p) { ids[p.id] = true; });
        var merged = PUZZLES.filter(function (p) { return !ids[p.id]; }).concat(chosen.map(function (p) { var c = Object.assign({}, p); delete c.exists; return c; }));
        savePuzzles(merged, chosen.length + ' \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c41\u0c32\u0c41 \u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c3f\u0c02\u0c1a\u0c3e\u0c02. \u0c05\u0c35\u0c3f \u0c07\u0c2a\u0c4d\u0c2a\u0c41\u0c21\u0c41 \u0c39\u0c4b\u0c2e\u0c4d, \u0c06\u0c30\u0c4d\u0c15\u0c48\u0c35\u0c4d\u200c\u0c32\u0c4b \u0c09\u0c28\u0c4d\u0c28\u0c3e\u0c2f\u0c3f.', function () { U.imports = null; U.importSel = {}; });
        break;
      case 'edit-pub': var ep = findPuzzle(t.getAttribute('data-id')); if (!ep) break; stashDraft(); D = draftFromPuzzle(ep); U.er = 0; U.ec = 0; U.emode = 'black'; U.srcUrls = []; saveDraft(); location.hash = '#edit'; break;
      case 'del-pub':
        var did = t.getAttribute('data-id');
        if (U.confirm !== 'del:' + did) { U.confirm = 'del:' + did; render(); break; }
        U.confirm = ''; savePuzzles(PUZZLES.filter(function (p) { return p.id !== did; }), '\u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d \u0c24\u0c4a\u0c32\u0c17\u0c3f\u0c02\u0c1a\u0c3e\u0c02.'); break;
      // editor
      case 'ecell':
        var er = +t.getAttribute('data-r'), ec = +t.getAttribute('data-c');
        if (U.emode === 'black') { D.black[er][ec] = !D.black[er][ec]; if (D.black[er][ec]) { D.ans[er][ec] = ''; delete D.nums[key(er, ec)]; } saveDraft(); }
        else if (U.emode === 'ans' && er === U.er && ec === U.ec) U.edir = U.edir === 'A' ? 'D' : 'A';
        U.er = er; U.ec = ec; render();
        if (U.emode === 'num') { var ni = document.getElementById('num-in'); if (ni) ni.focus(); }
        break;
      case 'emode': U.emode = v; U.cons = null; U.conj = null; render(); break;
      case 'eflip': U.edir = U.edir === 'A' ? 'D' : 'A'; render(); break;
      case 'auto-num': draftAutoNumber(); toast('\u0c38\u0c02\u0c16\u0c4d\u0c2f\u0c32\u0c41 \u0c06\u0c1f\u0c4b\u0c17\u0c3e \u0c35\u0c47\u0c36\u0c3e\u0c02. \u0c08\u0c28\u0c3e\u0c21\u0c41 \u0c38\u0c02\u0c16\u0c4d\u0c2f\u0c32 \u0c35\u0c30\u0c41\u0c38 \u0c35\u0c47\u0c30\u0c41\u0c17\u0c3e \u0c09\u0c02\u0c1f\u0c47 \u0c1a\u0c47\u0c24\u0c3f\u0c24\u0c4b \u0c38\u0c30\u0c3f\u0c26\u0c3f\u0c26\u0c4d\u0c26\u0c02\u0c21\u0c3f.'); render(); break;
      case 'num-set': var nv = parseInt((document.getElementById('num-in') || {}).value, 10); if (nv > 0 && !D.black[U.er][U.ec]) { D.nums[key(U.er, U.ec)] = nv; saveDraft(); render(); } else toast('\u0c24\u0c46\u0c32\u0c4d\u0c32 \u0c17\u0c21\u0c3f \u0c0e\u0c02\u0c1a\u0c41\u0c15\u0c41\u0c28\u0c3f \u0c38\u0c02\u0c16\u0c4d\u0c2f \u0c07\u0c35\u0c4d\u0c35\u0c02\u0c21\u0c3f.'); break;
      case 'num-clear': delete D.nums[key(U.er, U.ec)]; saveDraft(); render(); break;
      case 'resize': resizeDraft(+(document.getElementById('d-rows') || {}).value, +(document.getElementById('d-cols') || {}).value); U.er = 0; U.ec = 0; render(); break;
      case 'etab': U.etab = v; render(); break;
      case 'clue-add': case 'clue-ins':
        // a new clue row: right after the tapped row (+) or at the end; its number and length are the next of the grid's
        // across / down words that has no clue yet, so only the text is left to type
        var at = t.getAttribute('data-i') != null ? +t.getAttribute('data-i') : -1, dirN = at >= 0 && D.clues[at] ? D.clues[at].d : U.etab;
        var used = {}; D.clues.forEach(function (c) { if (c.d === dirN) used[+c.n] = 1; });
        var after = at >= 0 && D.clues[at] ? +D.clues[at].n || 0 : 0, sl = draftSlots().filter(function (x) { return x.d === dirN && !used[x.n]; });
        var pick = sl.filter(function (x) { return x.n > after; })[0] || (at < 0 ? sl[0] : null);
        var nc = { d: dirN, n: pick ? pick.n : '', len: pick ? pick.len : null, text: '' }, ni = at >= 0 ? at + 1 : D.clues.length;
        D.clues.splice(ni, 0, nc); saveDraft(); render();
        var nci = view.querySelector('input[data-ci="' + ni + '"][data-f="' + (pick ? 'text' : 'n') + '"]');
        if (nci) { nci.focus({ preventScroll: true }); nci.scrollIntoView({ block: 'center' }); }
        if (!pick) toast('\u0c17\u0c21\u0c3f\u0c32\u0c4b ' + dirName(dirN) + ' \u0c2a\u0c26\u0c3e\u0c32\u0c28\u0c4d\u0c28\u0c3f\u0c02\u0c1f\u0c3f\u0c15\u0c40 \u0c06\u0c27\u0c3e\u0c30\u0c3e\u0c32\u0c41 \u0c09\u0c28\u0c4d\u0c28\u0c3e\u0c2f\u0c3f \u2014 \u0c38\u0c02\u0c16\u0c4d\u0c2f \u0c2e\u0c40\u0c30\u0c47 \u0c07\u0c35\u0c4d\u0c35\u0c02\u0c21\u0c3f.');
        break;
      case 'clue-del': D.clues.splice(+t.getAttribute('data-i'), 1); saveDraft(); render(); break;
      case 'try': S.prog.draft = freshProgress(); save(); break;
      case 'publish-draft':
        var pz = draftToPuzzle(D, false), why3 = draftReadyForBlog(pz);
        if (why3) { U.status = { kind: 'err', text: why3 }; render(); toast(why3); break; }
        if (!pz.date) { toast('\u0c2e\u0c41\u0c02\u0c26\u0c41 \u0c24\u0c47\u0c26\u0c40 (DD.MM.YYYY) \u0c07\u0c35\u0c4d\u0c35\u0c02\u0c21\u0c3f.'); break; }
        if (!/^\d{2}\.\d{2}\.\d{4}$/.test(pz.date)) { toast('\u0c24\u0c47\u0c26\u0c40 DD.MM.YYYY \u0c30\u0c42\u0c2a\u0c02\u0c32\u0c4b \u0c09\u0c02\u0c21\u0c3e\u0c32\u0c3f, \u0c09\u0c26\u0c3e: 25.05.2025.'); break; }
        var taken = {}; PUZZLES.forEach(function (p) { if (p.id !== D.id) taken[p.id] = true; });
        pz.id = D.id || makeId(pz.date, taken, pz.paper); pz.added = new Date().toISOString();
        var list = PUZZLES.filter(function (p) { return p.id !== pz.id; }).concat([pz]);
        savePuzzles(list, (D.id ? '\u0c2e\u0c3e\u0c30\u0c4d\u0c2a\u0c41\u0c32\u0c41 \u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c3f\u0c02\u0c1a\u0c3e\u0c02.' : '\u0c15\u0c4a\u0c24\u0c4d\u0c24 \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c4d \u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c3f\u0c02\u0c1a\u0c3e\u0c02 \u2014 ' + pz.date), function () { forgetDraft(); D = null; S.draft = null; delete S.prog.draft; save(); location.hash = '#admin'; });
        break;
      case 'export':
        var body = JSON.stringify({ v: 1, updated: new Date().toISOString(), puzzles: PUZZLES.map(cleanPuzzle) });
        cap('downloads').then(function (dl) {
          if (!dl) throw { code: 'unavailable' };
          return dl.save({ filename: 'puzzles.json', data: body });
        }).then(function () { toast('puzzles.json \u0c38\u0c47\u0c35\u0c4d \u0c05\u0c2f\u0c3f\u0c02\u0c26\u0c3f. \u0c26\u0c3e\u0c28\u0c4d\u0c28\u0c3f \u0c2e\u0c40 \u0c38\u0c48\u0c1f\u0c4d \u0c2b\u0c4b\u0c32\u0c4d\u0c21\u0c30\u0c4d\u200c\u0c32\u0c4b \u0c2a\u0c46\u0c1f\u0c4d\u0c1f\u0c3f \u0c2e\u0c33\u0c4d\u0c33\u0c40 \u0c2a\u0c4d\u0c30\u0c1a\u0c41\u0c30\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f.'); }, function (e) {
          if (e && e.code === 'declined') return;
          try { navigator.clipboard.writeText(body).then(function () { toast('\u0c07\u0c15\u0c4d\u0c15\u0c21 \u0c38\u0c47\u0c35\u0c4d \u0c15\u0c41\u0c26\u0c30\u0c32\u0c47\u0c26\u0c41 \u2014 \u0c2b\u0c48\u0c32\u0c4d \u0c35\u0c3f\u0c37\u0c2f\u0c3e\u0c28\u0c4d\u0c28\u0c3f \u0c15\u0c3e\u0c2a\u0c40 \u0c1a\u0c47\u0c36\u0c3e\u0c02. puzzles.json \u0c2a\u0c47\u0c30\u0c41\u0c24\u0c4b \u0c05\u0c24\u0c3f\u0c15\u0c3f\u0c02\u0c1a\u0c3f \u0c38\u0c47\u0c35\u0c4d \u0c1a\u0c47\u0c2f\u0c02\u0c21\u0c3f.'); }, function () { toast('\u0c08 \u0c35\u0c40\u0c15\u0c4d\u0c37\u0c23\u0c32\u0c4b \u0c2b\u0c48\u0c32\u0c4d \u0c38\u0c47\u0c35\u0c4d \u0c1a\u0c47\u0c2f\u0c21\u0c02 \u0c15\u0c41\u0c26\u0c30\u0c26\u0c41.'); }); } catch (x) { toast('\u0c08 \u0c35\u0c40\u0c15\u0c4d\u0c37\u0c23\u0c32\u0c4b \u0c2b\u0c48\u0c32\u0c4d \u0c38\u0c47\u0c35\u0c4d \u0c1a\u0c47\u0c2f\u0c21\u0c02 \u0c15\u0c41\u0c26\u0c30\u0c26\u0c41.'); }
        });
        break;
      case 'draft-drop':
        if (U.confirm !== 'drop') { U.confirm = 'drop'; render(); break; }
        forgetDraft(); D = null; S.draft = null; U.confirm = ''; save(); location.hash = '#admin'; break;
    }
  });
  function selectText(id) { var el = document.getElementById(id); if (!el) return; var rg = document.createRange(); rg.selectNodeContents(el); var sl = window.getSelection(); sl.removeAllRanges(); sl.addRange(rg); toast('\u0c32\u0c3f\u0c02\u0c15\u0c4d\u200c\u0c28\u0c41 \u0c0e\u0c02\u0c1a\u0c41\u0c15\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c02 \u2014 \u0c15\u0c3e\u0c2a\u0c40 \u0c1a\u0c47\u0c2f\u0c02\u0c21\u0c3f.'); }
  view.addEventListener('input', function (ev) {
    var t = ev.target;
    if (t.id === 'tl-in') { if (!ev.isComposing) tlInput(t); else updateCands(); return; }
    if (t.id === 'fix-in') { if (!ev.isComposing && S.prefs.teType !== false) autoConvertField(t); teStrip(t); return; }
    if (t.id === 'prof-name') { S.profile.name = t.value.trim().slice(0, 30); save(); return; }
    if (t.hasAttribute && t.hasAttribute('data-sr')) { t._typed = true; if (!ev.isComposing && !/[A-Za-z]/.test(t.value)) sheetCommit(t); sheetOpts(t); return; }
    if (t.hasAttribute && t.hasAttribute('data-ocr') && SC) { if (!ev.isComposing && S.prefs.teType !== false) autoConvertField(t); teStrip(t); var od = t.getAttribute('data-ocr'); SC.ocr[od] = t.value; var on = document.getElementById('ocr-n-' + od); if (on) on.textContent = parseClueText(t.value, od).length; return; }
    if (t.id === 'sc-date' && SC) { SC.date = t.value; return; }
    if (t.id === 'adm-find') { U.admFind = t.value; var af = document.getElementById('adm-find-res'); if (af) af.innerHTML = admFindHTML(!!U.busy); return; }
    if (t.id === 'adm-q') { U.admQ = t.value; var al = document.getElementById('adm-list'); if (al) al.innerHTML = postsMgrHTML(!!U.busy) || '<p class="note" style="padding:10px 0">\u0c07\u0c02\u0c15\u0c3e \u0c0f \u0c2a\u0c4b\u0c38\u0c4d\u0c1f\u0c42 \u0c32\u0c47\u0c26\u0c41.</p>'; return; }
    if (t.id === 'home-q') { U.homeQ = t.value; var hr = document.getElementById('home-res'); if (hr) hr.innerHTML = homeResults(); return; }
    if (t.id === 'arch-q') { U.query = t.value; var res = document.getElementById('arch-res'); if (res) res.innerHTML = archiveResults(); return; }
    if (!D) return;
    if (t.hasAttribute('data-df')) { if (t.getAttribute('data-df') === 'title' && !ev.isComposing && S.prefs.teType !== false) autoConvertField(t); if (t.getAttribute('data-df') === 'title') teStrip(t); D[t.getAttribute('data-df')] = t.value; saveDraft(); return; }
    if (t.hasAttribute('data-ci')) {
      var f = t.getAttribute('data-f'); if (f === 'text' && !ev.isComposing && S.prefs.teType !== false) autoConvertField(t); if (f === 'text') teStrip(t);
      var cl = D.clues[+t.getAttribute('data-ci')];
      if (cl) { cl[f] = f === 'text' ? t.value : (parseInt(t.value, 10) || ''); saveDraft(); refreshChecks(); }
    }
  });
  view.addEventListener('change', function (ev) {
    var t = ev.target;
    if (t.id === 'up-paper') { S.prefs.paper = paperOf(t.value).id; save(); }
    if (t.id === 'sc-paper' && SC) { SC.paper = paperOf(t.value).id; S.prefs.paper = SC.paper; save(); }
    if (t.id === 'd-paper' && D) {   // a title still at the old paper's name follows the new paper
      var oldT = paperOf(D.paper).title; D.paper = paperOf(t.value).id; if (!(D.title || '').trim() || D.title === oldT) D.title = paperOf(D.paper).title;
      saveDraft(); render();
    }
    if (t.id === 'imp-files' && t.files.length) { Promise.all(Array.prototype.map.call(t.files, readFileText)).then(runImport, function () { U.status = { kind: 'err', text: '\u0c2b\u0c48\u0c32\u0c4d \u0c24\u0c46\u0c30\u0c35\u0c32\u0c47\u0c15\u0c2a\u0c4b\u0c2f\u0c3e\u0c02.' }; render(); }); }
    if (t.id === 'ans-files' && t.files.length) aiRead('answers', t.files);
    if (t.hasAttribute && t.hasAttribute('data-pick') && t.files.length) uploadPic(t.getAttribute('data-pick'), t.files[0]);
    if (t.id === 'ans-gem' && t.files.length) geminiRead('answers', t.files);
    if (t.id === 'ans-scan' && t.files.length) scanOpen('answers', t.files);
    if ((t.id === 'sc-r' || t.id === 'sc-c') && SC) { var nv2 = Math.max(3, Math.min(25, parseInt(t.value, 10) || 12)); if (t.id === 'sc-r') SC.R = nv2; else SC.C = nv2; SC.flip = {}; scanDetect(); render(); }
  });

  view.addEventListener('compositionstart', function (ev) { COMPOSING = ev.target; });
  view.addEventListener('compositionend', function (ev) {
    var t = ev.target; COMPOSING = null; if (U.imeSettle) return;
    if (t.id === 'tl-in') tlInput(t);
    else if (teField(t) && S.prefs.teType !== false) { autoConvertField(t); t.dispatchEvent(new Event('input', { bubbles: true })); }
  });
  function markRun(t) {
    var r = +t.getAttribute('data-sr'), c = +t.getAttribute('data-sc'), dr = U.edir === 'D' ? 1 : 0, dc = 1 - dr;
    U.er = r; U.ec = c;
    Array.prototype.forEach.call(view.querySelectorAll('.scell.run'), function (x) { x.classList.remove('run'); });
    function w(a, b) { return a >= 0 && b >= 0 && a < D.R && b < D.C && !D.black[a][b]; }
    while (w(r - dr, c - dc)) { r -= dr; c -= dc; }
    for (; w(r, c); r += dr, c += dc) { var x = view.querySelector('input[data-sr="' + r + '"][data-sc="' + c + '"]'); if (x) x.parentNode.classList.add('run'); }
  }
  view.addEventListener('focusin', function (ev) {
    var t = ev.target; if (!(t.hasAttribute && t.hasAttribute('data-sr'))) return;
    if (D) markRun(t);
    t.setAttribute('data-old', t.value); t.setAttribute('data-fresh', '1'); t._typed = false;
    try { t.select(); } catch (e) {} setTimeout(function () { try { if (!t._typed) t.select(); } catch (e) {} }, 0);   // not once typing has begun
  });
  // the tap that focused a square must not drop the selection (then typing replaces the letter, as in Excel)
  view.addEventListener('mouseup', function (ev) { var t = ev.target; if (t.getAttribute && t.getAttribute('data-fresh') === '1') { ev.preventDefault(); t.removeAttribute('data-fresh'); try { t.select(); } catch (e) {} } });
  view.addEventListener('touchend', function (ev) { var t = ev.target; if (t.getAttribute && t.getAttribute('data-fresh') === '1') { t.removeAttribute('data-fresh'); setTimeout(function () { try { if (!t._typed) t.select(); } catch (e) {} }, 0); } });
  // leaving a field: a last English word with no space after it turns Telugu too
  view.addEventListener('focusout', function (ev) {
    if (U.imeSettle) return;   // only letting the keyboard finish its word
    if (teField(ev.target)) setTimeout(function () { if (TE && document.activeElement !== TE.el) teHide(); }, 250);
    if (ev.target.hasAttribute && ev.target.hasAttribute('data-sr')) { sheetCommit(ev.target); var sht = ev.target; setTimeout(function () { var b = document.getElementById('shopts'); if (b && U.shIn === sht && document.activeElement !== sht) { b.remove(); U.shIn = null; } }, 200); return; }
    var t = ev.target; if (!teField(t) || S.prefs.teType === false) return;
    if (/[A-Za-z]/.test(t.value)) { var nv = convertLatin(t.value); if (nv !== t.value) { t.value = nv; t.dispatchEvent(new Event('input', { bubbles: true })); } }
    setTimeout(function () { var bar = document.getElementById('tlalts'); if (bar && !(document.activeElement && (document.activeElement === t || teField(document.activeElement)))) { bar.remove(); U.tlAlt = null; } }, 250);
  });
  view.addEventListener('keyup', function (ev) { if (teField(ev.target) && /^(ArrowLeft|ArrowRight|Home|End)$/.test(ev.key)) teStrip(ev.target); });
  view.addEventListener('click', function (ev) { if (teField(ev.target)) setTimeout(function () { teStrip(ev.target); }, 0); });
  view.addEventListener('keydown', function (ev) {
    var t = ev.target, k = ev.key, plain = !ev.isComposing && !ev.altKey && !ev.ctrlKey && !ev.metaKey;
    if (k === 'Escape' && TE) { teHide(); return; }
    // the Telugu list under a clue box: \u2191 \u2193 light up a row; Enter / Tab put the lit one in (Space: it and a space); 1\u20139 pick a row
    var tb = TE && t === TE.el && plain ? document.getElementById('teopts') : null;
    if (tb && tb._opts) {
      var thi = tb._hi || 0;
      if (k === 'ArrowDown' || k === 'ArrowUp') { ev.preventDefault(); optHi(tb, thi + (k === 'ArrowDown' ? 1 : -1)); return; }
      if (TE.word && /^[1-9]$/.test(k) && tb._opts[+k - 1] != null) { ev.preventDefault(); tePick(+k - 1); return; }
      if ((k === 'Enter' && (thi > 0 || (TE.word && t.tagName !== 'TEXTAREA'))) || (k === 'Tab' && thi > 0 && !ev.shiftKey)) { ev.preventDefault(); tePick(thi); return; }
      if (k === ' ' && thi > 0) { ev.preventDefault(); tePick(thi, ' '); return; }
    }
    if ((t.id === 'adm-pw' || t.id === 'svc-url') && ev.key === 'Enter' && !ev.isComposing) { ev.preventDefault(); var lb = view.querySelector('[data-act="svc-login"]'); if (lb && !lb.disabled) lb.click(); return; }
    if (t.hasAttribute && t.hasAttribute('data-sr')) {
      // the list under a square being typed into: \u2191 \u2193 choose in it (before that they move between squares), Enter / Tab / Space put it in
      var sb = U.shIn === t && plain ? document.getElementById('shopts') : null;
      if (sb && sb._opts && t._typed) {
        var shi = sb._hi || 0, sbs = sb.querySelectorAll('button');
        if (k === 'ArrowDown' || k === 'ArrowUp') { ev.preventDefault(); optHi(sb, shi + (k === 'ArrowDown' ? 1 : -1)); return; }
        if (/^[1-9]$/.test(k) && sbs[+k - 1]) { ev.preventDefault(); sbs[+k - 1].click(); return; }
        if ((k === 'Enter' || k === 'Tab' || k === ' ') && shi > 0 && sbs[shi]) { ev.preventDefault(); sbs[shi].click(); return; }
      }
      var mv = { ArrowUp: [-1, 0], ArrowDown: [1, 0], ArrowLeft: [0, -1], ArrowRight: [0, 1] }[ev.key];
      if (k === 'Backspace' && !t.value && plain) { ev.preventDefault(); sheetNext(t, true); return; }
      if (ev.key === 'Enter' || ev.key === 'Tab') { ev.preventDefault(); sheetCommit(t); sheetNext(t, ev.shiftKey); }
      else if (mv && !ev.isComposing) { ev.preventDefault(); sheetCommit(t); sheetMove(t, mv[0], mv[1]); }
      return;
    }
    if (t.id !== 'tl-in') return;
    if (ev.key === 'Enter') { ev.preventDefault(); var c = pickFor(t.value); t.value = ''; if (c) commitTyped(c); var n = document.getElementById('tl-in'); if (n) { n.focus(); updateCands(); } }
    else if (ARROWS[ev.key] && route().indexOf('play-') === 0 && CUR && (!t.value || ev.key === 'ArrowUp' || ev.key === 'ArrowDown')) { ev.preventDefault(); if (moveSel(ev.key)) refreshPlay(); }
    else if (ev.key === 'Backspace' && !t.value) { ev.preventDefault(); if (route() === 'edit') editBack(); else back(true); var n2 = document.getElementById('tl-in'); if (n2) n2.focus(); }
  });
  // arrow keys move the selected square across or down the board (jumping over black squares); the board scrolls along
  var ARROWS = { ArrowUp: [-1, 0, 'D'], ArrowDown: [1, 0, 'D'], ArrowLeft: [0, -1, 'A'], ArrowRight: [0, 1, 'A'] };
  function moveSel(k) {
    var mv = ARROWS[k], m = CUR.m, P = CUR.P, rr = P.r + mv[0], cc = P.c + mv[1];
    while (rr >= 0 && cc >= 0 && rr < m.R && cc < m.C && !m.isW(rr, cc)) { rr += mv[0]; cc += mv[1]; }
    if (rr < 0 || cc < 0 || rr >= m.R || cc >= m.C || !m.isW(rr, cc)) return false;
    P.r = rr; P.c = cc; var kk = key(rr, cc); if (mv[2] === 'A' ? m.cellA[kk] : m.cellD[kk]) { P.dir = mv[2]; U.tab = mv[2]; }
    U.follow = true; save(); return true;
  }
  // buttons beside the typing box must not steal its focus (that would close the phone keyboard)
  // G. on a phone browser, starting to type goes full screen so the board gets the most room (needs a tap, so it runs on click)
  view.addEventListener('click', function (ev) {
    var t = ev.target;
    if (t && (t.id === 'tl-in' || (t.closest && t.closest('.cell') && U.panel === 'none'))) goFull();
  }, true);
  view.addEventListener('pointerdown', function (ev) {
    var a = document.activeElement;
    if (a && a.id === 'tl-in' && (ev.target.closest('[data-keepfocus]') || ev.target.closest('.cell'))) ev.preventDefault();
  });

  document.addEventListener('keydown', function (ev) {
    var r = route(); if (r.indexOf('play-') !== 0 || !CUR || (ev.target && /INPUT|TEXTAREA/.test(ev.target.tagName))) return;
    if (/^[a-zA-Z]$/.test(ev.key) && !ev.ctrlKey && !ev.metaKey && !ev.altKey && U.panel !== 'fix') {
      ev.preventDefault();
      if (U.panel !== 'type') { U.panel = 'type'; render(); }
      var ti = document.getElementById('tl-in'); if (ti) { ti.focus(); ti.value += ev.key; tlInput(ti); }
      return;
    }
    if (ARROWS[ev.key]) { ev.preventDefault(); if (moveSel(ev.key)) render(); }
    else if (ev.key === 'Backspace') { ev.preventDefault(); back(); }
  });

  view.addEventListener('scroll', function (ev) { if (ev.target.classList && ev.target.classList.contains('gridwrap')) syncHbar(); }, true);
  (function () {
    var drag = false;
    function to(ev) {
      var tr = document.getElementById('htrack'), gw = view.querySelector('.gridwrap'), th = document.getElementById('hthumb'); if (!tr || !gw || !th) return;
      var r = tr.getBoundingClientRect(), tw = th.getBoundingClientRect().width, f = (ev.clientX - r.left - tw / 2) / Math.max(1, r.width - tw);
      gw.scrollLeft = Math.max(0, Math.min(1, f)) * (gw.scrollWidth - gw.clientWidth);
    }
    view.addEventListener('pointerdown', function (ev) { if (!ev.target.closest('#htrack')) return; drag = true; ev.preventDefault(); try { ev.target.closest('#htrack').setPointerCapture(ev.pointerId); } catch (e) {} to(ev); });
    view.addEventListener('pointermove', function (ev) { if (drag) to(ev); });
    view.addEventListener('pointerup', function () { drag = false; });
    view.addEventListener('pointercancel', function () { drag = false; });
  })();
  view.addEventListener('focusin', function (ev) { if (ev.target.id === 'tl-in') { view.classList.add('typing'); U.follow = true; setTimeout(function () { keepCurVisible(); }, 300); } });
  view.addEventListener('focusout', function (ev) { if (ev.target.id === 'tl-in') view.classList.remove('typing'); });
  (function () {
    var vv = window.visualViewport; if (!vv) return;
    var lastH = 0;
    function fit() {
      var root = document.documentElement, over = Math.abs(vv.scale - 1) < 0.02 && window.innerHeight - vv.height >= 80;
      root.classList.toggle('kb-over', over);
      root.classList.toggle('vv-short', vv.height < 520);
      if (over) { root.style.setProperty('--app-h', Math.round(vv.height) + 'px'); root.style.setProperty('--vv-top', Math.round(vv.offsetTop) + 'px'); }
      else { root.style.removeProperty('--app-h'); root.style.removeProperty('--vv-top'); }
      var h = Math.round(vv.height);
      if (h !== lastH) { lastH = h; if (CUR && route().indexOf('play-') === 0) { U.follow = true; setTimeout(function () { keepCurVisible(); }, 60); } }
    }
    vv.addEventListener('resize', fit); vv.addEventListener('scroll', fit);
  })();

  setInterval(function () {
    if (!CUR || route().indexOf('play-') !== 0 || CUR.P.done || autoOn() || document.visibilityState !== 'visible' || !CUR.P.started) return;
    CUR.P.elapsed++; var tm = document.getElementById('tm'); if (tm) tm.textContent = fmt(CUR.P.elapsed);
    if (CUR.P.elapsed % 10 === 0) save();
  }, 1000);
  document.addEventListener('visibilitychange', save);
  window.addEventListener('hashchange', onRoute);

  // Posts = everything on the blog (website only) + puzzles.json (studio uploads and corrections, which win on the same date)
  if (!IS_CLAUDE) fetch(APPBASE + 'config.json', { cache: 'no-store' }).then(function (r) { return r.ok ? r.json() : {}; }).then(function (j) { CONFIG = j || {}; if (route() === 'admin') render(); }).catch(function () {});
  var extraP = fetch(APPBASE + 'puzzles.json', { cache: 'no-store' }).then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); }).then(function (j) {
    HIDDEN = Array.isArray(j.hidden) ? j.hidden.slice() : [];
    return Array.isArray(j.puzzles) ? j.puzzles.filter(function (p) { return p && p.id && Array.isArray(p.grid) && p.grid.length; }) : [];
  }).catch(function () { return []; });
  var ONE_ID = BLOG_POST_PAGE ? pagePostId() : '', ONE = false;
  var firstLoad = IS_CLAUDE ? null : EMBED ? embedPost() : ONE_ID ? loadOnePost(ONE_ID).then(function (j) { ONE = true; return j; }, function () { return loadBlogFeed(); }) : loadBlogFeed();
  var blogP = IS_CLAUDE ? Promise.resolve([]) : firstLoad.then(function (j) { BLOG_STATE = 'ready'; return postsFromFeed(j); }, function () { BLOG_STATE = 'error'; return []; });
  Promise.all([extraP, blogP]).then(function (res) {
    EXTRAS = res[0]; BLOGPOSTS = res[1]; mergePuzzles(); DATA_STATE = 'ready';
    if (ONE) {   // the rest of the blog, for the lists; the game on screen is not disturbed
      loadBlogFeed().then(function (j) { var all = postsFromFeed(j); if (!all.length) return; BLOGPOSTS = all; mergePuzzles(); if (!/^(play|done)-/.test(route())) render(); }, function () {});
    }
    var mine = BLOG_POST_PAGE ? PUZZLES.filter(function (p) { return p.url && samePath(p.url); })[0] : null;
    if (mine && (!location.hash || route() === 'home')) { location.replace('#play-' + mine.id); return; }
    if (EMBED && BLOGPOSTS.length && !/^(play|done)-/.test(route())) { location.replace('#play-' + BLOGPOSTS[0].id); return; }
    render();
  });
  function mergePuzzles() {
    var byDate = {}, taken = {}, list = EXTRAS.slice();
    EXTRAS.forEach(function (p) { taken[p.id] = true; if (p.date) byDate[pkey(p)] = true; });
    BLOG_ORIG = {}; BLOG_DATE = {}; BLOG_BLK = {};
    BLOGPOSTS.forEach(function (p) {
      p.id = p.id && /^[a-z]\d{8}/.test(p.id) ? p.id : makeId(p.date, taken, p.paper); taken[p.id] = true;
      BLOG_ORIG[p.id] = JSON.stringify(cleanPuzzle(p)); BLOG_DATE[p.id] = p.date; if (p.date && p.blk) BLOG_BLK[pkey(p)] = p.blk;
      if (p.date && (byDate[pkey(p)] || HIDDEN.indexOf(pkey(p)) >= 0)) return;
      list.push(p);
    });
    PUZZLES = list; MODELS = {};
  }
  if (!IS_CLAUDE && !EMBED && !IN_BLOG && 'serviceWorker' in navigator && location.protocol === 'https:') {
    // when a newer version of the app takes over, reload once so the new screens show straight away
    var hadSW = !!navigator.serviceWorker.controller, reloaded = false;
    navigator.serviceWorker.addEventListener('controllerchange', function () { if (hadSW && !reloaded) { reloaded = true; location.reload(); } });
    window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js', { updateViaCache: 'none' }).then(function (reg) { reg.update().catch(function () {}); }).catch(function () {}); });
  }

  // A short screen (a phone browser with its address bar, a small window): with a keyboard open the board keeps its share of
  // the screen \u2014 the keys, clue card and bars get smaller in two steps instead of the board shrinking to a sliver.
  function fitPlay() {
    view.classList.remove('tight', 'tight2');
    if (route().indexOf('play-') !== 0 || !U.panel || U.panel === 'none') return;
    var pm = document.getElementById('pmid'), H = view.clientHeight || window.innerHeight; if (!pm || !H) return;
    if (pm.clientHeight >= 0.42 * H) return;
    view.classList.add('tight');
    if (pm.clientHeight < 0.36 * H) view.classList.add('tight2');
    U.follow = true; keepCurVisible(); syncHbar();
  }
  var render0 = render, refresh0 = refreshPlay;
  render = function () { render0(); fitPlay(); };
  refreshPlay = function () { refresh0(); fitPlay(); };
  window.addEventListener('resize', function () { if (route().indexOf('play-') === 0) fitPlay(); });
  // the blog on a phone: full screen from the first tap anywhere (browsers allow it only after a tap); the phone's Back leaves it
  if (IN_BLOG) document.addEventListener('click', function first() { goFull(); }, { capture: true, once: true });

  applyPrefs();
  onRoute();
  checkApk();
})();

  }
  function boot() {
    if (window.EPV_GAVE_UP) return;
    var de = document.documentElement, l = document.createElement('link'); l.rel = 'stylesheet'; l.href = FONTS; document.head.appendChild(l);
    var st = document.createElement('style'); st.id = 'epv-css'; st.textContent = CSS; document.head.appendChild(st);
    var t = document.createElement('div'), first = document.body.firstChild, made = []; t.innerHTML = SHELL;
    while (t.firstChild) { made.push(t.firstChild); document.body.insertBefore(t.firstChild, first); }
    de.classList.add('epv-on'); de.classList.remove('epv-wait'); document.body.classList.remove('loading');
    try { APP(); } catch (e) { made.forEach(function (n) { n.remove(); }); st.remove(); de.classList.remove('epv-on'); window.EPV_GAVE_UP = true; if (window.console) console.error(e); }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();

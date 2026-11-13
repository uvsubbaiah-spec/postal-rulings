# ఈ-పద వినోదం — website and phone app

A phone-first web app for **telugupadavinodam.blogspot.com**. It reads every padavinodam post straight from the blog's feed, turns it into a playable crossword with a Telugu akshara keypad, and works offline after the first visit. It can be installed on Android from Chrome like a normal app.

No server, database or payment card is needed: these are plain static files.

## What's in the folder

| File | Purpose |
|---|---|
| `index.html` | The whole app (layout, styles and code in one file) |
| `epv-blog.js` | The same app for the blog itself: the blog's new theme loads it (styles, screens and code in one file) |
| `puzzles.json` | Extra posts made in the Claude studio (uploads, corrections). Starts empty. |
| `rain.webp` | Animated rain for the black squares (from the blog's GIF, compressed) |
| `sw.js` | Offline support |
| `manifest.webmanifest`, `icon-*.png`, `apple-touch-icon.png` | App name and icons for "Install app" |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are |

## Put it online with GitHub Pages (free, no card)

1. Sign in to github.com and create a new **public** repository, for example `padavinodam`.
2. On the repository page choose **Add file → Upload files**, drag in **every file from this folder** (not the folder itself), and press **Commit changes**.
3. Open **Settings → Pages**. Under *Build and deployment* choose **Deploy from a branch**, branch **main**, folder **/ (root)**, and press **Save**.
4. After a minute or two the site is live at `https://<your-github-name>.github.io/padavinodam/`.

Other no-card options that work the same way: **Netlify Drop** (app.netlify.com/drop — drag the folder in) and **Cloudflare Pages** (upload the folder as a project).

The site must be served over **https** for offline support and installing; all three hosts above do that automatically.

## Install on an Android phone

Open the site in **Chrome** → menu (⋮) → **Install app** (or **Add to Home screen**). It opens full-screen with its own icon, like any other app.

## Typing answers

**New in 0.26:** typing in English (**ENG**, the phone's own keyboard) is the default for everyone; the **తెలుగు** button beside the typing box (and the ENG / తెలుగు switch above the keys) changes to the app's Telugu keypad, and the choice is remembered. On short screens (a phone browser with its address bar) the keys, clue card and bars get smaller in two steps so the board keeps about 40% of the screen instead of disappearing. The clue is always shown whole (no cut-off lines). When a word is finished, the cursor goes to the across / down word that already has the largest share of its letters (from crossing words), so it is the easiest one to complete next. In the clue list, letters put in by సూచన / ఆటో are shown in red. On the blog, a phone goes full screen at the first tap (browsers allow full screen only after a tap; the phone's Back leaves it). The black squares use each post's own picture however the post writes its tag (spaces around `=`, single quotes, `http://`), and a post corrected in the studio keeps its blog post's picture.

A bar above the keyboard switches between **తెలుగు** (the in-app Telugu akshara keypad, one akshara per tap) and **ENG** (type the whole word on any phone keyboard), and **దాచు** hides the keyboard to show the whole grid.

In ENG, type the complete answer and press space, Enter or **పెట్టు**: the app splits it into aksharas and puts them in the selected word's squares. A full-length word always starts from the word's first square, wherever the cursor is; a shorter piece goes from the selected square. While you type, the word's squares are shown right above the box (and in the grid, dashed) so you see where each akshara will land, and the board stays visible above the phone keyboard. `kamalam` → కమలం, `sankraanti` → సంక్రాంతి, `amma` → అమ్మ. Capitals give the harder sounds (T ట, D డ, N ణ, L ళ, Sh ష, E ఏ, O ఓ) and `aa`/`ee`/`oo` give long vowels; the app also offers the likely alternatives to tap. A Telugu phone keyboard works in the same box. On a computer, just start typing letters while a puzzle is open.

**Where the cursor goes:** after a letter, the next empty square of the same word (filled squares are skipped); when the word is full, the next clue by number (1 అడ్డం, 1 నిలువు, 2 …) that still has empty squares; after the last clue it comes back to any square left empty. A wrong letter keeps the cursor on it (no message; the square is already marked).

Answer colours follow the blog: a right letter turns grey with a green border and blue letter, a wrong one gold with a red border and red letter. A right letter is frozen: typing and delete pass over it. The selected square has a blue frame.

**ఆటో** (next to సులభం / కష్టం, on puzzles that have answers) fills the answers by itself, always starting from the first clue on the board: it goes clue by clue, shows each clue on the clue bar and writes only the squares that are empty or wrong, letter by letter. Squares the player already got right are left alone and skipped. Pause, next clue, stop and three speeds are under the board. Auto-filled letters count as hints; in the ఆధారాలు list, letters that came from a hint or ఆటో are shown on an orange background. Afterwards **గడి ఖాళీ చేసి మీరే ఆడండి** empties the grid to play it yourself.

A puzzle opens at the biggest zoom (200%) with the keyboard hidden; the first tap on a square brings the keyboard back. The bar above the clue scrolls the board sideways (drag it or use its arrows). On a computer the arrow keys move the selected square across and down, and the board scrolls along.

**Finding a post:** the home page has a search box (పోస్ట్ వెతకండి): type a date in any common form (01.11.2026, 1/11, 1-11-26, 01112026), a month (నవంబర్ or nov), a year (2025) or part of the title, and tap the post in the list that appears. The archive search understands the same forms.

## Look

Settings (అమరికలు) has six Telugu font sets (బ్లాగ్ శైలి is the default: Ramabhadra in the squares, Anek Telugu for clues, as on the blog) and separate choices for the squares, the clues and the headings, from about 25 Telugu fonts on Google Fonts. Only the chosen fonts are downloaded; after the first load they work offline.

The black squares show the post's own picture from the blog (the GIF chosen for that post on the admin page; posts without one show the blog's rain picture). Settings → నల్ల గడుల్లో బొమ్మలు can switch to small animated scenes (a dancing peacock, the roaring sea, a roaring lion, rain with a paper boat, flowers blooming, fireflies, a cat watching the moon, koi, a bird at dusk, a butterfly, an owl, a parrot, falling leaves). Each post uses one of them in all its black squares, as the blog uses one picture; weekly posts take the scenes in turn.

**Lists:** the home page and the archive put the posts you played most recently first (ఆడిన క్రమం); **తేదీ క్రమం** switches to newest-first. **↺** beside a played post (and on the puzzle's top bar) starts that post again from an empty grid; tap twice to confirm.

## Recording a game

On a computer (Chrome or Edge), the red circle on the puzzle's top bar records the screen, as the blog's రికార్డు చేయండి button does. The browser asks which tab or screen to share; pick this tab. Press the red button again, or the floating "ఆపు" pill, to stop; the video is saved to Downloads named after the puzzle date (for example `180525.mp4`). Phones' browsers cannot record the screen, so on a phone use the phone's own screen recorder (Android: quick settings → Screen record). The blog's rain picture or plain black can be chosen instead. Phones set to reduce motion get still pictures.

The magnifier buttons on the puzzle's top bar zoom the grid from 100% to 200% (it then scrolls sideways); pinch-zoom on the phone works too.

## Keeping posts up to date

- **Blog posts appear on their own.** Every time the app opens it reads the blog's feed (the blog must stay public).
- **New puzzles and corrections are made on the admin page** (website or Android app) and go straight to the blog; the app then shows them from there. No GitHub upload is needed for content.
- `puzzles.json` still works for older posts made in the Claude studio; the admin page no longer writes it.

## Admin page

Settings (అమరికలు) → **నిర్వాహణ** → **నిర్వాహకుడి ప్రవేశం**. The password is asked every time: closing the app or leaving the admin pages signs out. The first password is **uvs-2026**; change it under నిర్వాహణ → సెట్టింగ్‌లు. **పాస్‌వర్డ్ మర్చిపోయారా?** emails a new password to blogofrulings@gmail.com (the old one keeps working until the new one is used, so a stranger pressing it cannot lock you out).

On the admin page:
- **Search (పోస్టులు, డ్రాఫ్ట్‌లు వెతకండి)** at the top: type a date in any form (01.11.2026, 1/11, 01112026), a month (నవంబర్, nov), a year or a title; it lists the matching blog posts (▶ play, **మార్చు** edit, **దాచు** hide) and the matching drafts on this phone (**తెరవండి**). The search in **పోస్టులు మార్చండి** understands the same forms.
- **కొత్త పద వినోదం**: give the puzzle (grid + clues) photo or PDF in box **1**, and the answers grid (Eenadu prints it the next week) in box **2** — optional; it can also be added later from the **జవాబులు** card in the draft. Then choose a reader; it reads the puzzle and then the answers into the same draft:
  - **Gemini తో చదవండి**: Google Gemini reads the grid, numbers, clues (and a solved grid). Needs a free key from aistudio.google.com/apikey, saved once under సెట్టింగ్‌లు; it is kept in your Apps Script. When reading, the signed-in admin's phone gets the key for that moment only (never stored) and sends the pictures straight to Google; if Google cannot be reached from the phone, the Apps Script sends them instead.
  - **ఫోన్‌లోనే చదవండి**: no key. For Eenadu web pages saved as PDF (like 01.11.2026) it works by itself: it finds the పదకేళి grid page, the blocked squares (stars, leaves, flowers), the clue columns on the pages around it (stopping at సుడోకు), and reads them with Tesseract (about 5 MB downloaded the first time). Clue numbers and lengths come from the grid, including Eenadu's one-letter clues (a white square boxed in on all four sides). Grid lines are found from the thin red strokes, so a pink పదకేళి banner or shaded picture touching the grid's top edge no longer pulls the grid off by a row; the number of rows and columns is then checked against where the strongest lines actually fall. It also handles the layout of 27.09.2026 (blue blocked squares; నిలువు in a box under the grid; అడ్డం on the next page beside the red పదకేళి banner, in two boxes with two columns each): when the reader garbles a small అడ్డం / నిలువు heading, the app decides which list a column belongs to from the clue numbers the grid expects. The clue numbers and lengths always come from the grid, and the grid is checked against the paper's own list: when the numbers and "(3)" lengths printed with the clues fit a slightly different set of black squares far better (a pale picture taken as an open square, a dark clue number taken as a black one), those squares are changed and shown with a red outline on the reading screen, and the message says how many. If most of the printed numbers still disagree with the grid, the message warns to check the grid box and the black squares and read again. On 27.09.2026 it reads 28 of 28 అడ్డం and 31 of 31 నిలువు clues; 01.11.2026 34 / 31 of 34 / 31. The 08.11.2026 page (two boxes whose columns line up, beside the page's side links) still comes out with some అడ్డం clues missing — fill those by hand. It then opens the answers file, finds the solved grid under గతవారం సమాధానాలు, checks it matches, and fills the answers into the draft. Everything stays editable: on the reading screen drag, resize or delete (×) the clue boxes, remove the grid box (గడి పెట్టె తీసివేయండి) and draw it again, then **మళ్ళీ చదవండి**; fix clue text in the text boxes. For photos or other layouts, draw the boxes yourself (the red lines must sit on the grid lines; drag the corner dots to fix a tilted photo). Telugu reading has mistakes, so always compare with the paper.
  - **Claude తో చదివించండి**: read it in the Claude studio, press **వెబ్‌సైట్ కోసం కాపీ** there and paste on the admin page under **Claude నుంచి**.
  - Then check the draft (black squares, numbers, clues), fill the answers (typing, or **జవాబుల చిత్రం · Gemini / ఫోన్‌లోనే**) and press **బ్లాగ్‌లో ప్రచురించండి** (or save it as a Blogger draft first).
- **Answers grid of another size:** if the answers page's grid is printed with more or fewer rows / columns than the draft (the draft's grid was read wrong — a row missed under a banner, say), the reading screen draws the page's own grid (so the red lines sit on the printed ones) and shades its printed stars / flowers, with **డ్రాఫ్ట్ గడిని ఈ గడిలా మార్చి జవాబులు చదవండి**: the draft takes that size and those black squares, its numbers are put again, and the letters are read in. The rows / columns boxes can be changed there too, and a wrongly shaded square tapped in the small grid. Tested: a 12×12 draft cut to 11×12 came back as 12×12 with every black square right and 94 of 99 letters read right.
- **Correcting answers (జవాబులు):** in the draft, the **జవాబులు** tab (it replaced the in-app Telugu keypad and the old పట్టిక tab) shows the answers as a sheet under the paper's own answers grid (same size, square by square). Tap any square and type: the old letter is replaced, as in Excel. While you type, a strip of letters appears (right above the phone keyboard, like Google keyboard's suggestions): in English, every Telugu letter it can be (`la` → ల ళ లా ళా లం ళం; a consonant alone, `k`, gives the whole గుణింతం); in Telugu, the same letter with every vowel sign, with ం, its look-alikes (క/ఖ, ద/ధ/డ, ల/ళ, శ/ష/స …) and its ఒత్తు (క్క). Tap one to put it in and go to the next square. On a computer the letters drop down as a numbered list under the square: ↑ ↓ choose, Enter (or a tap, or 1–9) puts it in. Once a letter is in, the next square follows **దిశ** — across along the row, or down the column (the word being filled is outlined); Backspace in an empty square goes back one. In a square not typed in yet, the arrow keys move between squares. The phone reader reads each letter five ways and they vote: the square alone (three cuts) and the whole across word and down word read as lines of text (Tesseract reads whole words far better than single letters). Squares where the readings did not agree are **yellow** (check those first), and squares you changed turn **green**. On the Eenadu 08.11.2026 answers it read 93 of 99 right (before: 73), on the 01.11.2026 page 89 of 101 (before: 70); nearly all the wrong ones are yellow. Still compare with the paper. Gemini usually reads answers better. **Best: read the answers with both** (Gemini, then ఫోన్‌లోనే, or the other way round, same file): squares where the two agree are very likely right, and only the squares where they differ turn yellow (Gemini's letter is kept). Letters you corrected yourself are never overwritten. If Gemini skips or adds a square in a row, the row is put back on its open squares, or marked yellow when that is not possible.
- **ఆటో** while testing a draft also fills squares that belong to no clue, and then names the clue numbers that are missing.
- **Editing a published post:** on the admin page, **ప్రచురించిన పోస్ట్ మార్చండి** jumps to **పోస్టులు మార్చండి**; search by date or name, press **మార్చు**, change anything (grid, clues, answers, title, pictures) and press **బ్లాగ్ పోస్ట్ సరిదిద్దండి**. The same post is changed in place (with Code.gs v7 no “బ్యాకప్ · …” Blogger draft is made any more; the previous version is kept as one file per post in your Google Drive, `e-padavinodam-old-<post id>.html`, replaced each time). Publishing a date that is already on the blog corrects that post instead of making a second one. The “బ్యాకప్ · …” drafts made by older scripts can be deleted in Blogger → Posts → Drafts.
- **Dates and « »:** with Code.gs v7 every new post is published on its puzzle date (06:00 IST; a date still ahead is published now, so it is not scheduled), so the blog lists posts in puzzle order whatever day you publish; its « goes to the nearest earlier puzzle and » to the next one, and the posts on both sides are relinked. **పోస్టులు మార్చండి → తేదీలు, « » లింకులు సరిచేయండి** does this once for every post already on the blog (for example 11.10, 18.10, 25.10 and 01.11, which were published on 8 November in the wrong order). Post addresses do not change. If Blogger refuses a date change, the result names those posts: change “Published on” for them in Blogger.
- **Pictures (GIF):** in the draft, **బొమ్మలు (GIF)** sets the black squares' picture and the congratulation picture for that post: pick one already used on the blog, choose a GIF from the phone/computer (stored in your Google Drive as “e-padavinodam-…”, shared as view-only by link), or paste a picture link. Without a choice, a new post takes the latest post's pictures and an edited post keeps its own.
- **Nothing incomplete goes to the blog:** **బ్లాగ్‌లో ప్రచురించండి** and **బ్లాగ్ పోస్ట్ సరిదిద్దండి** stay switched off, and the app refuses again when they are pressed, until the draft has a proper date, a number on every clue square, a clue with text for every across and down word in the grid (and none the grid does not have, none twice), clue lengths that fit, every white square in a clue, and an answer in every white square. The checks box under the clues lists exactly what is missing ("ప్రచురణకు ముందు: 1 అడ్డం ఆధారాలు లేవు: 5"). Saving as a Blogger draft (not public) is still allowed.
- **Adding a missing clue:** every row in the draft's ఆధారాలు list has **+** (next to **×**): it adds a row right below with the next across / down number of the grid that has no clue yet and its length, and puts the cursor in the text box; just type the clue. The button under the list does the same for the first missing number.
- **Several drafts:** every new upload (or blank grid, or post opened with మార్చు) starts its own draft; the one that was open is kept, even if its clues are still empty. The admin page lists all of them under **డ్రాఫ్ట్‌లు (ఈ ఫోన్‌లో)**, the open one first; **తెరవండి** switches drafts without losing any.
- **Saving drafts:** the open draft saves itself on the phone as you work. **డ్రాఫ్ట్ సేవ్ చేయండి** keeps a copy in **సేవ్ చేసిన డ్రాఫ్ట్‌లు** on the admin page (up to 15, newest first: open or delete). When a new upload or post would replace a draft that has work in it, that draft is kept there by itself, so nothing is lost. These stay on that phone only; for another device use **బ్లాగ్‌లో డ్రాఫ్ట్‌గా సేవ్ చేయండి** (a Blogger draft).
- **Typing corrections:** in the clue boxes (reading screen and draft), the title and the fix box, type Telugu with English letters and press space: `dhanam` → ధనం, `vennela` → వెన్నెల (Sh ష, T ట, D డ, N ణ, L ళ; aa/ee/oo long vowels). Other likely spellings appear under the box; tap the right one. While typing, a suggestion strip (right above the phone keyboard, like Google keyboard's) shows the Telugu words for the English word being typed, or — with the cursor just after a Telugu letter — every form of that letter (all vowel signs, ం, sound-alikes and the reader's look-alike mix-ups such as ఠ/ళ, ర/గ, స/న, క/గ); one tap swaps it in (మురఠి → tap after ఠి → ళి → మురళి). On a computer (no phone keyboard on screen) the same choices drop down as a numbered list right under the word, like the Windows Telugu keyboard: **↑ ↓** light up a row, **Enter** (or **Tab**) puts it in, **Space** puts it in with a space, **1–9** pick a row straight away, **Esc** closes the list (then ↑ ↓ move between lines again). After the spellings it offers whole words that begin the same way, taken from the answers already on the blog and from words used in the clues of two or more posts (`raa` → రాముడు, రాజు …). The answers sheet works the same way: once you have typed in a square, ↑ ↓ choose in its list (before that they move between squares). A last word without a space turns Telugu when you leave the box. The **English → తెలుగు** button turns this off (to use the phone's Telugu keyboard).
- A new post copies the layout of the latest blog post (scripts, సులభం/కష్టం switch, hint bulb, congratulation picture, record button, black-square picture), gets the next number for its element names, the address `…/YYYY/MM/DDMMYYYY.html`, and « » links by puzzle date (see above). Before sending, the app reads the made post back and refuses to publish if the squares or clues do not come out the same.
- **మార్చు** on a blog post rewrites that post's squares and clues in place. **దాచు** turns a post back into a draft.

## Other papers: Sakshi and any other (new in 0.27)

- **Paper name:** the upload form, the reading screen and the draft have a **పత్రిక** choice beside the date — ఈనాడు, సాక్షి, ఆంధ్రజ్యోతి, నమస్తే తెలంగాణ, వార్త, ఆంధ్రభూమి, ఆంధ్రప్రభ or ఇతర. The title follows it (“సాక్షి పదవినోదం”, still editable); the app remembers the last choice. Each paper's puzzles are kept apart: Eenadu's addresses and ids stay as they were (`01112026.html`, `e20261101`), another paper's carry its name (`sakshi-01112026.html`, `s20261101`), so Eenadu and Sakshi of the same Sunday sit side by side. Search finds “sakshi”, “సాక్షి”, “sakshi 01.11”.
- **Any paper's grid:** besides Eenadu's pink-lined grid, the reader now looks for any table of thin straight lines (grey, black, blue — on white, peach or a photo's dull paper), measures its rows and columns from the lines themselves (a page divider beside the grid or a frame round it is left out; a faint last line is added), and tells a crossword (some squares shaded or black) from a sudoku or a word search (none). Several grids on one page come back separately: on a puzzle page the biggest empty crossword is taken, on an answers page the filled one with the draft's size. A small answers box (Sakshi's “పదవినోదం - 904 జవాబు”) is looked for on a sharper page when nothing suitable is found at first.
- **Shaded blocked squares** (Sakshi's grey with a white flower) are told by a patch near each square's bottom-right corner (the number is top-left, the letter in the middle).
- **Clue numbers inside answer squares** printed in dark ink (Sakshi) are taken out before the letter is read — as many digits as the square's number has, even where they touch the square's lines. On Sakshi's answers box this took the letters read right from 57 to 72 of 75.
- **Clue boxes one above the other with no gap** (Sakshi's అడ్డం box right above its నిలువు box) are cut on the box border.
- Tested: Sakshi 01.11.2026 (పదవినోదం-904): grid 10×10 with every blocked square right, clues అడ్డం 23/23 and నిలువు 24/24 with every number and length right (wording still to be checked, as always); its answers from the 08.11.2026 page: the 10×10 box found, every blocked square matching the draft, 72 of 75 letters right. Eenadu 27.09, 01.11 and 08.11 read as before (08.11 answers: 94 of 99).
- **Code.gs v9 (papers kept apart on the blog):** every post carries its paper's name as a Blogger label (ఈనాడు, సాక్షి …). The first time you sign in to admin after pasting v9, every post already on the blog gets the label **ఈనాడు** by itself (once; the same run puts each post on its date and sets its « »). When a puzzle is published, only a post of the **same paper and date** counts as “already on the blog”: a Sakshi 01.11 puzzle becomes its own post (`sakshi-01112026.html`, label సాక్షి) and never writes over Eenadu's 01.11 post. A post's title always names its paper (a draft still titled ఈనాడు but set to సాక్షి goes out as “సాక్షి పదవినోదం - date”). « » of each post go to the same paper's posts on either side. Paste the new `Code.gs`, deploy a new version (as in the setup below), then sign in to admin.
- **Theme:** the blog's titles and descriptions now speak of పదవినోదం in general (ఈనాడు, సాక్షి) — upload the new theme file the same way as before (Theme → Restore).

## Admin service (one-time setup, about 10 minutes, free, no card)

A small Google Apps Script does the parts a website cannot do by itself: checking the password, sending the reset email, posting to Blogger and calling Gemini. Do all of this **signed in to the Google account that manages the blog**.

1. **Google Cloud project** (needed for Blogger): open console.cloud.google.com → project picker → **New project** → name `e-padavinodam` → Create. Then:
   - **APIs & Services → Library** → search **Blogger API v3** → **Enable**.
   - **Google Auth Platform** (or *OAuth consent screen*) → **Get started**: app name `e-padavinodam admin`, your email, Audience **External**, contact email → Create. Then **Audience → Publish app** → Confirm (this stops Google asking you to sign in again every 7 days).
   - Note the **Project number** (Cloud console home → Project info).
2. **The script**: open script.google.com → **New project** → name it `e-padavinodam admin`.
   - Replace everything in `Code.gs` with `Code.gs` from **e-padavinodam-admin-service.zip**.
   - **Project Settings** (gear) → tick **Show "appsscript.json" manifest file**; back in the Editor open `appsscript.json` and replace it with `appsscript.json` from the same zip.
   - **Project Settings → Google Cloud Platform (GCP) Project → Change project** → paste the project number → Set project.
3. **Allow it once**: in the Editor choose the function `setup` and press **Run** → Review permissions → choose the blog's account → *Google hasn't verified this app* → **Advanced → Go to e-padavinodam admin (unsafe)** → Allow. (It is your own script.) The log should show your blog's name.
4. **Deploy**: **Deploy → New deployment** → type **Web app** → Execute as **Me**, Who has access **Anyone** → Deploy → copy the **Web app URL** (`https://script.google.com/macros/s/…/exec`).
5. In the app: Settings → నిర్వాహకుడి ప్రవేశం → paste the link (asked only the first time on each device) → password **uvs-2026**.
   - The link of this deployment is built into the app (`SVC_URL` in the code), so admins only type the password. If you ever make a *new* deployment (a new link), tell the developer or put `{"service": "<new link>"}` in a `config.json` file in this repository.

If you later change `Code.gs`, use **Deploy → Manage deployments → Edit → Version: New version → Deploy** so the link stays the same.

**Version 6 of the script (pictures from the phone)** needs one more permission, once:
1. Cloud console (project `e-padavinodam`) → **APIs & Services → Library** → search **Google Drive API** → **Enable**.
2. In the script, replace both `Code.gs` and `appsscript.json` with the new ones.
3. Choose the function **setup** → **Run** → Review permissions → choose the blog's account → Advanced → Go to e-padavinodam admin → **Allow** (it now also asks for "files this app creates in your Google Drive").
4. **Deploy → Manage deployments → ✏️ → Version: New version → Deploy.**
Skipping step 3 makes every admin call fail until it is done.

**Version 7 of the script (posts on their puzzle dates, « » by date, no backup drafts)**: no new permission. In the script replace `Code.gs` with the new one (keep `appsscript.json`), then **Deploy → Manage deployments → ✏️ → Version: New version → Deploy**. The admin page shows a yellow note until the new version is live. Then press **తేదీలు, « » లింకులు సరిచేయండి** once.

If the admin page shows an error, open the script → **Executions** (left bar): every call is listed with its error message.

## The blog itself in the app's design (new theme, replaces the phone snippet)

`e-padavinodam-blogger-theme.xml` is the blog's own theme (your backup of 12 Nov) with two changes: just above `</head>` the old phone snippet (version 3) is replaced by a small loader, and the head gets search-engine and link-preview tags (below). On every page of the blog it loads `epv-blog.js` from this website and shows the app's own screens over the old layout — home with search and the latest puzzle, ఆర్కైవ్, నేను, అమరికలు, and the full player — on phones and computers alike. The posts, labels, comments, gadgets and settings in Blogger are untouched; the old layout is still in each page (hidden), so search engines read the posts as before.

- **A post's own address** (from Google, WhatsApp, the blog list) opens that puzzle straight away; only that post is fetched first, the rest of the blog after, for the lists. While a puzzle is open the address bar shows its post's address, so reload and share open the same puzzle.
- **Old layout when needed:** add `?classic=1` to any address (or use the link at the foot of a puzzle / in అమరికలు). It stays for that browser tab; the **కొత్త రూపం** button (or `?app=1`) brings the new one back. The blog's pages (`/p/...`) always keep the old layout.
- **If this website cannot be reached** (or takes longer than 12 seconds), the blog simply shows the old layout, as before.
- **Admin** stays on this website: `#admin` on the blog goes here.
- Progress on the blog is kept in that browser for the blog (separate from this website's progress, as browsers keep each site's data apart).
- Updating the app (a new `epv-blog.js` here) updates the blog too; the theme does not need to change again.

**Order:** upload the website files first (so `epv-blog.js` is online), then the theme. Before uploading the theme, take a full backup (below).

**Backup first:** Blogger → **Settings** → *Manage blog* → **Back up content** → Download (posts, pages, comments). Blogger → **Theme** → ▾ next to *Customize* → **Backup** → Download (the theme now in use). For a copy that also keeps the pictures as files: takeout.google.com → *Deselect all* → tick **Blogger** → export.

**Install:** Blogger → **Theme** → ▾ next to *Customize* → **Restore** → upload `e-padavinodam-blogger-theme.xml`. If Blogger offers to keep or delete widgets, choose **Keep widgets**. Open the blog on a phone and a computer. To go back: the same **Restore** with the theme file you downloaded in the backup.

If you change the theme in Blogger later (gadgets, layout), take a new backup and send it, so the next rebuild keeps those changes. The phone snippet (`blogger-mobile-theme-snippet.xml`) is not needed with this theme.

### Search engines and link previews

- **Titles:** a post shows as “ఈనాడు పద వినోదం - 08.11.2026 · Eenadu Padavinodam Telugu Crossword | ఈ-పద వినోదం”; the home page as “ఈ-పద వినోదం · ఈనాడు పద వినోదం ఆన్‌లైన్ | Eenadu Padavinodam Telugu Crossword” — Telugu and English searches both match.
- **Descriptions:** every page has one (a post's search description from Blogger if you write one, otherwise one made from its title).
- **Previews:** WhatsApp, Facebook, Telegram and X show the `og-card.png` picture (1200×630) with the title and description.
- **Structured data:** the site as a whole (WebSite) and each post (BlogPosting: title, date, author, picture, language Telugu).
- **Language:** the pages say they are Telugu (`lang="te"`).
- **Links:** the puzzle lists link to each post's real address, so search engines can follow them; a tap still opens the puzzle in place. The old layout (with every post's text and the archive links) stays in each page for search engines; month archive pages are kept out of results (they only repeat posts).

Blogger settings to set once: **Settings → Meta tags** → turn on *Enable search description* and write one for the blog. **Settings → Crawlers and indexing** → *Enable custom robots header tags* → Home page: `all`; Archive and search pages: `noindex`; Posts and pages: `all`. Then **Google Search Console** (search.google.com/search-console, signed in with the account that owns the blog) → add `https://telugupadavinodam.blogspot.com/` → **Sitemaps** → submit `sitemap.xml` → **URL inspection** → the home page and the latest posts → *Request indexing*. **Bing Webmaster Tools** → *Import from Google Search Console*.

## The Android app (APK)

The APK built in Android Studio opens this site full-screen. Name the signed release file **`e-padavinodam.apk`** and upload it to this repository next to `index.html`. It is then always the latest one at `https://uvsubbaiah-spec.github.io/e-padavinodam/e-padavinodam.apk`:
- the site shows an **Android యాప్ డౌన్‌లోడ్ (APK)** card on Android phones (home page and Settings), and never inside the app itself;
- the blog shows a **⬇ Android యాప్** button in its phone bar and a download pill on computers;
- both appear only once the file is really there.

For an update, raise `versionCode` (and `versionName`) in `app/build.gradle.kts`, build with the **same keystore**, and upload with the same file name. Content changes never need a new APK: the app always shows the live site.

Version 3 of `MainActivity.kt` adds the file picker, so the admin page's **ఫోటో లేదా PDF** button works inside the app (older APKs ignore the button; use Chrome there).

## Putting it on the Play Store (optional)

Go to **pwabuilder.com**, enter your site's address and choose **Package for stores → Android**. It produces:
- an **APK** you can install directly or share with people, with no store and no fee, and
- an **AAB** for the Play Store. Publishing there needs a Google Play developer account, which has a one-time registration fee paid by card.

## Try it on your computer first (optional)

From this folder run `python -m http.server 8000` and open `http://localhost:8000`. Offline support works on localhost too.

## Notes

- Puzzle content comes from the blog; the crosswords themselves are Eenadu's. Check permission before publishing the app widely or on a store.
- Progress, settings and the chosen theme are kept on each phone only.

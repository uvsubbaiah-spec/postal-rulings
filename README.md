# ఈ-పద వినోదం — website and phone app

A phone-first web app for **telugupadavinodam.blogspot.com**. It reads every padavinodam post straight from the blog's feed, turns it into a playable crossword with a Telugu akshara keypad, and works offline after the first visit. It can be installed on Android from Chrome like a normal app.

No server, database or payment card is needed: these are plain static files.

## What's in the folder

| File | Purpose |
|---|---|
| `index.html` | The whole app (layout, styles and code in one file) |
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

A bar above the keyboard switches between **తెలుగు** (the in-app Telugu akshara keypad, one akshara per tap) and **ENG** (type the whole word on any phone keyboard), and **దాచు** hides the keyboard to show the whole grid.

In ENG, type the complete answer and press space, Enter or **పెట్టు**: the app splits it into aksharas and puts them in the selected word's squares. A full-length word always starts from the word's first square, wherever the cursor is; a shorter piece goes from the selected square. While you type, the word's squares are shown right above the box (and in the grid, dashed) so you see where each akshara will land, and the board stays visible above the phone keyboard. `kamalam` → కమలం, `sankraanti` → సంక్రాంతి, `amma` → అమ్మ. Capitals give the harder sounds (T ట, D డ, N ణ, L ళ, Sh ష, E ఏ, O ఓ) and `aa`/`ee`/`oo` give long vowels; the app also offers the likely alternatives to tap. A Telugu phone keyboard works in the same box. On a computer, just start typing letters while a puzzle is open.

**Where the cursor goes:** after a letter, the next empty square of the same word (filled squares are skipped); when the word is full, the next clue by number (1 అడ్డం, 1 నిలువు, 2 …) that still has empty squares; after the last clue it comes back to any square left empty. A wrong letter keeps the cursor on it (no message; the square is already marked).

Answer colours follow the blog: a right letter turns grey with a green border and blue letter, a wrong one gold with a red border and red letter. A right letter is frozen: typing and delete pass over it. The selected square has a blue frame.

**ఆటో** (next to సులభం / కష్టం, on puzzles that have answers) fills the answers by itself, always starting from the first clue on the board: it goes clue by clue, shows each clue on the clue bar and writes only the squares that are empty or wrong, letter by letter. Squares the player already got right are left alone and skipped. Pause, next clue, stop and three speeds are under the board. Auto-filled letters count as hints; in the ఆధారాలు list, letters that came from a hint or ఆటో are shown on an orange background. Afterwards **గడి ఖాళీ చేసి మీరే ఆడండి** empties the grid to play it yourself.

A puzzle opens at the biggest zoom (200%) with the keyboard hidden; the first tap on a square brings the keyboard back. The bar above the clue scrolls the board sideways (drag it or use its arrows). On a computer the arrow keys move the selected square across and down, and the board scrolls along.

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
- **కొత్త పద వినోదం**: give the puzzle (grid + clues) photo or PDF in box **1**, and the answers grid (Eenadu prints it the next week) in box **2** — optional; it can also be added later from the **జవాబులు** card in the draft. Then choose a reader; it reads the puzzle and then the answers into the same draft:
  - **Gemini తో చదవండి**: Google Gemini reads the grid, numbers, clues (and a solved grid). Needs a free key from aistudio.google.com/apikey, saved once under సెట్టింగ్‌లు; it is kept in your Apps Script. When reading, the signed-in admin's phone gets the key for that moment only (never stored) and sends the pictures straight to Google; if Google cannot be reached from the phone, the Apps Script sends them instead.
  - **ఫోన్‌లోనే చదవండి**: no key. For Eenadu web pages saved as PDF (like 01.11.2026) it works by itself: it finds the పదకేళి grid page, the blocked squares (stars, leaves, flowers), the clue columns on the pages around it (stopping at సుడోకు), and reads them with Tesseract (about 5 MB downloaded the first time). Clue numbers and lengths come from the grid, including Eenadu's one-letter clues (a white square boxed in on all four sides). It then opens the answers file, finds the solved grid under గతవారం సమాధానాలు, checks it matches, and fills the answers into the draft. Everything stays editable: on the reading screen drag, resize or delete (×) the clue boxes, remove the grid box (గడి పెట్టె తీసివేయండి) and draw it again, then **మళ్ళీ చదవండి**; fix clue text in the text boxes. For photos or other layouts, draw the boxes yourself (the red lines must sit on the grid lines; drag the corner dots to fix a tilted photo). Telugu reading has mistakes, so always compare with the paper.
  - **Claude తో చదివించండి**: read it in the Claude studio, press **వెబ్‌సైట్ కోసం కాపీ** there and paste on the admin page under **Claude నుంచి**.
  - Then check the draft (black squares, numbers, clues), fill the answers (typing, or **జవాబుల చిత్రం · Gemini / ఫోన్‌లోనే**) and press **బ్లాగ్‌లో ప్రచురించండి** (or save it as a Blogger draft first).
- **Correcting answers (పట్టిక):** in the draft, the **పట్టిక** tab shows the answers as a sheet under the paper's own answers grid (same size, square by square). Tap any square and type: the old letter is replaced, as in Excel. While you type, a strip of letters appears (right above the phone keyboard, like Google keyboard's suggestions): in English, every Telugu letter it can be (`la` → ల ళ లా ళా లం ళం; a consonant alone, `k`, gives the whole గుణింతం); in Telugu, the same letter with every vowel sign, with ం, its look-alikes (క/ఖ, ద/ధ/డ, ల/ళ, శ/ష/స …) and its ఒత్తు (క్క). Tap one to put it in and go to the next square. Enter or "next" goes to the next square along the row; arrow keys move any way. The phone reader reads each letter five ways and they vote: the square alone (three cuts) and the whole across word and down word read as lines of text (Tesseract reads whole words far better than single letters). Squares where the readings did not agree are **yellow** (check those first), and squares you changed turn **green**. On the Eenadu 08.11.2026 answers it read 93 of 99 right (before: 73), on the 01.11.2026 page 89 of 101 (before: 70); nearly all the wrong ones are yellow. Still compare with the paper. Gemini usually reads answers better. **Best: read the answers with both** (Gemini, then ఫోన్‌లోనే, or the other way round, same file): squares where the two agree are very likely right, and only the squares where they differ turn yellow (Gemini's letter is kept). Letters you corrected yourself are never overwritten. If Gemini skips or adds a square in a row, the row is put back on its open squares, or marked yellow when that is not possible.
- **ఆటో** while testing a draft also fills squares that belong to no clue, and then names the clue numbers that are missing.
- **Editing a published post:** on the admin page, **ప్రచురించిన పోస్ట్ మార్చండి** jumps to **పోస్టులు మార్చండి**; search by date or name, press **మార్చు**, change anything (grid, clues, answers, title, pictures) and press **బ్లాగ్ పోస్ట్ సరిదిద్దండి**. The same post is changed in place (with Code.gs v7 no “బ్యాకప్ · …” Blogger draft is made any more; the previous version is kept as one file per post in your Google Drive, `e-padavinodam-old-<post id>.html`, replaced each time). Publishing a date that is already on the blog corrects that post instead of making a second one. The “బ్యాకప్ · …” drafts made by older scripts can be deleted in Blogger → Posts → Drafts.
- **Dates and « »:** with Code.gs v7 every new post is published on its puzzle date (06:00 IST; a date still ahead is published now, so it is not scheduled), so the blog lists posts in puzzle order whatever day you publish; its « goes to the nearest earlier puzzle and » to the next one, and the posts on both sides are relinked. **పోస్టులు మార్చండి → తేదీలు, « » లింకులు సరిచేయండి** does this once for every post already on the blog (for example 11.10, 18.10, 25.10 and 01.11, which were published on 8 November in the wrong order). Post addresses do not change. If Blogger refuses a date change, the result names those posts: change “Published on” for them in Blogger.
- **Pictures (GIF):** in the draft, **బొమ్మలు (GIF)** sets the black squares' picture and the congratulation picture for that post: pick one already used on the blog, choose a GIF from the phone/computer (stored in your Google Drive as “e-padavinodam-…”, shared as view-only by link), or paste a picture link. Without a choice, a new post takes the latest post's pictures and an edited post keeps its own.
- **Saving drafts:** the open draft saves itself on the phone as you work. **డ్రాఫ్ట్ సేవ్ చేయండి** keeps a copy in **సేవ్ చేసిన డ్రాఫ్ట్‌లు** on the admin page (up to 15, newest first: open or delete). When a new upload or post would replace a draft that has work in it, that draft is kept there by itself, so nothing is lost. These stay on that phone only; for another device use **బ్లాగ్‌లో డ్రాఫ్ట్‌గా సేవ్ చేయండి** (a Blogger draft).
- **Typing corrections:** in the clue boxes (reading screen and draft), the title and the fix box, type Telugu with English letters and press space: `dhanam` → ధనం, `vennela` → వెన్నెల (Sh ష, T ట, D డ, N ణ, L ళ; aa/ee/oo long vowels). Other likely spellings appear under the box; tap the right one. A last word without a space turns Telugu when you leave the box. The **English → తెలుగు** button turns this off (to use the phone's Telugu keyboard).
- A new post copies the layout of the latest blog post (scripts, సులభం/కష్టం switch, hint bulb, congratulation picture, record button, black-square picture), gets the next number for its element names, the address `…/YYYY/MM/DDMMYYYY.html`, and « » links by puzzle date (see above). Before sending, the app reads the made post back and refuses to publish if the squares or clues do not come out the same.
- **మార్చు** on a blog post rewrites that post's squares and clues in place. **దాచు** turns a post back into a draft.

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

## The blog on phones (version 4 of the theme snippet)

`blogger-mobile-theme-snippet.xml` makes the blog fit a phone and, new in version 4, plays each post's crossword in the app's own player **inside the post**: the same keypad (తెలుగు / ENG), clue bar, hints, ఆటో, cursor rules and congratulations as the app. A single post opens straight in the player; on pages with several posts each crossword gets a **యాప్‌లా ఇక్కడే ఆడండి** button. **బ్లాగ్ గడి చూపించు** switches back to the blog's own grid. Computers are unchanged. The player is this website (`?embed=1`); the post hands its own content to it, so the blog feed is not downloaded.

To install: Blogger → **Theme** → ▾ next to Customize → **Edit HTML** → find the old block that starts with `<!-- ఈ-పద వినోదం: phone layout` and ends with `<!-- ఈ-పద వినోదం: end -->` (version 3) and replace all of it with the new file's contents (if there is no old block, paste it just above `</head>`) → **Save**. Open a post on a phone to check. The website must be updated first (it carries the player).

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

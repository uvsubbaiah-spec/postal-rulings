# Postal Rulings — Android app (APK)

## 1. Upload to the repo root (postal-rulings), replacing existing files
- index.html
- manifest.json (theme colour now India Post red)
- service-worker.js (see note)
- icons/ (all five files; new logo)

Delete manifest-v2.json and assetlinks.json from this repo; nothing uses them here.

Service worker note: the old one answered every request from cache first, including
the Apps Script backend, so a phone could be shown an older copy of a post or edit.
The new one only caches the site's own files and always tries the network first.

## 2. Build the APK
1. https://www.pwabuilder.com → enter https://uvsubbaiah-spec.github.io/postal-rulings/
2. Package for stores → Android → Generate Package → Options:
   - Package ID: io.github.uvsubbaiah_spec.twa (same as your existing assetlinks.json)
   - Signing key: if you still have the signing.keystore from your earlier PWABuilder zip, choose "Use mine" and upload it. Otherwise create new, and replace the fingerprint in assetlinks.json with the new one.
3. Download the zip. Keep signing.keystore and its passwords safe; every update must use the same key.

## 3. Publish the download link
1. Repo → Releases → Create a new release → tag v1.0.0.
2. Attach the .apk renamed to exactly: postal-rulings.apk → Publish.
3. The blog's "Get App" button and the app's Android banner point to:
   https://github.com/uvsubbaiah-spec/postal-rulings/releases/latest/download/postal-rulings.apk
   For updates, publish a new release with the same file name.

## 4. Hide the address bar inside the app (optional)
Android only reads https://uvsubbaiah-spec.github.io/.well-known/assetlinks.json — the root of the domain.
1. Create a repo named exactly uvsubbaiah-spec.github.io with Pages enabled.
2. Add .well-known/assetlinks.json (from the PWABuilder zip) and an empty .nojekyll file at its root.

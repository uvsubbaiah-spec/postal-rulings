// Postal Rulings service worker.
// Network first: the live page and data always win; the saved copy is used
// only when the phone is offline. Only this site's own files are handled —
// requests to the Apps Script backend, Blogger and Drive pass straight
// through, so an old cached copy of a post or edit is never shown.
// (The previous version answered every request, including the backend's,
// from cache first; the new cache name clears that old cache.)
const CACHE_NAME = "postal-rulings-cache-v2";
const OFFLINE_URLS = ["./", "./index.html", "./manifest.json", "./icons/icon-192.png"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(OFFLINE_URLS)).catch(() => {}));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith(
    fetch(req)
      .then((res) => {
        if (res && res.status === 200) { const copy = res.clone(); caches.open(CACHE_NAME).then((c) => c.put(req, copy)); }
        return res;
      })
      .catch(() => caches.match(req).then((m) => m || caches.match("./index.html")))
  );
});

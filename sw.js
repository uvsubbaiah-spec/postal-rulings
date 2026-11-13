// Clean-up: the crossword app's offline helper was uploaded to this site by mistake on 7 Nov 2026.
// Any browser that installed it gets this version, which deletes its caches and removes itself.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k.startsWith('epv-')).map((k) => caches.delete(k)));
    await self.registration.unregister();
    const wins = await self.clients.matchAll({ type: 'window' });
    wins.forEach((w) => w.navigate(w.url));
  })());
});

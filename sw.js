self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Standard fetch listener to satisfy Chrome
  e.respondWith(fetch(e.request));
});

const CACHE_NAME = 'gemasgo-static-v2';
const ASSETS = [
  './', './index.html', './admin.html', './styles.css', './manifest.webmanifest', './assets/icons/gemasgo.svg',
  './src/app.js', './src/adminApp.js', './src/storage.js', './src/state.js', './src/auth.js', './src/games.js', './src/ads.js',
  './src/store.js', './src/promotions.js', './src/admin.js', './src/notifications.js', './src/utils.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});

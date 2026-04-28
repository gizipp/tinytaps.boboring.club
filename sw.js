const CACHE_NAME = 'tiny-taps-v6';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg',
  './css/style.css',
  './js/main.js',
  './games/balloon/',
  './games/balloon/index.html',
  './games/balloon/css/style.css',
  './games/balloon/js/script.js',
  './games/xylophone/',
  './games/xylophone/index.html',
  './games/xylophone/css/style.css',
  './games/xylophone/js/script.js',
  './games/apple/',
  './games/apple/index.html',
  './games/apple/css/style.css',
  './games/apple/js/script.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) return response;

      // Fallback for directory requests to index.html
      const url = new URL(event.request.url);
      if (url.pathname.endsWith('/')) {
        return caches.match(url.pathname + 'index.html');
      }

      return fetch(event.request);
    })
  );
});

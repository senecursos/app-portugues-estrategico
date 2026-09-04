const CACHE_NAME = 'portugues-estrategico-cache-v1';

const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/estrategico.jpg',
  '/imagem1.jpg',
  '/Imagem2.jpg',
  '/imagem3.jpg',
  '/logoescale.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

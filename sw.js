const CACHE_NAME = 'desa-kuwik-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/profil.html',
  '/pemdes.html',
  '/layanan.html',
  '/berita.html',
  '/kontak.html',
  '/manifest.json'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
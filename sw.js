var cacheName = 'hello-pwa';
var filesToCache = [
    '/',
    '/index.html',
    '/static/map.html',
    '/static/sos.html',
    '/css/style.css',
    '/js/service-worker.js',
    '/js/map.js',
    '/js/sos.js',
    '/manifest.json',
    '/images/UEK-logo-192.png',
    '/images/UEK-logo-512.png'
  ];
  

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
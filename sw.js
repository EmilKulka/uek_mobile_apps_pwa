var cacheName = 'hello-pwa';
var filesToCache = [
    '/uek_mobile_apps_pwa/',
    '/uek_mobile_apps_pwa/index.html',
    '/uek_mobile_apps_pwa/static/map.html',
    '/uek_mobile_apps_pwa/static/sos.html',
    '/uek_mobile_apps_pwa/css/style.css',
    '/uek_mobile_apps_pwa/js/service-worker.js',
    '/uek_mobile_apps_pwa/js/map.js',
    '/uek_mobile_apps_pwa/js/sos.js',
    '/uek_mobile_apps_pwa/manifest.json',
    '/uek_mobile_apps_pwa/images/UEK-logo-192.png',
    '/uek_mobile_apps_pwa/images/UEK-logo-512.png'
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
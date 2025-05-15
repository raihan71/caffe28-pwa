const cacheName = 'caffe28-v1';
const filesToCache = [
  '/index.html',
  '/css/styles.css',
  '/js/script.js',
  '/img/products/coffee1.jpg',
  '/img/products/coffee2.jpg',
  '/img/products/coffee3.jpg',
  '/img/products/coffee4.jpg',
  '/img/products/coffee5.jpg',
  '/img/products/coffee6.jpg',
];
self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(cacheName);
      cache.addAll(filesToCache);
    })(),
  );
});
self.addEventListener('fetch', (event) => {
  event.respondWith(
    (async () => {
      const cache = await caches.open(cacheName);
      const cachedResponse = await cache.match(event.request);
      if (cachedResponse) {
        return cachedResponse;
      }
      try {
        const networkResponse = await fetch(event.request);
        cache.put(event.request, networkResponse.clone());
        return networkResponse;
      } catch (error) {
        console.error('Fetch failed; returning offline page instead.', error);
        return caches.match('/index.html');
      }
    })(),
  );
});
// self.addEventListener('activate', () => {
//   console.log('Service worker activated');
// });

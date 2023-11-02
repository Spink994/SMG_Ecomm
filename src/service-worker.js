// Define a cache name for your assets
const cacheName = 'my-app-cache';

// List of assets to cache
const assetsToCache = [
	'/',
	'/index.html',
	'/styles.css',
	'/script.js',
	'/images/logo.png',
	// Add more assets to cache as needed
];

// Install event: Cache assets during service worker installation
self.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open(cacheName).then((cache) => {
			return cache.addAll(assetsToCache);
		})
	);
});

// Activate event: Remove outdated caches
self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches.keys().then((cacheNames) => {
			return Promise.all(
				cacheNames.map((name) => {
					if (name !== cacheName) {
						return caches.delete(name);
					}
				})
			);
		})
	);
});

// Fetch event: Implement Cache First strategy
self.addEventListener('fetch', (event) => {
	event.respondWith(
		caches.match(event.request).then((cachedResponse) => {
			if (cachedResponse) {
				return cachedResponse;
			}

			// If the asset is not in the cache, fetch it from the network
			return fetch(event.request)
				.then((response) => {
					// Clone the response for caching
					const responseToCache = response.clone();

					// Open the cache and add the network response to it
					caches.open(cacheName).then((cache) => {
						cache.put(event.request, responseToCache);
					});

					return response;
				})
				.catch((error) => {
					// Handle network errors here
					console.error('Fetch error:', error);

					// Optionally, you can return a custom offline response
					// Example: return new Response('Offline Mode');
				});
		})
	);
});

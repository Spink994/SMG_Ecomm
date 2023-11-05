/* eslint-disable @typescript-eslint/no-explicit-any */
// service-worker.ts
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';

// Define a custom type to include the __WB_MANIFEST property
interface CustomServiceWorkerGlobalScope extends ServiceWorkerGlobalScope {
	__WB_MANIFEST: any[];
}

declare const self: CustomServiceWorkerGlobalScope;

self.addEventListener('install', (event) => {
	const filesToCache = [
		// Add paths to your e-commerce app's static assets here
		'/',
		'/index.html',
		'/css/app.css',
		'/js/app.js',
		'/images/logo.png',
		// Add more files as needed
	];

	event.waitUntil(
		caches.open('smg-cache-v2').then((cache) => {
			return cache.addAll(filesToCache);
		})
	);
});

// Precache and route any assets from the Vite build output directory
precacheAndRoute(self.__WB_MANIFEST);

// Define a regular expression pattern to match your API endpoints
const apiPattern = /^https:\/\/(.*\.)*api\.savetobuy\.io\/svtb\/api\/v1\/lifestyle(\/.*)?$/;

// Cache API responses with a CacheFirst strategy
registerRoute(
	apiPattern,
	new CacheFirst({
		cacheName: 'smg-api-cache-v4',
		plugins: [
			{
				cacheWillUpdate: async ({ response }) => {
					// Modify the response or caching behavior here
					if (response && response.status === 200) {
						// You can add custom headers or manipulate the response before caching
						const modifiedResponse = new Response(response.body, {
							status: 200,
							statusText: 'OK',
							headers: {
								...response.headers,
							},
						});

						return modifiedResponse;
					}
					return response;
				},
			},
		],
	})
);

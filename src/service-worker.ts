/* eslint-disable @typescript-eslint/no-explicit-any */
// service-worker.ts
import { precacheAndRoute } from 'workbox-precaching';

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
		caches.open('my-ecommerce-cache').then((cache) => {
			return cache.addAll(filesToCache);
		})
	);
});

// Precache and route any assets from the Vite build output directory
precacheAndRoute(self.__WB_MANIFEST);

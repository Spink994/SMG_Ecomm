/// <reference lib="esnext" />
/// <reference lib="webworker" />

const sw = self as unknown as ServiceWorkerGlobalScope & typeof globalThis;

const addResourcesToCache = async (resources: string[]) => {
	const cache = await caches.open('v1');
	await cache.addAll(resources);
};

const putInCache = async (request: RequestInfo | URL, response: Response) => {
	const cache = await caches.open('v1');
	await cache.put(request, response);
};

const cacheFirst = async ({
	request,
	preloadResponsePromise,
	fallbackUrl,
}: {
	request: RequestInfo | URL;
	preloadResponsePromise: Promise<Response>;
	fallbackUrl: string;
}) => {
	// First try to get the resource from the cache
	const responseFromCache = await caches.match(request);
	if (responseFromCache) {
		return responseFromCache;
	}

	// Next try to use (and cache) the preloaded response, if it's there
	const preloadResponse = await preloadResponsePromise;
	if (preloadResponse) {
		console.info('using preload response', preloadResponse);
		putInCache(request, preloadResponse.clone());
		return preloadResponse;
	}

	// Next try to get the resource from the network
	try {
		const responseFromNetwork = await fetch(request);
		// response may be used only once
		// we need to save clone to put one copy in cache
		// and serve second one
		putInCache(request, responseFromNetwork.clone());
		return responseFromNetwork;
	} catch (error) {
		const fallbackResponse = await caches.match(fallbackUrl);
		if (fallbackResponse) {
			return fallbackResponse;
		}
		// when even the fallback response is not available,
		// there is nothing we can do, but we must always
		// return a Response object
		return new Response('Network error happened', {
			status: 408,
			headers: { 'Content-Type': 'text/plain' },
		});
	}
};

const deleteCache = async (key: string) => {
	await caches.delete(key);
};

const deleteOldCaches = async () => {
	const cacheKeepList = ['v2'];
	const keyList = await caches.keys();
	const cachesToDelete = keyList.filter((key) => !cacheKeepList.includes(key));
	await Promise.all(cachesToDelete.map(deleteCache));
};

// Enable navigation preload
const enableNavigationPreload = async () => {
	if (sw.registration.navigationPreload) {
		await sw.registration.navigationPreload.enable();
	}
};

sw.addEventListener('install', (event) => {
	event.waitUntil(addResourcesToCache(['/', '/index.html', '/style.css', '/app.js']));
});

sw.addEventListener('activate', (event) => {
	event.waitUntil(enableNavigationPreload().then(() => deleteOldCaches()));
});

sw.addEventListener('fetch', (event) => {
	event.respondWith(
		cacheFirst({
			request: event.request,
			preloadResponsePromise: event.preloadResponse,
			fallbackUrl: '/',
		})
	);
});
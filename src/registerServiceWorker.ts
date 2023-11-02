export default function registerServiceWorker() {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker
			.register('/service-worker.js') // Replace with your service worker file path
			.then(function (registration) {
				console.log('Service Worker registered with scope:', registration.scope);
			})
			.catch(function (error) {
				console.error('Service Worker registration failed:', error);
			});
	}
}

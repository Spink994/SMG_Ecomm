export default function unRegister() {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker
			.getRegistrations()
			.then((registrations) => {
				for (const registration of registrations) {
					registration
						.unregister()
						.then(() => {
							console.log('Service Worker unregistered:', registration.scope);
						})
						.catch((error) => {
							console.error('Service Worker unregister failed:', error);
						});
				}
			})
			.catch((error) => {
				console.error('Error getting service worker registrations:', error);
			});
	}
}

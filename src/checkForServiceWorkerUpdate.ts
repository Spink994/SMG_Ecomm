/* eslint-disable @typescript-eslint/no-non-null-assertion */
export default function checkForServiceWorkerUpdate() {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker
			.getRegistration()
			.then((registration) => {
				if (registration && registration.waiting) {
					// A new service worker is waiting to activate
					const toast = document.createElement('div');
					toast.classList.add('update-toast');
					toast.innerHTML = `
              <p>A new version is available!</p>
              <button id="refresh-button">Refresh</button>
            `;
					document.body.appendChild(toast);

					alert('New update!');

					// Listen for the "Refresh" button click
					document.getElementById('refresh-button')!.addEventListener('click', () => {
						// Skip waiting and activate the new service worker
						registration.waiting!.postMessage({ type: 'SKIP_WAITING' });
						location.reload();
					});
				}
			})
			.catch((error) => {
				console.error('Error checking for service worker update:', error);
			});
	}
}

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { persistor, store } from '@/redux/app/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate
				loading={null}
				persistor={persistor}
			>
				<Suspense fallback={null}>
					<RouterProvider router={router} />
				</Suspense>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);

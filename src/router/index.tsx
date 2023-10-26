import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ErrorPage from '@/pages/ErrorPage';
import Public from '../Public';

const Products = lazy(() => import('../pages/Products'));
const Home = lazy(() => import('../pages/Home'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Login = lazy(() => import('../pages/Login'));
const Cart = lazy(() => import('../pages/Cart'));

export const router = createBrowserRouter([
	{
		path: '/dashboard',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				errorElement: <ErrorPage />,
				children: [{ index: true, element: <Dashboard /> }],
			},
		],
	},

	{
		path: '/cart',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				errorElement: <ErrorPage />,
				children: [{ index: true, element: <Cart /> }],
			},
		],
	},

	// Public pages that are accessible without authentication
	{
		path: '/',
		element: <Public />,
		errorElement: <ErrorPage />,
		children: [
			{
				errorElement: <ErrorPage />,
				children: [{ index: true, element: <Home /> }],
			},
		],
	},
	{
		path: '/products',
		element: <Public />,
		errorElement: <ErrorPage />,
		children: [
			{
				errorElement: <ErrorPage />,
				children: [{ index: true, element: <Products /> }],
			},
		],
	},
	{
		path: '/auth/login',
		element: <Login />,
		errorElement: <ErrorPage />,
	},
]);

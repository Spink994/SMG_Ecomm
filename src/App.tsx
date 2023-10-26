import { Outlet, Navigate, useLocation } from 'react-router-dom';
// import { useAppSelector } from './redux/app/hooks';
// import { selectCurrentToken } from './redux/features/auth/authSlice';

function App() {
	const accessToken = true;
	const location = useLocation();

	return (
		<>
			{accessToken ? (
				<div className='app-height relative flex h-screen w-screen flex-col overflow-x-hidden sm:flex-row'>
					{/* Main Section */}
					<div className='flex h-screen w-full flex-1 flex-col overflow-y-scroll bg-gray-#F6FAFD pb-16'>
						<Outlet />
					</div>
				</div>
			) : (
				<Navigate to='/auth/login' state={{ from: location }} replace />
			)}
		</>
	);
}

export default App;

import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

export default function Public() {
	return (
		<main>
			<Navbar />
			<div className='app-height relative flex h-screen w-screen flex-col overflow-x-hidden'>
				<Outlet />
			</div>
		</main>
	);
}

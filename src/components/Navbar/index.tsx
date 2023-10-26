import { Link } from 'react-router-dom';
import Logo from '@/assets/svgs/icons/grid.svg';
import ContentWrapper from '../ContentWrapper';
import appRoutes from '@/routes';

import { FiShoppingBag, FiShoppingCart, FiUser } from 'react-icons/fi';
import { useAppSelector } from '@/redux/app/hooks';

export default function Navbar() {
	const { numberOfItemsInCart } = useAppSelector((state) => state.cart);

	return (
		<nav className='sticky top-0 z-50 flex min-h-[70px] w-full items-center bg-slate-100'>
			<ContentWrapper>
				<div className='flex h-full w-full items-center justify-between'>
					{/* Website logo */}
					<Link to='/'>
						<img className='max-w-[100px]' src={Logo} alt='smg-logo' />
					</Link>

					{/* Other links */}
					<div className='flex items-center gap-6'>
						<Link
							title='Shopping Cart'
							className='relative text-sm text-zinc-900'
							to={appRoutes.cart}
						>
							<FiShoppingCart className='text-[20px]' />
							<div className='absolute -left-5 -top-4 flex h-4 w-4 items-center justify-center rounded-full bg-zinc-900 !p-3 text-xs text-white'>
								<span>{numberOfItemsInCart}</span>
							</div>
						</Link>
						<Link
							title='Products'
							className='text-sm text-zinc-900'
							to={appRoutes.products}
						>
							<FiShoppingBag className='text-[20px]' />
						</Link>
						<Link
							title='Profile'
							className='text-sm text-zinc-900'
							to={appRoutes.dashboard}
						>
							<FiUser className='text-[20px]' />
						</Link>
					</div>
				</div>
			</ContentWrapper>
		</nav>
	);
}

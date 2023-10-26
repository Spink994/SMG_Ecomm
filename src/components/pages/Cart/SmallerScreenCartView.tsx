import { Button } from '@/components/common';
import { useAppDispatch, useAppSelector } from '@/redux/app/hooks';
import { updateQuantity, removeFromCart } from '@/redux/features/cart/cartSlice';
import { GrFormClose } from 'react-icons/gr';

export default function SmallerScreenCartView() {
	const { cart, cartTotal } = useAppSelector((state) => state.cart);
	const dispatch = useAppDispatch();

	return (
		<>
			<div className='grid w-full grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] justify-between gap-4 gap-y-12 pb-12 sm:gap-x-8 [@media(min-width:996px)]:hidden'>
				{cart.map((item) => (
					<div
						className='flex w-full items-center gap-3 rounded border border-zinc-300'
						key={item.id}
					>
						{/* Product image, name and description */}
						<div className='flex w-full items-center gap-3 p-2'>
							<div className='flex h-full min-w-[64px] max-w-[64px] items-center rounded bg-slate-100'>
								<img className='w-full' src={item.images[0].url} alt={item.name} />
							</div>

							{/* Product name and description */}
							<div className='my-auto'>
								<p className='line-clamp-2 text-ellipsis text-xs text-zinc-600'>
									{item.description}
								</p>
								<p className='mt-1 line-clamp-1 text-ellipsis text-xs font-bold text-zinc-900'>
									₦ {item.options[0].price.toLocaleString()}
								</p>

								<div className='mt-2 flex'>
									<Button
										onClick={() =>
											dispatch(
												updateQuantity({
													...item,
													increase: 'increase',
												})
											)
										}
										className='flex !h-8 w-8 items-center !rounded-none bg-zinc-900'
									>
										+
									</Button>
									<span className='flex w-12 items-center justify-center border-b border-t text-sm'>
										{item.quantity}
									</span>
									<Button
										onClick={() =>
											dispatch(
												updateQuantity({
													...item,
													descrease: 'decrease',
												})
											)
										}
										className='flex !h-8 w-8 items-center !rounded-none bg-zinc-300 text-zinc-900'
									>
										-
									</Button>
									<Button
										onClick={() => dispatch(removeFromCart(item))}
										className='ml-auto flex !h-8 w-8 items-center justify-center !rounded border !bg-zinc-200 bg-transparent text-zinc-100'
									>
										<GrFormClose className='min-w-[14px] text-[24px]' />
									</Button>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>

			<div>
				<div className='flex items-center justify-between border-b border-b-zinc-300 py-4'>
					<span className='text-sm font-bold'>Discount:</span>
					<span className='text-sm font-bold'>₦ 0.00</span>
				</div>
				<div className='flex items-center justify-between border-b border-b-zinc-300 py-4'>
					<span className='text-sm font-bold'>Delivery:</span>
					<span className='text-sm font-bold'>₦ 0.00</span>
				</div>
				<div className='flex items-center justify-between border-b border-b-zinc-300 py-4'>
					<span className='text-sm font-bold'>Subtotal:</span>
					<span className='text-sm font-bold'>₦{cartTotal.toLocaleString()}</span>
				</div>
				<div className='flex items-center justify-between border-b border-b-zinc-300 py-4'>
					<span className='text-sm font-bold'>Total:</span>
					<span className='text-sm font-bold'>₦{cartTotal.toLocaleString()}</span>
				</div>

				<Button className='mt-6 !rounded !bg-zinc-900 !px-12 text-sm text-white'>
					Checkout
				</Button>
			</div>
		</>
	);
}

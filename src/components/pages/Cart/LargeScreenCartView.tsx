import { Button } from '@/components/common';
import { useAppDispatch, useAppSelector } from '@/redux/app/hooks';
import { updateQuantity, removeFromCart } from '@/redux/features/cart/cartSlice';
import { GrFormClose } from 'react-icons/gr';

export default function LargeScreenCartView() {
	const { cart } = useAppSelector((state) => state.cart);
	const dispatch = useAppDispatch();

	return (
		<div className='mb-8 hidden [@media(min-width:996px)]:block'>
			<div className='grid grid-cols-8 gap-3 border-b border-b-zinc-300 pb-3'>
				<span className='col-span-3'>Description</span>
				<span>Size</span>
				<span className='col-span-2'>Quantity</span>
				<span>Remove</span>
				<span>Price</span>
			</div>

			{/* body */}
			<div className='mt-4 grid'>
				{/* A single row */}
				{cart.map((item) => (
					<div
						key={item.id}
						className='grid grid-cols-8 justify-center gap-3 border-b py-4'
					>
						{/* Product image, name and description */}
						<div className='col-span-3 flex items-center gap-3'>
							<div className='flex h-20 w-16 items-center rounded'>
								<img className='w-full' src={item.images[0].url} alt={item.name} />
							</div>

							{/* Product name and description */}
							<div className='my-auto max-w-[250px]'>
								<p className='line-clamp-1 text-ellipsis'>{item.name}</p>
								<p className='line-clamp-1 text-ellipsis text-xs'>
									{item.description}
								</p>
							</div>
						</div>

						{/* Size */}
						<div className='my-auto'>
							<span className='flex h-12 w-12 items-center justify-center rounded border border-zinc-700 text-zinc-400'>
								{'--'}
							</span>
						</div>

						{/* Quantity */}
						<div className='col-span-2 my-auto'>
							<div className='flex'>
								<Button
									onClick={() =>
										dispatch(updateQuantity({ ...item, increase: 'increase' }))
									}
									className='w-12 !rounded-none bg-zinc-900'
								>
									+
								</Button>
								<span className='flex w-12 items-center justify-center border-b border-t text-sm'>
									{item.quantity}
								</span>
								<Button
									onClick={() =>
										dispatch(updateQuantity({ ...item, descrease: 'decrease' }))
									}
									className='w-12 !rounded-none bg-zinc-300 text-zinc-900'
								>
									-
								</Button>
							</div>
						</div>

						{/* Remove */}
						<div className='my-auto'>
							<Button
								onClick={() => dispatch(removeFromCart(item))}
								className='flex w-12 items-center justify-center !rounded border border-zinc-500 bg-transparent text-zinc-800'
							>
								<GrFormClose />
							</Button>
						</div>

						{/* Price */}
						<div className='my-auto'>
							<p>₦ {item.options[0].price.toLocaleString()}</p>
						</div>
					</div>
				))}

				{cart.length === 0 ? (
					<p className='my-auto text-center text-zinc-500'>No items in your cart!</p>
				) : null}
			</div>
		</div>
	);
}

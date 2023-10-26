import ContentWrapper from '@/components/ContentWrapper';
import { Button } from '@/components/common';
import { useAppDispatch, useAppSelector } from '@/redux/app/hooks';
import { removeFromCart, updateQuantity } from '@/redux/features/cart/cartSlice';

export default function Cart() {
	const { cart, cartTotal } = useAppSelector((state) => state.cart);
	const dispatch = useAppDispatch();

	return (
		<section className='relative pt-24'>
			<ContentWrapper>
				<h1 className='mb-8 text-center text-6xl font-bold'>Cart</h1>
				{/* Header */}
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
									<img
										className='w-full'
										src={item.images[0].url}
										alt={item.name}
									/>
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
									{'Nil'}
								</span>
							</div>

							{/* Quantity */}
							<div className='col-span-2 my-auto'>
								<div className='flex'>
									<Button
										onClick={() =>
											dispatch(
												updateQuantity({ ...item, increase: 'increase' })
											)
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
											dispatch(
												updateQuantity({ ...item, descrease: 'decrease' })
											)
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
									className='w-12 !rounded border border-zinc-500 bg-transparent text-zinc-800'
								>
									X
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

				{/* Footer */}
				<div className='sticky -bottom-16 mt-8 flex w-full flex-col bg-slate-50 p-3'>
					<div className='grid grid-cols-4 gap-4'>
						<div className='flex h-16 max-w-[200px] items-center justify-between rounded border border-zinc-300 px-3'>
							<span>Discount:</span>
							<span>₦0.00</span>
						</div>
						<div className='flex h-16 max-w-[200px] items-center justify-between rounded border border-zinc-300 px-3'>
							<span>Delivery:</span>
							<span>₦0.00</span>
						</div>
						<div className='flex h-16 max-w-[200px] items-center justify-between rounded border border-zinc-300 px-3'>
							<span>Subtotal:</span>
							<span>₦{cartTotal.toLocaleString()}</span>
						</div>
						<div className='flex h-16 max-w-[200px] items-center justify-between rounded border border-zinc-300 px-3'>
							<span>Total:</span>
							<span>₦{cartTotal.toLocaleString()}</span>
						</div>
					</div>

					<Button className='!mx-auto mt-8 !rounded bg-zinc-900 !px-12'>Checkout</Button>
				</div>
			</ContentWrapper>
		</section>
	);
}

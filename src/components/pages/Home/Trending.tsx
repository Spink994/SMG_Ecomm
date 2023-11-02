import ContentWrapper from '@/components/ContentWrapper';
import DisplayCard from '@/components/DisplayCard';
import ProductSkeleton from '@/components/ProductSkeleton';
import { useAppDispatch, useAppSelector } from '@/redux/app/hooks';
import { addToCart } from '@/redux/features/cart/cartSlice';
import { ReactNode } from 'react';

export default function Trending() {
	const { data, isLoading } = useAppSelector((state) => state.products);
	const { cart } = useAppSelector((state) => state.cart);
	const dispatch = useAppDispatch();

	return (
		<section className=' bg-slate-100 pt-24'>
			<h1 className='mb-24 text-center text-5xl font-bold text-zinc-900 [@media(min-width:1170px)]:text-7xl'>
				Featured
			</h1>

			{/* Trending products */}
			<ContentWrapper>
				<div className='grid w-full grid-cols-[repeat(auto-fill,_minmax(140px,_1fr))] justify-between gap-4 gap-y-12  pb-12 sm:grid-cols-[repeat(auto-fill,_minmax(230px,_1fr))] sm:gap-x-8'>
					{Array.isArray(data) &&
						!isLoading &&
						data?.map((productt, index) => (
							<DisplayCard
								disableSelection={
									cart.find((product) => product.id === productt.id)
										? true
										: false
								}
								onClick={() => dispatch(addToCart({ ...productt, quantity: 1 }))}
								key={productt.id + index}
								imageSrc={productt.images[0].url}
								productDescription={productt.name}
								productPrice={productt.options[0].price.toLocaleString()}
								className='w-full cursor-pointer'
							/>
						))}
				</div>
				<div className='grid animate-pulse grid-cols-[repeat(auto-fill,_minmax(190px,_1fr))] justify-between gap-x-8 gap-y-12 pb-12'>
					{isLoading
						? (Array(40) as ReactNode[])
								?.fill(<ProductSkeleton />, 0)
								.map((el, idx) => <div key={idx}>{el}</div>)
						: null}
				</div>
			</ContentWrapper>
		</section>
	);
}

import ContentWrapper from '@/components/ContentWrapper';
import { Button } from '@/components/common';
import useHeroAnimateHook from '@/hooks/useHeroAnimateHook';

const IMAGE_DATA = [
	{
		imageUrl:
			'https://cdn.sanity.io/images/iamp3nwv/production/7225f181244c432a890f3d13a6469ac41a4d896f-1680x1680.webp',
		label: '',
	},
	{
		imageUrl:
			'https://cdn.sanity.io/images/iamp3nwv/production/7225f181244c432a890f3d13a6469ac41a4d896f-1680x1680.webp',
		label: '',
	},
	{
		imageUrl:
			'https://cdn.sanity.io/images/iamp3nwv/production/4a3efd783e82fd2040e402008b3ad808bc2cb0e3-730x584.webp',
		label: '',
	},
	{
		imageUrl:
			'https://cdn.sanity.io/images/iamp3nwv/production/7594050453e06295f0a61b1f731139d47191cd5c-801x801.jpg',
		label: '',
	},
	{
		imageUrl:
			'https://cdn.sanity.io/images/iamp3nwv/production/f2507b1f407dbd8ece8a87496955373925a6eff1-800x600.webp',
		label: '',
	},
];

export default function Hero() {
	const { imageIndex, animationState } = useHeroAnimateHook({ IMAGE_DATA });

	return (
		<section className='h-max bg-slate-100 py-12 [@media(min-width:1170px)]:pt-0'>
			<ContentWrapper>
				<div className='flex h-full flex-col items-center [@media(min-width:1170px)]:flex-row'>
					<div className='flex h-full flex-1 flex-col justify-center'>
						<h1 className='mb-6 text-center text-5xl font-bold text-zinc-900 [@media(min-width:1170px)]:text-left [@media(min-width:570px)]:text-7xl'>
							All your Favorite Brands in One Place
						</h1>{' '}
						<p className='text-center text-xl [@media(min-width:1170px)]:text-left'>
							Achieve your dream lifestyle without debt.
						</p>
						<p className='mx-auto mt-1 max-w-[500px] text-center text-sm font-light text-zinc-600 [@media(min-width:1170px)]:mx-0 [@media(min-width:1170px)]:text-left'>
							Earn up to ₦50,000 cash back when you buy from your favorite brands with
							SavetoBuy, and win other amazing rewards while saving towards your
							purchases.
						</p>
						<Button className='mx-auto mt-8 min-w-[200px] max-w-[200px] bg-zinc-900 [@media(min-width:1170px)]:mx-0'>
							Start Shopping
						</Button>
					</div>

					{/* Images with animation */}
					<div className='flex h-full flex-1 items-center justify-center'>
						<div className='flex h-[400px] max-w-[800px] flex-col items-center justify-center [@media(min-width:1170px)]:min-h-[600px]'>
							<img
								src={IMAGE_DATA[imageIndex].imageUrl}
								alt='shoe'
								className={`max-h-full mix-blend-multiply transition-opacity duration-300 [@media(min-width:1170px)]:h-auto ${
									animationState === 'fadein' ? 'opacity-100' : 'opacity-0'
								}`}
							/>
						</div>
					</div>
				</div>
			</ContentWrapper>
		</section>
	);
}

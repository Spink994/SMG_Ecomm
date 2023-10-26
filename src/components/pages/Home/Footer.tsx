import ContentWrapper from '@/components/ContentWrapper';
import { Button } from '@/components/common';

export default function Footer() {
	return (
		<section className='py-24'>
			<ContentWrapper>
				<p className='text-center text-3xl font-bold md:text-7xl'>
					Not satisfied with what we have?
				</p>
				<p className='text-center sm:text-xl text-zinc-500'>Please, leave here immediately!</p>

				<div className='mt-4 flex w-full justify-center'>
					<Button
						onClick={() => (window.location.href = 'https://lifestyle.savetobuy.io')}
						className='!mx-auto !rounded bg-zinc-900 !px-12'
					>
						Leave!
					</Button>
				</div>
			</ContentWrapper>
		</section>
	);
}

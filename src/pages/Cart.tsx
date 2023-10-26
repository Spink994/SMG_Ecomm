import ContentWrapper from '@/components/ContentWrapper';
import LargeScreenCartView from '@/components/pages/Cart/LargeScreenCartView';
import SmallerScreenCartView from '@/components/pages/Cart/SmallerScreenCartView';
import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
	const navigate = useNavigate();

	return (
		<section className='relative pt-24'>
			<ContentWrapper>
				<div className='relative flex w-full items-center justify-center'>
					<FiArrowLeft
						onClick={() => navigate(-1)}
						className='absolute left-0 -translate-y-1/2 text-[32px]'
					/>
					<h1 className='mb-8 text-center text-6xl font-bold'>Cart</h1>
				</div>

				{/* Header */}
				<LargeScreenCartView />
				<SmallerScreenCartView />
			</ContentWrapper>
		</section>
	);
}

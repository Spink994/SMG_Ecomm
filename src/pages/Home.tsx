import { HeroComponent } from '@/components/pages';
import Featured from '@/components/pages/Home/Featured';
import Footer from '@/components/pages/Home/Footer';
import Trending from '@/components/pages/Home/Trending';
import { useAppDispatch } from '@/redux/app/hooks';
import { useGetProductDataQuery } from '@/redux/features/products/getProducts';
import { setProducts } from '@/redux/features/products/productSlice';
import React from 'react';

export default function Home() {
	const { data, isSuccess } = useGetProductDataQuery({ page: 1, perPage: 80 });
	const dispatch = useAppDispatch();

	React.useEffect(() => {
		if (isSuccess) dispatch(setProducts(data));
	}, [isSuccess]);

	return (
		<>
			<HeroComponent />
			<Featured />
			<Trending />
			<Footer />
		</>
	);
}

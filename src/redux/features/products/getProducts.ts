import { apiSlice } from '@/redux/app/api/apiSlice';

export const productApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getProductData: builder.query({
			query: ({ page, perPage }: { page: number; perPage: number }) =>
				`/products?page=${page}&perPage=${perPage}`,
		}),
	}),
});

export const { useGetProductDataQuery } = productApiSlice;

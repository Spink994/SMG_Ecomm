import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ProductsType {
	id: string;
	name: string;
	description: string;
	slug: string;
	category: string;
	stability: null;
	physical: string;
	quantity: number;
	images: [
		{
			url: string;
		}
	];
	merchant: {
		name: string;
		image: string;
		id: string;
		stbId: string;
	};
	options: [
		{
			name: string;
			price: number;
			stock: null;
			id: string;
			cashback: number;
			discount: null;
			reward: {};
		}
	];
}

export interface ProductResponseType {
	message: string;
	status: string;
	total: number;
	count: number;
	totalPages: number;
	nextPage: number;
	prePage: null;
	currentPage: number;
	perPage: number;
	data: ProductsType[] | null;
	isLoading: boolean;
}

const initialState: Partial<ProductResponseType> = {
	data: null,
	isLoading: true,
};

const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setProducts: (state, action: PayloadAction<ProductResponseType>) => {
			const { data } = action.payload;
			state.data = data;
			state.isLoading = false;
		},
	},
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;

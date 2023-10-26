import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProductsType } from '../products/productSlice';

export interface CartType {
	cart: Array<ProductsType>;
	cartTotal: number;
	numberOfItemsInCart: number;
}

type UpdateQuantity = {
	increase: 'increase';
	descrease: 'decrease';
};

const initialState: CartType = {
	cart: [],
	cartTotal: 0,
	numberOfItemsInCart: 0,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state: CartType, action: PayloadAction<ProductsType>) => {
			const product = action.payload;

			//Checking the product if it exists in the store
			const findProduct = state.cart.find((item) => item.id === product.id);

			if (findProduct) return;
			state.cart = [...state.cart, product];

			// Calculates the total amount in the cart
			const calculateTotal = state.cart?.reduce(
				(cummulativeValue, currentValue) =>
					cummulativeValue + currentValue.options[0].price * currentValue.quantity,
				0
			);

			state.cartTotal = calculateTotal as number;

			// Returns the number of products in the cart
			state.numberOfItemsInCart = state.cart !== null ? (state.cart.length as number) : 0;
		},

		removeFromCart: (state: CartType, action: PayloadAction<Partial<ProductsType>>) => {
			const itemId = action.payload.id;

			const updatedCart = state.cart.filter((item) => item.id !== itemId);
			state.cart = updatedCart;

			// Calculates the total amount in the cart
			const calculateTotal = state.cart?.reduce(
				(cummulativeValue, currentValue) =>
					cummulativeValue + currentValue.options[0].price * currentValue.quantity,
				0
			);

			state.cartTotal = calculateTotal as number;
		},

		updateQuantity: (
			state: CartType,
			action: PayloadAction<Partial<ProductsType> & Partial<UpdateQuantity>>
		) => {
			const item = action.payload;

			if (item.increase) {
				state.cart = state.cart.map((product) => {
					if (product.id === item.id)
						return { ...product, quantity: product.quantity + 1 };
					return product;
				});
			}

			if (item.descrease) {
				state.cart = state.cart.map((product) => {
					if (product.id === item.id)
						return {
							...product,
							quantity:
								product.quantity === 1 ? product.quantity : product.quantity - 1,
						};
					return product;
				});
			}

			// Calculates the total amount in the cart
			const calculateTotal = state.cart?.reduce(
				(cummulativeValue, currentValue) =>
					cummulativeValue + currentValue.options[0].price * currentValue.quantity,
				0
			);

			state.cartTotal = calculateTotal as number;
		},
	},
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;

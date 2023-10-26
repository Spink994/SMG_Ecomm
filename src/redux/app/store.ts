import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
	persistStore,
	persistReducer,
	REGISTER,
	REHYDRATE,
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from '@/redux/features/auth/authSlice';
import { apiSlice } from './api/apiSlice';
import productSlice from '../features/products/productSlice';
import cartSlice from '../features/cart/cartSlice';

const persistConfig = {
	key: 'root',
	storage,
	version: 1,
	whitelist: ['auth'],
};

const rootReducers = combineReducers({
	auth: authReducer,
	products: productSlice,
	cart: cartSlice,
	[apiSlice.reducerPath]: apiSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
	reducer: persistedReducer,
	/* This code is configuring the middleware for the Redux store. The `getDefaultMiddleware` function
	returns an array of middleware that is included by default in the Redux store. The `concat` method
	is used to add the middleware from the `apiSlice` to the end of this array. This allows the
	`apiSlice` middleware to intercept and handle API requests made by the application. */
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(apiSlice.middleware),
	devTools: true,
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

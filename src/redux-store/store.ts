import { configureStore } from '@reduxjs/toolkit';
import { productsListSlice } from './get-all-products-slice/getAllProductsSlice';

export const store = configureStore({
	reducer: {
		productsListReducer: productsListSlice.reducer,
	},
	devTools: true,
});

export type RootState = ReturnType<typeof store.getState>; //для типизации селектора
export type AppDispatch = typeof store.dispatch; //для типизации диспатча

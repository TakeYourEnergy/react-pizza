import { configureStore } from '@reduxjs/toolkit';
import { productsListSlice } from './get-all-products-slice/getAllProductsSlice';
import { inputSlice } from './input-slice/inputSlice';
import { stateModalSlice } from './state-modal-slice/StateModalSlice';

export const store = configureStore({
	reducer: {
		productsListReducer: productsListSlice.reducer,
		inputReducer: inputSlice.reducer,
		stateModalReducer: stateModalSlice.reducer
	},
	devTools: true,
});

export type RootState = ReturnType<typeof store.getState>; //для типизации селектора
export type AppDispatch = typeof store.dispatch; //для типизации диспатча

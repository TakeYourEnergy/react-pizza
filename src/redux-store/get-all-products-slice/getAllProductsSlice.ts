import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { config, checkResponse } from '../../utils/api';

interface IProduct {
	brand: string;
	category: string;
	description: string;
	discountPercentage: string;
	id: number;
	images: Array<string>;
	price: number;
	rating: number;
	stock: number;
	thumbnail: string;
	title: string;
}

interface IData {
	limit: number;
	products: IProduct[];
	skip: number;
	total: number;
}

interface IState {
	entities: IData;
	loading: string;
	error: string;
}

export const productsList = createAsyncThunk('@@allProducts/get', async () => {
	const resp = await fetch(`${config.url}/products`);
	const data = checkResponse<IData>(resp);
	return data;
});

const initialState: IState = {
	entities: {
		limit: 0,
		products: [],
		skip: 0,
		total: 0,
	},
	loading: 'idle',
	error: '',
};

export const productsListSlice = createSlice({
	name: '@@getProducts',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(productsList.pending, (state, action) => {
				state.loading = 'loading';
				state.error = '';
			})
			.addCase(productsList.fulfilled, (state, action) => {
				state.entities.products = action.payload.products;
				state.loading = 'idle';
				state.error = '';
			})
			.addCase(productsList.rejected, (state, action) => {
				state.loading = 'idle';
				state.error = action.error.message as string;
			});
	},
});

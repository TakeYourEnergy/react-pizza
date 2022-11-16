import { useEffect, useState } from 'react';
import { productsList } from './redux-store/get-all-products-slice/getAllProductsSlice';
import { useAppDispatch } from './redux-store/redux-hooks';
import { Layout } from './components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { Products } from './pages/Products';

function App() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(productsList());
	}, [dispatch]);

	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Products />} />
				<Route path='cart' element={<div>cart</div>} />
			</Route>
		</Routes>
	);
}

export default App;

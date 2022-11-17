import { useEffect, useState } from 'react';
import { productsList } from './redux-store/get-all-products-slice/getAllProductsSlice';
import { useAppDispatch } from './redux-store/redux-hooks';
import { Layout } from './components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { Products } from './pages/Products';
import { Cart } from './pages/Cart';

function App() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(productsList());
	}, [dispatch]);

	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Products />} />
				<Route path='cart' element={<Cart />} />
				<Route path='*' element={<div>404</div>}/>
			</Route>
		</Routes>
	);
}

export default App;

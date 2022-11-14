import { useEffect, useState } from 'react';
import { Header } from './components/header/header';
import { Main } from './components/main/Main';
import { Navigation } from './components/navigation/Navigation';
import { productsList } from './redux-store/get-all-products-slice/getAllProductsSlice';
import { useAppDispatch } from './redux-store/redux-hooks';

function App() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(productsList());
	}, [dispatch]);

	return (
		<div className='App'>
			<Header />
			<Navigation />
			<Main />
		</div>
	);
}

export default App;

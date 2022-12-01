import React from 'react';
import styles from './Main.module.scss';
import { Card } from '../card/Card';
import { useAppSelector } from '../../redux-store/redux-hooks';
import { Spinner } from '../spinner/Spinner';
import { IProduct } from '../../redux-store/get-all-products-slice/getAllProductsSlice';

export const Main = () => {
	const { search } = useAppSelector(state => state.inputReducer);
	const { firstStateModal, textModal } = useAppSelector(state => ({
		firstStateModal: state.stateModalReducer.firstStateModal,
		textModal: state.stateModalReducer.textModal,
	}));
	const { products, loading } = useAppSelector(state => ({
		products: state.productsListReducer.entities.products.filter(obj => {
			return obj.title.toLowerCase().includes(search.toLowerCase());
		}),
		loading: state.productsListReducer.loading,
	}));
	//console.log(products);
	//console.log(textModal);
	const sortArrRaiting = (arr: IProduct[]) => {
		arr.sort((a, b) => {
			return b.rating - a.rating;
		});
	};

	const sortArrPrice = (arr: IProduct[]) => {
		arr.sort((a, b) => {
			return a.price - b.price;
		});
	};

	const sortArrAlpabet = (arr: IProduct[]) => {
		arr.sort((a, b) => {
			if (a.title < b.title) return -1;
			if (a.title > b.title) return 1;
			return 0;
		});
	};

	if (textModal === 'популярности') {
		sortArrRaiting(products);
	}
	if (textModal === 'цене') {
		sortArrPrice(products);
	}
	if (textModal === 'алфавиту') {
		sortArrAlpabet(products);
	}

	return (
		<main className={styles.main}>
			<h1 className={styles.title}>Все товары</h1>
			{loading === 'loading' ? (
				<Spinner />
			) : (
				<div className={styles.cards}>
					{products &&
						products.map(item => {
							return (
								<Card key={item.id} imageUrl={item.images} title={item.title} price={item.price} />
							);
						})}
				</div>
			)}
		</main>
	);
};

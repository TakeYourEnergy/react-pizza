import React from 'react';
import styles from './Main.module.scss';
import { Card } from '../card/Card';
import { useAppSelector } from '../../redux-store/redux-hooks';
import { Spinner } from '../spinner/Spinner';

export const Main = () => {
	const { search } = useAppSelector(state => state.inputReducer);
	const { products, loading } = useAppSelector(state => ({
		products: state.productsListReducer.entities.products.filter(obj =>
			obj.title.toLowerCase().includes(search.toLowerCase()),
		),
		loading: state.productsListReducer.loading,
	}));

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

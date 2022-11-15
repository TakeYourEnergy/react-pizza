import React from 'react';
import styles from './Main.module.scss';
import { Card } from '../card/Card';
import { useAppSelector } from '../../redux-store/redux-hooks';
import { Spinner } from '../spinner/Spinner';

export const Main = () => {
	const { entities, loading } = useAppSelector(state => state.productsListReducer);

	return (
		<main className={styles.main}>
			<h1 className={styles.title}>Все товары</h1>
			{loading === 'loading' ? (
				<Spinner />
			) : (
				<div className={styles.cards}>
					{entities &&
						entities.products.map(item => {
							return (
								<Card key={item.id} imageUrl={item.images} title={item.title} price={item.price} />
							);
						})}
				</div>
			)}
		</main>
	);
};

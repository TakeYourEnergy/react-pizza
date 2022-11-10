import React from 'react';
import styles from './Main.module.scss';
import pizza from '../../utils/pizza.json';
import { Card } from '../card/Card';
console.log(pizza);

export const Main = () => {
	return (
		<main className={styles.main}>
			<h1 className={styles.title}>Все пиццы</h1>
			<div className={styles.cards}>
				{pizza.map(item => {
					return (
						<Card key={item.id} imageUrl={item.imageUrl} title={item.title} price={item.price} />
					);
				})}
			</div>
		</main>
	);
};

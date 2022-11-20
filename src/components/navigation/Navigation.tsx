import React from 'react';
import styles from './Navigation.module.scss';
import { nanoid } from '@reduxjs/toolkit';
import { Sort } from '../sort/Sort';

const typesProducts = ['Все', 'Мясные', 'Вегетарианская'];

export const Navigation = () => {
	return (
		<div className={styles.boxNav}>
			<ul className={styles.boxNavButtons}>
				{typesProducts.map(item => {
					return (
						<li key={nanoid()}>
							<button type='button' className={styles.navButton}>
								{item}
							</button>
						</li>
					);
				})}
			</ul>
			<Sort />
		</div>
	);
};

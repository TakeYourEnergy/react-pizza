import React from 'react';
import styles from './Navigation.module.scss';
import { nanoid } from '@reduxjs/toolkit';

const typesPizza = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

export const Navigation = () => {
	return (
		<div className={styles.boxNav}>
			<ul className={styles.boxNavButtons}>
				{typesPizza.map(item => {
					return (
						<li key={nanoid()}>
							<button type='button' className={styles.navButton}>
								{item}
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

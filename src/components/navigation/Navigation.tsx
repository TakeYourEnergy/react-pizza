import React from 'react';
import styles from './Navigation.module.scss';

export const Navigation = () => {
	return (
		<div className={styles.boxNav}>
			<div className={styles.boxNavButtons}>
				<button type='button' className={styles.navButton}>
					Все
				</button>
				<button type='button' className={styles.navButton}>
					Мясные
				</button>
				<button type='button' className={styles.navButton}>
					Вегетарианская
				</button>
				<button type='button' className={styles.navButton}>
					Гриль
				</button>
				<button type='button' className={styles.navButton}>
					Острые
				</button>
				<button type='button' className={styles.navButton}>
					Закрытые
				</button>
			</div>
		</div>
	);
};

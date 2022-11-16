import React, { FC } from 'react';
import styles from './HeaderTitle.module.scss';
import pizza from '../../assets/pizza.svg';

interface IHeaderTitle {
	text: string;
}

export const HeaderTitle: FC<IHeaderTitle> = ({ text }) => {
	return (
		<>
			<div className={styles.logo}>
				<img className={styles.logoImg} src={pizza} alt='pizza' />
				<div className={styles.logoText}>
					<p className={styles.logoTitle}>REACT SHOP</p>
					<p className={styles.logoSubtitle}>{text}</p>
				</div>
			</div>
		</>
	);
};

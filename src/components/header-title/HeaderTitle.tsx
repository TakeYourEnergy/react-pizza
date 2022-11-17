import React, { FC } from 'react';
import styles from './HeaderTitle.module.scss';
import shop from '../../assets/shop.svg';
import { Link } from 'react-router-dom';

interface IHeaderTitle {
	text: string;
}

export const HeaderTitle: FC<IHeaderTitle> = ({ text }) => {
	return (
		<>
			<div className={styles.logo}>
				<Link to='/'>
					<img className={styles.logoImg} src={shop} alt='shop' />
				</Link>
				<div className={styles.logoText}>
					<p className={styles.logoTitle}>REACT SHOP</p>
					<p className={styles.logoSubtitle}>{text}</p>
				</div>
			</div>
		</>
	);
};

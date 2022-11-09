import React from 'react';
import { Button } from '../button/Button';
import styles from './header.module.scss';
import { BiRuble } from 'react-icons/bi';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { Input } from '../input/Input';

export const Header = () => {
	const handleInputClick = () => {
		// console.log('clear')
	};

	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<img className={styles.logoImg} src='' alt='' />
				<div className={styles.logoText}>
					<p className={styles.logoTitle}>REACT PIZZA</p>
					<p className={styles.logoSubtitle}>самая вкусная пицца во вселенной</p>
				</div>
			</div>
			<Input placeholder='Поиск пиццы...' type='text' onClick={handleInputClick} />
			<Button disabled={false} type='button' size='middle'>
				<div className={styles.boxPrice}>
					<p className={styles.price}>520</p>
					<BiRuble className={styles.rub} />
					<div className={styles.emptyBar}></div>
					<MdOutlineShoppingCart className={styles.shopCart} />
					<p className={styles.count}>3</p>
				</div>
			</Button>
		</header>
	);
};

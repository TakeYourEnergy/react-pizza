import React from 'react';
import { Button } from '../button/Button';
import styles from './header.module.scss';
import { BiRuble } from 'react-icons/bi';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { Input } from '../input/Input';
import pizza from '../../assets/pizza.svg';
import { useAppDispatch } from '../../redux-store/redux-hooks';
import { clearInput } from '../../redux-store/input-slice/inputSlice';
import { HeaderTitle } from '../header-title/HeaderTitle';

export const Header = () => {
	const dispatch = useAppDispatch();

	const handleInputClick = () => {
		dispatch(clearInput());
	};

	return (
		<header className={styles.header}>
			<HeaderTitle text='самый лучший магазин во вселенной' />
			<Input placeholder='Поиск товара...' type='text' onClick={handleInputClick} />
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

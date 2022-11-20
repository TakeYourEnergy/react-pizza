import React from 'react';
import { Button } from '../components/button/Button';
import { HeaderTitle } from '../components/header-title/HeaderTitle';
import { Header } from '../components/header/header';
import { Input } from '../components/input/Input';
import { Main } from '../components/main/Main';
import { Navigation } from '../components/navigation/Navigation';
import { BiRuble } from 'react-icons/bi';
import { MdOutlineShoppingCart } from 'react-icons/md';
import styles from './products.module.scss'
import { useAppDispatch } from '../redux-store/redux-hooks';
import { useNavigate } from 'react-router';
import { clearInput } from '../redux-store/input-slice/inputSlice';

export const Products = () => {
		const dispatch = useAppDispatch();
		const navigate = useNavigate();

		const handleInputClick = () => {
			dispatch(clearInput());
		};

		const handleClick = () => {
			navigate('/cart');
		};

	return (
		<div style={{position: 'relative'}}>
			<Header>
				<HeaderTitle text='самый лучший магазин во вселенной' />
				<Input placeholder='Поиск товара...' type='text' onClick={handleInputClick} />
				<Button disabled={false} type='button' size='middle' onClick={handleClick}>
					<div className={styles.boxPrice}>
						<p className={styles.price}>0</p>
						<BiRuble className={styles.rub} />
						<div className={styles.emptyBar}></div>
						<MdOutlineShoppingCart className={styles.shopCart} />
						<p className={styles.count}>0</p>
					</div>
				</Button>
			</Header>
			<Navigation />
			<Main />
		</div>
	);
};

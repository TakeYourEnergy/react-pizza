import React, { FC, useState } from 'react';
import styles from './Input.module.scss';
import { BiSearchAlt } from 'react-icons/bi';
import { useAppDispatch, useAppSelector } from '../../redux-store/redux-hooks';
import { setInput } from '../../redux-store/input-slice/inputSlice';
import mark from '../../assets/mark.svg';

interface IInput {
	placeholder: string;
	type: string;
	onClick?: () => void;
}

export const Input: FC<IInput> = ({ placeholder, type, onClick }) => {
	const inputValue = useAppSelector(state => state.inputReducer.search);
	const dispatch = useAppDispatch();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setInput(e.target.value));
	};

	return (
		<div className={styles.boxInput}>
			<BiSearchAlt className={styles.inputIcons} />
			<input
				value={inputValue}
				onChange={handleChange}
				className={styles.input}
				placeholder={placeholder}
				type={type}
			/>
			<button
				style={{ backgroundImage: `url(${mark})` }}
				onClick={onClick}
				className={styles.inputMark}
			></button>
		</div>
	);
};

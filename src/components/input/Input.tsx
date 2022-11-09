import React, { FC } from 'react';
import styles from './Input.module.scss';
import { BiSearchAlt } from 'react-icons/bi';
import { HiOutlineXMark } from 'react-icons/hi2';

interface IInput {
	placeholder: string;
	type: string;
	onClick?: () => void;
}

export const Input: FC<IInput> = ({ placeholder, type, onClick }) => {
	return (
		<div className={styles.boxInput}>
			<BiSearchAlt className={styles.inputIcons} />
			<input className={styles.input} placeholder={placeholder} type={type} />
			<HiOutlineXMark onClick={onClick} className={styles.inputMark} />
		</div>
	);
};

import React, { FC, useState } from 'react';
import styles from './Input.module.scss';
import { BiSearchAlt } from 'react-icons/bi';
import { HiOutlineXMark } from 'react-icons/hi2';

interface IInput {
	placeholder: string;
	type: string;
	onClick?: () => void;
}

export const Input: FC<IInput> = ({ placeholder, type, onClick }) => {
	const [state, setState] = useState('');

	return (
		<div className={styles.boxInput}>
			<BiSearchAlt className={styles.inputIcons} />
			<input
				value={state}
				onChange={e => setState(e.target.value)}
				className={styles.input}
				placeholder={placeholder}
				type={type}
			/>
			<HiOutlineXMark onClick={onClick} className={styles.inputMark} />
		</div>
	);
};

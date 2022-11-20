import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from 'react-icons/io';
import { useAppDispatch, useAppSelector } from '../../redux-store/redux-hooks';
import { setStateModal, setTextModal } from '../../redux-store/state-modal-slice/StateModalSlice';
import { Modal } from '../modal/Modal';
import styles from './sort.module.scss';

export const Sort = () => {
	const { firstStateModal, textModal } = useAppSelector(state => ({
		firstStateModal: state.stateModalReducer.firstStateModal,
		textModal: state.stateModalReducer.textModal
	}));
	const dispatch = useAppDispatch();

	const arrSort = ['популярности', 'цене', 'алфавиту'];

	const handleClick = () => {
		dispatch(setStateModal(true));
	};

	const handleClickOnItem = (e: React.MouseEvent<HTMLLIElement>) => {
		dispatch(setTextModal(e.currentTarget.textContent));
		dispatch(setStateModal(false));
	};

	return (
		<div className={styles.sort}>
			{firstStateModal === false ? (
				<IoMdArrowDropdownCircle className={styles.icon} />
			) : (
				<IoMdArrowDropupCircle className={styles.icon} />
			)}
			<p className={styles.text}>Сортировка по:</p>
			<button onClick={handleClick} className={styles.btnType}>
				{textModal && textModal}
			</button>
			{firstStateModal === false ? null : (
				<Modal>
					<ul className={styles.modal}>
						{arrSort.map(item => {
							return (
								<li
									value={item}
									onClick={handleClickOnItem}
									className={styles.itemModal}
									key={nanoid()}
								>
									{item}
								</li>
							);
						})}
					</ul>
				</Modal>
			)}
		</div>
	);
};

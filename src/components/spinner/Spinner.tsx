import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import styles from './Spinner.module.scss';

export const Spinner = () => {
	return (
		<div className={styles.spinner}>
			<InfinitySpin width='200' color='#fe5f1e' />
		</div>
	);
};

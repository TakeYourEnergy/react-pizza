import React, { FC } from 'react';
import styles from './header.module.scss';

interface IHeader {
	children: React.ReactNode;
}

export const Header: FC<IHeader> = ({ children }) => {
	return <header className={styles.header}>{children}</header>;
};

import React, { FC } from 'react'
import styles from './Button.module.scss'

interface IButton {
	children: React.ReactNode
	size: 'large' | 'small' | 'middle'
	type: 'button' | 'submit' | 'reset'
	disabled?: boolean
	onClick?: () => void
}

export const Button: FC<IButton> = ({ children, size, type, disabled, onClick }) => {
	return (
		<button
			disabled={disabled}
			type={type}
			className={`${styles.button} ${styles[size]}`}
			onClick={onClick}
		>
			{children}
		</button>
	)
}

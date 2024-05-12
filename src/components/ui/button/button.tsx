// Button.tsx
import React from 'react'
import styles from './style.module.scss'

interface IButtonProps {
	children?: React.ReactNode
	props?: any
	onClick?: any
}

const MyButton: React.FC<IButtonProps> = ({ onClick, children, ...props }) => {
	return (
		<button className={styles.button} {...props} onClick={onClick}>
			{children}
		</button>
	)
}

export default MyButton

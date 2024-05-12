import React, { FC } from 'react'
import styles from './style.module.scss'

interface HeaderProps {
	title: string
}

const header: FC<HeaderProps> = ({ title }) => {
	return (
		<>
			<h3 className={styles.title}>{title}</h3>
		</>
	)
}

export default header

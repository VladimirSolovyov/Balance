import React, { FC, useState } from 'react'
import styles from './style.module.scss'
import MyButton from '../ui/button/button'

interface BalanceProps {
	balance: number
}

const Balance: FC<BalanceProps> = ({ balance }) => {
	const [saldo, setSaldo] = useState(balance)
	const [sum, setSum] = useState(0)

	const expenses = () => {
		if (saldo < sum) {
			alert('Текущая транзакция не возможно. Баланс не достаточен!')
			return
		}

		setSaldo(saldo - sum)
		clearGetSum()
	}

	const income = () => {
		setSaldo(saldo + sum)
		clearGetSum()
	}

	const clearGetSum = () => {
		setSum(0)
	}

	const getSum = (event: React.ChangeEvent<HTMLInputElement>) => {
		let currentSum: number = Number(event.currentTarget.value)
		setSum(currentSum)
	}

	return (
		<div>
			<span>Текущее количество денег:</span>
			<span>{saldo}</span>
			<div className={styles.block}>
				<input
					className={styles.sumInput}
					type='number'
					maxLength={10}
					value={sum}
					onChange={e => {
						getSum(e)
					}}
				/>
				<MyButton onClick={expenses}>Расходы</MyButton>
				<MyButton onClick={income}>Доходы</MyButton>
			</div>
		</div>
	)
}

export default Balance

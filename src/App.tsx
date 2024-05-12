import React from 'react'
import './App.css'
import Header from './components/ui/header/header'
import Balance from './components/balance/balance'

function App() {
	return (
		<div className='App'>
			<Header title='Домашняя бухгалтерия' />
			<Balance balance={1000} />
		</div>
	)
}

export default App

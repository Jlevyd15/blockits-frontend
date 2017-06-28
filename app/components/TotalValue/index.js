import React from 'react'
import H2 from '../H2'
import P from '../P'

const TotalValue = ({ data }) => {

	const getAccountValue = () => {
		// console.log(data.)
		// the async nature of our api call means that the accounts data may not be available on mounting of this comp
		// if it isn't we shouldn't try to reduce an undefined array
		const totalBalance = data.accountInfo ? 
			data.accountInfo.reduce((prev, curr) => ({balance: parseInt(prev.balance, 10) + parseInt(curr.balance, 10)})) : 0
		return totalBalance.balance
	}

	const getDepositValue = () => {
		const totalBalance = data.deposits ? 
			data.deposits.reduce((prev, curr) => ({amount: parseInt(prev.amount, 10) + parseInt(curr.amount, 10)})) : 0
		return totalBalance.amount
	}

	return (
		<div>
			<H2>Account Value</H2>
			<P>{getAccountValue()}</P>
			<H2>Fiat Value</H2>
			<P>{getDepositValue()}</P>
			<H2>% Return</H2>
			<P>{((getAccountValue() - getDepositValue()) / getDepositValue()) * 100}%</P>
		</div>
	)
}

TotalValue.propTypes = {
	gdax: React.PropTypes.array,
	heading: React.PropTypes.string
}

export default TotalValue
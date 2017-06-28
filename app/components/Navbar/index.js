import React from 'react';
import { Link } from 'react-router'

export default class Navbar extends React.PureComponent {
	render() {
		return (
			<ul>
				<li><Link to='/'>Home</Link></li>
				<li><Link to='/account'>Account Info</Link></li>
				<li><Link>Fills</Link></li>
				<li><Link>Orders</Link></li>
			</ul>
		)
	}
}
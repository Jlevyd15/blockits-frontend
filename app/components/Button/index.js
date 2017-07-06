import React from 'react';
import ButtonStyled from './ButtonStyled';


const Button = ({ btnText, callback }) => {
	const handleButtonCallback = () => {
		// console.log('called button callback')
		return callback()
	}


	return (
		<ButtonStyled 
			onClick={() => handleButtonCallback()}
		>
			{btnText}
		</ButtonStyled>
	)
}

Button.propTypes = {
	btnText: React.PropTypes.string,
	callback: React.PropTypes.func
}

export default Button;
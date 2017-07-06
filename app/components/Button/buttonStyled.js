import styled from 'styled-components';

import { constants } from '../../utils/constants/globalStyles';

const ButtonStyled = styled.button`
	background: none;
	border: 2px solid ${constants.colors.goldAccent};
	border-radius: 5px;
	color: black;
	cursor: pointer;
	font-size: ${constants.fontStyles.buttonText};
	font-weight: 700;
	height: 50px;
	width: 100px;

	@media (max-width: 500px) {
    	width: 100%
  	}
`;

export default ButtonStyled;

/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

// components
import Button from '../../components/Button';
import ButtonGroup from '../../components/ButtonGroup';
import Wrapper from '../../components/Wrapper';
import InputGroup from '../../components/InputGroup';
import Input from '../../components/Input';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
  	const routeToAccountPage = () => {
  		const { keyValue, secretValue, passphrase } = this.props
  		this.props.makeApiCall(keyValue, secretValue, passphrase);
  		this.props.router.push('/account');
  	}
  	return	(
		<Wrapper>
			<h1><FormattedMessage {...messages.header} /></h1>
			<p><FormattedMessage {...messages.hello} /></p>
			<p><FormattedMessage {...messages.learn} /></p>
			<InputGroup>
				<Input placeholder={'API Key'} name={'key'} fieldId={'key'} />
				<Input placeholder={'API Secret'} name={'secret'} fieldId={'secret'} />
				<Input placeholder={'Passphrase'} name={'Passphrase'} fieldId={'passphrase'} />
			</InputGroup>
			<ButtonGroup><Button btnText={'Login'} callback={routeToAccountPage} /></ButtonGroup>
		</Wrapper>
	);
  }
}

const mapStateToProps = (state, props) => ({
  keyValue: state.getIn(['fields', 'key', 'value']),
  secretValue: state.getIn(['fields', 'secret', 'value']),
  passphrase: state.getIn(['fields', 'passphrase', 'value']),
});

const mapDispatchToProps = dispatch => ({
  makeApiCall: (keyValue, secretValue, passphrase) =>
  	dispatch({type: 'GDAX_FETCH_REQUESTED', payload: {keyValue, secretValue, passphrase}}),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HomePage));

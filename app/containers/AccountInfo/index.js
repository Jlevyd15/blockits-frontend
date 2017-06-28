/*
 * AccountInfo
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Navbar from '../../components/Navbar';	
import TotalValue from '../../components/TotalValue';
import Button from '../../components/Button';
import Wrapper from '../../components/Wrapper';

class AccountInfo extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
  	return	(
		<Wrapper>
			<TotalValue data={this.props.gdax.toJS()} />
		</Wrapper>
	);
  }
}

const mapStateToProps = (state, props) => ({
	gdax: state.get('gdax')
});

export default connect(mapStateToProps, null)(AccountInfo);

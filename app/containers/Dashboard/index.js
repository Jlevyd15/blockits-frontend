/*
 *
 * Dashboard
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectDashboard from './selectors';

import messages from './messages';

// components
import InputGroup from '../../components/InputGroup';
import Input from '../../components/Input';
import Navbar from '../../components/Navbar'; 
import TotalValue from '../../components/TotalValue';
import Wrapper from '../../components/Wrapper';
import Button from '../../components/Button';
import ButtonGroup from '../../components/ButtonGroup';

export class Dashboard extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      showLoginForm: true
    }
  }

  render() {
    const routeToAccountPage = () => {
      const { keyValue, secretValue, passphrase } = this.props
      this.props.makeApiCall(keyValue, secretValue, passphrase);
      // this.props.router.push('/dashboard');
      console.log('button callback from dashboard')
       this.setState({
        showLoginForm: false
      })
    }

    const showHideLoginForm = () => {
      this.setState({
        showLoginForm: this.state.showLoginForm ? false : true
      })
    }
    return (
      <div>
        <Helmet
          title="Dashboard"
          meta={[
            { name: 'description', content: 'Description of Dashboard' },
          ]}
        />
        <Wrapper>
        <span>Toggle login form</span>
        <ButtonGroup><Button btnText={this.state.showLoginForm ? '-' : '+'} callback={showHideLoginForm} /></ButtonGroup>
        {this.state.showLoginForm ? 
          <div>
          <h1><FormattedMessage {...messages.header} /></h1>
          <p><FormattedMessage {...messages.hello} /></p>
          <p><FormattedMessage {...messages.learn} /></p>
          <InputGroup>
            <Input placeholder={'API Key'} name={'key'} fieldId={'key'} />
            <Input placeholder={'API Secret'} name={'secret'} fieldId={'secret'} />
            <Input placeholder={'Passphrase'} name={'Passphrase'} fieldId={'passphrase'} />
          </InputGroup>
          <ButtonGroup><Button btnText={'Login'} callback={routeToAccountPage} /></ButtonGroup>
          </div>
          : null
        }
          {this.props.Dashboard.accountInfo ? <TotalValue data={this.props.Dashboard} /> : null}
        </Wrapper>
      </div>
    );
  }
}

Dashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Dashboard: makeSelectDashboard(),
});

// const mapStateToProps = (state, props) => ({
//   dashboard: state.get('dashboard')
// });

const mapDispatchToProps = dispatch => ({
  makeApiCall: (keyValue, secretValue, passphrase) =>
    dispatch({type: 'GDAX_FETCH_REQUESTED', payload: {keyValue, secretValue, passphrase}}),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

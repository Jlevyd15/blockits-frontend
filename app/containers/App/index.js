/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Navbar from '../../components/Navbar';
import { connect } from 'react-redux'

// util
import * as Api from '../../utils/Api';

class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    // this.props.makeApiCall();
  }

  static propTypes = {
    children: React.PropTypes.node,
    makeApiCall: React.PropTypes.func,
  };

  render() {
    return (
      <div>
        {/*<Navbar />*/}
        {React.Children.toArray(this.props.children)}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  makeApiCall: () => dispatch({type: 'GDAX_FETCH_REQUESTED', payload: {userId: 123}}),
  // makeApiCall: () => dispatch({ type: 'GDAX_DATA', payload: data }),
});

export default connect(null, mapDispatchToProps)(App);


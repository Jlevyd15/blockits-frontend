/*
 *
 * Dashboard reducer
 *
 */

import { fromJS, Map } from 'immutable';

import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({});

// function dashboardReducer(state = initialState, action) {
//   switch (action.type) {
//     case DEFAULT_ACTION:
//       return state;
//     default:
//       return state;
//   }
// }


function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case 'GDAX_FETCH_SUCCEEDED': {
    	console.log('in dashbaord reducer')
      return Map(fromJS(action.payload))
    }
    default:
      return state;
  }
}

// export default gdaxApiReducer;

export default dashboardReducer;

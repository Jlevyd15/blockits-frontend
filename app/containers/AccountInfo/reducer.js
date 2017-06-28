import Immutable from 'immutable';

function gdaxApiReducer(state = Immutable.Map(), action) {
  switch (action.type) {
    case 'GDAX_FETCH_SUCCEEDED':
      return Immutable.Map(Immutable.fromJS(action.payload))
    default:
      return state;
  }
}

export default gdaxApiReducer;
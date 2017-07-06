import { take, call, put, takeLatest, cancel, fork } from 'redux-saga/effects';
import * as Api from '../../utils/Api';
import { LOCATION_CHANGE } from 'react-router-redux';
import request from 'utils/request';

// responds to GDAX fetch requests
export function* fetchGdaxData(action) {
  const requestURL = `/data/login`;
  console.log('fetchGdaxData called')
  try {
   	// var myRequest = new Request(requestURL, {method: 'POST', body: '{"foo":"bar"}'});
    const { data } = yield call(Api.fetchGdaxData);
    // const { data } = yield call(request, requestURL, {method: 'POST'});
    yield put({ type: 'GDAX_FETCH_SUCCEEDED', payload: data });
  } catch (e) {
  	yield put({ type: 'GDAX_FETCH_FAILED', message: e.message });
  } finally {
  	console.log('fetchGdaxData finally block')
  }
}

// Individual exports for testing
export function* defaultSaga() {
  // See example in containers/HomePage/sagas.js
	console.log('defaultSaga called')
	const gdaxDataFetcher = yield takeLatest('GDAX_FETCH_REQUESTED', fetchGdaxData);
	
    yield take(LOCATION_CHANGE);
	yield cancel(gdaxDataFetcher);
}

// All sagas to be loaded
export default [
  defaultSaga,
];

import { call, put, takeLatest, cancel, take } from 'redux-saga/effects';
import * as Api from '../../utils/Api';
import { LOCATION_CHANGE } from 'react-router-redux';
import request from 'utils/request';


// responds to GDAX fetch requests
function* fetchGdaxData(action) {
  const requestURL = `/data/login`;
  try {
    const { data } = yield call(Api.fetchGdaxData);
    // const { data } = yield call(request, requestURL);
    yield put({ type: 'GDAX_FETCH_SUCCEEDED', payload: data });
  } catch (e) {
    yield put({ type: 'GDAX_FETCH_FAILED', message: e.message });
  }
}

function* mySaga() {
	const gdaxDataFetcher = yield takeLatest('GDAX_FETCH_REQUESTED', fetchGdaxData);
	
	yield take(LOCATION_CHANGE);
	yield cancel(gdaxDataFetcher);
}



// Your sagas for this container
export default [
  mySaga,
];
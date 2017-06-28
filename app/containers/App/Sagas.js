import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as Api from '../../utils/Api';

// Your sagas for this container
export default [
  mySaga,
];

// Individual exports for testing
function* fetchGdaxData(action) {
  try {
    const { data } = yield call(Api.fetchGdaxData);
    yield put({ type: 'GDAX_FETCH_SUCCEEDED', payload: data });
  } catch (e) {
    yield put({ type: 'GDAX_FETCH_FAILED', message: e.message });
  }
}

function* mySaga() {
  yield takeLatest('GDAX_FETCH_REQUESTED', fetchGdaxData);
}

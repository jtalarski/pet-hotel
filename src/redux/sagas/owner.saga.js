import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

// fetches owners
function* fetchOwnerSaga(action) {
  let response = yield axios({
    method: 'GET',
    url: '/api/owner',
  });
  yield put({
    type: 'SET_OWNER',
    payload: response.data,
  });
}

// deletes owner then fetches all owners
function* deleteOwnerSaga(action) {
  console.log('in deleteOwnerSaga', action.payload);
  yield axios({
    method: 'DELETE',
    url: action.url,
  });
  yield put({
    type: 'FETCH_OWNER',
    payload: action.payload
  });
}




function* ownerSaga() {
  yield takeLatest('DELETE_OWNER', deleteOwnerSaga);
  yield takeLatest('FETCH_OWNER', fetchOwnerSaga);
}

export default ownerSaga;
import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

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
  })
}




function* ownerSaga() {
  yield takeLatest('DELETE_OWNER', deleteOwnerSaga);
}

export default ownerSaga;
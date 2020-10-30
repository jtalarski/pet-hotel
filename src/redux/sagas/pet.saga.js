import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchPets(action) {

  let response = yield axios({
    method: 'GET',
    url: `http://localhost:5000/api/pet/`,
  });
  console.log('response', response.data);
  yield put({
    type: 'SET_PETS',
    payload: response.data,
  });
}

function* addPet(action) {
  console.log('payload in add pet', action.payload);
  let response = yield axios({
    method: 'POST',
    url: `/api/pet`,
    data: action.payload
  });
  console.log('response', response.data);
}

function* deletePet(action) {
  console.log('payload in delete pet', action.payload);
  let response = yield axios({
    method: 'DELETE',
    url: `/api/pet/${action.payload}`,
    payload: action.payload
  })
  console.log('response in delete', response.data);
}

function* petSaga() {
  yield takeLatest('FETCH_PETS', fetchPets);
  yield takeLatest('ADD_PET', addPet);
  yield takeLatest('DELETE_PET', deletePet);
}

export default petSaga;
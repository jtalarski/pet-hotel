import { all } from 'redux-saga/effects';
//import mySaga from './mySaga.saga';
import ownerSaga from './owner.saga';
import petSaga from './pet.saga';

export default function* rootSaga() {
  yield all([
    // list of sagas goes here
    // example: mySaga(),
    ownerSaga(),
    petSaga(),
  ]);
}

import { all } from 'redux-saga/effects';
//import mySaga from './mySaga.saga';

export default function* rootSaga() {
  yield all([
    // list of sagas goes here
    // example: mySaga(),
  ]);
}

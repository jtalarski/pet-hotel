import { combineReducers } from 'redux';
// import myReducer from './myReducer.reducer';
import owner, { saveOwnerReducer } from './owner.reducer';

const rootReducer = combineReducers({
  // list of reducers goes here
  // example: myReducer,
  owner,
  saveOwnerReducer,
});

export default rootReducer;
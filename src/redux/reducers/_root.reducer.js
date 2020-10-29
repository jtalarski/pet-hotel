import { combineReducers } from 'redux';
// import myReducer from './myReducer.reducer';
import owner, { saveOwnerReducer } from './owner.reducer';
import pets from './pet.reducer';

const rootReducer = combineReducers({
  // list of reducers goes here
  // example: myReducer,
  owner,
  saveOwnerReducer,
  pets,
});

export default rootReducer;
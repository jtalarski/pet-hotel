const setOwnerReducer = (state = [], action) => {
  console.log('in setOwnerReducer', action);
  switch (action.type) {
    case 'SET_OWNER':
      return action.payload;
    default:
      return state;
  }
}

export const saveOwnerReducer = (state = {}, action) => {
  console.log('in saveOwnerReducer', action);
  switch (action.type) {
    case 'EDIT_OWNER_FOR_UPDATE':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default setOwnerReducer;
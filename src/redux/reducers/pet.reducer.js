const pets = (state = [], action) => {
    switch (action.type) {
        case "SET_PETS":
          return action.payload;
          case "ADD_PET":
            return state;
            case "DELETE_PET":
              return state;
        default:
          return state;
      }
  };
  
  export default pets;
export const initialState = {
    email: '',
    password: ''
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_FIELD':
        return {
          ...state,
          [action.fieldName]: action.fieldValue,
        };
      case 'RESET_FIELDS':
        return initialState;
      default:
        return state;
    }
  };
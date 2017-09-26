export default (state = {
  initialized: false,
  user: undefined,
}, action) => {
  switch (action.type) {
    case 'INITIALIZE':
      return {
        initialized: true,
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        ...action.user,
      };
    case 'LOGIN_FAIL':
      return {
        ...state,
      };
    case 'LOGOUT': {
      return {
        ...state,
        user: undefined,
      }
    }
    default:
      return state;
  }
};

export default (state = {
  credential: undefined,
  user: undefined,
  loggedIn: false,
}, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        loggedIn: true,
        ...action.user,
      };
    case 'LOGIN_FAIL':
      return {
        loggedIn: false,
      };
    default:
      return state;
  }
};
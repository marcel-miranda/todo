import { signIn } from '../lib/firebase';

export const logInSuccess = user => {
  return {
    type: 'LOGIN_SUCCESS',
    user,
  }
}

export const logInFail = error => {
  return {
    type: 'LOGIN_FAIL',
    error,
  }
}

export const logIn = () => {
  return dispatch => {
    return signIn()
      // Didn't use .catch, see:
      // https://github.com/facebook/react/issues/6895
      .then(
        user => dispatch(logInSuccess(user)),
        error => dispatch(logInFail(error))
      )
      // try {
      //   const { credential, user } = await signIn();
      //   dispatch(logInSuccess({ credential, user }));
      // } catch (error) {
      //   // error is in the shape of { code, credential, email, message }
      //   dispatch(logInFail({ error }));
      // }
  }
}
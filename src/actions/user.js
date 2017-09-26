import firebase, { signIn } from '../lib/firebase';
const provider = new firebase.auth.GoogleAuthProvider();
const timeouts = {};
const alert = new Audio('/audio/glass.mp3');

export const subscribeToUserTodos = user => {
  if (!user) {
    return;
  }

  return dispatch => {
    const ref = firebase
      .database()
      .ref(`/users/${user.uid}/todos`)
    ;

    ref.on('child_added', todoSnapshot => {
      const todo = todoSnapshot.val();
      const now = new Date(new Date().toJSON().substr(0, 16)).getTime();
      const timeoutMs = (todo.expiresAt - now);
      if (timeoutMs > 0) {
        timeouts[todoSnapshot.key] = setTimeout(() => {
          alert.play();
          dispatch({
            type: 'EXPIRE_TODO',
            key: todoSnapshot.key,
          })
        }, timeoutMs);
      }

      dispatch({
        type: 'ADD_TODO',
        key: todoSnapshot.key,
        todo,
      })
    });

    ref.on('child_removed', todoSnapshot => {
      clearTimeout(timeouts[todoSnapshot.key]);
      dispatch({
        type: 'REMOVE_TODO',
        key: todoSnapshot.key,
      })
    });

    ref.on('child_changed', todoSnapshot => {
      dispatch({
        type: 'CHANGE_TODO',
        key: todoSnapshot.key,
        todo: todoSnapshot.val(),
      })
    })

  }
}

export const logInSuccess = user => {
  return dispatch => {
    subscribeToUserTodos(user)(dispatch);
    return dispatch({
      type: 'LOGIN_SUCCESS',
      user,
    });
  }
}

export const logOutSuccess = () => {
  return {
    type: 'LOGOUT',
  }
}

export const initialize = () => {
  return dispatch => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(logInSuccess(user));
      } else {
        dispatch(logOutSuccess());
      }
    });

    return dispatch({
      type: 'INITIALIZE',
    });
  }
}

export const logInFail = error => {
  return {
    type: 'LOGIN_FAIL',
    error,
  }
}

export const logOut = () => {
  return dispatch => {
    firebase.auth().signOut().then(() => {
      dispatch({
        type: 'LOGOUT',
      });
    });
  }
}

export const logIn = () => {
  return dispatch => firebase.auth().signInWithPopup(provider);
}

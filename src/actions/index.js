import firebase from '../lib/firebase';
import sortTodos from '../lib/sortTodos';

const createTodo = (text, index, expiresAt) => {
  return {
    text,
    completed: false,
    expiresAt: new Date(expiresAt).getTime(),
    index,
  }
}

export const addTodo = (text, expiresAt) => {
  return (dispatch, getState) => {
    const { user, todos } = getState();
    const index = Object.keys(todos).length;
    const todo = createTodo(text, index, expiresAt);
    firebase.database()
      .ref(`/users/${user.uid}/todos`)
      .push(todo);
    ;
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter,
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id,
  }
}

export const ascendTodo = key => {
  return (dispatch, getState) => {
    const { user, todos } = getState();
    const sortedTodos = sortTodos(todos);
    const indexOfTarget = sortedTodos.findIndex(todo => todo.key === key);
    if (indexOfTarget < 1) {
      // Ignore if ascended item is already the first
      return;
    }
    const previousTodo = sortedTodos[indexOfTarget - 1];
    const updates = {
      [`/users/${user.uid}/todos/${key}/index`]: indexOfTarget - 1,
      [`/users/${user.uid}/todos/${previousTodo.key}/index`]: indexOfTarget,
    }
    firebase.database().ref().update(updates);

  }
}

export const removeTodo = key => {
  return (dispatch, getState) => {
    const { user } = getState();

    firebase.database()
      .ref(`/users/${user.uid}/todos/${key}`)
      .remove()
    ;
  }
}

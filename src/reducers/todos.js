export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_TODOS':
      return action.todos;
    case 'ADD_TODO':
      return {
        ...state,
        [action.key]: action.todo,
      };
    case 'CHANGE_TODO':
      return {
        ...state,
        [action.key]: action.todo,
      }
    case 'EXPIRE_TODO':
      return {
        ...state,
        [action.key]: {
          ...state[action.key],
          expired: true,
        }
      }
    case 'REMOVE_TODO':
      const newState = {
        ...state,
      };
      delete newState[action.key];
      return newState;
    default:
      return state;
  }
};

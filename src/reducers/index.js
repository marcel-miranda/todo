import { combineReducers } from 'redux';
import todos from './todos';
import user from './user';
import visibilityFilter from './visibilityFilter';


export default combineReducers({
  todos,
  visibilityFilter,
  user,
});
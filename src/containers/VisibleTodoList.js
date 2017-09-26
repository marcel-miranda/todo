import { connect } from 'react-redux';
import { ascendTodo, removeTodo } from '../actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return Object.keys(todos)
        .filter(key => todos[key].completed)
        .reduce((visibleTodos, key) => {
          return {
            ...visibleTodos,
            [key]: todos[key],
          }
        }, {});
    case 'SHOW_ACTIVE':
      return Object.keys(todos)
        .filter(key => todos[key].completed)
        .reduce((visibleTodos, key) => {
          return {
            ...visibleTodos,
            [key]: todos[key],
          }
        }, {});
    case 'SHOW_ALL':
    default:
      return todos;
  }
}

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: key => {
      dispatch(removeTodo(key));
    },
    ascendTodo: key => {
      dispatch(ascendTodo(key));
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList)

export default VisibleTodoList;

import React from 'react';
import PropTypes from 'prop-types';
import { List, Paper } from 'material-ui';
import Todo from './Todo';
import sortTodos from '../lib/sortTodos';

const TodoList = ({ todos, ascendTodo, onTodoClick }) => (
  <List>
    {sortTodos(todos).map(todo => (
      <Todo
        completed={todo.completed}
        expired={todo.expired}
        key={todo.key}
        text={todo.text}
        onClick={() => onTodoClick(todo.key)}
        onUpClick={() => ascendTodo(todo.key)}
      />
    ))}
  </List>
);

export default TodoList;

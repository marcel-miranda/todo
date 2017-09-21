import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui';
import { CheckCircle, RadioButtonUnchecked } from 'material-ui-icons';

const Todo = ({ onClick, completed, text }) => (
  <ListItem
    button
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <ListItemIcon>
      {
        completed 
          ? <CheckCircle /> 
          : <RadioButtonUnchecked />
      }
    </ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo;
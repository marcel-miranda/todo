import React from 'react';
import PropTypes from 'prop-types';
import {
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction
} from 'material-ui';
import {
  Alarm,
  CheckCircle,
  RadioButtonUnchecked,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from 'material-ui-icons';

const Todo = ({ onClick, onUpClick, completed, expired, text }) => (
  <ListItem
    button
    className={'flashing'}
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <ListItemIcon className={expired ? 'hvr-buzz' : ''}>
      {
        completed
          ? <CheckCircle />
          : expired ? <Alarm /> : <RadioButtonUnchecked />
      }
    </ListItemIcon>
    <ListItemText primary={text} />
    <ListItemSecondaryAction>
      <IconButton onClick={onUpClick}>
        <KeyboardArrowUp/>
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onUpClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo;

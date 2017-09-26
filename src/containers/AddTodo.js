import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import { TextField, Button } from 'material-ui';

// Return a string in the format of '2017-09-25T22:50'
const nowString = () => new Date().toJSON().substr(0, 16);

const AddTodo = ({ dispatch }) => {
  let todoTextInput;
  let dueDateInput;

  const onClick = () => {
    if (!todoTextInput.value.trim()) {
      return;
    }

    dispatch(addTodo(todoTextInput.value, dueDateInput.value));
    todoTextInput.value = '';
  }

  return (
    <div>
      <TextField label="Add todo" inputRef={node => { todoTextInput = node }} />
      <TextField
        inputRef={node => { dueDateInput = node }}
        label="Due at"
        step="300"
        type="datetime-local"
        defaultValue={nowString()}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button color="primary" raised onClick={onClick}> Add Todo </Button>
    </div>
  )
}

export default connect()(AddTodo)

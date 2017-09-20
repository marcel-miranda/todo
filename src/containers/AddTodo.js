import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import { TextField, Button } from 'material-ui';

const AddTodo = ({ dispatch }) => {
  let input;

  const onClick = () => {
    if (!input.value.trim()) {
      return;
    }

    dispatch(addTodo(input.value))
    input.value = '';
  }

  return (
    <div>
      <TextField label="Add todo" inputRef={node => { input = node }} />
      
      <Button color="primary" raised onClick={onClick}> Add Todo </Button>
    </div>
  )
}

export default connect()(AddTodo)
import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Button } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import './LoginButton.css';

const LoginButton = ({ onClick, user }) => {
  if (user.loggedIn) {
    return (
      <div>
        <Button color="contrast" onClick={onClick}>
          <Avatar src={user.user.photoURL} className='LoginButtonAvatar' />
          {user.user.displayName}
        </Button>
      </div>
    );
  }

  return (
    <Button color="contrast" onClick={onClick}>Log In</Button>
  );
};

LoginButton.propTypes = {
  user: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}

export default LoginButton;
import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Button } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import './LoginButton.css';

const LoginButton = ({ logIn, logOut, user }) => {
  if (user.uid) {
    const { displayName, photoURL } = user;

    return (
      <div>
        <Button color="contrast" onClick={logOut}>
          <Avatar src={photoURL} className='LoginButtonAvatar' />
          Log Out
        </Button>
      </div>
    );
  }

  return (
    <Button color="contrast" onClick={logIn}>Log In</Button>
  );
};

LoginButton.propTypes = {
  logIn: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
}

export default LoginButton;

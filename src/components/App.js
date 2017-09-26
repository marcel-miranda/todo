import React from 'react';
import './App.css';
import Header from './Header';
import AddTodo from '../containers/AddTodo';
import { Card, Paper, Divider, Typography } from 'material-ui';
import { withStyles } from 'material-ui/styles';

import VisibleTodoList from '../containers/VisibleTodoList';

let initialized = false;

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    margin: theme.spacing.unit * 3,
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '640px',
  }),
  logIn: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    margin: theme.spacing.unit * 3,
  })
});

const App = ({ classes, user, dispatch, initialize }) => {
  if (!initialized) {
    initialize();
    initialized = true;
  }

  return (
    <div className="App">
      <Header />
      <Divider light />
      {!user.uid && <Card className={classes.logIn}>
        <Typography type="headline" component="h2">
          Please login to continue
        </Typography>
      </Card>}
      {user.uid && <Paper className={classes.root}>
        <AddTodo />
        <VisibleTodoList />
      </Paper>}
    </div>
  );
}

export default withStyles(styles)(App);

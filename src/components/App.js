import React from 'react';
import logo from '../assets/logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

export default () => (
  <div className="App">
    <Header />
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

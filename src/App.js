import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes } from './Routes';
import { Provider } from 'react-redux';

// Import the ConfigureStore that holds the initial Configuration

import { configureStore } from './store/configureStore';
import * as TodoActions from './todos/actions/todoActions';

// Create a Store from the Configuration, we can pass a Initial State here

const store = configureStore();

// At first dispatch a Get Todos Actions, So we'll recieve the Todos 
// fetched from the server at the start of the app

store.dispatch(TodoActions.GetTodos())   //I DONT ADD IT TO MY APP

const App = (props) => {
  return (
    
    //Provider needs to contain all the Containers/Components it will give access to the Store

      <Provider store={store} >
        <Routes />
      </Provider>
  )
}

export default App;

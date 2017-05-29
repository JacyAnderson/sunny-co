import React from 'react';

import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import * as firebase from 'firebase';

export default class App extends React.Component {
  render() {
    return(
      <div>
        <Header/> 
        <Login/>
      </div>
    ) 
  }
}

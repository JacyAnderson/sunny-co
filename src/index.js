/*global firebaseui*/
/*global firebase*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';

// Require for use with Material UI
const injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAd2D9XfCR0D2cK5q9qkEXv6SGjS39pWho",
  authDomain: "sunnyco-dbff0.firebaseapp.com",
  databaseURL: "https://sunnyco-dbff0.firebaseio.com",
  projectId: "sunnyco-dbff0",
  storageBucket: "sunnyco-dbff0.appspot.com",
  messagingSenderId: "127566654812"
};

// Access Firebase
const fb = firebase  
  .initializeApp(config)
  .database()
  .ref();

// Firebase UI
const firebaseui = require('firebaseui');


ReactDOM.render(
	<App/>, 
	document.getElementById('root')
);
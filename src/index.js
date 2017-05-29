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

// Firebase UI Config
var uiConfig = {
  signInSuccessUrl: '<url-to-redirect-to-on-success>',
  signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.TwitterAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
          firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  // tosUrl: '<your-tos-url>'
};

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);


ReactDOM.render(
  <App/>, 
  document.getElementById('root')
);
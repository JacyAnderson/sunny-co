import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as firebase from 'firebase';
// App Components
import App from './App';
require('dotenv').config()

// Firebase UI for Log in
const firebaseui = require('firebaseui');

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
firebase  
  .initializeApp(config)
  .database()
  .ref();

// // Firebase UI
// const firebaseui = require('firebaseui');

// Firebase UI Config
var uiConfig = {
  signInSuccessUrl: '/set-home',
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

function initApp() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
            // User is signed in.
            // var displayName = user.displayName;
            // var email = user.email;
            // var emailVerified = user.emailVerified;
            // var photoURL = user.photoURL;
            // var uid = user.uid;
            // var phoneNumber = user.phoneNumber;
            // var providerData = user.providerData;

            // user.getIdToken().then(function(accessToken) {
            //   document.getElementById('sign-in-status').textContent = 'Signed in';
            //   document.getElementById('sign-in').textContent = 'Sign out';
            //   document.getElementById('account-details').textContent = JSON.stringify({
            //     displayName: displayName,
            //     email: email,
            //     emailVerified: emailVerified,
            //     phoneNumber: phoneNumber,
            //     photoURL: photoURL,
            //     uid: uid,
            //     accessToken: accessToken,
            //     providerData: providerData
            //   }, null, '  ');
            // });
            console.log("Signed in");
          } else {
            // User is signed out.
            // document.getElementById('sign-in-status').textContent = 'Signed out';
            // document.getElementById('sign-in').textContent = 'Sign in';
            // document.getElementById('account-details').textContent = 'null';
          }
        }, function(error) {
          console.log(error);
        });
};

window.addEventListener('load', function() {
  initApp()
});



// Render App to the ReactDOM
ReactDOM.render(
  <App/>,
  document.getElementById('root')
  );
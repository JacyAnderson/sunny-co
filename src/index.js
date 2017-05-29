import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as firebase from 'firebase';
import Header from './components/Header';
import MyAwesomeReactComponent from './components/MyAwesomeReactComponent';


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


class App extends React.Component {
	render() {
		return(
			<div>
				<Header/>	
				
			</div>
		)	
	}
}

ReactDOM.render(<App/>, document.getElementById('root'));
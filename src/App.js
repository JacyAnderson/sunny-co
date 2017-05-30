import React from 'react';
import './App.css';
import {
	BrowserRouter,
	Route
} from 'react-router-dom';

// App Components
import Header from './components/Header';
import Homebase from './components/Homebase';
import Login from './components/Login';
import Main from './components/Main';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Main App component
export default class App extends React.Component {
  render() {
    return(
    	<BrowserRouter>
    		<MuiThemeProvider>
      	<div>
        	<Header/> 
        	<Route path="/login" component={Login}/>
        	<Route path="/set-home" component={Homebase}/>
        	<Route path="/main"component={Main}/>
      	</div>
      	</MuiThemeProvider>
      </BrowserRouter>
    ) 
  }
}

import React from 'react';
// import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Login extends React.Component {
	render() {
		return(
				<div>
					<h3>Sign in to Some Sunshine</h3>
					<div id="firebaseui-auth-container"></div>
				</div>
		)
	}
}
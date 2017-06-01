import React from 'react';
// import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const headingStyle = {
	marginLeft: "35vw"
}

export default class Login extends React.Component {
	render() {
		return(
				<div>
					<h3 style={headingStyle}>Sign in to Some Sunshine</h3>
					<div id="firebaseui-auth-container"></div>
				</div>
		)
	}
}
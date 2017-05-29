import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  card: {
  	margin: '0 auto',
  	width: '35%',
  }
}

export default class Login extends React.Component {
	render() {
		return(
			<MuiThemeProvider>
			<div>
				<Card style={styles.card}>
					<div id="firebaseui-auth-container"></div>
				</Card>
			</div>
			</MuiThemeProvider>
		)
	}
}
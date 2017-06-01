import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const cardStyle = {
	margin: '0 auto',
	marginTop: "30px",
	width: '75vw'
}

export default class BaseCard extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<Card style={cardStyle}>
					{this.props}
				</Card>
	 		</MuiThemeProvider>
		);
	}
}
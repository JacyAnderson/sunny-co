import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const cardStyle = {
	margin: '0 auto',
	marginTop: "30px",
	marginBottom: "30px",
	width: '75vw'
}

const icon = {
	maxWidth: '60px',
	maxHeight: 'auto',
	minWidth: '60px',
	width: '60px'
}

export default class WeatherCard extends Component {
	render() {
		return (
			<MuiThemeProvider>
			<div>
				<Card style={cardStyle}>
					<CardHeader avatar={this.props.icon} title={this.props.city} subtitle={"Current conditions are " + this.props.weather + "."}/>
					<CardTitle title={this.props.currentTemp + "°F"}></CardTitle>
				</Card>
			</div>
	 		</MuiThemeProvider>
		);
	}
}
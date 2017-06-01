import React, { Component } from 'react';
import {Card, CardHeader, CardTitle } from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const cardStyle = {
	margin: '0 auto',
	marginTop: "30px",
	marginBottom: "30px",
	width: '75vw'
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
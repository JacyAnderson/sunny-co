'use strict'

import React, { Component } from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';

import WeatherCard from './WeatherCard';

const locations = ["Boulder", "Fort Collins", "Colorado Springs", "Estes Park", "Pueblo", "Grand Junction"];

const coConditionsUrl = "http://api.wunderground.com/api/446cb5ce2e39614f/conditions/q/CO/"
const homeBase = "Denver";

const headingStyle = {
	marginLeft: "8vw"
}

function ListItem(props) {
	return (
		<li>{props.value}</li>
	)
}

function request() {
	for (let i = 0; i < locations.length; i++) {
		axios.get(''+ coConditionsUrl + locations[i] + '.json')
  	.then((response)=>{ 
    	if(response){
    		// Return sets response data as state
    		console.log('Status 200')
    		console.log(response.data.current_observation.display_location);
    		
    		return response.data;
    	} else {
    		throw new Error("Server response wasn't ok");
    	}
  	});
	}
}

// request();


function PlaceList(props) {
	const places = props.places;
	const listItems = places.map((place) =>
	// Pass Key to list item so React can identify which items have changed 
		// <ListItem key={place.toString()} value={place} />
		<div>
			<WeatherCard city={place}/>
		</div>
	);
	return (
		<ul> {listItems} </ul>
	);
}
 const places = ["Boulder", "Fort Collins", "Colorado Springs", "Estes Park", "Pueblo", "Ouray"];

class WeatherList extends Component {
	render() {
		if(!this.props.weather) {
			return <div>loading...</div>;
		}
		return(
			<div>
				<li>{this.props.weather}</li>
			</div>
		)
	}
}

export default class Main extends Component {
	constructor() {
		super();
		// Bind getInfo to Main's "this"
		this.getInfo = this.getInfo.bind(this);
		// Set initial state
		this.state = {
      weatherState: ['loading...'],
      displayLocation: ['loading...']
    };
	}
	// Run get info function
	componentDidMount() {
		console.log("Component did mounting");
		this.getInfo();
	}
	getInfo() {
		console.log("getting info from API");
		// Get current conditions
		axios.get(''+ coConditionsUrl + homeBase + '.json')
  	.then((response)=>{ 
    	if(response){
    		// Return sets response data as state
    		console.log('Status 200')
    		console.log(response.data);
    		
    		return response.data;
    	} else {
    		throw new Error("Server response wasn't ok");
    	}
  	})
  	.then((responseData)=>{
  		console.log("in .then");
  		// should be the same as response.data above
  		console.log(responseData); 

  		// Set the state to be equal to response data
  		this.setState({weatherState:responseData.current_observation});
  		this.setState({displayLocation:responseData.current_observation.display_location})
  			console.log("The current state is:")
  			//Should be the current set state
  		 console.log(this.state);
  	})
  	.catch((error)=>{
    	console.log(error);
  	});
	}

	render() {
		console.log("rendering");
				// <PlaceList places={places}/>
		return (
			<MuiThemeProvider>
			<div>
				<h3 style={headingStyle}>Your Homebase</h3>
				<WeatherCard city={this.state.displayLocation.city} weather={this.state.weatherState.weather} icon={this.state.weatherState.icon_url} currentTemp={this.state.weatherState.temp_f}/>
				<Divider />
				<h3 style={headingStyle}>Everywhere Else!</h3>
				<PlaceList places={places}/>
			</div>
	 		</MuiThemeProvider>
		);
	}
}
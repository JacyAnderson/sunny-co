import React, { Component } from 'react';
import axios from 'axios';

import WeatherCard from './WeatherCard';


// Variables
const coConditionsUrl = "https://api.wunderground.com/api/446cb5ce2e39614f/conditions/q/CO/"
const homeBase = "Denver";


export default class HomebaseCard extends Component {
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
		this.getInfo();
	}
	getInfo() {
		// Get current conditions
		axios.get(''+ coConditionsUrl + homeBase + '.json')
  	.then((response)=>{ 
    	if(response){
    		return response.data;
    	} else {
    		throw new Error("Server response wasn't ok");
    	}
  	})
  	.then((responseData)=>{	
  	   // Set the state to be equal to response data
  		this.setState({weatherState:responseData.current_observation});
  		this.setState({displayLocation:responseData.current_observation.display_location});
  	})
  	.catch((error)=>{
    	console.log(error);
  	});
	}
	render() {
		const wS = this.state.weatherState;
		const dL = this.state.displayLocation;
		return(
			<WeatherCard key={dL.city} city={dL.city} weather={wS.weather} icon={wS.icon_url} currentTemp={wS.temp_f}/>
		)
	}
}
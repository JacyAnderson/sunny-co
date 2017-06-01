import React, { Component } from 'react';
import axios from 'axios';

import WeatherCard from './WeatherCard';


// Variables
const coConditionsUrl = "http://api.wunderground.com/api/446cb5ce2e39614f/conditions/q/CO/"
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
		// console.log("Component did mounting");
		this.getInfo();
	}
	getInfo() {
		// console.log("getting info from API");
		// Get current conditions
		axios.get(''+ coConditionsUrl + homeBase + '.json')
  	.then((response)=>{ 
    	if(response){
    		// Return sets response data as state
    		// console.log('Status 200')
    		// console.log(response.data);
    		
    		return response.data;
    	} else {
    		throw new Error("Server response wasn't ok");
    	}
  	})
  	.then((responseData)=>{
  		// console.log("in .then");
  		// should be the same as response.data above
  		// console.log(responseData); 

  		// Set the state to be equal to response data
  		this.setState({weatherState:responseData.current_observation});
  		this.setState({displayLocation:responseData.current_observation.display_location})
  			// console.log("The current state is:")
  			//Should be the current set state
  		 // console.log(this.state);
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
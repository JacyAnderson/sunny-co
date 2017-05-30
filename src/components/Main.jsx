import React, { Component } from 'react';
import axios from 'axios';

function ListItem(props) {
	return (
		<li>{props.value}</li>
	)
}


function PlaceList(props) {
	const places = props.places;
	const listItems = places.map((place) => 
		// Pass Key to list item so React can identify which items have changed
		<ListItem key={place.toString()} value={place} />
	);
	return (
		<ul> {listItems} </ul>
	);
}
 const places = ["Denver", "Boulder", "Fort Collins", "Nederland"];


function HomebaseLoc(props) {
	const homebase = props.homebase;
	return (
		<h1>{homebase}</h1>
	)
}

function CurrentWeather(props) {
	const weather = props.weather;
	return(
	<p>{weather}</p>
	)
}

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
		this.getInfo = this.getInfo.bind(this);
		this.state = {
      weatherState: ['loading...'],
      displayLocation: ['loading...']
    };
	}
	componentDidMount() {
		console.log("Component did mounting");
		this.getInfo();
	}
	getInfo() {
		console.log("getting info from API");
		axios.get('http://api.wunderground.com/api/446cb5ce2e39614f/conditions/q/CO/Denver.json')
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
		return (
			<div>		
				<h1>{this.state.displayLocation.city}</h1>
				<CurrentWeather weather={this.state.weatherState.weather}/>
				<PlaceList places={places}/>
	 		</div>
		);
	}
}
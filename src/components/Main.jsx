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

export default class Main extends Component {
	constructor(props) {
    super(props);
    this.state = {
      weatherState: []
    };
  }
 	

	componentDidMount() {
	  axios.get('http://api.wunderground.com/api/446cb5ce2e39614f/conditions/q/CO/Denver.json')
  	.then((response)=>{ 
  		console.log(response);
  		const weatherArr = response.data;
  		const city = response.data.current_observation.display_location.city;
			const currentWeather = response.data.current_observation.weather;
    	console.log(city);
    	if(response.status===200){

    		// Return sets response data as state
    		return response.data.current_observation.weather;
    	} else {
    		throw new Error("Server response wasn't ok");
    	}


    	// This needs to be bound to ....?
    	// this.setState({ weather });
  	})
  	.then((responseData)=>{
  		this.setState({weatherState:responseData});
  	}).catch((error)=>{
    	console.log(error);
  	});
  }	
  // Pass the weatherState into the Weather list via props
	render() {
		return (
			<div>
				<h1>The weather in Denver is:</h1>
				<WeatherList weather={places[0]}/>
				<PlaceList places={places}/>
			</div>
		)
	}
}

class WeatherList extends Component {
	render() {
		if(!this.props.weather) {
			return <div>loading...</div>;
		}
		return(
			<div>
				<p>{this.props.weather}</p>
			</div>
		)
	}
}
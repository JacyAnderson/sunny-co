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
	constructor(props) {
		console.log("In constructor");
    super(props);
    this.state = {
      weatherState: []
    };
  }
 	

	componentDidMount() {
		console.log("In componentDidMount");
	  axios.get('http://api.wunderground.com/api/446cb5ce2e39614f/conditions/q/CO/Denver.json')
  	.then((response)=>{ 
  		// console.log(response.data.current_observation);
  		const city = response.data.current_observation.display_location.city;
			// const currentWeather = response.data.current_observation.weather;
    	console.log(city);
    	if(response){

    		// Return sets response data as state
    		console.log('Status 200')
    		console.log(response.data);
    		// return response.data.current_observation.weather;
    		return response.data;
    		// console.log(response.data);
    		// return response.data;
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
  			console.log("The current state is:")
  			//Should be the current set state
  		 console.log(this.state);
  	})
  	.catch((error)=>{
    	console.log(error);
  	});
  	console.log("END OF componentDidMount");

  }	

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  // Pass the weatherState into the Weather list via props
	render() {
		return (
			<div>
				<h1>The weather in {places[0]} is:</h1>
				
				<PlaceList places={places}/>
			</div>
		)
	}
}
import React, { Component } from 'react';
import axios from 'axios';

import WeatherCard from './WeatherCard';


// Variables
// const locations = ["Boulder", "Fort Collins", "Colorado Springs", "Estes Park", "Pueblo", "Grand Junction"];
const locations = ["Boulder", "Fort Collins"];
const coConditionsUrl = "http://api.wunderground.com/api/446cb5ce2e39614f/conditions/q/CO/";

function allConditions() {
	let conArr = [];
	let locArr = [];
	for (let i = 0; i < locations.length; i++) {
		axios.get("" + coConditionsUrl + locations[i] + ".json")
			.then(function(response) {
				conArr.push(response.data.current_observation);
				locArr.push(response.data.current_observation.display_location);
			})
			.catch(function(response) {
				console.log(response);
			})
	}
	console.log(locArr);
	return [conArr, locArr];
}

export default class PlacesCard extends Component {
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
		console.log("Component did mounting in PlacesCard");
		this.getInfo();
	}
	getInfo() {
		// set this so you can pass it into axios.spread
		var boundThis = this;
		axios.all(allConditions())
		.then(axios.spread(function(conditions, locations) {
			console.log("In .then axios spread");
			console.log(conditions);
			console.log(locations);
			boundThis.setState({weatherState: conditions});
			boundThis.setState({displayLocation: locations});
			console.log(boundThis.setState.weatherState);
			console.log(boundThis.setState.displayLocation);
		}))
			.catch(error => console.log(error));
		}
  	render() {
  		console.log("Rendering...");
  		const wS = this.state.weatherState;
			const dL = this.state.displayLocation;
			return(
				<WeatherCard key={dL.city} city={dL.city} weather={wS.weather} icon={wS.icon_url} currentTemp={wS.temp_f}/>
			)
  	}
}


// function PlaceList(props) {
// 	const places = props.places;
// 	const listItems = places.map((place, index) =>
// 	// Pass Key to list item so React can identify which items have changed 
// 		// <ListItem key={place.toString()} value={place} />
// 		<div>
// 			<WeatherCard key={place[index]} city={place}/>
// 		</div>
// 	);
// 	return (
// 		<ul> {listItems} </ul>
// 	);
// }

// axios.get(''+ coConditionsUrl + homeBase + '.json')
  // 	.then((response)=>{ 
  //   	if(response){
  //   		// Return sets response data as state
  //   		console.log('Status 200')
  //   		console.log(response.data);
    		
  //   		return response.data;
  //   	} else {
  //   		throw new Error("Server response wasn't ok");
  //   	}
  // 	})

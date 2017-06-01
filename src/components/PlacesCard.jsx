import React, { Component } from 'react';
import axios from 'axios';
import update from 'immutability-helper';

import WeatherCard from './WeatherCard';

// Variables
// const locations = ["Boulder", "Fort Collins", "Colorado Springs", "Estes Park", "Pueblo", "Grand Junction"];
const locations = ["Boulder", "Fort Collins"];
const coConditionsUrl = "https://api.wunderground.com/api/446cb5ce2e39614f/conditions/q/CO/";



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
      weatherState: [{}],
      displayLocation: [{}]
    };
	}
	// Run get info function
	componentDidMount() {
		console.log("Component did mounting in PlacesCard");
		this.getInfo();
	}
	getInfo() {
		// set 'this' so you can pass it into axios.spread
		var boundThis = this;
		axios.all(allConditions())
		.then(axios.spread(function(conditions, locations) {
			console.log("In .then axios spread");
			const newState = update(boundThis.state, {
				weatherState: {
					$set : [conditions][0]
				},
				displayLocation: {
					$set: [locations][0]
				}
			});
			boundThis.setState(newState);
		}))
			.catch(error => console.log(error));
		}
  	render() {
  		console.log("Rendering...");

  		const wS = this.state.weatherState;
			const dL = this.state.displayLocation; 
		
			const newBoundThis = this;

			console.log(this.state);
			console.log(this.state.displayLocation);
			return(
				 <WeatherCard city={this.state.displayLocation[0].city} weather={this.state.weatherState[0].weather} icon={this.state.weatherState[0].icon_url} currentTemp={this.state.weatherState[0].temp_f}/>
			);
  	}
}

// <WeatherCard key={dL.city} city={dL.city} weather={wS.weather} icon={wS.icon_url} currentTemp={wS.temp_f}/>



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

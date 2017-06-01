import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';

import HomebaseCard from './HomebaseCard';
import PlacesCard from './PlacesCard';

// Styles
const headingStyle = {
	marginLeft: "8vw"
}

// function ListItem(props) {
// 	return (
// 		<li>{props.value}</li>
// 	)
// }

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

export default class Main extends Component {
	render() {
		console.log("rendering");
				// <PlaceList places={places}/>
		return (
			<MuiThemeProvider>
			<div>
				<h3 style={headingStyle}>Your Homebase</h3>
				<HomebaseCard />
				<Divider />
				<h3 style={headingStyle}>Everywhere Else!</h3>
				<PlacesCard/>
				
			</div>
	 		</MuiThemeProvider>
		);
	}
}
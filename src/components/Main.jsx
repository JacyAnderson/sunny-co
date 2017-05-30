import React from 'react';
import axios from 'axios';

export default class Main extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      weather: []
    };
  }
 	

	componentDidMount() {
	  axios.get('http://api.wunderground.com/api/446cb5ce2e39614f/conditions/q/CO/Denver.json')
  	.then((response)=>{ 
  		const weather = response.data.current_observation.weather;
    	console.log(weather);
    	if(response.status===200){
    		return response.data;
    	} else {
    		throw new Error("Server response wasn't ok");
    	}
    	// This needs to be bound to ....?
    	// this.setState({ weather });
  	})
  	.then((responseData)=>{
  		this.setState({weather:responseData});
  	}).catch((error)=>{
    	console.log(error);
  	});
  }	
	render() {
		return (
			<a href="https://darksky.net/poweredby/"><h1>Powered By Dark Sky</h1></a>
		)
	}
}
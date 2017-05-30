import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import GoogleApiComponent from './GoogleApiComponent';
import TextField from 'material-ui/TextField';

const buttonStyle = {
  margin: 12,
  width: '50%'
};

const cardStyle = {
	margin: '0 auto',
	width: '75vw'
}

export default class HomebaseForm extends React.Component {
	render() {
		return(
			<MuiThemeProvider>
						<Card style={cardStyle}>
							<CardTitle title="Select your Homebase"/>
							<CardMedia>
								
							</CardMedia>
							<CardActions>
									<TextField
      						hintText="Denver, CO"
      						floatingLabelText="Type the name of your homebase"
    							/><br />
    							<RaisedButton label="Submit" secondary={true}/>
    					</CardActions>
    					<CardActions>

    					</CardActions>
						</Card>
					
			</MuiThemeProvider>
		)
	}
}
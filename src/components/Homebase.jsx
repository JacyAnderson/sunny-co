import React from 'react';

import HomebaseForm from './HomebaseForm';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Homebase extends React.Component {
	render() {
		return(
			<MuiThemeProvider>
				<div>
					<HomebaseForm/>
				</div>
			</MuiThemeProvider>
		)
	}
}
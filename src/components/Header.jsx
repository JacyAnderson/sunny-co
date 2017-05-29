import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

export default class Header extends React.Component {
	render() {
		return(
			<div>
			<MuiThemeProvider>
			<AppBar title="Sunny Somewhere" 
			showMenuIconButton={false} 
			iconElementRight={
				<IconMenu iconButtonElement={
					<IconButton>
						<MoreVertIcon />
					</IconButton>}
					anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
					targetOrigin={{horizontal: 'right', vertical: 'bottom'}}>
					<MenuItem primaryText="Account" />
					<MenuItem primaryText="Log in" />
					<MenuItem primaryText="Log out" />
				</IconMenu>}>
			</AppBar>
			</MuiThemeProvider>
			</div>
		);
	}
}
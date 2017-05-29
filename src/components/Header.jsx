import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Toggle from 'material-ui/Toggle';

export default class Header extends React.Component {
	render() {
		return(
			<div>
			<MuiThemeProvider>
			<AppBar title="SunnyCO" 
			showMenuIconButton={false} 
			iconElementRight={
				<IconMenu iconButtonElement={
					<IconButton>
						<MoreVertIcon />
					</IconButton>}
					anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
					targetOrigin={{horizontal: 'right', vertical: 'bottom'}}>
					<MenuItem primaryText="Refresh" />
					<MenuItem primaryText="Send feedback" />
					<MenuItem primaryText="Settings" />
					<MenuItem primaryText="Help" />
					<MenuItem primaryText="Sign out" />
				</IconMenu>}>
			</AppBar>
			</MuiThemeProvider>
			</div>
		);
	}
}
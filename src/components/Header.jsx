import React from 'react';
import { NavLink } from 'react-router-dom';
import * as firebase from 'firebase';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


function signOut() {
firebase.auth().signOut().then(function() {
  console.log('Signed Out');
}, function(error) {
  console.error('Sign Out Error', error);
});
}

export default class Header extends React.Component {
	render() {
		return(
			<MuiThemeProvider>
			<div>
					<AppBar title="Sunny Somewhere" 
					showMenuIconButton={false} 
					iconElementRight={
						<IconMenu iconButtonElement={
							<IconButton>
								<MoreVertIcon />
							</IconButton>}
							anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
							targetOrigin={{horizontal: 'right', vertical: 'top'}}>
							<NavLink to="/set-home"><MenuItem primaryText="Account" /></NavLink>
							<NavLink to="/login"><MenuItem primaryText="Log in"></MenuItem></NavLink>
							<a><MenuItem primaryText="Log out" onClick={signOut}/></a>
						</IconMenu>}>
					</AppBar>
			</div>
			</MuiThemeProvider>   
		);
	}
}
import React, {Component} from 'react';
import {Fa} from 'mdbreact';

class SideNav extends Component{
	render() {
		return(
		<div className="switch-version">
		  <a href="#"><Fa className="white-text" icon="cog" /></a>
		</div>
		);
	}
}

export default SideNav;
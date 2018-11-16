import React, {Component} from 'react';
import CircularColor from 'react-circular-color';


class Articles extends Component{
	constructor(props) {
	    super(props);
	    window.scrollTo({
	      top: 0,
	      behavior: "smooth"
	    });
	  }

	  handleColorChange(color) {
		console.log(color); // it will be string with a color hash e.g. #1c1c1c
	  }
	

	render() {
		return(
			<div className="text-center" style={{background : 'linear-gradient(to bottom, white, #D3D3D3)', padding: '4%', paddingTop: '10%'}}>
				This is Article Page!!...<br />
				<CircularColor size={200} onChange={this.handleColorChange} />
			</div>
		)
	}
}

export default Articles;
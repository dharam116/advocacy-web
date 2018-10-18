import React, {Component} from 'react'

class Articles extends Component{
	constructor(props) {
	    super(props);
	    window.scrollTo({
	      top: 0,
	      behavior: "smooth"
	    });
  	}

	render() {
		return(
			<div style={{background : 'linear-gradient(to bottom, white, #D3D3D3)', padding: '4%', paddingTop: '10%'}}>
				This is Articles page..
			</div>
		)
	}
}

export default Articles;
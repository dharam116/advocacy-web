import React, {Component} from 'react'
import {Row, Col, View, Mask} from 'mdbreact'

class Objective extends Component {
	constructor(props) {
	    super(props);
	    window.scrollTo({
	      top: 0,
	      behavior: "smooth"
	    });
  	}
  	render() {
	return(
		<div style={{ background : 'linear-gradient(to bottom, white, #D3D3D3)', padding: '4%', paddingTop: '10%'}}>
	      <h2 className="font-weight-bold my-4">Our Objective</h2>
	      <Row>
	        <Col lg="8">
	            <p>We provide specialist and technical advice based on commercial experience that does not cost the earth.</p>
	        	<p>We seek long term relationships with our clients and contacts and understand the importance of providing advice in a proactive and personal way</p>
	        	<p>We do not believe in just sitting behind our desks but will work from our clients’ offices, visit sites and pro-actively manage every piece of work.</p>
	        	<p>We want repeat work and to be referred to new clients and we appreciate that will only happen when we consistently deliver the very best service and understand what our clients really want and how they want to achieve it. </p>		        	
	        </Col>
	        <Col lg="2">
	          <View className="rounded mb-lg-0 mb-4" hover waves>
	            <img className="img-fluid square" src="https://static1.squarespace.com/static/5a350aae8fd4d234be37dd78/t/5a44cb77419202c4d35a027e/1514457978224/Lady-Justice.png" alt="Law"/>
	            <a><Mask overlay="white-slight"/></a>
	          </View>
	        </Col>
	        <Col lg="12">
	        <p>We are a niche firm and do not want to lose our reputation for our highly personal service and attention to detail. We are forward thinking and always try and find new opportunities and introductions for our clients, which means we stay in touch even when we are not working on a specific matter or transaction for them. </p>
	        <p>We are trusted by our clients to manage complex and valuable transactions because we know and understand them, their aims and objectives. We work with our clients as part of their expanded in house team and help them to be more successful. </p>
	      	<p>We look forward to working with you..</p>
	      	</Col>
	      </Row>
		</div>
	);
	}
}

export default Objective;
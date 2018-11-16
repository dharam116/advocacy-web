import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, Fa, CardBody, Button, Card, Modal} from 'mdbreact';
import Divider from '@material-ui/core/Divider';
import { Avatar} from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {Tabs, Tab} from 'react-bootstrap-tabs';

class Profile1 extends Component{
	constructor(props) {
	    super(props);
	    window.scrollTo({
	      top: 0,
	      behavior: "smooth"
	    });
	    
	    this.state = {
      		modal: false,
      	};

      	this.toggle = this.toggle.bind(this);
	}

	toggle() {
	    this.setState({
	    	modal: !this.state.modal
	    });
  	}	

  	render() {
		return(
			<div style={{background : 'linear-gradient(to bottom, white, #D3D3D3)', padding: '4%', paddingTop: '10%'}}>
				<Row>
					<Col md="9">
						<Card className="card1">
						    <Row>
						    	<CardMedia
						        className="cover"
						        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSziJMeTntcyyMI1O_d-j-YhMd5CikZ9KKoRLU3kxbnABqG4pi7dw"
						        title="Image name1" />
								<div className="details">
									<CardBody>
										<h6 className="font-weight-bold blue-text">Name</h6>
										<h6>Post</h6>
										<ul className="rating">
						                    <li>
						                    	<Fa icon="star"></Fa>
						                    </li>
						                    <li>
						                    	<Fa icon="star"></Fa>
						                    </li>
						                    <li>
						                    	<Fa icon="star"></Fa>
						                    </li>
						                    <li>
						                    	<Fa icon="star"></Fa>
						                    </li>
						                    <li>
						                    	<Fa icon="star-o"></Fa>
						                    </li>
						                </ul>
										<Link to="#" className="btn btn-info btn-sm waves-effect waves-light"> Call Now</Link>
									</CardBody>
								</div>
								<div className="detail">
									<CardBody className="content">
										<h6><Fa icon="map-marker blue-text" className="pr-2"/>3 miles away</h6>
										<h6><Fa icon="map-marker blue-text" className="pr-2"/>1600 Amphitheatre<br/> Parkway, mountain View,<br/> CA 94034.</h6>
									</CardBody>
								</div>
							</Row>
					    </Card>

					    <div className="card2">
			                <Tabs headerStyle={{fontSize:'15px', fontWeight: 'bold', color: 'black'}} activeHeaderStyle={{backgroundColor: '#fff', color:'#33b5e5'}}>
								<Tab label="Overview">
									<Card className="tab">
										<h6 className="font-weight-bold">About City Dental Care</h6>
										<p>india's Largest Emerging Dental Chain.'</p>
										<Row>
										<Col md="4">
											<h6 className="font-weight-bold">Timings</h6>
											<h6 className="font-weight-bold">Mon-Sun</h6>
											<p> 10:00 AM to 10:00 PM</p>
										</Col>
										<Col md="4">
											<h6 className="font-weight-bold"> Services</h6>
											<h6>Acrylic Partial Denture</h6>
											<h6>BPS Dentures Fixing</h6>
											<h6>Cast Partial Denture</h6>
											<h6>Artificial Teeth</h6>
											<h6>Conservative Dentistry</h6>
											<h6>Conscious Sedation</h6>
											<h6>Cosmetic/ Aesthetic Dentistry</h6>
										</Col>
										<Col md="4">
											<h6 className="font-weight-bold">Photos </h6>
											<ul className="rating"> 
											<li><Avatar src="http://icons.iconarchive.com/icons/icons8/windows-8/256/Users-Group-icon.png" alt="Sample project image" /></li>
											<li><Avatar src="http://icons.iconarchive.com/icons/icons8/windows-8/256/Users-Group-icon.png" alt="Sample project image" /></li>
											<li><Avatar src="http://icons.iconarchive.com/icons/icons8/windows-8/256/Users-Group-icon.png" alt="Sample project image" /></li>
											<li><Avatar src="http://icons.iconarchive.com/icons/icons8/windows-8/256/Users-Group-icon.png" alt="Sample project image" /></li>
											</ul>
										</Col>
										</Row>
									</Card>
								</Tab>
								<Tab label="Advocates">
									<Card className="tab">
										<h6 className="font-weight-bold">Advocates List </h6>
									    <Card className="card1">
										    <Row>
										    	<CardMedia
										        className="cover"
										        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSziJMeTntcyyMI1O_d-j-YhMd5CikZ9KKoRLU3kxbnABqG4pi7dw"
										        title="Image name1" />
												<div className="details">
													<CardContent>
														<h6 className="font-weight-bold blue-text">Name</h6>
														<h6>Post</h6>
														<ul className="rating">
										                    <li>
										                    	<Fa icon="star"></Fa>
										                    </li>
										                    <li>
										                    	<Fa icon="star"></Fa>
										                    </li>
										                    <li>
										                    	<Fa icon="star"></Fa>
										                    </li>
										                    <li>
										                    	<Fa icon="star"></Fa>
										                    </li>
										                    <li>
										                    	<Fa icon="star"></Fa>
										                    </li>
										                </ul>
										                <Link to="#" className="btn btn-info btn-sm waves-effect waves-light"> Call Now</Link>
													</CardContent>
												</div>
												<div className="detail">
													<CardContent className="content">
														<h6><Fa icon="map-marker blue-text" className="pr-2" />3 miles away</h6>
														<h6><Fa icon="map-marker blue-text" className="pr-2"/>1600 Amphitheatre<br/> Parkway, mountain View,<br/> CA 94034.</h6>
													</CardContent>
												</div>
											</Row>
									    </Card>
									    <Card className="card1">
										    <Row>
										    	<CardMedia
										        className="cover"
										        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSziJMeTntcyyMI1O_d-j-YhMd5CikZ9KKoRLU3kxbnABqG4pi7dw"
										        title="Image name1" />
												<div className="details">
													<CardContent>
														<h6 className="font-weight-bold blue-text">Name</h6>
														<h6>Post</h6>
														<ul className="rating">
										                    <li>
										                    	<Fa icon="star"></Fa>
										                    </li>
										                    <li>
										                    	<Fa icon="star"></Fa>
										                    </li>
										                    <li>
										                    	<Fa icon="star"></Fa>
										                    </li>
										                    <li>
										                    	<Fa icon="star"></Fa>
										                    </li>
										                    <li>
										                    	<Fa icon="star-half-o"></Fa>
										                    </li>
										                </ul>
										                <Link to="#" className="btn btn-info btn-sm waves-effect waves-light"> Call Now</Link>
										            </CardContent>
												</div>
												<div className="detail">
													<CardContent className="content">
														<h6><Fa icon="map-marker blue-text" className="pr-2" />3 miles away</h6>
														<h6><Fa icon="map-marker blue-text" className="pr-2"/>1600 Amphitheatre<br/> Parkway, mountain View,<br/> CA 94034.</h6>
													</CardContent>
												</div>
										    </Row>
									    </Card>
									    <Card className="card1">
										    <Row>
										    	<CardMedia
										        className="cover"
										        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSziJMeTntcyyMI1O_d-j-YhMd5CikZ9KKoRLU3kxbnABqG4pi7dw"
										        title="Image name1" />
												<div className="details">
													<CardContent>
														<h6 className="font-weight-bold blue-text">Name</h6>
														<h6>Post</h6>
														<ul className="rating">
										                    <li>
										                    	<Fa icon="star"></Fa>
										                    </li>
										                    <li>
										                    	<Fa icon="star"></Fa>
										                    </li>
										                    <li>
										                    	<Fa icon="star"></Fa>
										                    </li>
										                    <li>
										                    	<Fa icon="star"></Fa>
										                    </li>
										                    <li>
										                    	<Fa icon="star"></Fa>
										                    </li>
										                </ul>
														<Link to="#" className="btn btn-info btn-sm waves-effect waves-light"> Call Now</Link>
													</CardContent>
												</div>
												<div className="detail">
													<CardContent className="content">
														<h6><Fa icon="map-marker blue-text" className="pr-2" />3 miles away</h6>
														<h6><Fa icon="map-marker blue-text" className="pr-2"/>1600 Amphitheatre<br/> Parkway, mountain View,<br/> CA 94034.</h6>
													</CardContent>
												</div>
										    </Row>
									    </Card>
									</Card>
								</Tab>
								<Tab label="Feedback">
									<Card className="tab">
										<h6 className="font-weight-bold">Feedback!...</h6>
									</Card>
								</Tab>
								<Tab label="Services">
									<Card className="tab list">
										<Row>
										<Col md="4">
											<li>Acrylic Partial Denture</li>
											<li>BPS Dentures Fixing</li>
											<li>Cast Partial Denture</li>
											<li>Artificial Teeth</li>
											<li>Conservative Dentistry</li>
											<li>Conscious Sedation</li>
											<li>Cosmetic/ Aesthetic Dentistry</li>
										</Col>
										<Col md="4">
											<li>Acrylic Partial Denture</li>
											<li>BPS Dentures Fixing</li>
											<li>Conservative Dentistry</li>
											<li>Conscious Sedation</li>
											<li>Cosmetic/ Aesthetic Dentistry</li>
										</Col>
										<Col md="4">
											<li>Acrylic Partial Denture</li>
											<li>BPS Dentures Fixing</li>
											<li>Cast Partial Denture</li>
											<li>Artificial Teeth</li>
											<li>Conservative Dentistry</li>
										</Col>
										</Row>
									</Card>
								</Tab>
							</Tabs>
						</div>
				    </Col>

				    <Col md="3">
				    <Button type="button" onClick={this.toggle} className="btn btn-rounded btn-sm fav-dr-model-btn waves-effect waves-light" data-toggle="modal" style={{backgroundColor: '#eb712e', borderColor:'#eb712e'}}>
					    Categories
					</Button>
				    	<Modal side position="top-right" isOpen={this.state.modal} toggle={this.toggle}>
				    	<Card className="card3">
				    		<h5 className="font-weight-bold text-center">Categories!...</h5><Divider />
				    		<div>
					    		<li>Employment Lawyer</li>
					    		<li>Corporate Lawyer</li> 
					    		<li>Criminal Lawyer</li>
					    		<li>Tax Lawyer</li>
					    		<li>Family Lawyer</li>
					    		<li>Civil Litigation Lawyer</li>
					    		<li>General Practice Lawyer</li>
				    		</div>
				    	</Card>
				    	</Modal>
				    </Col>
				</Row>
			</div>
		);
	}
}

export default Profile1;


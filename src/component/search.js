import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Container, Row, Col, Fa, Collapse, CardBody, Button, Modal} from 'mdbreact';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Slider from '@material-ui/lab/Slider';
import {Tabs, Tab} from 'react-bootstrap-tabs';
import { Avatar} from '@material-ui/core';

class Search extends Component {
  	constructor(props){
  		super(props);
  		window.scrollTo({
  			top: 0,
  			behaviour: "smooth"
  		});

  		this.state = {
	    	open: true,
	    	modal: false,
	    	modal1: false,
	    };

      	this.toggle = this.toggle.bind(this);
      	this.toggle1 = this.toggle1.bind(this);
	    this.click = this.click.bind(this);
  	}

  	toggle() {
  		this.setState({
	    	modal: !this.state.modal
	    });
  	}

  	toggle1() {
  		this.setState({
	    	modal1: !this.state.modal1
	    });
  	}

  	click() {
	    this.setState({
	    	open: !this.state.open
	    })
 	}

 	getSelectValue = (value) => {
		console.log(value);
	}

	state = {
		value: 50,
	};

	handleChange = (event, value) => {
		this.setState({ value });
	};

  	render() {
  		const { value } = this.state;

	return (
	  	<div style={{background : 'linear-gradient(to bottom, white, #D3D3D3)', padding: '4%', paddingTop: '10%'}}>
		    <Container>
			    <Row>
				    <Col md="3">
						<div className="btn btn-md btn-black" onClick={this.click}>
							<a className="float-left font-weight-bold" ><i className="fa fa-filter mr-2"></i> Filter </a>
							<span className="float-right">
								<i className="fa fa-minus ml-5"></i>
			                </span>
						</div>
						<Collapse isOpen={this.state.open}>
							<div className="filter">
								<div style={{margin:'10px'}}>
									<h6 className="font-weight-bold mb-3"> Speciality <i className="fa icon float-right fa-question-circle"></i></h6>
									<div className="active-cyan-3 active-cyan-4 ">
									  <input className="form-control mb-3" type="text" placeholder="select a specialty *" aria-label="Search"/>
									  <input className="form-control mb-4" type="text" placeholder="subspecialty" aria-label="Search"/>
									</div>
								</div>
								<Divider />
								<div style={{margin:'10px'}}>
									<h6 className="font-weight-bold mb-3"> Conditions Treated <i className="fa icon float-right fa-question-circle"></i></h6>
									<div className="active-cyan-3 active-cyan-4 ">
									  <input className="form-control mb-4" type="text" placeholder="Type and choose..." aria-label="Search"/>
									</div>
								</div>
								<Divider />
								<div style={{margin:'10px'}}>
									<h6 className="font-weight-bold mb-3">Conditions Treated  <i className="fa icon float-right fa-question-circle"></i></h6>
									<div className="active-cyan-3 active-cyan-4 ">
									  <input className="form-control mb-4" type="text" placeholder="Type and choose..." aria-label="Search"/>
									</div>
								</div>
								<Divider />
								<div style={{margin:'10px'}}>
									<h6 className="font-weight-bold mb-3">Location & Distance  <i className="fa icon float-right fa-question-circle"></i></h6>
									<div className="active-cyan-3 active-cyan-4 ">
									  <input className="form-control mb-4" type="text" placeholder="Location.." aria-label="Search"/>
									  <Slider value={value} aria-labelledby="label" onChange={this.handleChange} />
									</div>
								</div>
							</div>
						</Collapse>
                	</Col>

				    <Col md="8">
					    <Card className="card1">
						    <Row>
						    	<CardMedia
						        className="cover"
						        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSziJMeTntcyyMI1O_d-j-YhMd5CikZ9KKoRLU3kxbnABqG4pi7dw"
						        title="Image name1" />
								<div className="details">
									<CardContent>
										<Link to='#' onClick={this.toggle1} style={{ textDecoration: 'none', color: 'black'}}>
											<h6 className="font-weight-bold black-text">Name</h6>
										</Link>
										<Modal size="lg" style={{paddingTop: '4%'}} isOpen={this.state.modal1} toggle={this.toggle1}>
										<div style={{background : 'linear-gradient(to bottom, white, #9e9e9e )'}}> 
										<Row>
											<Col md="12">
												<Card className="card1">
												    <Row>
												    	<CardMedia
												        className="cover"
												        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSziJMeTntcyyMI1O_d-j-YhMd5CikZ9KKoRLU3kxbnABqG4pi7dw"
												        title="Image name1" />
														<div className="details">
															<CardBody>
																<h6 className="font-weight-bold black-text">Name</h6>
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
																<Link to="#" className="btn btn-black rounded btn-sm waves-effect waves-light"> Call Now</Link>
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
									                <Tabs headerStyle={{fontSize:'15px', fontWeight: 'bold', color: 'black'}} activeHeaderStyle={{backgroundColor: '#fff', color:'#FF0000'}}>
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
										</Row>
										</div>
										</Modal>
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
										<Link to="#" className="btn btn-black btn-sm waves-effect waves-light"> Call Now</Link>
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
										<h6 className="font-weight-bold black-text">Name</h6>
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
						                <Link to="#" className="btn btn-black btn-sm waves-effect waves-light"> Call Now</Link>
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
										<h6 className="font-weight-bold black-text">Name</h6>
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
						                <Link to="#" className="btn btn-black btn-sm waves-effect waves-light"> Call Now</Link>
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
										<h6 className="font-weight-bold black-text">Name</h6>
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
										<Link to="#" className="btn btn-black btn-sm waves-effect waves-light"> Call Now</Link>
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
				    </Col>
				    <Col md="1">
					    <Button onClick={this.toggle} className="btn rounded btn-sm fav-dr-model-btn waves-effect waves-light" data-toggle="modal" >
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
		    </Container>
	    </div>
	  );
	}
}

export default Search;

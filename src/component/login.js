import React from 'react';
import { Container, Row, Col, Input, Button, Fa, Card, CardBody, ModalFooter, Modal, ModalHeader, ModalBody } from 'mdbreact';
import '../App.css';

class LoginPage extends React.Component  {
  constructor(props) {
    super(props);
    window.scrollTo({
      top: 0;
      behaviour: "smooth"
    });
    
    this.state = {
      modal: false
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
        <Container>
          <section className="form-elegant">
            <Row>
              <Col md="6">
                <Card>
                  <CardBody className="mx-4">
                    <div className="text-center">
                      <h3 className="dark-grey-text mb-5"><strong>Login</strong></h3>
                    </div>
                    <div className="grey-text">
                      <Input label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                      <Input label="Your password" icon="lock" group type="password" validate containerClass="mb-0"/>
                    </div>  
                      <p className="font-small d-flex justify-content-end pb-3">Forgot <a href="#" className="blue-text ml-1"> Password?</a></p>
                    <div className="text-center mb-3">
                      <Button type="button" gradient="blue" rounded className="btn-block z-depth-1a">Login</Button>
                    </div>
                    <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"> or Sign in with:</p>
                    <div className="row my-3 d-flex justify-content-center">
                      <Button type="button" color="white" rounded className="mr-md-3 z-depth-1a"><Fa icon="facebook" className="blue-text text-center" /></Button>
                      <Button type="button" color="white" rounded className="mr-md-3 z-depth-1a"><Fa icon="twitter" className="blue-text" /></Button>
                      <Button type="button" color="white" rounded className="z-depth-1a"><Fa icon="google-plus" className="blue-text" /></Button>
                    </div>
                  </CardBody>
                  <ModalFooter className="mx-5 pt-3 mb-1">
                    <p className="font-small grey-text d-flex justify-content-end">Not a member? <a href="#sign-up" className="blue-text ml-1" onClick={this.toggle}> Sign Up</a></p>
                    <Modal style={{paddingTop: '80px'}} isOpen={this.state.modal} toggle={this.toggle}>
                      <ModalHeader toggle={this.toggle}><b>Sign Up</b></ModalHeader>
                      <ModalBody>
                        <div className="grey-text">
                          <Input label="Your name" icon="user" group type="text" validate error="wrong" success="right"/>
                          <Input label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                          <Input label="Confirm your email" icon="exclamation-triangle" group type="text" validate error="wrong" success="right"/>
                          <Input label="Your password" icon="lock" group type="password" validate/>
                        </div>
                      </ModalBody>
                      <ModalFooter>
                        <Button type="button" gradient="blue" >Register</Button>
                        <Button color="secondary" onClick={this.toggle}>Close</Button>{' '}
                      </ModalFooter>
                    </Modal>
                  </ModalFooter>
                </Card>
              </Col>
              <Col md-4>
                <img src="http://www.wendlcriminallawyer.ca/img/Criminal-Representation/Criminal-Representation-Status.png" />
              </Col>
            </Row>
          </section>
        </Container>

      </div>  
    );
  }
};

export default LoginPage;

"http://lsk.or.ke/assets/images/slides/leaders.jpg" frntpage image
import React from 'react';
import { Container, Row, Col, Input, Button, Card, CardBody } from 'mdbreact';

class SignUp extends React.Component  {
  constructor(props) {
    super(props);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    return(
      <div style= {{background: 'linear-gradient(to bottom, white, #C0C0C0)', padding:'4%', paddingTop: '10%'}}>
        <Container>
          <Row>
            <Col md="6">
            <Card>
              <CardBody>
                <h3 className="dark-grey-text text-center mb-5"><strong>Sign Up</strong></h3>
                <div className="grey-text">
                  <Input label="Your name" icon="user" group type="text" validate error="wrong" success="right"/>
                  <Input label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                  <Input label="Confirm your email" icon="exclamation-triangle" group type="text" validate error="wrong" success="right"/>
                  <Input label="Your password" icon="lock" group type="password" validate/>
                </div>
                <div className="text-right">
                  <Button type="button" gradient="blue" >Register</Button>
                </div>
              </CardBody>
            </Card>
            </Col>
            <Col md="4">
              <img src="http://www.wendlcriminallawyer.ca/img/Criminal-Representation/Criminal-Representation-Status.png" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};

export default SignUp;

<Link to='#login' style={{textDecoration: 'none'}} onClick={this.toggle} class="btn btn-info btn-rounded btn-sm waves-effect waves-light" data-toggle="modal" data-target="#navbarLogin">Log in/ Sign Up<i class="fa fa-sign-in ml-2"></i></Link>
            <Card>
              <Modal style={{paddingTop: '35px'}} isOpen={this.state.modal} toggle={this.toggle}>
                <CardBody>
                  <div className="grey-text">
                    <h3 className="text-center dark-grey-text font-weight-bold mb-5"><strong>Login</strong></h3>
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
                  </div>
                </CardBody>
                <ModalFooter>
                   <p className="font-small grey-text d-flex justify-content-end">Not a member? <a href="#sign-up" className="blue-text ml-1" onClick={this.toggle1}> Sign Up</a></p>
                </ModalFooter>
              </Modal>
              <Modal style={{paddingTop: '35px'}} isOpen={this.state.modal1} toggle={this.toggle1}>
                <ModalBody>
                  <div className="grey-text">
                    <h3 className="dark-grey-text text-center font-weight-bold mb-5">Sign Up</h3>
                    <Input label="Your name" icon="user" group type="text" validate error="wrong" success="right"/>
                    <Input label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                    <Input label="Confirm your email" icon="exclamation-triangle" group type="text" validate error="wrong" success="right"/>
                    <Input label="Your password" icon="lock" group type="password" validate/>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button type="button" gradient="blue" rounded className="btn-block z-depth-1a">Register</Button>
                </ModalFooter>
              </Modal>
            </Card>
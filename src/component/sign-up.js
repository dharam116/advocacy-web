import React from 'react';
import { Container, Row, Col, Input, Button, Card, CardBody, Modal } from 'mdbreact';
import {Tabs, Tab} from 'react-bootstrap-tabs';

class SignUp extends React.Component  {
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
      <div style= {{background: 'linear-gradient(to bottom, white, #C0C0C0)', padding:'4%', paddingTop: '10%'}}>
            <Modal style={{paddingTop: '35px'}} isOpen={this.state.modal} toggle={this.toggle}>
              <Card>
                <Tabs headerStyle={{fontSize:'20px', fontWeight: 'bold', color: 'black'}} className="nav-justified" activeHeaderStyle={{backgroundColor: '#000', color:'white'}}>  
                  <Tab label="Sign Up">
                    <CardBody>
                    <div className="grey-text">
                    <p className="font-small d-flex justify-content-end pb-3">Are you an Advocate?<a href="sign-up" className="black-text ml-1"> Register Here</a></p>
                      <Input label="Your name" icon="user" group type="text" validate error="wrong" success="right"/>
                      <Input label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                      <Input label="Your password" icon="lock" group type="password" validate/>
                      <Input label="Confirm password" icon="lock" group type="password" validate/>
                    </div>
                    <div className="text-center mb-3">
                      <Button className="btn-block rounded z-depth-1a" >Register</Button>
                    </div>
                    </CardBody>
                  </Tab>
                </Tabs>
              </Card>
            </Modal>  
      </div>
    );
  }
};

export default SignUp;


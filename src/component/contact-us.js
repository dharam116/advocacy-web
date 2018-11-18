import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';
import { Container, Row, Col, Card, CardBody, Fa, Button, Input, Animation } from 'mdbreact';
import '../App.css'

class ContactPage extends Component {
  constructor(props) {
    super(props);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  render() {
    return(
        <div style= {{padding: '2%', background: 'linear-gradient(to bottom, white, #C0C0C0)', paddingTop: '9%'}}>
          <Container>
          <Animation type="flipInX" duration="2s">
            <h2 className="text-center font-weight-bold"> Contact us </h2><h6 className="text-center font-weight-bold my-4">We'd love to hear from you!'..</h6>
          </Animation><Divider />
             <section className="my-5">
              <Row>
                <Col lg="8" className="lg-0 mb-4">
                  <Card>
                    <CardBody>
                      <div className="form-header black rounded">
                        <h3 className="mt-2"><Fa icon="envelope" /> Write to us:</h3>
                      </div>
                      <Row>
                      <Col md="6">
                        <div className="md-form mb-0">
                          <Input type="text" id="form-contact-name" label="Your name"/>
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="md-form mb-0">
                          <Input type="text" id="form-contact-email" label="Your email"/>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <div className="md-form mb-0">
                          <Input type="text" id="form-contact-phone" label="Your phone"/>
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="md-form mb-0">
                          <Input type="text" id="form-contact-company" label="Your Subject"/>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <div className="md-form mb-0">
                          <Input type="textarea" id="form-contact-message" label="Your message"/>
                          <Button tag="a" floating color="black" size="lg">
                            <Fa icon="send-o"/>
                          </Button>
                        </div>
                      </Col>
                    </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4">
                <Card>
                  <CardBody className="contact text-center h-100">
                  <h5 className="form-header black rounded mt-2">Contact information</h5>
                    <ul className="h6-responsive text-lg-left list-unstyled ml-4 ">
                      <li>
                        <p><Fa icon="map-marker" className="pr-2"/>Suite #04, H140, H Block,<br/> Sector 63, Noida, Uttar Pradesh <br/>201301</p>
                      </li>
                      <li>
                        <p><Fa icon="phone" className="pr-2"/>+91 99999999999</p>
                      </li>
                      <li>
                        <p><Fa icon="globe " className="pr-2"/><a href="http://www.iincore.com/">iincore.com</a></p>
                      </li>
                    </ul>
                    <hr className="my-4"/>
                    <ul className="list-inline text-center list-unstyled">
                      <li className="list-inline-item">
                        <a className="p-2 fa-lg w-ic f5">
                          <Fa icon="twitter"/>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="p-2 fa-lg w-ic f6">
                          <Fa icon="linkedin"/>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="p-2 fa-lg w-ic f7">
                          <Fa icon="instagram"/>
                        </a>
                      </li>
                    </ul>
                  </CardBody> 
                </Card>             
                </Col>
              </Row>
              <hr className="hr-light my-4"/>
              <div id="map-container" className="rounded z-depth-1-half map-container" style={{height: '390px'}}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d56057.974726326276!2d77.3433363!3d28.5810688!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff7e875888d%3A0xaf8b9224a95e0874!2siincore+software+systems+pvt+ltd+Rx!5e0!3m2!1sen!2sin!4v1535561079305" width="100%" height="100%" frameBorder="0" style={{border:0}} title="maps"></iframe>
              </div>
            </section>
          </Container>
        </div>
    );
  };
}

export default ContactPage;
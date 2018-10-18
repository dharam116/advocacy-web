import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';
import { Carousel, CarouselInner, CarouselItem, Container, Row, Col, Card, CardImage, CardBody, CardText, Animation } from 'mdbreact';
import '../App.css';

class Referral extends Component {
  constructor(props) {
    super(props);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render(){
    return(
      <div style={{ background : 'linear-gradient(to bottom, white, #D3D3D3)', padding: '4%', paddingTop: '10%'}}>
        <Container>
          <Animation type="tada" duration="2s">
          <h2 className="text-center font-weight-bold">Referrals</h2><h6 className="text-center font-weight-bold my-4">These are also the best law firms...</h6>
          </Animation> <Divider />
          <Carousel
            activeItem={1}
            length={2}
            slide={true}
            showControls={true}
            showIndicators={false}
            multiItem >
            <CarouselInner>
              <Row>
                <CarouselItem itemId="1">
                <Row>
                  <Col sm="4">
                    <Card className="mb-2" style={{height:'100%', padding:'7%', background: 'linear-gradient(to bottom, white, #D3D3D3)'}}>
                    <CardImage className="img-fluid" src="http://avalaw.in/wp-content/themes/ava/images/ava.gif" />
                      <CardBody>
                        <h6><b>AVA</b><br/>Advocates & Legal Consultants</h6>
                        <CardText>Founded in 2002, AVA Law Associates has rapidly grown and is today a full-service legal firm with several experts on board. Being relatively new, AVA brings forth a work ethic that is singled-mindedly customer-centric. We work by a customer-first philosophy and strongly believe that our success definitely & discernibly comes through our clients.</CardText>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col sm="4" className="clearfix d-none d-md-block">
                    <Card className="mb-2" style={{height:'100%', padding:'7%', background: 'linear-gradient(to bottom, white, #D3D3D3)'}}>
                    <CardImage className="img-fluid" src="http://www.jsalaw.com/wp-content/uploads/2015/09/JSA-Logo.png" />
                      <CardBody>
                        <h6><b>JSA</b><br/>J. Sagar Associates</h6>
                        <CardText>J. Sagar Associates (JSA) is a leading national law firm in India comprising over 300 professionals, with 8 offices across the country. For over two decades, we have provided legal advice and services to international and domestic clients.</CardText>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col sm="4" className="clearfix d-none d-md-block">
                    <Card className="mb-2" style={{height:'100%', padding:'7%', background: 'linear-gradient(to bottom, white, #D3D3D3)'}}>
                    <CardImage className="img-fluid" src="http://www.kochhar.com/images/logo.gif" />
                      <CardBody>
                        <h6><b>Kochhar & Co.</b></h6>
                        <CardText>Kochhar & Co. is one of the leading and largest corporate law firms in India. Kochhar & Co. enjoys the distinction of being the only law firm with a full-service presence in the six (6) prominent cities of India namely: New Delhi, Mumbai, Bangalore, Chennai, Gurgaon and Hyderabad and four overseas offices: Dubai, Singapore, Atlanta, Jeddah (our office in Saudi Arabia is in collaboration with a leading law firm).</CardText>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                </CarouselItem>
              
                <CarouselItem itemId="2">
                  <Row>
                    <Col sm="4">
                      <Card className="mb-2" style={{height:'100%', padding:'7%', background: 'linear-gradient(to bottom, white, #D3D3D3)'}}>
                      <CardImage className="img-fluid" src="http://www.indialaw.in/assets/img/logo.png" />
                        <CardBody>
                          <h6><b>INDIA LAW</b></h6>
                          <CardText>At our firm boundaries hold no challenge. Each of our practise areas are headed by our partners and backed by efficient lawyers across the country. Our foresight in difficult situations has earned us a reputation, anchoring a clientele that includes Fortune 500 companies as well as start-ups. We protect legal rights that transcend boundaries.</CardText>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col sm="4" className="clearfix d-none d-md-block">
                      <Card className="mb-2" style={{height:'100%', padding:'7%', background: 'linear-gradient(to bottom, white, #D3D3D3)'}}>
                      <CardImage className="img-fluid" src="https://www.khaitanco.com/images/logoinsize11.png" />
                        <CardBody>
                          <h6><b>Khaitan & Co</b></h6>
                          <CardText>Khaitan & Co is one of the oldest and largest Indian law firms. Combining a rich heritage of over a hundred years with a modern and cutting-edge practice, the Firm offers full service legal solutions to our domestic and international clients. The Firm’s endeavour has been to be proactive and exceed client expectations. We take pride in our approach to work that focuses on understanding clients’ business and anticipating their legal needs (present and future) and provide pragmatic and commercial solutions.</CardText>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col sm="4" className="clearfix d-none d-md-block">
                      <Card className="mb-2" style={{height:'100%', padding:'7%', background: 'linear-gradient(to bottom, white, #D3D3D3)'}}>
                      <CardImage className="img-fluid" src="http://www.snrlaw.in/wp-content/uploads/2016/04/logo.png" />
                        <CardBody>
                          <h6><b>S&R ASSOCIATES</b></h6>
                          <CardText>S&R Associates is a law firm with offices in New Delhi and Mumbai providing legal services to Indian and international clients.Our lawyers are admitted to practice in India and many have previously practiced law in other jurisdictions, including in the United States, the United Kingdom and Singapore. As a result, we offer our clients a unique combination of Indian law expertise coupled with international quality legal services.</CardText>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </CarouselItem>
              </Row>
            </CarouselInner>
          </Carousel>
        </Container>
      </div>
    );
  }
}

export default Referral;
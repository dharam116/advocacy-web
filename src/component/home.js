import React, { Component } from 'react' ;
import  { Carousel, CarouselInner, CarouselItem, View, Fa, Mask, Container, Row, Col, Animation } from 'mdbreact';
import { Avatar} from '@material-ui/core';
import '../App.css';

class Home extends Component {
  constructor(props) {
    super(props);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render(){
    return(
      <div style={{paddingTop: '65px'}}>

      <div id="apppage">
        <View>
          <Mask className="d-flex justify-content-center align-items-center gradient">
          <Container>
            <Row>
              <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                <Animation type="flipInX" duration="2s"><h1 className="font-weight-bold mt-sm-5">We Believe in JUSTICE!!</h1></Animation>
                <hr className="hr-light"/>
                <h6 className="mb-4">Advocacy in all its forms seeks to ensure that people, particularly those who are most vulnerable in society, are able to: Have their voice heard on issues that are important to them. Defend and safeguard their rights. Have their views and wishes genuinely considered when decisions are being made about their lives.</h6>
              </div>
              <Col md="6" xl="5" className="mt-xl-5">
                <img src="https://steemitimages.com/DQmUHTLCqQnYeoXyzjUChmsixsSReqRWJJJqeKZoWi3mwTM/about_law.png" alt="title " className="img-fluid"/>
              </Col>
              </Row>
            </Container>
          </Mask>
        </View>

        <div className="jumbotron text-center" style= {{padding: '5%', background: 'linear-gradient(to bottom, white, #DCDCDC)'}}> 
              <div className=" col-lg-12">
                <h2 className="text-dark"><b>WELCOME TO THE ADVOCATE</b></h2><h5>We are a full service Law firm.</h5>
                <hr width= "5%" color="darkgrey" />
              </div>
              <p>An advocate is a professional in the field of law. Different countries legal systems use the term with somewhat differing meanings. The broad equivalent in many English law-based jurisdictions could be a barrister or a solicitor. However, in Scottish, South African, Italian, French, Spanish, Portuguese, Scandinavian, Polish, South Asian and South American jurisdictions, "advocate" indicates a lawyer of superior classification. "Advocate" is in some languages an honorific for lawyers, such as "Adv. Sir Alberico Gentili". "Advocate" also has the everyday meaning of speaking out to help someone else, such as patient advocacy or the support expected from an elected politician; those senses are not covered by this article.</p>
        </div>

       <div style={{textAlign: 'center', padding: '3%', background: 'linear-gradient(to bottom, white, #DCDCDC)'}}>
          <div className=" col-lg-12 text-center">
            <h2 className="text-dark my-4"><b>THIS IS WHAT WE ARE GOOD AT</b></h2>
            <hr width= "5%" color="darkgrey" />
          </div>
          <Container className="service">
          <Row>
            <Col md="3">
              <Animation reveal type="slideInUp">
                <center><Avatar style={{width: '70px', height: '70px', margin: '25px'}} src="http://icons.iconarchive.com/icons/icons8/windows-8/256/Users-Group-icon.png" alt="Sample project image" className="img-fluid rounded" /></center>
                <h4>Employment law</h4>
              </Animation>
            </Col>
            <Col md="3">
              <Animation reveal type="slideInLeft">
                <center><Avatar style={{width: '70px', height: '70px', margin: '25px'}} src="https://cdn2.iconfinder.com/data/icons/intimate-violence-during-pregnancy/252/woman-abuse-001-512.png" alt="Sample project image" className="img-fluid rounded" /></center>
                <h4>Domestic violence</h4>
              </Animation>
            </Col>
            <Col md="3">
              <Animation reveal type="slideInDown">
                <center><Avatar style={{width: '70px', height: '70px', margin: '25px'}} src="https://cdn0.iconfinder.com/data/icons/law-crime-and-justice-1/32/detective-crime-criminal-investigate-investigation-suspect-gangster-512.png" alt="Sample project image" className="img-fluid rounded" /></center>
                <h4>Federal crimes</h4>
              </Animation>
            </Col>
            <Col md="3">
              <Animation reveal type="slideInDown">
                <center><Avatar style={{width: '70px', height: '70px', margin: '25px'}} src="https://cdn0.iconfinder.com/data/icons/pixel-perfect-at-24px-volume-6/24/2170-512.png" alt="Sample project image" className="img-fluid rounded" /></center>
                <h4>Criminal Law</h4>
              </Animation>
            </Col>
          </Row>
          <Row style={{marginTop: '25px'}} >
            <Col md="3">
              <Animation reveal type="slideInRight">
                <center><Avatar style={{width: '70px', height: '70px', margin: '25px'}} src="https://cdn3.iconfinder.com/data/icons/hr-and-recruitment/100/staff_insurance_security_protection_employee-512.png" alt="Sample project image" className="img-fluid rounded" /></center>
                <h4>Securities law</h4>
              </Animation>
            </Col>
            <Col md="3">
              <Animation reveal type="slideInRight">
                <center><Avatar style={{width: '70px', height: '70px', margin: '25px'}} src="https://image.flaticon.com/icons/png/512/58/58038.png" alt="Sample project image" className="img-fluid rounded" /></center>
                <h4>Family Law</h4>
              </Animation>
            </Col>
            <Col md="3">
              <Animation reveal type="slideInRight">
                <center><Avatar style={{width: '70px', height: '70px', margin: '25px'}} src="http://www.negenweb.net/NEHall/genealogy+history/assets/img/tax.png" alt="Sample project image" className="img-fluid rounded" /></center>
                <h4>Tax</h4>
              </Animation>
            </Col>
            <Col md="3">
              <Animation reveal type="slideInRight">
                <center><Avatar style={{width: '70px', height: '70px', margin: '25px'}} src="https://www.ertsunkszot.hu/wp-content/uploads/2016/06/home-insurance-symbol-of-a-house-on-hands.png" alt="Sample project image" className="img-fluid rounded" /></center>
                <h4>Insurance Law</h4>
              </Animation>
            </Col>
          </Row>
          </Container>
        </div>

        <div style={{textAlign: 'center', padding: '3%', background: 'linear-gradient(to bottom, white, #A9A9A9)'}}>
          <Animation reveal type="slideInUp">
            <b>MOST TRUTHFUL</b><h2 className="text-dark my-4"><b>TESTIMONIALS</b></h2>
          </Animation>
          <hr width= "5%" color="darkgrey" />
          
          <Carousel
            activeItem={1}
            length={2}
            interval={false}
            showControls={true}
            showIndicators={false}
            className="no-flex">
            <Container>
              <Animation reveal type="slideInLeft">
                <CarouselInner style={{padding: '2%', paddingLeft: '5%', paddingRight : '5%'}}>
                  <CarouselItem itemId="1">
                      <View>
                        <center><Avatar style={{width: '100px', height: '100px', margin: '20px'}} src="http://icons.iconarchive.com/icons/icons8/windows-8/512/Users-Guest-icon.png" alt="The AVA" className="rounded-circle img-fluid" /></center>
                        <h5><b><b>AVA</b> Advocates & Legal Consultants</b></h5><br/>
                        <p><Fa icon="quote-left"></Fa>Founded in 2002, AVA Law Associates has rapidly grown and is today a full-service legal firm with several experts on board. Being relatively new, AVA brings forth a work ethic that is singled-mindedly customer-centric. We work by a customer-first philosophy and strongly believe that our success definitely & discernibly comes through our clients.</p>
                        <p>And it is through the hard work and commitment of our 20 strong associates that we strive for customer success. So whether it is a transactional, litigation-related, corporate matter or any regulatory area, AVA’s practices have been created to understand the customer’s needs, work towards a solution and ensure success! What’s more, unlike our competition, our solutions are practical, favorable, proactive and almost always cost effective, making it easier for you to work with us. It is our client-based solutions approach that has enabled us to work with large organizations, leading institutions as well as renowned individuals.</p>
                      </View>
                    </CarouselItem>
                    <CarouselItem itemId="2">
                      <View>
                        <center><Avatar style={{width: '100px', height: '100px', margin: '20px'}} src="http://icons.iconarchive.com/icons/icons8/windows-8/512/Users-Guest-icon.png" alt="G.N.Sharma Advocate" className="rounded-circle img-fluid" /></center>
                      <h5><b>G.N.Sharma Advocate</b></h5><br/>
                        <p><Fa icon="quote-left"></Fa>G.N. Sharma & Associate is a dynamic and leading generation law firm, established in 1987 in Jaipur, the Pink city of India. G.N. Sharma & Associate is a law firm that focuses on core areas of Value Added Tax, Central Sales Tax, Income Tax as its Areas of Practice since inception, and Service Tax Law after it’s introduction, the firm has distinguished itself by being Focused, Accessible, Responsive and Adaptable.</p>
                        <p>Our Values, quick turnaround time, experience in handling complex cases, realistic team of lawyers and policy of devoting time and attention to every matter are some of the other attributes that distinguish the firm. Firm’s sharp growth and excellent reputation has been achieved in a short span of time and bears testimony to the firms high standards of legal work and client service.</p>
                      </View>
                    </CarouselItem>
                </CarouselInner>
              </Animation>
            </Container>
          </Carousel>
        </div>
      </div>
    </div>
    );
  }
}

export default Home;
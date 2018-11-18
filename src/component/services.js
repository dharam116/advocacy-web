import React, {Component} from 'react'
import {Row, Col, Carousel, CarouselItem, CarouselInner, Container, Animation} from 'mdbreact'
import {Avatar, Divider} from '@material-ui/core'

class Service extends Component {
  constructor(props) {
    super(props);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    return(
      <div>
        <div style={{textAlign: 'center', padding: '4%', background: 'linear-gradient(to bottom, white, #D3D3D3)', paddingTop: '10%'}}>
          <Animation type="flipInX" duration="3s">
            <h2 className="font-weight-bold">THIS IS WHAT WE ARE GOOD AT</h2><h5 className="font-weight-bold my-4">We are serving!!!!</h5>
          </Animation><Divider />
          <Carousel
            activeItem={1}
            length={2}
            slide={true}
            showControls={true}
            showIndicators={false}
            multiItem >
          <CarouselInner>
          <Row className="services">
            <CarouselItem itemId="1">
            <Container>
              <Row>
                <Col md="4">
                  <center><Avatar style={{width: '70px', height: '70px', margin: '20px'}} src="http://icons.iconarchive.com/icons/icons8/windows-8/256/Users-Group-icon.png" alt="Sample project image" className="img-fluid rounded" /></center>
                  <h2>Employment law</h2>
                  <p>Know your rights. We will take care about the rest. Employment law governs the rights and duties between employers and workers.</p>
                </Col>
                <Col md="4" className="clearfix d-none d-md-block">
                  <center><Avatar style={{width: '70px', height: '70px', margin: '20px'}} src="https://cdn2.iconfinder.com/data/icons/intimate-violence-during-pregnancy/252/woman-abuse-001-512.png" alt="Sample project image" className="img-fluid rounded" /></center>
                  <h2>Domestic violence</h2>
                  <p>Don’t be scared to step out. Contact our law team. Domestic violence, or family violence, is violent, abusive or intimidating behaviour in a relationship. </p>
                </Col>
                <Col md="4" className="clearfix d-none d-md-block">
                  <center><Avatar style={{width: '70px', height: '70px', margin: '20px'}} src="https://cdn3.iconfinder.com/data/icons/hr-and-recruitment/100/staff_insurance_security_protection_employee-512.png" alt="Sample project image" className="img-fluid rounded" /></center>
                  <h2>Securities law</h2>
                  <p>A security is an investment in a business. Security Law is the body of legal rules, codes, and standards that require us to protect that systems that process it, from unauthorized access. </p>
                </Col>
              </Row>
              </Container>
            </CarouselItem>
            <CarouselItem itemId="2">
              <Container>
              <Row>
                <Col md="4">
                  <center><Avatar style={{width: '70px', height: '70px', margin: '20px'}} src="https://cdn0.iconfinder.com/data/icons/law-crime-and-justice-1/32/detective-crime-criminal-investigate-investigation-suspect-gangster-512.png" alt="Sample project image" className="img-fluid rounded" /></center>
                  <h2>Federal crimes</h2>
                  <p>Meet the best experts in the federal crimes field. A federal crime is one that has been made illegal by federal legislation.</p>
                </Col>
                <Col md="4" className="clearfix d-none d-md-block">
                  <center><Avatar style={{width: '70px', height: '70px', margin: '20px'}} src="http://www.negenweb.net/NEHall/genealogy+history/assets/img/tax.png" alt="Sample project image" className="img-fluid rounded" /></center>
                  <h2>Tax</h2>
                  <p>Tax law is an area of legal study dealing with the common-law, tax treaty, and regulatory rules that constitute the law applicable to taxation</p>
                </Col>
                <Col md="4" className="clearfix d-none d-md-block">
                  <center><Avatar style={{width: '70px', height: '70px', margin: '20px'}} src="https://www.ertsunkszot.hu/wp-content/uploads/2016/06/home-insurance-symbol-of-a-house-on-hands.png" alt="Sample project image" className="img-fluid rounded" /></center>
                  <h2>Insurance Law</h2>
                  <p>Insurance law is the practice of law surrounding insurance, including insurance policies and claims.</p>
                </Col>
              </Row>
              </Container>
            </CarouselItem>
          </Row>
          </CarouselInner>
        </Carousel>
        </div>
      </div>
    );
  }
}

export default Service;         
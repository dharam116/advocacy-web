import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import Divider from '@material-ui/core/Divider';
import { Container, Row, Col, View, Mask, Animation } from 'mdbreact';
import '../App.css';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
 
const images = [
  'https://mdbootstrap.com/img/Photos/Others/images/82.jpg',
  'https://mdbootstrap.com/img/Photos/Others/img%20(29).jpg',
  'https://mdbootstrap.com/img/Photos/Others/images/49.jpg',
  'https://mdbootstrap.com/img/Photos/Others/images/86.jpg',
  'https://mdbootstrap.com/img/Photos/Others/images/86.jpg',
  'https://mdbootstrap.com/img/Photos/Others/images/48.jpg',
  'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(56).jpg',
  'https://mdbootstrap.com/img/Photos/Others/img%20(29).jpg',
];
 
export default class People extends Component {
  constructor(props) {
    super(props);

    window.scrollTo({
      top: 0,
      behaviour: "smooth"  
    }); 
 
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }
 
  render() {
    const { photoIndex, isOpen } = this.state;
 
    return (
        <div style={{ background : 'linear-gradient(to bottom, white, #D3D3D3)', padding: '4%', paddingTop: '8%'}}>
        <Container className="mt-5">
        <Animation type="rubberBand" duration="2s">
        <h2 className="text-center font-weight-bold">Our Team</h2><h6 className="text-center font-weight-bold my-4">This is our best Team.. The people work with us.</h6>
        </Animation><Divider />
          <div className="mdb-lightbox" style={{paddingTop: '2%', margin: '3%'}}>
          <Row>
            <Col md="3" onClick={() => this.setState({ photoIndex: 0, isOpen: true })}>
              <Animation type="bounceInUp">
                <View hover rounded className="view z-depth-1-half mb-4">
                  <img className="img img-fluid " src="https://mdbootstrap.com/img/Photos/Others/images/82.jpg" alt="1"/>
                  <div className="middle">
                    <div className="text"> Name:'' <br /> Position:'' </div>
                  </div>
                  <Mask overlay="white-light" className="waves-light"/>
                </View>
              </Animation>
            </Col>
            <Col md="3" onClick={() => this.setState({ photoIndex: 1, isOpen: true })}>
              <Animation type="tada">
                <View hover rounded className="z-depth-1-half mb-4">
                  <img className="img img-fluid" src="https://mdbootstrap.com/img/Photos/Others/img%20(29).jpg" alt="2"/>
                  <div className="middle">
                    <div className="text"> Name:'' <br /> Position:'' </div>
                  </div>
                  <Mask overlay="white-light" className="waves-light"/>
                </View>
              </Animation>
            </Col>
            <Col md="3" onClick={() => this.setState({ photoIndex: 2, isOpen: true })}>
              <Animation type="rotateIn">
                <View  hover rounded className="z-depth-1-half mb-4">
                  <img className="img img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg" alt="3"/>
                  <div className="middle">
                    <div className="text"> Name:'' <br /> Position:'' </div>
                  </div>
                  <Mask overlay="white-light" className="waves-light"/>
                </View>
              </Animation>
            </Col>
            <Col md="3" onClick={() => this.setState({ photoIndex: 3, isOpen: true })}>
              <Animation type="fadeInLeft">
                <View hover rounded className="z-depth-1-half mb-4">
                  <img className="img img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/86.jpg" alt="4"/>
                  <div className="middle">
                    <div className="text"> Name:'' <br /> Position:'' </div>
                  </div>
                  <Mask overlay="white-light" className="waves-light"/>
                </View>
              </Animation>
            </Col>
            <Col md="4" onClick={() => this.setState({ photoIndex: 4, isOpen: true })}>
              <Animation type="fadeInRight">
                <View hover rounded className="z-depth-1-half mb-4">
                  <img className="img img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/86.jpg" alt="5"/>
                  <div className="middle">
                    <div className="text"> Name:'' <br /> Position:'' </div>
                  </div>
                  <Mask overlay="white-light" className="waves-light"/>
                </View>
              </Animation>
            </Col>
            <Col md="4" onClick={() => this.setState({ photoIndex: 5, isOpen: true })}>
              <Animation type="fadeInUp">
                <View hover rounded className="z-depth-1-half mb-4">
                  <img className="img img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/48.jpg" alt="6"/>
                  <div className="middle">
                    <div className="text"> Name:'' <br /> Position:'' </div>
                  </div>
                  <Mask overlay="white-light" className="waves-light"/>
                </View>
              </Animation>
            </Col>
            <Col md="4" onClick={() => this.setState({ photoIndex: 6, isOpen: true })}>
              <Animation type="rollIn">
                <View hover rounded className="z-depth-1-half mb-4">
                  <img className="img img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(56).jpg" alt="7"/>
                  <div className="middle">
                    <div className="text"> Name:'' <br /> Position:'' </div>
                  </div>
                  <Mask overlay="white-light" className="waves-light"/>
                </View>
              </Animation>
            </Col>
            <Col md="3" onClick={() => this.setState({ photoIndex: 7, isOpen: true })}>
              <Animation reveal type="bounceInUp">
                <View hover rounded className="z-depth-1-half mb-4">
                  <img className="img img-fluid" src="https://mdbootstrap.com/img/Photos/Others/img%20(29).jpg" alt="8"/>
                  <div className="middle">
                    <div className="text"> Name:'' <br /> Position:'' </div>
                  </div>
                  <Mask overlay="white-light" className="waves-light"/>
                </View>
              </Animation>
            </Col>
            <Col md="3" onClick={() => this.setState({ photoIndex: 5, isOpen: true })}>
              <Animation reveal type="fadeInUp">
                <View hover rounded className="z-depth-1-half mb-4">
                  <img className="img img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/48.jpg" alt="9"/>
                  <div className="middle">
                    <div className="text"> Name:'' <br /> Position:'' </div>
                  </div>
                  <Mask overlay="white-light" className="waves-light"/>
                </View>
              </Animation>
            </Col>
            <Col md="3" onClick={() => this.setState({ photoIndex: 4, isOpen: true })}>
              <Animation reveal type="fadeInRight">
                <View hover rounded className="z-depth-1-half mb-4">
                  <img className="img img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/86.jpg" alt="10"/>
                  <div className="middle">
                    <div className="text"> Name:'' <br /> Position:'' </div>
                  </div>
                  <Mask overlay="white-light" className="waves-light"/>
                </View>
              </Animation>
            </Col>
            <Col md="3" onClick={() => this.setState({ photoIndex: 0, isOpen: true })}>
              <Animation reveal type="bounceInUp">
                <View hover rounded className="z-depth-1-half mb-4">
                  <img className="img img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/82.jpg" alt="11"/>
                  <div className="middle">
                    <div className="text"> Name:'' <br /> Position:'' </div>
                  </div>
                  <Mask overlay="white-light" className="waves-light"/>
                </View>
              </Animation>
            </Col>
          </Row>
        </div>
        </Container>
 
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            } />
        )}
      </div>
    );
  }
}
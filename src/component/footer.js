import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';
import '../App.css';

class FooterPage extends React.Component {
    render(){
        return(
            <Footer color="stylish-color-dark" className="font-small pt-4 mt-4">
                <Container fluid className="text-center text-md-left">
                    <Row className="text-md-left mt-3 pb-3 pl-5">
                        <Col md="3" lg="3" xl="3" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Lawyers</h6>
                            <ul className="list-unstyled">
                                <li><a href="#">Lawyers in New Delhi</a></li>
                                <li><a href="#">Lawyers in Bangalore</a></li>
                                <li><a href="#">Lawyers in Hyderabad</a></li>
                                <li><a href="#">Lawyers in Mumbai</a></li>
                                <li><a href="#">Lawyers in Kolkata</a></li>
                                <li><a href="#">Lawyers in Noida</a></li>
                                <li><a href="#">Lawyers in Allahabad</a></li>
                                <li><a href="#">More lawyers</a></li>
                            </ul>

                        </Col>
                        <hr className="w-100 clearfix d-md-none"/>
                        <Col md="3" lg="3" xl="3" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Divorce Lawyers</h6>
                            <ul className="list-unstyled">
                                <li><a href="#">Divorce lawyers in New Delhi</a></li>
                                <li><a href="#">Divorce lawyers in Bangalore</a></li>
                                <li><a href="#">Divorce lawyers in Hyderabad</a></li>
                                <li><a href="#">Divorce lawyers in Mumbai</a></li>
                                <li><a href="#">Divorce lawyers in Kolkata</a></li>
                                <li><a href="#">Divorce lawyers in Noida</a></li>
                                <li><a href="#">Divorce lawyers in Allahabad</a></li>
                                <li><a href="#">More divorce lawyers</a></li>
                            </ul>

                        </Col>
                        <hr className="w-100 clearfix d-md-none"/>
                        <Col md="3" lg="3" xl="3" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Property Lawyers</h6>
                            <ul className="list-unstyled">
                                <li><a href="#">Property lawyers in New Delhi</a></li>
                                <li><a href="#">Property lawyers in Bangalore</a></li>
                                <li><a href="#">Property lawyers in Hyderabad</a></li>
                                <li><a href="#">Property lawyers in Mumbai</a></li>
                                <li><a href="#">Property lawyers in Kolkata</a></li>
                                <li><a href="#">Property lawyers in Noida</a></li>
                                <li><a href="#">Property lawyers in Allahabad</a></li>
                                <li><a href="#">More property lawyers</a></li>
                            </ul>

                        </Col>
                        <hr className="w-100 clearfix d-md-none"/>
                        <Col md="3" lg="3" xl="3" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Indian Laws</h6>
                            <ul className="list-unstyled">
                                <li><a href="#">Indian Penal Code</a></li>
                                <li><a href="#">Hindu Marriage Act</a></li>
                                <li><a href="#">Special Marriages Act</a></li>
                                <li><a href="#">Hindu Succession Act</a></li>
                                <li><a href="#">Criminal Procedure Code</a></li>
                                <li><a href="#">Indian Divorce Act</a></li>
                                <li><a href="#">Consumer Protection Act</a></li>
                                <li><a href="#">More Indian laws</a></li>
                            </ul>

                        </Col>
                    </Row>
                    <hr/>
                    <Row className="d-flex text-left align-items-center">
                        <Col md="8" lg="8">
                            <Container fluid>
                                &copy; {(new Date().getFullYear())} Copyright : Advocate pvt ltd. All rights reserved.
                            </Container>
                            
                        </Col>
                        <Col md="4" lg="4" className="ml-lg-0">
                            <div className="text-center text-md-right">
                                <ul className="list-unstyled list-inline">
                                    <li className="list-inline-item"><a className="btn-floating btn-sm rgba-white-slight mx-1"><i className="fa f1 f1 fa-facebook"></i></a></li>
                                    <li className="list-inline-item"><a className="btn-floating btn-sm rgba-white-slight mx-1"><i className="fa f2 fa-twitter"></i></a></li>
                                    <li className="list-inline-item"><a className="btn-floating btn-sm rgba-white-slight mx-1"><i className="fa f3 fa-google-plus"></i></a></li>
                                    <li className="list-inline-item"><a className="btn-floating btn-sm rgba-white-slight mx-1"><i className="fa f4 fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Footer>
        );
    }
}

export default FooterPage;
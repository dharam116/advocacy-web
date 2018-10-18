import React, {Component} from 'react';
import { Container, Row, Col, Mask, View} from 'mdbreact';
import '../App.css';

class AboutUs extends Component {
    constructor(props) {
    super(props);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  
  render() {
  return(
  	<div style={{ background : 'linear-gradient(to bottom, white, #D3D3D3)', padding: '4%', paddingTop: '10%'}}>
    <Container>
      <h1 className="font-weight-bold my-4">About Us</h1>
      <p className="text-left h6-responsive mb-5">A law firm is a business entity formed by one or more lawyers to engage in the practice of law. The primary service rendered by a law firm is to advise clients (individuals or corporations) about their legal rights and responsibilities, and to represent clients in civil or criminal cases, business transactions, and other matters in which legal advice and other assistance are sought.</p>
      <Row>
        <Col lg="4">
          <View className="rounded mb-lg-0 mb-4 beffect">
            <img className="img-fluid " src="http://www.find-an-agent.net/wp-content/uploads/2016/05/law-guide_book.png" alt="Law"/>
            <a><Mask overlay="white-slight"/></a>
          </View>
        </Col>
        <Col lg="8">
            <h3 className="font-weight-bold mb-3 p-0"><strong>Law</strong></h3>
            <p>Law is a system of rules that are created and enforced through social or governmental institutions to regulate behavior.[2] Law is a system that regulates and ensures that individuals or a community adhere to the will of the state. State-enforced laws can be made by a collective legislature or by a single legislator, resulting in statutes, by the executive through decrees and regulations, or established by judges through precedent, normally in common law jurisdictions. Private individuals can create legally binding contracts, including arbitration agreements that may elect to accept alternative arbitration to the normal court process. The formation of laws themselves may be influenced by a constitution, written or tacit, and the rights encoded therein. The law shapes politics, economics, history and society in various ways and serves as a mediator of relations between people.</p>
        </Col>
      </Row>
      <hr className="my-5"/>
      <Row>
        <Col lg="8">
          <h3 className="font-weight-bold mb-3 p-0"><strong>Tax Law</strong></h3>
          <p>Tax law is an area of legal study dealing with the constitutional, common-law, statutory, tax treaty, and regulatory rules that constitute the law applicable to taxation.</p>
          <p>A tax is a charge by the government on the income of an individual, corporation or trust, as well as the value of an estate or gift. There are also other forms of taxes, like consumer sales taxes, use taxes and real estate taxes. The objective in assessing tax is to generate revenue to be used for the needs of the public. A tax is not a voluntary payment but an enforced contribution exacted pursuant to legislative authority.</p>
        </Col>
        <Col lg="4">
          <View className="rounded mb-lg-0 mb-4 beffect" >
            <img className="img-fluid" src="http://pluspng.com/img-png/tax-png-picture-png-image-275.png" alt="Tax Law"/>
            <a><Mask overlay="white-slight"/></a>
          </View>
        </Col>
      </Row>
      <hr className="my-5"/>
      <Row>
        <Col lg="4">
          <View className="rounded mb-lg-0 mb-4 beffect" >
            <img className="img-fluid" src="https://qph.fs.quoracdn.net/main-qimg-c116fae6b5f128173b3b51f48028bd6c" alt="Criminal Law"/>
            <a><Mask overlay="white-slight"/></a>
          </View>
        </Col>
        <Col lg="8">
            <h3 className="font-weight-bold mb-3 p-0"><strong>Criminal Law</strong></h3>
            <p>Criminal law is the body of law that relates to crime. It proscribes conduct perceived as threatening, harmful, or otherwise endangering to the property, health, safety, and moral welfare of people inclusive of ones self. Most criminal law is established by statute, which is to say that the laws are enacted by a legislature. It includes the punishment of people who violate these laws. Criminal law varies according to jurisdiction, and differs from civil law, where emphasis is more on dispute resolution and victim compensation than on punishment. Criminal procedure is a formalized official activity that authenticates the fact of commission of a crime and authorizes punitive treatment of the offender. These are at best core definitions; they do not comprehend all legal systems, all stages in the development of a legal system, or all elements within a given legal system.</p>
        </Col>
      </Row>
    </Container>
    </div>
  );
  }
}
export default AboutUs;
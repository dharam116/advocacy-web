import React, {Component} from 'react';
import {Container} from 'mdbreact';

class History extends Component {
	constructor(props) {
	    super(props);
	    window.scrollTo({
	      top: 0,
	      behavior: "smooth"
	    });
  	}
  render() {
  return(
  	<div style={{background : 'linear-gradient(to bottom, white, #D3D3D3)', padding: '4%', paddingTop: '10%'}}>
	    <Container>
	      <h3 className="font-weight-bold my-4">Brief History of Law in India</h3>
	      <p>Law in India has evolved from religious prescription to the current constitutional and legal system we have today, traversing through secular legal systems and the common law.</p>
	      <p>India has a recorded legal history starting from the Vedic ages and some sort of civil law system may have been in place during the Bronze Age and the Indus Valley civilization. Law as a matter of religious prescriptions and philosophical discourse has an illustrious history in India. Emanating from the Vedas, the Upanishads and other religious texts, it was a fertile field enriched by practitioners from different Hindu philosophical schools and later by Jains and Buddhists.</p>
	      <p>Secular law in India varied widely from region to region and from ruler to ruler. Court systems for civil and criminal matters were essential features of many ruling dynasties of ancient India. Excellent secular court systems existed under the Mauryas (321-185 BCE) and the Mughals (16th – 19th centuries) with the latter giving way to the current common law system</p>
	      
	      <h6 className="font-weight-bold my-4">Law in British-ruled India</h6>
	      <p>The common law system – a system of law based on recorded judicial precedents- came to India with the British East India Company.  The company was granted charter by King George I in 1726 to establish “Mayor’s Courts” in Madras, Bombay and Calcutta (now Chennai, Mumbai and Kolkata respectively). Judicial functions of the company expanded substantially after its victory in Battle of Plassey and by 1772 company’s courts expanded out from the three major cities. In the process, the company slowly replaced the existing Mughal legal system in those parts.</p>
	      <p>Following the First War of Independence in 1857, the control of company territories in India passed to the British Crown. Being part of the empire saw the next big shift in the Indian legal system. Supreme courts were established replacing the existing mayoral courts. These courts were converted to the first High Courts through letters of patents authorized by the Indian High Courts Act passed by the British parliament in 1862. Superintendence of lower courts and enrolment of law practitioners were deputed to the respective high courts.</p>
	      <p>During the Raj, the Privy Council acted as the highest court of appeal. Cases before the council were adjudicated by the law lords of the House of Lords. The state sued and was sued in the name of the British sovereign in her capacity as Empress of India.</p>
	      <p>During the shift from Mughal legal system, the advocates under that regimen, “vakils”, too followed suit, though they mostly continued their earlier role as client representatives. The doors of the newly created Supreme Courts were barred to Indian practitioners as right of audience was limited to members of English, Irish and Scottish professional bodies. Subsequent rules and statutes culminating in the Legal Practitioners Act of 1846 which opened up the profession regardless of nationality or religion.</p>
	      
	      <h6 className="font-weight-bold my-4">Law after Independence</h6>
	      <p>At the dawn of independence, the parliament of independent India was the forge where a document that will guide the young nation was being crafted. It will fall on the keen legal mind of B. R. Ambedkar to formulate a constitution for the newly independent nation. The Indian Bar had a role in the Independence movement that can hardly be overstated – that the tallest leaders of the movement across the political spectrum were lawyers is ample proof. The new nation saw its first leader in Jawaharlal Nehru, and a paternal figure in M. K. Gandhi, both exemplary lawyers. Perhaps it is the consequent understanding of law and its relation to society that prompted the founding fathers to devote the energy required to form a Constitution of unprecedented magnitude in both scope and length.</p>
	      <p>The Constitution of India is the guiding light in all matters executive, legislative and judicial in the country. It is extensive and aims to be sensitive. The Constitution turned the direction of system originally introduced for perpetuation of colonial and imperial interests in India, firmly in the direction of social welfare. The Constitution explicitly and through judicial interpretation seeks to empower the weakest members of the society.</p>
	      <p>India has an organic law as consequence of common law system. Through judicial pronouncements and legislative action, this has been fine-tuned for Indian conditions. The Indian legal system’s move towards a social justice paradigm, though undertook independently, can be seen to mirror the changes in other territories with common law system.</p>
	      <p>From an artifice of the colonial masters, the Indian legal system has evolved as an essential ingredient of the world’s largest democracy and a crucial front in the battle to secure constitutional rights for every citizen.</p>
	    </Container>
    </div>
  );
}
}
export default History;
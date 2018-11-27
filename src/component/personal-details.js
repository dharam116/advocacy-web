import React, {Component} from 'react';
import { Container, Row, Col, Input, FormInline} from 'mdbreact';

class PersonalDetails extends Component{
    state = {
        radio: 2
    }
    
    onClick = (nr) => {
        this.setState({
             radio: nr
        });
    }

    render() {
        return (
            <Container>
                <div className="grey-text user" >
                    <Input label="Your name" icon="user" group type="text" validate error="wrong" success="right" required/>
                    <Input label="Father's Name" icon="user" group type="text" validate error="wrong" success="right"/>
                    <Input label="Mobile No." icon="mobile" group type="text" validate error="wrong" success="right" required/>
                    <Input label="E-mail" icon="envelope" group type="email" validate error="wrong" success="right" required/>
                    <Input label="Date Of Birth"  group type="date" validate error="wrong" success="right" required/>
                    <Input label="Address" icon="home" group type="text" validate error="wrong" success="right"/>
                </div>
            </Container>
        );
    }
}

export default PersonalDetails;


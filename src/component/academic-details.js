import React, {Component} from 'react';
import {FormInline, Input, Button} from 'mdbreact';

class AcademicDetails extends Component{
    constructor(props) {
	    super(props);
	    window.scrollTo({
	      top: 0,
	      behavior: "smooth"
	    });
	}

    render (){
        return(
            <div className="grey-text user">
                <label style={{color: 'black', fontWeight: 'bold'}}>Highest Qualification</label>
                <select className="custom-select browser-default" required>
                    <option value="">Select Qualification</option>
                    <option value="1">10</option>
                    <option value="1">12</option>
                    <option value="1">B.A</option>
                    <option value="2">B.Tech</option>
                    <option value="3">B.Com</option>
                    <option value="3">B.Sc</option>
                    <option value="3">B.Ed</option>
                    <option value="3">B.Pharma</option>
                    <option value="3">BBA</option>
                </select>
                <label style={{color: 'black', fontWeight: 'bold', paddingTop: '3%'}}>Board/University</label>
                <select className="custom-select browser-default" required>
                    <option value="">Select</option>
                    <option value="1">CBSE</option>
                    <option value="2">UP</option>
                    <option value="3">A.P.J. Abdul kalam Technical University</option>
                    <option value="3">UPTU</option>
                </select>
                <Input label="CGPA or Percentage" type="text" required />
            </div>
        );
    }
}

export default AcademicDetails;
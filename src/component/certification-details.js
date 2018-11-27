import React, {Component} from 'react';
import {Input, FormInline} from 'mdbreact';

class CertificationDetails extends Component{

    render() {
        return(
            <div className="grey-text user">
                <Input label="Certificate" icon="label" group type="text" />
                <Input label="Description" icon="edit" group type="text" />
                <FormInline><h6 className="pr-5"> Duration </h6> <Input label="From"  group type="date" validate error="wrong" success="right" required/><h6 className="pr-5"> To </h6><Input label="When"  group type="date" validate error="wrong" success="right" required/> </FormInline>
                <div className="custom-file">
                    <input type="file" className="custom-file-input" id="validatedCustomFile" required />
                    <label className="custom-file-label" htmlFor="validatedCustomFile">Choose file...</label>
                </div>
            </div>
        );
    }
}

export default CertificationDetails;
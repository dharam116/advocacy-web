import React, {Component} from 'react';
import { Input, FormInline } from 'mdbreact';

class Experience extends Component {
    render() {
        return(
            <div className="grey-text user">
                <Input label="Experience" icon="label" group type="text" />
                <Input label="Designation" icon="edit" group type="text" />
                <FormInline><h6 className="pr-5"> Duration </h6> <Input label="From"  group type="date" validate error="wrong" success="right" required/><h6 className="pr-5"> To </h6><Input label="When"  group type="date" validate error="wrong" success="right" required/> </FormInline>
                <Input label="Skills Learned" icon="check-circle" group type="select" />
            </div>
        );
    }
}

export default Experience;
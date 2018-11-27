import React, {Component} from 'react'; 
import {Input} from 'mdbreact';

class Skills extends Component {

    render() {
        return (
            <div className="grey-text user">
                <Input label="Key Skills" icon="check-circle" group type="text" required />
            </div>
        );
    }
}

export default Skills;
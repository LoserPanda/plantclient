import React, {Component} from 'react';
import Analytics from './Analytics';
import Sensors from './Sensors';
import Technologies from './Technologies';

class Hype extends Component {


    render() {
        return (
            <div>
                <Analytics/>
                <Sensors/>
                <Technologies/>
            </div>
        )
    }
}

export default Hype;
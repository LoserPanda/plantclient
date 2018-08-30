import React, {Component} from 'react';
import FireApp from '../FireApp'
import Welcome from './Welcome'

class LoginBox extends Component {

    render() {
        return (
            <div>
              <Welcome/>
                <FireApp/>
            </div>
        );
    }
}

export default LoginBox;

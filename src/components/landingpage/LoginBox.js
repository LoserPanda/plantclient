import React, {Component} from 'react';
import FireApp from '../FireApp'
import Welcome from './Welcome'

class LoginBox extends Component {

    render() {
        return (
            <div className="Container">
            <div className="row">
              <div className="col-sm-6">
                <Welcome/>
              </div>
              <div className="col-sm-6">
                <FireApp/>
              </div>
            </div>
            </div>
        );
    }
}

export default LoginBox;

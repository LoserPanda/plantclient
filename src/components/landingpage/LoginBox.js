import React, {Component} from 'react';
import Welcome from './Welcome'
import AuthBox from "./AuthBox";

class LoginBox extends Component {

    render() {
        return (
            <div className="Container">
                <div className="row">
                    <div className="col-sm-6">
                        <Welcome/>
                    </div>
                    <div className="col-sm-6">
                        <AuthBox/>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginBox;

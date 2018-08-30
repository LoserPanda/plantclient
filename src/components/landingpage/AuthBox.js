import React, {Component} from 'react';
import LogInView from "../../auth/login/LoginView";
import SignUpView from "../../auth/signup/SignUpView";

class AuthBox extends Component {

    render() {
        return (
            <div>
                <h2>Authentication</h2>
                <LogInView/>
                <SignUpView/>
            </div>
        );
    }
}

export default AuthBox;
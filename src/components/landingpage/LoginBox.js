import React, {Component} from 'react';
import Login from "./Login";
import WelcomeText from "./WelcomeText";

class LoginBox extends Component {

    render() {
        return (
            <div>
                <WelcomeText/>
                <Login/>
            </div>
        );
    }
}

export default LoginBox;
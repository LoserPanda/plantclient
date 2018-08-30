import React, {Component} from 'react';
import Header from "../static/Header";
import LoginBox from "./LoginBox";

class Landingpage extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <Header/>
                </div>
                <h1>The Landing page</h1>
                <LoginBox/>
            </div>
        );
    }
}

export default Landingpage;

import React, {Component} from 'react';
import Header from "../static/Header";
import LoginBox from "./LoginBox";
import Testimonials from "./Testimonials.js"


class Landingpage extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <Header/>
                </div>
                <h1>The Landing page</h1>
                <LoginBox/>
                <Testimonials/>
            </div>
        );
    }
}

export default Landingpage;

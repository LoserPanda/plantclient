import React, {Component} from 'react';
import Header from "../static/Header";
import LoginBox from "./LoginBox";
import Testimonials from "./Testimonials.js"
import Hype from "./hype/Hype";
import Team from './Team'
import Contact from './Contact'

class Landingpage extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <Header/>
                </div>
                <h1>The Landing page</h1>
                <LoginBox/>
                <Hype/>
                <Testimonials/>
                <Team/>
                <Contact/>
            </div>
        );
    }
}

export default Landingpage;

import React, {Component} from 'react';
import LoginBox from "./LoginBox";
import Testimonials from "./Testimonials.js"
import Hype from "./hype/Hype";
import Team from './Team'
import Contact from './Contact'

class Landingpage extends Component {
    render() {
        return (
            <div>
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

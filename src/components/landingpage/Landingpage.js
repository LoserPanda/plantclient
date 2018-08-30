import React, {Component} from 'react';
import Header from "../static/Header";

class Landingpage extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <Header/>
                </div>
                <h1>The Landing page</h1>
            </div>
        );
    }
}

export default Landingpage;

import React, {Component} from 'react';
import Landingpage from "./components/landingpage/Landingpage";
import './app.css'
import Header from "./components/static/Header";
import Footer from "./components/static/Footer";

class App extends Component {
    render() {
        return (
                <div className="container">
                    <div className="jumbotron">
                        <Header/>
                    </div>
                    <Landingpage/>
                    <div className="jumbotron">
                        <Footer/>
                    </div>
                </div>
        );
    }
}

export default App;

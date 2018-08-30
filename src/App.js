import React, {Component} from 'react';
import Landingpage from "./components/landingpage/Landingpage";
import Loggedinpage from "./components/loggedinpage/Loggedinpage";
import './app.css'

class App extends Component {
    render() {
        return (
                <div className="content">
                    <Landingpage/>
                </div>
        );
    }
}

export default App;

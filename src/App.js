import React, {Component} from 'react';
import Landingpage from "./components/landingpage/Landingpage";
import Loggedinpage from "./components/loggedinpage/Loggedinpage";

class App extends Component {
    render() {
        return (
                <div className="content">
                    <Landingpage/>
                    <Loggedinpage/>
                </div>
        );
    }
}

export default App;

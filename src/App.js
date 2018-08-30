import React, {Component} from 'react';
import Landingpage from "./components/landingpage/Landingpage";
import './app.css'
import Header from "./components/static/Header";
import Footer from "./components/static/Footer";
import app from './base';

class App extends Component {

    // state = { loading: true, authenticated: false, user: null };
    //
    // componentWillMount() {
    //     app.auth().onAuthStateChanged(user => {
    //         if (user) {
    //             console.log(user.email, "logged in as");
    //             this.setState({
    //                 authenticated: true,
    //                 currentUser: user,
    //                 loading: false
    //             });
    //         } else {
    //             this.setState({
    //                 authenticated: false,
    //                 currentUser: null,
    //                 loading: false
    //             });
    //         }
    //     });
    // }

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

import React, {Component} from 'react';
import LineChart from "./components/charts/LineChart";
import Navigation from "./components/navigation/Navigation";
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import Grid from "react-bootstrap/es/Grid";
import Switch from "react-router-dom/es/Switch";
// import Route from "react-router-dom/es/Route";
import Header from './components/static/Header';
import Route from "react-router-dom/es/Route";
import NotFound from "./components/error/Not Found";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Clientapi from "./components/socket/Clientapi";

// import Login from "./login/Login";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="content">
                    <div className="jumbotron">
                        <Header/>
                    </div>
                    <Navigation/>
                    <Grid>
                        <Switch>
                            {/*<Route exact path="/" component={Login}/>*/}
                            {/*<Route path="/" component={CityList}/>*/}
                            {/*<Route path="/" component={CountryList}/>*/}
                            {/*<Route path="//:code" name="readcountry" component={ReadCountry}/>*/}
                            {/*<Route path="//:code" name="updatecountry" component={UpdateCountry}/>*/}
                            <Route path="/login" component={Login}/>
                            <Route exact path="/" component={Home}/>
                            <Route path="/sensordata" component={LineChart}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </Grid>
                    <Clientapi/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;

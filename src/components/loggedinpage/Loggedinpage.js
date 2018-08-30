import React, {Component} from 'react';
import Login from "../login/Login";
import NotFound from "../error/Not Found";
import LineChart from "../charts/LineChart";
import Home from "../home/Home";
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import Header from "../static/Header";
import Navigation from "../navigation/Navigation";
import Grid from "react-bootstrap/es/Grid";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import Clientapi from "../socket/Clientapi";

class Loggedinpage extends Component {
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

export default Loggedinpage;
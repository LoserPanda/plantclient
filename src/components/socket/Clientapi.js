import React, {Component} from 'react';
import io from "socket.io-client";

// import {subscribeToTimer} from "./client/api";
// import './ChatPage.css'

class Clientapi extends Component {
    constructor(props) {
        super(props);
        this.state = {results: []};

        //
        // subscribeToTimer((err, timestamp) => this.setState({
        //     timestamp
        // }));

        this.socket = io('http://176.34.158.245:3005');
        this.socket.emit('live', "client socket joujou");

        this.socket.on('live', function (data) {
            console.log(data);
            // addMessage(data);
        });

        // const addMessage = data => {
        //     console.log(data);
        //     this.setState({results: [...this.state.results, data]});
        //     console.log(this.state.results);
        // };
    }

    render() {
        return (
            <div>Client API</div>
        );
    }
}


export default Clientapi;
import React, {Component} from 'react';

class Login extends Component {

    state = {
        users: {content: []}
    };

    componentDidMount() {
        console.log("Ollaan componentMountissa");
        this.getUsers();
    };

    getUsers = () => {
        var url = 'http://localhost:3001/users/test';
        console.log(url);
        fetch(url)
            .then((resp) => {
                console.log("Ollaan respissä --<-<-<-", resp);
                if (resp.ok) {
                    return resp.json();
                } else {
                    throw new Error("Väärin meni");
                }
            })
            .then((data) => {
                console.log("Tuleeko dataa???", data);
                this.setState({users: data});
                console.log(this.state)
            })
    };

    render() {

        return (
            <div>
                <h1>Login</h1>
            </div>
        );
    }
}

export default Login;
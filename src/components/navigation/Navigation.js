import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class Navigation extends Component {
    render() {
        return (
            <Navbar staticTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Navigation Bar</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="/">Home</NavItem>
                        <NavDropdown eventKey={2} title="Browse Sensor Data Charts" id="basic-nav-dropdown">
                            <MenuItem eventKey={2.1} href="/sensordata/light">Light Data</MenuItem>
                            <MenuItem eventKey={2.2} href="/sensordata/humidity">Humidity Data</MenuItem>
                        </NavDropdown>
                        <NavItem eventKey={3} href="/">Chat</NavItem>
                        <NavItem eventKey={4} href="/profile">Profile</NavItem>
                        <NavItem eventKey={5} href="/login">Login</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;
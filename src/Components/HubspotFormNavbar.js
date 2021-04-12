import React, {Component} from 'react';
import {Navbar} from "react-bootstrap";
import '../main.css'

class HubspotFormNavbar extends Component {

    render() {
        return (
            <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <div className="m-auto text-white">
                        <h3>Snowflake Estimator Opt In Form</h3>
                    </div>
                </Navbar.Collapse>
            </Navbar> )
        
    }
}

export default HubspotFormNavbar

    
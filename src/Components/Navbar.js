import React, {Component} from 'react';
import hashmaplogo from '../hashmap_banner_white.png';
import {Navbar, Nav} from "react-bootstrap";
import '../main.css'

class NewNavbar extends Component {
    render() {
        return (
            <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="https://www.hashmapinc.com/" rel="noopener noreferrer" target="_blank">
                    {<img src={hashmaplogo} alt="Hashmap Logo" width="200px"/>}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <div className="ml-auto my-2 text-white">
                        <h3>Snowflake Estimator</h3>
                    </div>
                    <Nav className="ml-auto">
                        <Nav.Link href="https://www.hashmapinc.com/snowflakeestimator-reachout" rel="noopener noreferrer" target="_blank">Contact Us</Nav.Link>
                        <Nav.Link href="https://docs.google.com/forms/d/e/1FAIpQLSc6B82kzw1y9ZwxurukXdgKmQacKiTwof099IFGXE-7NSI77Q/viewform?usp=sf_link" rel="noopener noreferrer" target="_blank">
                            Feedback
                        </Nav.Link>
                        <Nav.Link href="https://github.com/hashmapinc/snowflake-estimator" rel="noopener noreferrer" target="_blank">
                            GitHub Repo
                        </Nav.Link>
                        <Nav.Link href="https://www.snowflake.com/pricing/" rel="noopener noreferrer" target="_blank">
                            Snowflake Pricing
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar> )
        
    }
}

export default NewNavbar

    
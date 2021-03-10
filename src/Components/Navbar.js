import React, {Component} from 'react';
import hashmaplogo from '../hashmap_banner_white.png';
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import '../main.css'

class NewNavbar extends Component {
    constructor() {
        super();
        this.handleUtlOpen = this.handleUtlOpen.bind(this)
        this.handleUtlClose = this.handleUtlClose.bind(this)
        this.handleMoreOpen = this.handleMoreOpen.bind(this)
        this.handleMoreClose = this.handleMoreClose.bind(this)
        this.state = { isUltOpen: false,
                       isMoreOpen: false
        }
    }

    handleUtlOpen = () => {
        this.setState({isUltOpen: true})
    }

    handleUtlClose = () => {
        this.setState({isUltOpen: false})
    }

    handleMoreOpen = () => {
        this.setState({isMoreOpen: true})
    }

    handleMoreClose = () => {
        this.setState({isMoreOpen: false})
    }

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
                        <NavDropdown
                        onMouseEnter = { this.handleUtlOpen }
                        onMouseLeave = { this.handleUtlClose }
                        show = { this.state.isUltOpen }
                        title = "Other Utilities"                        
                        >
                            <NavDropdown.Item href="http://snowflakeinspector.hashmapinc.com/" rel="noopener noreferrer" target="_blank">Snowflake Inspector</NavDropdown.Item>
                            <NavDropdown.Item href="https://profiler.snowflakeinspector.com/" rel="noopener noreferrer" target="_blank">Snowflake Data Profiler</NavDropdown.Item>
                            <NavDropdown.Item href="https://healthcheck.snowflakeinspector.com/" rel="noopener noreferrer" target="_blank">Snowflake Healthcheck</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                        onMouseEnter = { this.handleMoreOpen }
                        onMouseLeave = { this.handleMoreClose }
                        show = { this.state.isMoreOpen }
                        title = "More Info"                        
                        >
                            <NavDropdown.Item href="https://www.hashmapinc.com/snowflake-utilities-accelerators" rel="noopener noreferrer" target="_blank">Other Accelerators</NavDropdown.Item>
                            <NavDropdown.Item href="https://github.com/hashmapinc/snowflake-estimator" rel="noopener noreferrer" target="_blank">GitHub Repo</NavDropdown.Item>
                            <NavDropdown.Item href="https://docs.google.com/forms/d/e/1FAIpQLSc6B82kzw1y9ZwxurukXdgKmQacKiTwof099IFGXE-7NSI77Q/viewform?usp=sf_link" rel="noopener noreferrer" target="_blank">Feedback</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.hashmapinc.com/snowflakeestimator-reachout" rel="noopener noreferrer" target="_blank">Contact Us</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="https://www.snowflake.com/pricing/" rel="noopener noreferrer" target="_blank">
                            Snowflake Pricing
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar> )
        
    }
}

export default NewNavbar

    
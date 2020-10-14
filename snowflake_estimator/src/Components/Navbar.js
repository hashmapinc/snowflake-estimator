import React, {Component} from 'react';
import hashmaplogo from '../hashmap_banner_white.png';
import '../main.css'

class Navbar extends Component {
    render() {
        return (
        <header className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
            <a className="navbar-brand" href="https://www.hashmapinc.com/" rel="noopener noreferrer" target="_blank">
                {<img src={hashmaplogo} alt="Hashmap Logo" width="200px"/>}
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="mx-auto my-2 text-white">
                    <h3>Snowflake Estimator</h3>
                </div>

                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link" href="https://www.hashmapinc.com/snowflakedataprofiler-reachout" rel="noopener noreferrer" target="_blank">Contact
                        Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://forms.gle/WfiB6YctX5Jg2zTs6" rel="noopener noreferrer" target="_blank">Feedback </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://github.com/hashmapinc/snowflake-estimator" rel="noopener noreferrer" target="_blank">GitHub Repo</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.snowflake.com/pricing/" rel="noopener noreferrer" target="_blank">Snowflake Pricing </a>
                    </li>
                </ul>
            </div>
        </header>
        )
    }
}

export default Navbar

    
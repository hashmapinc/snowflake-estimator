import React from 'react';
import {Button, Container} from "react-bootstrap";
import LineChart from "./LineChart.js"
import '../main.css';

class Results extends React.Component {
    render() {
        if (this.props.med_calc_results) {
              return <Container fluid id="overlay" className="w-100 h-100">
                          <div id="overlay_content" className="position-relative col-auto-3 order-sm-1 mx-auto">
                                <h1 className="credits">{this.props.med_calc_results}</h1>
                                <h4 className="overlay_text">Annual Snowflake Credits</h4>
                                <LineChart className="row-sm"low_calc_results={this.props.low_calc_results} med_calc_results={this.props.med_calc_results} high_calc_results={this.props.high_calc_results}/>
                                <Button variant="btn btn-primary btn-lg" type="submit" className="overlay_button" onClick={this.props.handler}>Make Another Calculation</Button>
                          </div>
                     </Container>

        }
        else {
            return <div></div>
        }
        
              }
    }

export default Results;
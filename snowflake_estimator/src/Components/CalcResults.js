import React from 'react';
import {Button} from "react-bootstrap";
import LineChart from "./LineChart.js"
import '../main.css';

class Results extends React.Component {
    render() {
        if (this.props.med_calc_results) {
            return <div className="overlay">
                      <div className="overlay_content">
                        <h1 className="credits">{this.props.med_calc_results}</h1>
                        <h4 className="overlay_text">Annual Snowflake Credits</h4>
                        <LineChart low_calc_results={this.props.low_calc_results} med_calc_results={this.props.med_calc_results} high_calc_results={this.props.high_calc_results}/>
                        <Button variant="btn btn-primary btn-lg" type="submit" className="overlay_button" onClick={this.props.handler}>Make Another Calculation</Button>
                      </div>
                    </div>
        }
        else {
            return <div></div>
        }
        
              }
    }

export default Results;
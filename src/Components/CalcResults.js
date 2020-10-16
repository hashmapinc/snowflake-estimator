import React from 'react';
import {Button, Container} from "react-bootstrap";
import LineChart from "./LineChart.js"
import '../main.css';

class Results extends React.Component {
    render() {
        if (this.props.med_calc_results) {
              return <Container fluid id="overlay" className="w-100 h-100">
                          <div id="overlay_content" className="position-relative col-lg-10 order-sm-1 mx-auto">
                                <h1 className="credits">We estimate an average credit usage rate of about {(12*Math.round(this.props.med_calc_results/12)).toLocaleString()} credits annually or {Math.round(this.props.med_calc_results/12).toLocaleString()} credits every month.</h1>
                                <Button id='newCalcButton' variant="btn btn-primary btn-lg" type="submit" className="overlay_button" onClick={this.props.handler}>Make Another Calculation</Button>
                                <LineChart className="row-sm"low_calc_results={this.props.low_calc_results} med_calc_results={this.props.med_calc_results} high_calc_results={this.props.high_calc_results}/>             
                          </div>
                     </Container>

        }
        else {
            return <div></div>
        }
        
              }
    }

export default Results;
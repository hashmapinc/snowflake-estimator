import React from 'react';
import {Button} from "react-bootstrap";
import '../main.css';

class Results extends React.Component {
    render() {
        if (this.props.calc_results) {
            return <div className="overlay">
                      <div className="overlay_content">
                        <h1>{this.props.calc_results}</h1>
                        <h4 className="overlay_text">Snowflake Credits</h4>
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
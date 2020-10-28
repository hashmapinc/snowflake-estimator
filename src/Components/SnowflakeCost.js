import React from 'react';
import {Col, Row, Container, Modal} from "react-bootstrap";
import '../main.css';

class SnowflakeCost extends React.Component {

    render() {
        if (this.props.credit_cost) {
            return (
            <div>
                <Modal.Header></Modal.Header>
                <Container fluid>
                    <Row className="pt-4 pb-4">
                        <Col sm className="text-center">
                            <h4>{"Low Cost Estimate: $"+(this.props.credit_cost*Math.round(this.props.low_calc_results/12)*12).toLocaleString()}</h4>
                        </Col>
                        <Col sm className="text-center">
                            <h4>{"Medium Cost Estimate: $"+(this.props.credit_cost*Math.round(this.props.med_calc_results/12)*12).toLocaleString()}</h4>
                        </Col>
                        <Col sm className="text-center">
                            <h4>{"High Cost Estimate: $"+(this.props.credit_cost*Math.round(this.props.high_calc_results/12)*12).toLocaleString()}</h4>
                        </Col>
                    </Row>
                </Container>
            </div>
            )
        } else {
            return (<div></div>)
        }
        
        }
}

export default SnowflakeCost;
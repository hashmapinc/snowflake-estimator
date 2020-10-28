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
                            <h4>{"Low Cost Estimate: $"+(Math.round(this.props.credit_cost*this.props.low_calc_results)).toLocaleString()}</h4>
                        </Col>
                        <Col sm className="text-center">
                            <h4>{"Medium Cost Estimate: $"+(Math.round(this.props.credit_cost*this.props.med_calc_results)).toLocaleString()}</h4>
                        </Col>
                        <Col sm className="text-center">
                            <h4>{"High Cost Estimate: $"+(Math.round(this.props.credit_cost*this.props.high_calc_results)).toLocaleString()}</h4>
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
import React from 'react';
import {Button, Modal, Container, Row, Col} from "react-bootstrap";
import SnowflakeCost from "./SnowflakeCost.js";
import LineChart from "./LineChart.js";
import '../main.css';

class CalcResults extends React.Component {


  render() {
        return (
          <div>
            <Modal
              show={this.props.showModal}
              onHide={this.props.handleModalClose}
              aria-labelledby="contained-modal-title-vcenter"
              centered
              animation={true}
              size="xl"
            >
              <Container fluid>
                <Row className="pt-4">
                  <Col className="text-center">
                    <h1>{(12*Math.round(this.props.med_calc_results/12)).toLocaleString()}</h1>
                    <p>Estimated Annual Credit Usage</p>
                  </Col>
                </Row>
              </Container>
              <Modal.Header className="pt-1"></Modal.Header>
              <LineChart low_calc_results={this.props.low_calc_results} med_calc_results={this.props.med_calc_results} high_calc_results={this.props.high_calc_results}/>
              <SnowflakeCost 
                    low_calc_results={this.props.low_calc_results} 
                    med_calc_results={this.props.med_calc_results} 
                    high_calc_results={this.props.high_calc_results} 
                    credit_cost={this.props.credit_cost} />  
              <Modal.Footer>
                <Button variant="primary" size="lg" className="mx-auto mt-4 mb-4" onClick={this.props.handleModalClose}>
                  Make Another Calculation
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        );
      }
}

export default CalcResults;
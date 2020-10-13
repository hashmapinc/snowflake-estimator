import React, {Component} from 'react';
import { Button, Form} from "react-bootstrap";
import Results from './CalcResults.js';
import LoadingSpinner from './Spinner.js';
import '../main.css'


class CalcForm extends Component {
  

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleResultClick = this.handleResultClick.bind(this);

    /** Intializing props for form component */
    this.state = {
      validated: false,
      isLoading: false,
      calc_results: null,
      data_size: null,
      growth_rate: null,
      frequency: null,
      bi_reports: null,
      bi_users: null,
      complexity: null,
      plan: null,

    };
  }

  /** handles form field inputs */
  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  /** handles results button click */
  handleResultClick() {
    this.setState({
      calc_results: null
    });
  }

  /** Handles form submission */
  handleSubmit = (event) => {
    this.setState({calc_results: null});
    console.log('working ', this.state.calc_results);
    
    /** Checks validity of form 
     */
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    /** sends a fetch request to the flask api */
    event.preventDefault();
    this.setState({isLoading:true});

    /** calculation goes here */
    if (this.state.data_size && this.state.growth_rate && this.state.bi_reports && this.state.bi_users) {
      this.state.calc_results = (this.state.data_size * this.state.growth_rate);
      this.setState({calc_results: this.state.calc_results});
      console.log('working');
    }

    console.log(this.state.calc_results);
    this.setState({validated:true, error: null, isLoading:false})}
    

  render() {
    let {isLoading, calc_results, validated} = this.state;

    /** renders form */
    return (
      <div className="container">
      <div className="py-5 text-center">
          <h2>Calculate your Snowflake Credit Usage</h2>
          <LoadingSpinner isLoading={isLoading}></LoadingSpinner>
          <Results calc_results={calc_results} handler={this.handleResultClick}></Results>
      </div>
      <div class="row">
      <div class="col-8 col-xs-12 order-md-1 mx-auto">
        <h4 class="mb-3">Snowflake details:</h4>
    <div className='full_page'>
          <Form id='profiler-form' className="needs-validation" noValidate validated={validated} onSubmit={this.handleSubmit}>
              <Form.Group md="4" controlId="data_size">
                <Form.Label>Data Size<span className="text-muted"> (in terabytes)</span></Form.Label>
                <Form.Control
                  onChange={this.handleInputChange}
                  required
                  type="text"
                  placeholder="1000"
                  name="data_size"
                />
                <Form.Control.Feedback type="invalid">Please enter your Data Size.</Form.Control.Feedback>
              </Form.Group>
              <Form.Group md="4" controlId="growth_rate">
                <Form.Label>Data Size Growth Rate<span className="text-muted"> (how much does data size increase every month in gigabytes)</span></Form.Label>
                <Form.Control
                  onChange={this.handleInputChange}
                  required
                  type="text"
                  placeholder="1000"
                  name="growth_rate"
                />
                <Form.Control.Feedback type="invalid">Please enter your Data Size Growth Rate.</Form.Control.Feedback>
              </Form.Group>
              <Form.Group md="4" controlId="frequency">
                <Form.Label>Update Frequency</Form.Label>
                <Form.Control as="select" name="frequency" required onChange={this.handleInputChange} custom>
                  <option>Every Minute</option>
                  <option>Every Hour</option>
                  <option>Every Day</option>
                  <option>Every Week</option>
                </Form.Control>
              </Form.Group>
              <Form.Group md="4" controlId="bi_reports">
                <Form.Label>BI Reports</Form.Label>
                <Form.Control
                  onChange={this.handleInputChange}
                  required
                  type="text"
                  placeholder="10"
                  name="bi_reports"
                />
                <Form.Control.Feedback type="invalid">Please enter your BI Reports.</Form.Control.Feedback>
              </Form.Group>
              <Form.Group md="4" controlId="bi_users">
                <Form.Label>Concurrent BI Users</Form.Label>
                <Form.Control
                  onChange={this.handleInputChange}
                  required
                  type="text"
                  placeholder="100"
                  name="bi_users"
                />
                <Form.Control.Feedback type="invalid">Please enter your Concurrent BI Users.</Form.Control.Feedback>
              </Form.Group>
              <Form.Group md="4" controlId="complexity">
                <Form.Label>Transformation Complexity <span className="text-muted"> (on average)</span></Form.Label>
                <Form.Control as="select" name="complexity" required onChange={this.handleInputChange} custom>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </Form.Control>
              </Form.Group>
              <Form.Group md="4" controlId="plan">
                <Form.Label>Payment Plan</Form.Label>
                <Form.Control as="select" name="plan" required onChange={this.handleInputChange} custom>
                  <option>Monthly</option>
                  <option>Annually</option>
                </Form.Control>
              </Form.Group>
            <Button variant="btn btn-primary btn-lg btn-block" type="submit" id="submit_button">Estimate Credits</Button>
          </Form>
        </div>
      </div>
    </div>
    </div>
    )
  }
}


export default CalcForm
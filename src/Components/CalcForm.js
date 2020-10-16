import React, {Component} from 'react';
import { Button, Form, Container} from "react-bootstrap";
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
      low_calc_results: null,
      med_calc_results: null,
      high_calc_results: null,
      data_size: 15,
      growth_rate: 300,
      ingestion_frequency: 'Every Hour',
      bi_dashboards: 100,
      transformation_complexity: 'Medium',
      transformation_frequency: 'Every Hour',
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
      low_calc_results: null,
      med_calc_results: null,
      high_calc_results: null,
    });
  }

  /** Handles form submission */
  handleSubmit = (event) => {
    this.setState({
      low_calc_results: null,
      med_calc_results: null,
      high_calc_results: null,
    });
    console.log('working ', this.state.med_calc_results);
    
    /** Checks validity of form 
     */
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    /** starting credit calculation */
    event.preventDefault();
    this.setState({isLoading:true});

    /** calculation goes here */
    if (this.state.data_size && this.state.growth_rate && this.state.bi_dashboards && this.state.bi_users) {

      /** add calculations for low, medium, high here!! */
      this.setState({
        low_calc_results: (this.state.data_size * this.state.growth_rate * 0.5),
        med_calc_results: (this.state.data_size * this.state.growth_rate),
        high_calc_results: (this.state.data_size * this.state.growth_rate * 2),
      });
    }

    this.setState({validated:true, error: null, isLoading:false})}
    

  render() {
    let {isLoading, low_calc_results, med_calc_results, high_calc_results, validated} = this.state;

    /** renders form */
    return (
      <Container fluid>
        <div className="py-5 text-center">
            <h2>Calculate your Snowflake Credit Usage</h2>
            <LoadingSpinner isLoading={isLoading}></LoadingSpinner>
            <Results low_calc_results={low_calc_results} med_calc_results={med_calc_results} high_calc_results={high_calc_results} handler={this.handleResultClick}></Results>
        </div>
        <div className="row">
        <div className="col-8 col-xs-12 order-md-1 mx-auto">
          <h4 className="mb-3 text-center">Anticipated Snowflake usage details:</h4>
        <div className='full_page'>
            <Form id='estimator-form' className="needs-validation" noValidate validated={validated} onSubmit={this.handleSubmit}>
                <Form.Group md="4" controlId="data_size">
                  <Form.Label>Data size before Snowflake compression<span className="text-muted"> (in terabytes)</span></Form.Label>
                  <Form.Control
                    onChange={this.handleInputChange}
                    required
                    type="number"
                    placeholder={this.state.data_size + ' Terabytes'}
                    name="data_size"
                  />
                  <Form.Control.Feedback type="invalid">Please enter your anticipated data size.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group md="4" controlId="growth_rate">
                  <Form.Label>Data growth rate<span className="text-muted"> (how much does data size increase every month in gigabytes)</span></Form.Label>
                  <Form.Control
                    onChange={this.handleInputChange}
                    required
                    type="number"
                    placeholder={this.state.growth_rate + ' Gigabytes / month'}
                    name="growth_rate"
                  />
                  <Form.Control.Feedback type="invalid">Please enter your expected monthly data growth in gigabytes.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group md="4" controlId="ingestion_frequency">
                  <Form.Label>Data ingestion frequency<span className="text-muted"> (on average, how often do you plan to ingest data)</span></Form.Label>
                  <Form.Control as="select" name="ingestion_frequency" required onChange={this.handleInputChange} custom 
                    defaultValue={this.state.ingestion_frequency}>
                    <option>Every Minute</option>
                    <option>Every Hour</option>
                    <option>Every Day</option>
                    <option>Every Week</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group md="4" controlId="bi_dashboards">
                  <Form.Label>Number of BI dashboards<span className="text-muted"> (10 for small, 100 for medium, and 1000 for large organizations if you're not sure)</span></Form.Label>
                  <Form.Control
                    onChange={this.handleInputChange}
                    required
                    type="number"
                    placeholder={this.state.bi_dashboards + ' Dashboards'}
                    name="bi_dashboards"
                  />
                  <Form.Control.Feedback type="invalid">Please enter your expected number of BI dashboards.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group md="4" controlId="transformation_complexity">
                  <Form.Label>Typical transformation complexity <span className="text-muted"> (on average)</span></Form.Label>
                  <Form.Control as="select" name="transformation_complexity" required onChange={this.handleInputChange} custom
                    defaultValue={this.state.transformation_complexity}>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group md="4" controlId="transformation_frequency">
                  <Form.Label>Data transformation frequency<span className="text-muted"> (on average, how often do you plan to process data)</span></Form.Label>
                  <Form.Control as="select" name="transformation_frequency" required onChange={this.handleInputChange} custom
                    defaultValue={this.state.transformation_frequency}>
                    <option>Every Minute</option>
                    <option>Every Hour</option>
                    <option>Every Day</option>
                    <option>Every Week</option>
                  </Form.Control>
                </Form.Group>
              <Button variant="btn btn-primary btn-lg btn-block" type="submit" id="submit_button">Estimate Credits</Button>
            </Form>
          </div>
        </div>
      </div>
    </Container>
    )
  }
}


export default CalcForm
import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import PageNavbar from './Components/PageNavbar';
import Cookies from 'js-cookie';
import HubspotFormNavbar from './Components/HubspotFormNavbar';
import HubspotForm from './Components/HubspotForm';
import ComputeDashboard from './Components/ComputeDashboard'


import './main.css'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cookieConsent: Cookies.get('hubspotutk'),
      formSubmitCookie: Cookies.get('_hs_form_submitted')
    }
  }

  render() {
    // checks to see if the user consented to cookies and also successfully submitted the form
    // conditionally shows main page content or the hubspot form
    if (this.state.formSubmitCookie && this.state.cookieConsent) {
      return (
        <div className="container">
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes" />
            <link rel="stylesheet" href="https://unpkg.com/purecss@2.0.3/build/pure-min.css"
              integrity="sha384-cg6SkqEOCV1NbJoCu11+bm0NvBRc8IYLRGXkmNrqUBfTjmMYwNKPWBTIKyw9mHNJ" crossOrigin="anonymous" />
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
          
            <PageNavbar />
            <h3 id="Directions" className="text-center">Add your expected Snowflake usage details to get a Snowflake credit and cost estimate instantly</h3>    
            <ComputeDashboard />
  
          <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/4376150.js"></script>
          <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossOrigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
            integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
            crossOrigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
            integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
            crossOrigin="anonymous"></script>
        </div>
        )
    } else {
        return (
          <Container fluid>
            <HubspotFormNavbar/>
            <HubspotForm/>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
              integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
              crossOrigin="anonymous"></script>
          </Container>
        )
    }
    
  }

}
export default App;

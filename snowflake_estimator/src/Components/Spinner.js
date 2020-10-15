import React from 'react';
import {Spinner} from "react-bootstrap";
import '../main.css'

class LoadingSpinner extends React.Component {
    render() {
        if (this.props.isLoading) {
            return <Spinner className='spinner' animation="border" variant="primary" style={{width:'5rem', height:'5rem'}}><span className="sr-only">Loading...</span></Spinner>
        }
        else {
            return <div></div>
        }
        
              }
    }

export default LoadingSpinner;
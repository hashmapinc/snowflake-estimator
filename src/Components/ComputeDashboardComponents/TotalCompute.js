import React from 'react';
import {Table} from 'react-bootstrap';
import '../../main.css';

// Table that renders the monthly and annual totals
function TotalCompute(props) {
    const style = {"font-weight":"bold"}
    return (
        <Table striped bordered hover variant="dark" responsive>
            <thead>
                <tr>
                    <th></th>
                    <th>Total Credits Consumed</th>
                    <th>Total Cost</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style={style}>Compute Monthly</td>
                    <td>{(props.total_credits_consumed_monthly * 1).toLocaleString(undefined,{'minimumFractionDigits':0,'maximumFractionDigits':0})} credits</td>
                    <td>${(props.total_cost_monthly * 1).toLocaleString(undefined,{'minimumFractionDigits':0,'maximumFractionDigits':0})}</td>
                </tr>
                <tr>
                    <td style={style}>Compute Annually</td>
                    <td>{(props.total_credits_consumed_monthly * 12).toLocaleString(undefined,{'minimumFractionDigits':0,'maximumFractionDigits':0})} credits</td>
                    <td>${(props.total_cost_monthly * 12).toLocaleString(undefined,{'minimumFractionDigits':0,'maximumFractionDigits':0})}</td>
                </tr>
            </tbody>
        </Table>
    )
};

export default TotalCompute;
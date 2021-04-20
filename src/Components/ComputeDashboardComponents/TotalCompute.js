import React from 'react';
import {Table} from 'react-bootstrap';

// Table that renders the monthly and annual totals
function TotalCompute(props) {
    return (
        <Table bordered hover variant="dark" responsive>
            <thead>
                <tr>
                    <td></td>
                    <td>Total Credits Consumed</td>
                    <td>Total Cost</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Compute Monthly</td>
                    <td>{(props.total_credits_consumed_monthly * 1).toLocaleString(undefined,{'minimumFractionDigits':0,'maximumFractionDigits':0})} credits</td>
                    <td>${(props.total_cost_monthly * 1).toLocaleString(undefined,{'minimumFractionDigits':0,'maximumFractionDigits':0})}</td>
                </tr>
                <tr>
                    <td>Compute Annually</td>
                    <td>{(props.total_credits_consumed_monthly * 12).toLocaleString(undefined,{'minimumFractionDigits':0,'maximumFractionDigits':0})} credits</td>
                    <td>${(props.total_cost_monthly * 12).toLocaleString(undefined,{'minimumFractionDigits':0,'maximumFractionDigits':0})}</td>
                </tr>
            </tbody>
        </Table>
    )
};

export default TotalCompute;
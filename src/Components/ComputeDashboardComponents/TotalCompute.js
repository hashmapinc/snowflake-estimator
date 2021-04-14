import React from 'react';
import {Table} from 'react-bootstrap';

function TotalCompute(props) {
    return (
        <Table striped bordered hover variant="dark" responsive>
            <thead>
                <tr>
                    <th>Total Credits Consumed (Monthly)</th>
                    <th>Total Credits Consumed (Annually)</th>
                    <th>Total Cost (Monthly)</th>
                    <th>Total Cost (Annually)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.total_credits_consumed_monthly}</td>
                    <td>{(props.total_credits_consumed_monthly * 12).toFixed(2)}</td>
                    <td>{props.total_cost_monthly}</td>
                    <td>{(props.total_cost_monthly * 12).toFixed(2)}</td>
                </tr>
            </tbody>
        </Table>
    )
};

export default TotalCompute;
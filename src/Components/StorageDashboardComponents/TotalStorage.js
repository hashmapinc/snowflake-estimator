import React from 'react';
import {Table} from 'react-bootstrap';

// Table that renders the monthly and annual totals
const TotalStorage = (props) => {
    const style = {"font-weight":"bold"};
    const storage_data = props.storage_data
    return (
        <Table striped bordered hover variant="dark" responsive>
            <thead>
                <tr>
                    <th></th>
                    <th>On-Demand Cost</th>
                    <th>Capacity Cost</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style={style}>First Year Monthly Average Cost</td>
                    <td>${(storage_data.on_demand_cost * storage_data.storage_per_month * (12*13/2) / 12).toLocaleString(undefined,{'minimumFractionDigits':0,'maximumFractionDigits':0})}</td>
                    <td>${(storage_data.capacity_cost * storage_data.storage_per_month * (12*13/2) / 12).toLocaleString(undefined,{'minimumFractionDigits':0,'maximumFractionDigits':0})}</td>
                </tr>
                <tr>
                    <td style={style}>First Year Cost (number doubles yearly)</td>
                    <td>${(storage_data.on_demand_cost * storage_data.storage_per_month * (12*13/2)).toLocaleString(undefined,{'minimumFractionDigits':0,'maximumFractionDigits':0})}</td>
                    <td>${(storage_data.capacity_cost * storage_data.storage_per_month * (12*13/2)).toLocaleString(undefined,{'minimumFractionDigits':0,'maximumFractionDigits':0})}</td>
                </tr>
            </tbody>
        </Table>
    )
};

export default TotalStorage;
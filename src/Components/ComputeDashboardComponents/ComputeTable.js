import React from 'react';
import {Table} from 'react-bootstrap';
import ComputeTableRows from './ComputeTableRows'
import '../../main.css'

// function that renders every row object in row_data array
// Compute table for individual warehouses
const ComputeTable = (props) => {
    const row_data = props.row_data;
    const context = props.context;
    return (
        <Table striped bordered hover variant="dark" responsive>
            <thead>
                <tr>
                    <th>Business Function</th>
                    <th>Per Credit Cost</th>
                    <th>Hours Used Per Day</th>
                    <th>Days used Per Week</th>
                    <th>Number of Warehouse Instances</th>
                    <th>Warehouse Size</th>
                    <th>Credits Consumed Per Month</th>
                    <th>Cost (per month)</th>
                    <th>Delete Row</th>
                </tr>
            </thead>
            <tbody>
                {/* context and row data passed to compute table rows */}
                <ComputeTableRows context={context} row_data={row_data} />
            </tbody>
        </Table>
    )
}
export default ComputeTable;
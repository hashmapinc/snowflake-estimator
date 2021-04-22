import React from 'react';
import {Table} from 'react-bootstrap';
import ComputeTableRows from './ComputeTableRows'

// function that renders every row object in row_data array
// Compute table for individual warehouses
const ComputeTable = (props) => {
    const row_data = props.row_data;
    const context = props.context;
    return (
        <Table striped bordered hover variant="dark" responsive>
            <thead>
                <tr>
                    <td>Business Function</td>
                    <td>Per Credit Cost</td>
                    <td>Hours Used Per Day</td>
                    <td>Days used Per Week</td>
                    <td>Warehouse Instances</td>
                    <td>Warehouse Size</td>
                    <td>Credits Consumed Per Month</td>
                    <td>Cost Per Month</td>
                    <td>Delete Row</td>
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
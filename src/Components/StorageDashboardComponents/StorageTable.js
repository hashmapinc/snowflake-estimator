import React from 'react';
import {Table, Form} from 'react-bootstrap';

// function that renders every row object in row_data array
// Compute table for individual warehouses
const StorageTable = (props) => {
    const storage_data = props.storage_data;
    return (
        <Table striped bordered hover variant="dark" responsive>
            <thead>
                <tr>
                    <th>Starting Storage (in TB)</th>
                    <th>Monthly Average Storage Increase (in TB)</th>
                    <th>On-Demand Cost Per Month</th>
                    <th>Capacity Cost Per Month</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <Form.Control
                            type="number"
                            value={storage_data.starting_storage}
                            onChange={props.handleStartingStorageChanged}
                            />
                    </td>
                    <td>
                        <Form.Control
                            type="number"
                            value={storage_data.storage_per_month}
                            onChange={props.handleMonthlyStorageChanged}
                            />
                    </td>
                    <td>
                        <Form.Control
                            type="number"
                            value={storage_data.on_demand_cost}
                            onChange={props.handleOnDemandCostChanged}
                            />
                    </td>
                    <td>
                        <Form.Control
                            type="number"
                            value={storage_data.capacity_cost}
                            onChange={props.handleCapacityCostChanged}
                            />
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}
export default StorageTable;
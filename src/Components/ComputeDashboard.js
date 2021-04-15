import React, {Component} from 'react';
import {Table, Container, Row, Col, Button, Form} from "react-bootstrap";
import TotalCompute from './ComputeDashboardComponents/TotalCompute'
import '../main.css';
import ComputePieGraph from './ComputeDashboardComponents/ComputePieGraph';

class ComputeDashboard extends Component {
    // The logic for the dynamic table dashboard
    // user can add rows
    constructor() {
      super();

        this.state = {
            warehouse_values: 
                {
                    "XS": 1,
                    "S": 2,
                    "M": 4,
                    "L": 8,
                    "XL": 16,
                    "2XL": 32,
                    "3XL": 64,
                    "4XL": 128
                },
                // starting sample row
                row_data: [
                    {
                        name: 'Warehouse ' + '1',
                        per_credit_cost: 3,
                        hours_per_day: 6,
                        days_per_week: 5,
                        warehouse_count: 2,
                        warehouse_size: "S",
                        monthly_credits_consumed: 520,
                        individual_cost: 1560
                    }
                ],
                total_cost_monthly: 1560,
                total_credits_consumed_monthly: 520,
                row_counter: 1,
            };
        this.findWarehouseSizeValue = this.findWarehouseSizeValue.bind(this);
        this.handleTotalCostChanged = this.handleTotalCostChanged.bind(this);
        this.computeMonthlyTotals = this.computeMonthlyTotals.bind(this);
    
    }

    // when user clicks "add row", new row object is pushed to row_data array
    // max rows = 10
    handleAddRow() {
        if (this.state.row_counter < 10) {
            var row = {
                name: 'Warehouse ' + String(this.state.row_counter+1),
                per_credit_cost: 3,
                hours_per_day: 6,
                days_per_week: 5,
                warehouse_count: 2,
                warehouse_size: "S",
                monthly_credits_consumed: 520,
                individual_cost: 1560
            }
            
            var row_data = this.state.row_data;
            row_data.push(row);
    
            this.setState({
                row_data: row_data,
                row_counter: this.state.row_counter + 1,
            });
    
            this.computeMonthlyTotals();
        }
    }

    // find corresponding value associated with warehouse size
    findWarehouseSizeValue(value) {
        return this.state.warehouse_values[value]
    }

// all handle(variable)changed functions handle when a field in a row is changed
// uses index to change the correct field within a specific row
    handleNameChanged(i, event) {
        var row_data = this.state.row_data;
        row_data[i].name  = event.target.value;
    
        this.setState({
            row_data: row_data
        });
    }

    handleCreditsCostChanged(i, event) {
        var row_data = this.state.row_data;
        row_data[i].per_credit_cost  = event.target.value;
        this.handleTotalCostChanged(i);
    
        this.setState({
          row_data: row_data
        });
      }

    handleHoursChanged(i, event) {
        var row_data = this.state.row_data;
        row_data[i].hours_per_day  = event.target.value;
        this.handleCreditsChanged(i);
        this.handleTotalCostChanged(i);
    
        this.setState({
          row_data: row_data
        });
      }
    
    handleDaysChanged(i, event) {
        var row_data = this.state.row_data;
        row_data[i].days_per_week  = event.target.value;
        this.handleCreditsChanged(i);
        this.handleTotalCostChanged(i);
    
        this.setState({
          row_data: row_data
        });
      }
    
    handleWarehouseCountChanged(i, event) {
        var row_data = this.state.row_data;
        row_data[i].warehouse_count  = event.target.value;
        this.handleCreditsChanged(i);
        this.handleTotalCostChanged(i);
    
        this.setState({
          row_data: row_data
        });
      }

    handleWarehouseSizeChanged(i, event) {
        var row_data = this.state.row_data;
        row_data[i].warehouse_size  = event.target.value;
        this.handleCreditsChanged(i);
        this.handleTotalCostChanged(i);
    
        this.setState({
          row_data: row_data
        });
      }
    
    handleCreditsChanged(i) {
        var row_data = this.state.row_data;
        row_data[i].monthly_credits_consumed  = (row_data[i].hours_per_day * row_data[i].days_per_week * row_data[i].warehouse_count * this.findWarehouseSizeValue(row_data[i].warehouse_size) * 52 / 12).toFixed(2);
        this.setState({
          row_data: row_data
        });
        this.computeMonthlyTotals();
      }

    handleTotalCostChanged(i) {
        var row_data = this.state.row_data;
        row_data[i].individual_cost  = (row_data[i].monthly_credits_consumed * row_data[i].per_credit_cost).toFixed(2)
        this.setState({
          row_data: row_data
        });
        this.computeMonthlyTotals();
      }

    // used to update the TotalCompute table
    // function is called every time a value is changed in any row
    computeMonthlyTotals() {
        this.setState({
            total_credits_consumed_monthly: this.state.row_data.map(a => a.monthly_credits_consumed).reduce((a, b) => parseFloat(a) + parseFloat(b)),
            total_cost_monthly: this.state.row_data.map(a => a.individual_cost).reduce((a, b) => parseFloat(a) + parseFloat(b)),
        })
    }
    
    // function that renders every row object in row_data array
    // Compute table for individual warehouses
    renderRows() {
      var context = this;
  
      return this.state.row_data.map(function(row, index) {
          return (
            <tr key={"row-" +index}>
                <td>
                    <Form.Control
                        type="string"
                        value={row.name}
                        onChange={context.handleNameChanged.bind(context, index)}
                        />
                </td>
                <td>
                    <Form.Control
                        type="number"
                        value={row.per_credit_cost}
                        onChange={context.handleCreditsCostChanged.bind(context, index)}
                        />
                </td>
                <td>
                    <Form.Control
                            as="select"
                            custom
                            value={row.hours_per_day}
                            onChange={context.handleHoursChanged.bind(context, index)}
                        >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                        <option>16</option>
                        <option>17</option>
                        <option>18</option>
                        <option>19</option>
                        <option>20</option>
                        <option>21</option>
                        <option>22</option>
                        <option>23</option>
                        <option>24</option>
                    </Form.Control>
                </td>
                <td>
                    <Form.Control 
                            as="select"
                            custom
                            value={row.days_per_week}
                            onChange={context.handleDaysChanged.bind(context, index)}
                            >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                    </Form.Control>
                </td>
                <td>
                    <Form.Control 
                            as="select"
                            custom
                            value={row.warehouse_count}
                            onChange={context.handleWarehouseCountChanged.bind(context, index)}
                            >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                        <option>16</option>
                        <option>17</option>
                        <option>18</option>
                        <option>19</option>
                        <option>20</option>
                        <option>21</option>
                        <option>22</option>
                        <option>23</option>
                        <option>24</option>
                    </Form.Control>
                </td>
                <td>
                    <Form.Control 
                            as="select"
                            custom
                            value={row.warehouse_size}
                            onChange={context.handleWarehouseSizeChanged.bind(context, index)}
                        >
                        <option>XS</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>2XL</option>
                        <option>3XL</option>
                        <option>4XL</option>
                    </Form.Control>
                </td>
                <td>{(row.monthly_credits_consumed * 1).toLocaleString()} credits</td>
                <td>${(row.individual_cost * 1).toLocaleString()}</td>
            </tr>
          )})
      };
    
    // ComputeDashboard that contains the compute table for individual warehouses, TotalCompute table, and the ComputePieGraph
    render() {
        // Pie Chart Title style
        const styles = {
            overlay: {
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 96,
              color: "black",
              textAlign: "center",
              pointerEvents: "none"
            },
            totalLabel: {
              fontSize: 14
            }
          };
        return(
            <Container id="ComputeContainer" fluid>
                <Row className="justify-content-md-center">
                    <Col>
                        <Button variant="outline-primary" size="sm" onClick={this.handleAddRow.bind(this)}>Add Row</Button>
                    </Col>
                    <Col md={12} xs={12} lg={12}>
                        <Table striped bordered hover variant="dark" responsive>
                            <thead>
                                <tr>
                                    <th>Warehouse Name or Function</th>
                                    <th>Per Credit Cost</th>
                                    <th>Hours Used Per Day</th>
                                    <th>Days used Per Week</th>
                                    <th>Number of Warehouse Instances</th>
                                    <th>Warehouse Choice</th>
                                    <th>Credits Consumed Per Month</th>
                                    <th>Cost (per month)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderRows()}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Row id="TotalComputeRow" className="justify-content-md-center">
                    <Col id="TotalComputeCol1" md={6} xs={12} lg={6}>
                        <TotalCompute
                        total_credits_consumed_monthly={this.state.total_credits_consumed_monthly}
                        total_cost_monthly={this.state.total_cost_monthly}     
                        />
                    </Col>
                    <Col id="TotalComputeCol2" md={6} xs={"auto"} lg={6}>
                        <ComputePieGraph 
                        row_data={this.state.row_data}
                        />
                        <div style={styles.overlay}>
                            <span style={styles.totalLabel}>% Monthly</span>
                            <span style={styles.totalLabel}>Cost per Warehouse</span>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        )
    }
}

export default ComputeDashboard
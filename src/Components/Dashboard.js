import React, {Component} from 'react';
import {Container, Row, Col, Button} from "react-bootstrap";
import TotalCompute from './ComputeDashboardComponents/TotalCompute';
import '../main.css';
import ComputePieGraph from './ComputeDashboardComponents/ComputePieGraph';
import ComputeTable from './ComputeDashboardComponents/ComputeTable';
import StorageTable from './StorageDashboardComponents/StorageTable';
import TotalStorage from './StorageDashboardComponents/TotalStorage';
import ComputeInfo from './Overlays/ComputeInfo';
import StorageInfo from './Overlays/StorageInfo';

class Dashboard extends Component {
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
                        name: 'Data Loading',
                        per_credit_cost: 3,
                        hours_per_day: 6,
                        days_per_week: 5,
                        warehouse_count: 2,
                        warehouse_size: "XS",
                        monthly_credits_consumed: 260,
                        individual_cost: 780
                    }
                ],
                storage_data: {
                    starting_storage: 4,
                    storage_per_month: 3,
                    on_demand_cost: 40,
                    capacity_cost: 23
                },
                total_cost_monthly: 780,
                total_credits_consumed_monthly: 260,
                row_counter: 1,
                default_name_counter: 1,
            };
        this.findWarehouseSizeValue = this.findWarehouseSizeValue.bind(this);
        this.handleTotalCostChanged = this.handleTotalCostChanged.bind(this);
        this.computeMonthlyTotals = this.computeMonthlyTotals.bind(this);
        this.handleMonthlyStorageChanged = this.handleMonthlyStorageChanged.bind(this);
        this.handleOnDemandCostChanged = this.handleOnDemandCostChanged.bind(this);
        this.handleCapacityCostChanged = this.handleCapacityCostChanged.bind(this);
        this.handleStartingStorageChanged = this.handleStartingStorageChanged.bind(this);
    
    }

    // when user clicks "add row", new row object is pushed to row_data array
    // max rows = 10
    handleAddRow() {
        if (this.state.row_counter < 10) {
            var row = {
                name: 'Function ' + String(this.state.default_name_counter+1),
                per_credit_cost: 3,
                hours_per_day: 6,
                days_per_week: 5,
                warehouse_count: 2,
                warehouse_size: "XS",
                monthly_credits_consumed: 260,
                individual_cost: 780
            }
            
            var row_data = this.state.row_data;
            row_data.push(row);
    
            this.setState({
                row_data: row_data,
                row_counter: this.state.row_counter + 1,
                default_name_counter: this.state.default_name_counter + 1
            });
    
            this.computeMonthlyTotals();
        } else {
            this.setState({
                default_name_counter: this.state.default_name_counter + 1
            });
        }
    }

    // when user clicks "Delete Row" button, row object is delete from row_data array
    handleDeleteRow(i) {
        if (this.state.row_counter > 1) {
            var row_data = this.state.row_data;

            row_data.splice(i, 1);

            this.setState({
                row_data: row_data,
                row_counter: this.state.row_counter - 1
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

    // handles credit cost change and ensures user can only enter a positive value
    handleCreditsCostChanged(i, event) {
        if (event.target.value >= 0) {
            var row_data = this.state.row_data;
            row_data[i].per_credit_cost  = event.target.value;
            this.handleTotalCostChanged(i);
        
            this.setState({
            row_data: row_data
            });
        }
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

// functions that handle storage change
    handleMonthlyStorageChanged(event) {
        if (event.target.value >= 0) {
            var storage_data = this.state.storage_data
            storage_data.storage_per_month = event.target.value
            this.setState({
                storage_data: storage_data
            });
        }
    }

    handleStartingStorageChanged(event) {
        if (event.target.value >= 0) {
            var storage_data = this.state.storage_data
            storage_data.starting_storage = event.target.value
            this.setState({
                storage_data: storage_data
            });
        }
    }

    handleOnDemandCostChanged(event) {
        if (event.target.value >= 0) {
            var storage_data = this.state.storage_data
            storage_data.on_demand_cost = event.target.value
            this.setState({
                storage_data: storage_data
            });
        }
    }

    handleCapacityCostChanged(event) {
        if (event.target.value >= 0) {
            var storage_data = this.state.storage_data
            storage_data.capacity_cost = event.target.value
            this.setState({
                storage_data: storage_data
            });
        }
    }
    
    // ComputeDashboard that contains the compute table for individual warehouses, TotalCompute table, and the ComputePieGraph
    render() {
        // Text inside pie chart styling
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
                <Row className="justify-content-md-left">
                    <h3 id="ComputeH3">Estimate Compute<span id="ComputeInfo"><ComputeInfo/></span></h3>
                </Row>
                <Row className="justify-content-md-center">
                    <Col>
                        <Button variant="outline-primary" size="sm" onClick={this.handleAddRow.bind(this)}>Add Row</Button>
                    </Col>
                    <Col md={12} xs={12} lg={12}>
                        {/* context and row_data passed to compute table */}
                        <ComputeTable context={this} row_data={this.state.row_data} />
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
                            <span style={styles.totalLabel}>Monthly</span>
                            <span style={styles.totalLabel}>Cost per Warehouse</span>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-left">
                    <h3 id="StorageH3">Estimate Storage<span id="StorageInfo"><StorageInfo/></span></h3>
                </Row>
                <Row id="StorageRow">
                    <Col md={6} xs={12} lg={6}>
                        <StorageTable 
                        handleStartingStorageChanged={this.handleStartingStorageChanged}
                        handleMonthlyStorageChanged={this.handleMonthlyStorageChanged} 
                        handleOnDemandCostChanged={this.handleOnDemandCostChanged}
                        handleCapacityCostChanged={this.handleCapacityCostChanged}
                        storage_data={this.state.storage_data} />
                    </Col>
                    <Col md={6} xs={"auto"} lg={6}>
                        <TotalStorage 
                        storage_data={this.state.storage_data} />
                    </Col> 
                </Row>
            </Container>
            
        )
    }
}

export default Dashboard;
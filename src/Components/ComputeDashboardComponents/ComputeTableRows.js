import React from 'react';
import {Form, Button} from 'react-bootstrap';

// function that renders every row object in row_data array
// Compute table for individual warehouses
const ComputeTableRows = (props) => {
    const row_data = props.row_data;
    const context = props.context;
    return row_data.map(function(row, index) {
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
                      min="1"
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
              <td>
                  <Button variant="outline-danger" size="md" onClick={context.handleDeleteRow.bind(context, index)}>Delete</Button>
              </td>
          </tr>
        )})
    };

export default ComputeTableRows;
import React from 'react';
import { ResponsivePieCanvas } from '@nivo/pie'

// compute pie graph component
// updated every time a value in the warehouse compute table changes
function ComputePieGraph(props) {

  // format data for graphing
  let values = props.row_data.map(row => row.individual_cost);
  let labels = props.row_data.map(row => row.name);
  let total_cost_monthly = props.total_cost_monthly;

  let graph_data = values.map(function (value, index){
    return {"value":value, "label":labels[index], "id":labels[index]}
  });

  return (
    <ResponsivePieCanvas
        data={graph_data}
        valueFormat=" <-$,~f"
        margin={{ top: 70, right: 0, bottom: 70, left: 0 }}
        innerRadius={0.55}
        cornerRadius={2}
        colors={{ scheme: 'accent' }}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.6 ] ] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={5}
        radialLabelsTextColor="#333333"
        radialLabelsLinkDiagonalLength={10}
        radialLabelsLinkHorizontalLength={20}
        radialLabelsLinkColor={{ from: 'color' }}
        sliceLabel={function(e){return (e.value/total_cost_monthly*100).toFixed(2) + "%"}}
        sliceLabelsSkipAngle={10}
        sliceLabelsTextColor="#333333"
    />
  )
}

export default ComputePieGraph;
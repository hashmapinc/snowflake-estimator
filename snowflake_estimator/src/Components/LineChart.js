import React from 'react';
import Plot from 'react-plotly.js';
import '../main.css';

class LineChart extends React.Component {
    render() {
            /** function that creates datetime month for a whole year */
            var arr = [];
            var i;
            for (i = 0; i < 12; i++) {
              var d = new Date();
              d.setMonth(d.getMonth()+i);
              var m = d.toISOString().split('T')[0];
              arr.push(m);
            };

            return <Plot className="overlay_linechart"
            data={[
              {
                x: arr,
                y: [.5,1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6],
                type: 'scatter',
                name: 'Low Estimate',
                marker: {color: 'blue'},
              },
              {
                x: arr,
                y: [1,2,3,4,5,6,7,8,9,10,11,12],
                type: 'scatter',
                name: 'Medium Estimate',
                marker: {color: 'green'},
              },
              {
                x: arr,
                y: [2,4,6,8,10,12,14,16,18,20,22,24],
                type: 'scatter',
                marker: {color: 'red'},
                name: 'High Estimate',
              },
            ]}
            layout={ {title: 'Monthly Credit Usage'} }
          />
        ;
      }
    }

export default LineChart;
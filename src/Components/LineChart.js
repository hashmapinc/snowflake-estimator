import React from 'react';
import Plotly from 'plotly.js-basic-dist-min'
import createPlotlyComponent from 'react-plotly.js/factory';
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
            
            /** Calculates low, med, high estimates from given calculated values */
            var low_est = [];
            var med_est = [];
            var high_est = [];

            var low_total = 0;
            var med_total = 0;
            var high_total = 0;

            var low_monthly_credits  = Math.round(this.props.low_calc_results/12);
            var med_monthly_credits  = Math.round(this.props.med_calc_results/12);
            var high_monthly_credits = Math.round(this.props.high_calc_results/12);

            for (i = 0; i < 12; i++) {
              low_est.push(low_monthly_credits+low_total)
              low_total += low_monthly_credits
              med_est.push(med_monthly_credits+med_total)
              med_total += med_monthly_credits
              high_est.push(high_monthly_credits+high_total)
              high_total += high_monthly_credits
        };

            const PlotlyComponent = createPlotlyComponent(Plotly);
            let data = [
              {
                x: arr,
                y: low_est,
                type: 'scatter',
                name: 'Low Estimate',
                marker: {color: 'blue'},
              },
              {
                x: arr,
                y: med_est,
                type: 'scatter',
                name: 'Medium Estimate',
                marker: {color: 'green'},
              },
              {
                x: arr,
                y: high_est,
                type: 'scatter',
                marker: {color: 'red'},
                name: 'High Estimate',
              },
            ];
            let layout = {title: 'Cumulative Credit Usage by Month', autosize: true, legend: {x:0, xanchor: "left", y:1}};
            let useResizeHandler = true;
            let style = {width: "100%", height: "70%", marginBottom: "10px"};
            return (
              <PlotlyComponent className="overlay_linechart" data={data} layout={layout} useResizeHandler={useResizeHandler} style={style}/>
            );
          }
        }

export default LineChart;
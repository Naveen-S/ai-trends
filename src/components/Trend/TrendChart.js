import React, { Component } from 'react';
import Area from '../Chart/Area';
import { CHART_Y_FORMAT } from '../../constants/index';

class TrendChart extends Component {
  // componentDidUpdate(prevProps) {
  //   if (prevProps !== this.props.trendChartData) {
  //   }
  // }
  render() {
    const { trendChartData } = this.props;
    console.log('In render ', trendChartData);

    return (
      <Area
        dataPoints={[...trendChartData]}
        dataOptions={{
          yValueFormatString: CHART_Y_FORMAT,
        }}
        axisX={{
          lineColor: 'white',
          tickLength: 0,
          title: '',
          showInLegend: true,
          labelFontSize: 8,
        }}
        axisY={{
          gridThickness: 0,
          lineColor: 'white',
          showInLegend: true,
          tickLength: 0,
          labelFontSize: 8,
          title: 'Engagement(%)',
          titleFontSize: 12,
        }}
      />
    );
  }
}

export default TrendChart;

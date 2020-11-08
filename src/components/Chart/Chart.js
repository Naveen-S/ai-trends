import React, { Component } from 'react';
import CanvasJSChart from './canvasjs.react';

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.chartOptions = {
      backgroundColor: 'transparent',
      animationEnabled: true,
      exportEnabled: false,
      theme: 'light1',
      toolTip: {
        enabled: this.props.hasOwnProperty('toolTipEnabled')
          ? this.props.toolTipEnabled
          : true,
        animationEnabled: this.props.hasOwnProperty('toolTipEnabled')
          ? this.props.toolTipEnabled
          : false,
      },
      data: [],
      // height: this.props.height ? this.props.height : 200,
      // width: this.props.width ? this.props.width : 300,
      legend: {
        cursor: 'pointer',
        itemclick: this.props.filterOnLegend
          ? this.toggleDataSeries.bind(this)
          : null,
        fontFamily: 'inherit',
      },
      title: {
        text: this.props.title ? this.props.title : '',
        fontFamily: 'inherit',
        horizontalAlign: this.props.titleHorizontalAlign
          ? this.props.titleHorizontalAlign
          : 'left',
      },
      subtitles: this.props.subtitles
        ? this.getSubTitles(this.props.subtitles)
        : [],
      customOptions: {},
    };
  }

  getSubTitles(subtitlesPassed) {
    let subtitles = [];
    subtitlesPassed.forEach((subtitle) => {
      subtitles.push({
        text: subtitle.text,
        verticalAlign: subtitle.verticalAlign
          ? subtitle.verticalAlign
          : 'center',
        fontSize: subtitle.fontSize ? subtitle.fontSize : 12,
        ...subtitle,
      });
    });
    return subtitles;
  }
  
  toggleDataSeries(e) {
    if (typeof e.dataSeries.visible === 'undefined' || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    this.chart.render();
  }

  render() {
    return (
      <div
        className={
          'chart-container ' + this.chartOptions.customOptions.containerClass
        }>
        {
          <CanvasJSChart
            options={this.chartOptions}
            onRef={(ref) => (this.chart = ref)}
          />
        }
      </div>
    );
  }
}

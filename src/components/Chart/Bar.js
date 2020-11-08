import Chart from './Chart';

export default class Bar extends Chart {
  constructor(props) {
    super(props);
    this.chartOptions.data = [
      {
        type: props.type ? props.type : 'bar',
        dataPoints: props.dataPoints,
        showInLegend: props.showInLegend,
        ...props.dataOptions,
      },
    ];

    this.chartOptions.axisX = {
      ...props.axisX,
    };

    this.chartOptions.axisY = {
      ...props.axisY,
    };
  }

  render() {
    return super.render();
  }
}

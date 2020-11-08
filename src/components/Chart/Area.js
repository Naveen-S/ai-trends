import Chart from './Chart';

export default class Area extends Chart {
  constructor(props) {
    super(props);
    this.chartOptions.data = [
      {
        type: props.type ? props.type : 'line',
        dataPoints: props.dataPoints,
        showInLegend: props.showInLegend,
        ...props.dataOptions,
      },
    ];

    this.chartOptions.axisX = {
      ...props.axisX,
      valueFormatString: 'DD MM YYYY',
      interlacedColor: '#F0F8FF',
    };

    this.chartOptions.axisY = {
      ...props.axisY,
    };
    this.chartOptions.zoomEnabled = true;
  }

  render() {
    return super.render();
  }
}

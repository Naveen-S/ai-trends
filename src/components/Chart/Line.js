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
      lineColor: 'white',
      tickLength: 0,
      title: '',
      showInLegend: true,
      labelFontSize: 8,
      valueFormatString: 'DD MM YYYY',
      interlacedColor: '#F0F8FF',
    };

    this.chartOptions.axisY = {
      gridThickness: 0,
      lineColor: 'white',
      showInLegend: true,
      tickLength: 0,
      labelFontSize: 8,
      title: 'Engagement(%)',
      titleFontSize: 12,
    };
    this.chartOptions.zoomEnabled = true;
  }

  componentDidUpdate() {
    this.chartOptions.data = [...this.props.dataPoints];
    super.myRerender({ type: 'line', dataPoints: this.props.dataPoints });
    super.render();
  }

  render() {
    return super.render();
  }
}

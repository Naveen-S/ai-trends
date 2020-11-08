import Chart from './Chart';
import Bar from './Bar';

export default class Column extends Bar {
  constructor(props) {
    super(props);
    this.chartOptions.data = [
      {
        type: props.type ? props.type : 'column',
        dataPoints: props.dataPoints,
        showInLegend: true,
        ...props.dataOptions,
      },
    ];

    if (props.dataPointWidth) {
      this.chartOptions.dataPointWidth = props.dataPointWidth;
    }

    if (props.otherData) {
      this.chartOptions.data = [].concat(
        this.chartOptions.data,
        props.otherData
      );
    }
  }

  render() {
    return super.render();
  }
}

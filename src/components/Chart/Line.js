import Chart from './Chart';

export default class Line extends Chart {

    constructor(props) {
        super(props);
        this.chartOptions.data = [{
            type: props.type ? props.type : "line",		
            dataPoints: props.dataPoints,
            showInLegend: true,
            ... props.dataOptions
        }]

        if(props.otherData) {
            this.chartOptions.data = [].concat(this.chartOptions.data,props.otherData);
        }

        this.chartOptions.axisX = {
            ...props.axisX
        };

        this.chartOptions.axisY = {
            ...props.axisY
        };
    }

    render() {
        return super.render();
    }
}

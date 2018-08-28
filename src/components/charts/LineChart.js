import React, {Component} from 'react';
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries} from 'react-vis';
import url from '../../config/sensordataurl';
import '../../../node_modules/react-vis/dist/style.css';

class LineChart extends Component {

    state = {results: []};

    componentDidMount() {
        fetch(url.url)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                else {
                    throw new Error('Data not found')
                }
            })
            .then(response => this.setState({
                results: response.results.filter((r) => {
                    return r.name === 'Java'
                })
            }));
    }

    render() {

        const dataArr = this.state.results.map((d) => {
            return {
                x: d.year + '/' + d.quarter,
                y: parseFloat(d.count / 1000)
            }
        });

        return (
            <div>
                <XYPlot
                    xType="ordinal"
                    width={800}
                    height={400}>
                    <VerticalGridLines/>
                    <HorizontalGridLines/>
                    <XAxis title="Time"/>
                    <YAxis title="Number"/>
                    <LineSeries
                        data={dataArr}
                        style={{stroke: 'green', strokeWidth: 2}}/>
                </XYPlot>
            </div>
        );
    }
}

export default LineChart;
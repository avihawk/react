import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';


const Chart = props => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    console.log(props.dataPoints);
    const totalMax = Math.max(...dataPointValues);
console.log(totalMax);
    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
                <ChartBar 
                    key={dataPoint.label}
                    value={dataPoint.value} 
                    maxValue={totalMax} 
                    label={dataPoint.label} 
                />
            ))}
        </div>
    );
}

export default Chart;
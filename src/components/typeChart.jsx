import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const TypeChart = ({data})=>{
  
  
    return(
        <div className="chart-container">
             <LineChart width={450} height={300} data={data.slice(0,5)}>
                <Line type="monotone" dataKey="amount" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );

}


export default TypeChart;
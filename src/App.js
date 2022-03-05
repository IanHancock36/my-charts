import "./styles.css";
import React, { useState }from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "2012",
    uv: 983000,
    pv: 1000000,
    amt: 240000
  },
  {
    name: "2013",
    uv: 3000,
    pv: 900000,
    amt: 2210
  },
  {
    name: "2014",
    uv: 867000,
    pv: 900000,
    amt: 2290
  },
  {
    name: "2015",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "2016",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "2017",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "2018",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "2019",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "2020",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "2022",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  
 
];

export default function App() {
  const [data1, setData1] = useState(false)
  return (
    <div>
          { data1 ? 
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#fff" />
      <Bar dataKey="uv" fill="yellow" />
    </BarChart>
      : null}
    </div>
  );
}
// wrap each bar graph with the button to show the indivdual items in the spread sheets. 
import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "PS5",
    games: 590,
    gameplay: 800,
    amt: 1400,
    cnt: 490
  },
  {
    name: "Xbox",
    games: 868,
    gameplay: 967,
    amt: 1506,
    cnt: 590
  },
  {
    name: "Nintendo",
    games: 1397,
    gameplay: 1098,
    amt: 989,
    cnt: 350
  },
  {
    name: "PsP",
    games: 1480,
    gameplay: 1200,
    amt: 1228,
    cnt: 480
  },
  {
    name: "We",
    games: 1520,
    gameplay: 1108,
    amt: 1100,
    cnt: 460
  },

];

export default function ComposedCharts() {
  return (
    <ComposedChart
      width={400}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" scale="band" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="games" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="gameplay" stroke="#ff7300" />
    </ComposedChart>
  );
}

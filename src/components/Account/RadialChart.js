import React from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";

const data = [
  {
    name: "18-24",
    games: 31.47,
    pv: 2400,
    fill: "#8884d8"
  },
  {
    name: "25-29",
    games: 26.69,
    pv: 4567,
    fill: "#83a6ed"
  },
  {
    name: "30-34",
    games: 15.69,
    pv: 1398,
    fill: "#8dd1e1"
  },
  {
    name: "35-39",
    games: 8.22,
    pv: 9800,
    fill: "#82ca9d"
  },
  {
    name: "40-49",
    games: 8.63,
    pv: 3908,
    fill: "#a4de6c"
  },
  {
    name: "50+",
    games: 2.63,
    pv: 4800,
    fill: "#d0ed57"
  },
  {
    name: "unknow",
    games: 6.67,
    pv: 4800,
    fill: "#ffc658"
  }
];

const style = {
  top: 0,
  left: 350,
  lineHeight: "24px"
};

export default function RadialChart() {
  return (
    <RadialBarChart
      width={500}
      height={300}
      cx={150}
      cy={150}
      innerRadius={20}
      outerRadius={140}
      barSize={10}
      data={data}
    >
      <RadialBar
        minAngle={15}
        label={{ position: "insideStart", fill: "#fff" }}
        background
        clockWise
        dataKey="games"
      />
      <Legend
        iconSize={10}
        width={120}
        height={140}
        layout="vertical"
        verticalAlign="middle"
        wrapperStyle={style}
      />
    </RadialBarChart>
  );
}

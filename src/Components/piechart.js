import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const Piechart = () => {
  // Sample data
  const COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];
  const pieData = [
    {
      name: "Apple",
      value: 54.85,
    },
    {
      name: "Samsung",
      value: 47.91,
    },
    {
      name: "Redmi",
      value: 16.85,
    },
    {
      name: "One Plus",
      value: 16.14,
    },
    {
      name: "Others",
      value: 10.25,
    },
  ];
  const data = [
    { name: "Geeksforgeeks", students: 400 },
    { name: "Technical scripter", students: 700 },
    { name: "Geek-i-knack", students: 200 },
    { name: "Geek-o-mania", students: 1000 },
  ];

  return (
    <PieChart width={700} height={700}>
      <Pie data={data} dataKey="students" outerRadius={250} fill="green" />
    </PieChart>
  );
};

export default Piechart;

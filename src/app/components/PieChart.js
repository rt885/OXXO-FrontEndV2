"use client";
import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);


const PieChart = () => {
  const data = {
    labels: [
      "Completed",
      "Not Completed",
    ],
    datasets: [
      {
        label: "Indicador",
        data: [90,10],
        fill: false,
        backgroundColor: [
          "#FF6600",
          'rgb(54, 162, 235)',
        ],
        borderColor: [
          "#ff983f",
          'rgb(54, 162, 235)',
        ]
      },
    ],
  };

  const options = {
    responsive: true,
    tension: 0.2,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: false,
        text: "OXXO Pie Chart",
      },
    },
  };

  return (
    <div className='h-full w-full pie-chart'>
      <Pie data={data} options={options} className="m-auto h-96 w-96"/>
    </div>
  )

};

export default PieChart;

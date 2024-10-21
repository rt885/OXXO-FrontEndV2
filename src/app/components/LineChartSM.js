'use client'
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Registrando los componentes necesarios en ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChartSM = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Info 1',
        data: [65, 59, 80, 81, 56, 55, 33, 65, 59, 80, 81, 56, 55, 33],
        fill: false,
        backgroundColor: '#FF6600',
        borderColor: '#ff983f',
      },
      {
        label: 'Info 2',
        data: [80, 12, 33, 42, 24, 64, 73, 80, 12, 33, 42, 24, 64, 73],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };

  const options = {
    responsive: true,
    tension: 0.2,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        text: 'Transactions Log',
      },
    },
  };

  return (
    <div className='h-full'>
      <Line data={data} options={options} />
    </div>
  )
};

export default LineChartSM;

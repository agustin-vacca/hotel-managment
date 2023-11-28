"use client";

import { FC } from "react";

import { Booking } from "@/models/booking";

import {
  Chart as ChartJS,
  Tooltip,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(Tooltip, CategoryScale, LinearScale, BarElement);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top" as const,
        },
        title: {
            display: true,
            text: "Chart.js Bar Chart"
        },
    },
};

const Chart: FC<{userBooking: Booking[]}> = ({userBooking}) => {
  const labels = userBooking.map(booking => booking.hotelRoom.name);
  const amountSpent = userBooking.map( booking => booking.totalPrice)
  
  return <Bar options={options} data={{
    labels,
    datasets:[
        {
            label: "Amount spent",
            data: amountSpent,
            borderWidth: 1,
            backgroundColor: "#F27405",
            hoverBackgroundColor: "#F2C641"
        }
    ]
  }}  />;
};

export default Chart;

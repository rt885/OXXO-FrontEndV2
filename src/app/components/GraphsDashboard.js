"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import PieChart from "./PieChart";
import LineChart from "./LineChart";

function GraphsDashboard() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container mb-10">
      <Slider {...settings}>
        {/* Line Chart */}
        <div className=" my-card h-84 rounded-md shadow-md">
          <p>Transaction Logs</p>
          <LineChart />
        </div>
        {/* Pie Chart */}
        <div className="pie-height rounded-md shadow-md mx-auto">
          <p>Last ESL Updates status</p>
          <PieChart />
        </div>
      </Slider>
    </div>
  );
}

export default GraphsDashboard;

"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import PieChart from "./PieChart";

function CardDashboard() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <div className="slider-container">
      <Slider {...settings}>
        {/* Primer Indicador */}
        <div className="bg-white my-grid h-40 rounded-md shadow-md">
          <p className="col-start-1 text-left pl-5 lg:text-lg text-base">Associated</p>
          <p className="col-start-1 text-left pl-5 lg:text-lg text-base">2,500</p>
          <p className="col-start-1 text-left pl-5 lg:text-lg text-base">Total ESL...</p>
          <p className="col-start-1 text-left pl-5 lg:text-lg text-base">3,000</p>
          <div className="col-start-2 row-start-1 row-end-5 m-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              className="w-16 h-16"
            >
              <path
                fillRule="evenodd"
                d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        {/* Segundo Indicador */}
        <div className="bg-white my-grid h-40 rounded-md shadow-md">
          <p className="col-start-1 text-left pl-5 lg:text-lg text-base">Battery</p>
          <p className="col-start-1 text-left pl-5 lg:text-lg text-base">0</p>
          <p className="col-start-1 text-left pl-5 lg:text-lg text-base">Exhausted</p>
          <p className="col-start-1 text-left pl-5 lg:text-lg text-base">0</p>
          <div className="col-start-2 row-start-1 row-end-3 m-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="w-16 h-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5ZM3.75 18h15A2.25 2.25 0 0 0 21 15.75v-6a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 1.5 9.75v6A2.25 2.25 0 0 0 3.75 18Z"
              />
            </svg>
          </div>
          <div className="col-start-2 row-start-3 row-end-4 m-auto">
            <p className="pl-5 lg:text-lg text-base">Normal</p>
          </div>
          <div className="col-start-2 row-start-4 row-end-5 m-auto">
            <p className="pl-5 lg:text-lg text-base">2,500</p>
          </div>
        </div>
        {/* Tercer Indicador */}
        <div className="bg-white my-grid h-40 rounded-md shadow-md">
          <p className="col-start-1 text-left pl-5 lg:text-lg text-base">Processing</p>
          <p className="col-start-1 text-left pl-5 lg:text-lg text-base">0</p>
          <p className="col-start-1 text-left pl-5 lg:text-lg text-base">Upd. Com.</p>
          <p className="col-start-1 text-left pl-5 lg:text-lg text-base">500</p>
          <div className="col-start-2 row-start-1 row-end-3 m-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="w-16 h-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </div>
          <div className="col-start-2 row-start-3 row-end-4 m-auto">
            <p className="pl-5 lg:text-lg text-base">Upd. Failed</p>
          </div>
          <div className="col-start-2 row-start-4 row-end-5 m-auto">
            <p className="pl-5 lg:text-lg text-base">8</p>
          </div>
        </div>
        {/* Cuarto Indicador */}
        <div className="bg-white my-grid h-40 rounded-md shadow-md">
          <p className="col-start-1 text-left pl-5 lg:text-lg text-base">AP Status</p>
          <p className="col-start-1 text-left pl-5 lg:text-lg text-base">1</p>
          <p className="col-start-1 text-left pl-5 lg:text-lg text-base text-green-500">
            Online
          </p>
          <div className="col-start-1 row-start-4 row-end-5 ml-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
          </div>
          <div className="col-start-2 row-start-2 row-end-3 m-auto">
            <p className="pl-5 text-md">2024-04-15</p>
          </div>
          <div className="col-start-2 row-start-3 row-end-4 m-auto">
            <p className="pl-5 text-md">18:01:33</p>
          </div>
          <div className="col-start-2 row-start-4 row-end-5 m-auto">
            <p className="pl-5 text-md">127.0.0.1</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default CardDashboard;

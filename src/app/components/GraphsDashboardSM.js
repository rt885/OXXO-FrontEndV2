"use client";
import React from "react";
import PieChart from "./PieChart";
import LineChart from "./LineChart";

function GraphsDashboardSM() {
  return (
    <div className="flex flex-col space-between">
      {/* Line Chart */}
      <div className="h-20 mb-10">
        <p>Transaction Logs</p>
        <LineChart />
      </div>
      {/* Pie Chart */}
      <div className="h-20 mt-10">
        <p>Last ESL Updates status</p>
        <PieChart />
      </div>
    </div>
  );
}

export default GraphsDashboardSM;

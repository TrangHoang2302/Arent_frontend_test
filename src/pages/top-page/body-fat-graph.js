/*************************
 * Copyright 2023
 * Body fat percentage graph
 * Author: TrangHoang
 * url: src/pages/top-page/body-fat-graph.js
 *************************/

import React from "react";

import { Line } from "react-chartjs-2";
import { Box } from "@mui/material";

const data = {
    labels: ["6h", "7h", "8h", "9h", "10h", "11h", "12h", "1h", "2h", "3h", "4h", "5h"],
    datasets: [
        {
            label: "First dataset",
            data: [...Array(12)].map((_, i) => Math.random() * 51),
            fill: false,
            borderColor: "#FFCC21",
        },
        {
            label: "Second dataset",
            data: [...Array(12)].map((_, i) => Math.random() * 51),
            fill: false,
            borderColor: "#8FE9D0",
        },
    ],
};

const BodyFatGraph = () => {
    return (
        <Box sx={{ background: "rgba(0,0,0,0.8)", height: 312 }}>
            <Line data={data} />
        </Box>
    );
};
export default BodyFatGraph;

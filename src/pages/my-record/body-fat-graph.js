/*************************
 * Copyright 2023
 * Body fat percentage graph
 * Author: TrangHoang
 * url: src/pages/my-record/body-fat-graph.js
 *************************/

import React, { useState } from "react";

import { Line } from "react-chartjs-2";
import { Box, Button, Typography } from "@mui/material";
import moment from "moment";

const data = {
    day: {
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
    },
    week: {
        labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        datasets: [
            {
                label: "First dataset",
                data: [...Array(7)].map((_, i) => Math.random() * 50),
                fill: false,
                borderColor: "#FFCC21",
            },
            {
                label: "Second dataset",
                data: [...Array(7)].map((_, i) => Math.random() * 50),
                fill: false,
                borderColor: "#8FE9D0",
            },
        ],
    },

    month: {
        labels: [...Array(moment().daysInMonth())].map((_, i) => i + 1),
        datasets: [
            {
                label: "First dataset",
                data: [...Array(moment().daysInMonth())].map((_, i) => Math.random() * 50),
                fill: false,
                borderColor: "#FFCC21",
            },
            {
                label: "Second dataset",
                data: [...Array(moment().daysInMonth())].map((_, i) => Math.random() * 50),
                fill: false,
                borderColor: "#8FE9D0",
            },
        ],
    },
    year: {
        labels: [...Array(12)].map((_, i) => i + 1),
        datasets: [
            {
                label: "First dataset",
                data: [...Array(12)].map((_, i) => Math.random() * 50),
                fill: false,
                borderColor: "#FFCC21",
            },
            {
                label: "Second dataset",
                data: [...Array(12)].map((_, i) => Math.random() * 50),
                fill: false,
                borderColor: "#8FE9D0",
            },
        ],
    },
};

const BodyFatGraph = () => {
    const arrType = ["Day", "Week", "Month", "Year"];
    const [type, setType] = useState(arrType[0]);

    /**
     * event onClick of button Type
     * @param typeM
     */
    const changeType = typeM => {
        setType(typeM);
    };

    return (
        <Box sx={{ background: "rgba(0,0,0,0.8)", padding: 4 }}>
            <Box sx={{ color: "white" }} display="flex">
                <Typography
                    sx={{
                        whiteSpace: "pre-line",
                        width: 96,
                    }}
                    variant={"h6"}
                >{`BODY \n RECORD`}</Typography>
                <Typography variant={"h4"}>{`${moment().format("YYYY.MM.DD")}`}</Typography>
            </Box>
            <Line data={data[type.toLowerCase()]} />

            {/*button Type*/}
            <Box display="flex" gap={2} alignItems="center">
                {arrType.map((typeM, index) => (
                    <Button key={index} variant={"outlined"} onClick={() => changeType(typeM)}>
                        {typeM}
                    </Button>
                ))}
            </Box>
        </Box>
    );
};
export default BodyFatGraph;

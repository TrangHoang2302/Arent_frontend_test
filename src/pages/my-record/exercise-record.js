/*************************
 * Copyright 2023
 * Exercise record
 * Author: TrangHoang
 * url: src/pages/my-record/exercise-record.js
 *************************/

import React from "react";

import { Box, Typography } from "@mui/material";
import moment from "moment";

const data = [
    {
        name: "家事全般（立位・軽い）",
        time: "10 min",
        calo: "26kcal",
    },
    {
        name: "家事全般（立位・軽い）",
        time: "10 min",
        calo: "26kcal",
    },
    {
        name: "家事全般（立位・軽い）",
        time: "10 min",
        calo: "26kcal",
    },
    {
        name: "家事全般（立位・軽い）",
        time: "10 min",
        calo: "26kcal",
    },
    {
        name: "家事全般（立位・軽い）",
        time: "10 min",
        calo: "26kcal",
    },
    {
        name: "家事全般（立位・軽い）",
        time: "10 min",
        calo: "26kcal",
    },
    {
        name: "家事全般（立位・軽い）",
        time: "10 min",
        calo: "26kcal",
    },
    {
        name: "家事全般（立位・軽い）",
        time: "10 min",
        calo: "26kcal",
    },
    {
        name: "家事全般（立位・軽い）",
        time: "10 min",
        calo: "26kcal",
    },
    {
        name: "家事全般（立位・軽い）",
        time: "10 min",
        calo: "26kcal",
    },
    {
        name: "家事全般（立位・軽い）",
        time: "10 min",
        calo: "26kcal",
    },
    {
        name: "家事全般（立位・軽い）",
        time: "10 min",
        calo: "26kcal",
    },
    {
        name: "家事全般（立位・軽い）",
        time: "10 min",
        calo: "26kcal",
    },
    {
        name: "家事全般（立位・軽い）",
        time: "10 min",
        calo: "26kcal",
    },
];

const ExerciseRecord = () => {
    return (
        <Box sx={{ background: "rgba(0,0,0,0.8)", padding: 4 }}>
            <Box sx={{ color: "white" }} display="flex">
                <Typography
                    sx={{
                        whiteSpace: "pre-line",
                        width: 96,
                    }}
                    variant={"h6"}
                >{`MY \n EXERCISE`}</Typography>
                <Typography variant={"h4"}>{`${moment().format("YYYY.MM.DD")}`}</Typography>
            </Box>
            <Box sx={{ maxHeight: 264, overflowY: "scroll" }}>
                <Box component={"ul"} sx={{ columns: 2, columnWidth: "50%" }}>
                    {data.map((item, index) => (
                        <Box
                            key={index}
                            sx={{ borderBottom: "1px solid #777777", marginBottom: 2 }}
                            component={"li"}
                            display={"flex"}
                            flexWrap={"wrap"}
                        >
                            <Typography sx={{ color: "white", width: "50%" }}>{item.name}</Typography>
                            <Typography sx={{ color: "#FFCC21", width: "50%" }} align="right">
                                {item.time}
                            </Typography>
                            <Typography sx={{ color: "#FFCC21", width: "50%" }}>{item.calo}</Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};
export default ExerciseRecord;

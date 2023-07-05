/*************************
 * Copyright 2023
 * Author: TrangHoang
 * url: src/pages/my-record/index.js
 *************************/

import React from "react";
import { Grid, Box } from "@mui/material";
import Record from "../../components/record";
import BodyFatGraph from "./body-fat-graph.js";
import ExerciseRecord from "./exercise-record.js";
import Diary from "./diary.js";

const arrBtnMove = [
    {
        content1: "BODY RECORD",
        content2: "自分のカラダの記録",
        image: require("../../assets/image/MyRecommend-1.jpg"),
    },
    {
        content1: "MY EXERCISE",
        content2: "自分の運動の記録",
        image: require("../../assets/image/MyRecommend-2.jpg"),
    },
    {
        content1: "MY DIARY",
        content2: "自分の日記",
        image: require("../../assets/image/MyRecommend-3.jpg"),
    },
];

const MyRecord = () => {
    return (
        <Grid container spacing={10}>
            {/*Button to move to each entry screen*/}
            <Grid item xs={12}>
                <Box display="flex" justifyContent="center" gap={2} alignItems="center">
                    {arrBtnMove.map((btn, index) => (
                        <Record key={index} {...btn} />
                    ))}
                </Box>
            </Grid>

            {/*Body fat percentage graph*/}
            <Grid item xs={12}>
                <BodyFatGraph />
            </Grid>

            {/*Exercise record*/}
            <Grid item xs={12}>
                <ExerciseRecord />
            </Grid>

            {/*Diary*/}
            <Grid item xs={12}>
                <Diary />
            </Grid>
        </Grid>
    );
};

export default MyRecord;

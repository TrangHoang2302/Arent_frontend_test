/*************************
 * Copyright 2023
 * Author: TrangHoang
 * url: src/pages/top-page/index.js
 *************************/

import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import Hex from "../../components/hex";
import BodyFatGraph from "./body-fat-graph";
import moment from "moment";

/**
 * data button to transit to input
 * @type {[{icon: string, label: string, id: string},{icon: string, label: string, id: string},{icon: string, label: string, id: string},{icon: string, label: string, id: string}]}
 */
const arrButton = [
    {
        icon: "",
        label: "Morning",
        id: "btnMorning",
    },
    {
        icon: "",
        label: "Lunch",
        id: "btnLunch",
    },
    {
        icon: "",
        label: "Dinner",
        id: "btnDinner",
    },
    {
        icon: "",
        label: "Snack",
        id: "btnSnack",
    },
];

/**
 * data list meal history
 * @type {[{src: *, time: moment.Moment, id: string},{src: *, time: moment.Moment, id: string},{src: *, time: moment.Moment, id: string},{src: *, time: moment.Moment, id: string}]}
 */
const arrMealHistory = [
    {
        time: moment().format(),
        src: require("../../assets/image/m01.jpg"),
        id: "m01",
    },
    {
        time: moment().format(),
        src: require("../../assets/image/m02.jpg"),
        id: "m02",
    },
    {
        time: moment().format(),
        src: require("../../assets/image/m03.jpg"),
        id: "m03",
    },
    {
        time: moment().format(),
        src: require("../../assets/image/l03.jpg"),
        id: "l03",
    },
];

const styles = {
    positionAbsolute: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        border: "2px solid white",
        borderRadius: 100,
        width: 180,
        height: 180,
        color: "white",
    },
    box1: {
        // height: 312,
        width: "100%",
        objectFit: "cover",
    },
    box2: {
        width: "100%",
        height: 312,
        objectFit: "cover",
    },
    box3: {
        width: 234,
        height: 241,
        objectFit: "cover",
    },
};

const TopPage = () => {
    return (
        <Grid container justifyContent="center">
            {/*Date-Achievement rate*/}
            <Box sx={{ minWidth: "100vw" }} display={"flex"}>
                <Grid container justifyContent="center" sx={{ minWidth: "100vw" }}>
                    <Grid item xs={4}>
                        <Box sx={{ position: "relative" }}>
                            <Box component="img" sx={styles.box1} alt="" src={require("../../assets/image/d01.jpg")} />
                            <Box
                                sx={styles.positionAbsolute}
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Typography>{`${moment().format("DD-MM")} - 75%}`}</Typography>
                            </Box>
                        </Box>
                    </Grid>

                    {/*Body weight - Body fat percentage graph*/}
                    <Grid item xs={8}>
                        <BodyFatGraph />
                    </Grid>
                </Grid>
            </Box>

            {/*Button to transit to input*/}
            <Grid item xs={10}>
                <Box display="flex" justifyContent="center" gap={12} alignItems="center" sx={{ padding: "22px 0" }}>
                    {arrButton.map((menu, index) => (
                        <Hex key={index} {...menu} />
                    ))}
                </Box>
            </Grid>

            {/*Meal history*/}
            <Grid item xs={10}>
                <Box display="flex" justifyContent="center" gap={2} alignItems="center">
                    {arrMealHistory.map((history, index) => (
                        <Box key={index} component="img" sx={styles.box3} alt="" src={history.src} />
                    ))}
                </Box>
            </Grid>
        </Grid>
    );
};

export default TopPage;

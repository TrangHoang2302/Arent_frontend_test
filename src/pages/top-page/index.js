/*************************
 * Copyright 2023
 * Author: TrangHoang
 * url: src/pages/top-page/index.js
 *************************/

import React, { useMemo } from "react";
import { Grid, Box } from "@mui/material";
import Hex from "../../component/hex";
import moment from "moment";

const TopPage = () => {
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
     * function random date
     * @type {moment.Moment}
     */
    const renderDate = useMemo(() => {
        return moment().add(Math.random() * 10, "days");
    }, []);

    /**
     * data list meal history
     * @type {[{src: *, time: moment.Moment, id: string},{src: *, time: moment.Moment, id: string},{src: *, time: moment.Moment, id: string},{src: *, time: moment.Moment, id: string}]}
     */
    const arrMealHistory = [
        {
            time: renderDate,
            src: require("../../assets/image/m01.jpg"),
            id: "m01",
        },
        {
            time: renderDate,
            src: require("../../assets/image/m02.jpg"),
            id: "m02",
        },
        {
            time: renderDate,
            src: require("../../assets/image/m03.jpg"),
            id: "m03",
        },
        {
            time: renderDate,
            src: require("../../assets/image/l03.jpg"),
            id: "l03",
        },
    ];

    return (
        <Grid container justifyContent="center">
            {/*Date-Achievement rate*/}
            <Grid item xs={4}>
                <Box
                    component="img"
                    sx={{
                        width: "100%",
                        height: 312,
                        objectFit: "cover",
                    }}
                    alt=""
                    src={require("../../assets/image/d01.jpg")}
                />
            </Grid>

            {/*Body weight - Body fat percentage graph*/}
            <Grid item xs={8}>
                <Box
                    component="img"
                    sx={{
                        width: "100%",
                        height: 312,
                        objectFit: "cover",
                    }}
                    alt=""
                    src={require("../../assets/image/chart.jpg")}
                />
            </Grid>

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
                        <Box
                            key={index}
                            component="img"
                            sx={{
                                width: 234,
                                height: 241,
                                objectFit: "cover",
                            }}
                            alt=""
                            src={history.src}
                        />
                    ))}
                </Box>
            </Grid>
        </Grid>
    );
};

export default TopPage;

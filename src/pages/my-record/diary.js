/*************************
 * Copyright 2023
 * Diary
 * Author: TrangHoang
 * url: src/pages/my-record/diary.js
 *************************/

import React, { useState } from "react";

import { Box, Typography, Grid, Button } from "@mui/material";
import moment from "moment";

const styles = {
    equalWidth: {
        border: "2px solid #707070",
        padding: 1,
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        overflow: "hidden",
    },
    position: {
        position: "relative",
        paddingTop: "100%",
        width: "100%",
    },
};

const data = [
    {
        time: moment(),
        content:
            "私の日記の記録が一部表示されます。\n テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス",
    },
    {
        time: moment(),
        content:
            "私の日記の記録が一部表示されます。\n テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス",
    },
    {
        time: moment(),
        content:
            "私の日記の記録が一部表示されます。\n テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス",
    },
    {
        time: moment(),
        content:
            "私の日記の記録が一部表示されます。\n テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス",
    },
    {
        time: moment(),
        content:
            "私の日記の記録が一部表示されます。\n テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス",
    },
    {
        time: moment(),
        content:
            "私の日記の記録が一部表示されます。\n テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス",
    },
    {
        time: moment(),
        content:
            "私の日記の記録が一部表示されます。\n テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス",
    },
    {
        time: moment(),
        content:
            "私の日記の記録が一部表示されます。\n テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス",
    },
];

const Diary = () => {
    const [dataDiary, setDateDiary] = useState(data);

    /**
     * loadMore data
     */
    const loadMore = () => {
        setDateDiary([...dataDiary, ...data]);
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant={"h6"}>{`MY DIARY`}</Typography>
            </Grid>

            {/*list Diary*/}
            {dataDiary.map((item, index) => (
                <Grid item xs={4} sm={3}>
                    <Box sx={styles.position}>
                        <Box key={index} sx={styles.equalWidth} display={"flex"} flexWrap={"wrap"}>
                            <Typography sx={{ whiteSpace: "pre-line" }}>
                                {moment(item.time).format("YYYY.MM.DD [\n] HH:mm")}
                            </Typography>
                            <Typography>{item.content}</Typography>
                        </Box>
                    </Box>
                </Grid>
            ))}

            {/*Button load more*/}
            <Grid xs={12} item display="flex" justifyContent="center" alignItems="center">
                <Button color={"warning"} onClick={loadMore} variant={"contained"}>
                    自分の日記をもっと見る
                </Button>
            </Grid>
        </Grid>
    );
};
export default Diary;

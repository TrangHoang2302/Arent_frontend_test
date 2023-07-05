/*************************
 * Copyright 2023
 * Author: TrangHoang
 * url: src/pages/column-page/index.js
 *************************/

import React, { useState } from "react";
import { Grid, Box, Typography, Button } from "@mui/material";

const dataRecommended = [
    {
        content1: "RECOMMENDED COLUMN",
        content2: "オススメ",
    },
    {
        content1: "RECOMMENDED DIET",
        content2: "ダイエット",
    },
    {
        content1: "RECOMMENDED BEAUTY",
        content2: "美容",
    },
    {
        content1: "RECOMMENDED HEALTH",
        content2: "健康",
    },
];

const dataCol = [
    {
        content1: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        content2: "#魚料理  #和食  #DHA",
        image: require("../../assets/image/column-1.jpg"),
    },
    {
        content1: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        content2: "#魚料理  #和食  #DHA",
        image: require("../../assets/image/column-2.jpg"),
    },
    {
        content1: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        content2: "#魚料理  #和食  #DHA",
        image: require("../../assets/image/column-3.jpg"),
    },
    {
        content1: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        content2: "#魚料理  #和食  #DHA",
        image: require("../../assets/image/column-4.jpg"),
    },
    {
        content1: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        content2: "#魚料理  #和食  #DHA",
        image: require("../../assets/image/column-5.jpg"),
    },
    {
        content1: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        content2: "#魚料理  #和食  #DHA",
        image: require("../../assets/image/column-6.jpg"),
    },
    {
        content1: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        content2: "#魚料理  #和食  #DHA",
        image: require("../../assets/image/column-7.jpg"),
    },
    {
        content1: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        content2: "#魚料理  #和食  #DHA",
        image: require("../../assets/image/column-8.jpg"),
    },
];

const styles = {
    textOverFlow: {
        maxHeight: 48,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "pre-line",
    },
    box: {
        backgroundColor: "#2E2E2E",
        height: 144,
        padding: 2,
    },
};
const ColumnPage = () => {
    const [dataColumn, setDataColumn] = useState(dataCol);
    /**
     * loadMore data
     */
    const loadMore = () => {
        setDataColumn([...dataColumn, ...dataCol]);
    };

    return (
        <>
            <Grid container spacing={4} sx={{ marginBottom: 8 }}>
                {dataRecommended.map((item, idx) => (
                    <Grid item key={idx} xs={3}>
                        <Box
                            display={"flex"}
                            flexDirection={"column"}
                            justifyContent="center"
                            alignItems="center"
                            sx={styles.box}
                        >
                            <Typography align={"center"} variant={"h5"} sx={{ color: "#FFCC21" }}>
                                {item.content1}
                            </Typography>
                            <Box component={"hr"} sx={{ width: "30%", margin: "10px 0" }}></Box>
                            <Typography sx={{ color: "white" }}>{item.content2}</Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
            <Grid container spacing={1}>
                {dataColumn.map((item, idx) => (
                    <Grid item xs={3} key={idx}>
                        <Box
                            component="img"
                            src={item.image}
                            sx={{
                                width: "100%",
                                height: 144,
                            }}
                        />
                        <Typography sx={styles.textOverflow}>{item.content1}</Typography>
                        <Typography variant={"p4"} sx={{ color: "#FF963C" }}>
                            {item.content2}
                        </Typography>
                    </Grid>
                ))}

                {/*Button load more*/}
                <Grid xs={12} item display="flex" justifyContent="center" alignItems="center" sx={{ marginTop: 2 }}>
                    <Button color={"warning"} onClick={loadMore} variant={"contained"}>
                        自分の日記をもっと見る
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

export default ColumnPage;

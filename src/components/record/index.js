/*************************
 * Copyright 2023
 * Author: TrangHoang
 * url: src/components/record/index.js
 *************************/

import React from "react";
import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

const style = {
    positionCenter: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        whiteSpace: "pre",
    },
};
const Record = props => {
    const { content1, content2, image } = props;
    return (
        <Box
            sx={{
                width: 288,
                height: 288,
                border: "24px solid #FFCC21",
                position: "relative",
            }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            gap={2}
            alignItems="center"
        >
            <Box
                sx={{
                    ...style.positionCenter,
                    width: "100%",
                    height: "100%",
                    filter: "brightness(0.4)",
                }}
                component={"img"}
                src={image}
            />
            <Box
                sx={{ ...style.positionCenter, color: "white" }}
                display="flex"
                flexDirection="column"
                alignItems="center"
            >
                <Typography variant={"h4"} sx={{ color: "#FFCC21", marginBottom: 2 }}>
                    {content1}
                </Typography>
                <Typography align={"center"} sx={{ width: 160, backgroundColor: "#FF963C", lineHeight: "24px" }}>
                    {content2}
                </Typography>
            </Box>
        </Box>
    );
};

Record.propTypes = {
    content1: PropTypes.string,
    content2: PropTypes.string,
    image: PropTypes.string,
};

export default Record;

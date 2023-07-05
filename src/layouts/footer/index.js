/*************************
 * Copyright 2023
 * Author: TrangHoang
 * url: src/layout/footer/index.js
 *************************/

import { browserHistory, Link } from "react-router";
import { Box } from "@mui/material";
import React from "react";

const Footer = () => {
    const arrLink = [
        { label: "会員登録", link: "" },
        { label: "運営会社", link: "" },
        { label: "利用規約", link: "" },
        { label: "個人情報の取扱について", link: "" },
        { label: "特定商取引法に基づく表記", link: "" },
        { label: "お問い合わせ", link: "" },
    ];

    const onLink = url => url && browserHistory.push(url);

    return (
        <Box
            sx={{
                backgroundColor: "#414141",
                position: "fixed",
                bottom: 0,
                left: 0,
                width: "100%",
                height: 128,
            }}
            display={"flex"}
            alignItems={"center"}
        >
            <Box
                sx={{ height: 64, maxWidth: "100%", width: 960, margin: "auto" }}
                display={"flex"}
                alignItems={"center"}
            >
                <Box
                    gap={5}
                    display="flex"
                    alignItems="center"
                    sx={{
                        color: "#FFFFFF",
                    }}
                    flexWrap={"wrap"}
                >
                    {arrLink.map((link, index) => {
                        return (
                            <Link key={index} onClick={onLink}>
                                {link.label}
                            </Link>
                        );
                    })}
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;

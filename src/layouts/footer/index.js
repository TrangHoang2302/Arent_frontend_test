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
            display="flex"
            gap={11}
            alignItems="center"
            flexDirection={"wrap"}
            sx={{
                width: "100%",
                height: 128,
                padding: "56px 160px",
                background: "#414141",
                position: "fixed",
                bottom: 0,
                left: 0,
                color: "#FFFFFF",
            }}
        >
            {arrLink.map((link, index) => {
                return (
                    <Link key={index} onClick={onLink}>
                        {link.label}
                    </Link>
                );
            })}
        </Box>
    );
};

export default Footer;

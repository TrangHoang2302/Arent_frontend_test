/*************************
 * Copyright 2023
 * Author: TrangHoang
 * url: src/container/index.js
 *************************/

import React, { Component } from "react";
import { Box } from "@mui/material";

import Header from "../layouts/header";
import Footer from "../layouts/footer";

class Index extends Component {
    render() {
        const { children } = this.props;
        return (
            <>
                <Header />
                <Box sx={{ maxWidth: 960, margin: "auto", padding: "64px 0 128px 0" }}>{children}</Box>
                <Footer />
            </>
        );
    }
}

export default Index;

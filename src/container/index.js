/*************************
 * Copyright 2023
 * Author: TrangHoang
 * url: src/container/index.js
 *************************/

import React, { Component } from "react";

import Header from "../layouts/header";
import Footer from "../layouts/footer";

class Index extends Component {
    render() {
        const { children } = this.props;
        return (
            <>
                <Header />
                {children}
                <Footer />
            </>
        );
    }
}

export default Index;

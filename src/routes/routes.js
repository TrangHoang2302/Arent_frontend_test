/*************************
 * Copyright 2023
 * Author: TrangHoang
 * url: src/routers/routers.js
 *************************/

import React, { Component } from "react";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import Index from "../container";

import ModuleNotFound from "../pages/not-found";
import TopPage from "../pages/top-page";
import ColumnPage from "../pages/column-page";

class Routes extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                {/* Default */}
                <Route path={"/"} component={Index}>
                    <IndexRoute component={TopPage} />
                    <Route path={"/column-page"} component={ColumnPage} />
                    <Route path="*" exact={true} component={ModuleNotFound} />
                </Route>
            </Router>
        );
    }
}

export default Routes;

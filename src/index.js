/*************************
 * Copyright 2023
 * Author: TrangHoang
 * url: src/index.js
 *************************/

import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes/routes.js";

function render(Component) {
    ReactDOM.render(<Component />, document.getElementById("root"));
}

render(Routes);

if (module.hot) {
    module.hot.accept("./routes/routes.js", () => {
        const NextApp = require("./routes/routes.js").default;
        render(NextApp);
    });
}

import React from "react";
import ReactDOM from "react-dom";
import Badge from "./Components/Badge";
import "bulma/css/bulma.css";
import * as serviceWorker from "./serviceWorker";
import "./global.css";
ReactDOM.render(<Badge />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

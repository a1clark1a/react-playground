import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import AppPal from "./paltrows-power-toes/App";

ReactDOM.render(
  <BrowserRouter>
    <AppPal />
  </BrowserRouter>,
  document.getElementById("root")
);

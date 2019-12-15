import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import AppPal from "./paltrows-power-toes/App";
import AppLang from "./lang-context/AppLang";

//Use App for project: composition, demonymApp, leapyearprogram, state_drills and state
//Use AppPal for project: paltrows-power-toes

ReactDOM.render(
  <BrowserRouter>
    <AppLang />
  </BrowserRouter>,
  document.getElementById("root")
);

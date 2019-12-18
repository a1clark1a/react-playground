import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import AppPal from "./paltrows-power-toes/App";
import AppLang from "./lang-context/AppLang";
import RegistrationForm from "./registrationForm/registrationForm";
import CRegistrationForm from "./controlledRegistrationForm/ContRegistrationForm";
import ErrorApp from "./playingwithdanger/App";

//Use App for project: composition, demonymApp, leapyearprogram, state_drills and state
//Use AppPal for project: paltrows-power-toes
//Use AppLang for language context project
//Use RegistrationForm for uncontrolled form component
//Use CRegistrationForm for controlled form component

ReactDOM.render(
  <BrowserRouter>
    <ErrorApp />
  </BrowserRouter>,
  document.getElementById("root")
);

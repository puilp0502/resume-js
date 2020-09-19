import { hot } from "react-hot-loader/root";
import React from "react";
import ReactDOM from "react-dom";
import _App, { ResumeData } from "./App";

const App = hot(_App);
import resumeData from "../resume.json";
ReactDOM.render(
  <App resumeData={resumeData as ResumeData} />,
  document.getElementById("root")
);

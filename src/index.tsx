import React from "react";
import { render } from "react-dom";

import { App } from "./development/App";

import "./styles/global.css";

if (process.env.NODE_ENV === "development") {
  const container = document.getElementById("app");
  render(<App />, container);
}

export * from "./components";

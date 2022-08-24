import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import "./sass/index.sass";
import App from "./components/App/App";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.querySelector("#root")
);

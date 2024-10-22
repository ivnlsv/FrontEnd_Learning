import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobaStyle } from './Styles/GlobalStyles';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobaStyle />
    <App />
  </React.StrictMode>
);

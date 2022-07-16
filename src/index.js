import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import * as serviceWorker from "./service";
import reportWebVitals from "./reportWebVitals";
import { DataLayer } from "./DataLayer";
import reducer, { initalState } from "./reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataLayer initalState={initalState} reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <DataLayer initalState reducer>
//       <App />
//     </DataLayer>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// serviceWorker.unregister();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

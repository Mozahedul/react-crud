import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalState } from "./context/GlobalState";
import TodoReducer, { initialState } from "./context/TodoReducer";

ReactDOM.render(
  <React.StrictMode>
    <GlobalState reducer={TodoReducer} initialState={initialState}>
      <App />
    </GlobalState>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

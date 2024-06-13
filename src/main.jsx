import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import GlobalStyle from "./GlobalStyle.jsx";
import { createGlobalStyle } from "styled-components";
import { configureStore } from "@reduxjs/toolkit";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <Provider configureStore={configureStore}>
  //   <GlobalStyle />
  //   <App />
  // </Provider>
  <>
    <GlobalStyle />
    <App />
  </>
);

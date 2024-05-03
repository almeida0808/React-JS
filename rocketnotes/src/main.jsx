import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/global"
import temas from "./styles/temas";

import {Routes} from './routes'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={temas}>
      <GlobalStyles/>
      <Routes/>

    </ThemeProvider>

  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { Details } from "./pages/Details";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/global"

import temas from "./styles/temas";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={temas}>
      <GlobalStyles/>
      <Details />
    </ThemeProvider>
  </React.StrictMode>
);

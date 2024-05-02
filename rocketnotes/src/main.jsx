import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/global"
import temas from "./styles/temas";

import { Home } from "./pages/Home";
import {SignIn} from "./pages/SignIn"
import {SignUp} from "./pages/SignUp"
import { Profile } from "./pages/Profile";
import { NewNote } from "./pages/NewNote";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={temas}>
      <GlobalStyles/>
      <NewNote/>

    </ThemeProvider>

  </React.StrictMode>
);

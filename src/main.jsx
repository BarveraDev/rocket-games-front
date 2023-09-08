import React from "react";
import ReactDOM from "react-dom/client";
import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { Routes } from "./routes";
import { AuthProvider } from "./hooks/auth";
import GlobalStyle from "./styles/global";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </ThemeProvider>
);

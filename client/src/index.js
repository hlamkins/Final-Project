import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProviderWithHistory } from "./components";
import { ToastProvider } from 'react-toast-notifications';

import "./styles/App.css";

ReactDOM.render(
  <Router>
      <ToastProvider>
        <AuthProviderWithHistory>
            <App />
        </AuthProviderWithHistory>
    </ToastProvider>
  </Router>,
  document.getElementById("root")
);
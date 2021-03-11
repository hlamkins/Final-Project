import React from "react";
import { Route, Switch } from "react-router-dom";

import { NavBar, Footer } from "./components";
import {  Profile, ExternalApi } from "./views";
import HomePage from "./pages/Home";

import "./style/App.css";

const App = () => {
  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
        <div className="mt-5">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/profile" component={Profile} />
            <Route path="/external-api" component={ExternalApi} />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;

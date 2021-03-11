import React, { Fragment } from "react";

import { Hero, HomeContent } from "../components";
import Home from "../pages/Home"

const HomePage = () => (
  <Fragment>
    <Hero />
    <hr />
    <Home />
  </Fragment>
);

export default HomePage;

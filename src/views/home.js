import React, { Fragment } from "react";

import { Hero, HomeContent } from "../components";
import Home from "../pages/Home"

const HomePage = (props) => (
  <Fragment>
    <hr />
    <Home {...props}/>
  </Fragment>
);

export default HomePage;

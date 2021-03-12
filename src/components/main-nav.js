import { NavLink } from "react-router-dom";
import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Form, Button, FormControl } from "react-bootstrap";

const MainNav = () => (
  <div className="navbar-nav mr-auto">
    <NavLink to="/" exact className="nav-link" activeClassName="router-link-exact-active">
      Home
    </NavLink>
    <NavLink to="/save" exact className="nav-link" activeClassName="router-link-exact-active">
      Save
    </NavLink>

    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form> */}
  </div>
);

export default MainNav;

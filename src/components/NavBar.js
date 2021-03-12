import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const renderButtons = () => {
    if (localStorage.token) {
      return (
        <>
          <NavLink className="nav-link" to="/">
            
            Home
          </NavLink>
          
        </>
      );
    } else {
      return (
        <>
          <NavLink className="nav-link" to="/">
            
            Home
          </NavLink>
          <NavLink className="nav-link" to="/login-or-signup">
            
            Login or Sign Up
          </NavLink>
        </>
      );
    }
  };
  return (
    <div className="App">
      <header className="header">
        <h1> Re∞ue Me !!! </h1> 
        <div className="clear"> </div> <div className="nav-bar"> {renderButtons()} </div>
      </header>
    </div>
  );
};

export default NavBar;

import classes from "./App.css";
import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink activeClassName={classes.clicked} to="/">
        Home
      </NavLink>
      <NavLink activeClassName={classes.clicked} to="/kombatants">
        Kombatants
      </NavLink>
      <NavLink activeClassName={classes.clicked} to="/about">
        Add Fighter
      </NavLink>
    </nav>
  );
}

export default NavBar;

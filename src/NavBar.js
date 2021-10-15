import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/kombatants">Kombatants</NavLink>
      <NavLink to="/about">Add Fighter</NavLink>
    </nav>
  );
}

export default NavBar;

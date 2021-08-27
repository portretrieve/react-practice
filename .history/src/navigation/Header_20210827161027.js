import React from "react";
import classes from "./header.module.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className={classes.header}>
      <nav>
        <h2>
          <NavLink to="/">Mainpage</NavLink>
        </h2>
        <h2>
          <NavLink to="/wines">Riesling</NavLink>
        </h2>
        <h2>
          <NavNav to="/wines/syrah">Syrah</NavNav>
        </h2>
        <h2>
          <NavLink to="/beers/ale">Ales</NavLink>
        </h2>
        <h2>
          <NavLink to="/beers/trappist">Trappist</NavLink>
        </h2>
        <h2>
          <NavLink to="/beers/lager">Lager</NavLink>
        </h2>
      </nav>
    </header>
  );
}

export default Header;

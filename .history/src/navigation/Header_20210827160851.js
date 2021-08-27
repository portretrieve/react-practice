import React from "react";
import classes from "./header.module.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className={classes.header}>
      <nav>
        <h2>
          <Link to="/">Mainpage</Link>
        </h2>
        <h2>
          <Link to="/wines">Riesling</Link>
        </h2>
        <h2>
          <Link to="/wines/syrah">Syrah</Link>
        </h2>
        <h2>
          <Link to="/beers/ale">Ales</Link>
        </h2>
        <h2>
          <Link to="/beers/trappist">Trappist</Link>
        </h2>
        <h2>
          <Link to="/beers/lager">Lager</Link>
        </h2>
      </nav>
    </header>
  );
}

export default Header;

import React from "react";
import classes from "./header.module.css";
import { Link } from "react-router-dom";

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
          <a to="/wines/syrah">Syrah</a>
        </h2>
        <h2>
          <a to="/beers/ale">Ales</a>
        </h2>
        <h2>
          <a to="/beers/trappist">Trappist</a>
        </h2>
        <h2>
          <a to="/beers/lager">Lager</a>
        </h2>
      </nav>
    </header>
  );
}

export default Header;

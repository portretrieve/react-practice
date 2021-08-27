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
          <Link href="/wines">Riesling</Link>
        </h2>
        <h2>
          <a href="/wines/syrah">Syrah</a>
        </h2>
        <h2>
          <a href="/beers/ale">Ales</a>
        </h2>
        <h2>
          <a href="/beers/trappist">Trappist</a>
        </h2>
        <h2>
          <a href="/beers/lager">Lager</a>
        </h2>
      </nav>
    </header>
  );
}

export default Header;

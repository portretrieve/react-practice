import React from "react";
import classes from "./header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={classes.header}>
      <nav>
        <h2>
          <Link href="/">Mainpage</Link>
        </h2>
        <h2>
          <Link href="/wines">Riesling</Link>
        </h2>
        <h2>
          <Link href="/wines/syrah">Syrah</Link>
        </h2>
        <h2>
          <Link href="/beers/ale">Ales</Link>
        </h2>
        <h2>
          <Link href="/beers/trappist">Trappist</Link>
        </h2>
        <h2>
          <Link href="/beers/lager">Lager</Link>
        </h2>
      </nav>
    </header>
  );
}

export default Header;

import React from "react";
import classes from "./header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <nav>
        <h2>
          <a href="/">Riesling</a>{" "}
        </h2>
        <h2>
          <a href="/syrah">Syrah</a>{" "}
        </h2>
        <h2>Ales</h2>
        <h2>Trappist</h2>
        <h2>Lager</h2>
      </nav>
    </header>
  );
}

export default Header;

import React from "react";
import classes from "./header.module.css";

function Header() {
  return (
    <header className={`${classes.header} ${classes.center}`}>
      <nav>
        <h2>Riesling</h2>
        <h2>Syrah</h2>
        <h2>Ales</h2>
        <h2>Trappist</h2>
        <h2>Lager</h2>
      </nav>
    </header>
  );
}

export default Header;

import React from "react";
import classes from "./header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <nav>
        <h2>
          <Link href="/">Riesling</Link>
        </h2>
        <h2>
          <Link href="/syrah">Syrah</Link>
        </h2>
        <h2>
          <Link href="/ale">Ales</Link>
        </h2>
        <h2>
          <Link href="/trappist">Trappist</Link>
        </h2>
        <h2>
          <Link href="/lager">Lager</Link>
        </h2>
      </nav>
    </header>
  );
}

export default Header;

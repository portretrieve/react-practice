import React from "react";
import classes from "./centerContent.module.css";

function CenterContent(props) {
  return <div className={classes.center}>{props.children}</div>;
}

export default CenterContent;

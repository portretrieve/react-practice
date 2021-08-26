import React from "react";
import classes from "./centerContent.module.css";

function CenterContent(props) {
  return <div className={classes.container}>{props.children}</div>;
}

export default CenterContent;

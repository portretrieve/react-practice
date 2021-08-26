import React from "react";
import classes from "./centerContent.module.css";

function CenterContent(props) {
  return <div style={styles}>{props.children}</div>;
}

export default CenterContent;

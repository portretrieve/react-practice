import React from "react";

const styles = {
  backgroundColor: "gray"
};

function CenterContent(props) {
  return <div style={styles}>{props.children}</div>;
}

export default CenterContent;

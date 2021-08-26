import React from "react";

const styles = {
    backgroundColor: "gray";
    margin: "0 auto";
};

function CenterContent(props) {
  return <div style={styles}>{props.children}</div>;
}

export default CenterContent;

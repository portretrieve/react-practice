import React from "react";

function RieslingItem(props) {
  const { name, country, vintage } = props;

  return (
    <li>
      <p>{name}</p>
      <p>{country}</p>
      <p>{vintage}</p>
    </li>
  );
}

export default RieslingItem;

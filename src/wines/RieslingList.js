import React from "react";
import RieslingItem from "./RieslingItem";

function RieslingList(props) {
  return (
    <div>
      {props.items.map((item) => (
        <RieslingItem
          key={item.id}
          name={item.name}
          country={item.country}
          vintage={item.vintage}
        />
      ))}
    </div>
  );
}

export default RieslingList;

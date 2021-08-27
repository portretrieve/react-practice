import React from "react";
import RieslingList from "./RieslingList";

const RIESLING_LIST = [
  { id: 1, name: "Canadian Riesling", country: "Canada", vintage: 1973 },
  { id: 2, name: "German Riesling", country: "Germany", vintage: 1983 },
  { id: 3, name: "Austrian Riesling", country: "Austria", vintage: 1993 },
  { id: 4, name: "NZ Riesling", country: "NZ", vintage: 2003 }
];

function Riesling() {
  return (
    <div>
      <h1>This Page belongs to Rieslings</h1>
      <div>
        <p>THE RIELSLING LIST</p>
        <ol>
          <RieslingList items={RIESLING_LIST} />
        </ol>
      </div>
    </div>
  );
}

export default Riesling;

import React from "react";

export default function Scoreline(props) {
  //needs to be sent score function and information about the line that is clicked.
  return (
    <div
      className="scoreline"
      id={props.id}
      onClick={() => console.log(`clicked`)}
    >
      <div className="score--category">{props.label} :</div>
      <div className="score--value">Some Value</div>
    </div>
  );
}

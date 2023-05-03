import React from "react";

export default function Scoreline(props) {
  //needs to be sent score function and information about the line that is clicked.

  console.log("scoreline prop run");

  return (
    <div
      className="scoreline"
      id={props.id}
      onClick={!props.isScored ? props.updateScore : undefined}
    >
      <div className="score--category">{props.label} :</div>
      <div className="score--value">{props.value}</div>
    </div>
  );
}

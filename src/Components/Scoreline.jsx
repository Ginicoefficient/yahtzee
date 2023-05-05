import React from "react";
import { GameContext } from "./GameContext";

export default function Scoreline(props) {
  const { getGameMode } = React.useContext(GameContext);
  return (
    <div
      className="scoreline"
      id={props.id}
      onClick={() => {
        if (!props.isScored && getGameMode() === "score") {
          props.updateScore();
        }
      }}
    >
      <div className="score--category">{props.label} :</div>
      <div className="score--value">{props.value}</div>
    </div>
  );
}

import React from "react";
import { GameContext } from "./GameContext";

export default function Scoreline(props) {
  const { mode } = React.useContext(GameContext);

  //bonus yahtzee, 6 divs clickable, with checkmark
  //inner divs will each have obnlcik that updates state score abut BY count
  //change
  function BonusYahtzeeBoxes(props) {
    return (
      <div className="bonus-yahtzee-container">
        <div className="bonus-yahtzee-checkmark"></div>
        <div className="bonus-yahtzee-checkmark"></div>
        <div className="bonus-yahtzee-checkmark"></div>
        <div className="bonus-yahtzee-checkmark"></div>
        <div className="bonus-yahtzee-checkmark"></div>
        <div className="bonus-yahtzee-checkmark"></div>
      </div>
    );
  }
  return (
    <div
      className="scoreline grid-item"
      id={props.id}
      onClick={() => {
        if (!props.isScored && mode === "score" && props.isEligble) {
          props.updateScore();
        }
      }}
    >
      <div className="score--category">{props.label}</div>
      <div className="score--value">{props.value}</div>
      {props.id === "bonusyahtzee" && (
        <BonusYahtzeeBoxes checkedBoxes={props.value / 100} />
      )}
    </div>
  );
}

import React from "react";
import Scoreline from "./Scoreline";
import VanillaScoreSheet from "../VanillaScoreSheet";
import { GameContext } from "./GameContext";

export default function Scoresheet(props) {
  const { getDiceValues, setGameMode } = React.useContext(GameContext);
  const [score, setScore] = React.useState(VanillaScoreSheet);

  //update score function
  function updateScore(scoreline, index) {
    const scoreCopy = [...score];
    scoreCopy[index].value = scoreline.evaluateDice(getDiceValues());
    scoreCopy[index].isScored = true;
    setScore(scoreCopy);
    setGameMode("toReset");
  }

  const scoreElements = score.map((scoreline, index) => (
    <Scoreline
      key={scoreline.id}
      id={scoreline.id}
      label={scoreline.label}
      value={scoreline.value}
      isScored={scoreline.isScored}
      evaluateFunction={() => {
        scoreline.evaluateDice(getDiceValues());
      }}
      updateScore={() => updateScore(scoreline, index)}
    />
  ));

  return <div className="scoresheet-container">{scoreElements}</div>;
}

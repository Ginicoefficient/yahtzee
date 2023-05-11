import React from "react";
import Scoreline from "./Scoreline";
import VanillaScoreSheet from "../VanillaScoreSheet";
import { GameContext } from "./GameContext";

export default function Scoresheet(props) {
  const { dice, setMode, clearDice, setRollCount } =
    React.useContext(GameContext);

  const [score, setScore] = React.useState(VanillaScoreSheet);

  //make ref for last scored row
  const lastScoredRow = React.useRef("");

  //useEffect that runs the eligibility state change for scoreline state array
  //if last scored ref was not BY, set all egibility to tru
  //if BY, run check for eligibility

  React.useEffect(() => {
    if (lastScoredRow.current !== "bonusyahtzee") {
      setScore((prevScores) => {
        let hasYahtzee = false;
        //break out below later into a few different steps
        //make a helper function in context that creates die hash counter thingy
        //add this to score sheet eval function and use here to get objects of dice values only
        let isCurrentRollYahtzee =
          Object.values(
            dice.reduce((total, current) => {
              if (total.hasOwnProperty(current.value)) {
                total[current.value] += 1;
              } else {
                total[current.value] = 1;
              }
              return total;
            }, {})
          ).length === 1;

        console.log(hasYahtzee, isCurrentRollYahtzee);

        return prevScores.map((score) => {
          if (score.id === "yahtzee" && score.value) {
            hasYahtzee = true;
          }
          return {
            ...score,
            isEligble:
              score.id != "bonusyahtzee"
                ? true
                : hasYahtzee && isCurrentRollYahtzee,
          };
        });
      });
    } else {
      //what happens when there's a bonus yahtzee
      //access dice value, see what BY was scored on, check upper scoresheet if scored that number (toggle eligble)
      //then check three and four of a kind (toggle eligble)
      //(toggle eligble)
    }
  }, [dice]);

  //update score function
  function updateScore(scoreline, index) {
    const scoreCopy = [...score];
    scoreCopy[index].value = scoreline.evaluateDice(dice);
    scoreCopy[index].isScored = true;
    lastScoredRow.current = scoreline.id;
    setScore(scoreCopy);
    if (scoreline.id !== "bonusyahtzee") {
      clearDice();
      setRollCount(1);
      setMode("roll");
    }
  }

  const scoreElements = score.map((scoreline, index) => (
    <Scoreline
      key={scoreline.id}
      id={scoreline.id}
      label={scoreline.label}
      value={scoreline.value}
      isScored={scoreline.isScored}
      isBonusYahtzee={scoreline.bonusYahtzee}
      isEligble={scoreline.isEligble}
      evaluateFunction={() => {
        scoreline.evaluateDice(dice);
      }}
      updateScore={() => updateScore(scoreline, index)}
    />
  ));

  const upperScoreElements = scoreElements.slice(0, 5);
  const lowerScoreElements = scoreElements.slice(6);

  return (
    <div className="scoresheet-container">
      <section className="upper-score-elements">
        {upperScoreElements}
        <br></br>
        <div className="upper-bonus score">Upper Section Bonus:</div>
        <div className="upper-total score">Upper Section Total:</div>
      </section>
      <section className="lower-score-elements">
        {lowerScoreElements}
        <div className="lower-score score">Lower Score Total:</div>
        <div className="game-score-total score">Overall Score:</div>
      </section>
    </div>
  );
}

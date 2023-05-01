import React from "react";
import Die from "./Components/Die";
import { nanoid } from "nanoid";
import "./App.css";
import VanillaScoreSheet from "./VanillaScoreSheet";
import Scoreline from "./Components/Scoreline";

function App() {
  const [dice, setDice] = React.useState(allNewDice());

  //generates first roll of each round
  function allNewDice() {
    const diceArray = new Array(5).fill().map(() => {
      return {
        value: Math.floor(Math.random() * 6 + 1),
        isHeld: false,
        id: nanoid(),
      };
    });
    return diceArray;
  }

  //maps through dice array and toggles value of isHeld for clicked die
  function holdDice(id) {
    setDice((prevDice) =>
      prevDice.map((die) => {
        return id === die.id ? { ...die, isHeld: !die.isHeld } : { ...die };
      })
    );
  }

  //maps die components to be rendered as array
  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      id={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  const [rollCount, setCount] = React.useState(0);
  //rolls new die only if die is not held.

  function rollNewDice() {
    //state counts numbers of times roll has been clicked
    setCount((prevCount) => prevCount + 1);
    console.log("count updated:" + rollCount);

    //if not rolled three times, allow to roll again
    if (rollCount < 3) {
      setDice((prevDice) =>
        prevDice.map((die) => {
          return !die.isHeld
            ? {
                ...die,
                value: Math.floor(Math.random() * 6 + 1),
              }
            : { ...die };
        })
      );
    } else if (rollCount > 2) {
      console.log("needs to score");
      //disable roll button
      //score roll will need to reset rollCount to 0 and enable roll button?
    }
  }

  function scoreRoll() {
    console.log("I am scored");
    //enter score mode?
  }

  //SCORE SHEET ELEMENTS

  const [score, setScore] = React.useState(VanillaScoreSheet);

  const scoreElements = score.map((scoreLine, index) => (
    <Scoreline
      key={scoreLine.id}
      label={scoreLine.label}
      evaluateFunction={() => {
        scoreLine.evaluateDice(dice);
      }}
      updateScore={() => {
        const scoreCopy = [...score];
        scoreCopy[index].value = scoreLine.evaluateDice(dice);
        setScore(scoreCopy);
      }}
    />
  ));

  return (
    <div>
      <main>
        <div className="dice-container">
          <div className="instructions">Here will be the instructions</div>
          <div className="roller-holder">{diceElements}</div>
          <button onClick={rollNewDice}>Roll Em'</button>
          <button onClick={scoreRoll}>Score</button>
        </div>
        <div className="scoresheet-container">{scoreElements}</div>
      </main>
    </div>
  );
}

export default App;

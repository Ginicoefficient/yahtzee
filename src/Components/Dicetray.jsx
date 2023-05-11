import React from "react";
import { GameContext } from "./GameContext";
import Die from "./Die";

export default function Dicestray(props) {
  const { dice, setDice, clearDice, setMode, mode, rollCount, setRollCount } =
    React.useContext(GameContext);

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

  //rolls new die only if die is not held and roll count < 3
  function rollNewDice() {
    //state counts numbers of times roll has been clicked
    setRollCount((prevCount) => prevCount + 1);
    console.log("roll count: " + rollCount);
    //if not rolled three times, allow to roll again
    if (rollCount < 3 && mode === "roll") {
      const newDiceValue = [...dice].map((die) => {
        return !die.isHeld
          ? {
              ...die,
              value: Math.floor(Math.random() * 6 + 1),
            }
          : { ...die };
      });
      setDice(newDiceValue);
    } else if (rollCount === 3 && mode === "roll") {
      const newDiceValue = [...dice].map((die) => {
        return !die.isHeld
          ? {
              ...die,
              value: Math.floor(Math.random() * 6 + 1),
            }
          : { ...die };
      });
      setDice(newDiceValue);
      setMode("score");
      //disable roll button
    }
  }

  function scoreHand() {
    setMode("score");
  }

  return (
    <div className="dice-container">
      <div className="instructions">Here will be the instructions</div>
      <div className="roller-holder">{diceElements}</div>
      <div className="button-container">
        {" "}
        <button
          onClick={() => {
            if (mode === "roll") {
              rollNewDice();
            }
          }}
        >
          Roll Em'
        </button>
        <button onClick={scoreHand} disabled={dice ? false : true}>
          Score
        </button>
      </div>
    </div>
  );
}

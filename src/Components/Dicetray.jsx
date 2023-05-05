import React from "react";
import { GameContext } from "./GameContext";
import Die from "./Die";
import { nanoid } from "nanoid";

export default function Dicestray(props) {
  const { setDiceValues, setGameMode, getGameMode } =
    React.useContext(GameContext);
  const [dice, setDice] = React.useState(() => {
    const initialState = allNewDice();
    setDiceValues(initialState);
    return initialState;
  });

  //generates first roll of each round and initializes game mode to roll
  function allNewDice() {
    const diceArray = new Array(5).fill().map(() => {
      return {
        value: "",
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

  //holds the number of times dice have been rolled in a hand
  const [rollCount, setCount] = React.useState(1);

  //rolls new die only if die is not held and roll count < 3
  function rollNewDice() {
    //state counts numbers of times roll has been clicked
    setCount((prevCount) => prevCount + 1);
    console.log(rollCount);
    //if not rolled three times, allow to roll again
    if (rollCount < 3 && getGameMode() === "roll") {
      const newDiceValue = [...dice].map((die) => {
        return !die.isHeld
          ? {
              ...die,
              value: Math.floor(Math.random() * 6 + 1),
            }
          : { ...die };
      });
      setDice(newDiceValue);
      setDiceValues(newDiceValue);
    } else if (rollCount === 3 && getGameMode() === "roll") {
      const newDiceValue = [...dice].map((die) => {
        return !die.isHeld
          ? {
              ...die,
              value: Math.floor(Math.random() * 6 + 1),
            }
          : { ...die };
      });

      setDice(newDiceValue);
      setDiceValues(newDiceValue);
      console.log("needs to score");
      setGameMode("score");
    }
  }

  //something for the future - this shouldn't run unless there's
  //been a new scoring event
  function resetDiceHand() {
    setDice(allNewDice());
    setCount(1);
    setGameMode("roll");
  }

  return (
    <div className="dice-container">
      <div className="instructions">Here will be the instructions</div>
      <div className="roller-holder">{diceElements}</div>
      <button
        onClick={() => {
          if (getGameMode() === "roll") {
            rollNewDice();
          } else {
            resetDiceHand();
          }
        }}
      >
        {getGameMode() === "roll" ? "Roll em'" : "Clear Tray"}
      </button>
      <button
        onClick={() => {
          setGameMode("score");
        }}
      >
        Score
      </button>
    </div>
  );
}

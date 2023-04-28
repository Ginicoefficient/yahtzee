import { useState } from "react";
import React from "react";
import Die from "./Components/Die";
import { nanoid } from "nanoid";

import "./App.css";

function App() {
  const [dice, setDice] = React.useState(allNewDice());

  //generates first roll of each round
  function allNewDice() {
    const diceArray = new Array(6).fill().map(() => {
      return {
        value: Math.floor(Math.random() * 6 + 1),
        isHeld: false,
        id: nanoid(),
      };
    });
    return diceArray;
  }

  function holdDice(id) {
    setDice((prevDice) =>
      prevDice.map((die) => {
        return id === die.id ? { ...die, isHeld: !die.isHeld } : { ...die };
      })
    );
  }

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      id={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  return (
    <div>
      <main>
        <div className="dice-container">
          <div className="instructions">Here will be the instructions</div>
          <div className="roller-holder">{diceElements}</div>
          <button>Roll Em'</button>
        </div>
        <h1>I will hold scoresheet component</h1>
      </main>
    </div>
  );
}

export default App;

import React from "react";
import Die from "./Components/Die";
import { nanoid } from "nanoid";
import "./App.css";
import Scoresheet from "./Components/Scoresheet";
import { GameContext } from "./Components/GameContext";

function App() {
  const { setDiceValues } = React.useContext(GameContext);
  const [dice, setDice] = React.useState(() => {
    const initialState = allNewDice();
    setDiceValues(initialState);
    return initialState;
  });
  //below will change when make mode context;
  const modeReference = React.useRef("roll");

  //generates first roll of each round
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

  const [rollCount, setCount] = React.useState(0);
  //rolls new die only if die is not held.

  function rollNewDice() {
    //state counts numbers of times roll has been clicked
    setCount((prevCount) => prevCount + 1);
    console.log("count updated:" + rollCount);

    //if not rolled three times, allow to roll again
    if (rollCount < 3) {
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

  //enter score mode function
  //roll click count = 3 or click has occured on score button

  return (
    <div>
      <main>
        <div className="dice-container">
          <div className="instructions">Here will be the instructions</div>
          <div className="roller-holder">{diceElements}</div>
          <button onClick={rollNewDice}>Roll Em'</button>
          <button onClick={scoreRoll}>Score</button>
        </div>
        <Scoresheet />
      </main>
    </div>
  );
}

export default App;

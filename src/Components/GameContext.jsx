import React from "react";
import { nanoid } from "nanoid";

const GameContext = React.createContext({
  dice: {},
  setDice: () => {},
  mode: "roll",
  setMode: () => {},
  rollCount: 1,
  setRollCount: () => {},
});

function GameProvider(props) {
  //dice-related functions
  const [dice, setDice] = React.useState(allNewDice());

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

  function clearDice() {
    setDice(allNewDice());
  }

  //roll count related functions
  //holds the number of times dice have been rolled in a hand
  const [rollCount, setRollCount] = React.useState(1);

  //game mode related functions
  const [mode, setMode] = React.useState("roll");

  return (
    <GameContext.Provider
      value={{
        dice,
        setDice,
        clearDice,
        mode,
        setMode,
        rollCount,
        setRollCount,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
}

export { GameContext, GameProvider };

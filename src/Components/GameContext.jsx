import React from "react";

const GameContext = React.createContext({
  getDiceValues: () => {},
  setDiceValues: () => {},
  getGameMode: () => {},
  setGameMode: () => {},
});

function GameProvider(props) {
  const diceReference = React.useRef();
  const modeReference = React.useRef("roll");

  function getGameMode() {
    return modeReference.current;
  }

  function setGameMode(mode) {
    modeReference.current = mode;
    console.log(modeReference.current);
  }

  function getDiceValues() {
    return diceReference.current;
  }

  function setDiceValues(diceValues) {
    console.log("setDiceMode from context run");
    diceReference.current = diceValues;
  }

  return (
    <GameContext.Provider
      value={{ getDiceValues, setDiceValues, getGameMode, setGameMode }}
    >
      {props.children}
    </GameContext.Provider>
  );
}

export { GameContext, GameProvider };

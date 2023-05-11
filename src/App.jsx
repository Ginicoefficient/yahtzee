import React from "react";
import "./App.css";
import Dicestray from "./Components/Dicetray";
import Scoresheet from "./Components/Scoresheet";

function App() {
  //enter score mode function
  //roll click count = 3 or click has occured on score button

  return (
    <div>
      <main>
        <Dicestray />
        <Scoresheet />
      </main>
    </div>
  );
}

export default App;

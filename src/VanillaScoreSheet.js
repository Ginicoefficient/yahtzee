export default [
  {
    id: "aces",
    label: "aces",
    value: "",
    isScored: false,
    evaluateDice: (someDiceSet) => {
      //calculate sum of ones from dice state array
      let diceTotal = 0;
      someDiceSet.map((die) => {
        if (die.value === 1) {
          diceTotal++;
        }
      });
      return diceTotal;
    },
  },
  {
    id: "twos",
    label: "twos",
    value: "",
    isScored: false,
    evaluateDice: (someDiceSet) => {
      let diceTotal = 0;
      someDiceSet.map((die) => {
        if (die.value === 2) {
          diceTotal += 2;
        }
      });
      return diceTotal;
    },
  },

  {
    id: "threes",
    label: "threes",
    value: "",
    isScored: false,
    evaluateDice: (someDiceSet) => {
      let diceTotal = 0;
      someDiceSet.map((die) => {
        if (die.value === 3) {
          diceTotal += 3;
        }
      });
      return diceTotal;
    },
  },
  {
    id: "fours",
    label: "fours",
    value: "",
    isScored: false,
    evaluateDice: (someDiceSet) => {
      let diceTotal = 0;
      someDiceSet.map((die) => {
        if (die.value === 4) {
          diceTotal += 4;
        }
      });
      return diceTotal;
    },
  },
  {
    id: "fives",
    label: "fives",
    value: "",
    isScored: false,
    evaluateDice: (someDiceSet) => {
      let diceTotal = 0;
      someDiceSet.map((die) => {
        if (die.value === 5) {
          diceTotal += 5;
        }
      });
      return diceTotal;
    },
  },
  {
    id: "sixes",
    label: "sixes",
    value: "",
    isScored: false,
    evaluateDice: (someDiceSet) => {
      let diceTotal = 0;
      someDiceSet.map((die) => {
        if (die.value === 6) {
          diceTotal += 6;
        }
      });
      return diceTotal;
    },
  },
  {
    id: "threeofkind",
    label: "Three of a Kind",
    value: "",
    isScored: false,
    evaluateDice: (someDiceSet) => {
      const counter = {};
      let diceTotal = 0;
      someDiceSet.map((die) => {
        if (counter.hasOwnProperty[die.value.toString()]) {
          counter[die.value.toString()] += 1;
          diceTotal += die.value;
        } else {
          counter[die.value.toString()] = 1;
        }
        diceTotal += die.value;
      });
      if (Object.values(counter).indexOf("3") > -1) {
        return diceTotal;
      } else {
        return 0;
      }
    },
  },
];

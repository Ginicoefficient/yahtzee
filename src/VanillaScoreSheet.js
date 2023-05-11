export default [
  {
    id: "aces",
    label: "Aces ⚀ :  ",
    value: "",
    isScored: false,
    isEligble: true,
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
    label: "Twos ⚁ :  ",
    value: "",
    isScored: false,
    isEligble: true,
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
    label: "Threes ⚂ :  ",
    value: "",
    isScored: false,
    isEligble: true,
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
    label: "Fours ⚃ :  ",
    value: "",
    isScored: false,
    isEligble: true,
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
    label: "Fives ⚄ :  ",
    value: "",
    isScored: false,
    isEligble: true,
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
    label: "Sixes ⚅ :  ",
    value: "",
    isScored: false,
    isEligble: true,
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
    label: "Three of a Kind 👪 :  ",
    value: "",
    isScored: false,
    isEligble: true,
    evaluateDice: (someDiceSet) => {
      const counter = {};
      let diceTotal = 0;
      someDiceSet.map((die) => {
        if (counter.hasOwnProperty(die.value.toString())) {
          counter[die.value.toString()] += 1;
        } else {
          counter[die.value.toString()] = 1;
        }
        diceTotal += die.value;
      });

      if (Object.values(counter).indexOf(3) > -1) {
        return diceTotal;
      } else {
        return 0;
      }
    },
  },
  {
    id: "fourofkind",
    label: "Four of a Kind 👯👯 :  ",
    value: "",
    isScored: false,
    isEligble: true,
    evaluateDice: (someDiceSet) => {
      const counter = {};
      let diceTotal = 0;
      someDiceSet.map((die) => {
        if (counter.hasOwnProperty(die.value.toString())) {
          counter[die.value.toString()] += 1;
        } else {
          counter[die.value.toString()] = 1;
        }
        diceTotal += die.value;
      });
      console.log(diceTotal);
      console.log(counter);
      if (Object.values(counter).indexOf(4) > -1) {
        return diceTotal;
      } else {
        return 0;
      }
    },
  },
  {
    id: "fullhouse",
    label: "Full House 🏡 :  ",
    value: "",
    isScored: false,
    isEligble: true,
    evaluateDice: (someDiceSet) => {
      const counter = {};
      for (let i = 0; i < someDiceSet.length; i++) {
        if (counter.hasOwnProperty(someDiceSet[i].value)) {
          counter[someDiceSet[i].value] += 1;
        } else {
          counter[someDiceSet[i].value] = 1;
        }
      }
      if (
        Object.keys(counter).length === 2 &&
        Object.values(counter).indexOf(3) > -1
      ) {
        return 25;
      } else {
        return 0;
      }
    },
  },
  {
    id: "smallstraight",
    label: "Small Straight :  ",
    value: "",
    isScored: false,
    isEligble: true,
    evaluateDice: (someDiceSet) => {
      const counter = {};
      let min = null;
      let max = null;
      for (let i = 0; i < someDiceSet.length; i++) {
        if (counter.hasOwnProperty(someDiceSet[i].value)) {
          counter[someDiceSet[i].value] += 1;
        } else {
          counter[someDiceSet[i].value] = 1;
        }
        if (!min || someDiceSet[i].value < min) {
          min = someDiceSet[i].value;
        }
        if (!max || someDiceSet[i].value > max) {
          max = someDiceSet[i].value;
        }
      }

      if (Object.keys(counter).length === 5) {
        return 30;
      }
      if (Object.keys(counter).length === 4 && max - min === 3) {
        return 30;
      }
      return 0;
    },
  },
  {
    id: "largestraight",
    label: "Large Straight :  ",
    value: "",
    isScored: false,
    isEligble: true,
    evaluateDice: (someDiceSet) => {
      const counter = {};
      for (let i = 0; i < someDiceSet.length; i++) {
        if (counter.hasOwnProperty(someDiceSet[i].value)) {
          counter[someDiceSet[i].value] += 1;
        } else {
          counter[someDiceSet[i].value] = 1;
        }
      }
      if (Object.keys(counter).length === 5) {
        return 40;
      }
      return 0;
    },
  },
  {
    id: "chance",
    label: "Chance :  ",
    value: "",
    isScore: false,
    isEligble: false,
    evaluateDice: (someDiceSet) => {
      let diceTotal = someDiceSet
        .map((die) => die.value)
        .reduce((total, current) => {
          return total + current;
        });
      return diceTotal;
    },
  },
  {
    id: "yahtzee",
    label: "Yahtzee :  ",
    value: "",
    isScored: false,
    isEligble: true,
    evaluateDice: (someDiceSet) => {
      const counter = {};
      for (let i = 0; i < someDiceSet.length; i++) {
        if (counter.hasOwnProperty(someDiceSet[i].value)) {
          counter[someDiceSet[i].value] += 1;
        } else {
          counter[someDiceSet[i].value] = 1;
        }
      }
      if (counter(keys).length === 1) {
        return 50;
      }
      return 0;
    },
  },
  {
    id: "bonusyahtzee",
    label: "Bonus Yahtzee :  ",
    value: "",
    isScored: false,
    isEligble: false,
    evaluateDice: () => {
      this.value += 100;
      return this.value;
    },
  },
];

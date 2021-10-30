const conditionCheck = (options, input) => {
  return options.includes(input);
};

const coffeeMachine = () => {
  const Power = "on";
  let userInputPower = prompt("Power", "on");

  if (Power === userInputPower) {
    while (userInputPower == "on") {
      let coffeeType = prompt("Coffee?");
      if ((!conditionCheck(["Latte", "Mocha", "Espresso"]), coffeeType))
        coffeeType = prompt("Coffffeee");
      switch (coffeeType) {
        case "Latte": {
          console.log("Latte");
          break;
        }
        case "Mocha": {
          console.log("Mocha");
          break;
        }
        case "Espresso": {
          console.log("Espresso");
          break;
        }
      }
      alert("coffee ready");
      userInputPower = prompt("More coffee: on - No more coffee: off");
    }
  }
};

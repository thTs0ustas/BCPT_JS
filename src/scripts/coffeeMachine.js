const conditionCheck = ([...options], input) => options.includes(input);

const coffeeMachine = () => {
  const Power = "on";
  let userInputPower = prompt("Power", "on");

  if (Power === userInputPower) {
    while (userInputPower === "on") {
      let coffeeType = prompt("Coffee?");
      if (conditionCheck(["Latte", "Mocha", "Espresso"], coffeeType)) {
        switch (coffeeType) {
          case "Latte": {
            break;
          }
          case "Mocha": {
            break;
          }
          case "Espresso": {
            break;
          }
        }
      } else {
        alert("Coffee!!!!!!!");
        continue;
      }
      alert("coffee ready");
      userInputPower = prompt("More coffee: on - No more coffee: off");
    }
  }
  alert("turning off");
};
coffeeMachine();

// // Variables declaration!!

// let Power = 'on';
// let targetTemp = 100;
// let currentTemp = 90;
// let loopCounter = 0;

// // Power = prompt("Turn the thermostat on or off", "on");
// // targetTemp = +prompt("Set the target temp");
// // currentTemp = +prompt("What is the current temp");

// // Process!!

// function thermostat(targetTemp, curTemp) {
//   while (Power === 'on') {
//     if (curTemp < targetTemp) {
//       console.log(
//         'Not quite there yet. ' + (targetTemp - curTemp) + ' more degrees needed!'
//       );
//       loopCounter++;
//       thermostat(targetTemp, curTemp + 1);
//       //   curTemp++;
//     } else {
//       Power = 'off';
//       console.log('The temp is right, switching off the heat pump now');
//     }
//   }
// }
// thermostat(100, 90);

// console.log('The loop run this many times: ' + loopCounter);

// /////////////////////////////////

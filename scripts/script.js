const contitionCheck = ([...options], input) => options.includes(input);

const coffeeMachine = () => {
  const Power = 'on';
  let userInputPower = prompt('Power', 'on');

  if (Power === userInputPower) {
    while (userInputPower == 'on') {
      let coffeeType = prompt('Coffee?');
      if (contitionCheck(['Latte', 'Mocha', 'Espresso'], coffeeType)) {
        switch (coffeeType) {
          case 'Latte': {
          }
          case 'Mocha': {
          }
          case 'Espresso': {
          }
        }
      } else {
        alert('Coffeeeee');
        continue;
      }
      alert('coffee ready');
      userInputPower = prompt('More coffee: on - No more coffee: off');
    }
  }
  alert('turnig off');
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

// function thermostat(targTemp, curTemp) {
//   while (Power === 'on') {
//     if (curTemp < targTemp) {
//       console.log(
//         'Not quite there yet. ' + (targTemp - curTemp) + ' more degrees needed!'
//       );
//       loopCounter++;
//       thermostat(targTemp, curTemp + 1);
//       //   curTemp++;
//     } else {
//       Power = 'off';
//       console.log('The temp is rigth, switching of the heat pump now');
//     }
//   }
// }
// thermostat(100, 90);

// console.log('The loop run this many times: ' + loopCounter);

// /////////////////////////////////

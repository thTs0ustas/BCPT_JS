const contitionCheck = require('./contitionCheck');

const coffeeMachine = () => {
  const Power = 'on';
  let userInputPower = prompt('Power', 'on');

  if (Power === userInputPower) {
    while (userInputPower == 'on') {
      let coffeeType = prompt('Coffee?');
      if ((!contitionCheck(['Latte', 'Mocha', 'Espresso']), coffeeType))
        coffeeType = prompt('Coffffeee');
      switch (coffeeType) {
        case 'Latte': {
        }
        case 'Mocha': {
        }
        case 'Espresso': {
        }
      }
      alert('coffee ready');
      userInputPower = prompt('More coffee: on - No more coffee: off');
    }
  }
};

module.exports = coffeeMachine;

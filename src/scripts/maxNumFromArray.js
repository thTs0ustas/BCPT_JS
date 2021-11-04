function maxNum(list) {
  let max = 0;
  for (let element of list) {
    if (element > max) max = element;
  }
  return max;
}

function createArrayFromUserInput(callbackFn) {
  let userInput = [];
  let input = Math.floor(Math.random() * 100); // +prompt("Enter number.");

  while (input !== 0) {
    userInput.push(input);
    input = Math.floor(Math.random() * 100); //+prompt("Enter next number.");
  }

  console.log(userInput);

  return callbackFn(userInput);
}

console.log(`The Max number is: ${createArrayFromUserInput(maxNum)}`);

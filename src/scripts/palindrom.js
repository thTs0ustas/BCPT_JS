const checkPalindrome = (string) => string.split("").reverse().join("") === string;

console.log(checkPalindrome("madam"));

function checkPalindrome2(string) {
  let tempStr2 = "";
  for (let letter of string) {
    tempStr2 += letter;
  }
  return tempStr2 === string;
}

console.log(checkPalindrome2("madam"));

function checkPalindrome3(string) {
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(checkPalindrome3("lol"));

//////////////////
function calculator(num1, num2, operator) {
  while (!Number.isInteger(num1)) {
    console.error("Wrong operation");
  }
  while (!Number.isInteger(num2)) {
    console.error("Wrong operation");
  }
  switch (operator) {
    case "+": {
      return num1 + num2;
    }
    case "-": {
      return num1 - num2;
    }
    case "*": {
      return num1 * num2;
    }
    case "/": {
      if (num2 === 0) {
        console.error("Divider must not be 0");
        break;
      }
      return num1 / num2;
    }
    default: {
      console.error("Wrong operation");
    }
  }
}

console.log(calculator(3, 4, "+"));

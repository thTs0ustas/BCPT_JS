const toBinary = (number = 0) => {
  let arrayToBinary = [];
  let temp = number;
  while (temp > 0) {
    arrayToBinary.push(temp % 2 === 0 ? "0" : "1");
    temp /= 2;
    temp = Math.floor(temp);
  }

  return arrayToBinary.reverse().join("");
};

console.log(toBinary(9));

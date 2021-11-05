function sumOfNNumbers(num) {
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }
  return num + sumOfNNumbers(num - 1);
}

console.log(sumOfNNumbers(10));

// const sumOfNNumbers = (num) => (num === 1 ? 1 : num + sumOfNNumbers(num - 1));

// 5 + sum(4) => 4 + sum(3) => 3 + sum(2) => 2 + sum(1) => 1
// 5 + 4 + 3 + 2 + 1 = 15

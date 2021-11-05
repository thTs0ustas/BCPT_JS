const fibonacciRecursion = (num1, num2, times) => {
  // 0,1 => 1, 1 => 1, 2 => 2, 3 => 3, 5 => 5, 8 => 8, 13 => 13, 21 => 21, 34 ==> 34, 55 !!
  // take the first element each time , except the last time when it takes both of them.
  let arr = [];
  if (times === 0) {
    arr.push(num1, num2);
    return arr;
  }
  arr.push(num1, ...fibonacciRecursion(num2, num1 + num2, times - 1));

  return arr;
};
console.log(...fibonacciRecursion(0, 1, 12));

///////////////////////////////////////////

const fibonacci = (times) => {
  let num1 = 0;
  let num2 = 1;
  let fibArr = [num1, num2];

  while (times > 0) {
    let tempNumber = num1;

    fibArr.push(num1 + num2);
    num1 = num2;
    num2 = tempNumber + num1;
    times -= 1;
  }

  return fibArr;
};

console.log(...fibonacci(12));

module.exports = fibonacciRecursion;

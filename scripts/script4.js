let myArray = [1, 2, 3, 4, 5];

const getArrayAndMultiplyByNumber = (num) => (array) =>
  array.map((elem) => elem * num);

function getArrayAndMultiplyByNumber2(array, number) {
  let result = [];
  for (element of array) {
    result.push(element * number);
  }
  return result;
}
const powerOfTwoOfNumber = (number) => number ** 2;

// console.log(getArrayAndMultiplyByNumber(2)(myArray));
// console.log(getArrayAndMultiplyByNumber2(myArray, 2));

// let k = powerOfTwoOfNumber(5);
// console.log(k);

//////////////////-----/////////////////-----////////////////-----/////////////

function firstCharUpperCase(string) {
  return (
    string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
  );
}

function returnMyWholeName(firstName, lastName, isCapital) {
  let returnedMessage = isCapital
    ? `${firstName.toUpperCase()} ${lastName.toUpperCase()}`
    : `${firstCharUpperCase(firstName)} ${firstCharUpperCase(
        lastName
      )}`;

  return returnedMessage;
}
// console.log(returnMyWholeName("Thanasis", "Tsoustas", "we"));
//
//
//
//
//
//
//

let testArray = [
  "Peoplecert!@#123",
  "!edu27364528^^&&**^CA! ..!!TIon",
  "Peo^*%6567576&%ple",
  "cer........t",
];

function normalCase(string) {
  let newString = string.replace(/\W|\s|\d/g, "");
  return newString != /^[A-Z]\w+/
    ? newString.charAt(0).toUpperCase() +
        newString.slice(1).toLowerCase()
    : newString;
}
function specialCase(string) {
  return normalCase(string).split("c").join("C");
}

function titleCase(string) {
  if (string.toLowerCase().includes("peoplecert")) {
    return specialCase(string);
    // return string.replace(/cert/i, "Cert");
    // return string.split("c").join("C");
  } else {
    return normalCase(string);

    // return string.replace(/^[a-z]/, string.charAt(0).toUpperCase());
    // return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    // return [...string]
    //   .map((char, index) => (index == 0 ? char.toUpperCase() : char))
    //   .join("");
  }
}
function loopingThroughArray(array, callback) {
  let resultArr = [];
  for (element of array) {
    resultArr.push(callback(element));
  }
  return resultArr;
}

function titleCaseArray(array) {
  return loopingThroughArray(array, titleCase);
}

console.log("Final array: ", titleCaseArray(testArray));

// // // //
// let newArray = () => testArray.map(titleCase);

// // // //

// // //
// console.log(newArray());

const testArray = [
  "Peoplecert!@#123",
  "!edu27364528^^&&**^CA! ..!!TIon",
  "Peo^*%6567576&%ple",
  "cer........t",
];

function normalCase(string) {
  let newString = string.replace(/\W|\s|\d/g, "");
  return newString !== /^[A-Z]\w+/
    ? newString.charAt(0).toUpperCase() + newString.slice(1).toLowerCase()
    : newString;
}

function specialCase(string) {
  return normalCase(string).split("c").join("C");
}

function titleCase(string) {
  return string.toLowerCase().includes("peoplecert")
    ? specialCase(string)
    : normalCase(string);
}
function titleCaseArray(array, callback) {
  let resultArr = [];
  for (let element of array) {
    resultArr.push(callback(element));
  }
  return resultArr;
}

console.log("Final array: ", titleCaseArray(testArray, titleCase));

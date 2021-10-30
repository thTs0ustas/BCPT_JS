// let myArray = [100, 200, 300, 400, 500];

// for(var i = 0; i < myArray.length; i++) {
//     console.log(myArray[i])
// }

function myFunction(myArray) {
  for (let i of myArray) {
    // values of the elements
    console.log(i);
  }

  for (let j in myArray) {
    // keys of the elements // return strings - array["0"]
    console.log(j);
  }
}

myFunction([1, 2, 3, 4, 5, 6, 100, 200, 300, 400, 500, 'AAAA']);

let myName = 'Thanos Tsoustas';

function myNameFun(name) {
  let myName = 0;
  console.log(name);
  console.log(myName);
}

myNameFun(myName);

for (i of [1, 2, 3, 4, 5]) {
  let myName = 1;
  console.log(myName);
  console.log(this);
}

console.log(myName);

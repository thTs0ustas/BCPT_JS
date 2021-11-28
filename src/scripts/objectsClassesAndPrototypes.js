// class newClass {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// newClass.prototype.displayInfo = function () {
//   console.log(this.name, this.age);
// };

// let set1 = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// let set2 = new Set([10, 20, 30, 40, 50, 60, 70, 80, 90]);
// let set3 = new Set([1, 20, 3, 40, 5, 60, 7, 80, 99]);

// let arr = [...set1, ...set2, ...set3];
// let arr2 = Array.from(new Set([...set1, ...set2, ...set3]));
// let arr3 = Array.from(new Set([...set1].filter((el) => !set2.has(el))));

// console.log(arr);

// console.log(arr2);
// console.log(arr3);

const convert = (int) => parseInt(int) * 60;

console.log(convert(5));
const lessThanOrEqualToZero = (num) => num <= 0;
console.log(lessThanOrEqualToZero(5));

// Christmas Eve is almost upon us,
// so naturally we need to prepare some milk and
// cookies for Santa! Create a function that
// accepts a Date object and returns true if
// it's Christmas Eve (December 24th) and
// false otherwise. Keep in mind JavaScript's Date month is 0 based,
// meaning December is the 11th month while January is 0.
console.log(new Date(2013, 11, 24).toISOString());

const timeForMilkAndCookies = (date) => date.match(/\d\d\D\d\d$/).join("") === "12-24";
console.log(timeForMilkAndCookies(new Date(2013, 11, 24)));
// imeForMilkAndCookies(new Date(2013, 11, 24)) ➞ true

// timeForMilkAndCookies(new Date(2013, 0, 23)) ➞ false

// timeForMilkAndCookies(new Date(3000, 11, 24)) ➞ true

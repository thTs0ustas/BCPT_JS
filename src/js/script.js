// function AtmConstractor(name, balance) {
//   this.name = name;
//   this.balance = balance;
//   this.deposit = (deposit) => (this.balance += deposit);

//   this.withdow = (withdow) =>
//     this.balance - withdow < 0
//       ? console.error("No more money!!!")
//       : (this.balance -= withdow);
// }

class AtmConstractor {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
    this.deposit = (deposit) => (this.balance += deposit);

    this.withdow = (withdow) =>
      this.balance - withdow < 0
        ? console.error("No more money!!!")
        : (this.balance -= withdow);
  }
}
const thanosAtm = new AtmConstractor("Thanos Tsoustas", 100);
thanosAtm.deposit(500);
console.log(thanosAtm);
thanosAtm.withdow(200);
console.log(thanosAtm);

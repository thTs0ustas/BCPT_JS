const breedTheBees = (youHave, youWant) => {
  let years = 0;
  while (youHave < youWant) {
    youHave /= 0.962;
    years++;
  }
  console.log(years);
  return years;
};

breedTheBees(1200, 1550);

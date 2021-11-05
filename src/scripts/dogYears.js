function dogToHumanYears(years) {
  while (years <= 0 || years >= 30 || isNaN(years)) {
    years = +prompt("Give more than 0 an less than 30 dog years");
  }

  if (years <= 2) {
    return years;
  } else {
    return 2 + (years - 2) * 5;
  }
}

console.log(dogToHumanYears(+prompt("Give the dog years")));

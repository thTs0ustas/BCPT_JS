function xmasTree(height) {
  return upperXmasTree(height); // bottomXmasTree(height);
}

function upperXmasTree(height) {
  let upperStars = "";
  let topStar = xmasTreeTopStar(height);
  for (let i = 1; i < height - 1; i++) {
    if (i === 1) {
      upperStars += topStar.replace(replacementStarsAndSpaces(i), starsToAdd(i));
    } else {
      upperStars += "\n" + topStar.replace(replacementStarsAndSpaces(i), starsToAdd(i));
    }
    // console.log(upperStars);
  }
  return upperStars;
}

// function bottomXmasTree(height) {
//   let bottomStart = "";
//   let topStar = xmasTreeTopStar(height);
//   for (let i = height; i > height / 2; i--) {
//     bottomStart += "\n" + topStar.replace(replacementStarsAndSpaces(i), starsToAdd(i));
//   }
//
//   return bottomStart;
// }

function xmasTreeTopStar(height) {
  let xmasTreeStar = " *";
  let xmasTreeSpace = " ";
  let topTreeStar = "";

  for (let rowStar = 1; rowStar < height * 2 - 1; rowStar++) {
    rowStar % height === 0
      ? (topTreeStar += xmasTreeStar)
      : (topTreeStar += xmasTreeSpace);
  }
  return topTreeStar;
}

function starsToAdd(i) {
  let stars = "";
  for (let j = 0; j < i; j++) {
    if (i % 2 === 0) {
      stars += " *";
    } else {
      stars += " *";
    }
  }
  return stars;
}

function replacementStarsAndSpaces(i) {
  let replacement = "";
  for (let j = 0; j < i; j++) {
    replacement += " ";
  }

  if (i % 2 === 0) {
    replacement = replacement + "  *" + replacement;
  } else {
    replacement = replacement + "  *" + replacement;
  }
  return replacement;
}

console.log(xmasTree(20));

// function factorial(num) {
//   if (num !== 0) {
//     return num * factorial(num - 1);
//   } else {
//     return 1;
//   }
// }

// console.log(factorial(5));

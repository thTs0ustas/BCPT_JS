function xmasTree(height) {
  return `${upperXmasTree(height)}${bottomXmasTree(height)}`;
}

function upperXmasTree(height) {
  let upperStars = "";
  let topStar = xmasTreeTopStar(height);
  for (let i = 1; i < height; i++) {
    if (i === 1) {
      upperStars += topStar.replace(replacementStarsAndSpaces(i), starsToAdd(i));
    } else {
      upperStars += "\n" + topStar.replace(replacementStarsAndSpaces(i), starsToAdd(i));
    }
  }
  return upperStars;
}

function bottomXmasTree(height) {
  let bottomStart = "";
  let topStar = xmasTreeTopStar(height);
  let iterator = height;
  let heightDivider;
  if (height > 10) {
    heightDivider = 5;
  } else if (height >= 5 && height <= 10) {
    heightDivider = 4;
  } else {
    heightDivider = 3;
  }

  // create the bottom part of the tree

  for (let j = iterator; j > 0; j -= height / heightDivider + 1) {
    if (j !== iterator) {
      bottomStart += "\n" + topStar.replace(replacementStarsAndSpaces(j), starsToAdd(j));
    }
  }

  // create the tree trunk

  let treeTrunk = bottomStart.split("\n")[bottomStart.split("\n").length - 1];

  for (let i = 0; i < height / 5; i++) {
    bottomStart += "\n" + treeTrunk;
  }
  return bottomStart;
}

function xmasTreeTopStar(height) {
  let xmasTreeStar = " *";
  let xmasTreeSpace = " ";
  let topTreeStar = "";

  for (let rowStar = 1; rowStar < height * 2; rowStar++) {
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
  for (let j = 1; j < i; j++) {
    replacement += " ";
  }

  if (i % 2 === 0) {
    replacement = replacement + "  *" + replacement;
  } else {
    replacement = replacement + "  *" + replacement;
  }
  return replacement;
}

console.log(xmasTree(69));

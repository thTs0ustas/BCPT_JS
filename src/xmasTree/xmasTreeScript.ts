// Work in progress....

// The tree is build taking a single line with spaces and one '*'.
// That has a width based on the height of the upper body of the tree.
//

// Final function to print tree -Upper and lower part-
function xmasTree(height: number): string {
  return `${upperXmasTree(height)}${bottomXmasTree(height)}`;
}

// Upper body of the tree

function upperXmasTree(height: number) {
  let upperStars = "";
  const topStar = xmasTreeTopStar(height);
  for (let i = 1; i < height; i++) {
    if (i === 1) {
      upperStars += topStar.replace(replacementStarsAndSpaces(i), starsToAdd(i));
    } else {
      upperStars += "\n" + topStar.replace(replacementStarsAndSpaces(i), starsToAdd(i));
    }
  }
  return upperStars;
}

// Bottom part of the tree
function bottomXmasTree(height: number) {
  let bottomStar = "";
  const topStar = xmasTreeTopStar(height);
  const iterator = height;
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
      bottomStar += "\n" + topStar.replace(replacementStarsAndSpaces(j), starsToAdd(j));
    }
  }

  // create the tree trunk

  const treeTrunk = bottomStar.split("\n")[bottomStar.split("\n").length - 1];

  for (let i = 0; i < height / 5; i++) {
    bottomStar += "\n" + treeTrunk;
  }
  return bottomStar;
}

// Initial star based on the height of upper tree body and width of the tree
function xmasTreeTopStar(height: number) {
  const xmasTreeStar = " *";
  const xmasTreeSpace = " ";
  let topTreeStar = "";

  for (let rowStar = 1; rowStar < height * 2; rowStar++) {
    rowStar % height === 0
      ? (topTreeStar += xmasTreeStar)
      : (topTreeStar += xmasTreeSpace);
  }
  return topTreeStar;
}

// Star and spaces that will be added in each iteration
function starsToAdd(iteration: number) {
  let stars = "";
  for (let j = 0; j < iteration; j++) {
    if (iteration % 2 === 0) {
      stars += " *";
    } else {
      stars += " *";
    }
  }
  return stars;
}

// Stars and spaces that will be replaced in each iteration
function replacementStarsAndSpaces(iterator: number) {
  let replacement = "";
  for (let j = 1; j < iterator; j++) {
    replacement += " ";
  }

  if (iterator % 2 === 0) {
    replacement = replacement + "  *" + replacement;
  } else {
    replacement = replacement + "  *" + replacement;
  }
  return replacement;
}

// Final output

console.log(xmasTree(15));

// Work in progress....
// The tree is build starting with a single line with spaces and one '*'.
// That line has a width based on the height of the upper body of the tree.
// In each iteration spaces and stars are replaced with the stars and spaces corresponding to the iteration
// Final function to print tree -Upper and lower part-
function xmasTree(height) {
    return `${upperXmasTree(height)}${bottomXmasTree(height)}`;
}
// Upper body of the tree
function upperXmasTree(height) {
    let upperStars = "";
    const topStar = xmasTreeTopStar(height);
    for (let i = 1; i < height; i++) {
        if (i === 1) {
            upperStars += topStar.replace(replacementStarsAndSpaces(i), starsToAdd(i));
        }
        else {
            upperStars += "\n" + topStar.replace(replacementStarsAndSpaces(i), starsToAdd(i));
        }
    }
    return upperStars;
}
// Bottom part of the tree
function bottomXmasTree(height) {
    let bottomStar = "";
    const topStar = xmasTreeTopStar(height);
    const iterator = height;
    let heightDivider = height % 2 !== 0 ? height / 3 + 1 : height / 4 + 1;
    if (height < 10 && height % 5 === 0) {
        heightDivider = 5;
    }
    else if ((height < 20 && height % 5 === 0) || height % 3 === 0) {
        heightDivider = 4;
    }
    else {
        heightDivider = 3;
    }
    // create the bottom part of the tree
    let treeTrunk = "";
    for (let j = iterator; j > 0; j -= height / heightDivider + 1) {
        if (j !== iterator) {
            bottomStar += "\n" + topStar.replace(replacementStarsAndSpaces(j), starsToAdd(j));
        }
        treeTrunk = topStar.replace(replacementStarsAndSpaces(j - 1), starsToAdd(j - 1));
    }
    // const bottomRow = bottomStar
    //   .split("\n")
    //   [bottomStar.split("\n").length - 1].trim().length;
    // create the tree trunk
    for (let i = 0; i < height / 3; i++) {
        bottomStar += "\n" + treeTrunk;
    }
    return bottomStar;
}
// Initial star based on the height of upper tree body and width of the tree
function xmasTreeTopStar(height) {
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
function starsToAdd(iteration) {
    let stars = "";
    for (let j = 0; j < iteration; j++) {
        if (iteration % 2 === 0) {
            stars += " *";
        }
        else {
            stars += " *";
        }
    }
    return stars;
}
// Stars and spaces that will be replaced in each iteration
function replacementStarsAndSpaces(iterator) {
    let replacement = "";
    for (let j = 1; j < iterator; j++) {
        replacement += " ";
    }
    if (iterator % 2 === 0) {
        replacement = replacement + "  *" + replacement;
    }
    else {
        replacement = replacement + "  *" + replacement;
    }
    return replacement;
}
// Final output
console.log(xmasTree(15));

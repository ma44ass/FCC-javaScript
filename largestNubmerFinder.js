function largestOfAll(arr) {
  const LargestNumbers = [];

  for (let subArr of arr) {
    let max = subArr[0];
    for (let i = 0; i < subArr.length; i++) {
      if (max < subArr[i]) {
        max = subArr[i];
      }
    }
    LargestNumbers.push(max);
  }
  return LargestNumbers;
}

/*Tests*/

console.log(
  largestOfAll([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ]),
);
console.log(
  largestOfAll([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ]),
);
console.log(
  largestOfAll([
    [4, 9, 1, 3],
    [13, 35, 18, 26],
    [32, 35, 97, 39],
    [1000000, 1001, 857, 1],
  ]),
);
console.log(
  largestOfAll([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10],
  ]),
);

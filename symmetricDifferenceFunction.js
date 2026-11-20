// Compare two arrays and return a new array with
// any items found in only one of the two given arrays,
// but not both.

function diffArray(arrA, arrB) {
  const onlyInA = arrA.filter((el) => !arrB.includes(el));
  const onlyInB = arrB.filter((el) => !arrA.includes(el));

  return [...onlyInA, ...onlyInB];
}

/*Tests */
console.log(
  diffArray(
    ["diorite", "andesite", "grass", "dirt", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"],
  ),
);
console.log(
  diffArray(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["andesite", "grass", "dirt", "dead shrub"],
  ),
);
console.log(
  diffArray(
    ["andesite", "grass", "dirt", "dead shrub"],
    ["andesite", "grass", "dirt", "dead shrub"],
  ),
);
console.log(diffArray(["pen", "book"], ["book", "pencil", "notebook"]));
console.log(
  diffArray(["car", "bike", "bus"], ["bike", "train", "plane", "bus"]),
);
console.log(
  diffArray(["apple", "orange"], ["apple", "orange", "banana", "grape"]),
);
console.log(diffArray([], ["apple", "banana"]));
console.log(diffArray(["apple", "banana"], []));
console.log(diffArray([], []));

// create a function that returns the lowest index
// at which a value should be inserted into an array
// once it has been sorted in ascending order.

//Approach 1: explicit sort + index (O(n\log n)
function getIndexToIns(arr, number) {
  //Helper comparator needed because Array.prototype.sort() defaults to string sorting
  const compareNumbers = (a, b) => a - b;

  // sorting the array of numbers in ascending number
  const sortedWithNumber = [...arr, number].sort(compareNumbers);

  //Finding the lowest Index where the number must be inserted
  return sortedWithNumber.findIndex((item) => item === number);
}

//Approach 2 :only need the insertion index O(n)
function getIndexToIns2(arr, number) {
  return arr.filter((item) => item < number).length;
}



/**Tests**/

console.log(getIndexToIns([], 5))
console.log(getIndexToIns([10, 20, 20, 30], 20))
console.log(getIndexToIns([10, 20, 30], 99))
console.log(getIndexToIns([10, 20, 30], -1))


console.log(getIndexToIns2([], 5))
console.log(getIndexToIns2([10, 20, 20, 30], 20))
console.log(getIndexToIns2([10, 20, 30], 99))
console.log(getIndexToIns2([10, 20, 30], -1))


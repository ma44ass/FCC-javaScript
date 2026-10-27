
//Approach 1 :  using flat() and Set
   //The flat() method is a built-in JavaScript array method introduced in ES2019. 
   // Its job is to flatten nested arrays 

 /* How it works :
   1 flatten all argument arrays into a single array
   2 pass it into a Set to remove duplicates (Sets keep the elements order)
   3 spread the Set into an array
  */

function uniteUnique(...arrays){
 return [...new Set(arrays.flat())];

}


////Approach 2 : using reduce()
 /*How it works
    1 Flatten first to work with a single stream of elements
    2 Reduce the combined array to keep only unique elements
 */


// function uniteUnique(...arrays){
//     const shallowArr = arrays.flat();
//     return shallowArr.reduce((acc, current) => {
//         return acc.includes(current) 
//         ? acc
//         : [...acc, current]
//     }, [])

// }


/*Tests: */
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6]));
console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]));

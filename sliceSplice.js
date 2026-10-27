
/*Using a for loop*/
function frankenSplice(arr1, arr2, index){
    const copiedElements = [...arr1];
    const result = [...arr2]

    for(let i = 0; i < copiedElements.length; i++){
        result.splice(index + i,0,copiedElements[i])
    }
    return result;
}


/* 
//Using splice
function frankenSplice(arr1, arr2, index) {
    const result = [...arr2];
    result.splice(index, 0, ...arr1);
    return result;
}
*/


/*
//Using slice
function frankenSplice(arr1,arr2,index){
    return [...arr2.slice(0,index), ...arr1, ...arr2.slice(index)]

}
*/


/*Tests*/

console.log(frankenSplice([1, 2, 3], [4, 5], 1));
console.log(frankenSplice([1, 2], ["a", "b"], 1));
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
console.log(frankenSplice([1, 2, 3, 4], [], 0));
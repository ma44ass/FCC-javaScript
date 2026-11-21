//create a function that takes an initial array as its first argument, 
//followed by one or more additional arguments representing the values to remove.

//Approach 1: using filter() and includes() -O(n * m)
function destroyer(arr, ...valuesToRemove){
    return arr.filter((item) => !valuesToRemove.includes(item))
    
}

//Approach 2 : Using Set and filter():  O(n + m)
function destroyer(arr,...valuesToRemove){
    const toRemove= new Set(valuesToRemove);
    return arr.filter((item) => !toRemove.has(item));
}



/*Tests*/
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
console.log(destroyer( ["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan" ));
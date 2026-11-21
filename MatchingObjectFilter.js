// create a function that filters an array of objects 
// and returns only those objects that match all 
// key-value pairs in a given source object.


//Approach1:  filter() + some()
function whatIsInAName(objectArray, sourceObject){
    //Converts sourceObject into [key, value] pairs with Object.entries()
    const sourceEntries = Object.entries(sourceObject);

    return objectArray.filter((object) => {
        //uses .some() to check if any pair is missing from an object or has a different value
        const hasMismatch = sourceEntries.some(
            ([key , value]) => !Object.hasOwn(object, key) || object[key] !== value
        );
        return !hasMismatch;
    })

}

//Approach 2 :  filter() + every() 
function whatIsInAName2(objectArray, sourceObject){
    //Extracts the required property names from sourceObject using Object.keys()
    const sourceKeys = Object.keys(sourceObject);

    return objectArray.filter((object) => 
        //uses .every() to verify that every key exists on the candidate object and strictly equals sourceObject[key]
        sourceKeys.every(
            (key) =>
                Object.prototype.hasOwnProperty.call(object,key)
                && object[key] === sourceObject[key]
        )
    );
}

//Approach 3 : filter() + for..of loop
function whatIsInAName3(objectArray, sourceObject){
    const sourceEntries = Object.entries(sourceObject);

    return objectArray.filter((object) => {
        //Iterates through [key, value] entries of sourceObject with a for...of loop for each candidate object
        for(const [key, value] of sourceEntries){
            if(!Object.hasOwn(object, key) || object[key] !== value){
                return false;
            }
        }

        return true;
    })
}



/*Tests*/

console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }))
console.log(whatIsInAName2([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }))
console.log(whatIsInAName3([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }))
console.log(whatIsInAName4([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }))
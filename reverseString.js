function reverseString(str){
    if(!str) return;

    const validatedStr = str.trim();
    let reversed = [];

    for(let i = validatedStr.length - 1 ; i>=0 ; i--){
        reversed.push(validatedStr[i])
    }
    return reversed.join("")
}

/*Tests*/

console.log(reverseString("hello"));
console.log(reverseString("Howdy"));
console.log(reverseString("Howdy"));
console.log(reverseString("Greetings from Earth"));


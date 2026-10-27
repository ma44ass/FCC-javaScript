function titleCase(str){
  let normalizedstr = str.toLowerCase()
  let words = normalizedstr.split(" ")
  let result = []

 for(let word of words){
  let capitalized = word.charAt(0).toUpperCase() + word.slice(1)
  result.push(capitalized)
 }
 return result.join(" ")

}


/*Tests*/
console.log(titleCase("hello moe"));
console.log(titleCase("I'm a little tea pot"))
console.log(titleCase("sHoRt AnD sToUt"))
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"))

function mutation(arr){
  let el1 = arr[0].toLowerCase()
  let el2 = arr[1].toLowerCase()

  for(let i = 0 ; i < el2.length; i++){
    if (!el1.includes(el2[i])){
       return false
    } 
  }
  return true
  }


 /*Tests: */ 
 
console.log(mutation(["hello", "hey"]))
console.log(mutation(["hello", "Hello"]))
console.log(mutation(["ate", "date"]))
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]))
console.log(mutation(["Mary", "Army"]))
console.log(mutation(["Mary", "Aarmy"]))
console.log(mutation(["Alien", "line"]))
console.log(mutation(["floor", "for"]))
console.log(mutation(["hello", "neo"]))
console.log(mutation(["voodoo", "no"]))
console.log(mutation(["ate", "date"]))
console.log(mutation(["Tiger", "Zebra"]))
console.log(mutation(["Noel", "Ole"]))

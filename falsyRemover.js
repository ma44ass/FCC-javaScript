function bouncer(arr){
  let results = []
  for(let i = 0; i <= arr.length; i++){
      const bool = Boolean(arr[i]);
      if(bool){
        results.push(arr[i]);
      }
    }
    return results;
  }


console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"]))
console.log(bouncer([false, null, 0, NaN, undefined, ""]))
console.log(bouncer([null, NaN, 1, 2, undefined]))
console.log(bouncer([]))
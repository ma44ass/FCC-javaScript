// USING A LOOP
// function sumAll(arr){
//     //Find the min to know where to start and max to know where to end

//     const start = Math.min(...arr);
//     const end = Math.max(...arr);

//     let sum = 0;

//     // loop from the min to the max to count the sum
//     for(let i = start; i <= end; i++){
//         sum += i
//     }
//     return sum;
// }



//USING Array.from and reduce combo
function sumAll(arr){
    const start = Math.min(...arr);
    const end = Math.max(...arr);

    return Array.from(
        {length : end - start + 1},
        (_,i) => start + i
    ).reduce((acc, curr) => acc + curr , 0);
}


/*Tests :*/
console.log(sumAll([1, 4])); // 4 - 1 = 3 + 1 = 4 [1,2,3,4]
console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));
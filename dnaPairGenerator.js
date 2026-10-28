

//Approach1 : using a loop + switch
// function pairElement(str) {
//   const result = [];
  
//   for (const char of str) {
//     let pair;
    
//     switch (char) {
//       case 'A': pair = ['A', 'T']; break;
//       case 'T': pair = ['T', 'A']; break;
//       case 'C': pair = ['C', 'G']; break;
//       case 'G': pair = ['G', 'C']; break;
//     }
    
//     result.push(pair);
//   }
  
//   return result;
// }

//Approach2 : 
    //1 Split the input into an arr of individual letters
    //2 Map through each letter to find the matching pair
    //3 Group them into pairs and collect them

function pairElement(DNAstrand){
    const pairs = {
        A: 'T',
        T: 'A',
        C: 'G',
        G: 'C'
    };

    return DNAstrand.split('').map(letter => [letter, pairs[letter]]);
}


/*Tests */ 

console.log(pairElement("ATCGA"));
console.log(pairElement("TTGAG"));
console.log(pairElement("CTCTA"));
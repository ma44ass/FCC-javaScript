

function convertHTML(str){
    const entities = {
        "&" : "&amp;",
        "<" : "&lt;",
        ">" : "&gt;",
        '"' : "&quot;",
        "'" : "&apos;",
    }

        return str.split('')
            .map(char => entities[char] || char)
            .join('');

    }


/*Tests:*/
console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML("Sixty > twelve"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Schindler's List"))
console.log(convertHTML("<>"));
console.log(convertHTML("abc"));

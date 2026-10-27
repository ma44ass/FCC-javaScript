const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

// function generatePassword(passwordLength) {
//   let random = "";
//   for (let i = 0; i < passwordLength; i++) {
//     const randomCharIndex = Math.floor(Math.random() * characters.length);
//     random += characters[randomCharIndex];
//   }
//   return random;
// }


function generatePassword(passwordLength){
    return Array.from(
        {length: passwordLength},
        () => characters[Math.floor(Math.random() * characters.length)]  
    ).join('');
}


const password = generatePassword(15);
console.log(`Generated password: ${password}`);


function isPalindrome(word) {
    if (!word) return false;
    const validatedWord = word.toLowerCase();
    let left = 0;
    let right = validatedWord.length - 1;

    while (left < right) {
        if (validatedWord[left] !== validatedWord[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}


function findPalindromeBreaks(words) {
    if (!words || words.length === 0) {
        return [];
    }

    const nonPalindromeIndices = [];

    for (let i = 0; i < words.length; i++) {
        if (!isPalindrome(words[i])) {
            nonPalindromeIndices.push(i);
        }
    }

    return nonPalindromeIndices;
}

function findRepeatedPhrases(words, phraseLength) {
    if (!words || phraseLength >= words.length || phraseLength <= 0) {
        return [];
    }

    const phraseCounts = {};
    const indicesByPhrase = {};

    
    for (let i = 0; i <= words.length - phraseLength; i++) {
      
        const phraseSlice = [];
        for (let j = 0; j < phraseLength; j++) {
            phraseSlice.push(words[i + j]);
        }

        // Create a string key by joining with a loop
        let phraseKey = "";
        for (let j = 0; j < phraseSlice.length; j++) {
            if (j > 0) phraseKey += " ";
            phraseKey += phraseSlice[j];
        }

        // Count occurrences
        if (!phraseCounts[phraseKey]) {
            phraseCounts[phraseKey] = 0;
        }
        phraseCounts[phraseKey]++;

        // Store starting indices
        if (!indicesByPhrase[phraseKey]) {
            indicesByPhrase[phraseKey] = [];
        }
        indicesByPhrase[phraseKey].push(i);
    }

    
    const allStartIndices = [];
    for (const phraseKey in phraseCounts) {
        if (phraseCounts[phraseKey] > 1) {
            const indices = indicesByPhrase[phraseKey];
            for (let k = 0; k < indices.length; k++) {
             
                let exists = false;
                for (let m = 0; m < allStartIndices.length; m++) {
                    if (allStartIndices[m] === indices[k]) {
                        exists = true;
                        break;
                    }
                }
                if (!exists) {
                    allStartIndices.push(indices[k]);
                }
            }
        }
    }


    for (let i = 0; i < allStartIndices.length; i++) {
        for (let j = i + 1; j < allStartIndices.length; j++) {
            if (allStartIndices[i] > allStartIndices[j]) {
                const temp = allStartIndices[i];
                allStartIndices[i] = allStartIndices[j];
                allStartIndices[j] = temp;
            }
        }
    }

    return allStartIndices;
}


function analyzeTexts(texts, phraseLength) {
    if (!texts || texts.length === 0) {
        return [];
    }

    const results = [];

    for (let i = 0; i < texts.length; i++) {
        const wordList = texts[i];
        const repeated = findRepeatedPhrases(wordList, phraseLength);
        const palindromeBreaks = findPalindromeBreaks(wordList);

        results.push({
            repeatedPhrases: repeated,
            palindromeBreaks: palindromeBreaks
        });
    }

    return results;
}

console.log(analyzeTexts(["the", "cat", "sat", "the", "cat"],2))
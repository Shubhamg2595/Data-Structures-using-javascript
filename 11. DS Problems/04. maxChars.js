// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


// ? way1

function maxChar(str){
    let wordMap = {};
    let max = -1;
    let maxChar = null;

    for(let char of str){
        if(char === " ")
        {
            continue;
        }
        wordMap[char] = wordMap[char] ? wordMap[char]+1 : 1; 
        if(wordMap[char]>max)
        {
            max = wordMap[char];
            maxChar = char
        }
    }

    return {wordMap, maxChar};
    // return maxChar
}


console.log(maxChar("abcccccccd"))
console.log(maxChar("apple 1231111"))




// ! Different questions that can be solved using same technique
// 1. most common character ina string
// 2. Anagram: does string A have same characters as string B
// 3. Does string have any repeated characters in it
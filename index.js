
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


// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


//? way1 : using wordMaps(hashmap)

// function convertStrToWordMap(str) {
//     let wordMap = {};

//     for (let char of str) {
//         wordMap[char] = wordMap[char] ? wordMap[char] + 1 : 1;
//     }
//     return wordMap;
// }

// function anagrams(str1, str2) {

//     let str1WordMap = convertStrToWordMap(str1);
//     let str2WordMap = convertStrToWordMap(str2);

//     // console.log('str1WordMap', str1WordMap)
//     // console.log('str2WordMap', str2WordMap)
//     if (Object.keys(str1WordMap).length === Object.keys(str2WordMap).length) {
//         for (let key in str1WordMap) {
//             if (key in str2WordMap) {
//                 if (str1WordMap[key] !== str2WordMap[key]) {
//                     return false;
//                 }
//             }
//         }
//     }

//     return true



// }



// ? way2 : using sort()


function cleanStringAndSort(string){
    return string.replace(/[^\w]/g,'').toLowerCase().split('').sort().join();
}

function anagrams(str1,str2){
    return cleanStringAndSort(str1) === cleanStringAndSort(str2)
}


console.log(anagrams('rail safety', 'fairy tales'))
console.log(anagrams('RAIL! SAFETY!', 'fairy tales'))
console.log(anagrams('Hi there', 'Bye there')) 

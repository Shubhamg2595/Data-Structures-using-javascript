// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


//? way1 : using utils
// function capitalize(str) {
//     // console.log(str.length)

//     let updateStr = '';

//     for (let word of str.split(' ')) {
//         updateStr = updateStr + word[0].toUpperCase() + word.slice(1) + ' ';
//     }
//     updateStr = updateStr.trim();
//     // console.log(updateStr,updateStr.length)

//     return updateStr;

// }


//? way2 : without using utils like slice and trim

function capitalize(str){
    let updateStr = str[0].toUpperCase();
    for(let i=1;i<str.length;i++){
        if(str[i-1] === ' ' )
        {
            updateStr+= str[i].toUpperCase();
        }
        else{
            updateStr+= str[i];
        }
    }
    return updateStr
}

// solution below is much better as above one will fail if string has multiple whitespaces between two words

console.log(capitalize('a short sentence')); 
console.log(capitalize('a lazy fox')); 
console.log(capitalize('look, it is    working!')); 
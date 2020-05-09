// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//? way1
// function reverse(str) {
//     let revStr = '';

//     for (let i = str.length - 1; i >= 0; i--) {
//         revStr += str[i];
//     }

//     return revStr
// }


// ?way2

// function reverse(str) {
//     let revStr = '';

//     for (let character of str) {
//         revStr = character + revStr;
//     }

//     return revStr
// }




// ?way3 : using util functions
// function reverse(str) {
//     return str.split('').reverse().join('')
// }


// ?way4 : using reduce

function reverse(str) {
    let revStr = str.split('')
        .reduce((reversed, character) => {
            return character + reversed
        }, '')
    return revStr
}

console.log(reverse('apple'))
console.log(reverse('!sgniteerG'))

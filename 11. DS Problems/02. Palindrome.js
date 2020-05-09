// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false



// ? way1
// function isPalindrome(str){
//     return str === str.split('').reverse().join('')
// }

// ? way2

// function isPalindrome(str) {
//     let mid = parseInt(str.length / 2);

//     for (let i = 0, j = str.length - 1; i <= mid; i++, j--) {
//         if (str[i] !== str[j]) {
//             return false;
//         }
//     }
//     return true;

// }


// ? way3 : using every()


function isPalindrome(str) {
    return str.split('').every((char, idx) => {
        return char === str[str.length - idx - 1]
    });
}


console.log(isPalindrome('madam'))
console.log(isPalindrome('madasdjjjdasnsdam'))
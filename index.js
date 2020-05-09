
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
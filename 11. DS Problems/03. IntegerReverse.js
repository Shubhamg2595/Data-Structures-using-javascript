//? way1

// function reverseInt(n) {
//     let revNum = 0;
//     let rem;
//     while (n != 0) {
//         rem = n % 10;
//         revNum = revNum * 10 + rem;
//         n = parseInt(n / 10);
//     }
//     return revNum;
// }


// ? way2

function reverseInt(n) {
    const revNum = n
        .toString()
        .split('')
        .reverse()
        .join('')
    return parseInt(revNum) * Math.sign(n)
}

console.log(reverseInt(15))
console.log(reverseInt(118))
console.log(reverseInt(-321))

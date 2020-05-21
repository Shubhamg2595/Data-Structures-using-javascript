// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


// way1
// function vowels(str) {
//     let count = 0;

//     let vowelsArr = ['a', 'i', 'e', 'o', 'u'];

//     for (let char of str) {
//         if (vowelsArr.includes(char)) {
//             count++;
//         }
//     }

//     console.log(count)

// }

// way2 : using regex

function vowels(str) {
    const vowelsCount =  str.match(/[aieou]/gi)
    console.log(vowelsCount ? vowelsCount.length : 0)
}


vowels('Hi There!')
vowels('Why do you ask?')
vowels('Why?') 

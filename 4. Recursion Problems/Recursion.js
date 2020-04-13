
/**
 * In computer science, a recursive function is a function that calls itself.
Recursive functions are often elegant and solve complex problems through the “divideand-conquer” method.
 *When recursive functions are implemented incorrectly, it causes fatal issues because the
program will get stuck and not terminate. Infinite recursive calls result in stack overflow.
Stack overflow is when the maximum number of call stacks of the program exceeds the
limited amount of address space (memory)

//! Rule of Recursion
// ? 1. Base case (Terminating case)
In recursion, there must be a base case (also referred to as terminating case). Because
recursive methods call themselves, they will never stop unless this base case is reached.
Stack overflow from recursion is most likely the result of not having a proper base case.

 */

// function countDownToZero(n) {
//   // base case. Stop at 0
//   if (n < 0) {
//     return; // stop the function
//   } else {
//     console.log(n);
//     countDownToZero(n - 1); // count down 1
//   }
// }
// countDownToZero(12);




/************************************************************************/
/**
 // !  Fibonacci Sequence
 * 1, 1, 2, 3, 5, 8, 13, 21 …
 print the Nth term of the Fibonacci sequence?
 */

// ? Iterative Solution

// function getNthFibo(n) {
//   if (n === 0 || n === 1) {
//     return 1
//   }

//   let first = 1, last = 1;
//   let sum = 0;

//   for (let i = 2; i <= n; i++) {
//     sum = first + last;
//     first = last;
//     last = sum;
//   }

//   return sum;
// }


// ? Recursive Solution: Fibonacci


// function getNthFibo(n) {
//   if (n <= 1) {
//     return n;
//   } else {
//     return getNthFibo(n - 1) + getNthFibo(n - 2);
//   }
// }

// Base case: The base case for the Fibonacci sequence is that the first element is 1.
// Divide and conquer: By definition of the Fibonacci sequence, the Nth Fibonacci
// number is the sum of the (n-1)th and (n-2)th Fibonacci numbers. However, this
// implementation has a time complexity of O(2n)


// ! Fibonacci Sequence: Tail Recursion
// ? A tail recursive function is a recursive function in which the recursive call is the last executed thing in the function.
//? At each iteration, the following update happens: (first, last) = (last,first+last). With this structure, the following recursive function can be formed:

/*
function getNthFibo(n, first, last) {
  if (n === 0) {
    return first;
  }
  if (n === 1) {
    return last;
  }
  return getNthFibo(n-1, last, first + last)
}
*/
// getNthFibo(3,1,1)
// getNthFibo(2,1,2)
// getNthFibo(1,2,3)
// n=1, so, return last i.e 3


//* considering the normal iterative solution,
// console.log('getNthFibo',getNthFibo(2));
// console.log('getNthFibo', getNthFibo(4,1,1));
// console.log('getNthFibo', getNthFibo(6,1,1));
// console.log('getNthFibo', getNthFibo(7,1,1));

// Time Complexity: O(n)
// At most, this function executes n times because it’s decremented by n-1 each time
// with only single recursive call.
// Space Complexity: O(n)
// The space complexity is also O(n) because of the stack call used for this function. 



/************************************************************************/
/**
 * ! CONVERT DECIMAL (BASE 10) TO BINARY NUMBER
To do this, keep dividing the number by 2 and each time calculate the modulus (remainder)
and division.




//? 1|2|4|8|16|32|64
//? 1 1 1 1 0  1
 *
 */


// function base10ToString(n) {
//   let binaryNum = [];
//   let rem = 0;


//   while (n !== 0) {
//     rem = n % 2;
//     binaryNum.push(rem);
//     n = parseInt(n / 2);
//     console.log(`n: ${n}  rem: ${rem}`)
//   }
//   console.log('BinaryNumber', binaryNum.join(''))
// }



// ? Recursive solution 
// Base case: The base case for this problem is when the n is less than 2. When it is less than 2, it can be only 0 or 1

// function base10ToString(n) {

//   let binaryString = '';

//   function base10ToStringHelper(n) {
//     if (n < 2) {
//       binaryString += n;
//       return;
//     }
//     else {
//       base10ToStringHelper(parseInt(n / 2))
//       base10ToStringHelper(n % 2)
//     }
//   }
//   base10ToStringHelper(n);

//   // return binaryString;
//   console.log(binaryString);


// }


// base10ToString(47)
// base10ToString(48)


// Time Complexity: O(log2(n))
// Time complexity is logarithmic because the recursive call divides the n by 2, which makes the
// algorithm fast. For example, for n = 8, it executes only three times. For n=1024, it executes
// 10 times.
// Space Complexity: O(log2(n))

/************************************************************************/
/**
 //! PRINT ALL PERMUTATIONS OF AN ARRAY

 Base case: beginIndex is equal to endIndex.
When this occurs, the function should print the current permutation.
 *
 */


function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }
  
  function permute(strArray, begin, end) {
    if (begin === end) {
      console.log(strArray);
    }
    else {
      for (let i = begin; i < end+1; i++) {
        swap(strArray, begin, i)
        permute(strArray, begin + 1, end)
        swap(strArray, begin, i)
      }
    }
  }
  
  function permuteArray(strArr) {
    return permute(strArr, 0, strArr.length - 1);
  }
  permuteArray(["A", "C", "D"]);
  
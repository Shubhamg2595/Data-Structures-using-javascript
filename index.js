/**
 *FIND TWO ARRAY ELEMENTS IN AN ARRAY THAT ADD UP TO A NUMBER

 Problem: Given the array arr, find and return two indices of the array that add up to weight
or return -1 if there is no combination that adds up to weight.

For example, in an array like [1,2,3,4,5], what numbers add up to 9?
The answers are 4 and 5, of course.
 */

/*
function findSum(arr,target)
{
 let sum=0;

 for(let i=0;i<arr.length;i++)
 {
   for(let j=i+1;j<arr.length;j++)
   {
     if(arr[i] + arr[j] === target)
     {
       return `${i},${j}`;
     }
   }
 }

 return -1;
}



let a = [1,2,3,4,5]
console.log('indices of Sum elements',findSum(a,9))
console.log('indices of Sum elements',findSum(a,4))

Two for loops over n elements of the array yields a high time complexity. However, no extra
memory was created. Similar to how time complexity describes the time required relative to
input size, n, to finish the algorithm, the space complexity describes the additional memory
needed for implementation. The space complexity, O(1), is constant.
Time Complexity: O(n2
)

*/

// lets do it in O(n) time


// What if any previously seen array elements were stored and could be checked easily?

// Here’s the input:
// 1 var arr = [1,2,3,4,5];
// 2 var weight = 9;

// Here, 4 and 5 are the combination, and their indices are [3,4].

// How could it be determined that a solution exists when 5 is visited?
// If the current value is at 5 and the weight is 9, the remaining required weight is just 4 (9-5=4).
// Since 4 is shown before 5 in the array, this solution can work in O(n). Finally, to store the seen
// elements, use a JavaScript object as a hash table. 
// ! Storing into and retrieving a JavaScript object property is O(1) in time.


// function findSum(arr, target) {
//   let sum = 0;
//   let seenElements = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (!(arr[i] in seenElements)) {
//       seenElements[i] = true;
//     }
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if ((target - arr[i])  in seenElements) {
//       return `${target - arr[i]} , ${arr[i]}`
//     }
//   }

//   return -1;
// }
// function findSum(arr, target) {
//   let sum = 0;
//   let seenElements = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (!(arr[i] in seenElements)) {
//       seenElements[i] = true;
//     }
//     if ((target - arr[i])  in seenElements) {
//       return `${target - arr[i]} , ${arr[i]}`
//     }
//   }
//   return -1;
// }



// let a = [1, 2, 3, 4, 5]
// console.log('indices of Sum elements', findSum(a, 9))
// console.log('indices of Sum elements', findSum(a, 4))
// console.log('indices of Sum elements', findSum(a, 7))

// Time Complexity: O(n)
// Space Complexity: O(n)
// Storing into a hash table and looking an item up from a hash table is only O(1). Space
// complexity has increased to O(n) to store the visited array indices inside the hash table


/************************************************************************/
/**
 * IMPLEMENT THE ARRAY.SLICE() FUNCTION FROM SCRATCH
Let’s review what the .slice() function does.
// ! .slice() takes two parameters: the beginning index and the last ending index of the array.
It returns a portion of an existing array without modifying the array function arraySlice
(array, beginIndex, endIndex)
 */

/*
function arraySlice(arr, beginIndex, endIndex) {

 if(!beginIndex && !endIndex)
 {
   return arr;
 }

 if (endIndex === undefined) {
   endIndex = arr.length;
 }
 let newArray = [];
 for (let i = beginIndex; i < endIndex; i++) {
   newArray.push(arr[i]);
 }
 return newArray;
}
let a = [1, 2, 3, 4, 5, 6, 7]
console.log('my own Slice function', arraySlice(a, 1, 4))
console.log('my own Slice function', arraySlice(a, 1))

Time Complexity: O(n)
Space Complexity: O(n)
The time complexity is O(n) because all n items in the array must be accessed. Space
complexity is also O(n) to hold all n items when copying the array.
*/

/************************************************************************/
/**
 *
 * FIND COMMON ELEMENTS IN K-SORTED ARRAYS
 *
 var arr1 = [1, 5, 5, 10];
 var arr2 = [3, 4, 5, 5, 10];
 var arr3 = [5, 5, 10, 20];
 var output = [5 ,10];
 *
 */
/*
function commonElements(kArrays) {
  let len = kArrays.length;
  let mergedArray = [];
  for(let i=0;i<len;i++)
  {
    mergedArray.push(...kArrays[i]);
  }
  let hashMap = {};
  let commonElements = [];

  for (let i = 0; i < mergedArray.length; i++) {
    hashMap[mergedArray[i]] =  hashMap[mergedArray[i]] ? hashMap[mergedArray[i]] + 1 : 1;
   }

  //  console.log(Object.entries(hashMap))

   for(const [key,value] of Object.entries(hashMap))
  {
    if(value >= len)
    {
      commonElements.push(Number(key))
    }
  }

  return commonElements;


}


let a1 = [1, 5, 5, 10];
let a2 = [3, 4, 5, 5, 10];
let a3 = [5, 5, 10, 20];

console.log('commonElements', commonElements([a1, a2, a3]))
*/

// Time Complexity: O(kn)
// Space Complexity: O(n)
// Here, n is longest array length, and k is the number of arrays.
/************************************************************************/
/**
 *
 */

// GEEKSFORGEEKS : MUST DO ARRAY CODING_QUESTIONS

/**
 *
 * Subarray with given sum
 * Find all subarray with sum equal to number?

 *
 */

// const sum = (arr) => arr.reduce( (a,b) => a+b);

// function getAllSubsets(arr,targetVal)
// {
//   let subSets = [];

//   for(let i=0;i<arr.length;i++)
//   {
//     let tmp = [];
//     for(let j=i;j<arr.length;j++)
//     {
//       tmp.push(arr[j]);
//       if(sum(tmp)===targetVal)
//       {
//         subSets.push([...tmp]);
//       }
//     }
//   }
//   return subSets;
// }


// updated code to get All size pairs

// function getAllSubsets(arr,target)
// {

//     let len = arr.length;
//     let subSets = [];
//     for(let i=0;i<len;i++)
//     {
//         let temp = [];
//         for(let j=i;j<len;j++)
//         {
//             temp.push(arr[j]);
//             if(sum(temp) === target)
//             {
//                 subSets.push([...temp])
//                 temp.pop();
//             }
//             if(sum(temp) > target)
//             {
//                 temp.pop();
//             }
//         }
//     }
//     return subSets

// }

// console.log(getAllSubsets([1,4,2,2,-5,10],5));
// console.log(getAllSubsets([3,4,-7,1,3,3,1,-4], 7));


/**
 *Count the triplets

Given an array of distinct integers. The task is to count all the triplets such that sum of two elements equals the third element.

Example:
Input:
2
4
1 5 3 2
3
3 2 7
Output:
2
-1

Explanation:
Testcase 1: There are 2 triplets: 1 + 2 = 3 and 3 +2 = 5
 *
 */

// function sum(a, b) {
//   return a + b;
// }

// function countTriplet(arr) {
//   let tripletCount = 0;

//   for (let i = 0;i<arr.length;i++)
//   {
//     for(let j=i+1;j<arr.length;j++)
//     {
//       let sum = arr[i]+arr[j];
//       if(arr.includes(sum))
//       {
//         tripletCount+=1;
//       }
//     }
//   }
//   return tripletCount>0 ? tripletCount : -1;
// }

// console.log(countTriplet([1,5,3,2]))
// console.log(countTriplet([3,2,7]))




/**
 *Kadane's Algorithm

 Given an array arr of N integers. Find the contiguous sub-array with maximum sum.
 *
 Example:
Input
2
5
1 2 3 -2 5
4
-1 -2 -3 -4
Output
9
-1

Explanation:
Testcase 1: Max subarray sum is 9 of elements (1, 2, 3, -2, 5) which is a contiguous subarray.
 */



// function kadane(arr)
// {
//   let localSum = arr[0];
//   let globalSum = arr[0];

//   for(let i=1;i<arr.length;i++)
//   {
//     localSum = Math.max(arr[i],localSum+arr[i]);
//     globalSum = Math.max(localSum,globalSum);
//     // console.log('ls',localSum,'gs',globalSum);
//   }
//   return globalSum;
// }

// console.log(kadane([1,2,3,-2,5]));




/**
 * Missing number in array
 *
 * Given an array C of size N-1 and given that there are numbers from 1 to N with one element missing, the missing number is to be found.
 *
 * Explanation:
Testcase 1: Given array : 1 2 3 5. Missing element is 4.
 */

// function linearSum(n) {
//     return n*((n+1)/2);
// }
// function sumOfArrays(arr)
// {
//     let sum = 0;
//     for(let elem of arr)
//     {
//         sum+=elem;

//     }
//     return sum;
// }

// // let arr = [1, 2, 3, 5];
// let arr = [1, 2, 3, 4,5,6,8,9];

// let origLs1 = sumOfArrays(arr);
// let ls2 = linearSum(arr.length+1);

// console.log('missing NUmber',ls2 - origLs1);







/**
 *  Merge Without Extra Space
 * 
 * Given two sorted arrays arr1[] and arr2[] in non-decreasing order with size n and m. The task is to merge the two sorted arrays into one sorted array (in non-decreasing order).

Example:
Input:
2
4 5
1 3 5 7
0 2 6 8 9
2 3
10 12
5 18 20

Output:
0 1 2 3 5 6 7 8 9
5 10 12 18 20

Explanation:
Testcase 1: After merging two non-decreasing arrays, we have, 0 1 2 3 5 6 7 8 9.


 *
 */


// const merge2arr = (ar1,ar2) => {
//     let mergedArr = [...ar1,...ar2];
//     return mergedArr.sort((a,b) => a-b);

// }

// let a1 = [1,3,5,7];
// let a2 = [0,2,6,8,9];

// console.log(merge2arr(a1,a2));





/**
 *
 * Rearrange Array Alternately
 * 
 * Given a sorted array of positive integers. Your task is to rearrange  the array elements alternatively i.e first element should be max value, second should be min value, third should be second max, fourth should be second min and so on...
 * 
 * Input:
2
6
1 2 3 4 5 6
11 
10 20 30 40 50 60 70 80 90 100 110

Output:
6 1 5 2 4 3
110 10 100 20 90 30 80 40 70 50 60

Explanation:
Testcase 1: Max element = 6, min = 1, second max = 5, second min = 2, and so on... Modified array is : 6 1 5 2 4 3.
 *
 */

// function arrangeAlternate(arr)
// {
//     let modArr = arr.sort((a,b) => b-a);
//     let n = Math.floor(arr.length/2);
//     let a1=[];

//     for(let i=0,j=arr.length-1;i<n;i++,j--)
//     {
//         a1.push(arr[i]);
//         a1.push(arr[j]);

//     }
//     if(arr.length > a1.length)
//     {
//         a1.push(arr[Math.floor(arr.length/2)])
//     }

//     return a1;

// }


// let arr = [1,2,3,4,5,6,7];
// // let arr = [10 ,20, 30, 40, 50, 60, 70, 80, 90, 100, 110];

// console.log(arrangeAlternate(arr));


/**
 *Inversion of array

 * Given an array of positive integers. The task is to find inversion count of array.

Inversion Count : For an array, inversion count indicates how far (or close) the array is from being sorted. If array is already sorted then inversion count is 0. If array is sorted in reverse order that inversion count is the maximum. 
Formally, two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j.

Example:
Input:
1
5
2 4 1 3 5

Output:
3

Explanation:
// Testcase 1: The sequence 2, 4, 1, 3, 5 has three inversions (2, 1), (4, 1), (4, 3).
//  */

// function inversionCount(arr)
// {
//     let invCount = 0;

//     for(let i=0;i<arr.length;i++)
//     {
//         for(let j=i+1;j<arr.length;j++)
//         {
//             if(a[i]>a[j])
//             {
//                 invCount+=1;
//             }
//         }
//     }
//     return invCount;
// }

// // let a = [2, 4, 1, 3, 5];
// let a = [1,9,6,4,5];

// console.log('inv Count',inversionCount(a));






/** 
 * Sort an array of 0s, 1s and 2s
 * 
 * Given an array A of size N containing 0s, 1s, and 2s; you need to sort the array in ascending order.
 *
 * 
 * Example:
Input :
2
5
0 2 1 2 0
3
0 1 0

Output:
0 0 1 2 2
0 0 1

Explanation:
Testcase 1: After segragating the 0s, 1s and 2s, we have 0 0 1 2 2 which shown in the output.
 *
 */
// easiest way
//  function segregate(arr)
//  {
//      return arr.sort((a,b) => a-b)
//  }


//  console.log(segregate([0 ,2, 1, 2, 0]));





/**
 *Equilibrium point

 Given an array A of N positive numbers. The task is to find the position where equilibrium first occurs in the array. Equilibrium position in an array is a position such that the sum of elements before it is equal to the sum of elements after it.

 Example:
Input:
2
1
1
5
1 3 5 2 2

Output:
1
3

Explanation:
Testcase 1: Since its the only element hence its the only equilibrium point.
Testcase 2: For second test case equilibrium point is at position 3 as elements below it (1+3) = elements after it (2+2).
 *
 */

//  function sumArr(startIndex,endIndex,ar)
//  {
//     let sum = 0;
//     for(let i=startIndex;i<=endIndex;i++)
//     {
//         sum+=ar[i];
//     }
//     return sum
//  }


//  function findPivot(arr)
//  {
//      let pivotIndex = -1, len = arr.length;
//      if(len === 1)
//      {
//         pivotIndex = 1;
//      }

//      for(let i=1;i<len;i++)
//      {
//         let leftSum = sumArr(0,i-1,arr);
//         let rightSum = sumArr(i+1,len-1,arr)
//         // console.log('ls',leftSum,'rs',rightSum)
//         if(leftSum === rightSum)
//         {
//             pivotIndex = i
//         }
//      }
//      console.log('Equilibrium point',pivotIndex)
//  }

// //  let a = [1,3,5,2,2]
//  let a = [1,1,1,4,3]

//  findPivot(a);


// const sum = (arr) => arr.reduce((a, b) => a + b);

// function findPivot(arr) {
//     let len = arr.length;
//     let pivotIndex = -1;
//     for (let i = 0;i<len-2;i++)
//     {
//         let leftTmp = sum(arr.slice(0,i+1));
//         let rightTmp = sum(arr.slice(i+2));

//         // console.log(leftTmp,'          ',rightTmp);
//         if(leftTmp === rightTmp)
//         {
//             pivotIndex = i+2;
//         }
//     }
//     console.log(pivotIndex); 


// }



/**
 *Leaders in an array

 Given an array of positive integers. Your task is to find the leaders in the array.
Note: An element of array is leader if it is greater than or equal to all the elements to its right side. Also, the rightmost element is always a leader. 

Example:
Input:
3
6
16 17 4 3 5 2
5
1 2 3 4 0
5
7 4 5 7 3
Output:
17 5 2
4 0
7 7 3

Explanation:
Testcase 3: All elements on the right of 7 (at index 0) are smaller than or equal to 7. Also, all the elements of right side of 7 (at index 3) are smaller than 7. And, the last element 3 is itself a leader since no elements are on its right.
 *
 */


// function findLeader(arr)
// {
//    let leaders = [];
//    leaders.push(arr[arr.length-1]);

//    for(let i=0;i<arr.length-1;i++)
//    {
//        let j = i+1;
//        for(j=i+1;j<arr.length;j++)
//        {
//            if(arr[i]<arr[j])
//            {
//                break;
//            }
//        }
//        if(j === arr.length)
//        {
//            leaders.push(arr[i])
//        }

//    }
//    return leaders; 


// }

// //  let a = [16, 17, 4, 3, 5, 2]
// let a = [7, 4, 5, 7, 3]

// console.log('leaders in an array',findLeader(a));




/**
 * Reverse array in groups
*
Given an array arr[] of positive integers of size N. Reverse every sub-array of K group elements.

Example:
Input
2
5 3
1 2 3 4 5
6 2
10 20 30 40 50 60

Output
3 2 1 5 4
20 10 40 30 60 50

Explanation:
Testcase 1: Reversing groups in size 3, first group consists of elements 1, 2, 3. Reversing this group, we have elements in order as 3, 2, 1.
*
*/

// function reverseArrayInGroups(arr, k) {

//     let subsetsLen = Math.ceil(arr.length / k);
//     let newArr = [], index = 0, count = k - 1;
//     while (subsetsLen > 0) {
//         console.log('count', count);
//         console.log('index', index);
//         for (let i = count; i >= index; i--) {
//             newArr.push(arr[i]);
//         }
//         index = count+1;
//         count = count + k === arr.length ? arr.length-1 : count + k ;
//         subsetsLen--;
//         console.log(arr)
//         console.log(newArr)

//     }

//     return newArr;
// }



// function reverseArrayInGroups(arr, k) {
//     let count = Math.floor(arr.length / 2);

//     let reversedArr = [], startIndex = k - 1, endIndex = 0;
//     while (count > 0) {

//         for(let i = startIndex;i>=endIndex;i--)
//         {
//             reversedArr.push(arr[i]);
//         }
//         endIndex = startIndex+1;
//         startIndex = startIndex + k > arr.length-1 ? arr.length-1 : startIndex + k;
        
//         count-=1;
//         console.log('s',startIndex)
//         console.log('e',endIndex)
        
//     }
//     console.log(reversedArr);
// }
// // let a = [1, 2, 3, 4, 5];
// // let a = [20, 10, 40, 30, 60, 50];
// let a = [10, 20, 30, 40, 50, 60];

// reverseArrayInGroups(a, 2)









/**
*Trapping Rain Water
*
Given an array arr[] of N non-negative integers representing height of blocks at index i as Ai where the width of each block is 1. Compute how much water can be trapped in between blocks after raining.

Example:
Input:
2
4
7 4 0 9
3
6 9 9

Output:
10
0

Explanation:
Testcase 1: Water trapped by block of height 4 is 3 units, block of height 0 is 7 units. So, total unit of water trapped is 10 units.
*/

// function tapRainWater(arr) {
//     let waterTapped = 0, max = 0;

//     for (let i = 0; i < arr.length; i++) {
//         max = arr[i] > max ? arr[i] : max;
//         if(i === 0)
//         {
//             continue;
//         }
//         if(max > arr[i])
//         waterTapped = waterTapped + (max - arr[i])
//     }

//     console.log('waterTapped',waterTapped);


// }

// // let a = [3, 0, 0, 2, 0, 4];
// // let a = [7,4,0,9];
// let a = [6,9,9];

// tapRainWater(a)








/**
 * Pythagorean Triplet
 * 
 * Given an array of integers, write a function that returns true if there is a triplet (a, b, c) that satisfies a2 + b2 = c2.
 * 
 * Example:
Input:
1
5
3 2 4 6 5

Output:
Yes

Explanation:
Testcase 1: a=3, b=4, and c=5 forms a pythagorean triplet, so we print "Yes"
*
*
*/

// const square = num => num*num;

// function isPythagoreanTriplet(arr)
// {
//     let squaresArray = []
//     let len = arr.length , isTriplet = false;
//     for(let i=0;i<len;i++)
//     {  
//         squaresArray.push(square(arr[i]))
//     }   
//     for(let i=1;i<len;i++)
//     {
//         let sum = squaresArray[0] + squaresArray[i];
//         if(squaresArray.includes(sum))
//         {
//             isTriplet = true;
//         }
//     }
//     return isTriplet;
// }


// // let a = [3,2,4,6,5]
// let a = [1,1,1,1,1]

// console.log('isPythagoreanTriplet',isPythagoreanTriplet(a))




/**
*
Find the element before which all the elements are smaller than it, and after which all are greater

Given an array, find an element before which all elements are smaller than it, and after which all are greater than it. Return the index of the element if there is such an element, otherwise, return -1.
*
*/


// function findElement(a) {
//     let len = a.length;

//     let leftMax = [...Array(len)];
//     let rightMin = [...Array(len - 1)];
//     leftMax[0] = -1, rightMin[len - 1] = 99999;

//     for (let i = 1; i < len; i++) {
//         leftMax[i] = Math.max(leftMax[i - 1], a[i - 1])
//     }

//     for (let i = len - 2; i >= 0; i--) {
//         rightMin[i] = Math.min(rightMin[i + 1], a[i + 1])
//     }


//     console.log(leftMax);
//     console.log(rightMin);

//     let index = -1;

//     for(let i=0;i<len;i++)
//     {
//         if(a[i] > leftMax[i] && rightMin[i]>a[i])
//         {
//             index = i;
//         }
//     }
//     return a[index-1]
// }

// // let a = [5, 1, 4, 3, 6, 8, 10, 7, 9];
// let a = [4,3,2,7,8,9];
// console.log('findElement', findElement(a))



/**
*
Find Missing And Repeating
*
Given an unsorted array of size N of positive integers. One number 'A' from set {1, 2, …N} is missing and one number 'B' occurs twice in array. Find these two numbers.
*/

const linearSum = n => {

  return n * ((n + 1) / 2);
}

function findDuplicatesInArr(arr) {

  let countObj = {};
  let duplicate = null;

  for (let i = 0; i < arr.length; i++) {
      countObj[arr[i]] = countObj[arr[i]] ? countObj[arr[i]] + 1 : 1;
      if (countObj[arr[i]] > 1) {
          duplicate = arr[i]
      }
  }

  return duplicate;

}

// console.log('duplicateInArray', findDuplicatesInArr([1, 2, 2]))

function findMissAndRepeat(a) {

  let len = a.length;
  let arithSum = linearSum(len);

  let arrSum = a.reduce((prev, curr) => prev + curr);

  let missing = arithSum > arrSum ? arithSum - arrSum : arrSum - arithSum;

  let duplicate = findDuplicatesInArr(a);


  console.log('missing number is', missing)
  console.log('duplicate number is', duplicate)

}

// let a = [2, 2]
let a = [1, 3, 3]

findMissAndRepeat(a);


/**
* currying
*


function sum(num)
{
 let total = num;
 return function add(y)
 {
     if(arguments.length)
     {
         total+=y;
         return add;
     }
     return total;
 }
}


console.log(sum(1)(2)(8)(13)())
*/



/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/
/**
 *
 */





/************************************************************************/

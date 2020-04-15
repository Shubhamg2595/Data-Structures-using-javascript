
/**
 * ! Searching and Sorting
 *
 */
/************************************************************************/
/**
 * ! Searching
* ? Searching is the task of looking for a specific element inside a data structure. When searching in an array, there are two main techniques depending on whether the array is sorted.

* ? Linear searches are especially flexible because they can be used with both sorted and unsorted data. Binary searches are specifically used with sorted data.
* * However, a linear search has a higher time complexity than a binary search.
 *
 */

//  ? Linear Search
// A linear search works by going through each element of the array one index after another sequentially

/*
function linearSearch(array, target) {
    let len = array.length;

    for (let i = 0; i < len; i++) {
        if(array[i] === target)
        {
            return true;
        }
    }
    return false;
}

console.log(linearSearch([132,342,654,756,23,1],23))
*/
// Time Complexity: O(n)

// a linear search algorithm like this is great because it works whether or not the array is sorted. In a linear search algorithm, every element of the array is checked. So, you should use a linear search when the array is not sorted. If the array is sorted, you can do the search faster via a binary search.


// ? Binary Search

// Binary search is a searching algorithm that works on sorted data. Unlike the linear search algorithm, in which every element of the array is checked, binary searches can check the middle value to see whether the desired value is greater or smaller than it. If the desired value is smaller, this algorithm can search through the smaller parts, or it can search through the bigger parts if the desired value is bigger

// function binarySearch(array, target) {

//     let start = 0, end = array.length - 1;
//     let mid = 0;

//     while (start <= end) {
//         mid = parseInt((start + end) / 2);
//         if (array[mid] === target) {
//             return true;
//         }
//         if (array[mid] > target) {
//             end = mid - 1
//         }
//         else {
//             start = mid + 1;
//         }
//     }

//     return false;


// }

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 7));
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 78));

/************************************************************************/
/**
 * ! SORTING
 * It is faster and easier to locate items in a sorted array than in an     unsorted sorted array. You can use sorting
algorithms to sort an array in memory for searching later in the program or to write to a file for later retrieval.
 *
 *
 */



function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;

}







/************************************************************************/
/**
 *
 */
// ? Bubble Sort :  It simply iterates over the entire array and swaps elements if one is bigger than the other.

// function BubbleSort(array) {
//     let len = array.length;

//     for (let i = 0; i < len; i++) {
//         for (let j = i + 1; j < len; j++) {
//             if (array[i] > array[j]) {
//                 swap(array, i, j)
//             }
//         }
//     }
//     return array;
// }

// console.log('BubbleSort', BubbleSort([9, 8, 7, 3, 2, 1]));

// Time Complexity: O(n^2)
// Space Complexity: O(1)
// Bubble sort is the worst type of sort because it compares every pair possible,




/************************************************************************/
/**
 * ? Selection Sort
 *  * Selection sort is conceptually the most simplest sorting algorithm. This algorithm will first find the smallest element in the array and swap it with the element in the first position, then it will find the second smallest element and swap it with the element in the second position, and it will keep on doing this until the entire array is sorted.
 * It is called selection sort because it repeatedly selects the next-smallest element and swaps it into the right place.
 * ! How Selection Sort Works?
 *
 *
 1. Starting from the first element, we search the smallest element in the array, and replace it with the element in the first position.

 2. We then move on to the second position, and look for smallest element present in the subarray, starting from index 1, till the last index.

 3. We replace the element at the second position in the original array, or we can say at the first position in the subarray, with the second smallest element.
 4. This is repeated, until the array is completely sorted.
 */


// function selectionSort(array) {
//     let len = array.length;
//     let minIndex = null;

//     for (let i = 0; i < len; i++) {
//         let min = array[i];
//         for (let j = i + 1; j < len; j++) {
//             if (array[j] < min) {
//                 minIndex = j;
//                 min = array[j];
//             }
//         }
//         if (array[i] > min) {
//             swap(array, i, minIndex);
//         }
//     }
//     return array;
// }

// console.log(selectionSort([3, 6, 1, 8, 4, 5]))


// Time Complexity: O(n ^ 2)
// Space Complexity: O(1)
// The time complexity for selection sort is still O(n ^ 2) because of the ested for loop

// Worst Case Time Complexity [ Big-O ]: O(n2)

// Best Case Time Complexity [Big-omega]: O(n2)

// Average Time Complexity [Big-theta]: O(n2)

// Space Complexity: O(1)

/************************************************************************/
/**
 * !    Insertion Sort
 *
 * * Consider you have 10 cards out of a deck of cards in your hand. And they are sorted, or arranged in the ascending order of their numbers.
If I give you another card, and ask you to insert the card in just the right position, so that the cards in your hand are still sorted. What will you do?
Well, you will have to go through each card from the starting or the back and find the right position for the new card, comparing it's value with each card. Once you find the right position, you will insert the card there.
Similarly, if more new cards are provided to you, you can easily repeat the same process and insert the new cards and keep the cards sorted too.
This is exactly how insertion sort works. It starts from the index 1(not 0), and each index starting from index 1 is like a new card, that you have to place at the right position in the sorted subarray on the left.
 *

// ? How Insertion Sort Works?

Following are the steps involved in insertion sort:

1. We start by making the second element of the given array, i.e. element at index 1, the key. The key element here is the new card that we need to add to our existing sorted set of cards(remember the example with cards above).
2. We compare the key element with the element(s) before it, in this case, element at index 0:
3. If the key element is less than the first element, we insert the key element before the first element.
4. If the key element is greater than the first element, then we insert it after the first element.
5. Then, we make the third element of the array as key and will compare it with elements to it's left and insert it at the right position.
And we go on repeating this, until the array is sorted.

*/

// function insertionSort(array) {
//     let len = array.length;
//     let value = null, i, j;

//     for (i = 1; i < len; i++) {
//         value = array[i];
//         for (j = i - 1; j > -1 && array[j] > value; j--) {
//                 array[j + 1] = array[j];
//         }
//         array[j + 1] = value;

//     }
//     return array;
// }
// console.log('insertIOn sort', insertionSort([5, 1, 6, 2, 4, 3]));


//* Complexity Analysis of Insertion Sort
// As we mentioned above that insertion sort is an efficient sorting algorithm, as it does not run on preset conditions using for loops, but instead it uses one while loop, which avoids extra steps once the array gets sorted.

// Even though insertion sort is efficient, still, if we provide an already sorted array to the insertion sort algorithm, it will still execute the outer for loop, thereby requiring n steps to sort an already sorted array of n elements, which makes its best case time complexity a linear function of n.

// Worst Case Time Complexity [ Big-O ]: O(n2)

// Best Case Time Complexity [Big-omega]: O(n)

// Average Time Complexity [Big-theta]: O(n2)

// Space Complexity: O(1)



/************************************************************************/
/**
 * ! QuickSort
 * *How Quick Sorting Works?
Following are the steps involved in quick sort algorithm:

1. After selecting an element as pivot, which is the last index of the array in our case, we divide the array for the first time.

2. In quick sort, we call this partitioning. It is not simple breaking down of array into 2 subarrays, but in case of partitioning, the array elements are so positioned that all the elements smaller than the pivot will be on the left side of the pivot and all the elements greater than the pivot will be on the right side of it.

3.And the pivot element will be at its final sorted position.

4. The elements to the left and right, may not be sorted.

5. Then we pick subarrays, elements on the left of pivot and elements on the right of pivot, and we perform partitioning on them by choosing a pivot in the subarrays
 *
 */



// function partition(array, low, high) {
//     let pivot = array[high];
//     let i = low - 1;


//     for (j = low; j < high; j++) {
//         if (array[j] < pivot) {
//             i++;
//             swap(array, i, j);
//         }
//     }
//     swap(array, i + 1, high);
//     return i + 1;

// }

// function quickSort(arr, low, high) {
//     if (low < high) {
//         part = partition(arr, low, high);

//         quickSort(arr, low, part - 1);
//         quickSort(arr, part + 1, high);
//     }
//     return arr;
// }

// let a = [10, 80, 30, 90, 40, 50, 70];
// console.log(quickSort(a, 0, a.length - 1))



// Complexity Analysis of Quick Sort
// For an array, in which partitioning leads to unbalanced subarrays, to an extent where on the left side there are no elements, with all the elements greater than the pivot, hence on the right side.

// And if keep on getting unbalanced subarrays, then the running time is the worst case, which is O(n2)

// Where as if partitioning leads to almost equal subarrays, then the running time is the best, with time complexity as O(n*log n).

// Worst Case Time Complexity [ Big-O ]: O(n2)

// Best Case Time Complexity [Big-omega]: O(n*log n)

// Average Time Complexity [Big-theta]: O(n*log n)

// Space Complexity: O(n*log n)

/************************************************************************/
/**
 *
 *

function merge(leftA, rightA) {
    var results = [], leftIndex = 0, rightIndex = 0;

    while (leftIndex < leftA.length && rightIndex < rightA.length) {
        if (leftA[leftIndex] < rightA[rightIndex]) {
            results.push(leftA[leftIndex++]);
        } else {
            results.push(rightA[rightIndex++]);
        }
    }
    var leftRemains = leftA.slice(leftIndex),
        rightRemains = rightA.slice(rightIndex);

    // add remaining to resultant array
    return results.concat(leftRemains).concat(rightRemains);
}

// The merging function works by taking the two arrays (left and right) and merging
// them into one resultant array. The elements need to be compared as they get merged to
// preserve order.
// Now, the mergeSort function has to partition the bigger array into two separate
// arrays and recursively call merge.

function mergeSort(array) {

    if (array.length < 2) {
        return array; // Base case: array is now sorted since it's
    }

    var midpoint = Math.floor((array.length) / 2),
        leftArray = array.slice(0, midpoint),
        rightArray = array.slice(midpoint);

    return merge(mergeSort(leftArray), mergeSort(rightArray));
}
mergeSort([6, 1, 23, 4, 2, 3]); // [1, 2, 3, 4, 6, 23]

Time Complexity: O(nlog2(n))
Space Complexity: O(n)
*/




/************************************************************************/
/**
 *! JavaScript’s Built-in Sort
JavaScript has a built-in sort() method for an array object, which sorts elements by ascending order. To use it, there is an optional parameter that you can pass in a comparator function.

However, the default comparator function sorts alphabetically, so it will not work for numbers.
*

var array1 = [12, 3, 4, 2, 1, 34, 23];
array1.sort(); // array1: [1, 12, 2, 23, 3, 34, 4]

// In the previous example, notice that numbers starting with 1 came first(1, 12), then numbers starting with 2, and so forth.This is because no comparator fn() was passed and JavaScript converted the elements into a string and sorted it according to the alphabet.

// To sort numbers correctly, use this:

var array1 = [12, 3, 4, 2, 1, 34, 23];

function comparatorNumber(a, b) {
    return a - b;
}

array1.sort(comparatorNumber);
// array1: [1, 2, 3, 4, 12, 23, 34]
a - b indicates that it should be from smallest to biggest(ascending).Descending
order can be done as follows:
var array1 = [12, 3, 4, 2, 1, 34, 23];

function comparatorNumber(a, b) {
    return b - a;
}

array1.sort(comparatorNumber); // array1: [34, 23, 12, 4, 3, 2, 1]
The sort() function can be useful when you need a quick way to sort something without implementing it yourself
    
 */





/************************************************************************/
/**
 * ? CREATE A JAVASCRIPT SORT COMPARATOR FUNCTION THAT WOULD SORT STRING BY LENGTH
 
 This is fairly simple. If it is an array of strings, strings all have a property of length, which can
be used to sort the array
*
 */

var mythical = ['dragon', 'slayer', 'magic', 'wizard of oz', 'ned stark'];

function sortComparator(a, b) {
    return a.length - b.length;
}
mythical.sort(sortComparator);
7 // ["magic", "dragon", "slayer", "ned stark", "wizard of of"]



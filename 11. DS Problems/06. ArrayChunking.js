// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// arrayChunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// arrayChunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// arrayChunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// arrayChunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// arrayChunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]



// ? way1

// function sliceArray(arr, begin, end) {
//     let slicedArr = [];


//     for (let i = begin; i < end; i++) {
//         slicedArr.push(arr[i])
//     }
//     return slicedArr;

// }

// function arrayChunk(arr, k) {
//     let len = arr.length < k ? 1 : Math.ceil(arr.length / k);
//     let newArr = [];
//     let start = 0;
//     let end = arr.length < k ? arr.length : k;

//     for (let i = 0; i < len; i++) {
//         newArr.push(sliceArray(arr, start, end));
//         start = end;
//         end = end + k > arr.length ? arr.length : end + k
//     }

//     return newArr

// }




// ? way2 : using array util Function : slice()

// function arrayChunk(arr, k) {
//     let len = arr.length < k ? 1 : Math.ceil(arr.length / k);
//     let newArr = [];
//     let start = 0;
//     let end = arr.length < k ? arr.length : k;

//     for (let i = 0; i < len; i++) {
//         newArr.push(arr.slice(start, end));
//         start = end;
//         end = end + k > arr.length ? arr.length : end + k
//     }

//     return newArr
// }

// spaceComplexity reduce as only one new array is created



// ? optimizing way3


function arrayChunk(arr, k) {
    let chunkedArr = [];
    let index = 0;

    while (index < arr.length) {
        chunkedArr.push(arr.slice(index, index + k));
        index += k
    }
    return chunkedArr


}

console.log('chunking', arrayChunk([1, 2, 3, 4], 2))
console.log('chunking', arrayChunk([1, 2, 3, 4, 5], 2))
console.log('chunking', arrayChunk([1, 2, 3, 4, 5, 6, 7, 8], 3))
console.log('chunking', arrayChunk([1, 2, 3, 4, 5], 10))
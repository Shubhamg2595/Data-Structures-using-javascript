// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// created 3D arr

// function ThreeDArr(n) {
//     let spiral = [];
//     let value = 1;

//     for (let i = 0; i < n; i++) {
//         let tempArr = [];

//         for (let j = 0; j < n; j++) {
//             tempArr.push(value);
//             value++;
//         }
//         spiral.push(tempArr)
//     }
//     console.log(spiral)
// }



// function matrix(n) {
//     let spiral = [];
//     let value = 1;

//     for (let i = 0; i < n; i++) {
//         let tempArr = [];

//         for (let j = 0; j < n; j++) {
//             if (i % 2 === 0) {
//                 tempArr.push(value);
//             }
//             else {
//                 tempArr.unshift(value)
//             }
//             value++;
//         }
//         spiral.push(tempArr)
//     } 
//     console.log(spiral)
// }

function matrix(n) {
    const results = [];


    for (let i = 0; i < n; i++) {
        results.push([]);
    }

    let counter = 1;

    let startRow = 0;
    let endRow = n - 1;
    let startCol = 0;
    let endCol = n - 1;

    while (startCol <= endCol && startRow <= endRow) {
        // topRow
        for (let i = startCol; i <=endCol; i++) {
            results[startRow][i] = counter;
            counter++;
        }
        startRow++;

        // end col
        for (let i = startRow; i <= endRow; i++) {
            results[i][endCol] = counter;
            counter++;
        }
        endCol--;

        // end row
        for (let i = endCol; i >= startCol; i--) {
            results[endRow][i] = counter;
            counter++;
        }
        endRow--;

        // midleft
        for (let i = endRow; i >= startRow; i--) {
            results[i][startCol] = counter;
            counter++;
        }
        startCol++;


    }
    return results


}

console.log(matrix(2))
console.log(matrix(4))

matrix(2)
matrix(4)
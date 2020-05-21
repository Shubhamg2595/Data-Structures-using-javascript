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
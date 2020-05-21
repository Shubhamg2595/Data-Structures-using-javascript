// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {

    let colLen = (n * 2) - 1;
    let midPoint = parseInt(n / 2); 1

    for (let i = 0; i < n; i++) {
        let str = '';
        for (let j = 0; j < colLen; j++) {
            // console.log('mid',midPoint)
            // console.log('midPoint - i',midPoint - i)
            // console.log('midPoint + i',midPoint + i)
            // console.log(midPoint - i <= j && midPoint + i >= j)

            if (midPoint - i <= j && midPoint + i >= j) {
                str += "#";
            }
            else {
                str += " ";
            }
        }
        console.log(str);

    }

}


pyramid(3)
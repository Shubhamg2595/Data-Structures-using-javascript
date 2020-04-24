/**********************************************
 *
 *! DESIGN A PARENTHESIS VALIDATION CHECKER USING A STACK
 *
((())) is a valid parentheses set, while ((() and ))) are not. A stack can be used to check the validity of parentheses by storing the left parenthesis and using push and triggering pop when the right parenthesis is seen.

If there is anything left in the stack afterward, it is not a valid parentheses set. Also, it is not a
valid parentheses set if more right parentheses are seen than left ones. Using these rules, use
a stack to store the most recent parenthesis

*/

class Stack {
    constructor(buffer) {
        this.array = [];
        if (buffer) {
            this.array = buffer;
        }
    }

    push(element) {
        this.array.push(element);
    }

    pop() {
        if (this.array.length === 0) {
            return "underflow";
        }
        return this.array.pop();
    }

    peek() {
        return this.array[this.array.length - 1]
    }

    isEmpty() {
        return this.array.length === 0;
    }

    getBuffer() {
        return this.array.slice();
    }


}

/*

function isParenthesisValid(string) {
    let openingBrace = '(';
    let closingBrace = ')';
    let openingBracesStack = new Stack();

    for (let i = 0; i < string.length; i++) {
        if (string[i] === openingBrace) {
            openingBracesStack.push(string[i])
        }
        if (string[i] === closingBrace) {
            if (!openingBracesStack.isEmpty()) {
                openingBracesStack.pop();
                continue;
            }
        }
    }
    if (openingBracesStack.isEmpty()) {
        return true;
    }
    return false;
}


console.log(isParenthesisValid("((()")); // false;
console.log(isParenthesisValid("((((")); // false;
console.log(isParenthesisValid("()()")); // true;

*/

// Time Complexity: O(n)
// This algorithm processes a string character by character. Hence, its time complexity is O(n),
// where n is the length of the string.
// /--------------------------------------------------------/
/**********************************************
 *
 *
 *!geeks Parenthesis Checker
 Given an expression string exp. Examine whether the pairs and the orders of “{“,”}”,”(“,”)”,”[“,”]” are correct in exp.
For example, the program should print 'balanced' for exp = “[()]{}{[()()]()}” and 'not balanced' for exp = “[(])”
 *

 Input:
3
{([])}
()
([]

Output:
balanced
balanced
not balanced
 *
*


function isParenthesisValid(string) {
    let openingBrace = ['(', '{', '['];
    let closingBrace = [')', '}', ']'];
    let openingBracesStack = new Stack();

    for (let i = 0; i < string.length; i++) {
        if (openingBrace.includes(string[i])) {
            openingBracesStack.push(string[i])
        }
        if (closingBrace.includes(string[i])) {
            if (!openingBracesStack.isEmpty()) {
                openingBracesStack.pop();
                continue;
            }
        }
    }
    if (openingBracesStack.isEmpty()) {
        return true;
    }
    return false;
}

console.log(isParenthesisValid("{([])}")); // false;
console.log(isParenthesisValid("()")); // false;
console.log(isParenthesisValid("([]")); // true;

*/

// /--------------------------------------------------------/
/**********************************************
 *
 * !Next larger element
 *
 * Given an array A of size N having distinct elements, the task is to find the next greater element for each element of the array in order of their appearance in the array. If no such element exists, output -1
Examples:

For any array, rightmost element always has next greater element as -1.
For an array which is sorted in decreasing order, all elements have next greater element as -1.
For the input array [4, 5, 2, 25}, the next greater elements for each element are as follows.
Element       NGE
   4      -->   5
   5      -->   25
   2      -->   25
   25     -->   -1
 *
 *
 *
*/

// [4, 5, 2, 25]

/*
function printNGE(array) {
    let stack1 = new Stack();
    let next = 0;

    stack1.push(array[0]);

    for (let i = 1; i < array.length; i++) {
        next = array[i];

        if (!stack1.isEmpty()) {
            let element = stack1.pop();
            if (element > next) {
                stack1.push(element)
            }
            while (element < next) {
                console.log(`${element} => ${next}`)
                if (stack1.isEmpty()) {
                    break;
                }
                element = stack1.pop();
            }


        }
        stack1.push(next)

    }

    return stack1;

}

console.log(printNGE([11, 13, 21, 3]))
console.log(printNGE([4, 5, 2, 25]))

*/
// /--------------------------------------------------------/
/**********************************************
 *
*!      Access Search Peek Insertion Deletion


*?Stack O(n)    O(n)    O(1)    O(1)    O(1)
 *
 *
 *
 *
*/


// /--------------------------------------------------------/
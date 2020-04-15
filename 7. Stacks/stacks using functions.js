/**
 * ! Stacks
 * A stack is a data structure in which only the last inserted element can be removed and accessed . Think about stacking plates on a table. To get to the bottom one, you must remove all the other ones on the top. This is a principle known as last in, first out (LIFO). A stack is great because it is fast. Since it is known that the last element is to be removed, the lookup and insertion happen in a constant time of O(1).
 *
 *Stacks should be used over arrays when you need to work with data in the LIFO form where the algorithm needs to access only the last-added element. The limitation of stacks is that they cannot access the non-last-added element directly like arrays can; in addition, accessing deeper elements requires you to remove the elements from the data structure
 *
 */

/************************************************************************/
/**
// ? Implementation Using Functions
 * 
 *
 */

function Stack(array) {
    this.array = [];
    if (array) {
        this.array = array;
    }
}

Stack.prototype.getBuffer = function () {
    return this.array.slice();
}
Stack.prototype.isEmpty = function () {
    return this.array.length === 0;
}


// * creating a instance of a class Stack

let stack1 = new Stack();
console.log('your new Stack', stack1);

// * Insertion : Inserting into a stack can be done via the push function natively supported with JavaScript arrays.


Stack.prototype.push = function (value) {
    return this.array.push(value);
}

stack1.push(10)
stack1.push(100)

console.log('Your updated stack after push operation is', stack1)



//* Deletion - Deletion can also be implemented using a native JavaScript array method, called pop


Stack.prototype.pop = function () {
    return this.array.pop();
}

stack1.push(123123);
// console.log('Your updated stack after push operation is', stack1)
stack1.pop();
console.log('Your updated stack after pop operation is', stack1)


//* Peek - Peeking at the last added element of the stack means returning the last-added element without removing it from the data structure. Peeking is often used to compare the lastadded element to some other variable and to evaluate whether the last-added element should be removed from the data structure


Stack.prototype.peek = function () {
    return this.array[this.array.length - 1];
}

console.log('peeking your Stack', stack1.peek())


// * Access Accessing specific elements in a data structure is important. To access the nth node from the top, you need to call pop n number of times

function stackAccessNthTopNode(stack, n) {
    let bufferArray = stack.getBuffer();

    let bufferStack = new Stack(bufferArray);
    while (--n !== 0) {
        bufferStack.pop();
    }
    return bufferStack.pop();
}

stack1.push(3)
// console.log('Accessing 2nd element in stack', stackAccessNthTopNode(stack1, 2))




// * Search - Searching the stack data structure for a specific element is a critical operation. To do this, you must first create a buffer stack so that pop can be called on that buffer stack. This way, the original stack is not mutated, and nothing is removed from it.


function stackSearch(stack,element)
{
    let bufferArray = stack.getBuffer();
    let bufferStack = new Stack(bufferArray);

    while(!bufferStack.isEmpty())
    {
        if(bufferStack.pop() === element)
        {
        return true;
        }
    }
    return false;

}


console.log('searching the stack',stackSearch(stack1,1))
console.log('searching the stack',stackSearch(stack1,10))
/**********************************************
 * Stack Implementation using ES6 classes.
 * 
 * 
 * 
 * 
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

function stackSearch(stack, element) {
    let bufferArray = stack.getBuffer();
    let bufferStack = new Stack(bufferArray);

    while (!bufferStack.isEmpty()) {
        if (bufferStack.pop() === element) {
            return true;
        }
    }
    return false;

}

let stack1 = new Stack();

stack1.push(1)
stack1.push(2)
stack1.push(3)

console.log('Stack after insertion', stack1)

stack1.pop();
console.log('Stack after pop', stack1)


console.log('Stack after peek', stack1.peek())

console.log('is stack empty', stack1.isEmpty())

console.log('searching our stack', stackSearch(stack1, 3))
console.log('searching our stack', stackSearch(stack1, 1))

// /--------------------------------------------------------/

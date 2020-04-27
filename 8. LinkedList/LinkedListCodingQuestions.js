/**********************************************
 * !LinkedList 
 *
 *
*/


class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    //? inserting element in LinkedList at the beginning or the End.

    add(element) {

        let newNode = new Node(element);
        let current;

        if (this.head === null) {
            // this means linkedlist is empty,so head points to newNode
            this.head = newNode;
        }
        else {

            // this means linkedlist is not empty,so We traverse to the last node in linkedList, add lastnode[next] = newNode,

            current = this.head;

            while (current.next) {
                current = current.next;
            }
            current.next = newNode;

        }
        this.size++;
    }

    // ? insert element at given index of the linkedList
    // *In order to add an element at the end of the list we consider three conditions as follows:

    // *if the index is zero we add an element at the front of the list and make it head
    // *If the index is the last position of the list we append the element at the end of the list
    // *if the index is inbetween 0 or size – 1 we iterate over to the index and add an element at that index

    insertAtIndex(element, index) {

        let newNode = new Node(element);

        console.log(`size ${this.size}`)

        if (index > 0 && index > this.size) {
            return false;
        }
        let current = this.head;
        let prev;

        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        }
        else {
            let iterationIndex = 0;

            while (iterationIndex < index) {
                iterationIndex++;
                prev = current;
                current = current.next;
            }

            console.log(`curr ${current} prev ${prev}`)

            newNode.next = current;
            prev.next = newNode

        }


        this.size++;

    }

    // ? removeFrom(index) – It removes and returns an element from the list from the specified index

    // In order to remove an element from the list we consider three condition:

    //* If the index is 0 then we remove head and make next node head of the list
    //* if the index is size – 1 then we remove the last element form the list and make prev the last element
    //* if its in between 0 to size – 1 we remove the element by using prev and current node

    removeFrom(index) {
        if (index > 0 && index > this.size) {
            return false;
        }
        let current = this.head;
        let prev = null;
        if (index === 0) {
            this.head = current.next;
        }
        else {
            let iterationIndex = 0;
            while (iterationIndex < index) {
                iterationIndex++;
                prev = current;
                current = current.next;
            }

            prev.next = current.next;
        }

        this.size--;
        return current.element;
    }

    //? removeElement(element) – This method removes element from the list. It returns the removed element, or if its not found it returns -1.
    //* The above method is just a modification of removeFrom(index), as it searches for an element and removes it, rather than removing from a specified location

    removeElement(element) {
        let current = this.head;
        let prev = null;
        while (current !== null) {
            if (current.element === element) {
                if (prev === null) {
                    this.head = current.next;
                }
                else {
                    prev.next = current.next

                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return false;
    }


    // ? it returns the index of a given element, if the element is in the list.

    indexOf(element) {
        let current = this.head;
        let iterationIndex = 0;

        while (current !== null) {
            if (current.element === element) {
                return iterationIndex;
            }
            iterationIndex++;
            current = current.next;
        }
        return false;
    }

    // ?  it returns true if the list is empty
    isEmpty() {
        return this.size === 0
    }

    // ?  It returns the size of list
    getSize() {
        return this.size;
    }




    //  ? this util method will traverse the entire linked list and print the elements
    printLinkedList() {

        let current = this.head;
        let str = '';
        while (current) {
            str += `${current.element} `
            current = current.next;
        }
        console.log(str);
    }

    // ? adding selfLoop method to create circular network in a linkedList : from endNode to given Node
    // only for detectLoop problem

    addSelfLoop(nodeElement) {
        let nodeIndex = this.indexOf(nodeElement);
        let iterationIndex = 0;
        let loopNode = null;
        let current = this.head;
        while (current.next !== null) {
            if (iterationIndex === nodeIndex) {
                loopNode = current;
            }
            current = current.next;
            iterationIndex++;
        }

        current.next = loopNode;

        // console.log(`currentNode ${current.element} loopNode ${loopNode.element}`)
    }


}

let linkedListInstance = new LinkedList();

linkedListInstance.add(1);
linkedListInstance.add(2);
linkedListInstance.add(3);
linkedListInstance.add(4);
linkedListInstance.add(5);
linkedListInstance.add(6);

linkedListInstance.addSelfLoop(2)



// ? --------------------------------------------------------------

// !Finding middle element in a linked list

// ? --------------------------------------------------------------

// The task is to find middle of the linked list. For example, if given linked list is 1->2->3->4->5 then output should be 3.
// If there are even nodes, then there would be two middle nodes, we need to print second middle element. For example, if given linked list is 1->2->3->4->5->6 then output should be 4.

// function getMiddle(linklist) {

//     let size = linklist.getSize();
//     let midIndex;
//     console.log('linklist', linklist.head)
//     if (size / 2 !== 0) {
//         midIndex = Math.floor(size / 2);
//     }
//     else {
//         midIndex = size / 2;
//     }
//     let iterationIndex = 0;
//     let current = linklist.head;

//     while (iterationIndex !== midIndex) {
//         iterationIndex++;
//         current = current.next;
//     }

//     return current.element;

// }


// console.log('middle element in a linked list', getMiddle(linkedListInstance));


// ? --------------------------------------------------------------

// ! Reverse a linked list

// ? --------------------------------------------------------------

// Input: Head of following linked list
// 1 -> 2 -> 3 -> 4 -> NULL
// Output: Linked list should be changed to,
//     4 -> 3 -> 2 -> 1 -> NULL

// Input: Head of following linked list
// 1 -> 2 -> 3 -> 4 -> 5 -> NULL
// Output: Linked list should be changed to,
//     5 -> 4 -> 3 -> 2 -> 1 -> NULL


// for dry run
// 1,a[2] -> 2,a[3] -> 3,a[4] -> 4,null -> NULL

// function reverseLinkedList(linkList) {
//     let prev = null
//     let current = linkList.head;  // 1,a[2]
//     let next;

//     while (current !== null) {
//         next = current.next; //[2, a[3]] | [3, a[4]] | [4, null] | null
//         current.next = prev; //null | 1 | 2 | 3
//         prev = current; //[1, null] | [2, a[1]] | [3, a[2]] | [4,a[3]]
//         current = next; //[2, a[3]] | [3, a[4]] | [4, null] | null
//     }

//     linkedListInstance.head = prev;


//     linkList.printLinkedList();
// }


// reverseLinkedList(linkedListInstance)




// ? --------------------------------------------------------------

// ! Rotate a linked list

// Given a singly linked list of size N. The task is to rotate the linked list counter-clockwise by k nodes, where k is a given positive integer smaller than or equal to length of the linked list.


// Input:
// 1 2 3 4 5 6 7 8
// 2 4 7 8 9
// Output:
// 5 6 7 8 1 2 3 4
// 8 9 2 4 7
// ? --------------------------------------------------------------

// 1 => 2 => 3 => 4 => 5 => 6

// function rotateLinkList(linkedlist, k) {

//     let current = linkedlist.head;
//     let iterationIndex = 0;
//     let kthNode = null;
//     let lastNode = null;
//     let newHead = null;
//     while (current !== null) {
//         if (iterationIndex === k - 1) {
//             kthNode = current;
//         }
//         if (current.next === null) {
//             lastNode = current;
//         }
//         current = current.next;
//         iterationIndex++
//     }
//     console.log(`kthNode ${kthNode.next} lastNode ${lastNode.element}`)

//     // storing newHead  
//     newHead = kthNode.next;
//     // changing next of kthNode to NULL
//     kthNode.next = null;
//     // changing next of lastNode to head
//     lastNode.next = linkedlist.head;
//     // updateding head
//     linkedlist.head = newHead;

//     console.log(`our linkedList after rotating from ${k}th node`)
//     linkedlist.printLinkedList();

// }

// // rotateLinkList(linkedListInstance, 4)
// rotateLinkList(linkedListInstance, 2)



// ? --------------------------------------------------------------

// ! Detection of Loop in a Linked List

// Given a linked list of N nodes. The task is to check if the the linked list has a loop. Linked list can contain self loop.


// to solve this problem, ihad to improve my LinkedList class method by adding a method to create a self loop.
// ? --------------------------------------------------------------

// Solution we are using is the most optimal one to solve this problem ie floyd's cycle-finding algo.
// As time complexity will be O(n) and space complexity will be none.


// function detectLoop(linkedList) {
//     let slow = linkedList.head;
//     let fast = linkedList.head;

//     while (slow && fast && fast.next !== null) {
//         slow = slow.next;
//         fast = fast.next.next;

//         if (slow === fast) {
//             return true;
//         }
//     }
//     return false;
// }

// console.log('Detecting loop in the linkedListInstance', detectLoop(linkedListInstance))

// console.log(linkedListInstance)


// Another solution would have been to update linkedlist class to add a MarkedNde feature, so if we ever visit a node which is already marked, we will know, it is a loop;

// ? --------------------------------------------------------------

// ! Detect and Remove Loop in a Linked List

// Given a linked list of N nodes. The task is to check if the the linked list has a loop and then removeIt. Linked list can contain self loop.


// to solve this problem, ihad to improve my LinkedList class method by adding a method to create a self loop.
// ? --------------------------------------------------------------

// ! way1
// using geeksMethod i,e once loop is detected (most optimized way)
// 1. move slow pointer to beginning of list
// 2. move both slow and fast pointers at equal speed until their next nodes are same
// 3. remove the loop be disconnecting the last node.
// function detectAndRemoveLoop(linkedList) {
//     let slow = linkedList.head;
//     let fast = linkedList.head;

//     while (slow && fast && fast.next !== null) {
//         slow = slow.next;
//         fast = fast.next.next;

//         if (slow === fast) {
//             break;
//         }
//     }
//     if(slow!== fast)
//     {
//         return 'No Loop Detected.'
//     }

//     if (slow === fast) {
//         console.log('LOOP DETECTED')
//         slow = linkedList.head;
//         while (slow.next !== fast.next) {
//             slow = slow.next;
//             fast = fast.next;
//         }
//     }
   

//     fast.next = null;
//     return linkedList;

// }



// console.log('Detecting loop in the linkedListInstance')
// console.log(detectAndRemoveLoop(linkedListInstance))
// console.log('After Detecting and Removing loop in the linkedListInstance')
// console.log(detectAndRemoveLoop(linkedListInstance))

//! way 2
//  power os JS objects i.e stored by refrence
// function detectAndRemoveLoop(linkedList) {
//     let slow = linkedList.head;
//     let fast = linkedList.head;
//     let loopNode = null;

//     while (slow && fast && fast.next !== null) {
//         slow = slow.next;
//         fast = fast.next.next;

//         if (slow === fast) {
//             loopNode = slow;
//             break;
//         }
//     }


//     if (loopNode) {
//         console.log(`loopNode.element ${loopNode.element} loopNode.next 
//         ${loopNode.next.element}`)
//         console.log('Loop Detected.')
//         console.log('Removing Looop............')
//         loopNode.next = null;
//     }

//     if(!loopNode)
//     {
//         console.log('No Loop Detected')
//     }

// }


// console.log(linkedListInstance)

// console.log('Detecting loop in the linkedListInstance')
// detectAndRemoveLoop(linkedListInstance)
// console.log('After Detecting and Removing loop in the linkedListInstance')
// detectAndRemoveLoop(linkedListInstance)
// Another solution would have been to update linkedlist class to add a MarkedNde feature, so if we ever visit a node which is already marked, we will know, it is a loop;
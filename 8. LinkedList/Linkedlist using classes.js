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


}



let linkListInstace = new LinkedList();

linkListInstace.add(1)
linkListInstace.add(2)
linkListInstace.add(3)
linkListInstace.add(5)
linkListInstace.add(6)


linkListInstace.printLinkedList()



linkListInstace.insertAtIndex(1232, 0)

console.log('inserting in linked list at index 1')
linkListInstace.printLinkedList()

linkListInstace.insertAtIndex(3333, 2)

console.log('inserting in linked list at index 2')
linkListInstace.printLinkedList()


console.log('removing from linked list at index 2')
linkListInstace.removeFrom(2);
linkListInstace.printLinkedList()

console.log('removing specified element from linked list ')
linkListInstace.removeElement(3);
linkListInstace.printLinkedList()
console.log('size of linked list ',linkListInstace.getSize())




// /--------------------------------------------------------/
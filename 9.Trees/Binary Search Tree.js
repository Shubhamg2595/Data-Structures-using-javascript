//  A Binary Search Tree

// A tree is a a collection of node connected by some edges.A tree is a non linear data structure.

// A Binary Search tree is a binary tree in which nodes which have lesser value are stored on the left while the nodes with higher value are stored at the right.

// BSTs have this structure because this property enables for searching, inserting, and removing specific values with O(log2(n)) time complexity

// Binary Tree: Common Terminologies
// Root: Topmost node in a tree.
// Parent: Every node (excluding a root) in a tree is connected by a directed edge from exactly one other node. This node is called a parent.
// Child: A node directly connected to another node when moving away from the root.
// Leaf/External node: Node with no children.
// Internal node: Node with atleast one children.
// Depth of a node: Number of edges from root to the node.
// Height of a node: Number of edges from the node to the deepest leaf. Height of the tree is the height of the root.


//! Implementing Binary Search Tree

// ? Node Class

//* we define a node class having three property data, left and right, Left and right are pointers to the left and right node in a Binary Search Tree. Data is initialized with data which is passed when object for this node is created and left and right is set to null.
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    //? insert(data) – It inserts a new node in a tree with a value data

    insert(data) {
        const newNode = new Node(data);

        if (this.root === null) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode)
        }
    }

    //  ? insertNode(node, newNode) -  Method to insert a node in a tree, it moves over the tree to find the location to insert a node with a given data  

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode
            }
            else {
                this.insertNode(node.left, newNode)
            }
        }
        else {
            if (node.right === null) {
                node.right = newNode
            }
            else {
                this.insertNode(node.right, newNode)
            }
        }
    }

    // Time Complexity(for balanced trees): O(log2(n))
    // Time Complexity(for unbalanced trees): O(n) 


    // ? remove(data) – This function removes a node with a given data.
    remove(data) {
        this.root = this.removeNode(this.root, data);
    }

    // ? removeNode(node,key) -  Method to remove node with a given data it recurrs over the tree to find the data and removes it
    removeNode(node, key) {

        // check if root is null that means tree is empty
        if (node === null) {
            return null;
        }
        // if data to be delete is less than roots data then move to left subtree 
        else if (key < node.data) {
            node.left = this.removeNode(node.left, key);
            return node;
        }
        else if (key > node.data) {
            node.right = this.removeNode(node.right, key);
            return node;
        }
        // if data is similar to the root's data then delete this node 
        else {
            // deleting node with no children 
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }

            // deleting node with one Children
            if (node.left === null) {
                node = node.right;
                return node;
            }
            else if (node.right === null) {
                node = node.left;
                return node;
            }


            // Deleting node with two children minumum node of the rigt subtree  is stored in aux 
            let aux = this.findMinNode(node.right);
            node.data = aux.data;

            node.right = this.removeNode(node.right, aux.data);
            return node;

        }
    }

    //* Tree Traversal
    // ? inorder(node) – It performs inorder traversal of a tree starting from a given node
    // Algorithm for inorder:
    //     Traverse the left subtree i.e perform inorder on left subtree
    //     Visit the root
    //     Traverse the right subtree i.e perform inorder on right subtree

    inOrder(node) {
        if (node !== null) {
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right)
        }
    }

    // ?preorder(node) – It performs preorder traversal of a tree starting from a given node.
    // Algorithm for preorder:
    //     Visit the root
    //     Traverse the left subtree i.e perform preorder on left subtree
    //     Traverse the right subtree i.e perform preorder on right subtree
    preOrder(node) {
        if (node !== null) {
            console.log(node.data);
            this.preOrder(node.left);
            this.preOrder(node.right)
        }
    }
    // ? postorder(node) – It performs postorder traversal of a tree starting from a given node.
    // Algorithm for postorder:
    // Traverse the left subtree i.e perform postorder on left subtree
    // Traverse the right subtree i.e perform postorder on right subtree
    // Visit the root

    // Performs postorder traversal of a tree 
    postOrder(node) {
        if (node !== null) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.data);
        }
    }


    // ? findMinNode(node) – It searches for a node with a minimum value starting from node.


    findMinNode(node) {
        if (node.left === null) {
            return node;
        }
        else {
            return this.findMinNode(node.left);
        }
    }

    //? getRootNode() – It returns the root node of a tree.
    getRootNode() {
        return this.root;
    }


    // ? search(data) – It searches the node with a value data in the entire tree

    search(node, data) {
        if (node === null) {
            return null
        }

        // if data is less than node's data move left 
        else if (data < node.data) {
            return this.search(node.left, data)
        }
        // if data is greater than node's data move right 
        else if (data < node.data) {
            return this.search(node.right, data)
        }
        // data is equal to node's data
        else {
            return AudioWorkletNode
        }

    }

}



// Testing BST

let BST = new BinarySearchTree();

BST.insert(15); 
BST.insert(25); 
BST.insert(10); 
BST.insert(7); 
BST.insert(22); 
BST.insert(17); 
BST.insert(13); 
BST.insert(5); 
BST.insert(9); 
BST.insert(27);

console.log('bst-',BST);
console.log('bstgetRootNode-',BST.getRootNode());


let root = BST.getRootNode()
// console.log('bst inOrder');
// BST.inOrder(root)
// console.log('bst preOrder');
// BST.preOrder(root)
// console.log('bst PostOrder');
// BST.postOrder(root)

//remove node with no Child
// BST.remove(27)
// BST.inOrder(root)
// console.log('bst preOrder');

//remove node with one Child
// BST.remove(22)
// BST.inOrder(root)
// console.log('bst preOrder');

//remove node with two Child
BST.remove(25)
BST.inOrder(root)
console.log('bst preOrder');
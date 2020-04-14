
/**
 * ! SETS
 * ? Sets are one of the most fundamental data structures. The idea of a set is simple: it is a group of definite, distinct objects. In layman’s terms, in programming, a set is a group of unordered unique (no duplicate) elements.Sets are important for checking and adding a unique element in O(1) constant time.
 */

/************************************************************************/
/**
 * ! SET OPERATIONS
 * 
 */


//? 1. insertion 
// Time Complexity: O(1)

let testSet = new Set();

testSet.add(1)
testSet.add(1)
testSet.add(1)
testSet.add(2)
testSet.add(3)

console.log('set', testSet);


//? 2. Deletion

testSet.add(4);
testSet.delete(1);

console.log('set', testSet);

// ? 3. Contains

console.log('has in set', testSet.has(4))

// ? 4. Intersection
// First, the intersection of two sets consists of the common elements between those two sets. This function returns a set with common elements between two sets:
function intersectSets(setA, setB) {
    var intersection = new Set();
    for (var elem of setB) {
        if (setA.has(elem)) {
            intersection.add(elem);

        }

    }
    return intersection;

}
var setA = new Set([1, 2, 3, 4]),
    setB = new Set([2, 3]);
intersectSets(setA, setB); // Set {2, 3}


// ? 5. isSuperSet
// Second, a set is a “superset” of another set if it contains all the elements of the other set. This function checks whether a set is a superset of another. This is implemented simply by checking whether the other set contains all the elements of the reference set.
function isSuperset(setA, subset) {
    for (var elem of subset) {
        if (!setA.has(elem)) {
            return false;
        }
    }
    return true;
}
var setA = new Set([1, 2, 3, 4]),
    setB = new Set([2, 3]),
    setC = new Set([5]);
isSuperset(setA, setB); // true
// because setA has all elements that setB does
isSuperset(setA, setC); // false
// because setA does not contain 5 which setC contains


// ? 6.  Union
// Third, the union of two sets combines the elements from both sets.This function returns a new set with both elements without duplicates.
function unionSet(setA, setB) {
    var union = new Set(setA);
    for (var elem of setB) {
        union.add(elem);
    }
    return union;
}
var setA = new Set([1, 2, 3, 4]),
    setB = new Set([2, 3]),
    setC = new Set([5]);
unionSet(setA, setB); // Set {1, 2, 3, 4}
unionSet(setA, setC); // Set {1, 2, 3, 4, 5}


// ? 7. Difference
// Finally, the difference of set A from set B is all of the elements in set A that are not in set B. This function implements the difference operation by making use of the native delete method.
function differenceSet(setA, setB) {
    var difference = new Set(setA);
    for (var elem of setB) {
        difference.delete(elem);
    }
    return difference;
}
var setA = new Set([1, 2, 3, 4]),
    setB = new Set([2, 3]);
differenceSet(setA, setB); // Set {1, 4}


/************************************************************************/
/**
 * ! USING SETS TO CHECK FOR DUPLICATES IN AN ARRAY
 *
 */

// Check whether there are any duplicates in an array of integers using sets. By converting the array into a set, the size of the set can be compared with the length of the array to check for duplicates easily.

function checkDuplicates(arr) {
    var mySet = new Set(arr);
    return mySet.size < arr.length;
}
checkDuplicates([1, 2, 3, 4, 5]); // false
checkDuplicates([1, 1, 2, 3, 4, 5]); // true

// Time Complexity: O(n)
// Space Complexity: O(n)




/************************************************************************/
/**
 *! RETURNING ALL UNIQUE VALUES FROM SEPARATE ARRAYS

 Given two integer arrays with some of the same values, return one array that has all the
unique elements from both of the original arrays.
Using sets, unique elements can be stored easily. By concatenating two arrays and converting
them to a set, only unique items are stored. Converting the set to an array results in an array
with unique items only.
 *
 */

function uniqueList(arr1, arr2) {
    var mySet = new Set(arr1.concat(arr2));
    return Array.from(mySet);
}
uniqueList([1, 1, 2, 2], [2, 3, 4, 5]); // [1,2,3,4,5]
uniqueList([1, 2], [3, 4, 5]); // [1,2,3,4,5]
uniqueList([], [2, 2, 3, 4, 5]); // [2,3,4,5]

// Time Complexity: O(n + m)
// Space Complexity: O(n + m)


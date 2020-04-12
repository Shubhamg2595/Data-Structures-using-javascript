1. O(1)
The time complexity of a function (or set of statements) is considered as O(1) if it does not contain loop, recursion, and call to any other non-constant time function. A loop or recursion that runs a constant number of times is also considered as O(1). For example, the following loop is O(1) :
// Here c is a constant
for (int i = 1; i <= c; i++) {
     // some O(1) expressions
}
2. O(n)
The Time Complexity of a loop is considered as O(n) if the loop variables are incremented/decremented by a constant amount. For example, the following loops have O(n) time complexity.
// Here c is a positive integer constant
for (let i = 1; i <= n; i += c) {
     // some O(1) expressions
}
for (let i = n; i > 0; i -= c) {
    // some O(1) expressions
}
3) O(n^c)
The Time complexity of nested loops is equal to the number of times the innermost statement is executed. For example, the following sample
loops have O(n^2) time complexity:
for (let i = 1; i <=n; i += c) {
    for (let j = 1; j <=n; j += c) {
        // some O(1) expressions
    }
}
for (let i = n; i > 0; i += c) {
    for (let j = i+1; j <=n; j += c) {
        // some O(1) expressions
}
4) O(Logn)
The Time Complexity of a loop is considered as O(Logn). If the loop variables is divided /multiplied by a constant amount.
for (let i = 1; i <=n; i *= c) {
    // some O(1) expressions
}
for (let i = n; i > 0; i /= c) {
    // some O(1) expressions
}
5) O(LogLogn)
The Time Complexity of a loop is considered as O(LogLogn). If the loop variables are reduced/increased exponentially by a constant
amount.
// Here c is a constant greater than 1
for (let i = 2; i <=n; i = pow(i, c)) {
     // some O(1) expressions
}
//Here fun is sqrt or cuberoot or any other constant root
for (let i = n; i > 0; i = sqrt(c)) {
     // some O(1) expressions
}
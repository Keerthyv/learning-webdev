/* jshint esversion: 6 */

//Task 1 - Fibonacci numbers using recursion

function fibRecursion(n) {
    if (n == 1 || n == 2) return 1;
    else {
        let f = 0;
        f = fib(n - 1) + fib(n - 2);
        return f;
    }
}

//Above method is very slow. So, instead use loop.

function fibLoop(n) {
    let a = 1;
    let b = 1;

    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log(fibLoop(77));
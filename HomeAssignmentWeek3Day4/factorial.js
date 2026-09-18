"use strict";
function factorial(n) {
    if (n > 0) {
        for (let i = n - 1; i > 0; i--) {
            n = n * i;
        }
        return n;
    }
    else {
        stop();
        console.log("Not executed");
    }
}
function stop() {
    console.log("Factorial can't be performed on a negative integer or zero");
}
console.log("Factorial of the given number is ", factorial(10));

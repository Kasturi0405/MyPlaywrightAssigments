"use strict";
let a = 0;
let b = 1;
//0,1,1,2,3,5,8
function fibonacci(n) {
    for (let i = 0; i < n; i++) {
        console.log(a);
        let c = a + b;
        a = b;
        b = c;
    }
}
fibonacci(10);

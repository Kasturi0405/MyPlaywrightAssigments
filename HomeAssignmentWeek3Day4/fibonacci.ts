let a: number = 0
let b: number = 1
//0,1,1,2,3,5,8
function fibonacci(n: number) {
    for (let i: number = 0; i < n; i++) {
        console.log(a)
        let c: number = a + b
        a = b
        b = c
    }
}

fibonacci(10)
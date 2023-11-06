'use-strict'

const fibonacci = (n) =>  (n < 2) ? n : fibonacci(n - 1) + fibonacci(n - 2); 

const getFibonacciSequence = (n) => {

    let sequence = [];

    let i = 0;
    while (i < n) {
        sequence.push(fibonacci(i));
        i++;
    }
    return sequence;

}

console.log(getFibonacciSequence(8));
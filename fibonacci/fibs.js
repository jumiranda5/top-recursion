'use-strict'

const getFibonacciSequence = (n) => {

    let sequence = [];

    let i = 0;
    while (i < n) {
        let number;
        
        if (i === 0) number = 0;
        else if (i === 1) number = 1;
        else number = sequence[i - 1] + sequence[i - 2];

        sequence.push(number);
        i++;
    }

    return sequence;

}

console.log("Fibonacci sequence: " + getFibonacciSequence(8));
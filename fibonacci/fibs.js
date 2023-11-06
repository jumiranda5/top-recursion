'use-strict'

const getFibonacciSequence = () => {

    let sequence = [];

    let i = 0;
    while (i < 8) {
        let number;
        if (i === 0) number = 0;
        else if (i === 1) number = 1;
        else {
            let index1 = i - 1;
            let index2 = i - 2;
            number = sequence[index1] + sequence[index2];
        }

        sequence.push(number);
        i++;
    }

    return sequence;

}

console.log("Fibonacci sequence: " + getFibonacciSequence());
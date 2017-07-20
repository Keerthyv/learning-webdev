let upperLimit = 1000;
let counter = 0;

outer: for (let i = 2; i <= upperLimit; i++) {
    for (j = 1; j <= i; j++) {
        if (i % j === 0) {
            // console.log( `${i} divisible by ${j}` );
            if (j != 1) {
                if (j != i) {
                    // console.log( `Not prime ${i}` );
                    continue outer;
                } else {
                    console.log(`PRIME!!! ${i}`);
                    counter++;
                }
            }
        }
    }
}
console.log(`number of primes below ${upperLimit} are ${counter}`);
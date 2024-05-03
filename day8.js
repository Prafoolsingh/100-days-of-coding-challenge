// write a function factorial that takes a non negative initeger num as input and returns its factorial . 

function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact = fact * i
    }

    return fact
}

console.log(factorial(1)); //120
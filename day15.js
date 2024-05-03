// write a function to calculate the sum of squares f all elements in an array. 


// using map and reduce

/*
function sumOfSquare(arr) {
    arrsq = arr.map((val) => {
        return val * val
    })
    console.log(arrsq);
    result = arrsq.reduce((acc, curr) => {
        return acc + curr
    }, 0)
    return result
}
console.log(sumOfSquare([1, 2, 3]));

*/





// using reduce only

/*
function sumOfSquare(arr) {
    return arr.reduce((acc, curr) => {
        return acc + curr * curr;
    }, 0);
}

console.log(sumOfSquare([1, 2, 3])); // 14
*/






// using for of loop

function sumOfSquare(arr) {
    let sum = 0
    for (const item of arr) {
        sum = sum + (item * item)
    }
    return sum
}

console.log(sumOfSquare([1, 2, 3])); // 14


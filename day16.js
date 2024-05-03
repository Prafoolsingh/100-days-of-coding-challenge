//  write a function findMin that takes an array of numbers as input and returns the minimun value found in the arrray

function findMin(arr) {
    return arr.reduce((acc, curr) => {
        return curr < acc ? curr : acc
    })
}

console.log(findMin([5, 10, 15])); // 5
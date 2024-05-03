// write a function called calculateAverage that takes an array of numbers as input and returns the average of those number


// for loop

/*
function calculateAverage(arr) {
    let sum = 0
    for (i = 0; i < arr.length; i++) {
        sum += arr[i]
        console.log(sum);
    }

    return avg = sum / i
}

console.log(calculateAverage([10, 20, 30]));
*/


// reducer ()

// function calculateAverage(arr) {
//   let total= arr.reduce((acc,curr)=>{
//     return (acc+curr)/arr.length
//    })
//    return total
// }

// console.log(calculateAverage([10, 20, 30]));




// by using for of loop

function calculateAverage(arr) {
    let sum = 0;
    for (const item of arr) {
        sum += item;
    }
    return sum / arr.length;
}

console.log(calculateAverage([10, 20, 30])); // 20

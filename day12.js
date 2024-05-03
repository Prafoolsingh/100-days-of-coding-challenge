// write a function that takes an array of integer as input and removes duplicates elements and returning the new array with with the unique array with the unique elements


// using new Set


function uniqueArray(arr){
return [...new Set(arr)]
}
console.log(uniqueArray([5,5,10,15]));





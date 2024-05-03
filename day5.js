// write a function to sort an array of number in an ascending order 

let sortArray=(arr)=>{
return arr.sort((a,b)=>{
    return a-b
})
}
console.log(sortArray([5,4,3,2,1]));
// write a function that takes a number as input and returns the sum of its digits.

function sumOfDigits(num) {

  let arr=Array.from(String(num),Number)

  return arr.reduce((acc,curr)=>{
    return acc+curr
  },0)


}
console.log(sumOfDigits(25));
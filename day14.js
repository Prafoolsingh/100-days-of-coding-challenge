// write a function isPowerOfTwo that takes an integer num as input and returns true if num is a power of two, and false otherwise


// by looping num
/*
function isPowerOfTwo(num) {
   let flag=false;
   for(let i=1; i<num; i++){
    if(2**i ===num){
        flag=true
    }
   }
   return flag
}

console.log(isPowerOfTwo(8)); // true
console.log(isPowerOfTwo(6)); // false
*/





// by using 

function isPowerOfTwo(num) {
    // A power of two has only one bit set in its binary representation
    // So we can use bitwise operations to check if num is a power of two
    return num > 0 && (num & (num - 1)) === 0;
}

console.log(isPowerOfTwo(8)); // true
console.log(isPowerOfTwo(6)); // false
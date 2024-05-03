// write a function to determine wheter a given string is a palindeome or not. 

/*
the input string may contain letters, digits , spaces,punctuation, and special character
the function should be case-insensitive means NItin and nitin both should be considered same
the function should return true if the given input is string
*/

function isPalindrome(str){
    str1=str.toUpperCase()
    console.log(str1);
    str2=str1.split(" ").reverse().join("")
    console.log(str2);

    return str1===str2 ? true : false
}
console.log(isPalindrome("nitin")); // true
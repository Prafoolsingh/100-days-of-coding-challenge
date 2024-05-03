// write a function called isUpperCase() to chech if a character is uppercase if it is return true else return false

/*
function isUpperCase(char) {
    if(char.charCodeAt(0) >= 65 && char.charCodeAt(0)<=90){
        return true
    }
    return false
}

console.log(isUpperCase("A")); // true 
console.log(isUpperCase("a")); // false
*/



// method 2

function isUpperCase(char) {
return char===char.toUpperCase()
}

console.log(isUpperCase("A")); // true 
console.log(isUpperCase("a")); // false



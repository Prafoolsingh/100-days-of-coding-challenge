/*
hash tag generator

you are required to implement a function generateHash that generated a hashtag from a given input string.

the input string should be converted to a hashtag format, where each word is capitalized and concatenated together without spaces

if the length of the input string is greater than 200 characters or if the input string is empty or contains only whitespace, the function should return false.

otherwise, the function should return the generated tag prefixed with #
*/

function generateHash(str) {

    if (str.length > 200 || str.trim().length === 0) {
        return false
    }

    str = str.split(" ")

    str = str.map((val) => {
        return val.replace(val[0], val[0].toUpperCase())
    })


    str=str.join("")

    return `#${str}`
}

console.log(generateHash("my name is prafool singh kafaliya"));


// things i learned

// str.split() : string to array

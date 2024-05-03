// write a function findLongestWord that takes a string as input and returns the longest word in the string. if there are multiple longest words then return the first on encountered


function findLongestWord(str1) {

    if (str1.trim().length === 0) {
        return false
    }

    str1 = str1.split(" ")
    // console.log(str1);

    // arranging the array's items based on the length of item
    str1 = str1.sort((a, b) => a.length - b.length)

    // getting last element from an array
    // return str1[str1.length-1]

    // getting last element from an array
    return str1.at(-1)
}

console.log(findLongestWord("My name is prafool singh kafaliya"));

// things i have learn

/*
array.split(""): string to array

array.trim(): remove blank spaces from starting and ending of an array
*/
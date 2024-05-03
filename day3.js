// write a function called countChar that takes two parameters : a string and a character to count. the function should return the number of times the specified character appears in the string.

// todo constraints

/*
the function should be case-sensitive
the function should handle both lowercase and uppercase characters
the character parameter can be any printable ASCII character(the function should accept any charavter that is part of the Ascii character set and is printable)
*/

function countChar(word, char) {

    word = word.toUpperCase();
    char = char.toUpperCase();
    
    word= word.split("").reduce((acc, current) => {
        if (current === char) {
            return acc + 1;
        } else {
            return acc;
        }
    }, 0);

    return word
}

console.log(countChar("happy", "p")); // 2

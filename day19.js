// write a function to check if a given string starts with a specific substring


function check(str,substr) {
//   return str.startsWith(substr)

return str.toLowerCase().startsWith(substr.toLowerCase())
}

console.log(check("hello world","hello"));
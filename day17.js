// write a function toCamelCase that converts any case string to camelcase string

function toCamelCase(str) {
    return str.trim().split(" ").map((val, index) => {
        if (index === 0) {
            return val;
        } else {
            return val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
        }
    }).join("");
}

console.log(toCamelCase("hello world")); // Output: "helloWorld"

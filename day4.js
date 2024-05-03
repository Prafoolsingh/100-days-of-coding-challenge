/*
write a function called checkTriangleType that takes 3 parameters representing the lengths of the sides of the sides if a triangle the function should return a string indicating the type of triangle : "equilateral","isosceles","scalene"

constraints:
if all three sides are of equal length,return "equilateral"4
if only 2 side are of equal length, return "isosceles"
if all three sides have different lengths, return "scalene"
*/

function checkTriangleType(s1, s2, s3) {
    if (s1==s2 && s2==s3) {
        return "equilateral"
    }
    if(s1==s2 || s2==s3 || s1==s3){
        return "isosceles"
    }

    else{
        return "scalene"
    }
}

console.log(checkTriangleType(3, 3, 3)); // equilateral
console.log(checkTriangleType(1, 3, 3)); // isosceles
console.log(checkTriangleType(1, 2, 3)); // scalene

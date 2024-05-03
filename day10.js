// wwrite a function arraysAreEqual that takes two arrays arr1 and arr2 as input and returns true if the arrays are equal(i.e contain the same elements in the the same order) and false otherwise.


// using every() method of array

/*
function arraysAreEqual(arr1,arr2){

    if(arr1.length !== arr2.length){
       return false
    }

  result= arr1.every((curr,index)=>{
    return curr===arr2[index]
  })

  return result

}

console.log(arraysAreEqual([5,10,15],[5,10,15 ]));
*/


// using for loop

function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

console.log(arraysAreEqual([5, 10, 15], [5, 10, 15])); //true

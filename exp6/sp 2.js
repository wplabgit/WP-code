const arr1 = [1, 2, 3];
console.log(arr1);
const arrClone = [ 5,6,... arr1];


console.log(arrClone);
const obj1 = { a: 1, b: 2 };
const objClone = { ... obj1 };
console.log(objClone);



const arr2 = [4, 5];
const mergedArray = [ ... arr1, ... arr2];
console.log(mergedArray);
const obj2 = { c: 3 };
console.log(arr1,arr2);
const mergedObject = { ... obj1, ... obj2 }
console.log(mergedObject);
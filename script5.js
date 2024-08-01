//Write a function that takes an array and returns a new array with duplicates removed.

// Using a Set

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

const array1 = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray1 = removeDuplicates(array1);
console.log(uniqueArray1); 

// Using filter and indexOf

function removeDuplicates(arr) {
    return arr.filter((value, index, self) => self.indexOf(value) === index);
}

// Example usage:
const array2 = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray2 = removeDuplicates(array2);
console.log(uniqueArray2); 
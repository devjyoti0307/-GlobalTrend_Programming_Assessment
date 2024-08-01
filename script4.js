// Write a function that takes a nested array and returns a flattened array.

function flattenArray(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        
        if (Array.isArray(element)) {
            
            result = result.concat(flattenArray(element));
        } else {
           
            result.push(element);
        }
    }

    return result;
}

const nestedArray = [1, [2, [3, [4, 5]]], 6];
const flatArray = flattenArray(nestedArray);
console.log(flatArray); 
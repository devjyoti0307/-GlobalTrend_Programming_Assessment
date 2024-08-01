//Write a function that filters out even numbers from an array.

function filterOutEvenNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const oddNumbers = filterOutEvenNumbers(numbers);
console.log(oddNumbers); 
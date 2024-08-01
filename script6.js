//Write a function that takes a string and capitalizes the first letter of each word in the string.


function capitalizeWords(str) {
    return str
        .split(' ')
        .map(word =>
            word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join(' ');
}


const sentence = "hello world from Ishita";
const capitalizedSentence = capitalizeWords(sentence);
console.log(capitalizedSentence); 
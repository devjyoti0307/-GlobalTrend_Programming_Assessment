//Write a function that converts a given string to title case (capitalizing the first letter of each word).

function toTitleCase(str) {
    return str
        .split(' ')
        .map(word => 
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(' ');
}

const sentence = "hi this is Ishita";
const titleCaseSentence = toTitleCase(sentence);
console.log(titleCaseSentence); 
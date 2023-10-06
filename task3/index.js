const word = 'мач';
const word2 = "печень";

function checkLastSymbol(word) {
    return word[word.length - 1] === "ь" ? word[word.length - 2] : word[word.length - 1]
}

console.log(checkLastSymbol(word)) 
console.log(checkLastSymbol(word2))
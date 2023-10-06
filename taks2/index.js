const word_one = "Sasha";
const word_two = "Sashkevich";

function checkWords(word1 , word2) {
    return word1[0] === word2[0] ? true : false;
}

console.log(checkWords(word_one, word_two)) // true
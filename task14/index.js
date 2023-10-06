// палиндром

function palindrome(word) {
    word = word.toLowerCase().replace(/[^a-zа-яё0-9]/g, '')
    let res = '';
    for (let i = word.length - 1; i > -1; i--) {
        const element = word[i];
        res += element
    }
    return res === word ? true : false;
}

console.log(palindrome("0P"))
console.log(palindrome("довод"))
console.log(palindrome("race a car"))

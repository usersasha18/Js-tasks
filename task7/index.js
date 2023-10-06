// Сделай функцию, которая принимает массив любых целых чисел, которая возращает истинну, если все элементы четные, если бы хотя бы один элемент не четный, то false.

// Массив только четных чисел
const evenNumbersArray = [2, 4, 6, 8, 10];

// Массив с одним нечетным числом
const mixedArray = [2, 4, 6, 8, 10, 1];


function checkArray(arr) {
    let result;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 != 0) {
        result = false 
        } else if(arr[i] % 2 == 0) {
            result = true
        }
    }
    return result
}
console.log(checkArray(mixedArray))
console.log(checkArray(evenNumbersArray))

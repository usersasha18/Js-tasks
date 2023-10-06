// Написать функцию, которая принимает массив чисел, например [1,2,3,4,5] и функция возращает среднее арифметическое, (округлить результат до десятых)

let arr = [1,2,3,4,5];
function checkArray(arr) {
    let sum = 0;
    let result;

    if (arr.length === 0) {
        return 0; // Если массив пуст, возвращаем 0
    }

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        result = (sum+=element) / element
    }
    return Math.floor(result);
}

console.log(checkArray(arr))
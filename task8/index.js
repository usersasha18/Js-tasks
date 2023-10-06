// Сделай функцию, которая принимает массив любых целых чисел, которая возращает новый массив, где все элементы кратны пяти. ([1,2,5,12,15,21] вернет [5,15])

let arr = [1,2,5,12,15,21];

function checkArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(element % 5 == 0) {
            result.push(element)
        }
    }
    return result;
}

console.log(checkArray(arr))
const arr = [1,2,7,3,45,22,16,98,23,62,12,76, -1, -5,13];

function maxElement(arr) {
    // по дефолту значение - это первое заначение массива
    let max = arr[0]
    for (const key of arr) {
        // сравниваем первое значение, если оно key больше, то оно становится 
        // новым max, и так пока не пройдем весь массив
        if(max < key)
        max = key;
    }
    return max
}

console.log(maxElement(arr))
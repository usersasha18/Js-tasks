const hexColor = () => {
    // длина цвета
    const len = 6;
    // символы, которые в нем используются
    const values = "abcdefg0123456789"
    // делаем из строки массив
    const arr = Array.from(values);
    // массив, в котором будет результат 
    const result = []
    // обходим массив, чтобы выводить 6 значений для цвета
    for(let i = 0; i < len; i++) {
        //создаем 6 рандомных индексов, который равны от 0 до 6
        const randomIndex = Math.floor(Math.random() * arr.length)
        // далее добавляем в result значения с 6 разными индексами, следовательно будет 6 разных значений
        result.push(arr[randomIndex])
    }
    // возвращаем результат и соединяем значения массива
    return `#${result.join('').toUpperCase()}`
}

console.log(hexColor())
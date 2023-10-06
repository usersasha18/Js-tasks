// Написать функцию, которая принимает массив сотрудников, каждый сотрудник имеет имя и возраст ([{name: 'Иван', age: 23},...]) и возвращает массим, где каждый элемент представляет из себя строку "Имя: Иван, возвраст: 23".

let employees = [
    { name: "Иван", age: 30 },
    { name: "Александр", age: 25 },
    { name: "Петр", age: 35 },
];

function users(obj) {
    let result = '';
    for (const user of obj) {
       result += `Имя: ${user.name}, возраст: ${user.age}\n`
    }
    return result
}

console.log(users(employees))

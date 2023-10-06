// Написать объект ladder - объект, который позволяет подниматься вверх и спускаться. Пример работы должен быть таким:

// ladder.showStep(); // 0 (выводит ступеньку на который мы находимся)
// ladder.up(); 
// ladder.up();
// ladder.showStep(); // 2
// ladder.down();
// ladder.showStep(); // 1


let ladder = {
    step: 0,
    showStep(){
        return this.step
    },
    up() {
        return this.step++
    },
    down() {
        return this.step--
    }
}
console.log(ladder.showStep())
console.log(ladder.up())
console.log(ladder.up())
console.log(ladder.showStep())
console.log(ladder.down())
console.log(ladder.showStep())

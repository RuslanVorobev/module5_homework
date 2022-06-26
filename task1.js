let input = +prompt("Введите значение");

if (typeof input === 'number' && !isNaN(input)) {
    if (input % 2 == 0) {
        console.log('Число четное');
    } else {
        console.log('Число нечетное');
    }
}
else {
    console.log("Упс, кажется, вы ошиблись");
}

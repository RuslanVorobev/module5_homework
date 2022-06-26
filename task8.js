function printMap(map) {
    map.forEach((value, key) => console.log(`Ключ - ${key}, значение - ${value}.`));
}

let fruits = new Map([
    ["apple", "green"],
    ["strawberry", "red"],
    ["blueberry", "blue"]
]);

printMap(fruits);
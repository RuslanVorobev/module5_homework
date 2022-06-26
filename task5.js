function printArray(arr) {
    if (!Array.isArray(arr)) {
        console.log("Это не массив");
        return;
    }

    console.log(arr.length);
    for (x of arr) {
        console.log(x);
    }
}

printArray([1, 2, 3, 4]);
printArray("Hello");

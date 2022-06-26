function isAllEquals(arr) {
    if (!Array.isArray(arr)) {
        console.log("Это не массив");
        return;
    }

    let first = arr[0];
    for (let i = 1; i < arr.length; ++i)
    {
        if (arr[i] !== first)
        {
            console.log(false);
            return;
        }
    }

    console.log(true);
}

isAllEquals([2, 2, 3, 2]);
isAllEquals([2, 2, 2, 2]);
isAllEquals(["Hello"]);
isAllEquals([]);
isAllEquals([false, false]);

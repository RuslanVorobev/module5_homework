function whatIsX(x) {
    switch (typeof x) {
        case 'number':
            console.log("X — число");
            break;
        case 'string':
            console.log("X — строка");
            break;
        case 'boolean':
            console.log("X — логическое");
            break;
        default:
            console.log("тип X не известен науке");
    }
}

whatIsX(123);
whatIsX("123");
whatIsX(true);
whatIsX(whatIsX);

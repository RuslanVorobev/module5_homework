function reverse(x) {
    let s = String(x);
    let result = "";
    for (let i = s.length - 1; i >= 0; --i) {
        result += s[i];
    }

    console.log(result);
}

reverse(123);
reverse("Hello");
reverse(true);

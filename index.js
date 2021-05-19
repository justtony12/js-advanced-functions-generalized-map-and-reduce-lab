function map(src, callback) {
    const a = [];

    for (let i = 0; i < src.length; i++) {
        const element = src[i];
        a.push(callback(element));
    }
    return a;
}

function reduce(src, callback, startingValue) {
    let total;
    if (startingValue) {
        total = startingValue;
        for (let i = 0; i < src.length; i++) {
            total = callback(src[i], total);
        }
        return total;
    }
    else {
        total = src[0];
        for (let i = 1; i < src.length; i++) {
            total = callback(src[i], total);
        }
        return total;
    }
}
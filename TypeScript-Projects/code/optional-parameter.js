// case-1
function show(num1, num2) {
    if (num2 == undefined) {
        num2 = 10;
    }
    return num1 + num2;
}
console.log('num1 + num2 : ' + show(10));
// case-2
function show2(num1, num2) {
    if (num2 == undefined) {
        num2 = 10;
    }
    return num1 + num2;
}
console.log('num1 + num2 : ' + show(10, 100));

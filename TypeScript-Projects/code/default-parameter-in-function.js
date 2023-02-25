// without default parameter
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(10, 20));
// with default parameter
function addition(num1, num2) {
    if (num2 === void 0) { num2 = 40; }
    return num1 + num2;
}
console.log(addition(10));
// output : 50   //using 10 + 40 = 50
// passing default value in parameter and also passing value in argument.
function additional(num1, num2) {
    if (num2 === void 0) { num2 = 40; }
    return num1 + num2;
}
console.log(additional(10, 20));

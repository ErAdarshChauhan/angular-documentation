// anonymous function
var addition = function () {
    var x = 20;
    var y = 30;
    return x + y;
};
console.log('add : ' + addition());
//parameterized
var num1 = 0;
var num2 = 0;
;
var addition2 = function (num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
    return num1 + num2;
};
console.log(addition2(150, 100) + " is the addition of ".concat(num1, " and ").concat(num2));

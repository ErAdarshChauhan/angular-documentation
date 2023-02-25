//case-1 ----> passing mutiple arguments from calling function
function show(str1) {
    var str2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        str2[_i - 1] = arguments[_i];
    }
    return str1 + ' and ' + str2;
}
console.log(show('A', 'B', 'C', 'D'));
//case-2 ----> passing mutiple arguments from calling function if there is only rest parameter
function show2() {
    var str2 = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        str2[_i] = arguments[_i];
    }
    return str2.toString(); // becoz str2 is retruning array
}
console.log(show('A', 'B', 'C', 'D'));
// array nottation to define and call function
var show3 = function () {
    var str2 = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        str2[_i] = arguments[_i];
    }
    return str2.toString(); // becoz str2 is retruning array
};
console.log(show('A', 'B', 'C'));


function show(agr) {
    return agr;
}

// or using generic type

function showGeneric<T>(agr:T):T {
    return agr;
}

var op1 = showGeneric<string>('adarsh');
var op2 = showGeneric<number>(400);

document.writeln('<br>');
document.writeln('op1 : ' + op1);
document.writeln('<br>');
document.writeln('op2 : ' + op2);
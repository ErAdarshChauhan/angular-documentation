function show(agr) {
    return agr;
}
// or using generic type
function showGeneric(agr) {
    return agr;
}
var op1 = showGeneric('adarsh');
var op2 = showGeneric(400);
document.writeln('<br>');
document.writeln('op1 : ' + op1);
document.writeln('<br>');
document.writeln('op2 : ' + op2);

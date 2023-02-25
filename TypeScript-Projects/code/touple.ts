//define array in tuple
var x:[number,string,boolean];
x=[10,'abc',true]; 
console.log(x);
console.log(x[2]);
//define array of array in tuple
var y:[number,string,boolean][];
y=[[10,'abc',true],[20,'xyz',false],[30,'LML',true]]; 
console.log(y);
console.log(y[2][1]);

//if we want to add new element in array then use push() method it will not replace existing values.
var employee:[number,string];
employee=[10,'adarsh chauhan'];
employee.push(12,'Ramesh Tyagi');

console.log(employee);
// anonymous function

let addition = function():number{
    let x = 20;
    let y = 30;
    return x+y;
};

console.log('add : '+addition());

//parameterized
let num1:number = 0;
let num2:number = 0;;

let addition2 = function(num1:number,num2:number):number{
    this.num1 = num1;
    this.num2 = num2;
    return num1 + num2;
}

console.log(addition2(150,100)+` is the addition of ${num1} and ${num2}`);

// case-1 ---> if we don't pass value for optional parameter variable.
function show(num1:number,num2?:number):number{
    if(num2==undefined){
        num2 = 10;
    }
    return num1+num2;
}

console.log('num1 + num2 : '+show(10));


// case-2 ---> if we pass value for optional parameter variable.
function show2(num1:number,num2?:number):number{
    if(num2==undefined){
        num2 = 10;
    }
    return num1+num2;
}

console.log('num1 + num2 : '+show(10,100));

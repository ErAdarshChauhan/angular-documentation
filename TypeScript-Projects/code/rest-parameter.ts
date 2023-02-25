//case-1 ----> passing mutiple arguments from calling function

function show(str1:string,...str2:string[]):string{
    return str1+' and '+ str2;
}

console.log(show('A','B','C','D'));

//case-2 ----> passing mutiple arguments from calling function if there is only rest parameter

function show2(...str2:string[]):string{
    return str2.toString();   // becoz str2 is retruning array
}

console.log(show('A','B','C','D'));

// array nottation to define and call function
let show3 = (...str2:string[]):string=>{
    return str2.toString();   // becoz str2 is retruning array
};
console.log(show('A','B','C'));
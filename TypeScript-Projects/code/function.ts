var nullvalue:null;
document.write('<br>');

//define function with return type in function signature
function addition():number{
    let z:number = 30;
    document.write('z : '+z);
    
    return z;
}

//define function with no return type in function signature
function additionWithoutReturnType(){
    let z:number = 30;
    document.write('z : '+z);
    
    return z;
}


addition();
additionWithoutReturnType();
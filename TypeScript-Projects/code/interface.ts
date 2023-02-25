// define variables or key-pairs values in interface 

interface keyValuepair{
    key:string;
    value:string;
}

//implement or use interface
function show(){
    let keyvaluespair1:keyValuepair={key:'eid',value:'emp1'};
    // let keyvaluespair2:keyValuepair={key:1,value:'emp1'};  // will give error becoz key is string type 
    // let keyvaluespair3:keyValuepair={key:'eid',value:2};  // will give error becoz value is string type 
    // let keyvaluespair3:keyValuepair={value:'emp1', key:'eid'};  // will also give error becoz value will come at second place as it is defined in interface 

    console.log(keyvaluespair1);
}

// define methods in interface

interface Calculator{
    sum(num1:number,num2:number):number;
}

var add:Calculator={
    sum(num1:number,num2:number){
        return num1+num2;
    }
}

console.log("addition : "+add.sum(10,20));




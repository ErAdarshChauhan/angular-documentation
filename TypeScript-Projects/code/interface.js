// define variables or key-pairs values in interface 
//implement or use interface
function show() {
    var keyvaluespair1 = { key: 'eid', value: 'emp1' };
    //let keyvaluespair2:keyValuepair={key:1,value:'emp1'};  // will give error becoz key is string type 
    //  let keyvaluespair3:keyValuepair={key:'eid',value:2};  // will give error becoz value is string type 
    ///let keyvaluespair3:keyValuepair={value:'emp1', key:'eid'};  // will also give error becoz value will come at second place as it is defined in interface 
    console.log(keyvaluespair1);
}
var add = {
    sum: function (num1, num2) {
        return num1 + num2;
    }
};
console.log("addition : " + add.sum(10, 20));

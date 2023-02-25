// traditional way to define array 
//way - 1

var list:number[]=[2,4,5];
console.log(list);
console.log(list[2]);

var str:string[]=['adarsh','chauhan'];
console.log(str);
console.log(str[1]);

var allTypeValues:any[]=['adarsh','chauhan',3,4,6,true,3.6];
console.log(allTypeValues);
console.log(allTypeValues[6]);

//way - 2

var newList:Array<number>=[3,5,7,9];
console.log(newList);
console.log(newList[3]);

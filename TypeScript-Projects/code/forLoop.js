//types of for loop
/**
 *    1. traditional for loop
 *          ex:
 *                for(let i=0;i<10;i++){
 *
 *                }
 *    2. in for loop, this loop will give index of an array
 *          ex:
 *                var arr = [10,20,30,40,50];
 *                for(let i in arr){
 *                   console.log(i);
 *                   console.log(arr[i]);
 *                }
 *
 *    3. of for loop, this loop will give val of an array
 *          ex:
 * *  */
var arr = [10, 20, 30, 40, 50];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var val = arr_1[_i];
    console.log(val);
}

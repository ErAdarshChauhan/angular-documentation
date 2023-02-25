//here indexing will start from zero
var color;
(function (color) {
    color[color["RED"] = 0] = "RED";
    color[color["YELLOW"] = 1] = "YELLOW";
    color[color["PINK"] = 2] = "PINK";
})(color || (color = {}));
//     or now here indexing will start from 50
var color2;
(function (color2) {
    color2[color2["RED"] = 50] = "RED";
    color2[color2["YELLOW"] = 51] = "YELLOW";
    color2[color2["PINK"] = 52] = "PINK";
})(color2 || (color2 = {}));
//     or now here indexing will start from given values
var color3;
(function (color3) {
    color3[color3["RED"] = 100] = "RED";
    color3[color3["YELLOW"] = 150] = "YELLOW";
    color3[color3["PINK"] = 200] = "PINK";
})(color3 || (color3 = {}));
var myColor = color.RED;
console.log(myColor);
var myColor2 = color2.RED;
console.log(myColor2);
var myColor3 = color3.PINK;
console.log(myColor3);

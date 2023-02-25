//here indexing will start from zero
enum color {
    RED,
    YELLOW,
    PINK
}
//     or now here indexing will start from 50
enum color2 {
    RED = 50,
    YELLOW,
    PINK
}
//     or now here indexing will start from given values
enum color3 {
    RED = 100,
    YELLOW=150,
    PINK=200
}

let myColor = color.RED;
console.log(myColor);

let myColor2 = color2.RED;
console.log(myColor2);

let myColor3 = color3.PINK;
console.log(myColor3);
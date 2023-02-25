// let name = 'adarsh';  //let keyword works inside only block of code like below.
// means scope of let keyword works for block level.
{
    let name = '';
}

// or 
var a = 10;
if (a>0) {
    let b = 20;
    console.log(b);
} else {
    let b = 20;
    console.log(b);
    
}
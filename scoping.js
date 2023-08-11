// console.log("1:"+a);
// var a=10;
// console.log("3"+a);
// function fnb()
// {
//     console.log("9"+a);
// }
// function fn()
// {
//     console.log("6"+a);
//     var a=20;
//     console.log("13"+a);
//     fnb();

// }
// fn();

console.log("line1"+a)
var a=10
function b()
{
    console.log("line5"+a)
}
console.log("line 7"+a)
function fn()
{
    console.log("line 9"+a);
    var a=20;
    b();
    console.log("line 13"+a);
}
fn();
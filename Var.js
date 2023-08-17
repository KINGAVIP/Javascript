// Learning about var
// var variable can be redeclared but will take the same memory as of previous and not different ()
// console.log(a)
// var a=10;
// console.log(a)

// var a;
// console.log(a);

// var a=20;
// console.log(a);

// var variable has a function scope
var a=10;
console.log(a);
function fn()
{
    console.log(a);
    var a=20
    console.log(a);
    if(a==20)
    {
        var a=30
        console.log(a);
    }
    console.log(a);
}
fn()
console.log(a);
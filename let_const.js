
// let and const ->introduced with es6 to remove the bugs caused due to traffic of redeclaration of var variables and the function scope
// concepts->
// uses hositing
// Temporary Dead Zone->even their memory is assigned due to hoisting still cannot be accessed until its declared
// console.log(a)
// let a;
// console.log(a)
// a=10;
// console.log(a)

// let a=10;
// console.log(a);
// as let variable os declared in below line so error should come at that line and above line should work as js uses interpreter but due 
// to hoisting it detects redeclaration and hence give error
// let a=20;
// console.log(a)

// eg of interpretor working
// console.log("hello")
// console.log(a)
// let a=20;

// let and const has block scope
// let a=20
// console.log(a)
// {
    // let has block scope i.e this block has its own execution context and uses hoisting and lexical scope concept
    // let a=10
    // console.log(a);

// }
// values are not effected here as let has only block scope and not function scope if used var we got op as 10
// console.log(a);

// conecept of variable shadowing
// let a=20;
// console.log(a)
// {
//     // the inner block value of a has shadowed the value of outer variable a and this is variable shadowinf
//     var a=10;
//     console.log(a)
// }
// console.log(a)

// variable shadowing can be of let-let , const-const,let -const, const-let as they have block scope

// it also allows outer-var inner -let as in inner block only a variable with diff m/m is created for let for that block
// but if we try let-var the var has a function scope and treies to redeclare the let value and hence gives error

// const diifers from let as its value cannot be reassigned and has to be initialised on declaration only
// const a=10;
// let b
// b=20;
// console.log(a+b)
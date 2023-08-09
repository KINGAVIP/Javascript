// // // // // // Function declaration
// // // // // function fn(param)
// // // // // {
// // // // //     // value not provided is always a undefined value (param undefined)
// // // // //     let val=param+5;
// // // // //     // here val will be NaN for mathematics calcuation(Not-A-Number)
// // // // //     console.log(val)
// // // // //     console.log("Hi");
// // // // //     return "yes"
// // // // // }
// // // // // // fn invokation
// // // // // a=fn()
// // // // // console.log(a)

// // // // // Function as a variable
// // // // // 1. Can be used as an expression
// // // // //function without name in an expression is an anonymous function
// // // // let a=function ()
// // // // {
// // // //     console.log("I am a expression")
// // // // }
// // // // // a will just return the address of the fn function [Function:fn]
// // // // console.log(a);
// // // // a();

// // // // 2.function can be passed as an parameter
// // // function hello(param)
// // // {
// // //     console.log('I am hellp')
// // //     // console.log(param)
// // //     param();
// // // }
// // // function good()
// // // {
// // //     console.log("Everythinh is good");
// // // }
// // // hello(good);

// // // arrow function => used for syntax and the heart of react
// // let a=(param)=> param*param;

// // console.log(a(3));

// // function can be returned in  a function
// function outer()
// {
//     console.log("Hi");
//     return function inner()
//     {
//         console.log("I am inner");
//         return "Hit"
//     }
// }
// let a=outer()
// console.log(a())

// IIFE imediately invoked function expression =>executed whenever defined without calling

(function ()
{
    console.log("I am IIFE");
})();

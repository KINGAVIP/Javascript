// // // console.log(global)
// // // console.log(this) 
// // // these are the two objects created initiall by the execution environment even if code is not run

// // // the third part is created is for assigning memeory to the code known as hoisting

// // // for variables an initial memory is assigned so that variables can be accesed as undefined in the code till their initialization
// // a=10
// // console.log(a)
// // console.log(x)
// // var x;
// // console.log(x)
// // x=5;
// // console.log(x)

// // for function statements
// // As soon as a function is defined it assigns memory in the heap and can be used anywhere throughout the program, as it uses
// // stack implementation therefore the function naming same in the end has its top value and will be provided everywhere the fn is called

// fn()

// function fn()
// {
//     console.log("Hi")
// }
// fn()

// function fn()
// {
//     console.log("Hello")
// }
// fn()

// function as a variable
// Can not be used before its declaration and  needs to be defined first 
// a()
// var a=function fn()
// {
//     console.log("Hi this is avi");
// }
// a()
// var a=function fn()
// {
//     console.log("Hi this is abhi");
// }
// a()

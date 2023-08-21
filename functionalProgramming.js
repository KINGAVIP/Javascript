// Programming paradigms-
// Procedural-how to do(stepwise structure)
// Object Oriented=(objects and classes)
// Functional Programming - (everything in functions)
// involves (#represents method that is good and followed)
// 1. Imperative and #declrative code writing
// 2. #Pure functions
// 3. Mutability and #Immutablity

// Functional Programming
// Imperative and #declrative code writing
// find if square of a number is even or not
// Imperative method

// let x=3;
// let squared=x*x;

// let ans;
// if(squared%2==0)
// {
//     ans=true;
// }
// else{
//     ans=false
// }
// console.log(ans)


// Declarative way

// const isSquaredEven=(x)=>((x*x)%2===0?true:false)
// console.log(isSquaredEven(9))

// Pure and impure functions

// impure function
// let a=5;
// function fn(b)
// {
//     console.log(a+b)
// }
// fn(3);
// a=10
// fn(3)
// // Same function call gives different output due to dependence on external factors and hence are impure

// pure function
// function fn(b)
// {
//     console.log(10+b)
// }
// fn(2)
// let a=2
// fn(2)
// Pure function should always produce same result

// also there should be no side effect in pure function i.e it should not effect any external factor
// like we are using console.log() in the function which is effecting the termial ouptut which should not be there
// instead
// function fn(b)
// {
//     return 10+b
// }
// console.log(fn(4))

// #Immutabliity-the values should not be changed and mutability
// very important
// Mutability
// const person1={
//     "name":"Avi",
//     "Age":21,
// }

// const person2=person1  //we are trying to make copy of a person having same attributes as person2 but different name

// person2.name="Aman"
// console.log(person1)
// console.log(person2)

// we see that due to reference the name of person also changed which is not required and hence wont use it
// Therefore in functional programming we can implement mutability through

const person1={
    "name":"Avi",
    "Age":21,
}

// const person2=Object.assign({},person1)  //we use object assign that creates a new referecne for the object
// or we can use the spread operator(...) which appends properties of the object into another with a new reference
const person2={...person1}
person2.name="Aman"
console.log(person1)
console.log(person2)
// or we could also used the conecpt of deep or shallow copy
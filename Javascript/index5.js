//1996 javascript created
//1997 submitted to the ECMA international for standardization which result in ECMAScript

//Now It's Time for Modern Javasript
//Features of ECMAScript 2015 also known as ES6

//1.LET VS CONST
/*
var myName = "Shashank Yadav";
console.log(myName);

myName = "Bholu";
console.log(myName);
*/
/*
let myName = "Shashank Yadav";
console.log(myName);

myName = "Bholu";
console.log(myName);
*/
/*
const myName = "Shashank";
console.log(myName);

myName = "Bholu";
console.log(myName);
//In case of const when we decide to change the name it show error becoz const
//is not changed  
*/

//Difference between let,const and varr  
/*
function biodata()
{
    let myFirstName = "Shashank";      
    console.log(myFirstName);
    
    if(true)
    {
        let myLastName = "Yadav";
        console.log("inner" + myLastName);
        console.log("inner" + myFirstName);
    }

   
    console.log("innerOuter" + myLastName);
}
console.log(myFirstName);
biodata();
*/
//var -> Function Scope
//let and const -> Block Scope {->} inside the curly braces 


//2.Template literals (template strings)
//Print table for given number
/*
for(let num = 1; num <= 10; num++)
{
    let tableOf = 12;
    //console.log(tableOf + " * " + num + " = " + tableOf * num);
    console.log( ` ${tableOf} * ${num}  = ${tableOf * num}`);
}
*/

//Default Arguments
//Default function parameters allow named parameters to be
//initialized with default values if no value or undefined is passed
/*
function mult(a, b = 5)
{
   return a * b;
}
console.log(mult(4));
*/

//6.Fat Arrow Function
//Normal Way of writting function
/*
console.log(sum());
function sum()
{
    let a = 5 , b = 6;
    let sum = a + b;
    return `The sum of the two number is ${(sum)}`;
}
*/
/*
//How to convert in Fat Arrow Function
const sum = () => 

    `The sum of the two number is ${(a = 5) + (b = 6)}`;
   
console.log(sum());
//In fat arrow function it is must be neccesary defining(fun defination) of function before call
//(function call)
*/


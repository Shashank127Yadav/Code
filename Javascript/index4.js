//functions in JAVACSRIPT 
//A function is a block of code designed to perform a particular task 


//1.function definition
//before we use a function, we need to define it
//A function definition (also called a function declaration, or function statement)
//consists of the function keyword, followed by:

//the name of the function;
//a list of parameters to the function, enclosed in paranthesis and seprated by commas
//The javascript statements that define the function, enclosed in curly brackets(.....)
/*
//function function Name()
{
    //statement
}
*/
/*
var a = 10, b = 17;
var sum = a + b;
console.log(sum);
*/
/*
function sum()             //function definition
{
    var a = 10, b = 17;
    var total  = a + b;
    console.log(total);
}    
*/
//2.Calling functions
//defining a function does not execute it
//A javascript function is executed when "something" invokes it (calls it)

//sum();   //function calling or function

//7.Challenge time
//What is the difference between function parameter and function arguments
//Function parameters are the names listed in the function's definition
//Function arguments are the real values passed to the function
/*
function sum(a, b) //a,b parameters 
{
    var total = a + b;
    console.log(total);  
}

sum();
sum(12, 27);  //12, 27 arguments
sum(10, 20);
sum(30, 10);
sum(27, 12); 
*/

//4.Interview Questions
//Why functions?
//Reuse and Readability 

//4.Function expressions
//It means create a function and put it into the variable
/*
function sum(a,b)
{
    var total = a + b;
    console.log(total);
}

var funExp = sum(5, 10);
*/

//5. Return Keyword
//Whean Javascript reaches a return statement, the function will stop executing

//Function often compute a return value
//The return value is "returned" back to the "caller"
/*
function sum(a, b)
{
    return total = a + b; 
}

var funExp = sum(5, 10);
console.log(funExp);
*/

//6. Anonymous Function

//A function expression is similar to and has the same syntax as a function declaration One can
//define "named"
//function expressions (where the name of the expression might be used in the call stack for example)
//or "anonymous" function expressions 

var funExp = function(a, b)
{
    return total = a + b; 
}
var sum1 = funExp(5,10);
var sum2 = funExp(5,20);
console.log((sum2 > sum1));


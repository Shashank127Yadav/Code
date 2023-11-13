//4.Control statements and loops

//1.if else
/*var tomr = "sunny";
if(tomr == "rain")
{
   console.log("take a raincoat");
}
else
{
   console.log("No need to take raincoat");
}
*/
//WAP to check a given year is a leap year
/*var year = 2017
if(year % 4 == 0)
{
    if(year % 100 == 0)
    {
        if(year % 400 == 0)
        {
           console.log(year + " is a leap year"); 
        }
        else
        {
            console.log(year + " is not a leap year");
        }

    }
    else
    {
        console.log(year + " is a leap year");
    }
}
else 
{
    console.log(year + " is not a leap year");
}
*/



//What is truthy and falsy  values in javascript ?
//We have 5 falsy values in javascript
//0, undefined, null, NaN, false
/*
if(false)  //condition-> 0, undefined, null, false, NaN all are executed the else block
{
    console.log("OMG, we loss the game");
}
else
{
    console.log("Yay, We won the game");
}
*/


//2.Conditional (ternary) operator
//The conditional (ternary) operator is the only Javascript operator that takes three opreands

//variablename = (condition) ? value1 : value2
/*
var age = 17;
console.log((age >= 18) ? "you can vote" : "you cannot vote");
*/

//3.Switch Statement
//Evaluates an expression, matching the expression's value to  a case clause, and 
//executes statements associates with that case
/*
var area = "circle";
var PI = 3.142, l = 5, b = 4, r = 3;
if(area == "circle")
{ 
   console.log("Circle Area : " + PI*r**2);
} 
else if(area == "triangle")
{
    console.log("triangle Area : " + (l*b)/2);
}
else if(area == "rectangle")
{
   console.log("rectangle Area : " + (l*b));
}
else
{
    console.log("please enter a valid data");
}
*/
/*
var area = "circle";
var PI = 3.142,  l = 5, b = 4, r = 3;

switch(area)
{
    case "circle" :
    console.log("Circle Area : " + PI*r**2);
    break;

    case "triangle" :
    console.log("triangle Area : " + (l*b)/2);
    break;

    case "rectangle" :
    console.log("rectangle Area : " + (l*b));
    break;

    default :
    console.log("Please enter valid data");
    break;
}
*/
//break 
//Terminates the current loop, switch, or label 
//statement and transfers
//program control to the statement following the terminaed statement

//While Loop Statement
//The While loop statement creates a loop that executes a specified statement as long as the
//test condition evaluates to true
/*
var num = 0;
//block scope
while(num <= 10)
{
    console.log(num);
    num++;
} 
*/

//5.Do-While loop Statement
/*
var num = 0;
do{
    console.log(num);
    num++; 
}while(num <= 10);
*/

//6.for loop 
//for(initializer; condition; iteration)
{
    //code to executed
}
/*
for(var num = 0; num <= 10; num++)
{
    console.log(num);
}
*/

//6. Challange time
// Print table of 8,9,12,15 using for loop
var num = 12;
for(var i = 1; i <= 10; i++ )
{
    console.log(num + "*" + i  + "="  + num*i);  
}

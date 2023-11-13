//Expressions And Operators
// 5 + 20 
// 5 & 20 are operands and + is a operator
// combination of operator and operand is called expression

// 6 types of operators
// 1.Assignment Operators 2.Arithmetic Operators 3.Comparision Operators 4.Logical Operators
// 5.String Operators 6.Conditional(ternary) Operators

//1.Assignment Operators -> assigns value to its left operand from right operand

//var x = 5;
//var y = 5;
//console.log(x == y);
//console.log(`Is both the x and y are equal : ${x = y}`);(read in es6 later)


//2.Arithmetic Operators-> takes numerical values(either literals or variables) as their 
// operands and returns a single numerical value  
/*
console.log(3 + 3);    //6
console.log(10 - 5);   //5
console.log(20 / 5);   //4
console.log(5 * 6);    //30
console.log("Remainder Operator " + 81 % 8);  //1
*/
//Increment Operator(i++ or ++i) and  Decrement Operator(i-- or --i)
//Postfix->First insert then update
//Prefix->First Update then insert    update-> mtlb increment/decrement 
/*
var num = 15;
var newNum = num++;
console.log(num);
console.log(newNum);
*/

//3.Comparision Operator
//It compares its operands and returns a logical value based on whether the comparision is true
/*
var a = 30;
var b = 10;
console.log(a == b); 
console.log(a != b);
console.log(a > b);
console.log(a >= b);
console.log(a < b);
console.log(a <= b);
*/

//4.Logical Operators
//Logical Operators are typically used with Boolean(logical) vaues;
//when they are, they return a Boolean value

//var a = 30;
//var b = -20;

//Logical AND(&&)
//Logical OR(||)
//Logical NOT(!)

//5.String Concatenation (Operators)
//The concatenation operator (+) concatenates two string values together;
//returning another string that is the union of the two operand
/*
console.log("Hello World");
console.log("Hello " + "World");
var myName = "Shashank";
console.log(myName + "Yadav");
console.log(myName + "Yaduvanshi");
*/

//4.Challenge time
//Output of 3**4
//What will be the output, when we add a number and a string
//Write a program to swap two numbers
//WAP to swap two numbers without using third variable
/*
console.log(3**4);  //3*3*3*3  //**->exponentiation operator
console.log(10 + "string");   //concatenation

var a = 15;
var b = 16;
console.log("Before Swap a = " + a);  
console.log("Before Swap b = " + b);  
var c = 0;
c = a;
a = b;
b = c;
console.log("After Swap a = " + a);
console.log("After Swap b = " + b);

//Without Using third Variable
var a = 5;
var b = 10;
console.log("Before Swap a = " + a);
console.log("Before Swap b = " + b);

a = a + b;
b = a - b;
a = a - b;
console.log("After Swap a = " + a);
console.log("After Swap b = " + b);
*/

//3.Interview Question 
// difference between == and ===  ?
//== checks only value 
//=== checks value as well as datatype of variable
var num1 = 5;
var num2 = '5';
console.log(typeof(num1));
console.log(typeof(num2));
console.log(num1 == num2);
console.log(num1 === num2);



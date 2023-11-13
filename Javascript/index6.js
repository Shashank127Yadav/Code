//Arrays in Javascript

//When we use a var, we can stored only one value at a time
//When we feel like storing multiple values in one variable then insetead of var, we will use an Array
//In Javascript, we have an Array Class, and arrays are
//the prototype of this class
/*
var friend1 = "Nitish";
var friend2 = "Vivek";
var friend3 = "Chitransh";
var freind4 = "Devraj";
*/

//var myFriends = [Nitish, 8, Vivek, 28, Chitransh, 29, Devraj, 12, true,];
//In Javascript we can store different types of data in array
//While in other programming languages stores same type(datatype) elements/ values in array

//In Javascript first element of array -> Lower Index/Lower boundary
//Last element of array -> Upper Index/Upper Boundary

//var myFriends = new Array; //optinal;
//var myFriends = ["nitish", 8, "vivek", 28, "chitransh", 29, "devraj", 12];






//1.Array Subsection
//Traversal in array
//navigate through an array

//if we want to get the single data at a time and if
//we want to change the data
/*
var myFriends = ['nitish', 'vivek', 'chitransh', 'devraj'];
console.log(myFriends[1]);

//if we want to check the length of elements of an array
console.log(myFriends.length);
*/

//we use for loop to navigate
/*
var myFriends = ['nitish', 'vivek', 'chitransh', 'devraj'];
//for loop
for(let i = 0; i < myFriends.length; i++)
{
   console.log(myFriends[i]);
}
*/
//After ES6 we have for..in and for..of loop too
//for in loop gives index number
//var myFriends = ['nitish', 'vivek', 'chitransh', 'devraj'];
/*
for(let elements in myFriends)
{
    console.log(elements);
}
*/
//for of loop gives the value at that index
/*
for(let elements of myFriends)
{
    console.log(elements);
}
*/

//Array.prototype. forEach()
//Calls a function for each element in the array 
/*
var myFriends = ['nitish', 'vivek', 'chitransh', 'devraj'];
myFriends.forEach(function (element, index, array)
{
    console.log(element + " index : " + index  + " " + array);
});
*/

//Using for each we can give index, value at index, array
//break is not used in forEach
/*
myFriends.forEach((element, index, array) => 
{
    console.log(element + " index : " + index  + " " + array);
});
*/









//2.Searching and Filter in an Array 
/*
//Array.prototype.indexOf()
//Returns the first (least) index of an element within the array equal
//to an element, or -1 if none is found. It search the element from the= 0th index=
var myFriends =  ["nitish", "vivek", "chitransh", "devraj"];
console.log(myFriends.indexOf('devraj'))
console.log(myFriends.lastIndexOf('vivek')) //returns the last(greatest) index or -1
*/

/*
//Array.prototype.includes()
//Determines whether the array contains a value returns true or false                                
var myFriendsNames = ['vivek', 'nitish', 'devraj', 'chitransh'];
console.log(myFriendsNames.includes('vivek'));
*/

/*
//Array.prototype.find()
//arr.find(callback(element, index[], array[])[, thisArg])
//Returns the found element in the array or undefined if not found
//Only problem is that it returns only one element
const prices = [200, 300, 350, 400, 450, 500, 600];
//find prices < 400
const findElement = prices.find((currVal) => {
    return currVal < 400;
}); 
console.log(findElement);
console.log(prices.find((currVal) => currVal < 400));
*/

/*
//Array.prototype.findIndex()
//Returns the found element's index or -1 if not found element
const prices = [200, 300, 350, 400, 450, 500, 600];
//prices < 400
console.log(prices.findIndex((currVal) => currVal < 400));
*/

/*
//Array.prototype.filter()
//Returns a new array containing all elments of the calling array
//or empty if not found condition satisfied
const prices = [200,300,350,400,,500,600];
const newPricesTag = prices.filter((elem,index) => {
    return elem < 400
});
console.log(newPricesTag);
*/








//3.Sort And Compare
/*
//Array.prototype.sort()
//It sorts the elements of an array in place and returns the sorted array
//The default sort order is ascending
//Built in upon converting the elements into strings then comparing their sequences of UTF-16 code units values.   
const months = ['March', 'Jan', 'Feb', 'April', 'Dec', 'Nov'];
console.log(months.sort())
const array1 = [1, 30, 4, 21, 100000, 99];
console.log(array1.sort());
*/

//However, if numbers are sorted as strings,
//"25" is bigger than "100", because "2" is bigger than "1".
//Because of this, the sort() method will produce an incorrect result with sorting numbers.   














//4.Perform CRUD (create, read, update, delete,)
//Array.push() method adds one or more element to the end of an array and returns the new length
// of the array
/*
const animals = ['cows' , 'sheep', 'goats'];
const count = animals.push('buffallo', 'dog', 'cat');
console.log(animals);
console.log(count);
*/

//Array.prototype.unshift()
// The unshift() method adds one or more elements to the begining of an array and returns
// the new length of the array  
/*
const animals = ['cows' , 'sheep', 'goats'];
const count = animals.unshift('buffallo', 'dog', 'cat');
console.log(animals);
console.log(count);
*/
/*
//2nd example
const myNumbers = [1,2,3,5];
myNumbers.unshift(4,6);
console.log(myNumbers);
*/

/*
//Array.prototype.pop()
//The pop()-> removes the last element from  array and return that element
//This method change the length of the array
const plants = ['broccoli', 'cauliflower', 'kale', 'tomato', 'cabbage'];
console.log(plants);
console.log(plants.pop());
console.log(plants);    
*/

/*
//Array.prototype.shift()
//removes the first element from an array and returns that element
const plants = ['broccoli', 'cauliflower', 'kale', 'tomato', 'cabbage'];
console.log(plants);
console.log(plants.shift());
console.log(plants);
*/

//8. Challenge Time
//1:add Dec at end
//2:What is return value of splice method //return deleted element if zero element delete return empty
//3:Update march to March 
//4:delete June

//const months = ['Jan', 'march', 'April', 'June', 'July'];
/*
const newMonth = months.splice(months.length,0,'Dec');
console.log(months);
console.log(newMonth); 
const updateMonth = months.splice(1,1,'March');
console.log(months);
*/
/*
const indexOfMonth = months.indexOf('June');

if(indexOfMonth != -1)
{
    const updateMonth = months.splice(indexOfMonth,1);    
    console.log(months);
    console.log(updateMonth);
}
else
{
    console.log('No such data is found');
}
*/








//5.Array Subsection 4->Map and Reduce Method
//Array.prototype.map()
//let newArray = arr.map(callback(currentValue[,index[,array]])){
//return element for newArray, after executing something}[, thisArg]);    
//Returns a new array containing the results of calling a function on every
//element in this array
//const array1 = [1,4,9,16,25];
/* 
let newArr = array1.map((currElem,index,arr) => {
    return currElem > 9;
})
console.log(array1);
console.log(newArr);
*/
/*
let newArr = array1.map((currElem,index,arr) => {
    return `Index no = ${index} and the value is ${currElem} belong to ${arr}`
})
console.log(newArr);
//It return the new array without mutating the original array
*/

//Challenge time
//1.find square root of each element in an array
// let arr = [25, 36, 49, 64, 81];
//2.Multiply each element by 2 and  return the elements which are greater than 10
// let arr = [2, 3, 4, 6, 8];
/*
//sol-1
let arr = [25, 36, 49, 64, 81];

let sqrRootArr = arr.map((currElem) => {
    return Math.sqrt(currElem); 
});
console.log(sqrRootArr);
*/

//sol-2
/*
let arr = [2, 3, 4, 6, 8];
let arr2 = arr.map((currElem) => {
    return currElem*2;
}).filter((currElem) => {
    return currElem > 10;
}) 
console.log(arr2);
*/
/*
let arr = [2, 3, 4, 6, 8];

let arr2 = arr.map((curElm) => curElm * 2).filter((curElem) => 10).reduce((accumulator, curElem) => {
    return accumulator += curElem;
});
console.log(arr2);
*/

//Reduce Method
//flatten an array means to convert the 3d or 2d array into 1d array

//The reduce() method executes a reducer function(that you provide)
//on each element of the array, resulting in single output value

//The reducer function takes four arguments:
//Accumulator, Current Index, Current Element, Source Array
/*
let arr = [5,6,2];

let sum = arr.reduce((accumulator, currElem, index, arr) =>{
      return accumulator += currElem;
});
console.log(sum);
*/
 
//How to flatten an array
//Converting 2d and 3d into 1d array
/*
const arr = [
     ['zone1', 'zone2'],
     ['zone3', 'zone4'], 
     ['zone5', 'zone6'], 
     ['zone7', ['zone7', 'zone8']]
    ];

let flatArr = arr.reduce((accum, currVal) => {
    return  accum.concat(currVal);
});
console.log(flatArr);
*/

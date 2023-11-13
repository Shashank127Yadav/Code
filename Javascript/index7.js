//Strings In Javascript
//A Javascript string is zero or more characters written nsde quotes.

//Javascript strings are used for storing and manipulating text.
//You can use single or double quotes
//Strings can be created as primitives
//from string literals, or as objects, using the String() constructor
/*
let myName = "shashank yadav";
let ytName = 'shashank technical';
//let ytName = new String("shashank technical"); by help of Constructor

console.log(myName);
console.log(ytName);
*/

//How to find the length of a string
//String.prototype.length
/*
let myName = "shashank yadav";
console.log(myName.length);  
*/



//Backlash Escape Character
//turns special characters into strings
/*
let anySentence ="we are the so called \"Vikings\" from the north.";
let anySentence ='we are the so called \'Vikings\' from the north.';
console.log(anySentence);
*/

//If you don't want to mess, simply use the alternate quotes
//let anySentence ='we are the so called "Vikings" from the north.';
//let anySentence ="we are the so called 'Vikings' from the north.";
//console.log(anySentence);




//Finding a String in a String
/*
//String.prototype.indexOf((searchValue [, fromIndex]))
//The indexOf() method returns the index of (the position of) the first occurence of a specified 
//text in a string
const myBiodata = 'I am the shashank technical';
console.log(myBiodata.indexOf("shashank"))
//String.prototype.lastIndexOf(searchValue [, fromIndex])
console.log(myBiodata.lastIndexOf('t'));
*/



//Searching of a string in a string 
/*
//String.prototype.search(regexp)
//The search() method searches a string for a specified value and returns the match
const myBiodata = 'I am shashank technical';
let searchData = myBiodata.search("shashank");
console.log(searchData);
//The search() method cannot take a second start position argment.
*/




//Extracting String Parts
//There are three methods:
//slice(start, end)
//substring(start, end)
//substr(start, length)

//The slice() method
//slice() extracts a part of a string and returns the extracted part in a new string
//This method takes 2 parameters: the start position, and the end postition(end not include)
//NOTE: The original array will not be changed 
/*
var str = "Apple , Banana, Kiwi";
let res = str.slice(0,5);
console.log(res);
let ans = str.slice(7, -2);  //last se -2
console.log(ans);   
*/
//Challange time
//Q:Display only 280 characters of a string like the one used in twitter?
/*
let myTweets = "shhhh df sf fd f jkkjl lkk kfldf kdsfjkl lafjfkl kfkljlf kljsflk ojfjfdij jkfjkjfk jfkjdfkj k  kdjfkjk oioisoifnfnm  emnemfnijfid njjji kjfodfo mdm ffjoepofojkfd fffj uidsufifu j jfjdlfjdlfj  jkfljdfkljf   uiof iuf  fffjf d jk fjfkdsfjj sposaup oi snm fou n fn fj fdofodf nenf mfodj df dfjidofjksf jfkfsfjlsl njfndsfnduviovn nfnifidoj vnmnfsiov endsfkk"
let myActualTweet = myTweets.slice(0, 280);
console.log(myActualTweet);
console.log(myActualTweet.length);
*/


/*
//substring Method
//substring is similar to slice()
//The difference is that substring() cannot accept that negative indexes
var str = "Apple, Banana, Kiwi";
//let res = str.substring(0, 4);
let res = str.substring(7, -2);
console.log(res);
//If we give negative value then the characters aare counted from the 0th position
*/


//substr Method
//Similar to slice()
//Difference is that the second parameter specified the length of the extracted part.
/*
var str = "Apple, Banana, Kiwi";
//let res = str.substr(0, 4);
//let res = str.substr(7, -2);  //No output when negative 
let res = str.substr(-4); //last se -4
console.log(res);
*/



//Replacing String Content()
//String.prototype.replace(searchFor, replaceWith)
/*
//The replace() method replaces a specified value with another value n string
let myBiodata = 'I am shashank yadav shashank';
let replacedata = myBiodata.replace('shashank', 'Shashank');
console.log(replacedata);
*/


//Points to remember
//1.The replace() method does not change the original string
//it is called on. It returns a new string.
//2.By default, the replace() method replaces only the first match
//3.By default, the replace() method is case sensetve
//SHASHANK is not find in string


//Extracting String Characters
//There are 3 methods:
//charAt(position)
//charaCodeAt(position)
//Property access []
/*
//charAt() Method
//Returns the character at a specified index(position) in a string
let str = "HELLO WORLD";
console.log(str.charAt(0));
*/

/*
//charCodeAt() Method
//Returns the unicode of the character at a specified index in a string
//Returns the UTF-16 code(an integer between 0 and 65535)
let str = "HELLO WORLD";
console.log(str.charCodeAt(0));
*/
/*
//Challenge time
//Return the Unicode of the last character in a string
let str = "HELLO WORLD";
let lastChar = str.length - 1;
console.log(str.charCodeAt(lastChar)); 
*/

//Property Access
//ECMAScript 5(2009) allows property acess [ ] on strings
//var str = "HELLO WORLD";
//console.log(str[1]);

//Other Useful Methods
/*
let myName = "Shashank Yadav";
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());
*/
/*
//concat() method
//concat() joins two or more strings
let fName = "shashank";
let lName = "yadav";
console.log(fName.concat(lName));
console.log(fName.concat(" " ,lName))
console.log(fName + lName);
console.log(`${fName} ${lName}`);
*/

/*
//String.trim()
//The trim() method removes whitespace from both sides of a string
var str = "                Hello    World";
console.log(str);
console.log(str.trim());  
*/


/*
//Converting a String to an Array
//A string can be converted to an array with the split() method
var txt = "a, b, c | d, e";     
console.log(txt.split(","));   //Split on commas
console.log(txt.split(" "));   //Split on spaces
console.log(txt.split("|"));   //Split on pipe
*/


//Date & Time in Javascript
//Javascript Date objects represent a single moment in time in  a platform-Independent format
//Date objects contain a Number that represents milliseconds since 1 JAN 1979 UTC.

//Creating Date Objects
//There are 4 ways to create a new date object:

//new Date()
//new Date(year, month, day, hours, minutes, seconds, milliseconds)
//it takes 7 arguments
//new Date(milliseconds)
//we cannot avoid month sections
//new Date(date string)

/*
//new Date()
//Date Objects are created with the new Date() constructor
let currDate = new Date();
console.log(currDate);
console.log(new Date());
console.log(new Date().toLocaleString());
console.log(new Date().toString());
*/
//Date.now()
//Returns the numeric values corresponding to the current time the number of milliseconds elapsed
//since January 1, 1970 00:00:)) UTC
//console.log(Date.now()); 

//new Date(year, month, .....);
//7 numbers specify year, month, day, hour, minute, second, and millisecond(in that order);
//Note: Javascript counts months from 0 to 11 

//var d = new Date(2021, 0, 5, 10, 33, 30, 0);
//var d = new Date(2021, 0);
//console.log(d.toLocaleString());


//new Date(dateString)
//new Date(dateString) creates a new date object from a date string
//var d = new Date("October 12, 2021 11:13:00");
//console.log(d.toLocaleString());

//new Date(milliseconds)
//new Date(milliseconds) create a new date object as zero time plus milliseconds


//var d = new Date(0);
//var d = new Date(1609574531435);
//var d = new Date(86400000*2);
//console.log(d.toLocaleString());



//Dates Method
/*
const curDate = new Date();
//how to get the individual date
console.log(curDate.toLocaleString());
console.log(curDate.getFullYear());
console.log(curDate.getMonth());
console.log(curDate.getDate());
console.log(curDate.getDay());
*/

//how to set the indivdual date
/*
console.log(curDate.setFullYear(2022));
console.log(curDate.setFullYear(2022, 10, 5));
let setmonth = curDate.setMonth(10);
console.log(set);
console.log(curDate.setDate(5));
console.log(curDate.toLocalString);
*/
/*
//Times Method
const curTime = new Date();
//how to get the individual time
console.log(curTime.getTime());
//The getTime() method returns the number of milliseconds 
console.log(curTime.getHours());
//The getHours() method returns the hours of a date
console.log(curTime.getMinutes());
console.log(curTime.getSeconds());
console.log(curTime.getMilliseconds());
*/

//How to set the individual time
let curTime = new Date();    
//console.log(curTime.setTime());
console.log(curTime.setHours(5));
console.log(curTime.setMinutes(5));
console.log(curTime.setSeconds(5));
console.log(curTime.setMilliseconds(5));















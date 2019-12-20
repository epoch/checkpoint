// Javascript Assessment
// Variables
// Assign the string "Jack" to a variable called captain

var captain = "Jack";

// Using the captain variable, use string concatenation to form the string "Oh Jack, my Jack!", assigning it to a variable named phrase

var phrase = ("Oh " + captain + ", my " + captain + "!");
var phrase2 = (`Oh ${captain}, my ${captain}!`);
console.log(phrase);
console.log(phrase2);

//=================================================================================================================================================================================

// Arrays & Loops
// assume to the following array:

// var days = ['Thursday', 'Friday', 'Saturday', 'Sunday']
// loop through the array to print the following
// 0 Thursday
// 1 Friday
// 2 Saturday
// 3 Sunday

var days = ['Thursday', 'Friday', 'Saturday', 'Sunday']

for(var i = 0; i < days.length; i++){
    console.log(`${i} ${days[i]}`);
}


//=================================================================================================================================================================================

// JS loop
// write a loop that print out the following:

// 16 bananas
// 14 bananas
// 12 bananas
// 10 bananas
// 8 bananas
// 6 bananas

for(i = 16; i >= 6;) {
    console.log(`${i} bananas`);
    i -= 2;
}


//=================================================================================================================================================================================

// Data Structures - JS Objects
// assume the following object

var brain = {
  energyLevel: 10
}
// write code to add a dream property to the brain object with the string value 'electric sheep'

brain.dream = "electric sheep";

// write code to add a dayDream property to the brain object with the value { lunch: ['burger', 'beer'] }

brain.dayDream = {
    lunch : ['burger', 'beer']
};


// write code to add 'pudding' to the beginning of the lunch array

brain.dayDream.lunch.unshift('pudding');
console.log(brain);



//=================================================================================================================================================================================

// Objects
// assume to the following object:

var dog = {
  name: 'fluffy',
  age: 4,
  hairColor: 'pink'
}
// research the builtin Object.keys() function and use it to console log all the property names as an array

console.log(Object.keys(dog));



//=================================================================================================================================================================================

// JS Functions
// Write a function isOdd that accepts a number as a parameter and return a boolean to indicate wether the number is odd or not
// examples of calling the function in the console

// > isOdd(2)
// < false
// > isOdd(3)
// < true
// Invoke the function with 6 as arguments and save it to a variable named result

var answer;
var isOdd = function(num) {
    if(num % 2 === 0) {
        answer = false;
        return result = answer;
    } else {
        answer = true;
        return result = answer;
    } 
}

var result = isOdd(6);
console.log(result);


//=================================================================================================================================================================================


// bonus
// given the following array

var studentYearOfBirths = [2001, 1975, 1992, 1998, 1988, 1994]
var currentYear = 2019;
var accumYear = 0;
var averageYear = 0;
var averageAge = 0;

// write code to calculate the students average age

var calculate = function(year){
    accumYear += year;
    averageYear = (accumYear / (studentYearOfBirths.length));
    averageAge = Math.round((currentYear - averageYear));
}

studentYearOfBirths.forEach(calculate);
console.log(averageAge);

// if you used a for loop solve this again using forEach


// # Javascript Assessment

// ### Variables

// 1. Assign the string "Jack" to a variable called `captain`

var captain = "Jack";

// 2. Using the `captain` variable, use string concatenation to form the string "Oh Jack, my Jack!", assigning it to a variable named `phrase`

var phrase = `Oh ${captain}, my ${captain}!`;

// ### Arrays & Loops

// assume to the following array:

var days = ['Thursday', 'Friday', 'Saturday', 'Sunday']

// 1. loop through the array to print the following

// 0 Thursday
// 1 Friday
// 2 Saturday
// 3 Sunday
 
// Using for loop
for (var i = 0; i < days.length; i ++) {
    console.log(`${i} ${days[i]}`)
}

// Using forEach
days.forEach(function (day) {
    console.log(`${days.indexOf(day)} ${day}`);
})

// ### JS loop

// write a loop that print out the following:

// 16 bananas
// 14 bananas
// 12 bananas
// 10 bananas
// 8 bananas
// 6 bananas

for (var n = 16; n >=6; n -= 2) {
    console.log(`${n} bananas`)
}

// ### Data Structures - JS Objects

// assume the following object
var brain = {
  energyLevel: 10
}

// 2. write code to add a `dream` property to the `brain` object with the string value `'electric sheep'`

brain.dream = "electric sheep";

// 3. write code to add a `dayDream` property to the `brain` object with the value `{ lunch: ['burger', 'beer'] }` 

brain.dayDream = { lunch : ['burger', 'beer'] };

// 4. write code to add `'pudding'` to the beginning of the lunch array

brain.dayDream.lunch.unshift("pudding");

// ### Objects

// assume to the following object:

var dog = {
  name: 'fluffy',
  age: 4,
  hairColor: 'pink'
}

// 1. research the builtin `Object.keys()` function and use it to console log all the property names as an array

console.log(Object.keys(dog));

// ### JS Functions

// 1. Write a function isOdd that accepts a number as a parameter and return a boolean to indicate wether the number is odd or not

// examples of calling the function in the console
// > isOdd(2)
// < false
// > isOdd(3)
// < true

var isOdd = function (num) {
    return num % 2 == 0 ? false : true;
}

// 2. Invoke the function with 6 as arguments and save it to a variable named `result`

var result = isOdd(6);

// ### bonus

// given the following array
var studentYearOfBirths = [2001, 1975, 1992, 1998, 1988, 1994]

// 1. write code to calculate the students average age
var studentAges = [];
var total = 0;

var calculateAveAge = function (arr) {
    for (var i = 0; i < arr.length; i ++) {
        var age1 = 2019 - arr[i];
        var age2 = 2019 - arr[i] - 1;
        studentAges.push(age1);
        studentAges.push(age2)
    }
    
    for (var i = 0; i < studentAges.length; i ++) {
        total += studentAges[i];
    }

    return (total / studentAges.length).toFixed(2);
}

// 2. if you used a `for` loop solve this again using `forEach`

var studentAges2 = [];
var total2 = 0;

var calculateAveAge2 = function (arr) {
    arr.forEach(function (year) {
        var age1 = 2019 - year;
        var age2 = 2019 - year - 1;
        studentAges2.push(age1);
        studentAges2.push(age2)
    });

    studentAges2.forEach(function(age) {
        total2 += age;
    });

    return (total2 / studentAges2.length).toFixed(2);
}
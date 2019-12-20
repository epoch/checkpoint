// # Javascript Assessment


// ### Variables

// 1. Assign the string "Jack" to a variable called `captain`
// <br><br>
var captain = 'Jack';

// 2. Using the `captain` variable, use string concatenation to form the 
// string "Oh Jack, my Jack!", assigning it to a variable named `phrase`
// <br><br>
var phrase = `Oh ${captain}, my ${captain}`;
console.log(phrase);
// ### Arrays & Loops

// assume to the following array:

// ```javascript
// var days = ['Thursday', 'Friday', 'Saturday', 'Sunday']
// ```

// 1. loop through the array to print the following

// ```
// 0 Thursday
// 1 Friday
// 2 Saturday
// 3 Sunday
// ```

var days = ['Thursday', 'Friday', 'Saturday', 'Sunday'];
for (let i = 0; i < days.length; i++) {
    console.log(`${i} ${days[i]}`);
}

// ### JS loop

// write a loop that print out the following:

// ```
// 16 bananas
// 14 bananas
// 12 bananas
// 10 bananas
// 8 bananas
// 6 bananas
// ```

for (let i = 16; i >= 6; i--) {
    if(i % 2 == 0) {
        console.log(`${i} bananas`);
    }
}

// ### Data Structures - JS Objects

// assume the following object
// ```javascript
// var brain = {
//   energyLevel: 10
// }
// ```

// 2. write code to add a `dream` property to the `brain` object
// with the string value `'electric sheep'`
// <br><br>

// 3. write code to add a `dayDream` property to the `brain` object
// with the value `{ lunch: ['burger', 'beer'] }` 
// <br><br>

// 4. write code to add `'pudding'` to the beginning of 
// the lunch array
// <br><br>

var brain = {
  energyLevel: 10
}

brain.dream = 'electric sheep';

brain.dayDream = {lunch: ['burger', 'beer']};

brain.dayDream.lunch.unshift('pudding');

console.dir(brain);

// ### Objects

// assume to the following object:

// ```javascript
// var dog = {
//   name: 'fluffy',
//   age: 4,
//   hairColor: 'pink'
// }
// ```

// 1. research the builtin `Object.keys()` function and use it to console log all
//  the property names as an array

var dog = {
  name: 'fluffy',
  age: 4,
  hairColor: 'pink'
}

console.log(Object.keys(dog));

// ### JS Functions

// 1. Write a function isOdd that accepts a number as a parameter and
// return a boolean to indicate wether the number is odd or not

// examples of calling the function in the console
// ```
// > isOdd(2)
// < false
// > isOdd(3)
// < true
// ```

var isOdd = function (num) {
    return (num % 2 === 0);
}
// 2. Invoke the function with 6 as arguments and save it to a variable 
// named `result`
var result = isOdd(6);

// ### bonus

// given the following array
// ```javascript
// var studentYearOfBirths = [2001, 1975, 1992, 1998, 1988, 1994]
// ```
// 1. write code to calculate the students average age

// 2. if you used a `for` loop solve this again using `forEach`

var studentYearOfBirths = [2001, 1975, 1992, 1998, 1988, 1994];

var avarageAge = function(arr){
    var currentYear = 2019; 
    var result = 0;
    
    arr.forEach(function(birthYear) {
        result += currentYear - birthYear; 
    });

    return (result / arr.length);
}

console.log(`Students average age: ${avarageAge(studentYearOfBirths)}`);


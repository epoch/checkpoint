// # Javascript Assessments




// ### Variables

// 1. Assign the string "Jack" to a variable called `captain`
// <br><br>

var captain = 'Jack';

// 2. Using the `captain` variable, use string concatenation to form the string "Oh Jack, my Jack!", assigning it to a variable named `phrase`
// <br><br>

var phrase = 'Oh ' + captain + ', my ' + captain + '!';









// ### Arrays & Loops

// assume to the following array:

// ```javascript
var days = ['Thursday', 'Friday', 'Saturday', 'Sunday']
// ```

// 1. loop through the array to print the following

// ```
// 0 Thursday
// 1 Friday
// 2 Saturday
// 3 Sunday
// ```



console.log('```');
days.forEach(function (value, index) {
    console.log(index + ' ' + value);
})
console.log('```'); 









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

console.log('```'); 
for (var i = 16; i >= 6; i-=2) {
    console.log(i + ' bananas');
}
console.log('```'); 









// ### Data Structures - JS Objects

// assume the following object
// ```javascript
var brain = {
  energyLevel: 10
}
// ```

// 2. write code to add a `dream` property to the `brain` object with the string value `'electric sheep'`
// <br><br>


brain.dream = 'electric sheep';


// 3. write code to add a `dayDream` property to the `brain` object with the value `{ lunch: ['burger', 'beer'] }` 
// <br><br>

brain.dayDream = {
    lunch: ['burger','beer']
}



// 4. write code to add `'pudding'` to the beginning of the lunch array
// <br><br>

// ### Objects

brain.dayDream.lunch.unshift('pudding');

// assume to the following object:

// ```javascript
var dog = {
  name: 'fluffy',
  age: 4,
  hairColor: 'pink'
}
// ```

// 1. research the builtin `Object.keys()` function and use it to console log all the property names as an array

console.log(Object.keys(dog));











// ### JS Functions

// 1. Write a function isOdd that accepts a number as a parameter and return a boolean to indicate wether the number is odd or not


var isOdd  = function (num) {
    return (num % 2 === 0) ? false : true;
}

// examples of calling the function in the console
// ```
// > isOdd(2)
// < false
// > isOdd(3)
// < true
// ```

// 2. Invoke the function with 6 as arguments and save it to a variable named `result`

var result = isOdd(6);



// ### bonus

// given the following array
// ```javascript
var studentYearOfBirths = [2001, 1975, 1992, 1998, 1988, 1994]
// ```
// 1. write code to calculate the students average age


var averageAge = function (arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    var result = sum/arr.length;
    return (2019 - Math.round(result));
    
}

console.log(averageAge(studentYearOfBirths));

// 2. if you used a `for` loop solve this again using `forEach`



var averageAge2 = function (arr) {
    var sum = 0;
    arr.forEach(function (value) {
        sum += value;
    })
    var result = sum/arr.length;
    return (2019 - Math.round(result));
}

console.log(averageAge2(studentYearOfBirths));
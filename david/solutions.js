// variables

var captain = "Jack";
var phrase = `Oh ${captain}, my ${captain}!`;

console.log(phrase);


// array and loops

var days = ['Thursday', 'Friday', 'Saturday', 'Sunday'];

for (var i in days) {
    console.log(`${i} ${days[i]}`);
}


// js loops

for (var i= 0; i<6; i++) {
    console.log(`${16 - (2*i)} bananas`);
}

// data structure

var brain = {
    energyLevel: 10
  }

brain.dream = "electric sheep";
console.log(brain);

brain.dayDream = { lunch: ['burger', 'beer'] };
console.log(brain);

brain.dayDream.lunch.unshift("pudding");
console.log(brain);


// object

var dog = {
    name: 'fluffy',
    age: 4,
    hairColor: 'pink'
  }

var keys = Object.keys(dog);
console.log(keys);


// js function

var isOdd = (num) => {
    return num%2 === 1
}

var result = isOdd(6);
console.log(result);


// bonus

var studentYearOfBirths = [2001, 1975, 1992, 1998, 1988, 1994];
var currentYear = Number(new Date().getFullYear());

var index = 1
var averageAge = 0;
var currentAgeSum = 0;
var averageAgeArray = [];

var getAverageAge = () => {

    studentYearOfBirths.forEach(e => {
        // calculate average
        let currentAge = currentYear - studentYearOfBirths[index - 1]
        currentAgeSum = currentAgeSum + currentAge;
        averageAge = currentAgeSum / index;
        // push into array
        let averageAgeRounded = Math.round(averageAge);
        averageAgeArray.push(averageAgeRounded);
        index++;
    })
    // getting final result
    return averageAgeArray[averageAgeArray.length - 1];
}

console.log(getAverageAge());

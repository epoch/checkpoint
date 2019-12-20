console.log('P A R T Y')

// 1 ==== could not figure out concat Jack into middle of the sentence

var captain = 'Jack'
var phrase = (`Oh ${captain}, My ${captain}!`)

console.log(phrase)

// 2 ====

var days = ['Thursday', 'Friday', 'Saturday', 'Sunday']

for (i = 0; i < days.length; i++) {
    console.log(days.indexOf(days[i]) + " " + days[i])
}

// 3 ====

var bananas = ['16 bananas', '14 bananas', '12 bananas', '10 bananas', '8 bananas', '6 bananas']

for (b = 0; b < bananas.length; b++) {
    console.log(bananas[b])
}

// 4 ====

var brain = {
    energyLevel: 10
}

brain.dream = 'electric sheep'
brain.dayDream = { lunch: ['burger', 'beer'] }
brain.dayDream.lunch.unshift('pudding')

// 5 ==== not quite get the question :(

var dog = {
    name: 'fluffy',
    age: 4,
    hairColor: 'pink'
  }

console.log(dog.name)
console.log(dog.age)
console.log(dog.hairColor)

// 6 ====

var isOdd = function (num) {
    if (num % 2 === 0) {
    console.log('true');
    }   else {
    console.log('false');
    }
}

isOdd(2);
isOdd(3);
isOdd(100);

// 7 ====

var studentYearOfBirths = [2001, 1975, 1992, 1998, 1988, 1994]
var currentAge = 2019;
var sum = 0;

for (i = 0; i < studentYearOfBirths.length; i++) {
    var age = currentAge - studentYearOfBirths[i]
    sum = age + sum
}
    var averageAge = Math.round(sum / studentYearOfBirths.length);
    console.log(averageAge)
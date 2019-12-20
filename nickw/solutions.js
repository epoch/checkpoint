//Arrays & Loops

var captain = "Jack"
var phrase = `Oh ${captain}, my ${captain} !`
console.log(phrase)


var days = ['Thursday', 'Friday', 'Saturday', 'Sunday']

for (i = 0; i < days.length; i++) {
    console.log(days[i])
}

var count = [16,14,12,10,8,6]

for (i = 0; i < count.length; i++) {
    console.log(count[i] + " bananas")
}

//Data Structures
var brain = { //object
    energyLevel: 10 //property
}
brain.dream = 'electric sheep'

brain.dayDream = `{ lunch: ['burger', 'beer']}`
//remember to do the add pudding !!
//brain.dayDream[0].unshift(`'pudding'`)//
//DT i can't figure out how to unshift this bit!

console.log(brain)

//Objects
var dog = {
    name: 'fluffy',
    age: 4,
    hairColor: 'pink'
  }
console.log(Object.keys(dog))

//JS Functions

var isOdd = function(num) {
    if (num%2 !== 0) {
        return 'true'
    } else {
        return 'false'
    }
}
console.log(isOdd(90))

var result = isOdd(6)
console.log(result)

//Bonus

var studentYearOfBirths = [2001, 1975, 1992, 1998, 1988, 1994]

var age = []

for (i=0; i < studentYearOfBirths.length; i++) {
    age.push(2019 - studentYearOfBirths[i])
}
console.log(age)

var total = 0
for (index = 0; index < age.length; index++) {
    total += age[index]
}
console.log(total)
var average = Math.round(total/age.length)
console.log(average)


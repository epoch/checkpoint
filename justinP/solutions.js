

//Variables
var captain = "Jack"
var phrase = "Oh "

phrase = phrase.concat(captain).concat(" ,").concat("my ").concat(captain).concat("!")
console.log(phrase)

//Array & Loop
var days = ['Thursday', 'Friday', 'Saturday', 'Sunday']

for(var index = 0; index < days.length ; index++){
    console.log(`${index} ${days[index]}`)
}

//JS loop
for(var index = 16; index >5; index = index -2){
    console.log(`${index} bananas`)
}


//Data Structures-JS Objects
var brain = {
    energyLevel: 10
  }
brain.dream = 'electric sheep' 
brain.dayDream = { lunch: ['burger', 'beer'] }
brain.dayDream.lunch.push('pudding')

console.log(brain)


//Objects
var dog = {
    name: 'fluffy',
    age: 4,
    hairColor: 'pink'
  }
var objKeyArr = Object.keys(dog)
console.log(objKeyArr)


//JS Functions
var isOdd = function(num) {
    var oddIndicator = null
    num%2 ==0 ? oddIndicator = false : oddIndicator = true
    
    return oddIndicator
}
        //(test) console.log(`Console test_num 3 ${isOdd(3)}`)
        //(test) console.log(`Console test_num 8 ${isOdd(8)}`)
var result = isOdd(6)



//bonus
var totalYear = 0
var students = 0
var aveStudentAge = 0

var studentYearOfBirths = [2001, 1975, 1992, 1998, 1988, 1994]

var yearOfCurrent = function(){
    var dateNow = new Date()
    var yearNow = Number(dateNow.getFullYear())
    
    return yearNow
}

var aveStudentAgeFun = function (yearOfBorn){
    totalYear =totalYear + yearOfBorn
    students++
    aveStudentAge = (yearOfCurrent()*students - totalYear)/students

}   

studentYearOfBirths.forEach(aveStudentAgeFun)
console.log(Math.floor(aveStudentAge))



















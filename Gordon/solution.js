var captain = 'Jack'

var phrase = `Oh ${captain}, my ${captain}`

var days = ['Thursday', 'Friday', 'Saturday', 'Sunday']

for(var i=0; i < days.length; i++){
    console.log(i, days[i])
}

var num = 16;
for(var i=0; i < 6; i++){
    console.log(`${num} bananas`)
    num -= 2
}

var dream = 'electric sheep'

var brain = {
    energyLevel: 10
        
}

brain.dream = dream

var daydream = { lunch: ['burger', 'beer'] }

brain.daydream = daydream


brain.daydream.lunch.unshift('Pudding')
console.log(brain.daydream.lunch)

var dog = {
    name: 'fluffy',
    age: 4,
    hairColor: 'pink'
  }
  

console.log(Object.keys(dog))

//Odd function

var isOdd = (numberS) => {
            return 0 === numberS % 2 ? true : false
}

// isOdd 2
console.log(isOdd(2))
// isOdd 3
console.log(isOdd(3))

var result = isOdd(6)

console.log(result)


var studentYearOfBirths = [2001, 1975, 1992, 1998, 1988, 1994]



// var averageNum = (numArr) => {
//         let total = 0;
//         let ans = 0;
//         for (var i = 0; i < numArr.length; i++ ){
//             total =+ numArr[i]
                           
//         }
//         ans = total / numArr.length
//         return ans
// }


// var studentans = Math.round(averageNum(studentYearOfBirths))

var dateC = new Date()
    var currentY = dateC.getFullYear()
    
    

var countAge = (year) => {
    var age = year - currentY
    var totalAge += age
    return totalAge
}

studentYearOfBirths.forEach(countAge(item))

console.log(studentYearOfBirths.forEach(countAge))




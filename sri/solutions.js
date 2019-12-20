console.log('Party Quiz')
var printHead = function(str){
console.log("");
console.log(str + ": Output");
console.log("-----------------");
}

printHead("Variables");
var captain = "Jack";
var phrase = "Oh " + captain + ", my " + captain + "!";
console.log(phrase);

printHead("Arrays and Loops");
var printElement = function(item,index){
    console.log(index + " " + item);
}
var days = ['Thrusday', 'Friday', 'Saturday', 'Sunday'];
days.forEach(printElement);

printHead("Js loop");
var start = 16;
var end = 6;
for(var i = start ; i>= end ; i-=2){
    console.log( i + " bananas");
}

printHead("Data Structures - JS Objects");
var brain = {
    energyLevel: 10
}
brain.dream = 'electric sheep';
brain.dayDream = { lunch: ['burger', 'beer'] };
brain.dayDream.lunch.unshift("pudding");
console.log(brain)

printHead("Objects");
var dog = {
    name: 'fluffy',
    age: 4,
    hairColor: 'pink'
}
console.log(Object.keys(dog));

printHead("JS Functions");
var isOdd = function(num){
    return (num % 2 == 1)
}
var result = isOdd(6);
console.log(result);

printHead("Bonus");
var averageAge = 0;
var totalAge = 0;
var calcAge = function(item,index){
    var currentAge = 2019 - item;
    var numberOfPeople = index + 1;
    totalAge = totalAge + currentAge;
    averageAge = totalAge/numberOfPeople;
}
var studentYearOfBirths = [2001, 1975, 1992, 1998, 1988, 1994];
studentYearOfBirths.forEach(calcAge);
console.log("Average age of the Class : " + Math.round(averageAge));
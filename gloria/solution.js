var captain = "Jack. ";
var str1 = "Oh ";
var str2 = "my ";
var str1Re = str1.concat(captain);
var str2Re = str2.concat(captain);
var phrase = str1Re.concat(str2Re);
console.log(phrase);
//Oh Jack. my Jack.
//use the template string
//var phrase = `Oh ${captain}, my ${captain}.`

var days = ["Thursday", "Friday", "Saturday", "Sunday"];
for (var i = 0; i < days.length; i++) {
  console.log([i] + " " + days[i]);
}
/*
0 Thursday
1 Friday
2 Saturday
3 Sunday
*/

var eatBananas = 0;

while (eatBananas < 16) {
  if (eatBananas === 7) {
    break;
  }
  eatBananas = eatBananas + 1;
}
console.log(`I eat ${eatBananas} bananas`);
// I eat 7 bananas

var brain = {
  energyLevel: 10
};
brain.dream = "electric sheep";
//brain['dream'] this dream string as a key , same way
brain.dayDream = "lunch";
var meal = ["burger", "beer"];
meal.unshift("pudding");
brain.dayDream.lunch = meal;
console.log(brain);

var dog = {
  name: "fluffy",
  age: 4,
  hairColor: "pink"
};
console.log(Object.keys(dog));

function isOdd(num) {
  //   if (num % 2 == 1) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  return num % 2 == 1;
}
var result = isOdd(6);

var studentYearOfBirths = [2001, 1975, 1992, 1998, 1988, 1994];
var studentAge = [];
var currentYear = [];

for (var i = 0; i < studentYearOfBirths.length; i++) {
  studentAge.push(currentYear - studentYearOfBirths[i]);
}
var total = 0;
for (var i = 0; i < studentAge.length; i++) {
  total = total + studentYearOfBirths[i];
  var avg = total / studentYearOfBirths.length;
}
console.log(avg);

//
studentYearOfBirths.forEach(birthYear => {
  studentAge.push(currentYear - currentYear);
});
var totalAge = 0;

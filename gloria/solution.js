var captain = "Jack. ";
var str1 = "Oh ";
var str2 = "my ";
var str1Re = str1.concat(captain);
var str2Re = str2.concat(captain);
var phrase = str1Re.concat(str2Re);
console.log(phrase);
//Oh Jack. my Jack.

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

var eatBananas = [
  "bananas",
  "bananas",
  "bananas",
  "bananas",
  "bananas",
  "bananas",
  "bananas",
  "bananas",
  "bananas",
  "bananas",
  "bananas",
  "bananas",
  "bananas",
  "bananas",
  "bananas",
  "bananas"
];
for (var i = 16; i < eatBananas.length; i = i - 2) {
  // if (eatBananas.length === 7 && eatBananas.length ) {
  console.log([i] + " " + "bananas");
  // }
}

var brain = {
  energyLevel: 10
};
brain.dream = "electric sheep";
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

console.log(Object.keys(dog.name));

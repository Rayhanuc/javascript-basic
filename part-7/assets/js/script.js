// JS Array

var name1 = 'Abul Kalam';
var name2 = 'Rasel Ahmed';
var name3 = 'Raisa Ahmed';

var aName = [
  'Rasel Ahmed',
  'Raisa Ahmed',
  34,
  'Bangladesh'
]

aName.push("Test") // New item will in array
aName.pop() // Last Item will be remove
aName.shift() // First array item will be remove

for (var i = 0; i< aName.length; i++) {
  console.log(aName[i]);
}

console.log("Bangadesh index no is: " + aName.indexOf('Raisa Ahmed'))

var bName = [
  'Banana',
  'Mango',
  'Orange',
  'Dragonrfruit',
  'Dates',
  'Cocunut',
  'Pineapple'
]


// for (var i = 0; i< bName.length; i++) {
//   console.log(bName[i]);
// }

bName.splice(1,2)

console.log(bName)
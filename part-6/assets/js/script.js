// Switch Loop

var day = 'Saturday';

switch (day) {
  case 'Saturday':
    console.log("This is saturday");
    break;

  case 'Sunday':    
    console.log("This is Holiday");
    break;
    
  case 'Friday':    
    console.log("This is friday");
    break;

  default:
    console.log("This is my default day");
    break;
}

var day2 = 'Sunday';

switch (day2) {
  case 'Saturday':
    console.log("This is saturday");
    break;

  case 'Sunday':    
    console.log("This is Holiday");
    break;
    
  case 'Friday':    
    console.log("This is friday");
    break;

  default:
    console.log("This is my default day");
    break;
}


var day3 = 'Friday';

switch (day3) {
  case 'Saturday':
    console.log("This is saturday");
    break;

  case 'Sunday':    
    console.log("This is Holiday");
    break;
    
  case 'Friday':    
    console.log("This is friday");
    break;

  default:
    console.log("This is my default day");
    break;
}


var day4 = '';

switch (day4) {
  case 'Saturday':
    console.log("This is saturday");
    break;

  case 'Sunday':    
    console.log("This is Holiday");
    break;
    
  case 'Friday':    
    console.log("This is friday");
    break;

  default:
    console.log("This is my default day");
    break;
}



// For loop
console.log("==== For loop ====");
for (var i = 0; i < 10; i++) {
  console.log(i + ' My another text ');  
}

console.log("==== DoWhile loop ====");
// DoWhile loop
var number = 1;

do {
  console.log(number);
  number++;
} while (number < 10);

console.log("==== While Loop ====");
// While Loop
var number2 = 1;
while (number2 < 10) {
  console.log(number2);
  number2++;
}
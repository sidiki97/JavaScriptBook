
function times(number1, number2) {
  let result = number1 * number2;
  console.log(result);
  return result;
}



/*
console.log(factorial(8));

for (var i = 0; i < 5;) {
  
}

function randomNumberBetween(min, max) {
  return result = Math.floor(Math.random() * (max - min + 1) + min);
  
}

let tries = 0;
let result;


do {
  result = randomNumberBetween(1, 6);
  tries += 1;
} while (result <= 2);

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');

let answer;
let q = require('readline-sync');
do {
  answer = q.question("Do you want to do this again? ");
} while (answer == 'y');

*/

function factorial(number) {
  if (number == 1) {
    return 1;
  }
  return number * factorial(number - 1);
}

console.log(factorial(5));
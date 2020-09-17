
// Practice ternary operator
/*
let me = 1;
let you = 2;

me == you ? 'True that' : 'False bruh';


let a = 'this' === 'that';

switch (a) {
  case 0:
    console.log(false);
    break;
  case 5:
    console.log(true);

}


function evenOrOdd(num) {
  num % 2 == 0 ? console.log('even') : console.log('odd');
}

evenOrOdd(4);


function caps(original) {
  
  return original.length > 10 ? original.toUpperCase() : original;
}

let input = require('readline-sync');
let userInput = input.question('Enter phrase: ');

console.log(caps(userInput));

*/

function numberRange(num) {
  if (num >= 0 && num <= 50) {
    console.log(`${num} is between 0 and 50`);
  }
  else if (num > 50 && num <= 100) {
    console.log(`${num} is between 51 and 100`);
  }
  else if (num > 100) {
    console.log(`${num} is greater than 100`);
  }
  else{
    console.log(`${num} is less than 0`);
  }
}

let input = require('readline-sync');
let userInput = input.questionInt('Enter number: ');

numberRange(userInput);
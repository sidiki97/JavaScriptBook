
let readInput = require('readline-sync');
let name = readInput.question('What is your name? ');
console.log(`Hello, ${name}`);

// Functions

function firstName() {
  let firstName = readInput.question('First name: ');
  return firstName;
}

function lastName() {
  let lastName = readInput.question('Last name: ');
  return lastName;
}

console.log(`Hello ${firstName()} ${lastName()}!`);

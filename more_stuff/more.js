

let inputObj = require('readline-sync');
let inputList = [];
/*
for (let i = 0; i < 4; i += 1) {
  inputList[i] = inputObj.questionInt("Enter number for list :");
  if (1 / inputList[i] == -Infinity) {
    inputList.pop();
    break;
  }
}
*/

let i = -1;
/*
do {
  
  i += 1;
  inputList[i] = inputObj.questionInt("Number: ");
  

} while (1 / inputList[i] != -Infinity);
*/
inputList.pop();

// console.log(inputList);

function findMax(list) {
  let max = list[0];
  for (let i = 1; i < list.length; i += 1) {
    if (list[i] > max) {
      max = list[i];
    }
  }
  return max;
}

// console.log(findMax(inputList));

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(array, regex) {
  return array.filter(string => regex.test(string));
}

// console.log(allMatches(words, /lab/)); // ['laboratory', 'flab', 'elaborate']

function isNotANumber(num) {
  if (num) {
    return true;
  }
  else {
    return false;
  }
}

// console.log(isNotANumber(NaN));


//console.log(4 * 5 + 3 ** 2 / 10);


let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

function extractLanguage(locale) {
  if (/US/.test(locale)) {
    return 'US';
  } else if (/gb/.test(locale)) {
    return 'GB';
  }
}

function myFunction() {
  let a = 1;

  if (true) {
    //console.log(a);
    let a = 2;
    //console.log(a);
  }
}
('sthi').split()
myFunction();

function isBlank(string) {
  return string.includes(' ') || string.length == 0;
}

function greeting() {
  return 'Good morning';
}

function recipient() {
  return 'Launch School';
}

function greet() {
  console.log(`${greeting()}, ${recipient()}`);
}



function calculateBMI(heightCm, weightInKilograms) {
  let heightInMeters = heightCm / 100;
  bmi = weightInKilograms / heightInMeters**2;
  
  return String(bmi.toFixed(2));
}

// console.log(calculateBMI(177.8, 102))

const template = 'I VERB NOUN.';

let sentence = (verb, noun) => template.replace('VERB', verb).replace('NOUN', noun);




let initGame = () => ( {level: 1, score: 0} );

let game = initGame();

let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  // add code here
  greet: function(name) {
    console.log(`Hej, ${name}`);
  }
  
};

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

let output = {};
nestedArray.forEach(array => output[array[0]] = array[1])
// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }

function clone(obj) {
  return Object.assign({}, obj);
}

let person = {
  title: 'Duke',
  name: {
    value: 'Nukem',
    isStageName: true
  },
  age: 33
};

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33

console.log(person.name.isStageName);       // false
console.log(clonedPerson.name.isStageName);
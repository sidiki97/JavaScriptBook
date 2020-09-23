

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

console.log(isNotANumber(NaN));




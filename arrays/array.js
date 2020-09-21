
let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];



// Q2.
myArray.forEach(element => { if (element % 2 == 0) {
  //console.log(element);
}})

// Q3.
let myArrays = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArrays.forEach(function(element) {
  element.forEach(function(item) {
    if (item % 2 == 0) {
      // console.log(item);
    }
  })
})

//newArray = myArray.map(element => element % 2 == 0 ? 'even' : 'odd');

//newArray.forEach(element => console.log(element));

let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

function removeNonInteger(a) {
  return a.filter(value => Number.isInteger(value));
}
let newArray = removeNonInteger(array);
// console.log(newArray); // => [1, 3, -4]


let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array) {
  return array.map(term => term.length).filter(value => { if (value % 2 !== 0) { return value}})
}

// console.log(oddLengths(arr)); // => [1, 5, 3]



// Q.7

let numbers = [3, 5, 7];

function sumOfSquares(numbers) {
  return numbers.reduce((accumulator, value) => { return value * value + accumulator; }, 0);
}

console.log(sumOfSquares(numbers));


function oddLengthsR(array) {
  return array.reduce((accumulator, value) => { if (value.length % 2 != 0) { accumulator.push(value.length); } return accumulator; }, [] );
}

//console.log(oddLengthsR(arr));
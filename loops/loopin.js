
function times(number1, number2) {
  let result = number1 * number2;
  console.log(result);
  return result;
}

function factorial(number) {
  let total = 1;
  for (var i = 1; i <= number; i++) {
    total = total * i;
  }

  return total;
}

console.log(factorial(8));

for (var i = 0; i < 5;) {
  
}
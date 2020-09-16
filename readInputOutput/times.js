
function times(number1, number2) {
  let result = number1 * number2;
  console.log(result);
  return result;
}

one_factorial = times(1, 1);
two_factorial = times(one_factorial, 2);
three_factorial = times(two_factorial, 3);
four_factorial = times(three_factorial, 4);
five_factorial = times(four_factorial, 5);
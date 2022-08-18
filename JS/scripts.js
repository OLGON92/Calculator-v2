// business logic
const add = (number1, number2) => {
  return number1 + number2;
}

const subtract = (number1, number2) => {
  return number1 - number2;
}

const mult = (number1, number2) => {
  return number1 * number2;
}

const division = (number1, number2) => {
  return number1 / number2;
}
// user interface logic 
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));




window.alert("The sum is " + add(number1,number2) + "." + "The difference is" + subtract(number1,number2) + "." + "The multiplication of both numbers is" + mult(number1, number2) + "." + "The division of both numbers is" + division(number1,number2) + ".");

console.log("Calculator: Math")

// -----------------------------------------------------------------------------

const add = (number1, number2) => {
  if (typeof number1 === "number" && typeof number2 === "number")
    return number1 + number2
  else return "One or more of the parameter(s) is/are not a number"
}

const substract = (number1, number2) => number1 - number2
const multiply = (number1, number2) => number1 * number2
const divide = (number1, number2) => number1 / number2
const modulo = (number1, number2) => number1 % number2
const power = (number1, number2) => number1 ** number2

// -----------------------------------------------------------------------------

const math = {
  add: (x, y) => x + y,
  substract: (x, y) => x - y,
  divide: (x, y) => x / y,
  modulo: (x, y) => x % y,
  power: (x, y) => x ** y
}

const something = {
  add: (x, y) => x + y + "!"
}

// -----------------------------------------------------------------------------

const result_add = add(10, 20)
const result_power = power(2, 3)
const result_subtract = substract(result_add, result_power)

console.log(result_subtract)

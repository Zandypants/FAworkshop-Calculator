/*
Calculator workshop
- Create the following functions
  - getSum - adds two numbers
  - getDividend - divides two numbers
  - getProduct - multiplies two numbers
  - getDifference - subtracts two numbers
  - inverseNumber - returns the number as a positive or negative based on input
  - convertPercentageToDecimal - takes in a percentage and returns the number as a decimal
  - getRandomInteger - gets a random integer
  - getPi - returns 3.14
  - getRemainder - returns the remainder if two numbers are divided
  - getSquareRoot - returns the square root of a number
- Do not show -0
- Return a helpful message instead of NaN if there is an error
When done writing the functions, invoke the functions multiple times and use the results to call other functions
*/


function isInvalidNum(num) {
  return typeof (num) !== 'number' || Number.isNaN(num);
}

function getErrorMsgForNum(num) {
  let errorSrc = typeof (num);
  if (errorSrc === "number") errorSrc = num;
  return `Error: ${errorSrc} is not a number!`;
}

function getSum(a, b) {
  // validation checks
  if (isInvalidNum(a)) return getErrorMsgForNum(a);
  if (isInvalidNum(b)) return getErrorMsgForNum(b);

  // sum
  return a + b;
}

function getQuotient(a, b) {
  // validation checks
  if (isInvalidNum(a)) return getErrorMsgForNum(a);
  if (isInvalidNum(b)) return getErrorMsgForNum(b);
  if (b === 0) return "Error: Cannot divide by 0!";

  // quotient
  return a / b;
}

function getProduct(a, b) {
  // validation checks
  if (isInvalidNum(a)) return getErrorMsgForNum(a);
  if (isInvalidNum(b)) return getErrorMsgForNum(b);

  // product
  return a * b;
}

function getDifference(a, b) {
  // validation checks
  if (isInvalidNum(a)) return getErrorMsgForNum(a);
  if (isInvalidNum(b)) return getErrorMsgForNum(b);

  // difference
  return a - b;
}

function inverseNumber(num) {
  // validation check
  if (isInvalidNum(num)) return getErrorMsgForNum(num);

  // inverse
  return num * -1;
}

function convertPercentageToDecimal(percent) {
  // validation check
  if (isInvalidNum(percent)) return getErrorMsgForNum(percent);

  // conversion
  return percent / 100;
}

function getRandomInteger(min, max) {
  // validation checks
  if (isInvalidNum(min)) return getErrorMsgForNum(min);
  if (isInvalidNum(max)) return getErrorMsgForNum(max);
  if (min > max) return "Error: min should be less than max!";

  // force integer inputs
  min = Math.floor(min);
  max = Math.ceil(max);

  // randomizer
  return Math.floor(Math.random() * (max - min) + min);
}

function getPi() {
  return 3.14;
}

function getRemainder(a, b) {
  // validation checks
  if (isInvalidNum(a)) return getErrorMsgForNum(a);
  if (isInvalidNum(b)) return getErrorMsgForNum(b);
  if (b === 0) return "Error: Cannot divide by 0!";

  // remainder
  return a % b;
}

function getSquareRoot(num) {
  // validation checks
  if (isInvalidNum(num)) return getErrorMsgForNum(num);
  if (num < 0) return "Error: Negative numbers do not have a real square root!";

  // square root
  return Math.sqrt(num);
}


/////////////////
//// Testing ////
/////////////////
function runTests() {
  function errorLog(result) {
    if (isInvalidNum(result)) {
      console.log(result);
      return true;
    }
    return false;
  }

  let a = 2;
  let b = 4;
  let result = getSum(a, b);
  if (!errorLog(result))
    console.log(`${a} + ${b} = ${result}`);

  a = result;
  result = getQuotient(a, b);
  if (!errorLog(result))
    console.log(`${a} / ${b} = ${result}`);

  b = result;
  result = getProduct(a, b);
  if (!errorLog(result))
    console.log(`${a} * ${b} = ${result}`);

  b = a;
  a = result;
  result = getDifference(a, b);
  if (!errorLog(result))
    console.log(`${a} - ${b} = ${result}`);

  a = result;
  result = getDifference(a, b);
  if (!errorLog(result))
    console.log(`${a} inversed is ${inverseNumber(a)}`);

  a = result;
  result = convertPercentageToDecimal(a);
  if (!errorLog(result))
    console.log(`${a}% is ${result}`);

  a = result;
  result = getRandomInteger(a, b);
  if (!errorLog(result))
    console.log(`random int bw [${a}, ${b}) : ${result}`);

  result = getPi();
  if (!errorLog(result))
    console.log(`PI : ${result}`);

  a = b;
  b = result;
  result = getRemainder(a, b);
  if (!errorLog(result))
    console.log(`${result} is the remainder of ${a} / ${b}`);

  a = result;
  result = getSquareRoot(a);
  if (!errorLog(result))
    console.log(`${result} is the square root of ${a}`);
}

runTests();
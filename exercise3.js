// Exercise 3: Move last three characters to the start of a given string.
// The string length must be greater than or equal to three.

function right(str) {
  if (str.length < 3) {
    return str;
  }
  const lastThree = str.slice(-3);
  const rest = str.slice(0, -3);
  return lastThree + rest;
}

console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));

if (typeof module !== 'undefined') {
  module.exports = { right };
}

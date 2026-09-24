// Exercise 2: Find the largest of three given integers.

function max(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}

console.log(max(1, 0, 1));
console.log(max(0, -10, -20));
console.log(max(1000, 510, 440));

if (typeof module !== 'undefined') {
  module.exports = { max };
}

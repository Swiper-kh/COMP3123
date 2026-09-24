// Exercise 1: Capitalize the first letter of each word of a given string.

function capitalizeWords(str) {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

console.log(capitalizeWords("javascript exercises"));
console.log(capitalizeWords("java script"));
console.log(capitalizeWords("hi hi hello"));

if (typeof module !== 'undefined') {
  module.exports = { capitalizeWords };
}

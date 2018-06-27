// ---- Convert Celsius to Fahrenheit ---- //

function convertToF(celsius) {
  let fahrenheit = (9 / 5 * celsius) + 32;
  return fahrenheit;
}
console.log(`fahrenheit: ${convertToF(30)}`);

// ---- Reverse a String ---- //

function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(`Hello reversed: ${reverseString("hello")}`);

// ---- Factorialize a Number ---- //

function factorialize(num) {
  if (num === 0)
    return 1;

  for (let i = num - 1; i >= 1; i--) {
    num = num * i;
  }
  return num;
}
console.log(`Factorization of 5: ${factorialize(5)}`);

// ---- Find the Longest Word in a String ---- //

function findLongestWordLength(str) {
  str = str.split(' ').reduce((x, y) => x.length > y.length ? x : y);
  return str.length;
}
console.log(`The Longest word has a length of ${findLongestWordLength("The quick brown fox jumped over the lazy dog")}`);
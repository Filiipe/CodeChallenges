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

// ---- Return Largest Numbers in Arrays ---- //

function largestOfFour(arr) {
  arr = arr.map(sub => sub.reduce((x, y) => y > x ? y : x));
  return arr;
}
console.log(`The largest number of four arrays: ${largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])}`);


// ---- Confirm the Ending ---- //

function confirmEnding(str, target) {
  const endOfWord = str.substr(str.length - target.length);
  return endOfWord === target;
}
console.log(`Bastian ends with 'n'? ${confirmEnding("Bastian", "n")}`);

// ----  Repeat a String Repeat a String ---- //

function repeatStringNumTimes(str, num) {
  return num < 0 ? '' : Array(num + 1).join(str);
}
console.log(`Repeating strings: ${repeatStringNumTimes("abc", 3)}`);

// ----  Truncate a String ---- //

function truncateString(str, num) {
  return str.length > num ? str.slice(0, (num > str.length ? num - str.length : num)) + '...' : str; 
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
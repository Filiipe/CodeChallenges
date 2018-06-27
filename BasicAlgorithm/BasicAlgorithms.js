// Convert Celsius to Fahrenheit

function convertToF(celsius) {
  let fahrenheit = (9/5 * celsius) + 32;
  return fahrenheit;
}
console.log(`fahrenheit: ${convertToF(30)}`);

// Reverse a String
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(`Hello reversed: ${reverseString("hello")}`);
// Convert Celsius to Fahrenheit

function convertToF(celsius) {
  let fahrenheit = (9/5 * celsius) + 32;
  return fahrenheit;
}
console.log(`fahrenheit: ${convertToF(30)}`);
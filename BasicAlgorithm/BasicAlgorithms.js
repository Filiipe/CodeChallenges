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
  if (str.length > num)
    return str.slice(0, (num > str.length ? num - str.length : num)) + '...';
  return str;
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

// ----  Finders Keepers ---- //

function findElement(arr, func) {
  arr = arr.filter(func);
  return arr[0];
}
console.log(`Finders Keepers: ${findElement([1, 2, 3, 4], num => num % 2 === 0)}`);

// ---- Boo who ---- //

function booWho(bool) {
  if (bool === true || bool === false)
    return true;
  return false;
}
console.log(`Boo Who: ${booWho(1)}`);

// ---- Title Case a Sentence ---- //

function titleCase(str) {
  str = str.toLowerCase().split(' ');
  str = str.map(str => str.replace(str.charAt(0), str.charAt(0).toUpperCase())).join(' ');
  return str;
}
console.log(`Title Case a Sentence: ${titleCase("I'm a lIttle teA pot")}`);

// ---- Slice and Splice ---- //

function frankenSplice(arr1, arr2, n) {
  let copyArr = arr2.slice(0, arr2.length);
  copyArr.splice(n, 0, ...arr1);
  return copyArr;
}

console.log(`Slice and Splice: [${frankenSplice([1, 2, 3], [4, 5, 6], 1)}]`);

// ---- Falsy Bouncer ---- //

function bouncer(arr) {
  let noFalsy = [];
  arr = arr.filter(arr => {
    if (!!arr)
      noFalsy.push(arr);
  });
  return noFalsy;
}
console.log(`Falsy Bouncer: ${bouncer([7, "ate", "", false, 9])}`);

// ---- Where do I Belong ---- //

function getIndexToIns(arr, num) {
  function sorting(x, y) {
    return x - y;
  }
  arr.push(num);
  arr.sort(sorting);
  return arr.indexOf(num);
}
console.log(`Where do I Belong: ${getIndexToIns([10, 20, 30, 40, 50], 35)}`);

// ---- Mutations ---- //

function mutation(arr) {
  arr = arr.join(' ').toLowerCase().split(' ');
  for(let i = 0; i < arr[1].length; i++) {
    if(arr[0].indexOf(arr[1][i]) === -1)
      return false;
  }
  return true;
}
console.log(`Mutations: ${mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])}`);


// ---- Chunky Monkey ---- //

function chunkArrayInGroups(arr, size) {
  let newChunky = [];
  for(let i = 0; i < arr.length; i+=size){
    newChunky.push(arr.slice(i, i+size));
  }
  return newChunky;
}

console.log(`Chunky Monkey: ${chunkArrayInGroups(["a", "b", "c", "d"], 2)}`);

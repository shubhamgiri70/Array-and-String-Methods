let words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
  "rhythm",
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.

function findLongestWord(array) {
  return [...array].sort((a, b) => a.length - b.length).pop();
}

// - Convert the above array "words" into an array of length of word instead of word.

words.map((word) => word.length);

// - Create a new array that only contains word with atleast one vowel.

let newArr = words.filter((word) => {
  if (
    word.includes("a") ||
    word.includes("e") ||
    word.includes("i") ||
    word.includes("o") ||
    word.includes("u")
  ) {
    return word;
  }
});

// - Find the index of the word "rhythm"

words.indexOf("rhythm"); // 7

// - Create a new array that contians words not starting with vowel.

let newArray = words.filter((word) => {
  if (
    !word.startsWith("a") ||
    word.startsWith("e") ||
    word.startsWith("i") ||
    word.startsWith("o") ||
    word.startsWith("u")
  ) {
    return word;
  }
});

// - Create a new array that contians words not ending with vowel

let newArray = words.filter((word) => {
  if (
    !word.endsWith("a") ||
    word.endsWith("e") ||
    word.endsWith("i") ||
    word.endsWith("o") ||
    word.endsWith("u")
  ) {
    return word;
  }
});

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers

function sumArray(array) {
  return array.reduce((acc, cv) => acc + cv, 0);
}

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]

function multiplyByThree(array) {
  return array.filter((num) => num % 3 === 0);
}

// - Create a new array that contains only even numbers

function EvenNumbers(array) {
  return array.filter((num) => num % 2 === 0);
}

// - Create  a new array that contains only odd numbers.

function oddNumbers(array) {
  return array.filter((num) => num % 2 !== 0);
}

// - Create a new array that should have true for even number and false for odd numbers.

function oddEvenNumbers(array) {
  return array.map((num) => num % 2 === 0);
}

// - Sort the above number in assending order.

numbers.sort((a, b) => a - b);

// - Does sort mutate the original array?

// ```js
// yes, sort mutate the original array
// ```;

// - Find the sum of the numbers in the array.

let sum = numbers.reduce((acc, cv) => {
  acc = acc + cv;
  return acc;
}, 0);

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

function averageNumbers(array) {
  let average = numbers.reduce((acc, cv) => acc + cv, 0) / array.length;
  return average;
}

let strings = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

function averageWordLength(words) {
  return (
    words.map((word) => word.length).reduce((acc, cv) => acc + cv, 0) /
    words.length
  );
}

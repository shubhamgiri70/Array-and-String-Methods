let fruits = ["Banana", "Orange", "Apple", "Mango"];

// Add a new element ('Papaya') into fruits array at end

fruits.push("Papaya");

// Remove the last element from fruits array

fruits.pop();

// Log the current length of fruits array

console.log(fruits.length);

// Remove the first element from fruits and log the value of fruits (use delete arr[0])

delete fruits[0];
console.log(fruits);

// Log the element on index 0 and 1

console.log(fruits[0]);
console.log(fruits[1]);

// If the element at 0 index is undefined and index 1 is 'Banana' shift all the values to one lower index (use shift method)

let fruits = [undefined, "Banana", "Orange", "Apple", "Mango"];

fruits.shift();

console.log(fruits); //  ['Banana', 'Orange', 'Apple', 'Mango']

// Add a new element to the start ('Guava') and shift the index of all other to one higher value

fruits.unshift("Guava"); // ['Guava', 'Banana', 'Orange', 'Apple', 'Mango']

// Add a new element to the start ('Dragon Fruit') and shift the index of all other to one higher value

fruits.unshift("Dragon Fruit"); // ['Dragon Fruit', 'Guava', 'Banana', 'Orange', 'Apple', 'Mango']

// Log true or false based on the value at index 0 and 1 is 'Dragon Fruit' and 'Guava' or not

console.log(fruits[0].includes("Dragon Fruit"));
console.log(fruits[1].includes("Guava"));

// Update the value of index 1 to `Pears`

fruits[1] = "Pears";

// Add the 'Kiwi' and 'Lemon' to the index 1 and 2 and shift the other element to next index (use splice to add element)

fruits.splice(1, 0, "Kiwi", "Lemon");

// Remove (slice) all the element from index 5

fruits.slice(5);

// Create another array named moreFruits with values ['Berries', 'Melons']

let moreFruits = ["Barries", "Melons"];

// Concat moreFruits into fruits array (re-assign so the value gets updated)

allFruits = fruits.concat(moreFruits);

// Log the name of all fruit in console

console.log(allFruits); // ['Pears', 'Kiwi', 'Lemon', 'Barries', 'Melons']

// Convert each fruit name to lowercase and log it

allFruits.forEach((Element) => console.log(Element.toLocaleLowerCase()));

// Convert all fruits name into lowercase and store in new array named lowercaseFruits

let lowercaseFruits = allFruits.map((Element) => Element.toLocaleLowerCase());

// Convert all fruits name into uppercase and store in new array named uppercaseFruits

let uppercaseFruits = allFruits.map((Element) => Element.toUpperCase());

let numbers = [1, 2, [3, 4]];
let numbersTwo = [1, 2, [3, 4, [5, 6]]];
let numbersThree = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

// Convert the numbers array to one level element. Remove sub-arrays to individual elements and log them

console.log(numbers.flat());

// Convert the numbersTwo array to one level element. Remove all sub-arrays to individual elements and log them.
// (for multiple level flat accepts argument by default it's 1 `array.flat(2)`)

console.log(numbersTwo.flat(2));

// Convert the numbersThree array to one level element.
// Remove all sub-arrays to individual elements, log them and update the value of numbersThree to the new flat array.

console.log(numbersThree.flat(Infinity));
let newNoThree = numbersThree.flat(Infinity);

// Use forEach to log all the elements of numberThree array

newNoThree.forEach((Element) => console.log(Element));

// Create a new variable named doubleNumbers that store the numberThree array (each element should be multiplied by 2). Use map

let doubleNumbers = newNoThree.map((Element) => console.log(Element * 2));

// Create a new variable named tripleNumbers that store the numberThree array (each element should be multiplied by 3). Use map

let tripleNumbers = newNoThree.map((Element) => console.log(Element * 3));

// Create a new variable named halfNumbers that store the numberThree array (each element should be divided by 2). Use map

let halfNumbers = newNoThree.map((Element) => console.log(Element / 2));

// Create a new variable named oddNumbers that store all the odd numbers in numbersThree array

let oddNumbers = newNoThree.filter((Element) => {
  if (Element % 2 !== 0) {
    return Element;
  }
});

// Create a new variable named evenNumbers that store all the even numbers in numbersThree array

let evenNumbers = newNoThree.filter((Element) => {
  if (Element % 2 === 0) {
    return Element;
  }
});

// Find the index of 10 in numbersThree array

newNoThree.indexOf(10); // 9

// Reverse the values of numbersThree array

newNoThree.reverse();

// Reverse the values of numbersTwo array

let newNoTwo = numbersTwo.flat(Infinity);

newNoTwo.reverse();

// Join all fruits with '-', convert to uppercase and log it

console.log(allFruits.join("-").toUpperCase());

// Join all fruits with '&', convert to lowercase and log it

console.log(allFruits.join("&").toLowerCase());

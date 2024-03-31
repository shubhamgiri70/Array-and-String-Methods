let message = "If you are still thinking the answer is no!";

// Log the length of the variable message like `The length of [message] is [length]`

console.log(`the length of ${message} is ${message.length}`);

// Log the character at index 0 of the variable message like `The first character of [message] is [character]`

console.log(`the first character of ${message} is ${message.charAt(0)}`);

// Log the last character of message using length like `The last character of [message] is [character]`

console.log(
  `The last character of ${message} is ${message.charAt(message.length - 1)}`
);

// Log the index of word "you" in message

console.log(message.indexOf("you"));

// Log the index of word "still" in message

console.log(message.indexOf("still"));

// Log the index of word "answers" in message

console.log(message.indexOf("answers"));

// Log true or false based on whether the word "answers" exist in message or not

console.log(message.includes("answers"));

// Log true or false based on whether the word "they" exist in message or not

console.log(message.includes("they"));

// Log true or false based on whether the word "is" exist in message or not

console.log(message.includes("is"));

// Log true or false based on whether the word "Is" exist in message or not

console.log(message.includes("Is"));

// Check and log whether the word from index 3 to 6 is "you" or not (use slice)

console.log(message.slice(3, 6) === "you");

// Check and log whether the word from index 7 to 8 is "a" or not

console.log(message.slice(7, 8) === "a");

// Check and log whether the last 3 character in message is "no!" or not (you can use -3 in slice)

let lastThreeChar = message.slice(-3);

if (lastThreeChar === "no!") {
  console.log("The last 3 characters in message are 'no!'.");
} else {
  console.log("The last 3 characters in message are not 'no!'.");
}

// Check and log whether the last 5 character in message is "no!" or not

let lastFiveChar = message.slice(5);

if (lastFiveChar === "no!") {
  console.log("The last 3 characters in message are 'no!'.");
} else {
  console.log("The last 3 characters in message are not 'no!'.");
}

// Log the message variable, all in lowecase

console.log(message.toLowerCase());

// Log the message variable, all in uppercase

console.log(message.toUpperCase());

// Replace the word "are" to "can't", store it in a new variable named `newMessage` and log it.

let newMessage = message.replace("are", "can't");

console.log(newMessage);

// Replace the word "still" to "" (empty) using newMessage variable, and re-assign the output to the variable `newMessage` and log it.

let newMessage = message.replace("still", "");

console.log(newMessage);

// Replace the word "thinking" to "decide" using newMessage variable, and re-assign the output to the variable `newMessage` and log it.

let newMessage = message.replace("thinking", "decide");

console.log(newMessage);

// Log all the characters from the message variable (you can use for..of loop on string)

for (let character of message) {
  console.log(character);
}

// Split all the words in message (split by " " space) and store it in a variable messageArray

let messageArray = message.split(" ");

console.log(messageArray);

// Log all the words of messageArray

let messageArray = message.split(" ");

for (let word of messageArray) {
  console.log(word);
}

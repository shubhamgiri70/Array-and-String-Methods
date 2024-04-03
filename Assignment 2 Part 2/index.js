let persons = [
  { name: "John", grade: 8, sex: "M" },
  { name: "Sarah", grade: 12, sex: "F" },
  { name: "Bob", grade: 16, sex: "M" },
  { name: "Johnny", grade: 2, sex: "M" },
  { name: "Ethan", grade: 4, sex: "M" },
  { name: "Paula", grade: 18, sex: "F" },
  { name: "Donald", grade: 5, sex: "M" },
  { name: "Jennifer", grade: 13, sex: "F" },
  { name: "Courtney", grade: 15, sex: "F" },
  { name: "Jane", grade: 9, sex: "F" },
  { name: "John", grade: 17, sex: "M" },
  { name: "Arya", grade: 14, sex: "F" },
];

// Create an array peopleName and store value of name key from persons array

let peopleName = persons.map((person) => {
  return person.name;
});

console.log(peopleName);

// Create an array peopleGrade and store the value of grade key from persons array

let peopleGrade = persons.map((person) => {
  return person.grade;
});

console.log(peopleGrade);

// Create an array peopleSex and store the value of sex key from persons array

let peopleSex = persons.map((person) => {
  return person;
});

console.log(peopleSex);

// Log the filtered named of people in peopleName that starts with 'J' or 'P'

let filteredpersons = persons.filter((person) => {
  return person.name.startsWith("J") || person.name.startsWith("P");
});

let filteredName = filteredpersons.map((person) => person.name);

console.log(filteredName);

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'

let filteredpersons = persons.filter((person) => {
  return person.name.startsWith("A") || person.name.startsWith("C");
});

let filteredNameLength = filteredpersons.map((person) => person.name.length);

consolel.log(filteredNameLength);

// Log all the filtered male ('M') in persons array

let filteredMale = persons.filter((person) => {
  if (person.sex === "M") {
    return person;
  }
});

// Log all the filtered female ('F') in persons array

let filteredFemale = persons.filter((person) => {
  if (person.sex === "F") {
    return person;
  }
});

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array

let filteredFemale = persons.filter(
  (person) =>
    person.sex === "F" &&
    person.name.startsWith("C") &&
    person.name.startsWith("J")
);

// Log all the even numbers from peopleGrade array

let evenGrade = persons.filter((person) => {
  if (person.grade % 2 === 0) {
    return person;
  }
});

console.log(evenGrade);

// Find the first name that starts with 'J' in persons array and log the object

let firstName = persons.find((person) => {
  if (person.name.startsWith("J")) {
    return person;
  }
});

// Find the first name that starts with 'P' in persons array and log the object

let firstName = persons.find((person) => {
  if (person.name.startsWith("P")) {
    return person;
  }
});

// Find the first name that starts with 'J', grade is greater than 10 and is a female

let firstName = persons.find((person) => {
  if (person.name.startsWith("J") && person.grade > 10 && person.sex === "F") {
    return person;
  }
});

// Filter all the female from persons array and store in femalePersons array

let filteredFemale = persons.filter((person) => {
  if (person.sex === "F") {
    return person;
  }
});

let femalePersons = filteredFemale.map((person) => person.name);

console.log(femalePersons);

// Filter all the male from persons array and store in malePersons array

let filteredMale = persons.filter((person) => {
  if (person.sex === "M") {
    return person;
  }
});

let malePersons = filteredMale.map((person) => person.name);

console.log(malePersons);

// Find the sum of all grades and store in gradeTotal

let gradeTotal = persons.reduce((acc, person) => acc + person.grade, 0);

// Find the average grade

let averageGrade =
  persons.reduce((acc, person) => acc + person.grade, 0) / persons.length;

// Find the average grade of male

let filteredMale = persons.filter((person) => {
  if (person.sex === "M") {
    return person;
  }
});

let averageGradeOfMale =
  filteredMale.reduce((acc, person) => acc + person.grade, 0) / persons.length;

// Find the average grade of female

let filteredFemale = persons.filter((person) => {
  if (person.sex === "F") {
    return person;
  }
});

let averageGradeOfFemale =
  filteredFemale.reduce((acc, person) => acc + person.grade, 0) /
  persons.length;

// Find the highest grade

let peopleGrade = persons.map((person) => {
  return person.grade;
});

let highestGrade = peopleGrade.sort((a, b) => a - b).pop();

// Find the highest grade in male

let filteredMale = persons.filter((person) => {
  if (person.sex === "M") {
    return person;
  }
});

let maleGrade = filteredMale.map((person) => person.grade);

let highestMaleGrade = maleGrade.sort((a, b) => a - b).pop();

// Find the highest grade in female

let filteredFemale = persons.filter((person) => {
  if (person.sex === "F") {
    return person;
  }
});

let femaleGrade = filteredFemale.map((person) => person.grade);

let highestFemaleGrade = femaleGrade.sort((a, b) => a - b).pop();

// Find the highest grade for people whose name starts with 'J' or 'P'

let filteredpersons = persons.filter((person) => {
  return person.name.startsWith("J") || person.name.startsWith("P");
});

let filteredpersonsGrade = filteredpersons.map((person) => person.grade);

let filteredpersonsHighestGrade = filteredpersonsGrade
  .sort((a, b) => a - b)
  .pop();

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?

let peopleGrade = persons.map((person) => {
  return person.grade;
});

peopleGrade.sort((a, b) => a - b);

// Sort the peopleGrade in descending order

peopleGrade.sort((a, b) => b - a);

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array

[...peopleGrade].sort((a, b) => b - a);

// Sort the array peopelName in ascending `ABCD..Za....z`

let peopleName = persons.map((person) => {
  return person.name;
});

peopleName.sort();

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array

[...peopleName].sort();

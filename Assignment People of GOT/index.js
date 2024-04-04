// NOTE: You can not use reduce methods to solve this exercise

// Testing your result after writing your function

function countAllPeople(got) {
  let totalPeople = 0;
  got.houses.forEach((house) => {
    totalPeople += house.people.length;
  });
  return totalPeople;
}

// Output should be 33

function peopleByHouses(got) {
  const peopleCounts = {};
  got.houses.forEach((house) => {
    const count = house.people.length;
    peopleCounts[house.name] = count;
  });
  return peopleCounts;
}

// Output should be
//{Arryns: 1, Baratheons: 6, Dothrakis: 1, Freys: 1, Greyjoys: 3, Lannisters: 4,Redwyne: 1,Starks: 8,Targaryens: 2,Tullys: 4,Tyrells: 2}

function everyone() {
  const allNames = [];
  got.houses.forEach((house) => {
    house.people.forEach((person) => {
      allNames.push(person.name);
    });
  });
  return allNames;
}

// Output should be
//["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "King Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy", "Margaery (Tyrell) Baratheon", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn", "Edmure Tully", "Brynden Tully", "Olenna (Redwyne) Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

function nameWithS() {
  const final = [];
  got.houses.forEach((house) => {
    house.people.forEach((person) => {
      if (person.name.includes("s") || person.name.includes("S")) {
        final.push(person.name);
      }
    });
  });
  return final;
}

// Output should be
// ["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "Stannis Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn"]

function nameWithA() {
  const final = [];
  got.houses.forEach((house) => {
    house.people.forEach((person) => {
      if (person.name.includes("a") || person.name.includes("A")) {
        final.push(person.name);
      }
    });
  });
  return final;
}

// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon", "Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Yara Greyjoy", "Margaery Baratheon", "Loras Tyrell", "Catelyn Stark", "Lysa Arryn", "Olenna Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

function surnameWithS() {
  const final = [];
  got.houses.forEach((house) => {
    house.people.forEach((person) => {
      const parts = person.name.split(" ");
      const surname = parts[parts.length - 1];
      if (surname.startsWith("S")) {
        final.push(person.name);
      }
    });
  });
  return final;
}

// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow", "Catelyn Stark"]

function surnameWithA() {
  const final = [];
  got.houses.forEach((house) => {
    house.people.forEach((person) => {
      const parts = person.name.split(" ");
      const surname = parts[parts.length - 1];
      if (surname.startsWith("A")) {
        final.push(person.name);
      }
    });
  });
  return final;
}

// Output should be
// ["Lysa Arryn", "Jon Arryn"]

function peopleNameOfAllHouses() {
  const finalObj = {};
  got.houses.forEach((house) => {
    const peopleNames = house.people.map((person) => person.name);
    finalObj[house.name] = peopleNames;
  });
  return finalObj;
}

// Output should be
// {Arryns: ["Jon Arryn"], Baratheons: ["Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon"], Dothrakis: ["Khal Drogo"], Freys: ["Walder Frey"], Greyjoys: ["Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy"], Lannisters: ["Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon"], Redwyne: ["Olenna Tyrell"], Starks: ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow"], Targaryens: ["Daenerys Targaryen", "Viserys Targaryen"], Tullys: ["Catelyn Stark", "Lysa Arryn", "Edmure Tully", "Brynden Tully"], Tyrells: ["Margaery Baratheon", "Loras Tyrell"]}

let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   move: function () { return Math.floor(Math.random() * 11) }

};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   move: function () { return Math.floor(Math.random() * 11) }

};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   move: function () { return Math.floor(Math.random() * 11) }

};

let bestBoy = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   move: function () { return Math.floor(Math.random() * 11) }

};

let microBear = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   move: function () { return Math.floor(Math.random() * 11) }

};

let crew = [superChimpOne, salamander, superChimpTwo, bestBoy, microBear];


// After you have created the other object literals, add the astronautID property to each one.

function assignAstronautID(crewMember) {
   let listOfIDs = []
   for (let i = 0; i < crew.length; i++) {
      listOfIDs.push(i)
   }
   for (crewMember in crew) {
      crew[crewMember]["astronautID"] = listOfIDs[0];
      listOfIDs.shift();
   } return
}

assignAstronautID(crew);

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

function crewReports(crewMember) {
   for (let i = 0; i < crew.length; i++) {
      console.log(`${crew[i]["name"]} is a ${crew[i]["species"]}. They are ${crew[i]["age"]} years old and weigh ${crew[i]["mass"]} kilograms. Their ID is ${crew[i]["astronautID"]}.`)
   } return
}

// crewReports(crew);
// Start an animal race!


function fitnessTest(crew) {
   let fitnessTestResults = [];
   for (let i = 0; i < crew.length; i++) {
      let movement = 0
      let turns = 0
      while (movement < 20) {
         movement = movement + crew[i]["move"]();
         turns = turns + 1;
      }
      fitnessTestResults.push(`${crew[i]["name"]} took ${turns} to take 20 steps.`);
   }
   return console.log(fitnessTestResults);
}

fitnessTest(crew);
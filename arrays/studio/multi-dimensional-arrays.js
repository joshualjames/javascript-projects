let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.

let foodCabinet = food.split(",").sort();
let equipmentCabinet = equipment.split(",").sort();
let petsCabinet = pets.split(",").sort();
let sleepAidsCabinet = sleepAids.split(",").sort();
console.log(sleepAidsCabinet);

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.

let cargoHold = [];
cargoHold.push(foodCabinet);
cargoHold.push(equipmentCabinet);
cargoHold.push(petsCabinet); 
cargoHold.push(sleepAidsCabinet);
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.

const input = require('readline-sync');
let cabinetSelection = input.question("Open one of the cabinets (0-3) ");

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
// console.log(typeof cabinetSelection);
if (cabinetSelection === "0") {
    console.log(`You found ${cargoHold[0]} in the cabinet.`);
} else if  (cabinetSelection === "1") {
    console.log(`You found ${cargoHold[1]} in the cabinet.`);
} else if (cabinetSelection === "2"){
console.log(`You found ${cargoHold[2]} in the cabinet.`);
} else if (cabinetSelection === "3"){
console.log(`You found ${cargoHold[3]} in the cabinet.`);
} else {
    console.log("Error. Not a valid cabinet selection.");
}


//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item,
// then print “Cabinet ____ DOES / DOES NOT contain ____.”


let itemWanted = input.question("What item are you looking for? ");

if (cargoHold[cabinetSelection].includes(itemWanted.toLowerCase())) {
    console.log(`Cabinet ${cabinetSelection} DOES contain ${itemWanted.toLowerCase()}!`);
} else {
    console.log(`Cabinet ${cabinetSelection} DOES NOT contain ${itemWanted.toLowerCase()}.`);
}

// Declare and assign the variables below

const shuttle = "Determination";
const speed = Number(17500);
const marsDistKm = Number(225000000)
const moonDistKm = Number(394400)
const miPerKm = Number(.621)

// Use console.log to print the 'typeof' each variable. Print one item per line.

console.log(typeof shuttle)
console.log(typeof speed)
console.log(typeof marsDistKm)
console.log(typeof moonDistKm)
console.log(typeof miPerKm)

// Calculate a space mission below

let marsDistMi = (marsDistKm * miPerKm)

let hrsToMars = marsDistMi / speed

let daysToMars = hrsToMars / 24 

// Print the results of the space mission calculations below

console.log(shuttle + " will take " + daysToMars + " days to reach Mars")

// Calculate a trip to the moon below

let moonDistMi = moonDistKm * miPerKm
let hrsToMoon = moonDistMi / speed
let daysToMoon = hrsToMoon / 24

// Print the results of the trip to the moon below

console.log(shuttle + " will take " + daysToMoon + " days to reach the moon")












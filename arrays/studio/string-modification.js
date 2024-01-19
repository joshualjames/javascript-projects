const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let count = input.question("How many characters will be relocated? ")



//Use a template literal to print the original and modified string in a descriptive phrase.



//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.



//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. 
//Also, the template literal should note the error.

if (count <= 9) {
    let newStr = str.slice(count).concat(str.slice(0, count));
    console.log(`The original string was '${str},' while the modified string was '${newStr}.'`);
} else {
    let newStr = str.slice(3).concat(str.slice(0, 3));
    console.log(`Input error. Input is greater than the number of characters in '${str}'. Only 3 characters were moved to create '${newStr}.'`);
}
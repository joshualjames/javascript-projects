function randomSelection(arr){
   let index = Math.floor(Math.random()*arr.length);
   return arr[index];
 }
 
 let happiness = ['Hope', 'Joy', 'Peace', 'Love', 'Kindness', 'Puppies', 'Kittens', 'Tortoise'];
 
 let words = ['Hello', 'World', 'Python', 'JavaScript', 'Rutabaga'];
let arrayOptions = [happiness, words];
let chosenArray = randomSelection(arrayOptions)
for (i = 0; i < 2; i++){
  console.log(randomSelection(chosenArray));
 }
let randomItems = [];
for (i = 0; i < arrayOptions.length; i++){
  randomItems.push(randomSelection(arrayOptions[i]));
} return console.log(randomItems)
 //Experiment with the code above. Try to:
 //a) Print 3 random selections from each array.
 //b) Have the code randomly pick one array, and then print 2 random items from it.
 //c) Create a new array, then fill it with one random item from words and happiness. Print the new array.
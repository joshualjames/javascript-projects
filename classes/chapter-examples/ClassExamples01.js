//Try adding new properties inside constructor.
class Astronaut {
   constructor(name, age, mass, favoriteFood = "pizza"){
     this.name = name;
     this.age = age;
     this.mass = mass;
     this.favoriteFood = favoriteFood;
   }
}

let fox = new Astronaut('Fox', 7, 12);

console.log(fox);
console.log(fox.age, fox.color);

fox.age = 9;
fox.color = 'red';

console.log(fox);
console.log(fox.age, fox.color);

//Try modifying or adding properties below.

fox.language = "English"
fox.favoriteFood = 'Cheese'
console.log(fox);
fox.age = 10;
console.log(fox.age);

let redPanda = new Astronaut('Red Panda', 3);
console.log(redPanda);
console.log(typeof (redPanda.age));

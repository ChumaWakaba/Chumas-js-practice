// snippet 3
let dog = {
    name: "Manny",
    age: 5,
    breed: "pug",
    color: "fawn",
    favoriteFoods: ["bacon"],
  };
  
  console.log(dog.age); //5
  console.log(dog.breed); //pug
  console.log(dog.favoriteFoods); //["bacon"]
  
  dog.age++;
  dog.breed = dog.breed.toUpperCase();
  dog.favoriteFoods.push("sausage");
  
  console.log(dog.age); //6
  console.log(dog.breed); //PUG
  console.log(dog.favoriteFoods); //["bacon", "sausage"]
  
  for (let property in dog) {
    console.log(property + " is " + dog[property]);
    //name is Manny
    //age is 6
    //breed is PUG
    //color is fawn
    //favoriteFoods is bacon, sausage
  }
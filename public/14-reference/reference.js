// reference vs copy
let age = 100;
// creates copy of object;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);
age2++;
console.log(age, age2);
age2 = 100;
age = 101;
console.log(age === age2);

let name = "jiri";
let name2 = name;
console.log(name, name2);
console.log(name === name2);

// array updates <- if array = array <- results in passing reference
const players = ["wizard", "archer", "nun", "priest", "warrior"];
const persons = players;
console.log("players are persons?", players === persons);
players[0] = "jiri";
console.log(players === persons, players, persons);

// Creating copy of array
const team2 = players.slice();

//or -> result is same
const team = [].concat(players);

//or ES6 way <-with 'spread' <- takes every iterable and copies it into new array
const team1 = [...players];

//or...->
const team5 = Array.from(players);

team2[2] = "petr";
console.log("Players:", players, "Persons: ", persons, "Team: ", team2);

// OBJECTS <- object = object <- passes reference
const person = {
  name: "jiri",
  age: 25,
};
// changes same object
const captain = person;
const nice = captain;
captain.let = "nice";
nice.name = "bullshit";
console.log(captain, nice, captain === nice);

//Copying object: <- assign function
const man = Object.assign({}, person, { name: "Man" });

const cap3 = { ...person };
// cap3 != person <- 'cap3' is whole new object
console.log(captain, man, "cap#: ", cap3 === person, cap3, man === nice);

//  for more levels of object
// json parse creates json object from json string
const capDev = JSON.parse(JSON.stringify(person));

const people = [
  { name: "Wes", year: 1998 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];
const comments = [
  { text: "Best teacher is Richard Feynman", id: 2 },
  { text: "I agree", id: 32 },
  { text: "Whatever", id: 239102 },
  { text: "Nice ramen noodles", id: 3823 },
];
const currentYear = new Date().getFullYear();

//TODO1: Some and Every checks for 'person' array:
const isAdult = people.some((person) => {
  return currentYear - person.year > 19;
});

const everybodyAdult = people.every((person) => {
  return currentYear - person.year > 19;
});
// logs results
console.log({ isAdult }, { everybodyAdult });

// TODO2: find and findIndex
// Searches array and returns first occurence which is valid
const found = comments.find((comment) => comment.text.includes("ra"));

// Searches given array and returns position of first result in array
const foundIndex = comments.findIndex((comment) => {
  if (comment.text.includes("ra")) {
    return comment;
  }
});

// Results without 'foundIndex' result
const result = comments.splice(foundIndex, 1);
//or
// const newComments = [...comments.slice(0,index),...comments.slice(index+1)]
console.log(found, foundIndex);

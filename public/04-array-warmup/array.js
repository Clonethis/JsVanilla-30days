// Has access to data streams 'inventors' and 'people'

// selects all 'p' in document to show resulted data
const $pArray = document.querySelectorAll("p");

// Todo1: First task: <- find inventors that are in 1500's
const fifteen = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);

$pArray[0].innerHTML = fifteen
  .map((human) => {
    return `<div class="name"><div class="first">${human.first} </div><div class="last"> ${human.last}</div></div>`;
  })
  .join(" ");

// TODO:2 Give array of the first and last name of inventors <-map
$pArray[1].innerHTML = inventors
  .map((human) => {
    return `<div class="name"><div class="first">${human.first} </div><div class="last"> ${human.last}</div></div>`;
  })
  .join(" ");

// TODO:3 Sort Inventors by birthdate, oldest to youngest <- sort
$pArray[2].innerHTML = inventors
  .sort((firstHuman, secondHuman) => {
    console.log("year: " + firstHuman.year + " yearNext: " + secondHuman.year);
    return firstHuman.year - secondHuman.year;
  })
  .map((human) => {
    return `<div class="name"><div class="first">${human.year}: ${human.first} </div><div class="last"> ${human.last}</div></div>`;
  })
  .join(" ");

// Also valid:
// $pArray[2].innerHTML = inventors
//   .sort((a,b) =>{
//     a.year>b.year ? 1 : -1;
//   });

// TODO 4: How many years did all the inventors live? <-reduce
$pArray[3].innerHTML = inventors
  .map((human) => {
    return `<div class="name"><div class="first">${
      human.first
    } </div><div class="last"> ${human.last}</div> <div class="age">: ${
      human.passed - human.year
    } years</div></div>`;
  })
  .join(" ");

let age = inventors.reduce((a, b) => {
  return a + (b.passed - b.year);
}, 0);

// console.log("age"+age);
$pArray[3].insertAdjacentHTML(
  "beforeend",
  `<p>All inventors age together: ${age}</p>`
);

// TODO 5: Sort the inventors by years lived
$pArray[4].innerHTML = inventors
  .sort((a, b) => {
    // console.log("b: " + b.passed + " ayear: " + a.year);
    return b.passed - b.year - (a.passed - a.year);
  })
  .map((human) => {
    return `<div class="name"><div class="first">${
      human.first
    } </div><div class="last"> ${human.last}</div> <div class="age">: ${
      human.passed - human.year
    } years</div></div>`;
  })
  .join(" ");

// Todo 6: write other TODO'S

// Todo 7 : Write out table of boulevard in Paris having 'de' anywhere in the name:
// Trying to fetch data from outside source
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// START of Doesn't work due to CORS error
// const invocation = new XMLHttpRequest();

// const url = "https://bar.other/resources/credentialed-content/";

// function callOtherDomain() {
//   if (invocation) {
//     invocation.open("GET", url, true);
//     invocation.withCredentials = true;
//     invocation.onreadystatechange = someHandler;
//     invocation.send();
//   }
// }

// function someHandler(event){
//   console.log(event)
// }
// fetch(url).then(data=>{return data.text}).then(res=>{console.log("res"+res)});
// document.querySelectorAll(".mw-category-group li a");
// END of not running code

// Todo 8: Sort people alphabetically
// START My approach
let men = new Array();
people.forEach((man) => {
  men.push(man.split(", ")[1]);
});
const sorted = men.sort((a, b) => {
  const differenceInLength = Math.min(a.length, b.length);
  const comparingArray = [];

  for (let i = 0; i < differenceInLength; i++) {
    comparingArray.push(a[i].charCodeAt() - b[i].charCodeAt());
  }

  // to sort all remaining letters
  for (let i = 0; i < a.length; i++) {
    if (comparingArray[i] > 0) {
      return 1;
    } else if (comparingArray[i] < 0) {
      return -1;
    }
  }
});
// END my approach
const alpha = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(", ");
  const [bLast, bFirst] = nextOne.split(", ");
  return aLast > bLast ? 1 : -1;
});

// Todo 9: Sum/count up instances of each of these things from array below
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "pogo stick",
  "truck",
];

const transportation = data.reduce(function (obj, item) {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});
console.log(transportation);
// car: 0,
//   walk: 0,
//   truck: 0,
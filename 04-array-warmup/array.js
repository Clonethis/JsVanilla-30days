const $pArray = document.querySelectorAll("p");
console.log($pArray);
const fifteen = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);
// First task: <- find inventors that are in 1500's
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

  let age = inventors.reduce((a,b)=>{
    return a + (b.passed - b.year);
  },0);

  // console.log("age"+age);
  $pArray[3].insertAdjacentHTML("beforeend",`<p>All inventors age together: ${age}</p>`);

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
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
const Http = new XMLHttpRequest();
const url = 'https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris';
Http.open("GET",url);
Http.send();
Http.onreadystatechange = function(){
  if(this.readyState==4&& this.status==200){
    console.log(Http.responseText);
  }else{
    console.log(this.status);
  }
}

fetch(url).then(data=>{return data.text}).then(res=>{console.log("res"+res)});

document.querySelectorAll(".mw-category-group li a");
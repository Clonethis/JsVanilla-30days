// TODO1: fetch data
const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const prom = fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));

// TODO2: put into array <- spread operator '...'
const cities = [];
const $searchInput = document.querySelector(".search");
const $suggestion = document.getElementsByClassName("suggestion")[0];
$searchInput.addEventListener("change", displayMatches);
$searchInput.addEventListener("keyup", displayMatches);

// formates number
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

// Applies regex on cities to search. Returns cities that comply with 'wordToMatch'
function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    // TODO3: figuring out if 'wordToMatch' matches 'place'
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

// highlihts wanted regex string
function highlight(itself, string, regex) {
  return string.replace(regex, `<div class="hl">${itself.value}</div>`);
}

//Display results in DOM
function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  let basicText = "";
  const regex = new RegExp(this.value, "gi");

  $suggestion.innerHTML = "";

  matchArray.forEach((match) => {
    const cityName = highlight(this, match.city, regex);
    const stateName = highlight(this, match.state, regex);
    basicText += `<li><div class="city">${cityName}, ${stateName}</div><div class="population">${numberWithCommas(
      match.population
    )}</div></li>`;
  });
  $suggestion.innerHTML = basicText;
}

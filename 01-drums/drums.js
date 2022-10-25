// jLog("nice");
// var Keys = {
//     'a':1,
//     'o':2,
//     'e':3,
//     'u':4,
//     'i':5,
//     'd':6,
//     'h':7,
//     't':8,
//     'n':9,
//     's':10
// }
var Keys = {
  a: 1,
  o: 2,
  e: 3,
  u: 4,
  i: 5,
  d: 6,
  h: 7,
  t: 8,
  n: 9,
  s: 10,
};
var audioPlaylist = new Array(
  "./materials/music/1.mp3",
  "./materials/music/2.mp3",
  "./materials/music/3.mp3",
  "./materials/music/4.mp3",
  "./materials/music/5.mp3",
  "./materials/music/6.mp3",
  "./materials/music/7.mp3",
  "./materials/music/8.mp3",
  "./materials/music/9.mp3",
  "./materials/music/10.mp3"
);
const testFolder = "./materials/music";

document.addEventListener("keydown", (event) => {
  onKeyActive(event.key);
});

var $drums = document.getElementsByClassName("drums")[0];
// var timeOfTrack = 300;

$drums.addEventListener(
  "click",
  (event) => {
    setActive(event.target);
  },
  true
);
$drums.forEach((key) => key.addEventListener, "transitioned", removeTransition);

function setActiveOnClick(domElement) {
  console.log(domElement);
  domElement.classList.add("active");
  //   setTimeout(() => {
  //     domElement.classList.remove("active");
  //   }, timeOfTrack);
}
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("active");
}
function onKeyActive(key) {
  key = key.toLowerCase();
  console.log("nice:" + Keys[key]);
  if (Keys[key] === undefined) {
    console.log("Try key from key, row");
  } else {
    console.log($drums.children.item(Keys[key] - 1));
    var el = $drums.children.item(Keys[key] - 1);
    var sound = new Audio(audioPlaylist[Keys[key] - 1]);
    sound.currentTime = 0;
    sound.play();

    el.classList.add("active");
    setTimeout(() => {
      el.classList.remove("active");
    }, 500);
  }
}

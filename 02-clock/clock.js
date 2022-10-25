var $secondHand = document.querySelector(".second-hand");
var $minuteHand = document.querySelector(".min-hand");
var $hourHand = document.querySelector(".hour-hand");

var $hands = document.getElementsByClassName("hand");

// moves hands in clock.html
function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secDeg = (seconds % 60) * (360 / 60) + 90;
  const minDeg = (minutes / 60) * 360 + 90;
  const hoursDeg = (hours / 12) * 360 + 90;
  $secondHand.style.transform = `rotate(${secDeg}deg)`;
  $minuteHand.style.transform = `rotate(${minDeg}deg)`;
  $hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}
// My function <- missing real time check and other hands movement
// function rotate(hand) {
//   console.log(hand);
//   var rotation = 0;
//   setInterval(() => {
//     hand.style.transform = `rotate(${rotation}deg)`;
//     rotation += 10;
//   }, 1000);
// }
// rotate($secondHand);
// rotate($hands[2]);
setInterval(setDate, 1000);

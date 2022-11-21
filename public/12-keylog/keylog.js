const keys = [];
const secretCode = "jirka";
const reverseCode = "close";
window.addEventListener("keyup", (e) => {
  keys.push(e.key);
  keys.splice(-secretCode.length - 1, keys.length - secretCode.length);
  if (keys.join("") === secretCode) {
    console.log("guessed Right");
    document.getElementsByTagName("body")[0].className = "secret";
  }
  if (keys.join("") === reverseCode) {
    document.getElementsByTagName("body")[0].className = "";
  }
  console.log(e.key);
});

const checkboxes = document.querySelectorAll(
  '.todo-list input[type="checkbox"]'
);
let lastChecked = undefined;

function handleCheck(e) {
  // reference to last checked checkbox
  //if 'shift' key is pressed down
  // and check they are checking it
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // go ahead
    //loop over every single checkbox
    checkboxes.forEach((checkbox) => {
      if (checkbox == this || checkbox == lastChecked) {
        inBetween = !inBetween;
        checkbox.parentElement.className = "todo finished";
        checkbox.checked = true;
      }
      if (inBetween) {
        checkbox.checked = true;
        checkbox.parentElement.className = "todo finished";
      }
      //   if (inBetween && !checkbox.checked) {
      //     checkbox.checked = true;
      //   }
      //   if (checkbox.checked) {
      //     console.log("inBetween2" + inBetween);
      //     checkbox.checked = true;
      //     if (inBetween) {
      //       checkbox.checked = true;
      //       inBetween = false;
      //     }
    });
  }
  lastChecked = this;
}
checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);

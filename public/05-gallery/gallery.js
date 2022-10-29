const $panels = document.querySelectorAll(".panel");
$panels.forEach((panel) => {
  console.log(panel);
  panel.addEventListener("mouseover", addClass);
  panel.addEventListener("click", addClassOpen);

  panel.addEventListener("mouseout", removeClass);
});

function addClass() {
  console.log(this);
  this.classList.add("open-active");
}
function addClassOpen() {
  console.log(this);
  this.classList.add("open");
}

function removeClass() {
  this.classList.remove("open-active");
  this.classList.remove("open");
}

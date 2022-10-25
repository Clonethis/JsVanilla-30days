// must be querySelector <- creates Node List at that is really useful
const $inputs = document.querySelectorAll(".controls input");
console.log($inputs);

function handleUpdate() {
  console.log(this.value);

  // equals data suffix from html 'data-sizing' parameter
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

$inputs.forEach((input) => {
  // runs 'handleUpdate' function
  input.addEventListener("change", handleUpdate);
  input.addEventListener("mousemove", handleUpdate);
});

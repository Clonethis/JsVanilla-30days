const canvas = document.querySelector("#draw");
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));

//ctx <- canvas with context
const ctx = canvas.getContext("2d");
ctx.lineWidth = 10;
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.scale(1.1, 1.1);
ctx.globalCompositeOperation = "lighter";

// canvas settings
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// mouse and painting setup
let lastX = 0;
let lastY = 0;
let hue = 0;
let isDrawing = false;
let direction = true;

function draw(e) {
  if (!isDrawing) return; //stops

  // start from
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  //go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  // reassign variables
  [lastX, lastY] = [e.offsetX, e.offsetY];
  ctx.strokeStyle = `hsl(${hue},100%,50%)`;
  hue++;

  if (hue >= 360) {
    hue = 0;
  }

  if (ctx.lineWidth >= 70 || ctx.lineWidth <= 9) {
    direction = !direction;
  }
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

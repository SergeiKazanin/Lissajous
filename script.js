const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const canvasWidth = 700;
const canvasHeight = 700;
let t = 0;
const scaleX = 50;
const scaleY = 50;
const xAxis = Math.round(canvasWidth / scaleX / 2) * scaleX;
const yAxis = Math.round(canvasHeight / scaleY / 2) * scaleY;

window.onload = () => {
  setInterval(plot, 20);
};

function plot() {
  ctx.font = `${Math.round(scaleX / 2)}px Arial`;
  ctx.beginPath();
  ctx.strokeStyle = "#f5f0e8";

  ctx.fillStyle = "#ead9ce";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  ctx.fillStyle = "#000000";
  for (let i = 0; i < canvasWidth; i = i + scaleX) {
    ctx.moveTo(i, 0);
    ctx.lineTo(i, canvasHeight);
  }
  ctx.stroke();

  for (let i = 0; i < canvasHeight; i = i + scaleY) {
    ctx.moveTo(0, i);
    ctx.lineTo(canvasWidth, i);
  }
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.strokeStyle = "#000000";
  ctx.moveTo(xAxis, 0);
  ctx.lineTo(xAxis, canvasHeight);

  ctx.moveTo(0, yAxis);
  ctx.lineTo(canvasWidth, yAxis);

  ctx.stroke();
  ctx.closePath();

  t = t + 0.001;
  if (Math.floor(t) === 3) t = 0;
  console.log(t);

  for (let i = 0; i < canvasWidth; i = i + 0.2) {
    const x = Math.sin((i - xAxis) / scaleX);
    const y = Math.sin(((i - xAxis) / scaleX) * t);

    ctx.fillRect(
      (x * scaleX * canvasWidth) / scaleX / 2.3 + xAxis,
      yAxis - (scaleY * y * canvasHeight) / scaleY / 2.3,
      2,
      2
    );
  }
}

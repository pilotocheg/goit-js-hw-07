const button = document.querySelector("button.change-color");
const colorText = document.querySelector("span.color");
const body = document.querySelector("body");

button.addEventListener("click", (e) => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorText.textContent = color;
  console.log(color);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

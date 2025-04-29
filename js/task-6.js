const boxesCreateButton = document.querySelector(
  "#controls button[data-create]"
);
const boxesDestroyButton = document.querySelector(
  "#controls button[data-destroy]"
);
const boxesInput = document.querySelector("#controls input");
const boxesContainer = document.querySelector("#boxes");

function createBoxes() {
  const amount = Number(boxesInput.value);

  if (amount <= 0 || amount > 100) {
    return;
  }

  let size = 30;
  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const color = getRandomHexColor();

    boxes.push(
      `<div class="box" style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`
    );

    size += 10;
  }

  boxesContainer.innerHTML = boxes.join("");
  boxesInput.value = "";
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

boxesCreateButton.addEventListener("click", createBoxes);
boxesDestroyButton.addEventListener("click", destroyBoxes);

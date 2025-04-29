const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
const defaultName = nameOutput.textContent;

nameInput.addEventListener("input", (e) => {
  const name = e.currentTarget.value.trim();
  nameOutput.textContent = name || defaultName;
});

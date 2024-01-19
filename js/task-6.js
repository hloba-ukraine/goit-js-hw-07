function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputElement = document.querySelector("#controls > input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxDiv = document.querySelector("#boxes");

function destroyBoxes() {
  boxDiv.innerHTML = "";
}
btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  boxDiv.innerHTML = "";
  let startSize = 30;
  const step = 10;
  const divArray = [];

  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement("div");
    newDiv.style.width = `${startSize}px`;
    newDiv.style.height = `${startSize}px`;
    newDiv.style.backgroundColor = getRandomHexColor();

    divArray.push(newDiv);
    startSize += step;
  }
  boxDiv.append(...divArray);
}

btnCreate.addEventListener("click", () => {
  const amountBoxes = parseInt(inputElement.value);
  if (amountBoxes >= 1 && amountBoxes <= 100) {
    createBoxes(amountBoxes);
  }
});

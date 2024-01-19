const input = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
input.addEventListener("input", onInputChange);

function onInputChange(event) {
  const trimmedInput = event.currentTarget.value.trim();
  nameOutput.textContent = trimmedInput !== "" ? trimmedInput : "Анонімний";
}

const cant = document.querySelector('input[type = "number"]');
const boton_crear = document.querySelector('[data-create]');
const boton_destr = document.querySelector('[data-destroy]');
const div = document.querySelector("#boxes");

boton_crear.addEventListener("click", () => {
 
  createBoxes(cant.value);

})

function createBoxes(qty) {

  let widthsize = 30;

  for (let i = 0; i < qty; i++) {
    const newBox = document.createElement("div");
    const newBoxId = i;

    div.append(newBox);

    newBox.style.width = widthsize + "px";
    newBox.style.height = widthsize + "px";
    newBox.style.backgroundColor = getRandomHexColor();
    newBox.textContent = i + 1;
    newBox.style.margin = "0 auto";
    newBox.style.display = "flex";
    newBox.style.justifyContent = "center";
    newBox.style.alignItems = "center";

    widthsize += 10;

  }

  cant.value = "";

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

boton_destr.addEventListener('click', () => {
  div.innerHTML = '';
})

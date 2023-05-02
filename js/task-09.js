const boton = document.querySelector(".change-color");
const cuerpo = document.querySelector("body");
const texto = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

boton.addEventListener("click", () => {

  const alea = getRandomHexColor();

  cuerpo.style.backgroundColor = alea; 

  texto.textContent = alea;

});

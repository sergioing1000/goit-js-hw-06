const tamano = document.querySelector("#font-size-control");
const texto = document.querySelector("#text");

tamano.addEventListener("input", () => {
  texto.style.fontSize = `${tamano.value}px`;

});



const entrada = document.getElementById("validation-input");


entrada.addEventListener("blur", () => {

  console.log(entrada.value.length);
  
  if (entrada.value.length === 6) {
    entrada.classList.add("valid");
  }
  else {
    entrada.classList.add("invalid");
  }
});
const formu = document.querySelector("form.login-form");

formu.addEventListener("submit", (event) => {

  event.preventDefault();

  const elementoform = event.currentTarget.elements;
  const correo = elementoform.email.value;
  const clave = elementoform.password.value;

  if (correo === "" || clave === "") {
    alert("Todos los espacios deben ser rellenados.");
    formu.reset();
  }

  console.log(correo);
  console.log(clave);

  formu.reset();
})
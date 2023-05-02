const increm = document.querySelector('[data-action="increment"]');
const decrem = document.querySelector('[data-action="decrement"]');

const valor = document.querySelector("#value");

let counterValue = 0;
let intervalId = null;
let cont1 = 0;
let steps = 1;
let time = 200; 

increm.addEventListener("mousedown", function (event) {

  counterValue = counterValue + steps;
  valor.textContent = counterValue;


  cont1 = 0;


  intervalId = setInterval(function () {


    if (cont1 > 9 && steps === 1) {
      steps = 10;
      cont1 = 0;
      time = 300;
    }

    else if (cont1 > 9 && steps === 10) {
      steps = 100;
      cont1 = 0;
      time = 500;
    }

    else if (cont1 > 9 && steps === 100) {
      steps = 1000;
      cont1 = 0;
      time = 800;
    }

    counterValue = counterValue + steps;
    valor.textContent = counterValue;
    cont1++;

  }, time);

  cont1 = 0;
  steps = 1;
  time = 200; 

});

increm.addEventListener("mouseup", function (event) {
  clearInterval(intervalId);
  intervalId = null;

  cont1 = 0;
  steps = 1;
  time = 200;

});

////////////////////////////////////////////////////////////

decrem.addEventListener("mousedown", function (event) {

  counterValue = counterValue - steps;
  valor.textContent = counterValue;


  cont1 = 0;


  intervalId = setInterval(function () {


    if (cont1 > 9 && steps === 1) {
      steps = 10;
      cont1 = 0;
      time = 300;
    }

    else if (cont1 > 9 && steps === 10) {
      steps = 100;
      cont1 = 0;
      time = 500;
    }

    else if (cont1 > 9 && steps === 100) {
      steps = 1000;
      cont1 = 0;
      time = 1000;
    }

    counterValue = counterValue - steps;
    valor.textContent = counterValue;
    cont1++;

  }, time);

  cont1 = 0;
  steps = 1;
  time = 200;

});

decrem.addEventListener("mouseup", function (event) {
  clearInterval(intervalId);
  intervalId = null;

  cont1 = 0;
  steps = 1;
  time = 200;

});

////////////////////////////////////////////////////////////
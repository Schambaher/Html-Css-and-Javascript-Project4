document.addEventListener("DOMContentLoaded", function () {
  iniciarApp();
});

const numbers = document.querySelectorAll(".number");

function iniciarApp() {
  numeroAcendente(numbers[0]);
}

function numeroAcendente(elemento) {
  for (let i = 0; i < elemento.textContent; i++) {
    setTimeout(() => {
      console.log(i);
    }, 2000);
  }
}

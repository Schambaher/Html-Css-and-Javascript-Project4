$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 2,
    margin: 10,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      1000: {
        items: 2
      }
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {

  const menu = document.getElementById("menu");

  const navigation = document.getElementById("navigation");

  const times = document.createElement("i");
  const bars = document.createElement("i");
  times.classList.add("fas", "fa-times");
  bars.classList.add("fas", "fa-bars");

  menu.appendChild(bars);

  menu.addEventListener("click", function () {
    navigation.classList.toggle("show");

    if(menu.children[0] === bars) {
      menu.removeChild(bars);
      menu.appendChild(times);
    }
    else if (menu.children[0] === times) {
      menu.removeChild(times);
      menu.appendChild(bars);
    }

  });
  



  const contadores = document.querySelectorAll(".contador");
  const velocidad = 1000;

  const animarContadores = () => {
    for (const contador of contadores) {
      const actualizarContador = () => {
        let cantidadMaxima = parseInt(contador.dataset.cantidadTotal);
        let valorActual = parseInt(contador.innerText);
        let incremento = cantidadMaxima / velocidad;

        if(valorActual < cantidadMaxima) {
          contador.innerText = Math.ceil(valorActual + incremento);
          setTimeout(actualizarContador, 2);
        }else {
          contador.innerText = cantidadMaxima;
        }
      }
      actualizarContador();
    }
  }
  
  // IntersectionObserver

  const opciones = {
    threshold: 0.2 // va de 0-1
  }
  const mostrarContadores = elementos => {
    elementos.forEach(elemento => {
      if (elemento.isIntersecting) {
        setTimeout(animarContadores, 300);
      }
    });
  }
  const  observer = new IntersectionObserver(mostrarContadores, opciones);
  contadores.forEach(contador => {
    observer.observe(contador);
  })


});

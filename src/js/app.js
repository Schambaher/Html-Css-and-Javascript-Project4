document.addEventListener("DOMContentLoaded", function () {

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

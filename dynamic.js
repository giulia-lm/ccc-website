let contador = 0;
const slides = document.querySelector(".slides");
const total = slides.children.length;

function cambiarManual(sentido) {
  if (sentido === "DER") {
    contador = (contador + 1) % total;
  } else if (sentido === "IZQ") {
    contador = (contador - 1 + total) % total;
  }
  actualizarSlider();
}

function actualizarSlider() {
  slides.style.transform = `translateX(-${contador * 100}%)`;
}

// Automático cada 2s
setInterval(() => {
  contador = (contador + 1) % total;
  actualizarSlider();
}, 2000);

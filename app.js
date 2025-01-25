let concepto = "Esto es una prueba de codigo desde GITHUB";
function prueba(e) {
  return console.log(e);
}

prueba(concepto);

function recicledCode(el, text, css) {
  let global = document.querySelector(el);
  global.textContent = text;
  global.classList.add(".paragraph");
  global.style.color = css;
}

recicledCode(
  "p",
  "Esto es un parrafo generado desde javascript",
  "red"
);

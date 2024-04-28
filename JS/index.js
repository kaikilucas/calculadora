function calculadora(e) {
  let valor = e;
  let resultado = document.getElementById("menu");

  console.log(valor);

  if (resultado.innerHTML === "0") {
    resultado.innerHTML = valor;
  } else {
    resultado.innerHTML += valor;
  }

  if (valor === 457) {
    resultado.innerHTML = 0;
  }
}

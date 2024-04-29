function calculadora(nome) {
  let valor = nome;

  let resultado = parseInt(document.getElementById("menu"));

  if (resultado.value == "0") {
    resultado.value = valor;
  } else {
    resultado.value += valor;
  }

  let final = resultado.value;
  console.log(final);
  if (valor == 999) {
  }

  if (valor == "AC") {
    let AC = null;
    resultado.value = 0;
  }
}
